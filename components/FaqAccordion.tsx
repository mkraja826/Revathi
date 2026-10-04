"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <article className={active ? "is-open" : ""} key={item.question}>
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? null : index)}
            >
              <span>0{index + 1}</span>
              <strong>{item.question}</strong>
              <i aria-hidden="true">{active ? "−" : "+"}</i>
            </button>
            <div className="faq-answer" aria-hidden={!active}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
