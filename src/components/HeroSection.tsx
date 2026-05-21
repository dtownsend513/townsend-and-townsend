import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.35),_transparent_38%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-sky-300">
            Townsend & Townsend
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
            Websites that make small businesses look established.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We build clean, modern, mobile-friendly websites for local
            businesses that need better branding, stronger trust, and a clearer
            path for customers to take action.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-100"
            >
              Get a Website Quote
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 p-3 shadow-2xl">
              <Image
                src="/images/komposition-preview.jpg"
                alt="Komposition Beauty website preview"
                width={1400}
                height={900}
                priority
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-slate-950" />
    </section>
  );
}