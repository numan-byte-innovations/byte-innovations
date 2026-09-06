"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs ship in 6-10 weeks. Larger enterprise builds run longer, but we scope every project into shippable milestones so you see working software early and often.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both. We split our time between early-stage founders who need a fast MVP and enterprises that need scalable, maintainable systems — the engagement model just changes.",
  },
  {
    question: "What's included in the MVP estimate?",
    answer:
      "The calculator gives you a cost range and build-time estimate based on your platform, feature set, and timeline, so you have a number before you ever talk to sales.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer maintenance and support retainers after launch, and we run the same playbook on our own products, ExpertPOS, ExpertATS, and ExpertHRMS.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed-scope projects are quoted up front; staff augmentation and enterprise infrastructure work are billed on a transparent monthly rate with no hidden fees.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <span className="faq-icon-line faq-icon-h" />
                <span className="faq-icon-line faq-icon-v" />
              </span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
