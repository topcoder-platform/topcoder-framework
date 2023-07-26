import { JwtPayload } from "jsonwebtoken";
import _ from "lodash";
import {
  Algorithm,
  AuthMethod,
  AuthMethods,
  HSA,
  RSA,
  TokenGetter,
} from "src/interfaces";
import { getDefaultTokenGetter } from "./TokenGetter";

export const isValidAuthMethod = (method: unknown): method is AuthMethod =>
  _.isString(method) && method in AuthMethods;

export const isValidAlgorithm = (algorithm: unknown): algorithm is Algorithm =>
  _.includes(["HS256", "HS384", "HS512", "RS256", "RS384", "RS512"], algorithm);

export const isValidAlgorithms = (
  algorithms: unknown[]
): algorithms is Algorithm[] => _.every(algorithms, isValidAlgorithm);

export const isHSA = (algorithm: unknown): algorithm is HSA =>
  _.includes(["HS256", "HS384", "HS512"], algorithm);

export const isRSA = (algorithm: unknown): algorithm is RSA =>
  _.includes(["RS256", "RS384", "RS512"], algorithm);

export const hasIss = (
  payload: string | JwtPayload
): payload is JwtPayload & { iss: string } => {
  return typeof payload === "object" && payload.iss !== undefined;
};

export const validateAndGetAlgorithms = (
  algorithms?: unknown[]
): Algorithm[] => {
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

export const validateAndGetMethod = (method?: unknown): AuthMethod => {
  if (method === undefined) {
    return "Bearer";
  }
  if (isValidAuthMethod(method)) {
    return method;
  } else {
    throw new RangeError("");
  }
};

export const validateAndGetTokenGetter = (
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

export const validateAndGetCacheTime = (cacheTime?: unknown): number => {
  if (cacheTime === undefined) {
    return 24;
  }
  if (_.isNumber(cacheTime)) {
    return cacheTime;
  } else {
    throw new RangeError("");
  }
};

export const validateAndGetRequestProperty = (
  requestProperty?: unknown
): string => {
  if (requestProperty === undefined) {
    return "authUser";
  }
  if (_.isString(requestProperty)) {
    return requestProperty;
  } else {
    throw new RangeError("");
  }
};

export const validateAndGetIssuers = (issuer: unknown): string[] => {
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

export const validateAndGetTokenKey = (tokenKey?: unknown): string => {
  if (tokenKey === undefined) {
    return "token";
  }
  if (_.isString(tokenKey)) {
    return tokenKey;
  } else {
    throw new RangeError("");
  }
};
