import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../live-charts/liveCharts.module.css";
import bar from "../artist.module.css";
import KeepExploring from "../../../components/KeepExploring";
import MobileLiveCharts, { type ReleasePreview } from "../../../components/MobileLiveCharts";
import LiveReleaseBlock, { type ReleaseSummary } from "../../../components/LiveReleaseBlock";
import { cadenceOf, reachOf, numberOnesOf } from "../../../lib/liveChartMeta";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../../../lib/seo";
import { artistBySlug } from "../../../data/afrobeats";
import { LIVE_BOARDS, liveBoardFor, type LiveBoard } from "../../../data/liveBoards";

export const dynamicParams = false;
export function generateStaticParams() {
  return LIVE_BOARDS.map((b) => ({ artist: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const board = liveBoardFor(slug);
  const a = artistBySlug(slug);
  if (!board || !a) return {};
  return pageMetadata({
    title: `${a.name} Live Charts — Charting Right Now, Worldwide`,
    description: `Every ${a.name} release charting right now: ${board.placements} live placements across ${board.countries} countries on Spotify, Apple Music, YouTube, Deezer, iTunes and Shazam.`,
    path: `/afrobeats/${slug}/live`,
    shareTitle: `${a.name} — Live Charts`,
    shareDescription: `${board.placements} live placements across ${board.countries} countries, refreshed hourly.`,
  });
}

const preview = (r: LiveBoard["releases"][number]): ReleasePreview => ({
  kind: r.kind,
  title: r.title,
  cover: r.cover,
  total: reachOf(r),
  no1: numberOnesOf(r),
  top: r.platforms
    .flatMap((p) => p.entries)
    .sort((a, b) => a.position - b.position)
    .slice(0, 5)
    .map((e) => ({ country: e.country, position: e.position, movement: e.movement, status: e.status })),
});

const summarize = (r: LiveBoard["releases"][number]): ReleaseSummary => ({
  title: r.title,
  kind: r.kind,
  cover: r.cover,
  // The board feed only knows song vs album, and we hold no EP list for these
  // artists — so nothing is labelled an EP rather than labelling one wrongly.
  ep: false,
  total: reachOf(r),
  no1: numberOnesOf(r),
  platforms: r.platforms.map((p) => ({
    platform: p.platform,
    count: p.entries.length,
    numberOnes: p.numberOnes,
  })),
});

export default async function AfroLiveChartsPage({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const { artist: slug } = await params;
  const board = liveBoardFor(slug);
  const a = artistBySlug(slug);
  if (!board || !a) notFound();

  // The three artists whose register sweeps are still scheduled have no chart
  // board to link to; /afrobeats/<slug>/charts 404s for them.
  const hasChartBoard = a.charts.length > 0;
  const songs = board.releases.filter((r) => r.kind === "song");
  const albums = board.releases.filter((r) => r.kind === "album");
  const updatedLabel = new Date(`${board.updated}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${a.name} live platform chart placements`,
    description: `Current positions for every charting ${a.name} release across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts — ${board.placements} placements in ${board.countries} countries.`,
    url: `${CANONICAL_ORIGIN}/afrobeats/${slug}/live`,
    dateModified: asDateTime(board.updated),
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: {
      "@type": "MusicGroup",
      name: a.name,
      sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`],
    },
    variableMeasured: ["Chart position", "Platform", "Country", "24-hour movement"],
    keywords: [a.name, "live charts", "Spotify", "Apple Music", "iTunes", "Shazam", "Deezer"],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* The same dedicated mobile screen Burna Boy's live charts use — the
          platform rail and the condensed rows are the whole design. */}
      <MobileLiveCharts
        releases={board.releases.map(preview)}
        platforms={board.platformTotals}
        placements={board.placements}
        countries={board.countries}
        numberOnes={board.numberOnes}
        updated={updatedLabel}
        backHref={`/afrobeats/${slug}`}
        backLabel={`${a.name} · live charts`}
        heading={{ lead: `${a.name} Live`, gold: "Charts" }}
        source={board.api}
      />

      <div className={styles.desktopOnly}>
        <nav className={bar.crumbs} aria-label="Breadcrumb">
          <Link href="/afrobeats">The Afrobeats Board</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/afrobeats/${slug}`}>{a.name}</Link>
          <span aria-hidden="true">/</span>
          <span className={bar.crumbCurrent}>Live charts</span>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.wide}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Tracked as it happens
            </div>
            <h1 className={styles.h1}>
              {a.name} Live <span className="inkText">Charts</span>
            </h1>
            <p className={styles.lede}>
              {`Where every ${a.name} record is charting right now — ${board.placements} placements across ${board.countries} countries, refreshed every hour.`}
            </p>
            <p className={styles.updated}>
              <span className={styles.liveDot} aria-hidden="true" />
              Snapshot taken <strong>{updatedLabel}</strong>
            </p>

            <div className={styles.notice}>
              <strong>These are platform charts, not official charts.</strong>{" "}
              This page tracks the country charts of Spotify, Apple Music, iTunes, Deezer and
              Shazam, which refresh daily, plus YouTube&apos;s, which refreshes weekly — where a
              record sits <em>right now</em>.{" "}
              {hasChartBoard ? (
                <>
                  {a.name}&apos;s official national peaks, and the career records they produce, are
                  counted separately on the{" "}
                  <Link href={`/afrobeats/${slug}/charts`}>chart board</Link>. A No. 1 here is not
                  the same thing as a No. 1 there.
                </>
              ) : (
                <>
                  A No. 1 here is not the same thing as a No. 1 on an official national chart —{" "}
                  {a.name}&apos;s official peaks are not published here until the registers behind
                  them have been read at source.
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Summary strip ──────────────────────────────────────── */}
        <section className={styles.summaryBand}>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{board.placements}</div>
              <div className={styles.summaryLabel}>Live placements</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{board.countries}</div>
              <div className={styles.summaryLabel}>Countries</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={`${styles.summaryValue} ${styles.liveInk}`}>{board.numberOnes}</div>
              <div className={styles.summaryLabel}>Currently at No. 1</div>
            </div>
            <div className={styles.summaryCell}>
              <div className={styles.summaryValue}>{board.releases.length}</div>
              <div className={styles.summaryLabel}>Releases charting</div>
            </div>
          </div>
        </section>

        {/* ── By platform ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.wide}>
            <h2 className={styles.h2}>By platform</h2>
            <div className={styles.platformGrid}>
              {board.platformTotals.map((p) => (
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
              <strong>Click any title</strong> to open it — every country it&apos;s charting in,
              its position, and how far it moved since the last edition.
            </p>
            <div className={styles.releaseList}>
              {songs.map((r) => (
                <LiveReleaseBlock key={r.title} r={summarize(r)} source={board.api} />
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
                  <LiveReleaseBlock key={r.title} r={summarize(r)} source={board.api} />
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
              hourly by the same job that builds Burna Boy&apos;s. Movement is against that
              chart&apos;s previous edition — “NEW” means the record entered it this time round,
              “RE-ENTRY” that it charted before, dropped off and came back, and no marker means
              the platform doesn&apos;t publish movement for that chart. Spotify, Apple Music,
              iTunes, Deezer and Shazam are daily, so a placement can appear and vanish within a
              day; YouTube&apos;s is a weekly chart.{" "}
              {hasChartBoard ? (
                <>
                  The official peaks on the{" "}
                  <Link href={`/afrobeats/${slug}/charts`}>chart board</Link> are permanent by
                  contrast, and the certifications on the{" "}
                  <Link href={`/afrobeats/${slug}`}>artist page</Link> are read from the issuing
                  bodies&apos; own registers.
                </>
              ) : (
                <>
                  Official chart peaks and certifications are a different kind of record — permanent,
                  and read from the issuing bodies&apos; own registers — and are not published on{" "}
                  <Link href={`/afrobeats/${slug}`}>this artist&apos;s page</Link> until that sweep has
                  run.
                </>
              )}{" "}
              How every figure here is sourced is set out in the{" "}
              <Link href="/methodology">methodology</Link>.
            </p>
            <div className={styles.actions}>
              <Link href={`/afrobeats/${slug}`} className={`btn btnSecondary ${styles.back}`}>
                ← {a.name}
              </Link>
              <Link href="/live-charts" className="btn btnSecondary">
                Burna Boy&apos;s live charts ↗
              </Link>
            </div>
          </div>
        </section>

        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
