import Link from "next/link";
import styles from "./liveCharts.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileLiveCharts, { type ReleasePreview } from "../components/MobileLiveCharts";
import { cadenceOf, reachOf, numberOnesOf, countriesOf } from "../lib/liveChartMeta";
import LiveReleaseBlock, { type ReleaseSummary } from "../components/LiveReleaseBlock";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { coverFor, monogramFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import {
  liveCharts,
  liveChartsUpdated,
  livePlacementCount,
  liveNumberOnes,
  livePlatformTotals,
  type LiveEntry,
} from "../data/liveCharts";
import { isEp } from "../data/albums";

// Counted here rather than read from the generated file, which counts raw
// kworb codes — "UK" and "GB" are one country and "WW" is none.
const liveCountryCount = countriesOf(liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries)));

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

// Only the summary of each release ships with the page; the country panels
// fetch from /api/v1/live-charts on first open. This page used to serialise
// all ~790 rows twice over and was the heaviest thing the site sent.
// The mobile screen's shut rows, computed here so the client gets previews —
// title, totals and the five best chips — instead of the whole dataset.
const preview = (r: (typeof liveCharts)[number]): ReleasePreview => ({
  kind: r.kind,
  title: r.title,
  total: reachOf(r),
  no1: numberOnesOf(r),
  top: r.platforms
    .flatMap((p) => p.entries)
    .sort((a, b) => a.position - b.position)
    .slice(0, 5)
    .map((e) => ({ country: e.country, position: e.position, movement: e.movement, status: e.status })),
});

const summarize = (r: (typeof liveCharts)[number]): ReleaseSummary => ({
  title: r.title,
  kind: r.kind,
  ep: r.kind === "album" && isEp(r.title),
  total: reachOf(r),
  no1: numberOnesOf(r),
  platforms: r.platforms.map((p) => ({
    platform: p.platform,
    count: p.entries.length,
    numberOnes: p.numberOnes,
  })),
});

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
        releases={liveCharts.map(preview)}
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
                <LiveReleaseBlock key={`${r.kind}:${r.title}`} r={summarize(r)} />
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
                  <LiveReleaseBlock key={`${r.kind}:${r.title}`} r={summarize(r)} />
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
    dateModified: asDateTime(liveChartsUpdated),
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    variableMeasured: ["Chart position", "Platform", "Country", "24-hour movement"],
    keywords: ["Burna Boy", "live charts", "Spotify", "Apple Music", "iTunes", "Shazam", "Deezer"],
  };
}
