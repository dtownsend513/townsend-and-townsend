const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We clarify your business goals, audience, current website issues, page needs, and the main action customers should take.",
    details: ["Business goals", "Website structure", "Content direction"],
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Your website is designed with a modern layout, responsive structure, clear messaging, and customer-focused sections.",
    details: ["Modern layout", "Mobile-first design", "Conversion flow"],
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We test the site, connect your domain, configure SSL, verify forms, and prepare the website for real customer traffic.",
    details: ["Domain setup", "SSL/HTTPS", "Form testing"],
  },
  {
    number: "04",
    title: "Support",
    description:
      "After launch, optional support is available for updates, small edits, troubleshooting, and future improvements.",
    details: ["Optional care", "Small edits", "Future upgrades"],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-32 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_36%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
            How It Works
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            A clear process from first idea to live website.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Building a website should not feel confusing. Our process keeps the
            project organized, focused, and moving toward a professional launch.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-400 via-white/20 to-transparent lg:block" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08] ${
                    index % 2 === 0 ? "lg:mr-10" : "lg:ml-10"
                  }`}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/15 text-2xl font-black text-sky-300">
                      {step.number}
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-300">
                        Step {step.number}
                      </p>

                      <h3 className="mt-2 text-3xl font-black tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg leading-8 text-slate-300">
                    {step.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-300"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}