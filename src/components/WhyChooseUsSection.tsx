const reasons = [
  {
    title: "Modern Premium Design",
    description:
      "Your website should immediately make customers feel like your business is legitimate, polished, and trustworthy.",
  },
  {
    title: "Mobile-First Layouts",
    description:
      "Most visitors come from phones now. Every section is designed to look clean and professional on mobile devices first.",
  },
  {
    title: "Affordable For Small Businesses",
    description:
      "Professional websites without bloated agency pricing or unnecessary complexity.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Get your business online quickly without months of delays and endless revisions.",
  },
  {
    title: "Built To Convert",
    description:
      "Strong messaging, clear CTAs, cleaner layouts, and customer-focused structure designed to generate more inquiries.",
  },
  {
    title: "Local & Personal",
    description:
      "Direct communication, collaborative revisions, and a focus on helping real businesses grow online.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.15),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
            Why Businesses Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            More than just a website. A better first impression for your business.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Most small business websites fail because they look outdated,
            confusing, or unfinished. We focus on building websites that feel
            modern, premium, and easy to trust immediately.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/20 text-2xl font-black text-sky-300">
                ✓
              </div>

              <h3 className="text-2xl font-black">{reason.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}