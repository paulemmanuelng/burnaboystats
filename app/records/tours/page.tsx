import Link from "next/link";
import styles from "./tours.module.css";
import KeepExploring from "../../components/KeepExploring";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import ToursExplorer from "../../components/ToursExplorer";
import StatBox from "../../components/StatBox";
import { tours, liveMoments } from "../../data/tours";
import { revenueShows, revenueLeaderboardBox } from "../../data/tourRevenue";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Tours — $30.46M Record Tour & Sold-Out Stadiums",
  description:
    "Burna Boy's tours and biggest live moments — the $30.46M highest-grossing African tour ever, the record London Stadium concert and the World Cup.",
  path: "/records/tours",
  shareTitle: "Burna Boy Tours & Live",
  shareDescription: "Record-breaking grosses, sold-out stadiums and history made on stage.",
});

// No MusicEvent JSON-LD here on purpose: every documented show is in the past,
// and Google only shows *upcoming* events in rich results — so the markup won
// zero placements while repeatedly tripping GSC's Events report on the `offers`
// field, which we can't honestly fill for sold-out past shows with no price.
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
        <StatGrid
          stats={[
            { num: <CountUp end={30} prefix="$" suffix=".5M" />, label: "Top tour gross · African record" },
            { num: <CountUp end={6} prefix="$" suffix=".1M" />, label: "Biggest concert · African record" },
            { num: <CountUp end={300} suffix="K+" />, label: "Tickets · I Told Them tour" },
          ]}
        />

        <p className="lead" style={{ margin: "22px auto 4px", textAlign: "center" }}>
          Burna Boy&apos;s I Told Them… Tour grossed $30.46 million across 22 shows —
          the highest-grossing tour by an African artist in history — and his June 2024
          London Stadium concert ($6.15M from 58,973 fans) is the biggest single
          concert ever by an African artist.
        </p>

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

        <div className={styles.toursHead}>
          <h2 className={`secTitle ${styles.group}`}>
            <span className="goldText">Tours</span>
          </h2>
          <Link href="/records/tours/map" className={styles.mapBtn}>
            <span aria-hidden="true">🌍</span> Where he&apos;s performed
          </Link>
        </div>
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
          Highest <span className="goldText">revenue per show</span>
        </h2>
        <p className={styles.tourHint}>The top 10 single-show grosses by any African artist.</p>
        <StatBox
          box={revenueLeaderboardBox(revenueShows.slice(0, 10), {
            title: "Highest reported revenue per show",
            meta: "African artists · single-show gross · all-time",
            note: "Burna Boy holds 27 of the 40 highest-grossing shows by an African artist — more than every other artist on this list combined.",
            source: "Box-office figures reported by Billboard Boxscore & Pollstar (as aggregated by TouringData), cross-checked against press reporting, as of July 2026.",
          })}
        />
        <Link href="/records/tours/revenue" className={styles.allShowsCard}>
          <span>
            <span className={styles.allShowsTitle}>See the full top 40</span>
            <span className={styles.allShowsDesc}>Every show on the list, ranked by reported revenue</span>
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
          of July 2026. For future dates, always check official ticketing.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/tours" />
    </main>
  );
}
