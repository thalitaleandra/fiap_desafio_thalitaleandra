"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./styles.module.scss";
import useScrollProgress from "@/app/hooks/useScrollProgress";
import TextScroller from "./TextScroller";
import SkillsLine from "./SkillsLine";
import {
  mainTexts,
  subTexts,
  skillsItems,
  tutorialsTexts,
} from "@/app/@data/intro.data";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <TextScroller
            texts={mainTexts}
            className={styles.mainText}
            scrollProgress={scrollProgress}
            multiplier={50}
          />
          <div className={styles.line2}></div>
          <TextScroller
            texts={subTexts}
            className={styles.subText}
            scrollProgress={scrollProgress}
            multiplier={50}
          />
          <div className={styles.line3}></div>

          <div className={styles.imageContainer}>
            <Image
              src="/imgs/intro.png"
              alt="Intro"
              width={1495}
              height={804}
              className={styles.introImage}
            />
            <div className={styles.skillsSection}>
              <SkillsLine
                items={skillsItems}
                scrollProgress={scrollProgress}
                multiplier={100}
              />
            </div>
          </div>

          <TextScroller
            texts={tutorialsTexts}
            className={styles.tutorialsText}
            scrollProgress={scrollProgress}
            multiplier={80}
          />
        </div>
      </div>
    </section>
  );
}
