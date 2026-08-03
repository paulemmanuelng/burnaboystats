"use client"; // each release opens to reveal its full placement list

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileLiveCharts.module.css";
import { spotifyImage } from "../lib/spotifyImage";
import { coverFor } from "../lib/covers";
import { cadenceOf, reachOf, numberOnesOf } from "../lib/liveChartMeta";
import ScrollRail from "./ScrollRail";
import type { LiveRelease } from "../data/liveCharts";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * The mobile live-charts screen.
 *
 * A distinct screen, not the desktop accordion narrowed — a two-up summary, a
 * scrolling platform rail, then one row per release. Built from
 * designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 05.
 *
 * The design draws the row as a *preview*: cover, title, total, a few chips.
 * Taken literally that strands 83% of the data on a phone — 658 of 790
 * placements, with "Dai Dai" showing 5 of its 478. So the row opens, and the
 * panel carries what the desktop <details> carries: every platform, its
 * cadence, and every country with position and movement. Shut, it is the
 * design's row; open, nothing is missing.
 *
 * Every figure derives from app/data/liveCharts.ts.
 */

/** Chips shown while a row is shut — the best positions, not the list. */
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
    : { label: `▼${Math.abs(e.movement)}`, ink: "var(--red-ink)" };
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
  const [open, setOpen] = useState<string | null>(null);

  const rows = releases.map((r) => ({
    kind: r.kind,
    title: r.title,
    // `numberOnes` counts how many of a platform's own entries sit at No. 1 —
    // a subset of `entries`, never a separate pool. Adding them double-counts.
    total: reachOf(r),
    no1: numberOnesOf(r),
    top: r.platforms
      .flatMap((p) => p.entries)
      .sort((a, b) => a.position - b.position)
      .slice(0, TOP_CHIPS),
    platforms: r.platforms,
  }));

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Live Charts</span>
        <span className={styles.livePill}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Tracked as it happens</div>
        <h1 className={styles.h1}>
          Live <span className={styles.gold}>Charts</span>
        </h1>
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
              {p.numberOnes > 0 ? `${p.numberOnes} at No. 1` : "none at No. 1"}
            </div>
            {/* A No. 1 held for a week and one held for a day aren't the same
                claim, so the cadence travels with the number. */}
            <div className={styles.platformCadence}>{cadenceOf(p.platform)}</div>
          </div>
        ))}
      </ScrollRail>

      {/* Charting now — every release, each opening to its full list */}
      <div className={styles.sectionLabel}>Charting now</div>
      <div className={styles.list}>
        {rows.map((r) => {
          const isOpen = open === r.title;
          const panelId = `live-${r.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
          return (
            <div key={r.title} className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}>
              <button
                type="button"
                className={styles.rowBtn}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : r.title)}
              >
                <span className={styles.rowTop}>
                  <span
                    className={styles.rowCover}
                    style={{ backgroundImage: `url(${spotifyImage(coverFor(r.title) ?? "", 300)})` }}
                  />
                  <span className={styles.rowMain}>
                    <span className={styles.rowTitle}>
                      {r.title}
                      {/* Albums sit in the same list as songs — the desktop
                          page separates them into sections, and this tag is
                          that distinction at phone size. */}
                      {r.kind === "album" && <span className={styles.kindTag}>Album</span>}
                    </span>
                    <span className={styles.rowMeta}>
                      {r.total} {r.total === 1 ? "chart" : "charts"}
                      {r.no1 > 0 && <span className={styles.rowNo1}> · {r.no1} at No. 1</span>}
                    </span>
                  </span>
                  <span
                    className={`${styles.caret} ${isOpen ? "" : styles.caretShut}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </span>

                {/* The design's preview chips — shut state only. */}
                {!isOpen && (
                  <span className={styles.chips}>
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
                    {r.total > r.top.length && (
                      <span className={styles.more}>+{r.total - r.top.length} more</span>
                    )}
                  </span>
                )}
              </button>

              {isOpen && (
                <div id={panelId} className={styles.panel}>
                  {r.platforms.map((p) => (
                    <div key={p.platform} className={styles.platformBlock}>
                      <div className={styles.platformHead}>
                        <span className={styles.platformBlockName}>{p.platform}</span>
                        <span className={styles.platformBlockMeta}>
                          {p.entries.length} {p.entries.length === 1 ? "country" : "countries"} ·{" "}
                          {cadenceOf(p.platform)}
                        </span>
                      </div>
                      <ul className={styles.entries}>
                        {p.entries.map((e) => {
                          const m = movement(e);
                          return (
                            <li
                              key={e.country}
                              className={e.position === 1 ? styles.entryTop : styles.entry}
                            >
                              <span className={styles.entryPos}>#{e.position}</span>
                              <span className={styles.entryFlag} aria-hidden="true">
                                {flagFor(e.country)}
                              </span>
                              <span className={styles.entryCountry}>{e.name}</span>
                              <span className={styles.entryMove} style={{ color: m.ink }}>
                                {m.label}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Link href="/records/charts" className={styles.allBtn}>
        Official chart records<span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
