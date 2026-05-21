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
    name: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu className="w-7 h-7" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px]">
        <div className="flex flex-col gap-8 mt-12">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}