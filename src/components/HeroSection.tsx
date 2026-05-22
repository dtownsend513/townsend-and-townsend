import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        
        {/* Top Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
          Modern Websites For Entrepreneurs & Local Businesses
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Helping Small Businesses
          <span className="block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            Build A Professional Online Presence
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          We create modern, mobile-friendly websites for entrepreneurs,
          startups, and local businesses looking to grow their brand,
          attract customers, and stand out online.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          
          <Link
            href="/contact"
            className="rounded-2xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.03] hover:bg-sky-400"
          >
            Get Started
          </Link>

          <Link
            href="/portfolio"
            className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:border-sky-400/50 hover:bg-white/10"
          >
            View Our Work
          </Link>

        </div>

        {/* Business Types */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 text-left sm:grid-cols-3 lg:grid-cols-6">
          
          {[
            "Barbershops",
            "Food Trucks",
            "Clothing Brands",
            "Beauty Businesses",
            "Detailing Services",
            "Local Startups",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/10"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}