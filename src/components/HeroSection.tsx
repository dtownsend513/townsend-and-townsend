import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "Custom",
    label: "Website Builds",
  },
  {
    value: "Mobile",
    label: "First Design",
  },
  {
    value: "No",
    label: "Forced Subscriptions",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.22),_transparent_32%),radial-gradient(circle_at_80%_10%,_rgba(37,99,235,0.22),_transparent_30%),radial-gradient(circle_at_50%_90%,_rgba(14,165,233,0.16),_transparent_38%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.045)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.045)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-25" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-sky-300 shadow-2xl backdrop-blur">
            Cincinnati Web Design Studio
          </div>

          <h1 className="mx-auto max-w-6xl text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Websites that make your business look impossible to ignore.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Townsend & Townsend builds modern business websites that help small
            brands look established, earn trust faster, and turn visitors into
            real inquiries — without forcing unnecessary monthly subscriptions.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-black text-slate-950 shadow-2xl transition hover:-translate-y-1 hover:bg-sky-100"
            >
              Request a Website Quote
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              View Recent Work
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-[0_40px_120px_rgba(14,165,233,0.18)] backdrop-blur">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-3">
              <div className="mb-3 flex items-center gap-2 px-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 rounded-full bg-white/10 px-4 py-1 text-xs font-bold text-slate-300">
                  townsendsq.com
                </span>
              </div>

              <Image
                src="/images/komposition-preview.jpg"
                alt="Website project preview"
                width={1800}
                height={1100}
                priority
                className="h-auto w-full rounded-[1.4rem] object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl backdrop-blur"
              >
                <p className="text-3xl font-black text-white">{stat.value}</p>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-slate-950" />
    </section>
  );
}