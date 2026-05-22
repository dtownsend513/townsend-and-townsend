import FadeUp from "@/components/FadeUp";

const industries = [
  "Restaurants & Food Service",
  "Beauty & Skincare Brands",
  "Barber Shops & Salons",
  "Contractors & Home Services",
  "Event & Bartending Services",
  "Retail & Ecommerce Brands",
  "Consultants & Coaches",
  "Local Startups",
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
              Industries
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Built for real businesses that need customers to trust them fast.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We build websites for service providers, local businesses,
              ecommerce brands, and entrepreneurs who need a clean online
              presence that looks professional on every device.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <FadeUp key={industry} delay={index * 0.07}>
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-lg font-black shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-sky-400/10 hover:shadow-2xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-slate-950">
                  ✓
                </div>

                {industry}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}