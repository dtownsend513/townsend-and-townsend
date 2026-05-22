import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Komposition Beauty",
    category: "Luxury Ecommerce Website",
    image: "/images/komposition-preview.jpg",
    description:
      "A luxury-focused skincare ecommerce experience designed to elevate branding, improve mobile conversion, and create a more premium customer journey.",
    highlights: [
      "Luxury ecommerce experience",
      "Modern responsive design",
      "Premium branding direction",
      "Mobile-first optimization",
      "Custom Next.js development",
    ],
    liveUrl: "https://komposition.com",
    accent: "from-amber-200/20 via-orange-300/10 to-transparent",
    external: true,
  },
  {
    title: "Bartender With A Smile",
    category: "Event Service Website",
    image: "/images/bartender-preview.jpg",
    description:
      "A modern redesign for a bartending service business focused on stronger presentation, cleaner visuals, mobile responsiveness, and customer trust.",
    highlights: [
      "Professional redesign",
      "Improved visual hierarchy",
      "Better service presentation",
      "Modern responsive layout",
      "Optimized customer flow",
    ],
    liveUrl: "https://www.bartenderwithasmile.com",
    accent: "from-sky-300/20 via-cyan-300/10 to-transparent",
    external: true,
  },
  {
    title: "The Chair Club",
    category: "Barbershop Demo Website",
    image:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1400",
    description:
      "A premium barbershop demo focused on appointment booking, service presentation, modern branding, and local business credibility.",
    highlights: [
      "Modern booking layout",
      "Barber-focused branding",
      "Mobile-first design",
      "Local business positioning",
      "Premium service presentation",
    ],
    liveUrl: "/demo-barbershop",
    accent: "from-slate-200/20 via-slate-400/10 to-transparent",
    external: false,
  },
  {
    title: "Flame Street Eats",
    category: "Food Truck Demo Website",
    image:
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1400&q=80",
    description:
      "A bold food truck concept website built around menu presentation, social energy, catering inquiries, and street-food branding.",
    highlights: [
      "Street food branding",
      "Menu-focused layout",
      "Catering inquiry flow",
      "Social-style visuals",
      "Mobile optimized",
    ],
    liveUrl: "/demo-food-truck",
    accent: "from-orange-300/20 via-red-400/10 to-transparent",
    external: false,
  },
  {
    title: "Crown District",
    category: "Clothing Brand Demo Website",
    image:
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1400",
    description:
      "A modern streetwear ecommerce demo focused on product drops, visual branding, premium layouts, and mobile shopping.",
    highlights: [
      "Streetwear branding",
      "Product-focused ecommerce",
      "Luxury visual direction",
      "Modern product presentation",
      "Mobile shopping experience",
    ],
    liveUrl: "/demo-clothing-brand",
    accent: "from-violet-300/20 via-indigo-400/10 to-transparent",
    external: false,
  },
  {
    title: "Fresh Finish Auto Care",
    category: "Auto Detailing Demo Website",
    image:
      "https://images.pexels.com/photos/6872144/pexels-photo-6872144.jpeg?auto=compress&cs=tinysrgb&w=1400",
    description:
      "A realistic detailing and wrap-shop demo website showcasing interior cleaning, tint prep, detailing packages, and service booking.",
    highlights: [
      "Auto detailing branding",
      "Interior cleaning visuals",
      "Wrap & tint positioning",
      "Service-focused layout",
      "Lead-generation design",
    ],
    liveUrl: "/demo-auto-detailing",
    accent: "from-sky-300/20 via-blue-400/10 to-transparent",
    external: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-[#050b16] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.16),_transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
            Selected Work
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Modern websites built to elevate businesses online.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            From ecommerce brands and food businesses to local services and
            startups, these projects are designed to make businesses look more
            modern, trustworthy, and customer-ready.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="relative px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image Side */}
              <div className="relative group">
                <div
                  className={`absolute -inset-10 rounded-full bg-gradient-to-r ${project.accent} blur-3xl`}
                />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur transition duration-500 group-hover:-translate-y-2">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#020817]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />

                      <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs font-bold text-slate-300">
                        Website Preview
                      </div>
                    </div>

                    {project.image.startsWith("http") ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1800}
                        height={1200}
                        className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                  {project.category}
                </p>

                <h2 className="mt-6 text-4xl font-black tracking-[-0.03em] md:text-6xl">
                  {project.title}
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-10 grid gap-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition hover:border-sky-300/20 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/15 text-sm font-black text-sky-300">
                        ✓
                      </div>

                      <p className="font-semibold text-slate-200">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={project.liveUrl}
                    target={project.external ? "_blank" : undefined}
                    className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
                  >
                    {project.external
                      ? "View Live Website"
                      : "View Demo Website"}
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black text-white transition hover:bg-white/10"
                  >
                    Build Something Similar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] px-10 py-20 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Your Business Next
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.03em] md:text-6xl">
              Let’s build a website that actually feels professional.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Modern layouts, responsive design, stronger branding, cleaner
              presentation, and a website your customers actually trust.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
              >
                Start a Website Project
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}