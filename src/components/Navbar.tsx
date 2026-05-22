import Link from "next/link";

import MobileMenu from "./MobileMenu";

const navLinks = [
  {
    name: "Home",
    href: "/",
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
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050b16]/80 text-white backdrop-blur-2xl">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.08),_transparent_30%)]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="group leading-tight">
          
          <div className="text-2xl font-black tracking-tight text-white transition group-hover:text-sky-300">
            Townsend & Townsend
          </div>

          <div className="mt-1 text-[11px] font-black uppercase tracking-[0.32em] text-sky-400">
            Small Business Websites
          </div>

        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] p-1 text-sm font-bold text-slate-300 shadow-2xl backdrop-blur md:flex">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-5 py-2.5 transition hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">

          <Link
            href="/contact"
            className="hidden rounded-full bg-sky-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-sky-400 md:inline-flex"
          >
            Start Your Website
          </Link>

          <MobileMenu />

        </div>

      </div>
    </nav>
  );
}