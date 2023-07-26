import { Secret, VerifyOptions } from "jsonwebtoken";
import { Algorithm } from "./Algorithm";
import { AuthMethod } from "./AuthMethod";
import { IsRevoked } from "./IsRevoked";
import { TokenGetter } from "./TokenGetter";

export type AuthOptions = {
  method?: AuthMethod;
  secret?: Secret;
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
  tokenKey?: string;
  getToken?: TokenGetter;
  isRevoked?: IsRevoked;
  claimScope: string;
} & Required<Pick<VerifyOptions, "issuer">> &
  Pick<VerifyOptions, "audience">;
