import { z } from "zod";
import { artworkSchema } from "../schema/artwork.schema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: z.infer<typeof artworkSchema>[];
  isLoading: boolean;
};

export default function ProductGrid({ data, isLoading }: Props) {
  console.log(isLoading);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {data.map(({ id, images, price, title, artist }, i) => (
        <div key={i} className="group">
          <Link href={`/artworks/${id}`}>
            <div className="w-full h-auto aspect-[4/5] mb-2 overflow-hidden">
              <Image
                src={images[0]}
                alt={title}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
            </div>
            <div className="flex items-start justify-start flex-col gap-0.5 lg:gap-1">
              <p className="font-corm capitalize text-xl md:text-2xl font-medium">
                {title}
              </p>
              <p className="text-xs md:text-sm capitalize">{artist}</p>
              <p className="font-medium">${price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
