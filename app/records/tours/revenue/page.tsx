import Link from "next/link";
import styles from "./revenue.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import RevenueBoard from "../../../components/RevenueBoard";
import MobileRevenue from "../../../components/MobileRevenue";
import { numberWord } from "../../../lib/homeData";
import { revenueShows } from "../../../data/tourRevenue";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";

// Derived, not written down. The list grows whenever a new show is reported —
// it was 40 entries until Tyla's Tokyo gross was added — and five separate
// places said "40", including the JSON-LD a search engine reads.
const showCount = revenueShows.length;
const burnaShows = revenueShows.filter((s) => s.artist === "Burna Boy").length;
const otherShows = showCount - burnaShows;
const top = revenueShows[0];
const topM = `$${(top.revenue / 1e6).toFixed(2)}M`;

export const metadata = pageMetadata({
  title: "Burna Boy Concert Revenue — Highest-Grossing Shows",
  description:
    `The ${showCount} highest-grossing single shows by an African artist, led by Burna Boy's ${topM} London Stadium concert — ranked by reported box-office revenue.`,
  path: "/records/tours/revenue",
  shareTitle: "Burna Boy — Highest Revenue Per Show",
  shareDescription: `The ${showCount} highest-grossing single shows by an African artist, ranked.`,
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
    `The ${showCount} highest-grossing single shows by an African artist, ranked by reported box-office revenue, led by Burna Boy's ${topM} London Stadium concert.`,
  path: "/records/tours/revenue",
  keywords: ["Burna Boy", "box office", "highest-grossing concert", "African artist revenue", "touring revenue"],
  variableMeasured: ["Artist", "Venue", "Tour", "Year", "Tickets sold", "Revenue"],
});

const SOURCE_NOTE =
  "Box-office figures reported by Billboard Boxscore & Pollstar (as aggregated by TouringData), cross-checked against press reporting, as of July 2026. Each entry is a single night's gross — multi-night stands (e.g. Toronto & Montreal) are ranked per night, not combined.";

export default function RevenuePage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueDataset) }} />

      {/* Mobile is screen 14 — a working chip filter over the board, gross and
          headcount right-aligned, no bars. Ranks are baked before filtering, so
          narrowing to one artist shows WHERE their nights sit on the full board
          rather than re-ranking them against themselves. */}
      <MobileRevenue
        topGross={topM}
        lede={`${numberWord(showCount)} documented shows by African artists, ranked by gross — ${burnaShows} of them his.`}
        counts={{ all: showCount, his: burnaShows, other: otherShows }}
        stats={[
          { value: topM, label: "Biggest night" },
          { value: top.tickets ?? "—", label: `Tickets, ${top.city}` },
        ]}
        rows={revenueShows.map((s, i) => ({
          rank: String(i + 1).padStart(2, "0"),
          venue: s.venue,
          meta: `${s.city} · ${s.tour} · ${s.year}`,
          gross: `$${(s.revenue / 1e6).toFixed(2)}M`,
          tickets: s.tickets,
          his: s.artist === "Burna Boy",
        }))}
        sourceNote="Grosses and ticket counts from Billboard Boxscore. The board ranks every reported show by an African artist, not only his — a missing night means Boxscore never reported it. A dash means no headcount was published."
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours/revenue" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Box office · all-time
            </div>
            <h1 className={styles.h1}>
              Highest <span className="inkText">Revenue Per Show</span>
            </h1>
            <p className={styles.lede}>
              The {showCount} highest-grossing single shows by an African artist, ranked.
              Burna Boy holds {burnaShows} of them — more than every other artist on this
              list combined.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/records/visualized#grosses" className="btn btnSecondary">
                See the grosses visualised →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Filter band + board ────────────────────────────── */}
        <RevenueBoard shows={revenueShows}>
          <p className={styles.sourceNote}>{SOURCE_NOTE}</p>
          <Link href="/records/tours" className={`btn btnSecondary ${styles.back}`}>
            ← Tours
          </Link>
        </RevenueBoard>
      </div>
    </main>
  );
}
