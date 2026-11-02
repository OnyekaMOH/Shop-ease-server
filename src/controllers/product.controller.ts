import type { Request, Response } from "express";
// import type { ProductInput } from "../validators/productValidator.ts";

export async function getAllProducts(
  _req: Request,
  res: Response,
): Promise<void> {
  res.status(200).json({ success: true, data: [] });
}

export async function getAllProductsByUserId(
  req: Request<{ userId: string }>,
  res: Response,
): Promise<void> {
  const userId = req.params.userId;

  res.status(200).json({ success: true, data: [] });
}

export async function getProductById(
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> {
  const productId = req.params.id;
  res.status(200).json({ success: true, data: {} });
}

export async function createProduct(
  req: Request,
  res: Response,
): Promise<void> {
  res.status(201).json({ success: true, data: {} });
}

export async function updateProduct(
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> {
  res.status(200).json({ success: true, data: {} });
}

export async function deleteProduct(
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> {
  const productId = req.params.id;

  res.status(204).send(); // 204 = success, no content
}
