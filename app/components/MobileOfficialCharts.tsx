"use client"; // the peak and country filters are live

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileOfficialCharts.module.css";
import ScrollRail from "./ScrollRail";
import FilterEmpty from "./FilterEmpty";
import { coverFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import type { ChartCountry } from "../data/charts";
import type { ExplorerRelease, CoverMap } from "./ChartExplorer";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * The mobile official-charts screen.
 *
 * A dedicated screen rather than the shared deep-page grammar: a flat
 * "most-charted releases" list throws away everything this page is for — the
 * peak pills, the country filter, the album/single/feature grouping. Built
 * from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen 10.
 *
 * Two things the desktop page does differently, both deliberate:
 *
 * - Filtering DIMS non-matching pills instead of hiding them, so narrowing to
 *   Nigeria still shows Last Last's full 15-chart record with the Nigerian
 *   No. 1 lit. A filter narrows attention without destroying context.
 * - Peak and country get separate labelled rails. Desktop puts all 60
 *   countries in one wrapping chip field, which is unusable on a phone, so
 *   this shows the most-charted ones.
 *
 * Every figure derives from app/data/charts.ts.
 */

const PEAKS: { key: number | null; label: string }[] = [
  { key: null, label: "All" },
  { key: 1, label: "No. 1" },
  { key: 10, label: "Top 10" },
  { key: 40, label: "Top 40" },
];

/**
 * The country rail, in the design's order.
 *
 * This is a curated set, not a computed one: it leads with Nigeria — his home
 * market — then the UK and US, whereas ordering strictly by entry count puts
 * Nigeria eleventh and Ireland above the US. Desktop can afford all 60 in one
 * wrapping field; a phone cannot, so these are the seventeen worth the space.
 * Filtered against the data at render, so a chip can never point at nothing.
 */
const COUNTRY_RAIL = [
  "NG", "UK", "US", "FR", "NL", "CA", "IE", "BE", "DE",
  "SE", "CH", "ZA", "IT", "ES", "AU", "AT", "GLB",
];
/** Pills shown per release before the overflow marker. */
const PILLS_SHOWN = 12;

// Peak bands. These carry meaning and are never recoloured: No. 1 gold,
// Top 10 cyan, Top 40 silver, beyond muted.
type Band = "one" | "top10" | "top40" | "rest";
const bandOf = (p: number): Band => (p === 1 ? "one" : p <= 10 ? "top10" : p <= 40 ? "top40" : "rest");
const BAND: Record<Band, { color: string; border: string; bg: string }> = {
  one: { color: "var(--gold)", border: "var(--gold)", bg: "rgba(255, 182, 39, 0.13)" },
  top10: { color: "var(--cyan)", border: "rgba(143, 227, 240, 0.5)", bg: "transparent" },
  top40: { color: "var(--silver)", border: "rgba(223, 226, 232, 0.4)", bg: "transparent" },
  rest: { color: "var(--text-muted)", border: "rgba(155, 155, 163, 0.35)", bg: "transparent" },
};

export default function MobileOfficialCharts({
  albums,
  singles,
  features,
  countries,
  entryCount,
  territoryCount,
  numberOnes,
  releaseCount,
  sourceSplit,
  covers,
  sourceNote,
  backHref = "/records",
  backLabel = "Official charts",
  heading,
  lede,
  countryRail,
  showActionBar = true,
  territoryNote = "+ 2 global",
}: {
  albums: ExplorerRelease[];
  singles: ExplorerRelease[];
  features: ExplorerRelease[];
  countries: Record<string, ChartCountry>;
  entryCount: number;
  territoryCount: number;
  numberOnes: number;
  releaseCount: number;
  sourceSplit?: { nationalBody: number; billboardCountry: number; global: number };
  /** Artwork by release title — Burna's catalogue lookup by default. */
  covers?: CoverMap;
  /** Replaces the source footnote where the split is not ours to publish. */
  sourceNote?: string;
  backHref?: string;
  backLabel?: string;
  /** The screen's own H1, in two parts. Defaults to "Official charts". */
  heading?: { lead: string; gold: string };
  lede?: string;
  /** Filter rail codes. Defaults to Burna's most-charted territories. */
  countryRail?: string[];
  /** The board's screens end in the five-tab bar instead of an action bar —
   *  Paul's rule for pages reached laterally, same call as the story pages. */
  showActionBar?: boolean;
  /** Footnote under the territory count — Burna's two global charts by default. */
  territoryNote?: string;
}) {
  const cover = (title: string) => (covers ? covers[title] : coverFor(title));
  const [peakMax, setPeakMax] = useState<number | null>(null);
  const [only, setOnly] = useState<string | null>(null);
  // Releases whose full chart list is unfolded. Dai Dai runs to 59 entries,
  // so each row starts at PILLS_SHOWN and the "+47" opens the rest in place.
  const [unfolded, setUnfolded] = useState<Set<string>>(new Set());
  const toggleRow = (title: string) =>
    setUnfolded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  const all = [...albums, ...singles, ...features];

  const charted = new Set(all.flatMap((r) => r.entries.map((e) => e.c)));
  const countryChips = (countryRail ?? COUNTRY_RAIL).filter((c) => charted.has(c));

  const sections = [
    { name: "Albums", list: albums },
    { name: "Singles", list: singles },
    { name: "Features", list: features },
  ]
    .map((g) => {
      const rows = g.list
        .filter((r) =>
          r.entries.some((e) => (!peakMax || e.peak <= peakMax) && (!only || e.c === only))
        )
        .map((r) => {
          const best = Math.min(...r.entries.map((e) => e.peak));
          // Matching peaks lead; the rest stay visible but dimmed.
          const peaks = [...r.entries]
            .sort((a, b) => a.peak - b.peak)
            .map((e) => ({
              code: e.c,
              flag: countries[e.c]?.flag ?? "🏳",
              name: countries[e.c]?.name ?? e.c,
              peak: e.peak,
              off: Boolean((peakMax && e.peak > peakMax) || (only && e.c !== only)),
            }));
          return {
            title: r.title,
            credit: [r.credit, r.year].filter(Boolean).join(" · "),
            count: `${r.entries.length} ${r.entries.length === 1 ? "chart" : "charts"}`,
            best,
            // The full list; the renderer folds it at PILLS_SHOWN.
            peaks,
            hidden: Math.max(0, r.entries.length - PILLS_SHOWN),
          };
        });
      return { name: g.name, rows };
    })
    .filter((g) => g.rows.length > 0);

  const shown = sections.reduce((n, g) => n + g.rows.length, 0);

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href={backHref} aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>{backLabel}</span>
        <span className={styles.badge}>{entryCount}</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Peak positions worldwide</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          {heading ? heading.lead : "Official"}{" "}
          <span className={styles.gold}>{heading ? heading.gold : "charts"}</span>
        </h1>
        <p className={styles.lede}>
          {lede ??
            `${entryCount} entries across ${territoryCount} territories, ${numberOnes} of them at No. 1 — from Nigeria and the UK to South Africa, the Netherlands and Colombia.`}
        </p>
      </div>

      {/* Stat strip */}
      <div className={styles.statGrid}>
        {[
          { v: entryCount, l: "Chart entries", n: "official charts only" },
          { v: numberOnes, l: "No. 1 peaks", n: "placements" },
          { v: territoryCount, l: "Territories", n: territoryNote },
          { v: releaseCount, l: "Releases", n: "charting" },
        ].map((s) => (
          <div key={s.l} className={styles.statCell}>
            <div className={styles.statValue}>{s.v}</div>
            <div className={styles.statLabel}>{s.l}</div>
            <div className={styles.statNote}>{s.n}</div>
          </div>
        ))}
      </div>

      {/* Filters — two labelled rails */}
      <div className={styles.filters}>
        <div className={styles.filterLabel}>Peak</div>
        <ScrollRail className={styles.rail} label="Filter by peak position">
          {PEAKS.map((p) => (
            <button
              key={p.label}
              type="button"
              aria-pressed={peakMax === p.key}
              className={`${styles.chip} ${peakMax === p.key ? styles.chipOn : ""}`}
              onClick={() => setPeakMax(peakMax === p.key ? null : p.key)}
            >
              {p.label}
            </button>
          ))}
        </ScrollRail>

        <div className={styles.filterLabel}>Country</div>
        <ScrollRail className={styles.railTight} label="Filter by country">
          <button
            type="button"
            aria-pressed={only === null}
            className={`${styles.chip} ${only === null ? styles.chipOn : ""}`}
            onClick={() => setOnly(null)}
          >
            All
          </button>
          {countryChips.map((code) => (
            <button
              key={code}
              type="button"
              aria-pressed={only === code}
              title={countries[code]?.name ?? code}
              className={`${styles.chip} ${only === code ? styles.chipOn : ""}`}
              onClick={() => setOnly(only === code ? null : code)}
            >
              <span className={styles.chipFlag} aria-hidden="true">{countries[code]?.flag ?? "🏳"}</span>
              {code}
            </button>
          ))}
        </ScrollRail>
      </div>

      {/* Count + peak-band legend */}
      <div className={styles.legendBar}>
        <span>
          {shown} {shown === 1 ? "release" : "releases"}
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotOne}`} aria-hidden="true" />
          No. 1
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotTen}`} aria-hidden="true" />
          Top 10
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.dotForty}`} aria-hidden="true" />
          Top 40
        </span>
      </div>

      {/* Groups */}
      {shown === 0 && (
        // The country is the narrower of the two rails, so it is what the
        // second button drops.
        <FilterEmpty
          body={`There's no ${[
            peakMax && PEAKS.find((p) => p.key === peakMax)!.label,
            "chart entry",
            only && `in ${countries[only]?.name ?? only}`,
          ]
            .filter(Boolean)
            .join(" ")}. That's a real gap in the record, not a missing page.`}
          onClear={() => {
            setPeakMax(null);
            setOnly(null);
          }}
          narrowest={
            only
              ? { label: countries[only]?.name ?? only, drop: () => setOnly(null) }
              : peakMax
                ? { label: PEAKS.find((p) => p.key === peakMax)!.label, drop: () => setPeakMax(null) }
                : undefined
          }
        />
      )}
      {sections.map((g) => (
        <div key={g.name}>
          <div className={styles.groupHead}>
            <h2 className={styles.groupName}>{g.name}</h2>
            <span className={styles.groupCount}>({g.rows.length})</span>
          </div>
          {g.rows.map((r) => (
            <div key={r.title} className={styles.row}>
              {/* Tapping the release opens its full chart list. The "+47" is
                  the affordance, but the title is what a thumb goes for, so
                  the whole header is the control — a button when there is
                  something to unfold, plain markup when there isn't. */}
              {r.hidden > 0 ? (
                <button
                  type="button"
                  className={`${styles.rowTop} ${styles.rowToggle}`}
                  aria-expanded={unfolded.has(r.title)}
                  onClick={() => toggleRow(r.title)}
                >
                  <span
                    className={styles.rowCover}
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${spotifyImage(cover(r.title) ?? "", 300)})` }}
                  />
                  <span className={styles.rowMain}>
                    <span className={styles.rowTitle}>{r.title}</span>
                    <span className={styles.rowCredit}>{r.credit}</span>
                  </span>
                  <span className={styles.rowRight}>
                    <span className={styles.rowBest} style={{ color: BAND[bandOf(r.best)].color }}>
                      #{r.best}
                    </span>
                    <span className={styles.rowCount}>{r.count}</span>
                  </span>
                </button>
              ) : (
                <div className={styles.rowTop}>
                  <div
                    className={styles.rowCover}
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${spotifyImage(cover(r.title) ?? "", 300)})` }}
                  />
                  <div className={styles.rowMain}>
                    <div className={styles.rowTitle}>{r.title}</div>
                    <div className={styles.rowCredit}>{r.credit}</div>
                  </div>
                  <div className={styles.rowRight}>
                    {/* Best peak leads, right-aligned, so the column can be
                        scanned without reading pills. */}
                    <div className={styles.rowBest} style={{ color: BAND[bandOf(r.best)].color }}>
                      #{r.best}
                    </div>
                    <div className={styles.rowCount}>{r.count}</div>
                  </div>
                </div>
              )}
              <div className={styles.pills}>
                {(unfolded.has(r.title) ? r.peaks : r.peaks.slice(0, PILLS_SHOWN)).map((p) => {
                  const b = BAND[bandOf(p.peak)];
                  return (
                    <span
                      key={`${p.code}-${p.peak}`}
                      title={`${p.name} — peak #${p.peak}`}
                      className={styles.pill}
                      style={{
                        color: b.color,
                        borderColor: b.border,
                        background: b.bg,
                        opacity: p.off ? 0.24 : 1,
                      }}
                    >
                      <span className={styles.pillFlag} aria-hidden="true">{p.flag}</span>#{p.peak}
                    </span>
                  );
                })}
                {r.hidden > 0 && (
                  <button
                    type="button"
                    className={styles.more}
                    aria-expanded={unfolded.has(r.title)}
                    onClick={() => toggleRow(r.title)}
                  >
                    {unfolded.has(r.title) ? "− less" : `+${r.hidden}`}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      <p className={styles.footNote}>
        {sourceNote ??
          (sourceSplit
            ? `Peaks on each country's principal national chart — ${sourceSplit.nationalBody} national bodies, ${sourceSplit.billboardCountry} Billboard country charts and ${sourceSplit.global} worldwide. Airplay and genre charts excluded.`
            : "Peaks on each country's principal national chart. Airplay and genre charts excluded.")}
      </p>

      <div className={styles.spacer} />

      {showActionBar && (
        <div className={styles.actionBar}>
          <Link href="/share" className={styles.actionPrimary}>
            Make a stat card
          </Link>
        </div>
      )}
    </div>
  );
}
