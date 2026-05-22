const steps = [
  {
    number: "01",
    title: "Review",
    description:
      "We review your current website, goals, services, brand, and what your customers need to understand quickly.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We map out the pages, sections, messaging, calls-to-action, and layout needed to make the site stronger.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and build the website with a clean modern structure, mobile-first layout, and clear conversion flow.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the site, connect the domain, verify forms, check mobile views, and prepare it for customers.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            A simple process that takes your website from outdated to polished.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The process is built to stay clear, organized, and focused on what
            matters: getting your business online with a website that looks
            professional and works correctly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-5xl font-black text-sky-600">{step.number}</p>

              <h3 className="mt-8 text-2xl font-black">{step.title}</h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}