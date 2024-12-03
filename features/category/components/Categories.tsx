import { z } from "zod";
import { categorySchema } from "../schema/category.schema";
import Link from "next/link";
import Image from "next/image";

type CategoriesProps = {
  categories: z.infer<typeof categorySchema>[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
      {categories.map(({ id, image, name }, i) => (
        <Link key={i} href={`/shop?category=${id}`} className="group">
          <div className="aspect-square w-full h-auto mb-0.5 overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </div>
          <p className="font-corm capitalize text-xl font-medium">{name}</p>
        </Link>
      ))}
    </div>
  );
}
