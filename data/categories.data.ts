import { z } from "zod";
import { categorySchema } from "@/features/category/schema/category.schema";
import antiqueImg from "@/assets/imgs/category/antiques.jpg";
import booksImg from "@/assets/imgs/category/books.jpg";
import collectibleImg from "@/assets/imgs/category/collectible.jpg";
import fashionImg from "@/assets/imgs/category/fashion.jpg";
import fineArtImg from "@/assets/imgs/category/fine-art.jpg";
import interiorImg from "@/assets/imgs/category/interior.jpg";
import luxuryImg from "@/assets/imgs/category/luxury.jpg";
import sportsImg from "@/assets/imgs/category/sports.jpg";
import vehiclesImg from "@/assets/imgs/category/vehicles.jpg";
import watchImg from "@/assets/imgs/category/watch.jpg";
import wineImg from "@/assets/imgs/category/wine.jpg";

export const categories: z.infer<typeof categorySchema>[] = [
  {
    id: "1",
    name: "antiques",
    image: antiqueImg.src,
  },
  {
    id: "2",
    name: "books",
    image: booksImg.src,
  },
  {
    id: "3",
    name: "collectibles",
    image: collectibleImg.src,
  },
  {
    id: "4",
    name: "fashion",
    image: fashionImg.src,
  },
  {
    id: "5",
    name: "fine art",
    image: fineArtImg.src,
  },
  {
    id: "6",
    name: "interior",
    image: interiorImg.src,
  },
  {
    id: "7",
    name: "luxury",
    image: luxuryImg.src,
  },
  {
    id: "8",
    name: "sports",
    image: sportsImg.src,
  },
  {
    id: "9",
    name: "vehicles",
    image: vehiclesImg.src,
  },
  {
    id: "10",
    name: "watches",
    image: watchImg.src,
  },
  {
    id: "11",
    name: "wine",
    image: wineImg.src,
  },
];
