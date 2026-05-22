import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_30%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
          Ready To Upgrade?
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Let’s make your website look like your business is ready for serious customers.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Get a professional website review and a clear plan for improving your
          layout, messaging, mobile experience, and customer trust.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-sky-500 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-sky-600"
          >
            Get A Free Website Review
          </Link>

          <Link
            href="/portfolio"
            className="rounded-full border border-slate-300 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-slate-950 hover:text-white"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}