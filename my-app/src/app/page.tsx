import localFont from "next/font/local";
import styles from "./homepage.module.css";

const bitcoinGridDouble = localFont({
  src: [
    {
      path: "../../public/fonts/BitcountGridDouble-wght.ttf",
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
          <p>Some text around name</p>
          <div className={styles.coolNameFont}>
            <p className={bitcoinGridDouble.className}>Thomas Wasnidge</p>
          </div>
        </div>
      </main>
    </div>
  );
}
