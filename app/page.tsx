import Hero from "@/components/Hero";
import ProductGrid from "@/features/artworks/components/ProductGrid";
import { artworks } from "@/data/artworks.data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <h4 className='mb-6'>Featured Artworks</h4>
        <ProductGrid data={artworks} isLoading={false} />
      </section>
    </main>
  );
}
