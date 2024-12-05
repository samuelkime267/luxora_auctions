import Hero from "@/components/Hero";
import ItemsList from "@/features/items/components/ItemsList";
import { items } from "@/data/items.data";
import Titles from "@/components/Titles";
import AuctionList from "@/features/auctions/components/AuctionList";
import { auctions } from "@/data/auctions.data";
import Categories from "@/features/category/components/Categories";
import { categories } from "@/data/categories.data";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <Titles title="Browse categories" />
        <Categories categories={categories} />
      </section>
      <section>
        <Titles title="ongoing Auctions" />
        <AuctionList auctions={auctions} isSwiper />
      </section>

      <section>
        <Titles title="trending lots" />
        <ItemsList
          data={items.filter((item) => item.itemType === "auctioned")}
          isLoading={false}
          isSwiper
        />
      </section>

      <section>
        <Titles title="upcoming Auctions" />
        <AuctionList auctions={auctions} isSwiper />
      </section>

      <section>
        <Titles title="shop from our store" />
        <ItemsList
          data={items.filter((item) => item.itemType === "sales")}
          isLoading={false}
          isSwiper
        />
      </section>

      <section className="flex items-center justify-center">
        <div className="border border-neutral-300 p-4 md:p-8">
          <Titles
            title="stay in touch with us"
            className="border-transparent flex items-center justify-center"
          />
          <form className="flex items-center justify-center">
            <Input
              placeholder="Enter your email"
              className="max-md:max-w-[50vw] "
            />
            <Button btnType="primary">subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
