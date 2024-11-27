import React from "react";
import { exhibitionSchema } from "../schema/exhibition.schema";
import { z } from "zod";
import Image from "next/image";
import { format } from "date-fns";

type Props = {
  data: z.infer<typeof exhibitionSchema>[];
};
export default function ExhibitionList({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {data.map(({ auctionName, items, startTime, endTime }, i) => {
        return (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-auto aspect-vide ooverflow-hidden">
              <Image
                src={items[0].images[0]}
                alt={items[0].title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start justify-start flex-col gap-1 md:gap-4">
              <h5>{auctionName}</h5>
              <div>
                <p>Starts: {format(startTime, "Kaaa, do MMMM, yyyy")}</p>
                <p>Ends: {format(endTime, "Kaaa, do MMMM, yyyy")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
