"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { coursesData } from "@/app/@data/courses.data";
import CoursesHeader from "./CoursesHeader";
import CoursesAccordion from "./CoursesAccordion";

export default function Cursos() {
  const [activeCategory, setActiveCategory] = useState("tecnologia");
  const [disappear, setDisappear] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null
  );

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setDisappear(true);
    setTimeout(() => {
      setActiveCategory(category);
      setDisappear(false);
    }, 500);
  };

  const toggleAccordion = (categoryKey: string) => {
    setExpandedAccordion(
      expandedAccordion === categoryKey ? null : categoryKey
    );
  };

  const activeCourses = coursesData[activeCategory]?.courses || [];

  const categories = Object.entries(coursesData).map(([key, data]) => ({
    key,
    title: data.title,
    courses: data.courses,
  }));

  return (
    <section className={styles.cursos}>
      <div className={styles.container}>
        <CoursesHeader
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* DESKTOP */}
        <div className={styles.content}>
          <div className={styles.cursoCard}>
            <div className={styles.cursoInfo}>
              <h3
                className={`${styles.categoryTitle} ${
                  disappear ? styles.disappearOut : styles.disappearIn
                }`}
              >
                {coursesData[activeCategory]?.title || ""}
              </h3>

              <div className={styles.courseList}>
                {activeCourses.map((course, index) => (
                  <div
                    key={index}
                    className={`${styles.courseRow} ${
                      disappear ? styles.disappearOut : styles.disappearIn
                    }`}
                  >
                    <div className={styles.courseItem}>
                      <h4 className={styles.courseTitle}>{course.name}</h4>
                      <span className={styles.courseDetails}>
                        {course.details}
                      </span>
                    </div>
                    <hr className={styles.vector} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE - Accordion para todas as categorias */}
        <CoursesAccordion
          expandedAccordion={expandedAccordion}
          toggleAccordion={toggleAccordion}
          categories={categories}
          data={coursesData}
        />
      </div>
    </section>
  );
}
