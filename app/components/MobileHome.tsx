import Link from "next/link";
import GlobeTeaser from "./GlobeTeaser";
import StatGlyph from "./StatGlyph";
import styles from "./mobileHome.module.css";
import { liveHeadline } from "../lib/liveHeadline";
import { spotifyImage } from "../lib/spotifyImage";
import { coverFor } from "../lib/covers";
import { sameTitle } from "../lib/titleKey";
import { numberWord, numberOneTitleFor, ukSinglesCell, ukAlbumsCell } from "../lib/homeData";
import {
  isRecentNumberOne,
  recentNumberOneTitle,
  recentArrivals,
  arrivalWindowPhrase,
  changedSentence,
} from "../lib/recentNumberOnes";
import {
  allChartItems,
  albumCharts,
  CHART_COUNTRIES,
  numberOnes,
  chartCountryCount,
} from "../data/charts";
import { totalAwards, countryCount as certCountries } from "../data/certifications";
import { albums as studioAlbums } from "../data/albums";
import { tours } from "../data/tours";
import { MARKET_WEIGHT } from "../lib/certs";

const DAI_DAI_COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";

/**
 * The mobile home screen.
 *
 * Mobile is a distinct layout in this design, not a narrowed desktop — a
 * different running order, a different stat grid, and two sections the desktop
 * page does not have at all (the No. 1 board and the album rail). So it is a
 * separate component shown only below the mobile breakpoint, rather than a pile
 * of media queries trying to reshape the desktop markup into it.
 *
 * Every figure derives from app/data.
 */

// ── The No. 1 board ────────────────────────────────────────────────────────
// Countries where a release has peaked at No. 1 on the country's own official
// chart, newest first. Data order is append order, so reversing surfaces the
// most recent additions — which is what the board is for.
const numberOneCountries: string[] = [];
for (const release of allChartItems) {
  for (const entry of release.entries) {
    if (entry.peak !== 1) continue;
    if (entry.c === "GLB" || entry.c === "GLBX") continue;
    if (!numberOneCountries.includes(entry.c)) numberOneCountries.push(entry.c);
  }
}

// "NEW" is not decoration: it marks a country the updates feed reports having
// just topped, so the badge can never outlive the news it refers to. The signal
// is shared with the desktop board — see app/lib/recentNumberOnes.ts.

const allCells = [...numberOneCountries].reverse().map((code) => {
  const meta = CHART_COUNTRIES[code];
  const isNew = isRecentNumberOne(meta.name);
  // Every cell credits the song that topped the country — NEW cells take the
  // title from the feed, the rest from the chart data via the same helper as
  // the desktop board (most recent No. 1 wins).
  const title = (isNew ? recentNumberOneTitle(meta.name) : undefined) ?? numberOneTitleFor(code);
  const art = title ? coverFor(title) : undefined;
  return {
    code,
    flag: meta.flag,
    name: meta.name,
    // The body string carries a parenthetical qualifier on the airplay
    // exceptions; the board wants the body's name alone.
    chart: meta.body.replace(/\s*\(.*\)$/, ""),
    isNew,
    cover: art ? spotifyImage(art, 300) : undefined,
    coverTitle: title,
  };
});

// Six cells, six songs. The lead slot carries the news when there IS news —
// a genuinely new arrival — and otherwise the biggest market "Dai Dai"
// topped, so the board always opens on a marquee country rather than on a
// stale badge. Then the curated UK pair, then the countries other songs
// topped.
const newCells = allCells.filter((c) => c.isNew);
const topDaiDaiCode = [...allCells]
  .filter((c) => !c.isNew && c.coverTitle === "Dai Dai")
  .sort(
    (a, b) =>
      (MARKET_WEIGHT[b.code] ?? 0) - (MARKET_WEIGHT[a.code] ?? 0) ||
      a.code.localeCompare(b.code)
  )[0]?.code;
const leadCell = newCells[0] ?? allCells.find((c) => c.code === topDaiDaiCode);
// Only ONE news cell ever shows: three arrivals in a week would otherwise
// fill the board with the same song again, which is what the six-song rule
// exists to prevent.
const restCells = allCells.filter((c) => !c.isNew && c.code !== leadCell?.code);
const board = [...(leadCell ? [leadCell] : []), ukSinglesCell, ukAlbumsCell, ...restCells].slice(0, 6);

// ── Albums ─────────────────────────────────────────────────────────────────
// Best official peak per album, for the chip under each cover.
const albumPeak = (title: string) => {
  const rec = albumCharts.find((r) => sameTitle(r.title, title));
  if (!rec) return null;
  const best = [...rec.entries]
    .filter((e) => e.c !== "GLB" && e.c !== "GLBX")
    .sort((a, b) => a.peak - b.peak)[0];
  return best ? `${best.c} No. ${best.peak}` : null;
};

const albumRail = [...studioAlbums]
  .sort((a, b) => b.year - a.year)
  .map((a) => ({ ...a, peak: albumPeak(a.title) }));

// ── Stat grid (four on mobile) ─────────────────────────────────────────────
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
const years = studioAlbums.map((a) => a.year);

// Each tile links to the page that holds the figure — a number the reader can
// see is a number they will try to tap, and every one of these has a page
// behind it that shows the working.
const stats = [
  { glyph: "certs" as const, value: String(totalAwards()), label: "Certifications", source: `${certCountries} countries`, href: "/certifications" },
  { glyph: "no1s" as const, value: String(numberOnes), label: "No. 1s worldwide", source: `${chartCountryCount} countries`, href: "/records/charts" },
  { glyph: "albums" as const, value: String(studioAlbums.length), label: "Studio albums", source: `${Math.min(...years)} — ${Math.max(...years)}`, href: "/music" },
  { glyph: "tour" as const, value: topTour?.gross ?? "—", label: "Top tour gross", source: "Boxscore", href: "/records/tours" },
];

export default function MobileHome() {
  const live = liveHeadline();

  return (
    <div className={styles.screen}>
      {/* Gold live band */}
      <div className={styles.band}>
        <span className={styles.livePill}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
        <span className={styles.bandText}>
          {live.title
            ? `“${live.title}” — No. 1 in ${live.countries} countries on streaming charts`
            : live.lead}
        </span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className={styles.rule} aria-hidden="true" />
          The African Giant · Est. 2010
        </p>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Burna <span className={styles.titleGold}>Boy</span>
        </h1>
        <p className={styles.lede}>
          Every certification, chart peak and record — sourced line by line, updated
          the day it changes.
        </p>
        <div className={styles.actions}>
          <Link href="/certifications" className={styles.primary}>
            <span>View certifications</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/music" className={styles.secondary}>
            <span>Explore the music</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* Today's number */}
      <div className={styles.today}>
        <span className={styles.todayGlyphs} aria-hidden="true">
          <span className={styles.tg1}>♬</span>
          <span className={styles.tg2}>✦</span>
          <span className={styles.tg3}>♩</span>
          <span className={styles.tg4}>✧</span>
          <span className={styles.tg5}>◍</span>
        </span>
        <div className={styles.todayInner}>
        <div className={styles.todayKicker}>
          <span className={styles.todayKickerRule} aria-hidden="true" />
          Today&apos;s number
        </div>
        <div className={styles.todayRow}>
          <div className={styles.todayFigure}>{live.countries}</div>
          <Link href="/dai-dai" className={styles.todayCover}>
            {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art */}
            <img src={spotifyImage(DAI_DAI_COVER, 300)} alt="" width={112} height={112} />
            <span className={styles.todayCoverLabel}>{live.title ?? "Dai Dai"} ↗</span>
          </Link>
        </div>
        <div className={styles.todayCaption}>
          {live.countries === 1
            ? "Country at No. 1 on today's streaming charts"
            : "Countries at No. 1 on today's streaming charts"}
        </div>
        <p className={styles.todayNote}>
          {recentArrivals.length
            ? `${recentArrivals.slice(0, 4).join(", ").replace(/, ([^,]*)$/, " and $1")} joined ${arrivalWindowPhrase}.`
            : "On streaming charts right now, refreshed hourly."}
        </p>
        <div className={styles.todayFoot}>
          <span className={styles.todayFootDot} aria-hidden="true" />
          <span>{changedSentence}</span>
          <Link href="/live-charts" className={styles.todayFootLink}>
            Live board ↗
          </Link>
        </div>
        </div>
      </div>

      {/* Stat grid — four, two-up */}
      <div className={styles.statGrid}>
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className={styles.stat}>
            <StatGlyph kind={s.glyph} className={`${styles.statGlyph} ${s.glyph === "albums" ? styles.statGlyphAlbum : ""}`} />
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSource}>{s.source}</div>
          </Link>
        ))}
      </div>

      {/* The No. 1 board */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>Official chart-toppers</p>
            <h2 className={styles.sectionTitle}>The No. 1 board</h2>
          </div>
          {/* Official charts, not live. Every cell here is a country whose own
              national chart a release topped, so the link has to land on the
              page that holds those peaks — /live-charts is a different claim
              (charting right now) and a different dataset. */}
          <Link href="/records/charts" className={styles.sectionLink}>
            All {numberOneCountries.length} ↗
          </Link>
        </div>
        <div className={styles.boardGrid}>
          {board.map((c) => (
            <div key={`${c.code}-${c.coverTitle ?? c.name}`} className={`${styles.boardCell} ${c.isNew ? styles.boardNew : ""}`}>
              <div className={styles.boardTop}>
                <span className={styles.boardCode}>{c.code}</span>
                <span className={styles.boardFlag} aria-hidden="true">
                  {c.isNew ? "NEW" : c.flag}
                </span>
              </div>
              <div className={styles.boardName}>{c.name}</div>
              <div className={styles.boardChart}>{c.chart}</div>
              {c.cover && (
                // eslint-disable-next-line @next/next/no-img-element -- 24px thumb, CDN-sized
                <img
                  className={styles.boardCover}
                  src={c.cover}
                  alt={`${c.coverTitle} cover`}
                  loading="lazy"
                  width={24}
                  height={24}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Album rail */}
      <section className={styles.sectionFlush}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>The catalogue</p>
            <h2 className={styles.sectionTitle}>
              {studioAlbums.length === 8 ? "Eight albums" : `${studioAlbums.length} albums`}
            </h2>
          </div>
          <Link href="/music" className={styles.sectionLink}>
            All ↗
          </Link>
        </div>
        <div className={styles.rail}>
          {albumRail.map((a) => (
            <Link key={a.title} href="/music" className={styles.railItem}>
              <span
                className={styles.railCover}
                style={a.cover ? { backgroundImage: `url(${spotifyImage(a.cover, 300)})` } : undefined}
              />
              <span className={styles.railTitle}>{a.title}</span>
              <span className={styles.railChips}>
                {a.peak && <span className={styles.railPeak}>{a.peak}</span>}
                <span className={styles.railYear}>{a.year}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Where he's performed — shared with desktop, one design at both widths. */}
      <GlobeTeaser />

      {/* History made */}
      <section className={styles.history}>
        <p className={styles.sectionKicker}>History made · 19 Jul 2026</p>
        <h2 className={styles.historyTitle}>
          Shakira <span aria-hidden="true">×</span>
          <br />
          Burna Boy
        </h2>
        <p className={styles.historyText}>
          First African headliner of a World Cup Final halftime show. “Dai Dai” spent
          35 days as the most-streamed song on Earth — and back on top.
        </p>
        <Link href="/dai-dai" className={styles.historyCta}>
          Read the story ↗
        </Link>
      </section>
    </div>
  );
}
