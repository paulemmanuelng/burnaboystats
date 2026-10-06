import Link from "next/link";
import styles from "./revenue.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import RevenueBoard from "../../../components/RevenueBoard";
import MobileRevenue from "../../../components/MobileRevenue";
import { numberWord } from "../../../lib/homeData";
import { compactGross } from "../../../lib/grossLabel";
import { runRankCeiling } from "../../../lib/multiNightRuns";
import { revenueShows, revenueStands } from "../../../data/tourRevenue";
import { REVENUE_AS_OF, REVENUE_SOURCE, REVENUE_STAMP } from "../../../lib/revenueSource";
import { usdFull } from "../../../lib/revenueByCountry";
import { pct, showsBoard } from "../../../lib/showsBoard";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";
import { showsBoardTitle } from "../../../lib/showsTitle";
import { nightCounts } from "../../../lib/showsChips";
import { SHOWS_PRE_PAINT, showsPrePaintCss } from "../../../lib/showsDeepLink";

// Highest-grossing shows — Claude Design round 1 (4 Oct 2026), Job 2, "the
// record night" direction: designs/desktop/GXShowsDesk.dc.html and
// GXShowsPhone.dc.html, with the review's fixes 11–19 and the owner's rulings
// (Q4, N2, N4, N6) where they differ from the canvas.
//
// Every figure is derived from the board's rows (lib/showsBoard.ts), never
// typed: the list grows whenever a new show is reported. It has no floor
// (3 Oct 2026): every verified single-show gross is on it, so the copy says
// "every … we have verified", never "the N highest".
const b = showsBoard();
const { top, last } = b;
const showCount = b.count;
const burnaShows = b.hisCount;
// The client board gets every column but `source`, so this page's own payload
// carries none; no page prints a source (tests/revenueSources.test.ts), and no
// client module imports the data file (tests/tourRevenueServerOnly.test.ts).
const boardShows = revenueShows.map(({ artist, venue, city, flag, tour, year, tickets, revenue }) => ({
  artist, venue, city, flag, tour, year, tickets, revenue,
}));
// The runs, the same way: everything but `source`, for the board's runs chip.
const boardRuns = revenueStands.map(({ artist, venue, city, flag, tour, dates, shows, tickets, revenue }) => ({
  artist, venue, city, flag, tour, dates, shows, tickets, revenue,
}));
// The dash note is printed only while a dash is on the board: since 3 Oct 2026
// every row carries a headcount, and a note for nothing reads as a bug.
const anyDash = revenueShows.some((s) => !s.tickets);
const topM = `$${(top.revenue / 1e6).toFixed(2)}M`;
// Who and where the No. 1 is, from the row itself: the meta and the Dataset
// once typed "Burna Boy's … London Stadium concert", which would name the wrong
// artist and venue the day another night took No. 1 (N6, "anywhere it prints").
const TOP_LEAD = `${top.artist}${top.artist.endsWith("s") ? "'" : "'s"} ${topM} ${top.venue} concert`;
// The place the weakest-placed run would take among single nights — "top N" in
// the runs' head, never typed.
const runCeiling = runRankCeiling(revenueStands.map((s) => s.revenue), revenueShows.map((s) => s.revenue));
/** Said once a layout, at the runs' head after RUNS_LEDE (fix 12, bo-06) —
 *  since 4 Oct 2026 the runs chip's view, on both layouts. */
const RUNS_SPLIT_NOTE = `No per-night split is invented for them: each total would sit in the top ${numberWord(runCeiling).toLowerCase()} of a board of single nights it never had.`;
const SOURCE = `${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`;
/** A "Biggest shows" link's first paint (V-tourscars-02): the inline script
 *  marks <html> with ?artist= (or #artist=) before either board is parsed, and
 *  these rules — one per artist holding a chip, the boards' own list — show
 *  that artist's nights only, so hydrating changes no row (lib/showsDeepLink). */
const FIRST_PAINT_CSS = showsPrePaintCss(Object.keys(nightCounts(revenueShows.map((s) => s.artist))));

// The No. 1 night's artist, derived (seo-11): the board is every African
// artist's, and a typed "Burna Boy" would go stale the day another night leads.
const TITLE = showsBoardTitle(top.artist);

export const metadata = pageMetadata({
  title: TITLE,
  description:
    `Every verified single-show gross by an African artist — ${showCount} shows, ranked by box-office gross and led by ${TOP_LEAD}.`,
  path: "/records/tours/revenue",
  shareTitle: TITLE,
  shareDescription: `Every verified single-show gross by an African artist — ${showCount} shows, ranked.`,
});

const revenueJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Highest-grossing shows — African artists",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: revenueShows.length,
  itemListElement: revenueShows.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${s.artist} — ${s.venue}, ${s.city} (${s.year})`,
  })),
};

const revenueDataset = datasetJsonLd({
  name: "Highest-grossing shows by African artists",
  description:
    `Every reported single-show gross by an African artist we have verified — ${showCount} shows, ranked by box-office gross, led by ${TOP_LEAD}.`,
  path: "/records/tours/revenue",
  keywords: ["Burna Boy", "box office", "highest-grossing shows", "highest-grossing concert", "African artist revenue", "touring revenue"],
  variableMeasured: ["Artist", "Venue", "Tour", "Year", "Tickets sold", "Gross"],
  // The sitemap's stamp for this route (app/sitemap.ts), so the two agree.
  dateModified: REVENUE_STAMP,
});

/** The method note under the board, desktop wording (GXShowsDesk). The source
 *  line is REVENUE_SOURCE + ", as of " + REVENUE_AS_OF — never typed (fix 18). */
const DESK_NOTE = [
  { k: "Source", v: SOURCE },
  { k: "Each row", v: "One single night’s reported gross." },
  { k: "What is ranked", v: "Every reported show by an African artist we have verified, not only his." },
  { k: "A missing night", v: "No gross was reported for it, or none we could verify yet." },
  ...(anyDash ? [{ k: "A dash", v: "No headcount was published." }] : []),
];
/** The phone's, with its short labels (GXShowsPhone); the same source line. */
const PHONE_NOTE = [
  { k: "Source", v: SOURCE },
  { k: "Each row", v: "One single night’s gross." },
  { k: "Ranked", v: "Every verified show by an African artist, not only his." },
  { k: "Missing", v: "Not reported, or not verified yet." },
  ...(anyDash ? [{ k: "Dash", v: "No headcount was published." }] : []),
];

export default function RevenuePage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(revenueDataset) }} />
      <script dangerouslySetInnerHTML={{ __html: SHOWS_PRE_PAINT }} />
      <style dangerouslySetInnerHTML={{ __html: FIRST_PAINT_CSS }} />

      {/* The phone screen: its own component (never the desktop's), from
          GXShowsPhone. One money form on it: the rows' compact gross. */}
      <MobileRevenue
        record={{
          gross: compactGross(top.revenue),
          his: top.his,
          artist: top.artist,
          venue: top.venue,
          city: top.city,
          year: top.year,
          tickets: top.tickets,
        }}
        figs={[
          { value: `${b.hisTop10} of 10`, label: "Top ten, his" },
          { value: pct(b.hisShare), label: "His share of the board" },
          { value: String(showCount), label: `Shows · ${b.artists.length} artists` },
        ]}
        share={{
          segs: b.artists.map((a) => ({ artist: a.artist, his: a.his, share: a.share, pct: pct(a.share) })),
          his: compactGross(b.hisGross),
          board: compactGross(b.boardGross),
          last: compactGross(last.revenue),
          spread: `${b.spread}×`,
        }}
        rows={revenueShows.map((s, i) => ({
          rank: String(i + 1).padStart(2, "0"),
          flag: s.flag,
          venue: s.venue,
          // Every row names its artist, his too, in the same place and the
          // same format as everyone else's: "<artist> · <city> · <year>" (the
          // owner's rule, 3 Oct 2026). The gold gross still marks his nights;
          // it never stands in for his name. Passed as fields so the phone row
          // clips the city, never the year (k2).
          artist: s.artist,
          city: s.city,
          year: s.year,
          gross: compactGross(s.revenue),
          tickets: s.tickets,
          his: s.artist === "Burna Boy",
        }))}
        stands={revenueStands.map((s) => ({
          // The runs chip's rows. Every run names its artist — his too — in the
          // board rows' place and format; "nights", never "shows".
          flag: s.flag,
          venue: s.venue,
          city: s.city,
          artist: s.artist,
          dates: s.dates,
          nights: s.shows,
          gross: compactGross(s.revenue),
          tickets: s.tickets,
          his: s.artist === "Burna Boy",
        }))}
        runsNote={RUNS_SPLIT_NOTE}
        note={PHONE_NOTE}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours/revenue" />

        <div className={styles.page}>
          {/* ── Hero: the story, then the record night ─────────── */}
          <section className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                African artists · reported box office
              </div>
              <h1 className={styles.h1}>
                Highest-Grossing <span className="inkText">Shows</span>
              </h1>
              {/* Fix 3: "every single night reported" overstated it — reported
                  nights are held off the board until a body is read. */}
              <p className={`${styles.lede} ${styles.heroLede}`}>
                Every reported single night by an African artist we have verified, ranked by gross — from{" "}
                {usdFull(top.revenue)} to {usdFull(last.revenue)}.
              </p>
              <div className={styles.figs}>
                <div className={styles.fig}>
                  <span className={styles.figValue}>{showCount}</span>
                  <span className={styles.figLabel}>Shows · {b.artists.length} artists</span>
                </div>
                <div className={styles.fig}>
                  <span className={`${styles.figValue} ${styles.figHis}`}>{b.hisTop10} of 10</span>
                  <span className={styles.figLabel}>Top ten that are his</span>
                </div>
                <div className={styles.fig}>
                  <span className={`${styles.figValue} ${styles.figHis}`}>{pct(b.hisShare)}</span>
                  <span className={styles.figLabel}>His share of the board</span>
                </div>
                <div className={styles.fig}>
                  <span className={styles.figValue}>{b.millionPlus}</span>
                  <span className={styles.figLabel}>Nights of $1M or more</span>
                </div>
              </div>
              <div className={styles.heroBtns}>
                <Link href="/records/tours/revenue/countries" className="btn btnPrimary">
                  Highest-grossing artists by country →
                </Link>
                <Link href="/records/visualized#grosses" className="btn btnSecondary">
                  The grosses visualised ↗
                </Link>
              </div>
            </div>

            {/* The record night. Its figure is gold only while the night is
                his (N6, 4 Oct 2026): another artist at No. 1 prints in ink. */}
            <article className={styles.record} aria-label="The biggest night on the board">
              <span className={styles.recordHead}>
                <span>No. 01 · the biggest night</span>
                <span>{top.year}</span>
              </span>
              <span className={`${styles.recordFigure} ${top.his ? styles.recordFigureHis : ""}`}>
                {usdFull(top.revenue)}
              </span>
              <span className={styles.recordArtist}>{top.artist}</span>
              <span className={styles.recordPlace}>
                {top.flag} {top.venue}, {top.city} · {top.tour}
              </span>
              <div className={styles.recordStats}>
                <div className={styles.recordStat}>
                  <span className={styles.recordStatValue}>{top.tickets ?? "—"}</span>
                  <span className={styles.recordStatLabel}>Tickets</span>
                </div>
                <div className={styles.recordStat}>
                  <span className={styles.recordStatValue}>{b.spread}×</span>
                  <span className={styles.recordStatLabel}>Top night ÷ smallest</span>
                </div>
              </div>
              <span className={styles.recordFoot}>
                Smallest: {last.artist} · {last.venue}, {last.city} · {last.year} · {usdFull(last.revenue)}
              </span>
            </article>
          </section>

          {/* ── Share of the board's gross, by artist ──────────── */}
          <section className={styles.share} aria-labelledby="share-title">
            <div className={styles.shareHead}>
              <h2 id="share-title" className={styles.shareTitle}>
                Share of the board’s gross
              </h2>
              <span className={styles.shareSum}>
                <span className={styles.shareName}>Burna Boy</span> ·{" "}
                <span className={styles.shareGold}>{usdFull(b.hisGross)}</span> of {usdFull(b.boardGross)} ·{" "}
                <span className={styles.shareGold}>{pct(b.hisShare)}</span> · {burnaShows} shows
              </span>
            </div>
            <div
              className={`${styles.shareBar} ${styles.grow}`}
              role="img"
              aria-label={b.artists.map((a) => `${a.artist} ${pct(a.share)}`).join(", ")}
            >
              {b.artists.map((a) => (
                <span
                  key={a.artist}
                  className={`${styles.seg} ${a.his ? styles.segHis : ""}`}
                  style={{ width: `${(100 * a.share).toFixed(2)}%` }}
                />
              ))}
            </div>
            <div className={styles.shareKey} aria-hidden="true">
              {b.artists.map((a) => (
                <span key={a.artist}>
                  <span className={styles.shareKeyName}>{a.artist}</span> {pct(a.share)}
                </span>
              ))}
            </div>
          </section>

          {/* ── Filter box + board ─────────────────────────────── */}
          {/* The multi-night runs are the board's second chip, beside "All
              artists" (the owner, 4 Oct 2026), not a section beneath it. */}
          <RevenueBoard shows={boardShows} runs={boardRuns} runsNote={RUNS_SPLIT_NOTE}>
            <section className={styles.method} aria-label="Sources and method">
              <dl className={styles.methodList}>
                {DESK_NOTE.map((n) => (
                  <div key={n.k} className={styles.methodRow}>
                    <dt>{n.k}</dt>
                    <dd>{n.v}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/records/tours" className={`btn btnSecondary ${styles.back}`}>
                ← Tours
              </Link>
            </section>
          </RevenueBoard>
        </div>
      </div>
    </main>
  );
}
