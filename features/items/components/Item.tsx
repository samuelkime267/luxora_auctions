"use client";

import { z } from "zod";
import { itemSchema } from "../schema/item.schema";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { Heart } from "@/components/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";

type ItemProps = z.infer<typeof itemSchema>;

export default function Item({
  id,
  images,
  title,
  price,
  startDate,
  endDate,
  currentBid,
  minEstimate,
  maxEstimate,
}: ItemProps) {
  const { days, hours, minutes, seconds, months, years } =
    useCountdown(endDate);
  const currentTime = new Date();
  const isExpired = currentTime > endDate;
  const isLive = currentTime > startDate && currentTime < endDate;
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="group relative">
      <Button
        onClick={toggleLike}
        className="absolute top-2 right-2 z-[2] bg-white p-3"
      >
        <Heart className={cn("w-6 h-6", { "text-red-600": isLiked })} />
      </Button>

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

          <div className="flex items-center justify-start gap-2">
            <p className="text-xs capitalize">Estimate:</p>
            <p>
              ${minEstimate} - ${maxEstimate}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <p className="text-xs capitalize">
              {currentBid ? "current bid" : "starting bid"}:
            </p>
            <p className="font-medium text-lg">${currentBid || price}</p>
          </div>

          <p className="capitalize">
            {isExpired
              ? "Auction closed"
              : !isLive
              ? `starts in ${years ? `${years}y` : ""} ${
                  months ? `${months}m` : ""
                } ${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
                  minutes ? `${minutes}m` : ""
                } ${seconds ? `${seconds}s` : "0s"}`
              : "live"}
          </p>
        </div>
      </Link>
    </div>
  );
}
