import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import { homepage } from "../data/homepage";

export default function CTASection() {
  return (
    <section className="pb-28">
      <Container>
        <div className="bg-black rounded-[40px] p-16 text-white text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-5">
            {homepage.cta.eyebrow}
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            {homepage.cta.titleLineOne}
            <br />
            {homepage.cta.titleLineTwo}
          </h2>

          <div className="mt-10">
            <PrimaryButton>
              {homepage.cta.button}
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}