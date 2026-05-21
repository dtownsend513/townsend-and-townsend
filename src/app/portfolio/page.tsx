import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Komposition Beauty",
    category: "Luxury Ecommerce Website",
    image: "/images/komposition-preview.jpg",
    description:
      "A premium skincare ecommerce website focused on luxury branding, mobile experience, modern UI, and stronger product presentation.",
    highlights: [
      "Modern ecommerce layout",
      "Luxury branding direction",
      "Responsive mobile design",
      "Improved product presentation",
      "Custom Next.js build",
    ],
    liveUrl: "https://komposition.com",
  },
  {
    title: "Bartender With A Smile",
    category: "Service Business Website",
    image: "/images/bartender-preview.jpg",
    description:
      "A redesigned event-service website with stronger visuals, cleaner structure, improved mobile responsiveness, and more professional presentation.",
    highlights: [
      "Modern homepage redesign",
      "Improved service presentation",
      "Mobile optimization",
      "Stronger calls-to-action",
      "Faster modern deployment",
    ],
    liveUrl: "https://www.bartenderwithasmile.com",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Portfolio
          </p>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
            Real projects built for modern business presentation.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Websites designed to help businesses look more modern, trustworthy,
            and customer-ready across desktop and mobile devices.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-sky-100 blur-3xl opacity-40" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                  {project.category}
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 space-y-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                        ✓
                      </div>

                      <p className="font-semibold text-slate-700">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="mt-10 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-sky-700"
                >
                  View Live Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-10 py-20 text-center text-white shadow-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Your Business Next
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Let’s build a website that actually represents your business well.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Modern design, responsive layouts, cleaner branding, and launch-ready deployment.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-sky-100"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}