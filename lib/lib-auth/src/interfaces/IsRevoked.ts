import { Jwt } from "jsonwebtoken";

/**
 * A function to check if a token is revoked
 */
export type IsRevoked = (token: Jwt | undefined) => boolean | Promise<boolean>;
