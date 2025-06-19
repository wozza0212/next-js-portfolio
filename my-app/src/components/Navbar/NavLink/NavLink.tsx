import Link from "next/link";

import styles from "./navLink.module.css";

export type NavLinkProps = {
  href: string;
  linkText: string;
  mobile?: boolean;
}

const NavLink = ({ href, linkText, mobile }: NavLinkProps) => {
  if (mobile) {
    return (
      <div className={styles.mobileLink}>
        <Link href={href}>{linkText}</Link>
      </div>
    );
  } else {
    return (
      <div className={styles.navLink}>
        <Link href={href}>{linkText}</Link>
      </div>
    );
  }
};

export default NavLink;
