"use client";

import { navLinks } from "@/data/nav-links.data";
import Link from "next/link";
import { Bell, Cart, Search, Menu, Account } from "./icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 left-0 w-full z-50 flex items-center justify-between py-4 md:py-6 px-4 md:px-8 mb-white shadow-sm bg-white">
      <Link
        href={"/"}
        className="font-corm font-bold leading-[1] text-lg md:text-2xl uppercase"
      >
        Luxora Auctions
      </Link>

      <div className="hidden lg:flex items-center gap-4 justify-center">
        {navLinks.map(({ link, name }, i) => {
          const isCurrentPage = path === link;
          return (
            <div key={i} className="relative group">
              <Link
                href={link}
                className={cn(
                  "capitalize font-medium relative opacity-60 hover:opacity-100",
                  {
                    "opacity-100": isCurrentPage,
                  }
                )}
              >
                {name}
              </Link>
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-hover:w-full",
                  { "w-full": isCurrentPage }
                )}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 justify-center">
        <Link href={"/search"}>
          <Search className="w-8 h-8" />
        </Link>
        <Link href={"/cart"} className="relative">
          <Cart className="w-8 h-8" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-600" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-600" />
            <Bell className="w-8 h-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-80" align="end">
            <DropdownMenuLabel className="text-lg">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>No active notifications</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href={"/account"}>
          <Account className="w-8 h-8" />
        </Link>

        <Button className="block lg:hidden">
          <Menu className="w-8 h-8" />
        </Button>
      </div>
    </nav>
  );
}
