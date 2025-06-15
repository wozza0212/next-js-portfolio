import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navComponent}>
      <nav>
        <ul className={styles.navList}>
          <div className={styles.navLink}>
            <Link href={"/"}>Home</Link>
          </div>
          <div className={styles.navLink}>
            <Link href={"/"}>About Me</Link>
          </div>
          <div className={styles.navLink}>
            <Link href={"/"}>Articles</Link>
          </div>
          <div className={styles.navLink}>
            <Link href={"/"}>Components</Link>
          </div>
          <div className={styles.navLink}>
            <Link href={"/"}>Github</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
