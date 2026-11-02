// src/middlewares/errorHandler.ts
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.ts";
import { logger } from "../lib/logger.ts";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  // Errors we created on purpose (404, 409, ...)
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  // Anything else is a bug → log it, and send a safe general message
  logger.error({ err }, "Unhandled error");
  res.status(500).json({ success: false, message: "Internal server error" });

  return;
}
