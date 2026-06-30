import { useState } from "react";
import { pushToDataLayer } from "../gtm.js";

const faqs = [
  {
    question: "Does this demo include a real chatbot?",
    answer:
      "No. This is a small frontend and analytics demo. It focuses on page structure, interaction handling, and Google Tag Manager tracking."
  },
  {
    question: "Which interactions are tracked?",
    answer:
      "The page tracks CTA clicks, brochure button clicks, FAQ opening, and demo request form submission."
  },
  {
    question: "Why use Google Tag Manager here?",
    answer:
      "GTM allows marketing or analytics events to be managed without changing application code after the container is installed."
  }
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  function toggleFaq(question) {
    const nextQuestion = openQuestion === question ? null : question;
    setOpenQuestion(nextQuestion);

    if (nextQuestion) {
      pushToDataLayer({
        event: "faq_open",
        section: "faq",
        faq_question: question
      });
    }
  }

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title">Project details</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => {
          const isOpen = openQuestion === item.question;
          return (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleFaq(item.question)}
              >
                {item.question}
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
