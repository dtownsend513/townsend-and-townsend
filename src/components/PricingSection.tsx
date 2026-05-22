const pricing = [
  {
    name: "Starter Website",
    price: "$499+",
    description:
      "Perfect for startups, solo businesses, and local services that need a clean professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "Launch assistance",
    ],
    highlight: false,
  },
  {
    name: "Business Website",
    price: "$999+",
    description:
      "A stronger business-focused website with more sections, branding, polish, and conversion structure.",
    features: [
      "Custom design layout",
      "Advanced sections",
      "Stronger branding",
      "Expanded SEO setup",
      "Higher-end visual polish",
    ],
    highlight: true,
  },
  {
    name: "Ecommerce Website",
    price: "Custom",
    description:
      "For product brands and businesses that need online shopping, checkout systems, and product management.",
    features: [
      "Product pages",
      "Shopping cart",
      "Checkout integration",
      "Mobile ecommerce flow",
      "Launch support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Website packages designed for growing businesses.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need a simple online presence or a more advanced
            customer-focused website, the goal is to provide a polished,
            professional result without oversized agency pricing.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                plan.highlight
                  ? "border-sky-400 bg-sky-400/10 shadow-2xl shadow-sky-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="mb-6 inline-flex rounded-full bg-sky-400 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black">{plan.name}</h3>

              <p className="mt-4 text-5xl font-black text-sky-300">
                {plan.price}
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                  >
                    <span className="text-sky-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}