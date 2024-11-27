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
      {data.map(({ artist, id, images, price, title }, i) => (
        <div key={i} className="">
          <Link href={`/artworks/${id}`}>
            <div className='w-full h-auto aspect-[4/5] mb-2'>
              <Image src={images[0]} alt={title} width={400} height={400} className='w-full h-full object-cover' />
            </div>
            <p className='font-medium capitalize leading-[1]'>{title}</p>
            <small className='mb-2 capitalize opacity-80'>{artist}</small>
            <p className=''>${price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
