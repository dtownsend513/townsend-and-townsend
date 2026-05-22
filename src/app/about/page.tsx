import Link from "next/link";

const values = [
  {
    title: "Modern Presentation",
    description:
      "Websites designed to help businesses look more trustworthy, organized, and professional online.",
  },
  {
    title: "Built For Real Businesses",
    description:
      "Focused on local businesses, startups, ecommerce brands, and service-based companies.",
  },
  {
    title: "Mobile First",
    description:
      "Optimized for phones and modern browsing habits across all screen sizes.",
  },
  {
    title: "Clear Communication",
    description:
      "Straightforward process, realistic pricing, and no unnecessary technical confusion.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050b16] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_36%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
            About Townsend & Townsend
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Websites built to help businesses look more established online.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            A Cincinnati web design studio focused on modern websites,
            stronger branding, mobile responsiveness, and helping small
            businesses present themselves professionally online.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Side */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Based In
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Cincinnati, Ohio
            </h2>

            <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
              <img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Diverse business team working together"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8">
                <div className="mb-6 inline-flex rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-sky-300">
                  Modern Small Business Web Design
                </div>

                <p className="text-lg leading-8 text-slate-300">
                  Working with entrepreneurs, startups, local businesses, and
                  growing brands looking for stronger online presentation and
                  more modern websites.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 text-lg leading-8 text-slate-300">
            <p>
              Many businesses lose customer trust online because their website
              feels outdated, confusing, poorly designed, or difficult to use
              on mobile devices.
            </p>

            <p>
              Townsend & Townsend focuses on modern website experiences that
              feel cleaner, more organized, visually stronger, and easier for
              customers to navigate.
            </p>

            <p>
              Every project is built around helping businesses create a stronger
              first impression online through modern layouts, responsive design,
              improved branding, and clearer presentation.
            </p>

            <p>
              The goal is simple: help businesses look more credible and
              customer-ready online.
            </p>

            {/* Stats */}
            <div className="grid gap-4 pt-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Focus
                </p>

                <p className="mt-4 text-2xl font-black">
                  Modern Business Websites
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Goal
                </p>

                <p className="mt-4 text-2xl font-black">
                  Better Online Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              What Matters
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Modern design built around real business goals.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/15 text-2xl font-black text-sky-300">
                  +
                </div>

                <h3 className="text-3xl font-black tracking-tight">
                  {value.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-32 pt-10 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="grid gap-10 px-10 py-20 text-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Ready To Start?
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Let’s build a website your business is proud to share.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                Cleaner branding, stronger presentation, and modern responsive
                design focused on helping your business stand out online.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
                >
                  Start a Website Project
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}