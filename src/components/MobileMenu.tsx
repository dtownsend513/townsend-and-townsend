"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="md:hidden">
          <Menu className="h-7 w-7" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px]">
        <div className="mt-12 flex flex-col gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}