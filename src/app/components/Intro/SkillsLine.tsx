import React from "react";
import type { SkillsLineProps } from "@/types/intro";
import styles from "./styles.module.scss";

export default function SkillsLine({
  items,
  scrollProgress,
  multiplier,
}: SkillsLineProps) {
  const transform = `translateX(calc(-50% + ${multiplier * scrollProgress}%))`;

  return (
    <div className={styles.skillsLine} style={{ transform }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={
              item === "SKILLS" ? styles.skillsText : styles.conhecimentoText
            }
          >
            {item}
          </div>
          {index < items.length - 1 && <div className={styles.ellipse}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}
