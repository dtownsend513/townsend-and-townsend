const testimonials = [
  {
    quote:
      "The redesign made the business look dramatically more professional online.",
    name: "Marcus T.",
    role: "Barbershop Owner",
  },
  {
    quote:
      "Customers immediately started taking our business more seriously after the new website launched.",
    name: "Ashley R.",
    role: "Beauty Brand Founder",
  },
  {
    quote:
      "The site finally feels modern, clean, and much easier for customers to navigate.",
    name: "David L.",
    role: "Local Business Owner",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-24 text-white lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Client Feedback
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Better presentation changes how businesses are perceived online.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-[2rem] border p-8 shadow-2xl backdrop-blur transition hover:-translate-y-1 ${
                index === 1
                  ? "border-sky-300/30 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.05] text-white"
              }`}
            >
              <div
                className={`mb-6 text-5xl font-black ${
                  index === 1
                    ? "text-sky-500/30"
                    : "text-sky-300/30"
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

              <div
                className={`mt-8 border-t pt-5 ${
                  index === 1
                    ? "border-slate-200"
                    : "border-white/10"
                }`}
              >
                <p
                  className={`font-black ${
                    index === 1
                      ? "text-slate-950"
                      : "text-white"
                  }`}
                >
                  {testimonial.name}
                </p>

                <p
                  className={`mt-1 text-sm uppercase tracking-[0.2em] ${
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
      </div>
    </section>
  );
}