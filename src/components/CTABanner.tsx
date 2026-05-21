import Container from "./Container";
import PrimaryButton from "./PrimaryButton";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  buttonText: string;
};

export default function CTABanner({
  eyebrow,
  title,
  buttonText,
}: CTABannerProps) {
  return (
    <section className="pb-24">
      <Container>
        <div className="bg-black rounded-[40px] p-16 text-white text-center">
          {eyebrow && (
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-5">
              {eyebrow}
            </p>
          )}

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            {title}
          </h2>

          <div className="mt-10">
            <PrimaryButton>
              {buttonText}
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}