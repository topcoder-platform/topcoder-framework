import { Request } from "express";

/**
 * A function to customize how a token is retrieved from the express request.
 */
export type TokenGetter = (
  req: Request
) => string | Promise<string> | undefined;
