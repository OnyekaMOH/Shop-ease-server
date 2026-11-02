// src/types/task.types.ts
export interface Product {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateProductInput {
  title: string;
}

export interface UpdateProductInput {
  title?: string;
  completed?: boolean;
}
