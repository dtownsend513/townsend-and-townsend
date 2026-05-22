import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Komposition Beauty",
    category: "Beauty Ecommerce Website",
    image: "/images/komposition-preview.jpg",
    description:
      "A polished skincare ecommerce site focused on premium branding, product presentation, mobile experience, and customer trust.",
    link: "https://komposition.com",
    tags: ["Ecommerce", "Beauty Brand", "Product Sales"],
    external: true,
  },
  {
    title: "Bartender With A Smile",
    category: "Event Service Website",
    image: "/images/bartender-preview.jpg",
    description:
      "A modern event-service website built around stronger visuals, clearer messaging, and easier customer inquiries.",
    link: "https://www.bartenderwithasmile.com",
    tags: ["Service Business", "Lead Capture", "Events"],
    external: true,
  },
  {
    title: "The Chair Club",
    category: "Barbershop Demo Website",
    image:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A premium demo barbershop website concept designed to showcase booking, pricing, atmosphere, gallery sections, and modern business presentation.",
    link: "/demo-barbershop",
    tags: ["Barbershop", "Local Business", "Demo Website"],
    external: false,
  },
  {
    title: "Flame Street Eats",
    category: "Food Truck Demo Website",
    image:
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1200&q=80",
    description:
      "A bold demo food truck website concept designed to showcase street food, daily locations, menu highlights, catering requests, and social media energy.",
    link: "/demo-food-truck",
    tags: ["Food Truck", "Street Food", "Demo Website"],
    external: false,
  },
  {
    title: "Crown District",
    category: "Clothing Brand Demo Website",
    image:
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A premium streetwear and clothing-brand demo website focused on product drops, ecommerce presentation, lifestyle visuals, and mobile-first shopping.",
    link: "/demo-clothing-brand",
    tags: ["Streetwear", "Ecommerce", "Demo Website"],
    external: false,
  },
  {
    title: "Fresh Finish Auto Care",
    category: "Auto Detailing Demo Website",
    image:
      "https://images.pexels.com/photos/6872144/pexels-photo-6872144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A realistic auto detailing demo website focused on interior cleaning, wrap services, tint prep, detailing packages, and local booking conversion.",
    link: "/demo-auto-detailing",
    tags: ["Auto Detailing", "Wrap Shop", "Demo Website"],
    external: false,
  },
];

const demoIndustries = [
  "Barbershops",
  "Food Trucks",
  "Clothing Brands",
  "Auto Detailing",
  "Wrap Shops",
  "Beauty Professionals",
  "DJs & Event Services",
  "Local Startups",
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              Website Examples
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              See how your business could show up online.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            From beauty brands and event services to food businesses,
            barbershops, clothing brands, and automotive services, these demos
            help businesses visualize a stronger online presence.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="mt-16 space-y-10">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group grid overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-[0_35px_120px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-2 hover:border-sky-300/30 hover:shadow-[0_50px_160px_rgba(0,0,0,0.55)] lg:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Image Side */}
              <div
                className={`relative overflow-hidden bg-slate-950 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {item.image.startsWith("http") ? (
                  <img
                    src={item.image}
                    alt={`${item.title} website preview`}
                    className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={`${item.title} website preview`}
                    width={1400}
                    height={900}
                    className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />

                {/* Floating Label */}
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                  {item.category}
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
                  Featured Demo
                </p>

                <h3 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-200 transition group-hover:border-sky-300/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  className="mt-9 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02] hover:bg-sky-100"
                >
                  {item.external ? "View Live Project" : "View Demo Website"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                More Industries
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Built for the businesses people are starting right now.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {demoIndustries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-center text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-sky-300/20 hover:bg-white/[0.05]"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-sky-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:bg-sky-400"
          >
            Start Your Website
          </Link>
        </div>
      </div>
    </section>
  );
}