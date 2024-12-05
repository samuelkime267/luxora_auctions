import type { Metadata } from "next";
import "@/styles/globals.scss";
import { fonts } from "@/data/fonts.data";
import happyUserImg from "@/assets/imgs/happy-users.jpg";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxora Auctions",
  description: "A place where artworks are sold and auctioned",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased relative`}>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen relative">
          <div className="flex items-center justify-center flex-col p-4 md:p-8 w-full">
            <div className="mb-4">
              <Link
                href={"/"}
                className="font-corm font-bold leading-[1] text-2xl uppercase"
              >
                Luxora Auctions
              </Link>
            </div>

            {children}
          </div>

          <div className="hidden lg:block h-full max-h-screen w-full sticky top-0 left-0">
            <div className="w-full h-full relative">
              <div className="absolute top-0 right-0 w-full h-full bg-black/60 p-8 flex items-start justify-end flex-col">
                <h4 className="text-white">Luxora Auction</h4>
                <p className="text-white">
                  An online platform where items are sold and auctioned
                </p>
              </div>
              <Image
                src={happyUserImg}
                alt="happy users"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
