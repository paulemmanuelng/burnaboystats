import Link from "next/link";
import styles from "../tours.module.css";
import { festivals } from "../../../data/tours";

export const metadata = {
  title: "Burna Boy — Festival Headline Sets",
  description:
    "The major music festivals Burna Boy has headlined or co-headlined around the world — Glastonbury, Wireless, Afro Nation, Flow, Governors Ball and more.",
  alternates: { canonical: "/records/tours/festivals" },
};

export default function FestivalsPage() {
  const sorted = [...festivals].sort((a, b) => Number(b.year) - Number(a.year));
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Festival <span className="accent">Headline Sets</span>
        </h1>
        <p>The festivals Burna Boy has headlined &amp; co-headlined around the world</p>
      </header>

      <div className="container">
        <div className={styles.milestones} style={{ marginTop: 8 }}>
          {sorted.map((f) => (
            <div key={`${f.name}-${f.year}`} className={styles.mRow}>
              <span className={styles.mYear}>{f.year}</span>
              <div>
                <h3 className={styles.mTitle}>{f.name} · {f.location}</h3>
                <p className={styles.mText}>{f.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.source}>
          Major festival headline and co-headline sets. More festival and one-off
          appearances are still being added — the full list will be updated
          shortly. For his own headline tours and every tour date, see the Tours
          page.
        </p>
        <Link href="/records/tours" className={styles.back}>← Tours</Link>
      </div>
    </main>
  );
}
