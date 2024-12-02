"use client";

import { z } from "zod";
import { itemSchema } from "../schema/item.schema";
import Item from "./Item";
import { Swiper, SwiperSlide } from "Swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Arrow } from "@/components/icons";

type Props = {
  data: z.infer<typeof itemSchema>[];
  isLoading: boolean;
  isSwiper?: boolean;
};

export default function ItemsList({ data, isLoading, isSwiper }: Props) {
  console.log(isLoading);

  return (
    <>
      {isSwiper ? (
        <ItemsSwiper data={data} isLoading={isLoading} />
      ) : (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {data.map((data, i) => (
            <Item key={i} {...data} />
          ))}
        </div>
      )}
    </>
  );
}

function ItemsSwiper({ data }: Props) {
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
        {data.map((data, i) => (
          <SwiperSlide key={i}>
            <Item {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 z-10 shadow-xl"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Arrow className="w-6 h-6 -rotate-90" />
      </button>
      <button
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 z-10 shadow-xl"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Arrow className="w-6 h-6 rotate-90" />
      </button>
    </div>
  );
}
