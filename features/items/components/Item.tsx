"use client";

import { z } from "zod";
import { itemSchema } from "../schema/item.schema";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { Heart, HeartFilled } from "@/components/icons";
import { useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import TitleValue from "./TitleValue";
import { formatNumberWithCommas } from "@/lib/format";

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
  const currentTime = new Date();
  const isLive = currentTime > startDate && currentTime < endDate;

  const { countdownString } = useCountdown(isLive ? endDate : startDate);
  const isExpired = currentTime > endDate;
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="group relative">
      <Button
        onClick={toggleLike}
        className="absolute top-2 right-2 z-[2] bg-white p-3"
      >
        {isLiked ? (
          <HeartFilled className="w-6 h-6 text-red-600" />
        ) : (
          <Heart className="w-6 h-6" />
        )}
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
        <div className="flex items-start justify-start flex-col gap-1.5 lg:gap-1">
          <p className="font-corm capitalize text-xl md:text-2xl font-medium">
            {title}
          </p>

          <div className="flex flex-col items-start justify-start gap-1">
            <TitleValue
              title="estimate:"
              value={`$${formatNumberWithCommas(
                minEstimate
              )} - $${formatNumberWithCommas(maxEstimate)}`}
              className="opacity-60"
            />
            <TitleValue
              title={`${currentBid ? "current bid" : "starting bid"}:`}
              value={`$${formatNumberWithCommas(currentBid || price)}`}
            />

            <div className="capitalize opacity-60">
              {isExpired ? (
                <p className="capitalize">Auction closed</p>
              ) : (
                <TitleValue
                  title={`${isLive ? "ends in:" : "starts in:"}`}
                  value={countdownString}
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
