"use client";

import styles from "./styles.module.scss";
import { categories, headerTexts } from "@/app/@data/courses.data";

interface CoursesHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CoursesHeader({
  activeCategory,
  onCategoryChange,
}: CoursesHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{headerTexts.mainTitle}</h2>
        <p className={styles.subtitle}>{headerTexts.subTitle}</p>
      </div>

      <div className={styles.navigation} data-active={activeCategory}>
        {categories.map((category) => (
          <button
            key={category.key}
            className={`${styles.navButton} ${
              activeCategory === category.key ? styles.active : ""
            }`}
            onClick={() => onCategoryChange(category.key)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}
