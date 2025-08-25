"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainText}>
            CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.
          </div>
          <div className={styles.line2}></div>
          <div className={styles.subText}>
            TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
          </div>
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
              <div className={styles.skillsLine}>
                <div className={styles.skillsText}>SKILLS</div>
                <div className={styles.ellipse}></div>
                <div className={styles.conhecimentoText}>CONHECIMENTO</div>
                  <div className={styles.skillsText}>SKILLS</div>
                <div className={styles.ellipse}></div>
                <div className={styles.conhecimentoText}>CONHECIMENTO</div>
              </div>
            </div>
          </div>
          <div className={styles.tutorialsText}>
            MUITO. MUITO ALÉM DOS TUTORIAIS
          </div>
        </div>
      </div>
    </section>
  );
}