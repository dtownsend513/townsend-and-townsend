import Link from "next/link";

const projects = [
  {
    name: "Auto Detailing Demo",
    type: "Local Service Website",
    description:
      "A premium auto-detailing website focused on lead generation, bold visuals, and modern service presentation.",
    highlights: [
      "High-conversion hero section",
      "Luxury dark UI",
      "Service-focused layout",
    ],
    url: "/demo-auto-detailing",
  },
  {
    name: "Barbershop Demo",
    type: "Barbershop Website",
    description:
      "A modern barbershop website with premium branding, booking-focused structure, and mobile-first design.",
    highlights: [
      "Booking-focused layout",
      "Modern typography",
      "Premium service sections",
    ],
    url: "/demo-barbershop",
  },
  {
    name: "Clothing Brand Demo",
    type: "Fashion Ecommerce Website",
    description:
      "A modern fashion brand website with strong visual hierarchy, product presentation, and ecommerce styling.",
    highlights: [
      "Fashion-focused UI",
      "Modern ecommerce feel",
      "Brand-focused presentation",
    ],
    url: "/demo-clothing-brand",
  },
  {
    name: "Food Truck Demo",
    type: "Restaurant Website",
    description:
      "A bold restaurant and food-truck website built for menu visibility, local branding, and customer engagement.",
    highlights: [
      "Restaurant-style layout",
      "Menu presentation",
      "Mobile-friendly structure",
    ],
    url: "/demo-food-truck",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              Demo Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Live demo websites built for modern small businesses.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-600">
            These internal demo pages show real layouts, branding direction,
            mobile-first structure, and conversion-focused website sections.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="bg-slate-950 p-4">
                <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900">
                  
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-3 flex-1 truncate rounded-full bg-white/10 px-4 py-1 text-xs text-slate-400">
                      {project.url}
                    </div>
                  </div>

                  <div className="relative h-[430px] overflow-hidden bg-slate-950">
                    
                    <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

                    <iframe
                      src={project.url}
                      title={project.name}
                      loading="lazy"
                      className="pointer-events-none h-[860px] w-[200%] origin-top-left scale-50 border-0 bg-white transition duration-700 group-hover:scale-[0.52]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
                        
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                          {project.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">
                          {project.name}
                        </h3>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-8 text-slate-600">
                  {project.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                    >
                      <span className="text-sky-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.url}
                  className="mt-10 inline-flex rounded-full bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-sky-600"
                >
                  View Demo Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}