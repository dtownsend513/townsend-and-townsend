import Link from "next/link";

const services = [
  {
    title: "Starter Business Website",
    subtitle: "For New Businesses & Entrepreneurs",
    description:
      "A clean, modern website designed for entrepreneurs, startups, and local businesses that need a professional online presence without unnecessary complexity.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Modern visual structure",
      "Contact form integration",
      "Social media links",
      "Basic SEO setup",
      "Launch-ready deployment",
      "Business info setup",
    ],
  },
  {
    title: "Business Website Upgrade",
    subtitle: "For Growing Businesses",
    description:
      "A stronger website experience for businesses that need better branding, stronger messaging, improved customer flow, and a more professional online presentation.",
    features: [
      "Modern redesign",
      "Better page structure",
      "Improved customer flow",
      "Responsive mobile cleanup",
      "Stronger visual hierarchy",
      "Updated branding direction",
      "Service/product sections",
      "Conversion-focused layout",
    ],
  },
  {
    title: "Ecommerce Website",
    subtitle: "For Product-Based Businesses",
    description:
      "Modern ecommerce websites designed for clothing brands, beauty products, food businesses, creators, and brands that need product pages, checkout flow, and stronger online presentation.",
    features: [
      "Product page setup",
      "Shopping cart planning",
      "Stripe/PayPal direction",
      "Mobile ecommerce optimization",
      "Category organization",
      "Product presentation",
      "Homepage sales sections",
      "Launch support",
    ],
  },
  {
    title: "Monthly Website Support",
    subtitle: "Optional Ongoing Help",
    description:
      "Support plans for businesses that want help with updates, troubleshooting, content edits, website maintenance, and future improvements after launch.",
    features: [
      "Website updates",
      "Small text/photo edits",
      "Troubleshooting",
      "Domain support",
      "SSL assistance",
      "General maintenance",
      "Contact form support",
      "Ongoing assistance",
    ],
  },
];

const industries = [
  "Barbershops",
  "Food Businesses",
  "Clothing Brands",
  "Beauty Businesses",
  "Detailing Businesses",
  "Entrepreneurs",
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#050b16] text-white">
      
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_36%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto max-w-6xl text-center">
          
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
            Services
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Modern website solutions for entrepreneurs and growing businesses.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            We help local businesses, startups, creators, and entrepreneurs
            launch modern websites that improve trust, strengthen branding, and
            help customers take their business more seriously online.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-[0_35px_100px_rgba(0,0,0,0.4)] transition hover:-translate-y-2 ${
                index === 1
                  ? "border-sky-300/40 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.06] text-white backdrop-blur"
              }`}
            >

              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  index === 1
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-slate-950"
                    : "bg-gradient-to-r from-sky-400/60 via-blue-500/30 to-transparent"
                }`}
              />

              {index === 1 && (
                <div className="absolute right-8 top-8 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}

              <p
                className={`text-sm font-black uppercase tracking-[0.3em] ${
                  index === 1 ? "text-sky-600" : "text-sky-300"
                }`}
              >
                {service.subtitle}
              </p>

              <h2 className="mt-8 text-4xl font-black tracking-[-0.03em]">
                {service.title}
              </h2>

              <p
                className={`mt-6 text-lg leading-8 ${
                  index === 1 ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-10 grid gap-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${
                      index === 1 ? "bg-slate-100" : "bg-white/[0.05]"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        index === 1
                          ? "bg-slate-950 text-white"
                          : "bg-sky-400/15 text-sky-300"
                      }`}
                    >
                      ✓
                    </div>

                    <p
                      className={`font-bold ${
                        index === 1 ? "text-slate-800" : "text-slate-200"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-10 inline-flex rounded-full px-8 py-4 text-sm font-black transition ${
                  index === 1
                    ? "bg-slate-950 text-white hover:bg-sky-700"
                    : "bg-white text-slate-950 hover:bg-sky-100"
                }`}
              >
                Start This Project
              </Link>

            </div>
          ))}

        </div>
      </section>

      {/* PRICING ALIGNMENT */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-10 text-center shadow-2xl backdrop-blur">
          
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Simple Pricing
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight">
            Website packages starting at $499.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Affordable website solutions for businesses that need a stronger
            online presence without expensive agency pricing.
          </p>

          <Link
            href="/pricing"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-sky-100"
          >
            View Pricing
          </Link>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 pb-32 pt-8 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="grid gap-10 px-10 py-20 text-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Ready To Build?
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Let’s build a website that helps your business look professional online.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                Cleaner branding, stronger customer trust, responsive layouts,
                and a modern experience built around entrepreneurs, local
                businesses, and growing brands.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
                >
                  Start a Website Project
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  View Website Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}