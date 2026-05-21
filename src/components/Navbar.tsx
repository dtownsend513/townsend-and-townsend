import Link from "next/link";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050b16]/90 text-white shadow-2xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="group leading-tight">
          <div className="text-2xl font-black tracking-tight text-white transition group-hover:text-sky-300">
            Townsend & Townsend
          </div>

          <div className="mt-1 text-[11px] font-black uppercase tracking-[0.32em] text-sky-400">
            Digital Solutions
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1 text-sm font-bold text-slate-300 shadow-xl backdrop-blur md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Portfolio
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-sky-100 md:block"
          >
            Get Started
          </Link>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}