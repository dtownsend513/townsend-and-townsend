import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.18),_transparent_30%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        <div>
          <p className="mb-6 inline-flex max-w-full rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-sky-300 sm:text-xs md:text-sm">
            Cincinnati Web Design For Small Businesses
          </p>

          <h1 className="max-w-5xl text-[3.3rem] font-black leading-[0.92] tracking-tight text-white sm:text-[4.4rem] md:text-7xl">
            Websites that make your business look{" "}
            <span className="text-sky-400">premium</span>, trusted, and ready
            for customers.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            Townsend & Townsend builds modern, mobile-friendly websites for
            local businesses, entrepreneurs, and brands that need stronger
            visual trust, better conversion flow, and a more professional online
            presence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-sky-400 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-sky-300 sm:text-sm"
            >
              Get A Free Website Review
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-8 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-slate-950 sm:text-sm"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-3xl font-black text-white">$499+</p>
              <p className="mt-2 text-sm text-slate-400">
                Starter websites
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-3xl font-black text-white">Mobile</p>
              <p className="mt-2 text-sm text-slate-400">
                Responsive design
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-3xl font-black text-white">Local</p>
              <p className="mt-2 text-sm text-slate-400">
                Cincinnati based
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[2rem] bg-slate-900 p-6">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-5">
                <div className="h-56 rounded-3xl bg-gradient-to-br from-sky-400 to-blue-700" />

                <div className="h-5 w-3/4 rounded-full bg-white/20" />

                <div className="h-5 w-1/2 rounded-full bg-white/10" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-28 rounded-2xl bg-white/10" />
                  <div className="h-28 rounded-2xl bg-white/10" />
                </div>

                <div className="h-12 rounded-full bg-sky-400" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              Built To Convert
            </p>

            <p className="mt-2 max-w-xs text-sm font-semibold">
              Clear messaging, mobile-first layout, modern visuals, and stronger
              customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}