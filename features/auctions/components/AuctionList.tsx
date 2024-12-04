"use client";

import { z } from "zod";
import { auctionSchema } from "../schema/auctions.schema";
import AuctionCard from "./AuctionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Arrow } from "@/components/icons";
import { cn } from "@/lib/utils";

type AuctionListProps = {
  auctions: z.infer<typeof auctionSchema>[];
  isSwiper?: boolean;
  className?: string;
};

export default function AuctionList({
  auctions,
  isSwiper,
  className,
}: AuctionListProps) {
  return (
    <>
      {isSwiper ? (
        <AuctionsSwiper auctions={auctions} />
      ) : (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            className
          )}
        >
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </div>
      )}
    </>
  );
}

function AuctionsSwiper({ auctions }: AuctionListProps) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {auctions.map((auction, i) => (
          <SwiperSlide key={i}>
            <AuctionCard key={auction.id} {...auction} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-3 z-10 shadow-xl"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Arrow className="w-6 h-6 -rotate-90" />
      </button>
      <button
        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-3 z-10 shadow-xl"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Arrow className="w-6 h-6 rotate-90" />
      </button>
    </div>
  );
}
