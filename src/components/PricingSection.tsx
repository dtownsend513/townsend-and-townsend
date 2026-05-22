import Link from "next/link";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-950 py-28 text-white scroll-mt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Simple Pricing
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Website Solutions For Growing Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're launching a new business or upgrading your brand, we
            offer modern website solutions designed to help you stand out online.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Starter Website
            </p>

            <h3 className="mt-6 text-5xl font-black">$499</h3>

            <p className="mt-4 text-slate-300">
              Perfect for entrepreneurs, startups, and local businesses.
            </p>

            <ul className="mt-8 space-y-4 text-slate-200">
              <li>• Up to 5 Pages</li>
              <li>• Mobile-Friendly Design</li>
              <li>• Contact Form</li>
              <li>• Social Media Integration</li>
              <li>• Basic SEO Setup</li>
              <li>• Launch Assistance</li>
            </ul>

            <Link
              href="/contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-sky-400"
            >
              Get Started
            </Link>
          </div>

          <div className="relative rounded-3xl border border-sky-400/40 bg-sky-500/10 p-10 backdrop-blur-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30">
              Most Popular
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Business Website
            </p>

            <h3 className="mt-6 text-5xl font-black">$999+</h3>

            <p className="mt-4 text-slate-200">
              Ideal for growing brands and businesses needing advanced
              functionality.
            </p>

            <ul className="mt-8 space-y-4 text-slate-100">
              <li>• Custom Website Design</li>
              <li>• Advanced Branding Sections</li>
              <li>• Booking Integrations</li>
              <li>• Ecommerce Options</li>
              <li>• Custom Layouts</li>
              <li>• Enhanced Optimization</li>
            </ul>

            <Link
              href="/contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Request A Quote
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Monthly Care Plan
            </p>

            <h3 className="mt-6 text-5xl font-black">
              $25-50
              <span className="text-xl font-medium text-slate-400">
                /month
              </span>
            </h3>

            <p className="mt-4 text-slate-300">
              Ongoing website maintenance and support for growing businesses.
            </p>

            <ul className="mt-8 space-y-4 text-slate-200">
              <li>• Hosting Included</li>
              <li>• Website Updates</li>
              <li>• Minor Edits</li>
              <li>• Maintenance & Support</li>
              <li>• Performance Monitoring</li>
              <li>• Ongoing Assistance</li>
            </ul>

            <Link
              href="/contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}