import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr]">
          
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              Townsend & Townsend
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
              Modern websites built for real businesses.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We help local businesses improve their online presence with
              cleaner branding, responsive layouts, modern design, and websites
              built to convert visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-sky-400">
                Navigation
              </h3>

              <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-slate-300">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>

                <Link href="/portfolio" className="transition hover:text-white">
                  Portfolio
                </Link>

                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>

                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-sky-400">
                Services
              </h3>

              <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-slate-300">
                <p>Website Design</p>
                <p>Website Redesigns</p>
                <p>Ecommerce Setup</p>
                <p>Hosting & Maintenance</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 Townsend & Townsend. All rights reserved.
          </p>

          <p>
            Cincinnati, Ohio • Modern Web Design
          </p>

        </div>
      </div>
    </footer>
  );
}