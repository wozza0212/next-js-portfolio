"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { use, useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu((mobileMenu) => !mobileMenu);

  return (
    <div className={styles.navComponent}>
      <nav>
        <div className={styles.hamurgerIcon}>
          <Image
            className={styles.hamburger}
            src="/menu.svg"
            alt="HamburgerMenu"
            width={40}
            height={40}
            priority
            onClick={toggleMenu}
          />
        </div>
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
