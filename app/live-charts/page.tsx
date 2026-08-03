import Link from "next/link";
import styles from "./liveCharts.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileLiveCharts from "../components/MobileLiveCharts";
import { cadenceOf, reachOf } from "../lib/liveChartMeta";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { coverFor, monogramFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import {
  liveCharts,
  liveChartsUpdated,
  livePlacementCount,
  liveNumberOnes,
  liveCountryCount,
  livePlatformTotals,
  type LiveEntry,
} from "../data/liveCharts";

export const metadata = pageMetadata({
  title: "Burna Boy Live Charts — Where He's Charting Right Now",
  description: `Every Burna Boy song charting right now: ${livePlacementCount} live placements across ${liveCountryCount} countries on Spotify, Apple Music, YouTube, Deezer, iTunes and Shazam. Updated hourly.`,
  path: "/live-charts",
  shareTitle: "Burna Boy — Live Charts",
  shareDescription: `${livePlacementCount} live chart placements across ${liveCountryCount} countries, refreshed hourly.`,
});

// ISO alpha-2 → regional-indicator flag emoji.
//
// Two traps here. kworb writes chart-slug codes, not strict ISO: the UK is
// "uk", but the ISO code is GB, and 🇺🇰 is not a real flag sequence — it renders
// as two letter boxes. And WW (Shazam's worldwide chart) is not a country at
// all. Both are mapped rather than passed through.
const FLAG_ALIASES: Record<string, string> = { UK: "GB", EL: "GR", WW: "" };

function flagFor(code: string) {
  const mapped = FLAG_ALIASES[code] ?? code;
  if (!mapped) return "🌍"; // worldwide / non-country chart
  if (!/^[A-Z]{2}$/.test(mapped)) return "🏳️";
  return String.fromCodePoint(...[...mapped].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

const reach = reachOf;

const songs = liveCharts.filter((r) => r.kind === "song");
const albums = liveCharts.filter((r) => r.kind === "album");

const updatedLabel = new Date(`${liveChartsUpdated}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Movement marker. A re-entry is not a new entry — the record charted there
// before, dropped off and came back — so it gets its own label rather than
// being flattened into NEW. No marker at all means the platform doesn't
// publish movement for that chart; show nothing rather than guess.
function Move({ e }: { e: LiveEntry }) {
  if (e.status === "re") return <span className={styles.moveRe}>RE-ENTRY</span>;
  if (e.status === "new") return <span className={styles.moveNew}>NEW</span>;
  if (e.movement === undefined || e.movement === null) return null;
  if (e.movement === 0) return <span className={styles.moveFlat}>–</span>;
  return (
    <span className={e.movement > 0 ? styles.moveUp : styles.moveDown}>
      {e.movement > 0 ? "▲" : "▼"}
      {Math.abs(e.movement)}
    </span>
  );
}

// Cover art, sized in `em` so it tracks the title text rather than fighting it —
// the row height is set by the title's line box either way, so adding this
// changes nothing about the layout.
//
// Only some charting releases have art on file. The rest get a monogram tile in
// the identical footprint, so a missing cover never shifts a row or leaves a
// broken-image icon.
function Cover({ title }: { title: string }) {
  const src = coverFor(title);
  if (!src) {
    // The letter is drawn via CSS content, not written as a text node. As real
    // text it concatenated into the title for anything reading the DOM — a
    // crawler saw "GGinger" — and aria-hidden does not remove text from that.
    return (
      <span
        className={styles.coverFallback}
        data-letter={monogramFor(title)}
        aria-hidden="true"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art, sized via srcSet like the rest of the site
    <img
      className={styles.cover}
      src={spotifyImage(src, 64)}
      // A 24px tile never needs the 640px variant, and the full srcSet let the
      // browser reach for it anyway. Offer only 1x and a retina 2x.
      srcSet={`${spotifyImage(src, 64)} 1x, ${spotifyImage(src, 300)} 2x`}
      alt=""
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
    />
  );
}

function ReleaseBlock({ r }: { r: (typeof liveCharts)[number] }) {
  const total = reach(r);
  const no1 = r.platforms.reduce((n, p) => n + p.numberOnes, 0);
  return (
    <details className={styles.release}>
      <summary className={styles.summary}>
        <span className={styles.caret} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <span className={styles.title}>
          <Cover title={r.title} />
          {r.title}
        </span>
        <span className={styles.chips}>
          {r.platforms.map((p) => (
            <span key={p.platform} className={styles.chip}>
              <span className={styles.chipPlatform}>{p.platform}</span>
              <span className={styles.chipCount}>
                {p.entries.length} {p.entries.length === 1 ? "country" : "countries"}
              </span>
              {p.numberOnes > 0 && (
                <span className={styles.chipNo1}>{p.numberOnes} at No.&nbsp;1</span>
              )}
            </span>
          ))}
        </span>
        <span className={styles.total}>
          {total} {total === 1 ? "chart" : "charts"}
          {no1 > 0 && <span className={styles.totalNo1}> · {no1} at No. 1</span>}
        </span>
      </summary>

      {r.platforms.map((p) => (
        <div key={p.platform} className={styles.platformBlock}>
          <h3 className={styles.platformName}>
            {p.platform}
            <span className={styles.platformCount}>
              {p.entries.length} {p.entries.length === 1 ? "country" : "countries"}
              <span className={styles.platformCadence}> · {cadenceOf(p.platform)}</span>
            </span>
          </h3>
          <ul className={styles.entries}>
            {p.entries.map((e) => (
              <li key={e.country} className={e.position === 1 ? styles.entryTop : styles.entry}>
                <span className={styles.pos}>#{e.position}</span>
                <span className={styles.flag} aria-hidden="true">{flagFor(e.country)}</span>
                <span className={styles.country}>{e.name}</span>
                <Move e={e} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </details>
  );
}

export default function LiveChartsPage() {
  const jsonLd = datasetJsonLd();

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mobile is its own screen in this design — a two-up summary, a
          scrolling platform rail and one condensed row per release. */}
      <MobileLiveCharts
        releases={liveCharts}
        platforms={livePlatformTotals}
        placements={livePlacementCount}
        countries={liveCountryCount}
        numberOnes={liveNumberOnes}
        updated={updatedLabel}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/live-charts" />

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.wide}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Tracked as it happens
            </div>
            <h1 className={styles.h1}>
              Live <span className="inkText">Charts</span>
            </h1>
            <p className={styles.lede}>
              Where every Burna Boy record is charting right now — {livePlacementCount}{" "}
              placements across {liveCountryCount} countries, refreshed every hour.
            </p>
            <p className={styles.updated}>
              <span className={styles.liveDot} aria-hidden="true" />
              Snapshot taken <strong>{updatedLabel}</strong>
            </p>

            {/* The distinction this whole page rests on. Stated up front rather
                than buried, because conflating the two misrepresents both. */}
            <div className={styles.notice}>
              <strong>These are platform charts, not official charts.</strong>{" "}
              This page tracks the country charts of Spotify, Apple Music, iTunes, Deezer and Shazam,
              which refresh daily, plus YouTube&apos;s, which refreshes weekly — where a
              record sits <em>right now</em>. Official national charts, and the career peaks
              they produce, are counted separately on{" "}
              <Link href="/records/charts">Chart Records</Link>. A No. 1 here is not the same
              thing as a No. 1 there.
            </div>
          </div>
        </section>

        {/* ── Summary strip ──────────────────────────────────────── */}
        <section className={styles.summaryBand}>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{livePlacementCount}</div>
              <div className={styles.summaryLabel}>Live placements</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{liveCountryCount}</div>
              <div className={styles.summaryLabel}>Countries</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={`${styles.summaryValue} ${styles.liveInk}`}>{liveNumberOnes}</div>
              <div className={styles.summaryLabel}>Currently at No. 1</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{liveCharts.length}</div>
              <div className={styles.summaryLabel}>Releases charting</div>
            </div>
          </div>
        </section>

        {/* ── By platform ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wide}>
            <h2 className={styles.h2}>By platform</h2>
            <div className={styles.platformGrid}>
              {livePlatformTotals.map((p) => (
                <div key={p.platform} className={styles.platformCard}>
                  <div className={styles.platformCardV}>{p.placements}</div>
                  <div className={styles.platformCardName}>{p.platform}</div>
                  <div className={styles.platformCardNo1}>
                    {p.numberOnes > 0 ? `${p.numberOnes} at No. 1` : ""}
                  </div>
                  <div className={styles.platformCardCadence}>{cadenceOf(p.platform)} chart</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Releases ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wide}>
            <div className={styles.h2Row}>
              <h2 className={styles.h2}>Songs</h2>
              <span className={styles.count}>({songs.length})</span>
            </div>
            <p className={styles.hint}>
              <strong>Click any title</strong> to open it — every country it&apos;s charting
              in, its position, and how far it moved since the last edition.
            </p>
            <div className={styles.releaseList}>
              {songs.map((r) => (
                <ReleaseBlock key={r.title} r={r} />
              ))}
            </div>
          </div>
        </section>

        {albums.length > 0 && (
          <section className={styles.section}>
            <div className={styles.wide}>
              <div className={styles.h2Row}>
                <h2 className={styles.h2}>Albums &amp; EPs</h2>
                <span className={styles.count}>({albums.length})</span>
              </div>
              <div className={styles.releaseList}>
                {albums.map((r) => (
                  <ReleaseBlock key={r.title} r={r} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Source note ────────────────────────────────────────── */}
        <section className={styles.sourceBand}>
          <div className={styles.wide}>
            <p className={styles.source}>
              Positions come from each platform&apos;s own country charts, via kworb, rebuilt
              hourly. Movement is against that chart&apos;s previous edition — “NEW” means
              the record entered it this time round, “RE-ENTRY” that it charted before,
              dropped off and came back, and no marker means the platform doesn&apos;t publish
              movement for that chart. Spotify, Apple Music, iTunes, Deezer and Shazam are
              daily, so a placement can appear and vanish within a day; YouTube&apos;s is a
              weekly chart, counting a song&apos;s streams across YouTube rather than views of
              one video. The official peaks on{" "}
              <Link href="/records/charts">Chart Records</Link> are permanent by contrast. How
              every figure on this site is sourced is set out in the{" "}
              <Link href="/methodology">methodology</Link>.
            </p>
            <Link href="/records/charts" className={`btn btnSecondary ${styles.back}`}>
              ← Official chart records
            </Link>
          </div>
        </section>

        <KeepExploring current="/live-charts" />
      </div>
    </main>
  );
}

function datasetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Burna Boy live platform chart placements",
    description: `Current positions for every charting Burna Boy release across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts — ${livePlacementCount} placements in ${liveCountryCount} countries.`,
    url: `${CANONICAL_ORIGIN}/live-charts`,
    dateModified: liveChartsUpdated,
    isAccessibleForFree: true,
    creator: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    variableMeasured: ["Chart position", "Platform", "Country", "24-hour movement"],
    keywords: ["Burna Boy", "live charts", "Spotify", "Apple Music", "iTunes", "Shazam", "Deezer"],
  };
}
