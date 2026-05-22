import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 pb-32 pt-10 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="grid gap-12 px-8 py-16 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-16 lg:py-20">
            
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Ready To Get Online?
              </p>

              <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Let’s build a website that helps your business look professional.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                Whether you’re starting a new business, upgrading from social
                media only, or replacing an outdated website, we help
                entrepreneurs launch a modern online presence without the
                technical headache.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
                >
                  Start My Website
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  View Website Examples
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Starter Websites
                </p>

                <p className="mt-4 text-2xl font-black">
                  Affordable websites for entrepreneurs and local businesses.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Done-For-You Setup
                </p>

                <p className="mt-4 text-2xl font-black">
                  We handle the website setup so you can focus on your business.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                  Transparent Pricing
                </p>

                <p className="mt-4 text-2xl font-black">
                  Starter websites from $499 with optional monthly support.
                </p>
              </div>

            </div>
          </div>

          <div className="border-t border-white/10 bg-black/20 px-8 py-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
              Cincinnati Web Design • Small Business Websites • Ecommerce • Local Brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}