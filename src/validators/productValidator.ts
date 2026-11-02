import { z } from "zod";

// One helper for the "missing vs wrong type" messages
const field = (label: string, type = "a string") => ({
  error: (issue: { input?: unknown }) =>
    issue.input === undefined
      ? `${label} is required`
      : `${label} must be ${type}`,
});

export const productSchema = z.object({
  name: z
    .string(field("Name"))
    .min(2, "Name must be at least 2 characters long"),

  description: z
    .string(field("Description"))
    .min(10, "Description must be at least 10 characters long")
    .optional(),

  price: z
    .number(field("Price", "a valid number"))
    .positive("Price must be greater than 0"),

  stock: z
    .number(field("Stock", "a valid number"))
    .int("Stock must be a whole number")
    .min(0, "Stock cannot be negative"),

  category: z.string(field("Category")).min(1, "Category is required"),

  imageUrl: z.string(field("Image URL")).url("Invalid image URL").optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
