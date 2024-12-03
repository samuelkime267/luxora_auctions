import * as z from "zod";

const categories = z.enum([
  "fashion",
  "fine art",
  "interior",
  "luxury",
  "books",
  "sports",
  "books",
  "wine",
  "watches",
  "vehicles",
  "antiques",
  "collectibles",
]);

export const categorySchema = z.object({
  id: z.string(),
  name: categories,
  image: z.string(),
});
