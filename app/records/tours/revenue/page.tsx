import Link from "next/link";
import styles from "./revenue.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import RevenueBoard from "../../../components/RevenueBoard";
import MobileRevenue from "../../../components/MobileRevenue";
import { numberWord } from "../../../lib/homeData";
import { revenueShows, revenueStands } from "../../../data/tourRevenue";
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
  "Box-office figures reported by Billboard Boxscore & Pollstar (as aggregated by TouringData), cross-checked against press reporting, as of September 2026. Each entry is a single night's gross. Stands that Boxscore reported only as one combined total are listed beneath the board with the body's own figures — they cannot be ranked against single nights, and no per-night split is invented for them.";

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
          // Another artist's night names its artist right under the venue —
          // the tint alone made "whose show is this?" a legend lookup. His
          // rows keep the tour name instead: the page is his, and his rows
          // already carry the gold gross and the plain background.
          meta: s.artist === "Burna Boy"
            ? `${s.city} · ${s.tour} · ${s.year}`
            : `${s.artist} · ${s.city} · ${s.year}`,
          gross: `$${(s.revenue / 1e6).toFixed(2)}M`,
          tickets: s.tickets,
          his: s.artist === "Burna Boy",
        }))}
        stands={revenueStands.map((s) => ({
          venue: s.venue,
          meta: `${s.city} · ${s.tour} · ${s.dates} · ${s.shows} shows`,
          gross: `$${(s.revenue / 1e6).toFixed(2)}M`,
          tickets: `${s.tickets} over ${s.shows} nights`,
          his: s.artist === "Burna Boy",
        }))}
        sourceNote="Grosses and ticket counts from Billboard Boxscore. The board ranks every reported show by an African artist, not only his — a missing night means Boxscore never reported it. A dash means no headcount was published. Stands Boxscore reported only as one combined total sit beneath the board with the body's figures; no per-night split is invented for them."
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
          {/* Multi-night stands the body reports as one figure. Shown here,
              beneath the ranking, with the body's numbers — not halved into
              the board (which is how they sat from July to September 2026)
              and not dropped from the page either. */}
          <section className={styles.stands} aria-labelledby="stands-title">
            <h2 id="stands-title" className={styles.standsTitle}>Reported as a stand — one figure for the run</h2>
            <ul className={styles.standsList}>
              {revenueStands.map((s) => (
                <li key={`${s.venue}-${s.dates}`} className={styles.stand}>
                  <span className={styles.standVenue}>
                    <span aria-hidden="true">{s.flag}</span> {s.venue}, {s.city}
                    <span className={styles.standMeta}> · {s.tour} · {s.dates} · {s.shows} shows</span>
                  </span>
                  <span className={styles.standGross}>${s.revenue.toLocaleString("en-US")}</span>
                  <span className={styles.standTickets}>{s.tickets} tickets over {s.shows} nights</span>
                </li>
              ))}
            </ul>
            <p className={styles.standsNote}>
              Boxscore reported each of these runs as one combined figure and never a per-night gross, so
              they are shown as the body prints them rather than ranked above — a two-night total would
              sit fifth on a board of single nights it never had.
            </p>
          </section>
          <p className={styles.sourceNote}>{SOURCE_NOTE}</p>
          <Link href="/records/tours" className={`btn btnSecondary ${styles.back}`}>
            ← Tours
          </Link>
        </RevenueBoard>
      </div>
    </main>
  );
}
