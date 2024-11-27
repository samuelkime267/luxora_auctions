import type { Metadata } from "next";
import "@/styles/globals.scss";
import { fonts } from "@/data/fonts.data";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
