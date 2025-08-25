"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { faqItems } from "@/app/@data/faq.data";

export default function Faq() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedMobileItem, setClickedMobileItem] = useState<string | null>(
    null
  );

  const handleMobileClick = (itemId: string) => {
    setClickedMobileItem(clickedMobileItem === itemId ? null : itemId);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>Dúvidas Frequentes</p>
        </div>

        <div className={styles.content}>
          <div className={styles.questionsGrid}>
            {faqItems.map((item) => (
              <button
                key={item.id}
                className={styles.questionItem}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleMobileClick(item.id)}
                aria-expanded={
                  hoveredItem === item.id || clickedMobileItem === item.id
                }
                aria-controls={`answer-${item.id}`}
              >
                <div
                  className={`${styles.line} ${
                    hoveredItem === item.id || clickedMobileItem === item.id
                      ? styles.lineHover
                      : ""
                  }`}
                ></div>
                <h3 className={styles.question}>{item.question}</h3>
                {(hoveredItem === item.id || clickedMobileItem === item.id) && (
                  <p className={styles.answer} id={`answer-${item.id}`}>
                    {item.answer}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
