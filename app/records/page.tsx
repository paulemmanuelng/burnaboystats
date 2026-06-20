import Link from "next/link";
import styles from "./records.module.css";

export const metadata = {
  title: "Career Records — Burna Boy Charts, Awards, Tours & Firsts",
  description:
    "Burna Boy's career records: official chart entries, awards, tours and the historic firsts that made him the African Giant.",
  alternates: { canonical: "/records" },
};

const subs = [
  { href: "/records/charts", title: "Official Charts", desc: "Peak positions on every major chart worldwide", live: true },
  { href: "/records/awards", title: "Awards", desc: "Every win & nomination to date", live: true },
  { href: "/records/tours", title: "Tours", desc: "Tour runs, dates & box-office grosses", live: false },
  { href: "/records/firsts", title: "Firsts", desc: "Every record broken & first achieved", live: false },
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
