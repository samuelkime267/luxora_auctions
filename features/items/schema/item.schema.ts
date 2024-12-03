import * as z from "zod";

// Enum for item type
const itemType = z.enum(["sales", "auctioned"]);

export const auctionDetailsSchema = z.object({
  currentBid: z.number().nonnegative().optional(),
  minEstimate: z.number().positive(),
  maxEstimate: z.number().positive(),
  startDate: z.date(),
  endDate: z.date(),
});

// Main item schema
export const itemSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title cannot be empty"),
  seller: z.string(),
  sellerId: z.string(),
  images: z.array(z.string()),
  description: z
    .string()
    .min(10, "Description should have at least 10 characters"),
  price: z.number().nonnegative(),
  createdAt: z.date(),
  updatedAt: z.date(),
  stock: z.number().nonnegative(),
  category: z.string().min(1, "Category cannot be empty"),
  itemType,
  auctionDetails: auctionDetailsSchema.optional(),
});
