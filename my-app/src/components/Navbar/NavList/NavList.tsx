import NavLink from "../NavLink/NavLink";
import type { NavLinkProps } from "../NavLink/NavLink";
import styles from "./navList.module.css";

type NavList = NavLinkProps[];
type NavListProps = {
  links: NavList;
  mobile: boolean;
};

const NavList = (NavListProps: NavListProps) => {
  if (NavListProps.mobile) {
    return (
      <ul className={styles.mobileList}>
        {NavListProps.links.map((navListItem: NavLinkProps) => {
          return (
            <NavLink
              href={navListItem.href}
              mobile={navListItem.mobile}
              linkText={navListItem.linkText}
            />
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul className={styles.navList}>
        {NavListProps.links.map((navListItem: NavLinkProps) => {
          return (
            <NavLink
              href={navListItem.href}
              mobile={navListItem.mobile}
              linkText={navListItem.linkText}
            />
          );
        })}
      </ul>
    );
  }
};

export default NavList;
