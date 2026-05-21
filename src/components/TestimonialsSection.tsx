const testimonials = [
  {
    quote:
      "The redesign made the business look dramatically more professional online. The site finally feels modern and customer-ready.",
    name: "Small Business Client",
    role: "Website Redesign",
  },
  {
    quote:
      "Communication was straightforward, the process was clear, and the final website looked far beyond what we previously had.",
    name: "Local Service Business",
    role: "Business Website",
  },
  {
    quote:
      "The mobile experience, branding, and structure completely changed how our business presents itself online.",
    name: "Ecommerce Client",
    role: "Online Store Project",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-32 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.1),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            Client Feedback
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Websites that leave a stronger first impression.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Modern design is not just about appearance — it changes how people
            trust and perceive a business online.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="group rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.4)] backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              <div className="mb-8 text-6xl font-black leading-none text-sky-300/40">
                “
              </div>

              <p className="text-lg leading-8 text-slate-200">
                {testimonial.quote}
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-lg font-black text-white">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
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