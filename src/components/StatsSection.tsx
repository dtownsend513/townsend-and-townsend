import Container from "./Container";
import Section from "./Section";

const stats = [
  {
    number: "150+",
    label: "Projects Completed",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export default function StatsSection() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl md:text-6xl font-light">
                {stat.number}
              </h3>

              <p className="mt-4 text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}