import Hero from "@/components/Hero";
import ItemsList from "@/features/items/components/ItemsList";
import { items } from "@/data/items.data";
import Titles from "@/components/Titles";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <Titles title="ongoing Auctions" />
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
