// src/routes/task.routes.ts
import { Router } from "express";
import * as productController from "../controllers/product.controller.ts";

export const productRouter: Router = Router();

productRouter.get("/", productController.getAllProducts); // GET    /api/products
productRouter.get("/:id", productController.getProductById); // GET    /api/products/:id
productRouter.post("/", productController.createProduct); // POST   /api/products
productRouter.patch("/:id", productController.updateProduct); // PATCH  /api/products/:id
productRouter.delete("/:id", productController.deleteProduct); // DELETE /api/products/:id
