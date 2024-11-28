import * as z from "zod";

const artworkSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  artistId: z.string(),
  images: z.array(z.string()),
  description: z.string(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  stock: z.number(),
  category: z.string(),
});

export const exhibitionSchema = z.object({
  id: z.string(),
  exhibitionName: z.string(),
  startTime: z.date(),
  endTime: z.date(),
  createdBy: z.string(),
  createdById: z.string(),
  createdAt: z.date(),
  items: z.array(artworkSchema),
  address: z.string(),
  description: z.string(),
});
