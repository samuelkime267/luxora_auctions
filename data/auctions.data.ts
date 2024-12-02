import { z } from "zod";
import { auctionSchema } from "@/features/auctions/schema/auctions.schema";
import car from "@/assets/imgs/car.jpg";
import field from "@/assets/imgs/field.jpg";
import pots from "@/assets/imgs/pots.jpg";
import ring from "@/assets/imgs/ring.jpg";
import statue from "@/assets/imgs/statue.jpg";
import watch2 from "@/assets/imgs/watch-2.jpg";

export const auctions: z.infer<typeof auctionSchema>[] = [
  {
    id: "1",
    title: "Vintage Sports Car",
    seller: "Michael Johnson",
    sellerId: "101",
    image: car.src,
    description:
      "A classic 1967 Mustang in excellent condition, perfect for collectors.",
    category: "car",
    startDate: new Date("2024-12-01T08:00:00Z"),
    endDate: new Date("2024-12-10T20:00:00Z"),
    location: "New York",
  },
  {
    id: "2",
    title: "Farm Land for Lease",
    seller: "Emily Watson",
    sellerId: "102",
    image: field.src,
    description:
      "10-acre fertile farmland ideal for growing crops or setting up a vineyard.",
    category: "field",
    startDate: new Date("2024-12-02T10:00:00Z"),
    endDate: new Date("2024-12-15T18:00:00Z"),
    location: "London",
  },
  {
    id: "3",
    title: "Handcrafted Ceramic Pots",
    seller: "Artisan Pottery Co.",
    sellerId: "103",
    image: pots.src,
    description:
      "A set of 3 beautifully handcrafted ceramic pots with unique designs.",
    category: "home decor",
    startDate: new Date("2024-12-01T09:00:00Z"),
    endDate: new Date("2024-12-05T17:00:00Z"),
    location: "New York",
  },
  {
    id: "4",
    title: "Diamond Engagement Ring",
    seller: "Luxury Jewelers",
    sellerId: "104",
    image: ring.src,
    description:
      "A stunning 2-carat diamond ring set in 18K white gold. Certificate included.",
    category: "jewelry",
    startDate: new Date("2024-11-30T12:00:00Z"),
    endDate: new Date("2024-12-07T12:00:00Z"),
    location: "New York",
  },
  {
    id: "5",
    title: "Antique Bronze Statue",
    seller: "Heritage Antiques",
    sellerId: "105",
    image: statue.src,
    description: "A rare 19th-century bronze statue with intricate detailing.",
    category: "antiques",
    startDate: new Date("2024-12-03T14:00:00Z"),
    endDate: new Date("2024-12-12T16:00:00Z"),
    location: "New York",
  },
  {
    id: "6",
    title: "Luxury Swiss Watch",
    seller: "Timeless Watches",
    sellerId: "106",
    image: watch2.src,
    description:
      "A brand-new Swiss-made watch featuring automatic movement and a leather strap.",
    category: "watches",
    startDate: new Date("2024-12-01T07:00:00Z"),
    endDate: new Date("2024-12-08T19:00:00Z"),
    location: "New York",
  },
];
