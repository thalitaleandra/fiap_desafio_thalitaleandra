"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function NavBar() {
   const [progress, setProgress] = useState(0);
   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={styles.navbar}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      <div className={styles.logoContainer}>
        <Image
          src="/svgs/logo-fiap.svg"
          alt="Logo FIAP"
          width={144}
          height={39}
          priority
        />
      </div>
    </nav>
  );
}