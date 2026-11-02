// src/app.ts
import express from "express";
import type { Express } from "express";
import cors from "cors";
import { apiRouter } from "./routes/index.ts";
import { requestLogger } from "./middlewares/requestLogger.ts";
import { notFound } from "./middlewares/notFound.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

export function createApp(): Express {
  const app = express();

  // 1. Middleware that runs on every request
  app.use(cors()); // allow requests from the frontend
  app.use(express.json()); // read JSON bodies into req.body
  app.use(express.urlencoded({ extended: true })); // read form bodies
  app.use(requestLogger); // log each request

  // 2. Routes
  app.use("/api", apiRouter);

  // 3. Nothing matched → 404
  app.use(notFound);

  // 4. Errors → error handler (always last)
  app.use(errorHandler);

  return app;
}
