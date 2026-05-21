import Link from "next/link";
import { Menu } from "lucide-react";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="leading-tight">
          <div className="text-2xl font-black tracking-tight text-slate-950">
            Townsend & Townsend
          </div>
          <div className="mt-1 text-[11px] font-black uppercase tracking-[0.28em] text-sky-600">
            Digital Solutions
          </div>
        </Link>

        <div className="hidden items-center gap-9 text-sm font-bold text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-sky-600">
            Home
          </Link>
          <Link href="/services" className="transition hover:text-sky-600">
            Services
          </Link>
          <Link href="/portfolio" className="transition hover:text-sky-600">
            Portfolio
          </Link>
          <Link href="/about" className="transition hover:text-sky-600">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-sky-600">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-sky-700 md:block"
          >
            Get Started
          </Link>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}