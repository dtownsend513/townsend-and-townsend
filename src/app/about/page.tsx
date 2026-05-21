import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            About Townsend & Townsend
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Modern websites built with real business understanding.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Townsend & Townsend helps small businesses improve their digital
            presence with clean branding, responsive websites, and modern user
            experience built to create trust and drive customer action.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Built for businesses that need a stronger online presence.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-slate-600">
            <p>
              Based in Cincinnati, Ohio, Townsend & Townsend focuses on helping
              businesses modernize their websites and present themselves more
              professionally online.
            </p>

            <p>
              Many small businesses either have outdated websites, confusing
              layouts, poor mobile experiences, or no online presence at all.
              We help bridge that gap with modern responsive design and cleaner
              branding.
            </p>

            <p>
              Every project is built with attention to speed, usability,
              structure, and customer trust — without overcomplicating the
              process for the business owner.
            </p>

            <p>
              From service businesses to ecommerce brands, our goal is simple:
              create websites that look modern, feel trustworthy, and help turn
              visitors into real customers.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              What Matters
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Simple process. Strong presentation.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white">
                1
              </div>

              <h3 className="text-2xl font-black">
                Modern Design
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Clean layouts, stronger branding, responsive design, and better
                visual presentation across devices.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white">
                2
              </div>

              <h3 className="text-2xl font-black">
                Business Focused
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Websites structured to help customers trust your business and
                make it easier for them to take action.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white">
                3
              </div>

              <h3 className="text-2xl font-black">
                Launch Ready
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Hosting setup, domain connection, SSL, responsive testing, and
                deployment support included.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-10 py-20 text-center text-white shadow-2xl">
          
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Ready To Start?
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Let’s build a website your business can be proud of.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Clean design. Better presentation. Modern experience.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-sky-100"
          >
            Contact Townsend & Townsend
          </Link>

        </div>
      </section>
    </main>
  );
}