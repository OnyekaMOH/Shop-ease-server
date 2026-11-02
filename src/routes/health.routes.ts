// src/routes/health.routes.ts
import { Router } from "express";

export const healthRouter: Router = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({ success: true, message: "Health route is working" });
});
