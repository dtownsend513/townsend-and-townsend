import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          description="Reach out today to discuss your project, goals, and vision."
          center
        />

        <div className="max-w-3xl mx-auto mt-16">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-neutral-300 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-neutral-300 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-neutral-300 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            />

            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full border border-neutral-300 rounded-2xl px-5 py-4 outline-none focus:border-black transition resize-none"
            />

            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}