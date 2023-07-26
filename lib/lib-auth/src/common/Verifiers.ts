import { Jwt, JwtPayload, Secret, verify } from "jsonwebtoken";
import _ from "lodash";
import { UnauthorizedError } from "src/errors/UnauthorizedError";
import { Algorithm, AuthProperty, Permissions } from "src/interfaces";
import { getRSAKey } from "./JwksHelper";

export const validatePermissions = (
  auth: AuthProperty,
  permissions: Permissions
) => {
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

export const verifyHSAToken = (
  token: string,
  algorithms: Algorithm[],
  audience?: string | RegExp | (string | RegExp)[],
  secret?: Secret
) => {
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

export const verifyRSAToken = async (
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

export const buildRequestProperty = (
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
