"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink/NavLink";
import NavList from "./NavList/NavList";

const mobileLinks = [
  { mobile: true, href: "/", linkText: "Home" },
  { mobile: true, href: "/", linkText: "About" },
  { mobile: true, href: "/", linkText: "Articles" },
  { mobile: true, href: "/", linkText: "Components" },
  { mobile: true, href: "/", linkText: "About" },
];

const mainNavLinks = [
  { mobile: false, href: "/", linkText: "Home" },
  { mobile: false, href: "/", linkText: "About" },
  { mobile: false, href: "/", linkText: "Articles" },
  { mobile: false, href: "/", linkText: "Components" },
  { mobile: false, href: "/", linkText: "About" },
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
