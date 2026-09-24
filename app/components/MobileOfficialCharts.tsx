"use client"; // the peak and country filters are live

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./mobileOfficialCharts.module.css";
import ScrollRail from "./ScrollRail";
import FilterEmpty from "./FilterEmpty";
import { coverFor } from "../lib/covers";
import { artAt } from "../lib/artAt";
import type { ChartCountry } from "../data/charts";
import type { ExplorerRelease, CoverMap } from "./ChartExplorer";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { dropDeepLink, onDeepLinkChange, readDeepLink, readSavedView, saveView } from "../lib/deepLink";

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
/** This screen's key in the history entry's saved filters (lib/deepLink.ts). */
const VIEW_ID = "charts-m";

// Peak bands. These carry meaning and are never recoloured: No. 1 gold,
// Top 10 cyan, Top 40 silver, beyond muted.
type Band = "one" | "top10" | "top40" | "rest";
const bandOf = (p: number): Band => (p === 1 ? "one" : p <= 10 ? "top10" : p <= 40 ? "top40" : "rest");
const BAND: Record<Band, { color: string; border: string; bg: string }> = {
  one: { color: "var(--gold)", border: "var(--gold)", bg: "color-mix(in srgb, var(--gold-wash-base) calc(13% * var(--wash-strength)), transparent)" },
  top10: { color: "var(--cyan)", border: "color-mix(in srgb, var(--cyan) 50%, transparent)", bg: "transparent" },
  top40: { color: "var(--silver)", border: "color-mix(in srgb, var(--silver) 40%, transparent)", bg: "transparent" },
  rest: { color: "var(--text-muted)", border: "color-mix(in srgb, var(--text-muted) 35%, transparent)", bg: "transparent" },
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
  sourceSplit?: {
    nationalBody: number;
    /** Airplay and broadcast-monitor charts. Printed separately because the
     *  footnote used to fold them into `nationalBody` and then say "airplay
     *  charts excluded" in the same breath — the desktop panel had the same
     *  fault. See chartSourceSplit in data/charts.ts. */
    airplayMonitor: number;
    billboardCountry: number;
    global: number;
  };
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
  // A single-release focus, deep-linked via #song=… (or an older ?song=…) —
  // the key the Dai Dai story's "every chart position" link carries.
  // ChartExplorer has read it since that link shipped, but this screen never
  // did, so tapping it on a phone landed on the whole unfiltered list with
  // nothing to say a filter was ever meant.
  const [focus, setFocus] = useState<string | null>(null);
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
  const chipKey = countryChips.join(",");

  // Read the deep link on mount — client-only, exactly as ChartExplorer does
  // it, so the page stays statically rendered — and again whenever the
  // fragment changes. The FRAGMENT first: #song= is the form every link on
  // the site carries now, and this screen read only ?song=, so the Dai Dai
  // story's link focused the desktop explorer and not the phone (24 Sep
  // 2026). The focused release is unfolded at the same time: the bar
  // promises "every chart entry", and Dai Dai's 59 would otherwise still be
  // folded away behind the "+47". #country= selects that chip when the rail
  // has one. The rails come back from this history entry on Back.
  useLayoutEffect(() => {
    const chips = chipKey.split(",");
    const saved = readSavedView<{ peakMax: number | null; only: string | null }>(VIEW_ID);
    const read = (initial: boolean) => {
      const s = readDeepLink("song", initial);
      setFocus(s);
      if (s) setUnfolded(new Set([s]));
      const c = readDeepLink("country", false);
      if (!initial || c) setOnly(c && chips.includes(c) ? c : null);
      if (initial && saved) {
        setPeakMax(PEAKS.some((p) => p.key === saved.peakMax) ? saved.peakMax : null);
        setOnly(saved.only && chips.includes(saved.only) ? saved.only : null);
      }
    };
    read(true);
    return onDeepLinkChange(() => read(false));
  }, [chipKey]);

  useEffect(() => {
    saveView(VIEW_ID, { peakMax, only });
  }, [peakMax, only]);

  // Clearing the focus or the country takes it out of the address bar too,
  // or a reload puts it back.
  const clearFocus = () => {
    setFocus(null);
    dropDeepLink("song");
  };
  const pickOnly = (c: string | null) => {
    setOnly(c);
    dropDeepLink("country");
  };

  // Whether the focus names a release this screen carries — ChartExplorer's
  // test. A #song= naming nothing here is a broken link, and the empty state
  // said "That's a real gap in the record" about it.
  const knownTitles = useMemo(
    () => new Set([...albums, ...singles, ...features].map((r) => r.title)),
    [albums, singles, features]
  );
  const unknownFocus = !!focus && !knownTitles.has(focus);

  const sections = [
    { name: "Albums", list: albums },
    { name: "Singles", list: singles },
    { name: "Features", list: features },
  ]
    .map((g) => {
      const rows = g.list
        .filter(
          (r) =>
            (!focus || r.title === focus) &&
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
              // The open-run caveat the desktop carries in its pill's title —
              // the phone dropped it, so both layouts carry it the same way.
              note: e.note,
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

      {/* The deep-linked focus, announced the way the desktop explorer announces
          it. Sits above the rails and above the empty state, so a ?song= that
          matches nothing still leaves a way back to the full list. */}
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every chart entry for <b>{focus}</b>
          </span>
          <button type="button" className={styles.focusClear} onClick={clearFocus}>
            Show all releases ✕
          </button>
        </div>
      )}

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
            onClick={() => pickOnly(null)}
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
              onClick={() => pickOnly(only === code ? null : code)}
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
        // The focus is the narrowest filter, then the country rail, then the
        // peak — the order ChartExplorer drops them in. "Clear filters" left
        // the focus standing, so on a ?song= that matched nothing it did
        // nothing at all (24 Sep 2026).
        <FilterEmpty
          body={
            unknownFocus
              ? `No release on this page is called “${focus}”. That's a broken link, not a gap in the record.`
              : `There's no ${[
                  peakMax && PEAKS.find((p) => p.key === peakMax)!.label,
                  "chart entry",
                  focus && `for ${focus}`,
                  only && `in ${countries[only]?.name ?? only}`,
                ]
                  .filter(Boolean)
                  .join(" ")}. That's a real gap in the record, not a missing page.`
          }
          onClear={() => {
            setPeakMax(null);
            pickOnly(null);
            clearFocus();
          }}
          narrowest={
            focus
              ? { label: focus, drop: clearFocus }
              : only
                ? { label: countries[only]?.name ?? only, drop: () => pickOnly(null) }
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
                  {/* The slot holds the art back until the row nears the
                      screen; see .coverSlot (23 Sep 2026). */}
                  <span className={styles.coverSlot}>
                    <span
                      className={styles.rowCover}
                      aria-hidden="true"
                      /* 102 = 3x the 34px tile. A board artist's art arrived as
                         Deezer's 500px and Apple's 300px files here, 2.9 MB of
                         /afrobeats/wizkid/charts on a phone for 0.3 MB of pixels
                         (23 Sep 2026). Spotify covers still resolve to 300. */
                      style={{ backgroundImage: `url(${artAt(cover(r.title) ?? "", 102)})` }}
                    />
                  </span>
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
                  <div className={styles.coverSlot}>
                    <div
                      className={styles.rowCover}
                      aria-hidden="true"
                      style={{ backgroundImage: `url(${artAt(cover(r.title) ?? "", 102)})` }}
                    />
                  </div>
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
                      title={`${p.name} — peak #${p.peak}${p.note ? ` (${p.note})` : ""}`}
                      className={styles.pill}
                      style={{
                        color: b.color,
                        borderColor: b.border,
                        background: b.bg,
                        opacity: p.off ? 0.24 : 1,
                      }}
                    >
                      {/* The country is in the pill's text, not just its
                          `title`: a phone never shows a tooltip, so on the
                          layout this screen IS, the pill announced as bare
                          "#1" with the flag emoji for a name. Clipped rather
                          than display:none — the same treatment the song
                          page's .peakName gets at this width. */}
                      <span className="visuallyHidden">{p.name}, peak </span>
                      <span className={styles.pillFlag} aria-hidden="true">{p.flag}</span>#{p.peak}
                      {p.note && <span className="visuallyHidden">, {p.note}</span>}
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
            ? `Peaks on each country's principal national chart — ${sourceSplit.nationalBody} national bodies, ${sourceSplit.airplayMonitor} airplay or monitor charts where a country has no other, ${sourceSplit.billboardCountry} Billboard country charts and ${sourceSplit.global} worldwide. Genre charts excluded.`
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
