"use client";
import styles from "./styles.module.scss";
import { headerTexts } from "@/app/@data/header.data";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>{headerTexts.titleLine1}</span>
            <span className={styles.titleLine2}>{headerTexts.titleLine2}</span>
          </h1>
          <div className={styles.backgroundText}>
            {headerTexts.backgroundText}
          </div>
        </div>
      </div>
    </header>
  );
}
