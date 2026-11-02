// src/controllers/task.controller.ts
import type { Request, Response } from "express";
import * as productService from "../services/product.service.ts";

type ProductParams = { id: string };

export async function getAllProducts(_req: Request, res: Response): Promise<void> {
  const products = await productService.getAllProducts();
  res.status(200).json({ success: true, data: products });
}

export async function getProductById(
  req: Request<ProductParams>,
  res: Response,
): Promise<void> {
  const products = await productService.getProductById(req.params.id);
  res.status(200).json({ success: true, data: products });
}

export async function createProduct(req: Request, res: Response): Promise<void> {
  const product = await productService.createProduct(req.body);
  res.status(201).json({ success: true, data: product });
}

export async function updateProduct(
  req: Request<ProductParams>,
  res: Response,
): Promise<void> {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.status(200).json({ success: true, data: product });
}

export async function deleteProduct(
  req: Request<ProductParams>,
  res: Response,
): Promise<void> {
  await productService.deleteProduct(req.params.id);
  res.status(204).send(); // 204 = success, no content
}
