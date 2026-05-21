import Container from "./Container";
import PrimaryButton from "./PrimaryButton";

import { homepage } from "../data/homepage";
import { images } from "../data/images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${images.hero.main}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 text-white">
        <Container>
          <div className="py-40">
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-200">
              {homepage.hero.eyebrow}
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
              {homepage.hero.titleLineOne}
              <br />
              {homepage.hero.titleLineTwo}
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-neutral-200 leading-relaxed">
              {homepage.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton>
                {homepage.hero.primaryButton}
              </PrimaryButton>

              <button className="border border-white px-7 py-4 rounded-full font-medium hover:bg-white hover:text-black transition">
                {homepage.hero.secondaryButton}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}