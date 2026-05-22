import FadeUp from "@/components/FadeUp";

const stats = [
  {
    number: "25+",
    label: "Websites Built",
  },
  {
    number: "Mobile",
    label: "First Design",
  },
  {
    number: "Fast",
    label: "Turnaround",
  },
  {
    number: "Modern",
    label: "Premium UI",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-sky-400/10 hover:shadow-2xl"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="text-5xl font-black text-white transition group-hover:text-sky-300 md:text-6xl">
                  {stat.number}
                </div>

                <p className="mt-4 text-sm font-black uppercase tracking-[0.25em] text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}