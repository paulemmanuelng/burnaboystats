import Link from "next/link";
import styles from "../tours.module.css";
import { festivals, otherShows } from "../../../data/tours";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy — Festivals & Shows",
  description:
    "Every major festival and one-off show Burna Boy has performed — the festivals he's headlined (Afro Nation, Flow, Mawazine, St Kitts, Reggae Land) plus other big-stage appearances (Glastonbury, Wireless, Coachella, Roskilde and more).",
  path: "/records/tours/festivals",
  shareTitle: "Burna Boy — Festivals & Shows",
  shareDescription: "Every festival he's headlined, plus other big-stage appearances.",
});

export default function FestivalsPage() {
  const headlined = [...festivals].sort((a, b) => Number(b.year) - Number(a.year));
  const others = [...otherShows].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Festivals <span className="accent">&amp; Shows</span>
        </h1>
        <p>The festivals Burna Boy has headlined — and the other big stages he&apos;s played</p>
      </header>

      <div className="container">
        <h2 className={`secTitle ${styles.group}`}>
          Festivals <span className="goldText">headlined</span>
        </h2>
        <div className={styles.milestones} style={{ marginTop: 8 }}>
          {headlined.map((f) => (
            <div key={`${f.name}-${f.year}`} className={styles.mRow}>
              <span className={styles.mYear}>{f.year}</span>
              <div>
                <h3 className={styles.mTitle}>{f.name} · {f.location}</h3>
                <p className={styles.mText}>{f.note}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={`secTitle ${styles.group}`}>
          Other festivals &amp; <span className="goldText">shows</span>
        </h2>
        <p className={styles.tourHint}>Major festival appearances where he wasn&apos;t the headliner.</p>
        <div className={styles.milestones}>
          {others.map((f) => (
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
          Festival headline sets and other major festival / one-off appearances,
          verified against press and festival line-ups, as of June 2026. His own
          headline tours and every tour date are on the Tours page. More
          appearances are added as they are confirmed.
        </p>
        <Link href="/records/tours" className={styles.back}>← Tours</Link>
      </div>
    </main>
  );
}
