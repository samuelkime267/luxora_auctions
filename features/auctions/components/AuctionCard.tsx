import { z } from "zod";
import { auctionSchema } from "../schema/auctions.schema";
import Image from "next/image";
import { formatDate } from "date-fns";
import Link from "next/link";

type AuctionCardProps = z.infer<typeof auctionSchema>;

export default function AuctionCard({
  endDate,
  id,
  image,
  startDate,
  title,
  location,
}: AuctionCardProps) {
  return (
    <Link href={`/auctions/${id}`} className="group">
      <div className="aspect-[16/12] w-full h-auto mb-2 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div>
        <p className="font-corm capitalize text-xl md:text-2xl font-medium mb-1">
          {title}
        </p>

        <p className="text-black/75 text-sm">{formatDate(startDate, "p")}</p>
        <p className="text-black/75 text-sm">
          {formatDate(startDate, "dd MMMM, yyyy")} -{" "}
          {formatDate(endDate, "dd MMMM, yyyy")}
        </p>

        <p className="text-black/60 text-sm">{location}</p>
      </div>
    </Link>
  );
}
