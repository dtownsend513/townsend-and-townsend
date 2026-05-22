import Link from "next/link";

const projects = [
  {
    name: "Auto Detailing Demo",
    type: "Local Service Website",
    description:
      "A premium auto-detailing website focused on lead generation, bold visuals, mobile-first structure, and modern service presentation.",
    highlights: [
      "High-conversion hero",
      "Luxury dark design",
      "Service package layout",
      "Strong CTA flow",
    ],
    url: "/demo-auto-detailing",
  },
  {
    name: "Barbershop Demo",
    type: "Barbershop Website",
    description:
      "A modern barbershop website with premium branding, booking-focused sections, clean typography, and a confident local-business feel.",
    highlights: [
      "Booking-focused structure",
      "Premium service sections",
      "Modern typography",
      "Mobile-first layout",
    ],
    url: "/demo-barbershop",
  },
  {
    name: "Clothing Brand Demo",
    type: "Fashion Ecommerce Website",
    description:
      "A fashion-focused ecommerce demo built around bold brand presentation, product discovery, clean sections, and modern shopping flow.",
    highlights: [
      "Fashion brand visuals",
      "Product-focused layout",
      "Modern ecommerce feel",
      "Brand storytelling",
    ],
    url: "/demo-clothing-brand",
  },
  {
    name: "Food Truck Demo",
    type: "Restaurant Website",
    description:
      "A bold restaurant and food-truck website built for menu visibility, local brand personality, customer engagement, and mobile users.",
    highlights: [
      "Menu-first structure",
      "Local food branding",
      "Bold visual design",
      "Mobile-friendly layout",
    ],
    url: "/demo-food-truck",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

        <div className="absolute left-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Portfolio
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Demo websites built to show what your business could become.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              These demo projects showcase industry-specific layouts, visual
              direction, mobile-first structure, and conversion-focused website
              sections for different types of small businesses.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-3 hover:bg-white/10"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-3 flex-1 truncate rounded-full bg-white/10 px-4 py-1 text-xs text-slate-400">
                      {project.url}
                    </div>
                  </div>

                  <div className="relative h-[460px] overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

                    <iframe
                      src={project.url}
                      title={project.name}
                      loading="lazy"
                      className="pointer-events-none h-[920px] w-[200%] origin-top-left scale-50 border-0 bg-white transition duration-700 group-hover:scale-[0.52]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                          {project.type}
                        </p>

                        <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="leading-8 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <span className="text-sky-300">✓</span>
                        <p className="mt-2 text-sm font-bold text-white">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href={project.url}
                      className="inline-flex justify-center rounded-full bg-sky-400 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
                    >
                      View Demo Site
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex justify-center rounded-full border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-slate-950"
                    >
                      Request Similar Site
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Want a site like these?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Let’s build a professional website for your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Start with a free website review. We’ll look at your current
              online presence and recommend the cleanest path forward.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-sky-400 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
            >
              Request Website Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}