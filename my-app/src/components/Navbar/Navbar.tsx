"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu((mobileMenu) => !mobileMenu);

  return (
    <div>
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
            <NavLink href="/" linkText="Home"></NavLink>
            <NavLink href="/" linkText="About Me"></NavLink>
            <NavLink href="/" linkText="Articles"></NavLink>
            <NavLink href="/" linkText="Components"></NavLink>
            <NavLink href="/" linkText="GitHub"></NavLink>
            <NavLink href="/" linkText="Home"></NavLink>
          </ul>
        </nav>
      </div>
      {mobileMenu && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileList}>
            <NavLink mobile href="/" linkText="Home"></NavLink>
            <NavLink mobile href="/" linkText="About Me"></NavLink>
            <NavLink mobile href="/" linkText="Articles"></NavLink>
            <NavLink mobile href="/" linkText="Components"></NavLink>
            <NavLink mobile href="/" linkText="GitHub"></NavLink>
            <NavLink mobile href="/" linkText="Home"></NavLink>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
