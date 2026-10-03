import Link from "next/link";
import styles from "./revenue.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import RevenueBoard from "../../../components/RevenueBoard";
import MobileRevenue from "../../../components/MobileRevenue";
import { numberWord } from "../../../lib/homeData";
import { compactGross } from "../../../lib/grossLabel";
import { RUNS_HEADING, RUNS_LEDE, runTickets } from "../../../lib/multiNightRuns";
import { revenueShows, revenueStands, REVENUE_AS_OF, REVENUE_SOURCE } from "../../../data/tourRevenue";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";

// Derived, not written down. The list grows whenever a new show is reported —
// it was 40 entries until Tyla's Tokyo gross was added — and five separate
// places said "40", including the JSON-LD a search engine reads. It has no
// floor (3 Oct 2026): every verified single-show gross is on it, so the copy
// says "every … we have verified", never "the N highest".
const showCount = revenueShows.length;
const burnaShows = revenueShows.filter((s) => s.artist === "Burna Boy").length;
const otherShows = showCount - burnaShows;
const top = revenueShows[0];
// The client board gets every column but `source`, so this page's own payload
// carries none (the data file still reaches a shared browser chunk through
// tours.ts/firsts.ts; no page prints a source — tests/revenueSources.test.ts).
const boardShows = revenueShows.map(({ artist, venue, city, flag, tour, year, tickets, revenue }) => ({
  artist, venue, city, flag, tour, year, tickets, revenue,
}));
// The dash legend is printed only while a dash is on the board: since 3 Oct
// 2026 every row carries a headcount, and a legend for nothing reads as a bug.
const anyDash = revenueShows.some((s) => !s.tickets);
const topM = `$${(top.revenue / 1e6).toFixed(2)}M`;

export const metadata = pageMetadata({
  title: "Burna Boy Concert Revenue — Highest-Grossing Shows",
  description:
    `Every verified single-show gross by an African artist — ${showCount} shows, ranked by box-office revenue and led by Burna Boy's ${topM} London Stadium concert.`,
  path: "/records/tours/revenue",
  shareTitle: "Burna Boy — Highest Revenue Per Show",
  shareDescription: `Every verified single-show gross by an African artist — ${showCount} shows, ranked.`,
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
    `Every reported single-show gross by an African artist we have verified — ${showCount} shows, ranked by box-office revenue, led by Burna Boy's ${topM} London Stadium concert.`,
  path: "/records/tours/revenue",
  keywords: ["Burna Boy", "box office", "highest-grossing concert", "African artist revenue", "touring revenue"],
  variableMeasured: ["Artist", "Venue", "Tour", "Year", "Tickets sold", "Revenue"],
});

const SOURCE_NOTE =
  `${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}. Each entry is a single night's gross. Multi-night runs reported only as one combined total are listed beneath the board with the reported figures; they cannot be ranked against single nights, and no per-night split is invented for them.`;

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
          gross: compactGross(s.revenue),
          tickets: s.tickets,
          his: s.artist === "Burna Boy",
        }))}
        stands={revenueStands.map((s) => ({
          // Every run names its artist — his too — so a row never needs the
          // legend to say whose it is; "nights", never "shows", in this list.
          flag: s.flag,
          place: `${s.venue}, ${s.city}`,
          artist: s.artist,
          tour: s.tour,
          dates: s.dates,
          gross: compactGross(s.revenue),
          tickets: runTickets(s.tickets, s.shows),
          his: s.artist === "Burna Boy",
        }))}
        sourceNote={`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}. The board ranks every reported show by an African artist we have verified, not only his — a missing night means no gross for it was reported, or none we could verify yet.${anyDash ? " A dash means no headcount was published." : ""} Multi-night runs reported only as one combined total sit beneath the board with the reported figures; no per-night split is invented for them.`}
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
              Every reported single-show gross by an African artist we have verified —{" "}
              {showCount} shows, ranked. Burna Boy holds {burnaShows} of them
              {burnaShows > otherShows ? " — more than every other artist on this list combined" : ""}.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/records/visualized#grosses" className="btn btnSecondary">
                See the grosses visualised →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Filter band + board ────────────────────────────── */}
        <RevenueBoard shows={boardShows}>
          {/* Multi-night runs the body reports as one figure. Shown here,
              beneath the ranking, with the body's numbers — not halved into
              the board (which is how they sat from July to September 2026)
              and not dropped from the page either. Every row names its artist,
              his included, as the board's rows do. */}
          <section className={styles.stands} aria-labelledby="runs-title">
            <h2 id="runs-title" className={styles.standsTitle}>{RUNS_HEADING}</h2>
            <p className={styles.standsLede}>{RUNS_LEDE}</p>
            <ul className={styles.standsList}>
              {revenueStands.map((s) => (
                <li key={`${s.venue}-${s.dates}`} className={styles.stand}>
                  <span className={styles.standVenue}>
                    <span className={styles.standPlace}>
                      {s.flag} {s.venue}, {s.city}
                    </span>
                    <span className={styles.standMeta}>
                      <span className={s.artist === "Burna Boy" ? styles.hisName : styles.otherName}>{s.artist}</span>
                      {" · "}
                      {s.tour} · {s.dates}
                    </span>
                  </span>
                  <span className={`${styles.standGross} ${s.artist === "Burna Boy" ? styles.standGrossHis : ""}`}>
                    ${s.revenue.toLocaleString("en-US")}
                  </span>
                  <span className={styles.standTickets}>{runTickets(s.tickets, s.shows)}</span>
                </li>
              ))}
            </ul>
            <p className={styles.standsNote}>
              No per-night split is invented for them: each total would sit in the top five of a
              board of single nights it never had.
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
