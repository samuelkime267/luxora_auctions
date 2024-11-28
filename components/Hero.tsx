import Image from "next/image";
import { images } from "@/data/imgs.data";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section className="px-0 max-w-full">
      <div className="px-4 md:px-8 mb-8">
        <h2 className="uppercase text-[2rem] md:text-[4.5rem] lg:text-[5.5rem] text-center max-w-screen-2xl mx-auto mb-4 md:mb-6">
          Discover Timeless Items: Bid, Collect, and Inspire at Luxora Auctions
        </h2>
        <p className="text-center max-w-[35pc] mx-auto">
          Explore a curated collection of extraordinary items from renowned and
          emerging experts. Unleash your passion for exclusive items through
          exclusive auctions and secure your next masterpiece.
        </p>
      </div>

      <div className="h-56 md:h-96">
        <Marquee autoFill>
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={img}
              width={400}
              height={400}
              className="mx-2 md:mx-4 h-56 md:h-96 w-auto"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
