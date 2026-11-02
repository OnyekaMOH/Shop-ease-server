// src/routes/index.ts
import { Router } from "express";
import { healthRouter } from "./health.routes.ts";
import { taskRouter } from "./task.routes.ts";
import { productRouter } from "./product.routes.ts";

export const apiRouter: Router = Router();

apiRouter.use("/health", healthRouter); // → /api/health
apiRouter.use("/tasks", taskRouter);    // → /api/tasks
apiRouter.use("/products", productRouter);    // → /api/product
