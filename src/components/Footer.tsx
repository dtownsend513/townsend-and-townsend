import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
              Townsend & Townsend
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">
              Websites built to make small businesses look professional online.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Modern web design, redesigns, ecommerce websites, and website
              support for entrepreneurs, startups, and local businesses.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-black uppercase tracking-[0.2em] text-white">
                Pages
              </h3>

              <div className="mt-5 space-y-3 text-slate-300">
                <Link className="block hover:text-sky-400" href="/">
                  Home
                </Link>
                <Link className="block hover:text-sky-400" href="/portfolio">
                  Portfolio
                </Link>
                <Link className="block hover:text-sky-400" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-[0.2em] text-white">
                Services
              </h3>

              <div className="mt-5 space-y-3 text-slate-300">
                <p>Starter Websites</p>
                <p>Website Redesigns</p>
                <p>Ecommerce Websites</p>
                <p>Website Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Townsend & Townsend. All rights reserved.</p>
          <p>Cincinnati web design for small businesses.</p>
        </div>
      </div>
    </footer>
  );
}