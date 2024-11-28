import * as z from "zod";

export const itemSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  artistId: z.string(),
  images: z.array(z.string()),
  description: z.string(),
  price: z.number(),
  currentBid: z.number().optional(),
  minEstimate: z.number(),
  maxEstimate: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  stock: z.number(),
  category: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});
