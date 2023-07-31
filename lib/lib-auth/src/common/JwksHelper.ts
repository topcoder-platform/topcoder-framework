import { Jwt } from "jsonwebtoken";
import JwksRSA, { JwksClient, SigningKey } from "jwks-rsa";
import _ from "lodash";
import { UnauthorizedError } from "src/errors/UnauthorizedError";
import { hasIss } from "./Validators";

const jwksClients: { [iss: string]: JwksClient } = {};

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

export const getRSAKey = async (
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
