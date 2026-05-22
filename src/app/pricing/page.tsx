import Link from "next/link";

const packages = [
  {
    name: "Starter Website",
    price: "$499",
    subtitle: "Best for new businesses and entrepreneurs.",
    description:
      "A clean, professional website for businesses that need to get online quickly without overcomplicating the launch.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form",
      "Social media links",
      "Basic SEO setup",
      "Business info setup",
      "Launch assistance",
    ],
    button: "Start Starter Website",
    featured: false,
  },
  {
    name: "Business Website",
    price: "$999+",
    subtitle: "Best for growing businesses that need more polish.",
    description:
      "A stronger custom website for businesses that need better branding, stronger sections, and a more professional customer experience.",
    features: [
      "Custom page layouts",
      "Advanced branding sections",
      "Service/product sections",
      "Booking or inquiry integration",
      "Improved conversion flow",
      "Enhanced mobile experience",
      "Expanded SEO structure",
    ],
    button: "Request Business Website",
    featured: true,
  },
  {
    name: "Ecommerce Website",
    price: "Custom Quote",
    subtitle: "Best for brands selling products online.",
    description:
      "A product-focused website for clothing brands, beauty products, food businesses, digital products, or other online stores.",
    features: [
      "Product pages",
      "Cart setup",
      "Checkout planning",
      "Stripe/PayPal direction",
      "Product category structure",
      "Homepage sales sections",
      "Launch support",
    ],
    button: "Discuss Ecommerce Project",
    featured: false,
  },
  {
    name: "Monthly Care Plan",
    price: "$25–50/mo",
    subtitle: "Best for ongoing support after launch.",
    description:
      "Optional monthly support for businesses that want help keeping their website updated and maintained.",
    features: [
      "Hosting support",
      "Small text/photo updates",
      "Basic maintenance",
      "Performance checks",
      "Contact form support",
      "Website troubleshooting",
      "Ongoing assistance",
    ],
    button: "Ask About Care Plan",
    featured: false,
  },
];

const addOns = [
  "Extra pages",
  "Logo refresh",
  "Product upload help",
  "Booking setup",
  "Copywriting help",
  "Google Business profile help",
  "SEO page expansion",
  "Landing pages",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Website Pricing
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Simple website pricing for entrepreneurs and small businesses.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Transparent packages built for local businesses, startups,
              creators, food businesses, beauty brands, clothing lines, and
              entrepreneurs ready to look more professional online.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-4">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`relative rounded-[2rem] border p-8 shadow-2xl ${
                  item.featured
                    ? "border-sky-400/50 bg-sky-500/10"
                    : "border-white/10 bg-white/[0.05]"
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                    Most Popular
                  </div>
                )}

                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  {item.name}
                </p>

                <h2 className="mt-6 text-4xl font-black">{item.price}</h2>

                <p className="mt-4 font-bold text-slate-200">
                  {item.subtitle}
                </p>

                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-sm text-slate-200">
                  {item.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex w-full justify-center rounded-full px-5 py-4 text-sm font-black transition ${
                    item.featured
                      ? "bg-white text-slate-950 hover:bg-sky-100"
                      : "bg-sky-500 text-white hover:bg-sky-400"
                  }`}
                >
                  {item.button}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                  Available Add-Ons
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                  Need more than the package includes?
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Add-ons are available depending on your business goals, content,
                  products, and launch needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {addOns.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-center text-sm font-bold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <h3 className="text-2xl font-black">What you need to provide</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Business name, logo if available, photos, service details,
                pricing, social links, contact info, and any examples you like.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <h3 className="text-2xl font-black">Timeline</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Most starter websites can be completed in 1–2 weeks depending
                on how quickly content, photos, and revisions are provided.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <h3 className="text-2xl font-black">Payment</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A deposit may be required to start. Final payment is due before
                launch or transfer, depending on the project scope.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[3rem] border border-sky-400/20 bg-sky-500/10 p-10 text-center shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Ready To Start?
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Let’s choose the right website package for your business.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Not sure which package fits? Send a message and we’ll help match
              your business to the right website option.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-sky-100"
            >
              Start My Website Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}