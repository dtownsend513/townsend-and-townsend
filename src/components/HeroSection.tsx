import Link from "next/link";

const previewCards = [
  {
    title: "Barbershop",
    label: "Booking Website",
    image:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Food Truck",
    label: "Menu + Locations",
    image:
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Auto Detailing",
    label: "Service Website",
    image:
      "https://images.pexels.com/photos/6872144/pexels-photo-6872144.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_36%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-8">
        {/* Left Side */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-8 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-sm font-semibold text-sky-300 backdrop-blur-sm">
            Modern Websites For Small Businesses
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Websites That Make
            <span className="mt-3 block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              Businesses Look Legit
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl lg:mx-0">
            Premium website design for entrepreneurs, local businesses,
            ecommerce brands, and growing startups.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/contact"
              className="rounded-2xl bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] hover:bg-sky-400"
            >
              Start Your Website
            </Link>

            <Link
              href="/portfolio"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:border-sky-400/50 hover:bg-white/10"
            >
              View Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-2xl font-black text-white">$499+</p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Starter Sites
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-2xl font-black text-white">Mobile</p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                First Design
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-2xl font-black text-white">Done</p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                For You
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="relative hidden min-h-[640px] lg:block">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          {/* Main Browser Card */}
          <div className="absolute left-0 top-16 w-[78%] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-4 shadow-[0_50px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950">
              {/* Browser Top */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs font-bold text-slate-300">
                  Demo Website Preview
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-[400px]">
                <img
                  src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Clothing brand website demo"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-300">
                    Ecommerce Demo
                  </p>

                  <h3 className="mt-2 text-4xl font-black">
                    Clothing Brand Website
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                    Clean product presentation with premium branding and mobile
                    ecommerce optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Floating Card */}
          <div className="absolute right-0 top-0 w-[38%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={previewCards[0].image}
                alt="Barbershop website preview"
                className="h-[180px] w-full object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
                {previewCards[0].label}
              </p>

              <h4 className="mt-2 text-xl font-black">
                {previewCards[0].title}
              </h4>
            </div>
          </div>

          {/* Bottom Floating Card */}
          <div className="absolute bottom-16 right-6 w-[36%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={previewCards[1].image}
                alt="Food truck website preview"
                className="h-[170px] w-full object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                {previewCards[1].label}
              </p>

              <h4 className="mt-2 text-xl font-black">
                {previewCards[1].title}
              </h4>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute bottom-0 left-6 w-[28%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <img
                src={previewCards[2].image}
                alt="Auto detailing preview"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">
                  Service Website
                </p>

                <h4 className="mt-2 text-lg font-black">
                  Auto Detailing
                </h4>

                <div className="mt-4 rounded-full bg-sky-400 px-4 py-3 text-center text-xs font-black uppercase tracking-wide text-black">
                  Book Now
                </div>
              </div>
            </div>
          </div>

          {/* Floating Label */}
          <div className="absolute bottom-32 left-0 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              Built For
            </p>

            <p className="mt-2 text-2xl font-black">
              Local Business Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}