import localFont from "next/font/local";
import styles from "./homepage.module.css";
import Link from "next/link";

const bitcoinGridDouble = localFont({
  src: [
    {
      path: "../../public/fonts/Bitcount_Grid_Double/BitcountGridDouble-wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const workSans = localFont({
  src: [
    {
      path: "../../public/fonts/Work_Sans/WorkSans-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <div className={`${styles.introBox}`}>
            <p>I am</p>
            <div className={styles.coolNameFont}>
              <p className={workSans.className}>Thomas Wasnidge</p>
            </div>
          </div>
          <div>
            <h2>Projects</h2>
            <p>
              <Link href={"./react-projects"}>Projects</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
