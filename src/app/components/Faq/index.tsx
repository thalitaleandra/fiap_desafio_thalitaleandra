"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function Faq() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const faqItems = [
    {
      question: "QUANDO POSSO ME MATRICULAR?",
      answer: "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.",
      id: "matricula"
    },
    {
      question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
      answer: "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
      id: "multiplos-cursos"
    },
    {
      question: "QUAIS OS PRÉ-REQUISITOS?",
      answer: "Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.",
      id: "pre-requisitos"
    },
    {
      question: "QUAL A DURAÇÃO DOS CURSOS?",
      answer: "De 6 a 42 horas.",
      id: "duracao"
    },
    {
      question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
      answer: "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.",
      id: "material"
    },
    {
      question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
      answer: "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.",
      id: "certificado"
    }
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>Dúvidas Frequentes</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.questionsGrid}>
            {faqItems.map((item, index) => (
              <button 
                key={item.id} 
                className={styles.questionItem}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                aria-expanded={hoveredItem === item.id}
                aria-controls={`answer-${item.id}`}
              >
                <div className={`${styles.line} ${hoveredItem === item.id ? styles.lineHover : ''}`}></div>
                <h3 className={styles.question}>{item.question}</h3>
                {hoveredItem === item.id && (
                  <p className={styles.answer} id={`answer-${item.id}`}>{item.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}