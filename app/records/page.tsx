import Link from "next/link";
import styles from "./records.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Career Records — Burna Boy Charts, Awards, Tours & Firsts",
  description:
    "Burna Boy's career records: official chart entries, awards, tours and the historic firsts that made him the African Giant.",
  path: "/records",
  shareTitle: "Burna Boy — Career Records",
});

const subs = [
  { href: "/records/charts", title: "Official Charts", desc: "Peak positions on every major chart worldwide", live: true },
  { href: "/records/awards", title: "Awards", desc: "Every win & nomination to date", live: true },
  { href: "/records/tours", title: "Tours", desc: "Tour runs, dates & box-office grosses", live: true },
  { href: "/records/firsts", title: "Firsts", desc: "Every record broken & first achieved", live: true },
  { href: "/records/africas-biggest", title: "Africa's Biggest", desc: "Most-streamed African artists, year by year", live: true },
];

export default function RecordsPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Career <span className="accent">Records</span>
        </h1>
        <p>Charts, awards, tours and the firsts that made history</p>
      </header>

      <div className="container">
        <div className={styles.grid}>
          {subs.map((s) =>
            s.live ? (
              <Link key={s.href} href={s.href} className={styles.card}>
                <span>
                  <span className={styles.cardTitle}>{s.title}</span>
                  <span className={styles.cardDesc}>{s.desc}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            ) : (
              <div key={s.href} className={`${styles.card} ${styles.soon}`}>
                <span>
                  <span className={styles.cardTitle}>{s.title}</span>
                  <span className={styles.cardDesc}>{s.desc}</span>
                </span>
                <span className={styles.soonTag}>Soon</span>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
