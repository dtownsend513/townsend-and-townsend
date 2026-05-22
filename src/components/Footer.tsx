import Link from "next/link";

const navigation = [
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

const services = [
  "Starter Business Websites",
  "Website Redesigns",
  "Ecommerce Websites",
  "Mobile Optimization",
  "Monthly Website Support",
];

const industries = [
  "Barbershops",
  "Food Trucks",
  "Clothing Brands",
  "Beauty Businesses",
  "Detailing Businesses",
  "Local Startups",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr]">

          {/* Brand */}
          <div>
            
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
              Townsend & Townsend
            </div>

            <h2 className="mt-8 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Websites built for entrepreneurs and small businesses.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              We help businesses build a stronger online presence with modern
              website design, cleaner branding, responsive layouts, and better
              customer experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-300">
                Mobile Responsive
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-300">
                Ecommerce Ready
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-300">
                Modern Design
              </div>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Navigation
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-bold text-slate-300 transition hover:translate-x-1 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>

          {/* Services */}
          <div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Services
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-base font-bold text-slate-300"
                >
                  {service}
                </p>
              ))}
            </div>

          </div>

          {/* Industries */}
          <div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Industries
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {industries.map((industry) => (
                <p
                  key={industry}
                  className="text-base font-bold text-slate-300"
                >
                  {industry}
                </p>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
              Cincinnati Small Business Web Design
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Websites for startups, entrepreneurs, ecommerce brands, and local businesses.
            </p>

          </div>

          <div className="text-sm text-slate-500">
            © 2026 Townsend & Townsend. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}