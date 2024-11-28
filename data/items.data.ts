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
    artist: "Michelangelo di Lodovico",
    artistId: "1",
    images: [statue.src, statue2.src],
    description: "cool statue",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "statue",
    currentBid: 200,
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "2",
    title: "Watch",
    artist: "Caravaggio",
    artistId: "1",
    images: [watch.src, watch2.src],
    description: "cool watch",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "watch",
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "3",
    title: "Angel",
    artist: "Sandro Botticelli",
    artistId: "1",
    images: [angel.src],
    description: "cool angel",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "angel",
    currentBid: 200,
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "4",
    title: "Car",
    artist: "Rembrandt van Rijn",
    artistId: "1",
    images: [car.src],
    description: "cool car",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "car",
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "5",
    title: "Field",
    artist: "Jean-François Millet",
    artistId: "1",
    images: [field.src],
    description: "cool field",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "field",
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "6",
    title: "Pots",
    artist: "Eugène Delacroix",
    artistId: "1",
    images: [pots.src],
    description: "cool pots",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "pots",
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
  {
    id: "7",
    title: "Ring",
    artist: "Francisco Goya",
    artistId: "1",
    images: [ring.src],
    description: "cool ring",
    price: 100,
    createdAt: new Date(1732709187946),
    updatedAt: new Date(1732709187946),
    stock: 10,
    category: "ring",
    currentBid: 200,
    minEstimate: 300,
    maxEstimate: 1000,
    startDate: new Date(1732909187946),
    endDate: new Date(1735709187946),
  },
];