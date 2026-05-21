import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b293f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
];

export default function GallerySection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Crafted With Attention To Detail"
          description="Professional visuals designed to elevate modern brands and customer experiences."
          center
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}