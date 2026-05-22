import FadeUp from "@/components/FadeUp";

const testimonials = [
  {
    name: "Local Business Owner",
    role: "Small Business Website",
    quote:
      "The redesign completely changed how professional our business looked online. Customers immediately started complimenting the new site.",
  },
  {
    name: "Beauty Brand Client",
    role: "Ecommerce Website",
    quote:
      "The website finally feels modern and premium. The mobile experience and product presentation look incredible now.",
  },
  {
    name: "Service Business Client",
    role: "Lead Generation Website",
    quote:
      "The structure, layout, and calls-to-action made a huge difference. We started getting more inquiries almost immediately.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              Testimonials
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Businesses notice the difference when their website finally looks professional.
            </h2>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeUp key={testimonial.name} delay={index * 0.12}>
              <div className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                
                <div className="mb-6 flex gap-1 text-amber-400">
                  ★★★★★
                </div>

                <p className="text-lg leading-8 text-slate-700">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-black">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}