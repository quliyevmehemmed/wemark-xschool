
"use client";

import { useState } from "react";

export default function FAQ({ title, questions }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!questions?.length) return null;

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title text-[42px] leading-[48px] font-medium uppercase sm:text-[64px] sm:leading-[72px] lg:text-[90px] lg:leading-[100px]">
          {title}
        </h2>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <span className="faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{
                      __html: item.answer,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
