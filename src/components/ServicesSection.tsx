import Link from "next/link";

const services = [
  {
    title: "Launch Website",
    label: "Starter Build",
    description:
      "A clean, professional website for businesses that need to look credible online without overcomplicating the launch.",
    features: ["1–3 page structure", "Mobile responsive", "Contact form", "Domain setup help"],
  },
  {
    title: "Business Redesign",
    label: "Best Fit",
    description:
      "A stronger website experience for businesses with an outdated, bland, or confusing site that no longer represents them well.",
    features: ["Modern redesign", "Better messaging", "Visual upgrade", "Conversion flow"],
    featured: true,
  },
  {
    title: "Online Store",
    label: "Ecommerce",
    description:
      "A polished ecommerce setup for product-based businesses that need product pages, checkout flow, and a customer-ready store.",
    features: ["Product pages", "Cart structure", "Stripe planning", "Launch support"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-32 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              What We Build
            </p>

            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Websites built around business credibility, not just decoration.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            Every build is designed to help your business look professional,
            explain your services clearly, and give customers a simple path to
            contact you, book you, or buy from you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 ${
                service.featured
                  ? "border-sky-300/40 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.06] text-white backdrop-blur"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  service.featured
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-slate-950"
                    : "bg-gradient-to-r from-sky-400/60 via-blue-500/30 to-transparent"
                }`}
              />

              {service.featured && (
                <div className="absolute right-8 top-8 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}

              <p
                className={`text-sm font-black uppercase tracking-[0.3em] ${
                  service.featured ? "text-sky-600" : "text-sky-300"
                }`}
              >
                {service.label}
              </p>

              <h3 className="mt-8 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                {service.title}
              </h3>

              <p
                className={`mt-6 leading-8 ${
                  service.featured ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        service.featured
                          ? "bg-slate-950 text-white"
                          : "bg-sky-400/15 text-sky-300"
                      }`}
                    >
                      ✓
                    </span>

                    <span
                      className={`font-bold ${
                        service.featured ? "text-slate-800" : "text-slate-200"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                  service.featured
                    ? "bg-slate-950 text-white hover:bg-sky-700"
                    : "bg-white text-slate-950 hover:bg-sky-100"
                }`}
              >
                Start This Project
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Straightforward Process
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-2xl font-black tracking-[-0.03em] md:text-4xl">
            No confusing packages. No forced subscriptions. Just a professional
            website built around what your business actually needs.
          </p>
        </div>
      </div>
    </section>
  );
}