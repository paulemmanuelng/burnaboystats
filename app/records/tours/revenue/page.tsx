import Link from "next/link";
import styles from "../tours.module.css";
import StatBox from "../../../components/StatBox";
import { revenueShows, revenueLeaderboardBox } from "../../../data/tourRevenue";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy — Highest Revenue Per Show",
  description:
    "The 40 highest-grossing single shows by an African artist, led by Burna Boy's $6.15M London Stadium concert — ranked by reported box-office revenue.",
  path: "/records/tours/revenue",
  shareTitle: "Burna Boy — Highest Revenue Per Show",
  shareDescription: "The 40 highest-grossing single shows by an African artist, ranked.",
});

export default function RevenuePage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Highest <span className="accent">Revenue Per Show</span>
        </h1>
        <p>The 40 highest-grossing single shows by an African artist, ranked</p>
      </header>

      <div className="container">
        <StatBox
          box={revenueLeaderboardBox(revenueShows, {
            title: "Highest reported revenue per show",
            meta: "African artists · single-show gross · all-time",
            note: "Burna Boy holds 27 of the 40 highest-grossing shows by an African artist — more than every other artist on this list combined.",
            source: "Box-office figures reported by Billboard Boxscore & Pollstar (as aggregated by TouringData), cross-checked against press reporting, as of July 2026. Each entry is a single night's gross — multi-night stands (e.g. Toronto & Montreal) are ranked per night, not combined.",
          })}
        />
        <Link href="/records/tours" className={styles.back}>← Tours</Link>
      </div>
    </main>
  );
}
