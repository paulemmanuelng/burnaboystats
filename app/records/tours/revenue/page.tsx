import Link from "next/link";
import styles from "../tours.module.css";
import StatBox from "../../../components/StatBox";
import { revenueShows, revenueLeaderboardBox } from "../../../data/tourRevenue";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Concert Revenue — Highest-Grossing Shows",
  description:
    "The 40 highest-grossing single shows by an African artist, led by Burna Boy's $6.15M London Stadium concert — ranked by reported box-office revenue.",
  path: "/records/tours/revenue",
  shareTitle: "Burna Boy — Highest Revenue Per Show",
  shareDescription: "The 40 highest-grossing single shows by an African artist, ranked.",
});

const revenueJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Highest reported revenue per show — African artists",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: revenueShows.length,
  itemListElement: revenueShows.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${s.artist} — ${s.venue}, ${s.city} (${s.year})`,
  })),
};

const revenueDataset = datasetJsonLd({
  name: "Highest reported revenue per show by African artists",
  description:
    "The 40 highest-grossing single shows by an African artist, ranked by reported box-office revenue, led by Burna Boy's $6.15M London Stadium concert.",
  path: "/records/tours/revenue",
  keywords: ["Burna Boy", "box office", "highest-grossing concert", "African artist revenue", "touring revenue"],
  variableMeasured: ["Artist", "Venue", "Tour", "Year", "Tickets sold", "Revenue"],
});

export default function RevenuePage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueDataset) }} />
      <header className="pageHeader container">
        <h1>
          Highest <span className="accent">Revenue Per Show</span>
        </h1>
        <p>The 40 highest-grossing single shows by an African artist, ranked</p>
      </header>

      <div className="container">
        <Link href="/records/visualized#grosses" className="btn btnSecondary" style={{ marginBottom: 30 }}>
          See the grosses visualised →
        </Link>

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
