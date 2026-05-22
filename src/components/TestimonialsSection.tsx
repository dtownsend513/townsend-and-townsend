const testimonials = [
  {
    quote:
      "The website completely changed how our business looked online. Customers immediately started taking us more seriously.",
    name: "Local Business Owner",
    role: "Starter Website Project",
  },
  {
    quote:
      "The process was straightforward, communication was clear, and the final website looked far more professional than what we had before.",
    name: "Service Business Client",
    role: "Business Website Upgrade",
  },
  {
    quote:
      "The mobile experience, branding, and layout made our business finally feel modern and customer-ready online.",
    name: "Ecommerce Brand",
    role: "Online Store Project",
  },
  {
    quote:
      "Everything looked cleaner, easier to navigate, and more trustworthy after the redesign. The difference was immediate.",
    name: "Entrepreneur Client",
    role: "Website Redesign",
  },
  {
    quote:
      "The website helped us organize our business better online and gave customers a much more professional first impression.",
    name: "Startup Business",
    role: "Launch Website",
  },
  {
    quote:
      "The branding, responsiveness, and overall design quality exceeded what we expected for the price point.",
    name: "Small Business Owner",
    role: "Business Website",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-32 text-white lg:px-8">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Client Feedback
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Businesses want websites that actually look trustworthy online.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A professional website changes how customers view your business.
            Better branding, cleaner layouts, and stronger presentation help
            businesses make a better first impression online.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.quote}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-[0_35px_100px_rgba(0,0,0,0.4)] backdrop-blur transition hover:-translate-y-2 ${
                index === 1
                  ? "border-sky-300/40 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.05] text-white"
              }`}
            >

              {/* Top Glow */}
              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  index === 1
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-slate-950"
                    : "bg-gradient-to-r from-sky-400/60 via-blue-500/30 to-transparent"
                }`}
              />

              {/* Quote */}
              <div
                className={`mb-8 text-6xl font-black leading-none ${
                  index === 1
                    ? "text-sky-500/30"
                    : "text-sky-300/40"
                }`}
              >
                “
              </div>

              <p
                className={`text-lg leading-8 ${
                  index === 1
                    ? "text-slate-700"
                    : "text-slate-200"
                }`}
              >
                {testimonial.quote}
              </p>

              {/* Footer */}
              <div
                className={`mt-10 border-t pt-6 ${
                  index === 1
                    ? "border-slate-200"
                    : "border-white/10"
                }`}
              >

                <p
                  className={`text-lg font-black ${
                    index === 1
                      ? "text-slate-950"
                      : "text-white"
                  }`}
                >
                  {testimonial.name}
                </p>

                <p
                  className={`mt-2 text-sm font-bold uppercase tracking-[0.2em] ${
                    index === 1
                      ? "text-sky-600"
                      : "text-sky-300"
                  }`}
                >
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-10 text-center shadow-2xl backdrop-blur">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Modern Websites Matter
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Customers judge businesses online before they ever make contact.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A stronger website experience helps businesses look more organized,
            trustworthy, professional, and customer-ready online.
          </p>

        </div>

      </div>
    </section>
  );
}