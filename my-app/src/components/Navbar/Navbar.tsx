"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import NavList from "./NavList/NavList";

const mobileLinks = [
  { mobile: true, href: "/", linkText: "Home", key: "home-link" },
  { mobile: true, href: "/", linkText: "About", key: "about-link" },
  { mobile: true, href: "/", linkText: "Articles", key: "articles-link" },
  { mobile: true, href: "/", linkText: "Components", key: "components-link" },
  { mobile: true, href: "/", linkText: "About", key: "about2-link" },
];

const mainNavLinks = [
  { mobile: false, href: "/", linkText: "Home", key: "home-link" },
  { mobile: false, href: "/", linkText: "About", key: "about-link" },
  { mobile: false, href: "/", linkText: "Articles", key: "articles-link" },
  { mobile: false, href: "/", linkText: "Components", key: "components-link" },
  { mobile: false, href: "/", linkText: "About", key: "about2-link" },
];

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
          <NavList mobile={false} links={mainNavLinks} />
        </nav>
      </div>
      {mobileMenu && (
        <nav className={styles.mobileNav}>
          <NavList mobile={true} links={mobileLinks}></NavList>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
