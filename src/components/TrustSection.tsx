const trustItems = [
  {
    title: "Built for Real Businesses",
    description:
      "Designed for contractors, beauty brands, local services, startups, ecommerce shops, and growing small businesses.",
  },
  {
    title: "Modern Mobile Experience",
    description:
      "Every website is optimized for phones first because most customers now visit from mobile devices.",
  },
  {
    title: "No Forced Monthly Contracts",
    description:
      "Clients can own their website without being trapped in expensive subscriptions just to keep it online.",
  },
  {
    title: "Professional Brand Presence",
    description:
      "Focused on helping businesses look cleaner, more trustworthy, and more established online.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-28 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.12),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Why Businesses Choose Us
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Websites designed to help businesses look more legitimate online.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Most small business websites fail because they look outdated,
              confusing, slow, or unprofessional. We focus on modern layouts,
              cleaner branding, stronger trust, and customer clarity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/15 text-2xl font-black text-sky-300">
                  +
                </div>

                <h3 className="text-2xl font-black tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}