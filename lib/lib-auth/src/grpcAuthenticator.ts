import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { ErrorHelper, GrpcError } from "@topcoder-framework/lib-common";
import {
  Interceptor,
  OnMessageOptions,
} from "@topcoder-framework/lib-interceptor";
import { AuthOptions, AuthProperty, Permissions } from "./interfaces";
import {
  buildRequestProperty,
  isHSA,
  isRSA,
  validateAndGetAlgorithms,
  validateAndGetCacheTime,
  validateAndGetIssuers,
  validateAndGetTokenKey,
  validatePermissions,
  verifyHSAToken,
  verifyRSAToken,
} from "./common";
import { UnauthorizedError } from "./errors/UnauthorizedError";
import { decode } from "jsonwebtoken";
import _ from "lodash";

export const grpcAuthenticator = (options: AuthOptions): Interceptor => {
  const tokenKey = validateAndGetTokenKey(options.tokenKey);
  const algorithms = validateAndGetAlgorithms(options.algorithms);
  const issuers = validateAndGetIssuers(options.issuer);
  const credentialsRequired = _.defaultTo(options.credentialsRequired, true);
  const jwtKeyCacheTimeInHours = validateAndGetCacheTime(
    options.jwtKeyCacheTimeInHours
  );
  const claimScope = _.toString(options.claimScope);

  const interceptor = {
    onMessage: async (
      call: ServerUnaryCall<any, any>,
      messageOptions?: OnMessageOptions & { permissions?: Permissions }
    ) => {
      const tokenArr = call.metadata.get(tokenKey);
      if (!tokenArr || tokenArr.length === 0) {
        throw new UnauthorizedError("No authorization token was found");
      }
      const token = tokenArr[0];
      if (typeof token != "string") {
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
      _.forOwn(authProperty, (v, k) => {
        call.metadata.set(k, _.toString(v));
      });
      if (credentialsRequired && messageOptions?.permissions) {
        validatePermissions(authProperty, messageOptions.permissions);
      }
    },
    onSuccess: (
      response: any,
      call: ServerUnaryCall<any, any>,
      callback: sendUnaryData<any>
    ) => {
      callback(null, response);
    },
    onError: (
      error: GrpcError,
      call: ServerUnaryCall<any, any>,
      callback: sendUnaryData<any>
    ) => {
      callback(ErrorHelper.wrapError(error));
    },
  };
  return interceptor;
};
