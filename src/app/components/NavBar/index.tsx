import Image from "next/image";
import styles from "./styles.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
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