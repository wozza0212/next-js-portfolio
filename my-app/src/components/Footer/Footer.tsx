import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <p>This website was brought to you, in full by</p>
      <Link className={styles.footerLink} href={"/"}>Wozza</Link>
    </div>
  );
};

export default Footer;
