import Hero from "@/components/Hero";
import ItemsList from "@/features/items/components/ItemsList";
import { items } from "@/data/items.data";
import Titles from "@/components/Titles";
import AuctionList from "@/features/auctions/components/AuctionList";
import { auctions } from "@/data/auctions.data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <Titles title="ongoing Auctions" />
        <AuctionList auctions={auctions} isSwiper />
      </section>

      <section>
        <Titles title="trending lots" />
        <ItemsList data={items} isLoading={false} isSwiper />
      </section>

      <section>
        <Titles title="Featured items" />
      </section>
    </main>
  );
}
