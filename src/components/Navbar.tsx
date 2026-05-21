import Link from "next/link";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-black/5 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <div className="text-2xl font-semibold tracking-wide">
          BrandName
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-neutral-800 transition">
            Get Started
          </button>

          <MobileMenu />

        </div>
      </div>
    </nav>
  );
}