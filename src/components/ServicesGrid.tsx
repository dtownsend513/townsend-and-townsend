import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Website Design",
    description:
      "Professional modern websites designed for growth and customer engagement.",
  },
  {
    title: "Brand Strategy",
    description:
      "Position your business with clean branding and strong digital presence.",
  },
  {
    title: "Mobile Optimization",
    description:
      "Responsive layouts optimized for phones, tablets, and desktops.",
  },
];

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Solutions Built For Modern Businesses"
          description="Scalable website systems tailored for entrepreneurs, brands, and growing companies."
          center
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}