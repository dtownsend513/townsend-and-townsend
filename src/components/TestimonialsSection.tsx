import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    quote:
      "The entire experience was professional, smooth, and exceeded expectations.",
  },
  {
    name: "Michael Carter",
    role: "Entrepreneur",
    quote:
      "Modern design, fast communication, and incredible attention to detail.",
  },
  {
    name: "Emily Davis",
    role: "Brand Founder",
    quote:
      "Our website finally feels premium and aligned with our brand identity.",
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted By Modern Businesses"
          description="Professional experiences that help brands grow with confidence."
          center
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}