import Link from "next/link";

const services = [
  {
    title: "Launch Website",
    subtitle: "For Businesses Starting Fresh",
    description:
      "A clean, modern website designed for businesses that need a professional online presence without unnecessary complexity.",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "Modern visual structure",
      "Contact form integration",
      "Basic SEO setup",
      "Launch-ready deployment",
    ],
  },
  {
    title: "Business Redesign",
    subtitle: "For Outdated Websites",
    description:
      "A complete refresh for businesses with websites that feel outdated, cluttered, confusing, or no longer reflect the quality of the business.",
    features: [
      "Modern redesign",
      "Better page structure",
      "Improved customer flow",
      "Responsive mobile cleanup",
      "Stronger visual hierarchy",
      "Updated branding direction",
    ],
  },
  {
    title: "Online Store",
    subtitle: "For Ecommerce Businesses",
    description:
      "Modern ecommerce experiences designed for brands that need product pages, checkout flow, and stronger online presentation.",
    features: [
      "Product page setup",
      "Shopping cart flow",
      "Stripe integration planning",
      "Mobile ecommerce optimization",
      "Category organization",
      "Launch support",
    ],
  },
  {
    title: "Website Support",
    subtitle: "Optional Ongoing Help",
    description:
      "Support plans for businesses that want help with updates, troubleshooting, content edits, and future improvements after launch.",
    features: [
      "Website updates",
      "Small edits",
      "Troubleshooting",
      "Domain support",
      "SSL assistance",
      "General maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#050b16] text-white">
      <section className="relative overflow-hidden px-6 pb-28 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_36%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
            Services
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Website services built around modern business presentation.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            From launch websites to ecommerce stores and full redesigns,
            Townsend & Townsend helps businesses build cleaner, more trustworthy
            online experiences.
          </p>
        </div>
      </section>

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
                      index === 1
                        ? "bg-slate-100"
                        : "bg-white/[0.05]"
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
                        index === 1
                          ? "text-slate-800"
                          : "text-slate-200"
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
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 pb-32 pt-8 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="grid gap-10 px-10 py-20 text-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Ready To Build?
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Let’s build a website that actually reflects your business quality.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                Cleaner branding, stronger customer trust, responsive layouts,
                and a modern experience built around real businesses.
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
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}