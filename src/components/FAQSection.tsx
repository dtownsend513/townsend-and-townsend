import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most projects are completed within a few weeks depending on complexity and content readiness.",
  },
  {
    question: "Are websites mobile friendly?",
    answer:
      "Yes. Every website is fully optimized for phones, tablets, and desktops.",
  },
  {
    question: "Can I update the website later?",
    answer:
      "Absolutely. Websites are built with scalability and future updates in mind.",
  },
];

export default function FAQSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our process and services."
          center
        />

        <div className="max-w-3xl mx-auto mt-16">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>

                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}