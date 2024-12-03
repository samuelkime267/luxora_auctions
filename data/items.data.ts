import { z } from "zod";
import angel from "@/assets/imgs/angel.jpg";
import car from "@/assets/imgs/car.jpg";
import field from "@/assets/imgs/field.jpg";
import pots from "@/assets/imgs/pots.jpg";
import ring from "@/assets/imgs/ring.jpg";
import statue2 from "@/assets/imgs/statue-2.jpg";
import statue from "@/assets/imgs/statue.jpg";
import watch2 from "@/assets/imgs/watch-2.jpg";
import watch from "@/assets/imgs/watch.jpg";
import { itemSchema } from "@/features/items/schema/item.schema";

export const items: z.infer<typeof itemSchema>[] = [
  {
    id: "1",
    title: "David",
    seller: "Michelangelo di Lodovico",
    sellerId: "101",
    images: [statue.src, statue2.src],
    description:
      "An iconic marble statue of David, a masterpiece of Renaissance sculpture.",
    price: 1_200_000,
    createdAt: new Date("2024-11-01T10:00:00Z"),
    updatedAt: new Date("2024-11-05T15:00:00Z"),
    stock: 1,
    category: "statue",
    itemType: "auctioned",
    auctionDetails: {
      currentBid: 1_250_000,
      minEstimate: 1_500_000,
      maxEstimate: 2_000_000,
      startDate: new Date("2024-11-10T08:00:00Z"),
      endDate: new Date("2024-12-01T20:00:00Z"),
    },
  },
  {
    id: "2",
    title: "Luxury Swiss Watch",
    seller: "Caravaggio",
    sellerId: "102",
    images: [watch.src, watch2.src],
    description:
      "A luxury Swiss-made watch inspired by Caravaggio's dramatic artistry.",
    price: 25_000,
    createdAt: new Date("2024-11-03T09:30:00Z"),
    updatedAt: new Date("2024-11-06T12:45:00Z"),
    stock: 5,
    category: "watch",
    itemType: "sales",
  },
  {
    id: "3",
    title: "Angel Painting",
    seller: "Sandro Botticelli",
    sellerId: "103",
    images: [angel.src],
    description:
      "A delicate and timeless depiction of an angel, reflecting divine serenity.",
    price: 300_000,
    createdAt: new Date("2024-11-02T08:00:00Z"),
    updatedAt: new Date("2024-11-06T16:00:00Z"),
    stock: 1,
    category: "painting",
    itemType: "auctioned",
    auctionDetails: {
      currentBid: 320_000,
      minEstimate: 350_000,
      maxEstimate: 400_000,
      startDate: new Date("2024-11-20T09:00:00Z"),
      endDate: new Date("2024-12-10T21:00:00Z"),
    },
  },
  {
    id: "4",
    title: "Vintage Sports Car",
    seller: "Rembrandt van Rijn",
    sellerId: "104",
    images: [car.src],
    description:
      "A restored vintage sports car with unique design inspired by Rembrandt.",
    price: 800_000,
    createdAt: new Date("2024-11-05T10:30:00Z"),
    updatedAt: new Date("2024-11-09T14:00:00Z"),
    stock: 1,
    category: "car",
    itemType: "sales",
  },
  {
    id: "5",
    title: "Field Mosaic",
    seller: "Jean-François Millet",
    sellerId: "105",
    images: [field.src],
    description: "A vibrant mosaic depicting a tranquil rural field scene.",
    price: 150_000,
    createdAt: new Date("2024-11-04T11:00:00Z"),
    updatedAt: new Date("2024-11-08T13:00:00Z"),
    stock: 3,
    category: "art",
    itemType: "auctioned",
    auctionDetails: {
      minEstimate: 160_000,
      maxEstimate: 180_000,
      startDate: new Date("2024-11-18T08:00:00Z"),
      endDate: new Date("2024-12-08T20:00:00Z"),
    },
  },
  {
    id: "6",
    title: "Handcrafted Pots",
    seller: "Eugène Delacroix",
    sellerId: "106",
    images: [pots.src],
    description:
      "A collection of handcrafted pots with intricate and colorful designs.",
    price: 1_500,
    createdAt: new Date("2024-11-06T09:15:00Z"),
    updatedAt: new Date("2024-11-07T12:30:00Z"),
    stock: 25,
    category: "home decor",
    itemType: "sales",
  },
  {
    id: "7",
    title: "Diamond Ring",
    seller: "Francisco Goya",
    sellerId: "107",
    images: [ring.src],
    description:
      "An exquisite diamond ring with a timeless design inspired by Goya.",
    price: 15_000,
    createdAt: new Date("2024-11-07T08:30:00Z"),
    updatedAt: new Date("2024-11-10T14:00:00Z"),
    stock: 2,
    category: "jewelry",
    itemType: "auctioned",
    auctionDetails: {
      currentBid: 16_500,
      minEstimate: 17_000,
      maxEstimate: 20_000,
      startDate: new Date("2024-11-20T12:00:00Z"),
      endDate: new Date("2024-12-01T18:00:00Z"),
    },
  },
];
