import React from "react";
import { exhibitionSchema } from "../schema/exhibition.schema";
import { z } from "zod";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  data: z.infer<typeof exhibitionSchema>[];
};
export default function ExhibitionList({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map(
        ({ exhibitionName, items, startTime, endTime, address, id }, i) => {
          return (
            <Link href={`/exhibitions/${id}`} key={i}>
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full h-auto aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={items[0].images[0]}
                    alt={items[0].title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/60 p-4 flex items-start justify-end flex-col gap-4">
                    <h5 className="text-white">{exhibitionName}</h5>

                    <div>
                      <p className="text-white">
                        {format(startTime, "MMMM dd")}
                        {" - "}
                        {format(endTime, "MMMM dd")}
                      </p>

                      <p className="text-white">{address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
