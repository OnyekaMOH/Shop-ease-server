// src/services/task.service.ts
import { randomUUID } from "node:crypto";
import type {
  CreateProductInput,
  Product,
  UpdateProductInput,
} from "../types/product.types.ts";
import { AppError } from "../errors/AppError.ts";

// Temporary in-memory storage — replaced by a database in the Database section
const products: Product[] = [];

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product> {
  const product = products.find((t) => t.id === id);
  if (!product) {
    throw new AppError(404, "Product not found");
  }
  return product;
}

export async function createProduct(
  input: CreateProductInput,
): Promise<Product> {
  const product: Product = {
    id: randomUUID(),
    title: input.title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  products.push(product);
  return product;
}

export async function updateProduct(
  id: string,
  input: UpdateProductInput,
): Promise<Product> {
  const product = await getProductById(id); // throws 404 if not found

  // Business rule: a completed task can't be renamed
  if (product.completed && input.title !== undefined) {
    throw new AppError(409, "Completed products cannot be renamed");
  }

  if (input.title !== undefined) product.title = input.title;
  if (input.completed !== undefined) product.completed = input.completed;

  return product;
}

export async function deleteProduct(id: string): Promise<void> {
  const index = products.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new AppError(404, "Product not found");
  }
  products.splice(index, 1);
}
