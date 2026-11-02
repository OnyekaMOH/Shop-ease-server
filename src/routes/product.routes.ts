// src/routes/task.routes.ts
import { Router } from "express";
import * as productController from "../controllers/product.controller.ts";
import { productSchema } from "../validators/productValidator.ts";
import { validate } from "../middlewares/validate.ts";

export const productRouter: Router = Router();

productRouter.get("/admin", productController.getAllProducts); // GET    /api/products
productRouter.get("/user/:id", productController.getAllProductsByUserId); 
productRouter.get("/:id", productController.getProductById); // GET    /api/products/:id
productRouter.post(
    "/",
     validate(productSchema), 
     productController.createProduct,
    ); // POST   /api/products
productRouter.patch("/:id", productController.updateProduct); // PATCH  /api/products/:id
productRouter.delete("/:id", productController.deleteProduct); // DELETE /api/products/:id
