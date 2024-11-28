"use client";

import { z } from "zod";
import { itemSchema } from "../schema/item.schema";
import Item from "./Item";

type Props = {
  data: z.infer<typeof itemSchema>[];
  isLoading: boolean;
};

export default function ItemsGrid({ data, isLoading }: Props) {
  console.log(isLoading);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {data.map((data, i) => (
        <Item key={i} {...data} />
      ))}
    </div>
  );
}
