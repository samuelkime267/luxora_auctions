import * as z from "zod";

export const auctionSchema = z.object({
  id: z.string(),
  title: z.string(),
  seller: z.string(),
  sellerId: z.string(),
  image: z.string(),
  description: z.string(),
  category: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string(),
});
