const steps = [
  {
    number: "01",
    title: "Plan",
    description:
      "We define your business goals, pages, style, content needs, and the main action visitors should take.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Your site is designed, structured, optimized for mobile, and prepared for launch on modern hosting.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We connect your domain, test the site, enable HTTPS, and make sure everything is ready for customers.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-100 px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-600">
            Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Simple process. Professional result.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-sky-600">{step.number}</p>

              <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

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