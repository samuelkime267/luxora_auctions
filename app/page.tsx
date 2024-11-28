import Hero from "@/components/Hero";
import ItemsGrid from "@/features/items/components/ItemsGrid";
import { items } from "@/data/artworks.data";
import Titles from "@/components/Titles";
import ExhibitionList from "@/features/exhibition/components/ExhibitionList";
import { exhibitions } from "@/data/exhibitions.data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <Titles title="trending lots" />
      </section>

      <section>
        <Titles title="Featured items" />
        <ItemsGrid data={items} isLoading={false} />
      </section>

      <section>
        <Titles title="Upcoming Auctions" />
      </section>

      <section>
        <Titles title="Upcoming Exhibitions" />
        <ExhibitionList data={exhibitions} />
      </section>
    </main>
  );
}
