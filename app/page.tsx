import Hero from "@/components/Hero";
import ItemsGrid from "@/features/items/components/ItemsGrid";
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
        <ItemsGrid data={items} isLoading={false} />
      </section>

      <section>
        <Titles title="Featured items" />
      </section>
    </main>
  );
}
