import Link from "next/link";

const services = [
  {
    title: "Business Websites",
    description:
      "Modern websites for local businesses, startups, and entrepreneurs.",
    features: [
      "Mobile responsive",
      "Modern layouts",
      "Professional branding",
    ],
  },
  {
    title: "Ecommerce Stores",
    description:
      "Clean online stores designed for product sales and brand growth.",
    features: [
      "Product pages",
      "Shopping cart setup",
      "Conversion-focused design",
    ],
    featured: true,
  },
  {
    title: "Website Redesigns",
    description:
      "Refresh outdated websites with a cleaner and more modern experience.",
    features: [
      "Updated visuals",
      "Better mobile experience",
      "Stronger customer trust",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.10),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Services
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Clean websites built for modern businesses.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Focused on modern design, mobile responsiveness, and helping
            businesses present themselves professionally online.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-[2rem] border p-8 shadow-2xl transition hover:-translate-y-2 ${
                service.featured
                  ? "border-sky-300/30 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.05] text-white backdrop-blur"
              }`}
            >
              <h3 className="text-3xl font-black tracking-tight">
                {service.title}
              </h3>

              <p
                className={`mt-5 leading-8 ${
                  service.featured ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${
                        service.featured
                          ? "bg-slate-950 text-white"
                          : "bg-sky-400/15 text-sky-300"
                      }`}
                    >
                      ✓
                    </div>

                    <span
                      className={`font-semibold ${
                        service.featured
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
                  service.featured
                    ? "bg-slate-950 text-white hover:bg-sky-700"
                    : "bg-white text-slate-950 hover:bg-sky-100"
                }`}
              >
                Start Your Website
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}