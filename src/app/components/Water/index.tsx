"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/imgs/water/water_191.jpg"
            alt="Background Water"
            width={1920}
            height={1080}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}