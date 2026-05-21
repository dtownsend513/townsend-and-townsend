import Container from "./Container";
import FeatureCard from "./FeatureCard";

import { homepage } from "../data/homepage";

export default function FeaturesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {homepage.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}