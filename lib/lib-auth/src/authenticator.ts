import { Request, Response, NextFunction } from "express";
import { Jwt, JwtPayload, Secret, VerifyOptions, verify } from "jsonwebtoken";
import JwksRSA, { JwksClient } from "jwks-rsa";
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
  test: string;
  method?: AuthMethod;
  secret?: Secret | GetVerificationKey;
  algorithms?: Algorithm[];
  /**
   * If sets to true, continue to the next middleware when the
   * request doesn't include a token without failing.
   *
   * @default true
   */
  credentialsRequired?: boolean;
  jwtKeyCacheTimeInHours?: number;
  cookieName?: string;
  getToken?: TokenGetter;
  isRevoked?: IsRevoked;
} & Pick<VerifyOptions, "audience" | "issuer">;

export enum AuthMethod {
  "Bearer",
}

export type Algorithm = RSA | HSA;

type HSA = "HS256" | "HS384" | "HS512";
type RSA = "RS256" | "RS384" | "RS512";

const isHSA = (algorithm: Algorithm): algorithm is HSA =>
  _.includes(["HS256", "HS384", "HS512"], algorithm);

const isRSA = (algorithm: Algorithm): algorithm is RSA =>
  _.includes(["RS256", "RS384", "RS512"], algorithm);

const bearerTokenGetter = (req: Request): string | undefined => {
  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length == 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        return credentials;
      } else {
        throw new UnauthorizedError("credentials_bad_scheme", {
          message: "Format is Authorization: Bearer [token]",
        });
      }
    } else {
      throw new UnauthorizedError("credentials_bad_format", {
        message: "Format is Authorization: Bearer [token]",
      });
    }
  } else {
    throw new UnauthorizedError("credentials_bad_format", {
      message: "Format is Authorization: Bearer [token]",
    });
  }
};

const defaultOptions = {
  method: AuthMethod.Bearer,
  algorithms: ["HS256", "RS256"],
  credentialsRequired: true,
  jwtKeyCacheTimeInHours: 24,
  getToken: bearerTokenGetter,
};

export const authenticator = (options: AuthOptions) => {
  const authOptions = {
    ...defaultOptions,
    ...options,
  };
  if (_.some(options.algorithms, isHSA) && _.isUndefined(authOptions.secret)) {
    throw new RangeError("lib-auth: secret is required when algorithm is HSA");
  }

  const middleware = (req: Request, res: Response, next: NextFunction) => {
    const token = authOptions.getToken(req);
    if (!token) {
      if (authOptions.credentialsRequired) {
        throw new UnauthorizedError("credentials_required", {
          message: "No authorization token was found",
        });
      } else {
        return next();
      }
    }
  };
  return middleware;
};

const getRSAKey = async (token: Jwt, cacheTime: number) => {
  const kid = token.header.kid;
  const jwksClient = getJwksClient(token, cacheTime);
  const key = await jwksClient.getSigningKey(kid);
  return key.getPublicKey();
};

const hasIss = (
  payload: string | JwtPayload
): payload is JwtPayload & { iss: string } => {
  return typeof payload === "object" && payload.iss !== undefined;
};

const getJwksClient = (token: Jwt, cacheTime: number): JwksClient => {
  if (!hasIss(token.payload)) {
    throw new Error("");
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
