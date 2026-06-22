import Link from "next/link";
import styles from "./tours.module.css";
import CountUp from "../../components/CountUp";
import ToursExplorer from "../../components/ToursExplorer";
import { tours, liveMoments } from "../../data/tours";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Tours & Live — Grosses, Sold-Out Stadiums & Records",
  description:
    "Burna Boy's tours and biggest live moments — the I Told Them… tour ($30.5M, the highest-grossing African tour ever), the record London Stadium concert, sold-out stadiums and the World Cup.",
  path: "/records/tours",
  shareTitle: "Burna Boy Tours & Live",
  shareDescription: "Record-breaking grosses, sold-out stadiums and history made on stage.",
});

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

        <div className={styles.officialLinks}>
          <span className={styles.officialLabel}>Upcoming dates &amp; tickets</span>
          <div className={styles.officialBtns}>
            <a
              className="btn btnPrimary"
              href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets · Ticketmaster ↗
            </a>
            <a
              className="btn btnSecondary"
              href="https://www.onaspaceship.com/tour"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official tour site ↗
            </a>
          </div>
        </div>

        <h2 className={`secTitle ${styles.group}`}>
          <span className="goldText">Tours</span>
        </h2>
        <p className={styles.tourHint}>Tap a tour to see its venues, dates &amp; capacities.</p>
        <ToursExplorer tours={tours} />

        <Link href="/records/tours/festivals" className={styles.allShowsCard}>
          <span>
            <span className={styles.allShowsTitle}>Festivals &amp; shows</span>
            <span className={styles.allShowsDesc}>Every festival &amp; big stage he&apos;s played — the headline sets and beyond</span>
          </span>
          <span className={styles.allShowsArrow} aria-hidden="true">→</span>
        </Link>

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
