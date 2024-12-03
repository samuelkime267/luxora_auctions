"use client";

import React from "react";
import { navLinks } from "@/data/nav-links.data";
import Link from "next/link";
import Button from "./Button";
import { Plus } from "./icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type SidebarProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
};

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const path = usePathname();
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full z-[60] lg:hidden flex flex-col items-start justify-start p-4 bg-white duration-300 -translate-x-full gap-8",
        {
          "translate-x-0": isSidebarOpen,
        }
      )}
    >
      <div className="w-full flex items-center justify-between gap-4">
        <Link
          href={"/"}
          className="font-corm font-bold text-xl uppercase"
          onClick={closeSidebar}
        >
          Luxora Auctions
        </Link>

        <Button onClick={closeSidebar}>
          <Plus className="w-10 h-10 rotate-45" />
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 w-full">
        {navLinks.map(({ link, name }, i) => (
          <Link
            key={i}
            href={link}
            className={cn(
              "capitalize font-medium text-4xl font-corm duration-300 border-b border-b-black w-full pb-4 text-black/50 border-black/50 hover:text-black hover:border-black",
              {
                "text-black border-black": link === path,
              }
            )}
            onClick={closeSidebar}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
