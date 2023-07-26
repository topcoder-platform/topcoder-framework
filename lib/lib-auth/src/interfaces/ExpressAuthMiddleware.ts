import { NextFunction, Request, Response } from "express";
import { Permissions } from "./Permissions";

export type ExpressAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  permissions?: Permissions
) => Promise<void>;
