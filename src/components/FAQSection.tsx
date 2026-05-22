const faqs = [
  {
    question: "How much does a starter website cost?",
    answer:
      "Starter websites begin at $499. Larger websites, redesigns, ecommerce stores, and custom features are quoted based on the project scope.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Yes. Every website is designed mobile-first so it looks clean and professional on phones, tablets, and desktops.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. We can review your current site, identify what feels outdated or unclear, then rebuild it with stronger branding, layout, messaging, and customer flow.",
  },
  {
    question: "Do you help with domain setup?",
    answer:
      "Yes. We can help connect your domain, configure HTTPS, test forms, and prepare the site for launch.",
  },
  {
    question: "Do you offer monthly website support?",
    answer:
      "Yes. Monthly care plans are available for hosting, small edits, updates, troubleshooting, and future improvements.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-slate-100 py-24 text-slate-950">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
            Questions
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Common questions before starting a website project.
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}