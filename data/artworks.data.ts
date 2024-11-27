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
import { artworkSchema } from "@/features/artworks/schema/artwork.schema";

export const artworks: z.infer<typeof artworkSchema>[] = [
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
  },
];
