import Titles from "@/components/Titles";
import AuctionList from "@/features/auctions/components/AuctionList";
import { auctions } from "@/data/auctions.data";

export default function Auctions() {
  return (
    <main>
      <section>
        <Titles title="Browse all auctions" />

        <div>{/* search coutn blablabla */}</div>

        <div className="grid grid-cols-[16rem,1fr] gap-4">
          <div className="border border-red-900"></div>
          <AuctionList auctions={auctions} />
        </div>
      </section>
    </main>
  );
}
