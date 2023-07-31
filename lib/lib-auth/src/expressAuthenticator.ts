import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import _ from "lodash";
import { UnauthorizedError } from "./errors/UnauthorizedError";
import {
  AuthMethod,
  AuthOptions,
  AuthProperty,
  ExpressAuthMiddleware,
  Permissions,
  TokenGetter,
} from "./interfaces";
import {
  buildRequestProperty,
  isHSA,
  isRSA,
  validateAndGetAlgorithms,
  validateAndGetCacheTime,
  validateAndGetIssuers,
  validateAndGetMethod,
  validateAndGetRequestProperty,
  validateAndGetTokenGetter,
  validatePermissions,
  verifyHSAToken,
  verifyRSAToken,
} from "./common";

export const expressAuthenticator = (
  options: AuthOptions
): ExpressAuthMiddleware => {
  const method: AuthMethod = validateAndGetMethod(options.method);
  const algorithms = validateAndGetAlgorithms(options.algorithms);
  const issuers = validateAndGetIssuers(options.issuer);
  if (_.some(algorithms, isHSA) && _.isUndefined(options.secret)) {
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
      if (decodedToken === null || typeof decodedToken.payload === "string") {
        throw new UnauthorizedError("Invalid Token");
      }
      const algorithm = decodedToken.header.alg;
      if (!_.includes(algorithms, algorithm)) {
        throw new UnauthorizedError("Invalid Algorithm");
      }
      if (isHSA(algorithm)) {
        verifyHSAToken(token, [algorithm], options.audience, options.secret);
      } else if (isRSA(algorithm)) {
        await verifyRSAToken(
          token,
          decodedToken,
          jwtKeyCacheTimeInHours,
          [algorithm],
          issuers,
          options.audience
        );
      } else {
        throw new UnauthorizedError("Invalid Algorithm");
      }
      if (options.isRevoked && (await options.isRevoked(decodedToken))) {
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
