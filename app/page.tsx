import Hero from "@/components/Hero";
import ProductGrid from "@/features/artworks/components/ProductGrid";
import { artworks } from "@/data/artworks.data";
import Titles from "@/components/Titles";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <Titles title="Featured Artworks" />
        <ProductGrid data={artworks} isLoading={false} />
      </section>

      <section>
        <Titles title="Upcoming Auctions" />
      </section>
    </main>
  );
}
