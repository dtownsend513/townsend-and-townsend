import Link from "next/link";

const values = [
  {
    title: "Modern Design",
    description:
      "Every website is built to feel current, clean, responsive, and visually trustworthy on modern devices.",
  },
  {
    title: "Built For Small Business",
    description:
      "The focus is simple: help local businesses, entrepreneurs, and service brands look more established online.",
  },
  {
    title: "Mobile-First Structure",
    description:
      "Most customers view websites from their phones first, so mobile responsiveness is treated as a priority.",
  },
  {
    title: "Clear Communication",
    description:
      "No complicated agency process. Clear recommendations, straightforward steps, and realistic expectations.",
  },
];

const process = [
  {
    step: "01",
    title: "Review",
    description:
      "We review your current website, business goals, competitors, and what customers need to understand quickly.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We map out the pages, sections, messaging, calls-to-action, and overall structure needed to improve the site.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "The website is designed and developed with a modern layout, responsive structure, and cleaner conversion flow.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Final testing, mobile checks, form setup, domain connection, and launch preparation are completed before going live.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

        <div className="absolute left-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                About Townsend & Townsend
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Professional websites designed for modern small businesses.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Townsend & Townsend focuses on helping businesses improve their
                online presentation through cleaner design, stronger structure,
                better mobile experience, and more modern branding.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Many small businesses lose trust online because their websites
                feel outdated, cluttered, difficult to use, or inconsistent on
                mobile devices. The goal is to simplify that process and build
                websites that feel polished, trustworthy, and easier for
                customers to navigate.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="rounded-full bg-sky-400 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:bg-sky-300"
                >
                  View Portfolio
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-slate-950"
                >
                  Request Website Review
                </Link>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-xl text-sky-300">
                      ✓
                    </div>

                    <h3 className="mt-5 text-2xl font-black">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                The Process
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                A simpler website process from start to launch.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The process stays focused on clarity, communication, cleaner
                structure, and helping businesses improve how they present
                themselves online.
              </p>
            </div>

            <div className="space-y-6">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black">{item.title}</h3>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-slate-950 p-10 text-center text-white shadow-2xl md:p-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Cincinnati Web Design
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Ready to improve your website?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need a cleaner redesign, a stronger mobile experience,
            or a more modern online presence, the next step starts with a free
            website review.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-sky-400 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
            >
              Request Website Review
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-slate-950"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}