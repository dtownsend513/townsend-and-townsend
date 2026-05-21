import Link from "next/link";

const services = [
  {
    title: "Launch Website",
    subtitle: "For businesses starting fresh",
    description:
      "A clean, professional website for businesses that need a strong online presence without overcomplicating the build.",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "Contact section or form",
      "Basic SEO structure",
      "Domain connection support",
      "Launch-ready deployment",
    ],
  },
  {
    title: "Business Redesign",
    subtitle: "For outdated websites",
    description:
      "A full refresh for businesses with an older website that needs stronger visuals, better messaging, and a cleaner customer experience.",
    features: [
      "Modern homepage redesign",
      "Improved layout and spacing",
      "Stronger calls-to-action",
      "Mobile cleanup",
      "Updated visuals and branding",
      "Performance-focused structure",
    ],
  },
  {
    title: "Online Store",
    subtitle: "For product-based businesses",
    description:
      "A modern ecommerce setup for brands that need product pages, cart flow, checkout structure, and payment-ready presentation.",
    features: [
      "Product page structure",
      "Cart and checkout flow",
      "Stripe or PayPal planning",
      "Product categories",
      "Mobile shopping experience",
      "Launch support",
    ],
  },
  {
    title: "Hosting & Maintenance",
    subtitle: "For ongoing support",
    description:
      "Website hosting support, small edits, domain help, SSL setup, and general maintenance after launch.",
    features: [
      "Netlify deployment support",
      "Domain and DNS help",
      "SSL setup",
      "Small content updates",
      "Bug fixes",
      "Basic monthly maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
            Website services built for small business growth.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Whether you need a brand-new website, a cleaner redesign, an online
            store, or ongoing support, Townsend & Townsend helps your business
            look more professional online.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                {service.subtitle}
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                {service.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 grid gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      ✓
                    </div>

                    <p className="font-semibold text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-10 py-20 text-center text-white shadow-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Ready To Build?
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Start with the website your business needs right now.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Clean design, modern structure, mobile-friendly layouts, and launch
            support from start to finish.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-sky-100"
          >
            Request a Website Quote
          </Link>
        </div>
      </section>
    </main>
  );
}