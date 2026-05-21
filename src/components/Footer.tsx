import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © 2026 BrandName. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-neutral-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}