const services = [
  {
    title: "Launch Website",
    price: "Starter sites",
    description:
      "For small businesses that need a clean online presence fast without overcomplicating the build.",
    features: ["1–3 page website", "Mobile responsive", "Contact form", "Domain connection"],
  },
  {
    title: "Business Redesign",
    price: "Most popular",
    description:
      "For businesses with an outdated website that needs better branding, layout, trust, and conversion flow.",
    features: ["Modern redesign", "Stronger messaging", "Better visuals", "Speed cleanup"],
  },
  {
    title: "Online Store",
    price: "Ecommerce",
    description:
      "For product-based businesses ready to sell online with organized products, checkout, and payment setup.",
    features: ["Product pages", "Cart flow", "Stripe/PayPal", "Launch support"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-6 py-28 text-slate-950 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-slate-950" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-600">
            What We Build
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Pick the website your business actually needs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            No bloated packages. No confusing tech talk. Just clean websites
            built to help customers trust your business and take action.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative rounded-[2rem] border p-8 shadow-xl transition hover:-translate-y-2 ${
                index === 1
                  ? "border-sky-300 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-8 rounded-full bg-sky-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950">
                  Best Fit
                </div>
              )}

              <p
                className={`text-sm font-black uppercase tracking-[0.25em] ${
                  index === 1 ? "text-sky-300" : "text-sky-600"
                }`}
              >
                {service.price}
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-tight">
                {service.title}
              </h3>

              <p
                className={`mt-5 leading-7 ${
                  index === 1 ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${
                        index === 1
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

              <div
                className={`mt-10 rounded-2xl p-5 ${
                  index === 1 ? "bg-white/10" : "bg-slate-100"
                }`}
              >
                <p
                  className={`text-sm font-semibold leading-6 ${
                    index === 1 ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  Built for business owners who want something professional
                  without getting buried in the technical side.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}