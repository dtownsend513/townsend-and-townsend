import Link from "next/link";

const packages = [
  {
    name: "Starter Website",
    price: "Starting at $750",
    description:
      "For startups and local businesses that need a clean, professional online presence.",
    features: [
      "1–3 pages",
      "Mobile responsive design",
      "Contact form",
      "Modern layout",
      "Launch support",
      "Domain connection help",
    ],
    cta: "Start Your Website",
  },
  {
    name: "Business Website",
    price: "Starting at $1,500",
    description:
      "For businesses that need stronger branding, better structure, and a more custom website.",
    features: [
      "Custom sections",
      "Service pages",
      "Portfolio or gallery",
      "SEO foundation",
      "Analytics setup",
      "Conversion-focused layout",
    ],
    cta: "Build My Business Website",
    featured: true,
  },
  {
    name: "Ecommerce Website",
    price: "Starting at $2,500+",
    description:
      "For product-based businesses ready to sell online with a polished shopping experience.",
    features: [
      "Product pages",
      "Shopping cart setup",
      "Stripe planning",
      "Mobile ecommerce layout",
      "Checkout flow",
      "Launch support",
    ],
    cta: "Launch My Store",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white px-6 py-28 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-600">
            Pricing
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Simple pricing for modern business websites.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Transparent starting prices, modern design, and optional support —
            without locking businesses into unnecessary subscriptions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-[2rem] border p-8 shadow-xl transition hover:-translate-y-2 ${
                item.featured
                  ? "border-sky-300 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {item.featured && (
                <div className="absolute -top-4 left-8 rounded-full bg-sky-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black tracking-tight">
                {item.name}
              </h3>

              <p
                className={`mt-4 text-2xl font-black ${
                  item.featured ? "text-sky-300" : "text-sky-600"
                }`}
              >
                {item.price}
              </p>

              <p
                className={`mt-5 leading-7 ${
                  item.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>

              <div className="mt-8 space-y-4">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${
                        item.featured
                          ? "bg-sky-400 text-slate-950"
                          : "bg-slate-950 text-white"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                  item.featured
                    ? "bg-white text-slate-950 hover:bg-sky-100"
                    : "bg-slate-950 text-white hover:bg-sky-700"
                }`}
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-2xl font-black">Optional Website Care Plans</h3>

          <p className="mt-3 text-xl font-black text-sky-600">
            Starting at $50/month
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            Optional support plans are available for businesses that want
            ongoing edits, maintenance, troubleshooting, and technical support
            after launch.
          </p>

          <p className="mt-5 font-black text-slate-950">
            You own your website. No forced subscriptions required.
          </p>
        </div>
      </div>
    </section>
  );
}