import Link from "next/link";
import styles from "./tours.module.css";
import CountUp from "../../components/CountUp";
import { tours, liveMoments } from "../../data/tours";

export const metadata = {
  title: "Burna Boy Tours & Live — Grosses, Sold-Out Stadiums & Records",
  description:
    "Burna Boy's tours and biggest live moments — the I Told Them… tour ($30.5M, the highest-grossing African tour ever), the record London Stadium concert, sold-out stadiums and the World Cup.",
  alternates: { canonical: "/records/tours" },
};

export default function ToursPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Tours <span className="accent">&amp; Live</span>
        </h1>
        <p>Sold-out stadiums, record-breaking grosses and history made on stage</p>
      </header>

      <div className="container">
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={30} prefix="$" suffix=".5M" /></span>
            <span className={styles.sumLabel}>Top tour gross · African record</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={6} prefix="$" suffix=".1M" /></span>
            <span className={styles.sumLabel}>Biggest concert · African record</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={300} suffix="K+" /></span>
            <span className={styles.sumLabel}>Tickets · I Told Them tour</span>
          </div>
        </div>

        <h2 className={`secTitle ${styles.group}`}>
          <span className="goldText">Tours</span>
        </h2>
        <div className={styles.tourList}>
          {tours.map((t) => (
            <div key={t.name} className={`${styles.tourCard} ${t.record ? styles.tourRecord : ""}`}>
              <div className={styles.tourHead}>
                <div>
                  <span className={styles.tourName}>{t.name}</span>
                  <span className={styles.tourYears}>{t.years}</span>
                </div>
                {t.gross && (
                  <div className={styles.tourFigures}>
                    <span className={styles.tourGross}>{t.gross}</span>
                    <span className={styles.tourSub}>
                      {[t.tickets ? `${t.tickets} tickets` : null, t.shows ? `${t.shows} shows` : null]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </div>
                )}
              </div>
              {t.record && <span className={styles.recordTag}>Highest-grossing African tour ever</span>}
              <p className={styles.tourNote}>{t.note}</p>
            </div>
          ))}
        </div>

        <h2 className={`secTitle ${styles.group}`}>
          Record nights &amp; <span className="goldText">live milestones</span>
        </h2>
        <div className={styles.milestones}>
          {liveMoments.map((m) => (
            <div key={m.title} className={`${styles.mRow} ${m.record ? styles.mRecord : ""}`}>
              <span className={styles.mYear}>{m.year}</span>
              <div>
                <h3 className={styles.mTitle}>{m.title}</h3>
                <p className={styles.mText}>{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.source}>
          Box-office figures are reported by Billboard Boxscore &amp; Pollstar (as
          aggregated by TouringData) and cross-checked against press reporting, as
          of June 2026. For future dates, always check official ticketing.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
