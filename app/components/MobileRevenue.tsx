"use client"; // the artist chips filter the board

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./mobileRevenue.module.css";
import ScrollRail from "./ScrollRail";
import NotReported from "./NotReported";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { RUNS_HEADING, RUNS_LEDE } from "../lib/multiNightRuns";
import { HIS, chipOrder, nightCounts } from "../lib/showsChips";

/**
 * Highest-grossing shows, the phone screen — Claude Design round 1, Job 2
 * (designs/desktop/GXShowsPhone.dc.html), with the review's fixes and the
 * owner's rulings of 4 Oct 2026. Its own component: nothing here is shared
 * with the desktop board's layout.
 *
 *  - **The record night first**, then 9 of the top ten, his share and the
 *    reach, then a share bar of the board's gross by artist.
 *  - **Artist chips filter without renumbering.** Each row keeps its rank in
 *    the full board, so narrowing to one artist shows *where* their nights sit
 *    among everyone's. The count is a polite live region; the active chip is
 *    scrolled into view (fix 16). Its on-state is an ember edge and wash with
 *    an ink label, never a gold fill: the action bar is the one gold action
 *    on this screen (N2, k6).
 *  - **Gold marks his figures only** (N4): his gross; the record figure only
 *    while the record night is his (N6). Every row names its artist, his too.
 *  - **No badge on the back bar** (Q4): the record card states the figure
 *    directly beneath it, and the label takes the page's full name.
 */

/** A night on the board, the phone's way. */
export interface RevenueRow {
  rank: string;
  flag: string;
  venue: string;
  /** The meta line, "<artist> · <city> · <year>", as three fields: at 320 the
   *  city clips and the year never does (k2, 3 Oct 2026 — his two Capital One
   *  Arena nights lost the year to the ellipsis and read identically). */
  artist: string;
  city: string;
  year: string;
  /** Already formatted, e.g. "$6.147M". */
  gross: string;
  /** Boxscore does not always publish a headcount. */
  tickets?: string;
  his: boolean;
}

/** A multi-night run the body reports as one figure — shown, not ranked. */
export interface RevenueStandRow {
  flag: string;
  venue: string;
  city: string;
  /** Named on every row, his included. */
  artist: string;
  tour: string;
  /** "24–25 February 2024": kept on one line, so "24–25" never splits. */
  dates: string;
  nights: number;
  gross: string;
  /** "29,579 tickets over 2 nights" — nights, never shows. */
  tickets: string;
  his: boolean;
}

export default function MobileRevenue({
  record,
  figs,
  share,
  rows,
  stands = [],
  runsNote,
  note,
}: {
  /** The record night, No. 1 on the board. */
  record: { gross: string; his: boolean; artist: string; venue: string; city: string; year: string; tickets?: string };
  /** Three cells under the record card; `his` cells are his figures, in gold. */
  figs: { value: string; label: string; his: boolean }[];
  share: {
    segs: { artist: string; his: boolean; share: number; pct: string }[];
    his: string;
    board: string;
    last: string;
    spread: string;
  };
  rows: RevenueRow[];
  stands?: RevenueStandRow[];
  /** The derived "top N" sentence said after RUNS_LEDE. */
  runsNote: string;
  /** The method note: the source line first. */
  note: { k: string; v: string }[];
}) {
  const [artist, setArtist] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Fix 16: a chip tapped at the rail's edge (Wizkid, Davido) slid out of
  // sight once on; bring the active one fully into the rail. Horizontal only —
  // the rail scrolls, never the page — and instant under reduced motion.
  useEffect(() => {
    if (!touched) return;
    const chip = activeRef.current;
    const rail = chip?.parentElement;
    if (!chip || !rail) return;
    const pad = 18;
    const left = chip.offsetLeft - rail.offsetLeft;
    const right = left + chip.offsetWidth;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    if (left - pad < rail.scrollLeft) rail.scrollTo?.({ left: Math.max(0, left - pad), behavior });
    else if (right + pad > rail.scrollLeft + rail.clientWidth) rail.scrollTo?.({ left: right + pad - rail.clientWidth, behavior });
  }, [artist, touched]);

  const counts = nightCounts(rows.map((r) => r.artist));
  const chips = [
    { key: null as string | null, label: "All", count: rows.length },
    ...chipOrder(counts).map((a) => ({ key: a as string | null, label: a, count: counts[a] })),
  ];
  const shown = rows.filter((r) => !artist || r.artist === artist);

  return (
    <div className={styles.screen}>
      <div className={`${styles.backBar} ${styles.showBar}`}>
        <BackLink href="/records/tours" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Highest-grossing shows</span>
        <MobileMenuButton />
      </div>

      <div className={styles.showHero}>
        <div className={styles.showKicker}>
          <span className={styles.showKickerRule} aria-hidden="true" />
          Reported box office
        </div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Highest-grossing <span className={styles.gold}>shows</span>
        </h1>

        <article className={styles.record} aria-label="The biggest night on the board">
          <span className={styles.recordHead}>
            <span>No. 01 · the biggest night</span>
            <span>{record.year}</span>
          </span>
          {/* The rows' own form (bo-05), gold only while the night is his (N6). */}
          <span className={`${styles.statValue} ${styles.recordFigure} ${record.his ? "" : styles.recordOther}`}>
            {record.gross}
          </span>
          <span className={styles.recordLine}>
            <span className={styles.recordArtist}>{record.artist}</span> · {record.venue}, {record.city}
            {record.tickets ? ` · ${record.tickets} tickets` : ""}
          </span>
        </article>

        <div className={styles.figs}>
          {figs.map((f) => (
            <div key={f.label} className={styles.fig}>
              <span className={`${styles.figValue} ${f.his ? styles.figHis : ""}`}>{f.value}</span>
              <span className={styles.figLabel}>{f.label}</span>
            </div>
          ))}
        </div>

        <div
          className={`${styles.shareBar} ${touched ? "" : styles.grow}`}
          role="img"
          aria-label={share.segs.map((s) => `${s.artist} ${s.pct}`).join(", ")}
        >
          {share.segs.map((s) => (
            <span
              key={s.artist}
              className={`${styles.seg} ${s.his ? styles.segHis : ""}`}
              style={{ width: `${(100 * s.share).toFixed(2)}%` }}
            />
          ))}
        </div>
        <p className={styles.shareCap}>
          Gross by artist · <span className={styles.shareName}>{HIS}</span> ·{" "}
          <span className={styles.shareGold}>{share.his}</span> of {share.board} · down to {share.last},{" "}
          {share.spread} smaller
        </p>

        {/* Highest-Grossing Artists by Country. A secondary button: the action
            bar is this screen's one gold action (item 13; k6, 3 Oct 2026). */}
        <Link href="/records/tours/revenue/countries" className={`btn btnSecondary ${styles.countriesLink}`}>
          <span>Artists by country</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.railStick}>
        <ScrollRail className={styles.rail} label="Filter the board by artist">
          {chips.map((c) => {
            const on = artist === c.key;
            return (
              <button
                key={c.label}
                ref={on ? activeRef : undefined}
                type="button"
                aria-pressed={on}
                className={`${styles.chip} ${on ? styles.chipOn : ""}`}
                onClick={() => {
                  setTouched(true);
                  setArtist(on ? null : c.key);
                }}
              >
                {c.label}
                <span className={styles.chipCount}>{c.count}</span>
              </button>
            );
          })}
        </ScrollRail>
      </div>

      <div className={styles.countBar}>
        <span aria-live="polite" aria-atomic="true">
          {shown.length} of {rows.length} shows{artist ? ` · ${artist}` : ""}
        </span>
        <span aria-hidden="true">Gross · tickets</span>
      </div>

      {shown.map((r) => (
        <div key={r.rank} className={`${styles.row} ${styles.showRow}`}>
          <span className={`${styles.rank} ${styles.showRank}`}>{r.rank}</span>
          <div className={styles.main}>
            <div className={`${styles.venue} ${styles.showVenue}`}>
              {r.flag} {r.venue}
            </div>
            <div className={`${styles.meta} ${styles.metaSplit}`}>
              <span className={styles.metaKeep}>{r.artist} · </span>
              <span className={styles.metaCity}>{r.city}</span>
              <span className={styles.metaKeep}> · {r.year}</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.gross} ${r.his ? styles.grossHis : styles.grossOther}`}>{r.gross}</div>
            <div className={`${styles.tickets} ${styles.showTickets}`}>
              {r.tickets ?? <NotReported what="No headcount published" />}
            </div>
          </div>
        </div>
      ))}

      {stands.length > 0 && (
        // A section of its own with a real heading: these are the body's own
        // combined figures for runs of several nights, shown as what they are
        // rather than ranked against single nights. One explanation, at the
        // head (fix 12): RUNS_LEDE verbatim, then the derived "top N" note.
        <section className={styles.runs} aria-labelledby="runs-title-m">
          <h2 id="runs-title-m" className={styles.runsTitle}>{RUNS_HEADING}</h2>
          <p className={styles.runsLede}>
            {RUNS_LEDE} {runsNote}
          </p>
          <ul className={styles.runsList}>
            {stands.map((r) => (
              <li key={r.venue + r.dates} className={styles.runRow}>
                <span className={styles.runHead}>
                  <span className={styles.runMarker}>
                    <span className={styles.runMarkerBars} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                    <span>Run · {r.nights} nights</span>
                  </span>
                  <span className={styles.runVenue}>
                    {r.flag} {r.venue}
                  </span>
                </span>
                <span className={`${styles.gross} ${r.his ? styles.grossHis : styles.grossOther}`}>{r.gross}</span>
                <span className={styles.runMeta}>
                  {r.artist} · {r.city} · {r.tour}
                </span>
                <span className={styles.runMeta}>
                  <span className={styles.nowrap}>{r.dates}</span> · <span className={styles.nowrap}>{r.tickets}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.method} aria-label="Sources and method">
        <dl className={styles.methodList}>
          {note.map((n) => (
            <div key={n.k} className={styles.methodRow}>
              <dt>{n.k}</dt>
              <dd>{n.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/share" className={styles.actionPrimary}>
          Make a stat card
        </Link>
      </div>
    </div>
  );
}
