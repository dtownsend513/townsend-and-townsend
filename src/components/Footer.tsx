import Link from "next/link";

const services = [
  "Starter Websites",
  "Website Redesigns",
  "Ecommerce Websites",
  "Landing Pages",
  "Mobile Optimization",
  "Website Support",
];

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.08),_transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 lg:px-8">
        
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl md:p-14">
          
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                Ready To Improve Your Website?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1] tracking-tight md:text-6xl">
                Build a cleaner, more modern online presence for your business.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Better visuals, stronger structure, mobile-first design, and a
                more professional customer experience built around your business.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-sky-400 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-sky-300"
              >
                Request Website Review
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex justify-center rounded-full border border-white/15 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-slate-950"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Townsend & Townsend
            </p>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Modern websites for local businesses, entrepreneurs, service
              brands, and ecommerce businesses that need a stronger online
              presence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                Cincinnati Based
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                Mobile First
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                Modern Design
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-sm font-semibold text-slate-400"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Townsend & Townsend. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Modern web design for small businesses and local brands.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}