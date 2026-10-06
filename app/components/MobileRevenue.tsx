"use client"; // the chips filter the board

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./mobileRevenue.module.css";
import ScrollRail, { bringIntoRail } from "./ScrollRail";
import NotReported from "./NotReported";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { RUNS_HEADING, RUNS_LEDE, runYear, runsCountLine, shortDates } from "../lib/multiNightRuns";
import { HIS, RUNS_VIEW, nightCounts, railChips, shownLine } from "../lib/showsChips";
import { useBoardView } from "../lib/useBoardView";

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
 *  - **The multi-night runs are a chip**, second on the rail between "All"
 *    and Burna Boy (the owner, 4 Oct 2026), not a section beneath the board.
 *    It swaps the nights for the runs, in the rows' own format, under
 *    RUNS_LEDE and the derived note; All still counts single nights only.
 *  - **"Biggest shows" opens it on one artist** (the owner, 4 Oct 2026):
 *    ?artist=<slug> selects that artist's chip on mount, the page scrolls
 *    once to the rail (A-10) and the rail brings the chip clear of its fade;
 *    an absent or unknown slug leaves All on. The address bar and this
 *    history entry follow every chip after that (lib/useBoardView, A-03).
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
  /** Named on every row, his included, where a night's row names its artist. */
  artist: string;
  /** The data's own, "24–25 February 2024"; the row prints it short. */
  dates: string;
  nights: number;
  /** Already formatted, e.g. "$2.875M": the rows' own form. */
  gross: string;
  /** The combined headcount, "29,579", as a night's row prints its own. */
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
  /** Three cells under the record card, all in ink: the record figure above
   *  carries the screen's gold (the owner, 4 Oct 2026: "so much gold there"). */
  figs: { value: string; label: string }[];
  share: {
    segs: { artist: string; his: boolean; share: number; pct: string }[];
    his: string;
    board: string;
    last: string;
    spread: string;
  };
  rows: RevenueRow[];
  /** The runs chip's rows, in the data's order. */
  stands?: RevenueStandRow[];
  /** The derived "top N" sentence said after RUNS_LEDE in the runs view. */
  runsNote: string;
  /** The method note: the source line first. */
  note: { k: string; v: string }[];
}) {
  const counts = nightCounts(rows.map((r) => r.artist));
  // null: every single night; an artist's name: theirs; RUNS_VIEW: the runs.
  // The deep link's artist (?artist=<slug>) until a chip is tapped, or the
  // chip this history entry kept (Back from the countries board).
  const { view, pick, arrivedLinked } = useBoardView(Object.keys(counts), "shows-phone");
  const runsOn = view === RUNS_VIEW;
  const [touched, setTouched] = useState(false);
  const activeRef = useRef<HTMLButtonElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const arrived = useRef(false);

  // A-10: opened on one artist ("Biggest shows"), the page goes to the rail
  // once, instantly, held under the back bar (its scroll-margin-top), so the
  // artist's nights start on screen rather than under the record card.
  useEffect(() => {
    const el = stickRef.current;
    if (!arrivedLinked || arrived.current || !el || el.getClientRects().length === 0) return;
    arrived.current = true;
    el.scrollIntoView?.({ block: "start", behavior: "instant" });
  }, [arrivedLinked]);

  // Fix 16: a chip tapped at the rail's edge (Wizkid, Davido) slid out of
  // sight once on; bring the active one into the rail, clear of the edge
  // fades (A-01: an 18px pad left its count under the 44px fade). Horizontal
  // only — the rail scrolls, never the page — and instant under reduced
  // motion or before any tap (a deep link, a restored chip): "instant", not
  // "auto", which the rail's scroll-behavior: smooth animates (E-05).
  useEffect(() => {
    const chip = activeRef.current;
    const rail = chip?.parentElement;
    if (!chip || !rail) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    bringIntoRail(rail, chip, reduce || !touched ? "instant" : "smooth");
  }, [view, touched]);

  // All, Multi-night runs, then the artists — lib/showsChips.ts, shared with the desktop.
  const chips = railChips("All", counts, rows.length, stands.length);
  const shown = runsOn ? [] : rows.filter((r) => view === null || r.artist === view);
  const runNights = stands.reduce((t, r) => t + r.nights, 0);

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
          <span className={`${styles.statValue} ${styles.recordFigure} ${record.his ? styles.recordFigureHis : ""}`}>
            {record.gross}
          </span>
          <span className={styles.recordLine}>
            <span className={styles.recordArtist}>{record.artist}</span> · {record.venue}, {record.city}
            {/* The count with its unit, never "58,973 | tickets" (A-14). */}
            {record.tickets ? (
              <>
                {" · "}
                <span className={styles.nowrap}>{record.tickets} tickets</span>
              </>
            ) : null}
          </span>
        </article>

        <div className={styles.figs}>
          {figs.map((f) => (
            <div key={f.label} className={styles.fig}>
              <span className={styles.figValue}>{f.value}</span>
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
          {/* "down to {last}, {spread} smaller" until 5 Oct 2026: under "Gross
              by artist" that read as the smallest ARTIST's total, but it is the
              smallest single night, and the spread is top night ÷ that night
              (the desktop labels both so). */}
          <span className={styles.shareGold}>{share.his}</span> of {share.board} · smallest night {share.last} ·
          top night {share.spread} bigger
        </p>

        {/* Highest-Grossing Artists by Country. A secondary button: the action
            bar is this screen's one gold action (item 13; k6, 3 Oct 2026). */}
        <Link href="/records/tours/revenue/countries" className={`btn btnSecondary ${styles.countriesLink}`}>
          <span>Artists by country</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div ref={stickRef} className={styles.railStick}>
        <ScrollRail className={styles.rail} label="Filter the board">
          {chips.map((c) => {
            const on = view === c.key;
            return (
              <button
                key={c.label}
                ref={on ? activeRef : undefined}
                type="button"
                aria-pressed={on}
                className={`${styles.chip} ${on ? styles.chipOn : ""}`}
                onClick={() => {
                  setTouched(true);
                  pick(on ? null : c.key);
                }}
              >
                {c.label}
                <span className={styles.chipCount}>{c.count}</span>
              </button>
            );
          })}
        </ScrollRail>
      </div>

      {runsOn && (
        // The runs' one explanation, above their rows (fix 12): RUNS_LEDE
        // verbatim, then the derived "top N" note. RUNS_HEADING, the section's
        // heading until 4 Oct 2026, now names the chip and labels this view.
        <section className={styles.runsHead} aria-labelledby="runs-title-m">
          <h2 id="runs-title-m" className="visuallyHidden">
            {RUNS_HEADING}
          </h2>
          <p className={styles.runsLede}>
            {RUNS_LEDE} {runsNote}
          </p>
        </section>
      )}

      <div className={styles.countBar}>
        <span aria-live="polite" aria-atomic="true">
          {runsOn
            ? // Each part on one line (at 390 "7 nights" split across two), the
              // separator ending the line it follows: "3 multi-night runs ·".
              runsCountLine(stands.length, runNights)
                .split(" · ")
                .map((part, i, parts) => (
                  <span key={part}>
                    <span className={styles.nowrap}>{i < parts.length - 1 ? `${part} ·` : part}</span>
                    {i < parts.length - 1 ? " " : ""}
                  </span>
                ))
            : shownLine(shown.length, rows.length, typeof view === "string" ? view : undefined)}
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

      {runsOn &&
        // A run in a night's row format: the run mark where the rank would be
        // (a run is never ranked), the venue, "<artist> · <city> · <year>" in
        // the same place as every row's, then the nights and dates; the
        // combined gross and tickets on the right, his gross gold.
        stands.map((r) => (
          <div key={r.venue + r.dates} className={`${styles.row} ${styles.showRow}`}>
            <span className={`${styles.rank} ${styles.showRank} ${styles.runRank}`}>
              <span className={styles.runMarkerBars} aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="visuallyHidden">Run</span>
            </span>
            <div className={styles.main}>
              <div className={`${styles.venue} ${styles.showVenue}`}>
                {r.flag} {r.venue}
              </div>
              <div className={`${styles.meta} ${styles.metaSplit}`}>
                <span className={styles.metaKeep}>{r.artist} · </span>
                <span className={styles.metaCity}>{r.city}</span>
                <span className={styles.metaKeep}> · {runYear(r.dates)}</span>
              </div>
              {/* "3 nights · 28–29 Nov & 1 Dec 2021": wraps between its parts, never inside the dates. */}
              <div className={`${styles.meta} ${styles.runNights}`}>
                <span className={styles.nowrap}>{r.nights} nights</span> ·{" "}
                <span className={styles.nowrap}>{shortDates(r.dates)}</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={`${styles.gross} ${r.his ? styles.grossHis : styles.grossOther}`}>{r.gross}</div>
              <div className={`${styles.tickets} ${styles.showTickets}`}>{r.tickets}</div>
            </div>
          </div>
        ))}

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
      {/* The one gold action leads on to the countries board (the owner, 4 Oct
          2026: "change the button here so it can lead to the highest gross by
          country"; no stat card on this screen). */}
      <div className={styles.actionBar}>
        <Link href="/records/tours/revenue/countries" className={styles.actionPrimary}>
          Highest-grossing by country
        </Link>
      </div>
    </div>
  );
}
