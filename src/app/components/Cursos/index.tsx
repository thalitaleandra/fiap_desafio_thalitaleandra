"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function Cursos() {
  const [activeCategory, setActiveCategory] = useState("tecnologia");
  const [disappear, setDisappear] = useState(false);
  const [nextCategory, setNextCategory] = useState("tecnologia");

  const cursosData = {
    tecnologia: {
      title: "Tecnologia",
      courses: [
        { name: "Big Data Ecosystem", details: "remoto • live" },
        { name: "Creating Dashboards for BI", details: "remoto • live" },
        { name: "Big Data Science - Machine Learning & Data Mining", details: "remoto • live • multimodal" },
        { name: "Storytelling", details: "remoto • live" },
      ],
    },
    inovacao: {
      title: "Inovação",
      courses: [
        { name: "UX", details: "DIGITAL" },
        { name: "UX Writing", details: "LIVE" },
        { name: "Storytelling para Negócios", details: "LIVE" },
        { name: "Chatbots", details: "LIVE" },
      ],
    },
    negocios: {
      title: "Negócios",
      courses: [
        { name: "Agile Culture", details: "DIGITAL" },
        { name: "DPO Data Protection Officer", details: "LIVE" },
        { name: "IT Business Partner", details: "LIVE" },
        { name: "Perícia Forense Computacional", details: "LIVE" },
      ],
    },
  };

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setDisappear(true);
    setNextCategory(category);
    setTimeout(() => {
      setActiveCategory(category);
      setDisappear(false);
    }, 500);
  };

  return (
    <section className={styles.cursos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>Cursos</h2>
            <p className={styles.subtitle}>Cursos de Curta Duração</p>
          </div>

          <div className={styles.navigation} data-active={activeCategory}>
            <button
              className={`${styles.navButton} ${activeCategory === "tecnologia" ? styles.active : ""}`}
              onClick={() => handleCategoryChange("tecnologia")}
            >
              Tecnologia
            </button>
            <button
              className={`${styles.navButton} ${activeCategory === "inovacao" ? styles.active : ""}`}
              onClick={() => handleCategoryChange("inovacao")}
            >
              Inovação
            </button>
            <button
              className={`${styles.navButton} ${activeCategory === "negocios" ? styles.active : ""}`}
              onClick={() => handleCategoryChange("negocios")}
            >
              Negócios
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.cursoCard}>
            <div className={styles.cursoInfo}>
              <h3 className={`${styles.categoryTitle} ${disappear ? styles.disappearOut : styles.disappearIn}`}>
                {cursosData[activeCategory as keyof typeof cursosData].title}
              </h3>

              <div className={styles.courseList}>
                {cursosData[activeCategory as keyof typeof cursosData].courses.map((course, index) => (
                  <div
                    key={index}
                    className={`${styles.courseRow} ${disappear ? styles.disappearOut : styles.disappearIn}`}
                  >
                    <div className={styles.courseItem}>
                      <h4 className={styles.courseTitle}>{course.name}</h4>
                      <span className={styles.courseDetails}>{course.details}</span>
                    </div>
                    <hr className={styles.vector} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};