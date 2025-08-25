"use client";

import styles from "./styles.module.scss";

interface Course {
  name: string;
  details: string;
}

interface Category {
  key: string;
  title: string;
  courses: Course[];
}

interface CoursesAccordionProps {
  expandedAccordion: string | null;
  toggleAccordion: (categoryKey: string) => void;
  categories: Category[];
  data: any;
}

export default function CoursesAccordion({
  expandedAccordion,
  toggleAccordion,
  categories,
  data,
}: CoursesAccordionProps) {
  return (
    <div className={styles.accordionContainer}>
      {categories.map((category) => (
        <div key={category.key} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(category.key)}
            aria-expanded={expandedAccordion === category.key}
          >
            <h3 className={styles.accordionTitle}>{category.title}</h3>
            <div
              className={`${styles.accordionIcon} ${
                expandedAccordion === category.key ? styles.expanded : ""
              }`}
            />
          </button>

          <div
            className={`${styles.accordionContent} ${
              expandedAccordion === category.key ? styles.expanded : ""
            }`}
          >
            <div className={styles.courseList}>
              {category.courses.map((course, index) => (
                <div key={index} className={styles.courseItem}>
                  <span className={styles.courseDetails}>{course.details}</span>
                  <h4 className={styles.courseTitle}>{course.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
