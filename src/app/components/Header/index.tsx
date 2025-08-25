"use client";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>A Melhor Faculdade</span>
            <span className={styles.titleLine2}>de Tecnologia</span>
          </h1>
          <div className={styles.backgroundText}>SOBRE</div>
        </div>
      </div>
    </header>
  );
}