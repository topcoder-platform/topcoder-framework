import { Request, Response, NextFunction } from "express";
import {
  Jwt,
  JwtPayload,
  Secret,
  VerifyOptions,
  decode,
  verify,
} from "jsonwebtoken";
import JwksRSA, { JwksClient, SigningKey } from "jwks-rsa";
import _ from "lodash";
import { UnauthorizedError } from "./UnauthorizedError";

const jwksClients: { [iss: string]: JwksClient } = {};

/**
 * A function that defines how to retrieve the verification key given the express request and the JWT.
 */
export type GetVerificationKey = (
  req: Request,
  token: Jwt | undefined
) => Secret | undefined | Promise<Secret | undefined>;

/**
 * A function to check if a token is revoked
 */
export type IsRevoked = (
  req: Request,
  token: Jwt | undefined
) => boolean | Promise<boolean>;

/**
 * A function to customize how a token is retrieved from the express request.
 */
export type TokenGetter = (
  req: Request
) => string | Promise<string> | undefined;

export type AuthOptions = {
  method?: AuthMethod;
  secret?: Secret | GetVerificationKey;
  algorithms?: Algorithm[];
  /**
   * If you set it to false, the system will proceed to the next middleware
   * if the request does not include a token, without causing an error.
   * @defaultValue `true`
   *
   */
  credentialsRequired?: boolean;
  jwtKeyCacheTimeInHours?: number;
  /**
   * This feature allows you to personalize the name of the property
   * in the request object where the decoded payload is stored.
   * @defaultValue `authUser`
   */
  requestProperty?: string;
  getToken?: TokenGetter;
  isRevoked?: IsRevoked;
  claimScope: string;
} & Required<Pick<VerifyOptions, "issuer">> &
  Pick<VerifyOptions, "audience">;

export enum AuthMethod {
  "Bearer" = 1,
}

export type Algorithm = RSA | HSA;

type HSA = "HS256" | "HS384" | "HS512";
type RSA = "RS256" | "RS384" | "RS512";

export type ExpressAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  permissions?: Permissions
) => Promise<void>;

export type Permissions = {
  allowedRoles?: string[];
  allowedScopes?: string[];
};

export const authenticator = (options: AuthOptions): ExpressAuthMiddleware => {
  const method: AuthMethod = validateAndGetMethod(options.method);
  const algorithms = validateAndGetAlgorithms(options.algorithms);
  const issuers = validateAndGetIssuers(options.issuer);
  const secretGetter = validateAndGetSecret(options.secret);
  if (_.some(algorithms, isHSA) && _.isUndefined(secretGetter)) {
    throw new RangeError("lib-auth: secret is required when algorithm is HSA");
  }
  const tokenGetter: TokenGetter = validateAndGetTokenGetter(
    method,
    options.getToken
  );
  const credentialsRequired = _.defaultTo(options.credentialsRequired, true);
  const jwtKeyCacheTimeInHours = validateAndGetCacheTime(
    options.jwtKeyCacheTimeInHours
  );
  const requestProperty = validateAndGetRequestProperty(
    options.requestProperty
  );
  const claimScope = _.toString(options.claimScope);

  const middleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
    permissions?: Permissions
  ) => {
    try {
      const token = await tokenGetter(req);
      if (!token) {
        throw new UnauthorizedError("No authorization token was found");
      }
      const decodedToken = decode(token, { complete: true });
      if (decodedToken === null || typeof decodedToken.payload == "string") {
        throw new UnauthorizedError("Invalid Token");
      }
      const algorithm = decodedToken.header.alg;
      if (!_.includes(algorithms, algorithm)) {
        throw new UnauthorizedError("Invalid Algorithm");
      }
      if (isHSA(algorithm)) {
        await verifyHSAToken(
          req,
          token,
          decodedToken,
          [algorithm],
          options.audience,
          secretGetter
        );
      } else if (isRSA(algorithm)) {
        await verifyRSAToken(
          token,
          decodedToken,
          jwtKeyCacheTimeInHours,
          algorithms,
          issuers,
          options.audience
        );
      } else {
        throw new UnauthorizedError("Invalid Algorithm");
      }
      if (options.isRevoked && (await options.isRevoked(req, decodedToken))) {
        throw new UnauthorizedError("The token has been revoked.");
      }
      const authProperty: AuthProperty = buildRequestProperty(
        decodedToken.payload,
        claimScope
      );
      _.set(req, requestProperty, authProperty);
      if (credentialsRequired && permissions) {
        validatePermissions(authProperty, permissions);
      }
      next();
    } catch (err) {
      if (credentialsRequired) {
        next(err);
      } else {
        next();
      }
    }
  };
  return middleware;
};

const validatePermissions = (auth: AuthProperty, permissions: Permissions) => {
  if (auth.isMachine) {
    if (permissions.allowedScopes) {
      if (
        _.some(permissions.allowedScopes, (scope) =>
          _.includes(auth.scopes, scope)
        )
      ) {
        return true;
      }
    } else {
      return true;
    }
  } else {
    if (permissions.allowedRoles) {
      if (
        _.some(permissions.allowedRoles, (role) => _.includes(auth.roles, role))
      ) {
        return true;
      }
    } else {
      return true;
    }
  }
  throw new UnauthorizedError("");
};

const verifyHSAToken = async (
  req: Request,
  token: string,
  decodedToken: Jwt,
  algorithms: Algorithm[],
  audience?: string | RegExp | (string | RegExp)[],
  secretGetter?: GetVerificationKey
) => {
  let secret;
  if (secretGetter !== undefined) {
    secret = await secretGetter(req, decodedToken);
  }
  if (secret === undefined) {
    throw new UnauthorizedError("");
  }
  try {
    verify(token, secret, {
      audience,
      algorithms,
    });
  } catch {
    throw new UnauthorizedError("");
  }
};

const verifyRSAToken = async (
  token: string,
  decodedToken: Jwt,
  cacheTime: number,
  algorithms: Algorithm[],
  validIsuers: string[],
  audience?: string | RegExp | (string | RegExp)[]
) => {
  const key = await getRSAKey(decodedToken, cacheTime, validIsuers);
  try {
    verify(token, key, {
      audience,
      algorithms,
    });
  } catch {
    throw new UnauthorizedError("");
  }
};

type AuthProperty = {
  userId?: string;
  handle?: string;
  roles?: string[];
  email?: string;
  isMachine: boolean;
  scopes?: string[];
};

const buildRequestProperty = (
  token: JwtPayload,
  claimScope: string
): AuthProperty => {
  const payload: AuthProperty = {
    userId: token[claimScope + "/userId"],
    handle: token[claimScope + "/handle"],
    roles: token[claimScope + "/roles"],
    email: token.email ?? token[claimScope + "/email"],
    isMachine: token.gty === "client-credentials",
  };
  if (payload.isMachine) {
    const scopes = token[claimScope + "/scope"];
    if (typeof scopes === "string") {
      payload.scopes = scopes.split(" ");
    } else if (_.isArray(scopes)) {
      payload.scopes = scopes;
    }
  }
  return payload;
};

const isValidAuthMethod = (method: unknown): method is AuthMethod =>
  _.isNumber(method) && method in AuthMethod;

const isValidAlgorithm = (algorithm: unknown): algorithm is Algorithm =>
  _.includes(["HS256", "HS384", "HS512", "RS256", "RS384", "RS512"], algorithm);

const isValidAlgorithms = (algorithms: unknown[]): algorithms is Algorithm[] =>
  _.every(algorithms, isValidAlgorithm);

const isHSA = (algorithm: unknown): algorithm is HSA =>
  _.includes(["HS256", "HS384", "HS512"], algorithm);

const isRSA = (algorithm: unknown): algorithm is RSA =>
  _.includes(["RS256", "RS384", "RS512"], algorithm);

const bearerTokenGetter = (req: Request): string | undefined => {
  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length == 2) {
      const scheme = parts[0];
      const credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        return credentials;
      }
    }
  }
};

const getRSAKey = async (
  token: Jwt,
  cacheTime: number,
  validIssuers?: string[]
) => {
  const kid = token.header.kid;
  const jwksClient = getJwksClient(token, cacheTime, validIssuers);
  let key: SigningKey;
  try {
    key = await jwksClient.getSigningKey(kid);
  } catch {
    throw new UnauthorizedError("");
  }
  return key.getPublicKey();
};

const hasIss = (
  payload: string | JwtPayload
): payload is JwtPayload & { iss: string } => {
  return typeof payload === "object" && payload.iss !== undefined;
};

const getJwksClient = (
  token: Jwt,
  cacheTime: number,
  validIssuers?: string[]
): JwksClient => {
  if (!hasIss(token.payload)) {
    throw new UnauthorizedError("");
  }
  if (validIssuers && !_.includes(validIssuers, token.payload.iss)) {
    throw new UnauthorizedError("Invalid token issuer.");
  }
  const iss = token.payload.iss;
  if (!jwksClients[iss]) {
    jwksClients[iss] = JwksRSA({
      cache: true,
      cacheMaxEntries: 5,
      cacheMaxAge: cacheTime * 36e5,
      jwksUri: token.payload.iss + ".well-known/jwks.json",
    });
  }
  return jwksClients[iss];
};

const validateAndGetAlgorithms = (algorithms?: unknown[]): Algorithm[] => {
  if (algorithms === undefined) {
    return ["HS256", "RS256"];
  }
  if (_.isEmpty(algorithms)) {
    throw new RangeError("");
  }
  if (!isValidAlgorithms(algorithms)) {
    throw new RangeError("");
  }
  return algorithms;
};

const validateAndGetMethod = (method?: unknown): AuthMethod => {
  if (method === undefined) {
    return AuthMethod.Bearer;
  }
  if (isValidAuthMethod(method)) {
    return method;
  } else {
    throw new RangeError("");
  }
};

const validateAndGetTokenGetter = (
  method: AuthMethod,
  getToken?: unknown
): TokenGetter => {
  if (getToken === undefined) {
    return getDefaultTokenGetter(method);
  }
  if (typeof getToken === "function") {
    return getToken as TokenGetter;
  } else {
    throw new RangeError("");
  }
};

const validateAndGetCacheTime = (cacheTime?: unknown): number => {
  if (cacheTime === undefined) {
    return 24;
  }
  if (_.isNumber(cacheTime)) {
    return cacheTime;
  } else {
    throw new RangeError("");
  }
};

const validateAndGetRequestProperty = (requestProperty?: unknown): string => {
  if (requestProperty === undefined) {
    return "authUser";
  }
  if (_.isString(requestProperty)) {
    return requestProperty;
  } else {
    throw new RangeError("");
  }
};

const validateAndGetSecret = (
  secret?: unknown
): GetVerificationKey | undefined => {
  if (secret === undefined) {
    return undefined;
  } else if (typeof secret === "function") {
    return secret as GetVerificationKey;
  } else {
    return () => secret as Secret;
  }
};

const validateAndGetIssuers = (issuer: unknown): string[] => {
  if (issuer === undefined) {
    throw new RangeError("");
  } else if (_.isString(issuer)) {
    return [issuer];
  } else if (
    _.isArray(issuer) &&
    !_.isEmpty(issuer) &&
    _.every(issuer, (iss) => _.isString(iss))
  ) {
    return issuer as string[];
  } else {
    throw new RangeError("");
  }
};

const getDefaultTokenGetter = (method: AuthMethod): TokenGetter => {
  switch (method) {
    case AuthMethod.Bearer:
      return bearerTokenGetter;
  }
};
