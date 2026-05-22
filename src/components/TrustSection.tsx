const trustItems = [
  {
    title: "Built For Entrepreneurs",
    description:
      "Designed for startups, local businesses, creators, food businesses, beauty brands, and entrepreneurs building their presence online.",
    icon: "01",
  },
  {
    title: "Mobile-First Experience",
    description:
      "Most customers browse from their phones first, so every website is designed to look clean and professional on mobile devices.",
    icon: "02",
  },
  {
    title: "Simple & Transparent Pricing",
    description:
      "No confusing agency pricing, hidden fees, or unnecessary upsells. Just modern websites built around what your business actually needs.",
    icon: "03",
  },
  {
    title: "Professional Online Presence",
    description:
      "We focus on helping businesses look more established, trustworthy, and customer-ready online.",
    icon: "04",
  },
  {
    title: "Done-For-You Setup",
    description:
      "We handle the technical side so business owners can focus on running and growing their business.",
    icon: "05",
  },
  {
    title: "Modern Website Design",
    description:
      "Clean layouts, strong branding, modern visuals, and better customer flow designed to help your business stand out.",
    icon: "06",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-6 py-32 text-white lg:px-8">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.14),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          
          <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Why Businesses Work With Us
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Helping businesses look more professional online.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Most small businesses rely only on social media or outdated websites.
            We help entrepreneurs create modern online experiences that build
            trust, improve branding, and make customers feel more confident
            reaching out.
          </p>

        </div>

        {/* Trust Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {trustItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-white/[0.08]"
            >

              {/* Number Badge */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/10 text-xl font-black text-sky-300 transition group-hover:bg-sky-400/20">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-black tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-slate-300">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 rounded-[2rem] border border-sky-400/20 bg-sky-500/10 p-10 text-center shadow-2xl backdrop-blur">
          
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Built Around Small Business Growth
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            A professional website helps customers take your business more seriously.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're launching a new business or upgrading your online
            presence, your website should help customers trust your brand,
            understand your services, and contact you easily.
          </p>

        </div>

      </div>
    </section>
  );
}