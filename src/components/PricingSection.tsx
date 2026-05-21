import Link from "next/link";

const packages = [
  {
    name: "Starter Website",
    price: "$750+",
    description:
      "Perfect for local businesses that need a clean, professional online presence without overcomplicating the build.",
    features: [
      "1–3 pages",
      "Mobile responsive layout",
      "Professional branding",
      "Contact form integration",
      "Launch support",
      "Domain setup help",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    price: "$1,500+",
    description:
      "For businesses that need stronger branding, better structure, and a more premium customer-facing experience.",
    features: [
      "Custom page sections",
      "Service-focused structure",
      "SEO foundation",
      "Analytics setup",
      "Portfolio/gallery support",
      "Conversion-focused design",
    ],
    featured: true,
  },
  {
    name: "Ecommerce Website",
    price: "$2,500+",
    description:
      "For product-based businesses ready to launch a polished online store with a modern shopping experience.",
    features: [
      "Product pages",
      "Shopping cart flow",
      "Checkout planning",
      "Stripe integration",
      "Mobile ecommerce optimization",
      "Launch support",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-32 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_36%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Pricing
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Transparent pricing for modern business websites.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            No confusing packages or forced contracts. Just professional
            websites built around what your business actually needs.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`relative overflow-hidden rounded-[2.5rem] border p-8 shadow-[0_35px_100px_rgba(0,0,0,0.4)] transition hover:-translate-y-2 ${
                item.featured
                  ? "border-sky-300/40 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.06] text-white backdrop-blur"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  item.featured
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-slate-950"
                    : "bg-gradient-to-r from-sky-400/60 via-blue-500/30 to-transparent"
                }`}
              />

              {item.featured && (
                <div className="absolute right-8 top-8 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black tracking-[-0.03em]">
                {item.name}
              </h3>

              <div className="mt-8">
                <p
                  className={`text-5xl font-black tracking-tight ${
                    item.featured ? "text-sky-600" : "text-sky-300"
                  }`}
                >
                  {item.price}
                </p>

                <p
                  className={`mt-6 leading-8 ${
                    item.featured ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-4 ${
                      item.featured
                        ? "bg-slate-100"
                        : "bg-white/[0.05]"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        item.featured
                          ? "bg-slate-950 text-white"
                          : "bg-sky-400/15 text-sky-300"
                      }`}
                    >
                      ✓
                    </div>

                    <span
                      className={`font-bold ${
                        item.featured
                          ? "text-slate-800"
                          : "text-slate-200"
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
                  item.featured
                    ? "bg-slate-950 text-white hover:bg-sky-700"
                    : "bg-white text-slate-950 hover:bg-sky-100"
                }`}
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
          <div className="grid gap-10 p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Optional Website Care
              </p>

              <h3 className="mt-5 text-4xl font-black tracking-[-0.03em]">
                Ongoing support if you need it.
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Optional care plans are available for businesses that want help
                with updates, edits, troubleshooting, and future improvements
                after launch.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Starting At
                </p>

                <p className="mt-4 text-5xl font-black">$50</p>

                <p className="mt-2 text-lg font-bold text-slate-300">
                  per month
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Includes
                </p>

                <div className="mt-4 space-y-3 text-sm font-bold text-slate-300">
                  <p>• Small edits</p>
                  <p>• Troubleshooting</p>
                  <p>• Website guidance</p>
                  <p>• Ongoing support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/20 px-8 py-5 text-center">
            <p className="font-black text-white">
              You own your website. No forced subscriptions required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}