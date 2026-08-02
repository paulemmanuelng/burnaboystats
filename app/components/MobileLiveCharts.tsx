import Link from "next/link";
import styles from "./mobileLiveCharts.module.css";
import { spotifyImage } from "../lib/spotifyImage";
import { coverFor } from "../lib/covers";
import ScrollRail from "./ScrollRail";
import type { LiveRelease } from "../data/liveCharts";

/**
 * The mobile live-charts screen.
 *
 * A distinct screen, not the desktop accordion narrowed: a two-up summary, a
 * scrolling platform rail, then one condensed row per release showing its top
 * few placements as chips. Built from designs/mobile/Burna Boy Stats -
 * Mobile.dc.html, screen 05.
 *
 * Every figure derives from app/data/liveCharts.ts.
 */

const TOP_CHIPS = 5;

// The flag for an ISO alpha-2 code, from its regional indicator pair.
const flagFor = (code: string) =>
  code.length === 2
    ? String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)))
    : "";

function movement(e: { movement?: number | null; status?: "new" | "re" }) {
  if (e.status === "re") return { label: "RE-ENTRY", ink: "var(--gold-bright)" };
  if (e.status === "new") return { label: "NEW", ink: "var(--green)" };
  if (e.movement === undefined || e.movement === null) return { label: "", ink: "var(--text-muted)" };
  if (e.movement === 0) return { label: "–", ink: "var(--text-muted)" };
  return e.movement > 0
    ? { label: `▲${e.movement}`, ink: "var(--green)" }
    : { label: `▼${Math.abs(e.movement)}`, ink: "var(--red)" };
}

export default function MobileLiveCharts({
  releases,
  platforms,
  placements,
  countries,
  numberOnes,
  updated,
}: {
  releases: LiveRelease[];
  platforms: { platform: string; placements: number; numberOnes: number }[];
  placements: number;
  countries: number;
  numberOnes: number;
  updated: string;
}) {
  const rows = releases.map((r) => {
    // LivePlatform.numberOnes counts how many of that platform's own entries
    // are at No. 1 — it is a subset of `entries`, not a separate pool. Adding
    // the two together double-counts, which is what the desktop page's `reach`
    // helper already avoids.
    const total = r.platforms.reduce((n, p) => n + p.entries.length, 0);
    const no1 = r.platforms.reduce((n, p) => n + p.numberOnes, 0);
    // Best positions first — the chips are a summary, not the whole list.
    const top = r.platforms
      .flatMap((p) => p.entries)
      .sort((a, b) => a.position - b.position)
      .slice(0, TOP_CHIPS);
    return { title: r.title, total, no1, top };
  });

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Live Charts</span>
        <span className={styles.livePill}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Tracked as it happens</div>
        <p className={styles.h1}>
          Live <span className={styles.gold}>Charts</span>
        </p>
        <p className={styles.lede}>
          {placements} placements across {countries} countries, refreshed hourly. Snapshot{" "}
          {updated}.
        </p>
        <div className={styles.notice}>
          <strong>Platform charts, not official charts.</strong> Career peaks live on{" "}
          <Link href="/records/charts">Chart Records</Link>.
        </div>
      </div>

      {/* Summary — two up */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCell}>
          <div className={styles.summaryValue}>{placements}</div>
          <div className={styles.summaryLabel}>Live placements</div>
        </div>
        <div className={styles.summaryCell}>
          <div className={styles.summaryValue}>{countries}</div>
          <div className={styles.summaryLabel}>Countries</div>
        </div>
        <div className={styles.summaryCell}>
          <div className={`${styles.summaryValue} ${styles.liveInk}`}>{numberOnes}</div>
          <div className={styles.summaryLabel}>Currently at No. 1</div>
        </div>
        <div className={styles.summaryCell}>
          <div className={styles.summaryValue}>{releases.length}</div>
          <div className={styles.summaryLabel}>Releases charting</div>
        </div>
      </div>

      {/* Platform rail */}
      <div className={styles.sectionLabel}>By platform</div>
      <ScrollRail className={styles.rail} label="Placements by platform">
        {platforms.map((p) => (
          <div key={p.platform} className={styles.platformCard}>
            <div className={styles.platformValue}>{p.placements}</div>
            <div className={styles.platformName}>{p.platform}</div>
            <div className={styles.platformNo1}>
              {p.numberOnes > 0 ? `${p.numberOnes} at No. 1` : ""}
            </div>
          </div>
        ))}
      </ScrollRail>

      {/* Charting now */}
      <div className={styles.sectionLabel}>Charting now</div>
      <div className={styles.list}>
        {rows.map((r) => (
          <div key={r.title} className={styles.row}>
            <div className={styles.rowTop}>
              <span
                className={styles.rowCover}
                style={{ backgroundImage: `url(${spotifyImage(coverFor(r.title) ?? "", 300)})` }}
              />
              <span className={styles.rowMain}>
                <span className={styles.rowTitle}>{r.title}</span>
                <span className={styles.rowMeta}>
                  {r.total} charts
                  {r.no1 > 0 && <span className={styles.rowNo1}> · {r.no1} at No. 1</span>}
                </span>
              </span>
            </div>
            <div className={styles.chips}>
              {r.top.map((e) => {
                const m = movement(e);
                const top = e.position === 1;
                return (
                  <span
                    key={`${e.country}-${e.position}`}
                    className={`${styles.chip} ${top ? styles.chipTop : ""}`}
                  >
                    <span className={styles.chipFlag} aria-hidden="true">{flagFor(e.country)}</span>
                    <span className={top ? styles.posTop : styles.pos}>#{e.position}</span>
                    <span style={{ color: m.ink }}>{m.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Link href="/records/charts" className={styles.allBtn}>
        Official chart records<span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
