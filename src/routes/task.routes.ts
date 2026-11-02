// src/routes/task.routes.ts
import { Router } from "express";
import * as taskController from "../controllers/task.controller.ts";

export const taskRouter: Router = Router();

taskRouter.get("/", taskController.getAllTasks); // GET    /api/tasks
taskRouter.get("/:id", taskController.getTaskById); // GET    /api/tasks/:id
taskRouter.post("/", taskController.createTask); // POST   /api/tasks
taskRouter.patch("/:id", taskController.updateTask); // PATCH  /api/tasks/:id
taskRouter.delete("/:id", taskController.deleteTask); // DELETE /api/tasks/:id
