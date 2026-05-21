import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-20 text-center text-white shadow-2xl md:px-16">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-400">
          Ready to build?
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Let’s give your business a website that looks professional.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Start with a clean website, clear message, and simple path for
          customers to contact you.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-sky-100"
          >
            Request a Website Quote
          </Link>
        </div>
      </div>
    </section>
  );
}