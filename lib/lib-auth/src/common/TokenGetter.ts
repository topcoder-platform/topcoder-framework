import { Request } from "express";
import { AuthMethod, TokenGetter } from "src/interfaces";

export const getDefaultTokenGetter = (method: AuthMethod): TokenGetter => {
  switch (method) {
    case "Bearer":
      return bearerTokenGetter;
    default:
      throw new Error("");
  }
};

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
