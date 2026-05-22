import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.18),_transparent_30%)]" />

      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        <div>
          <p className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-sky-300 backdrop-blur">
            Cincinnati Web Design For Small Businesses
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight text-white md:text-7xl xl:text-8xl">
            Websites that make your business look
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              premium,
            </span>
            trusted, and ready for customers.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Townsend & Townsend builds modern, mobile-first websites for local businesses, entrepreneurs, and brands that need stronger visual trust, better conversion flow, and a more professional online presence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group rounded-full bg-sky-400 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:scale-105 hover:bg-sky-300"
            >
              Get A Free Website Review
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-slate-950"
            >
              View Demo Portfolio
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-4xl font-black text-white">$499+</p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                Starter Websites
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-4xl font-black text-white">Mobile</p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                First Design
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-4xl font-black text-white">Fast</p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                Turnaround
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
              
              <div className="flex items-center gap-2 border-b border-white/10 px-6 py-5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-3 h-8 flex-1 rounded-full bg-white/10" />
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 p-8">
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_30%)]" />

                <div className="relative space-y-8">
                  
                  <div className="space-y-4">
                    <div className="h-4 w-28 rounded-full bg-white/20" />
                    <div className="h-5 w-56 rounded-full bg-white/10" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                      <div className="h-4 w-20 rounded-full bg-white/30" />

                      <div className="mt-5 h-24 rounded-2xl bg-white/10" />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                      <div className="h-4 w-20 rounded-full bg-white/30" />

                      <div className="mt-5 h-24 rounded-2xl bg-white/10" />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                      Premium Small Business Websites
                    </p>

                    <h2 className="mt-4 text-5xl font-black leading-tight text-white">
                      Modern layouts built to impress customers.
                    </h2>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                      Better design, stronger branding, cleaner structure, and modern mobile-first experiences.
                    </p>

                    <div className="mt-8 inline-flex rounded-full bg-sky-400 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                      Modern UI Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              Built To Convert
            </p>

            <p className="mt-2 max-w-xs text-sm font-semibold">
              Strong messaging, cleaner layouts, modern visuals, and mobile-first structure designed to increase customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}