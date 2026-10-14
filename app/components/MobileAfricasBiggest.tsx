"use client"; // the three chips filter the boards

import { Fragment, useState } from "react";
import Link from "next/link";
import styles from "./mobileAfricasBiggest.module.css";
import ScrollRail from "./ScrollRail";
import DockIndex from "./DockIndex";
import type { Board, BoardYear } from "../lib/africaBoards";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import MobileFaqSection from "./MobileFaqSection";
import MobileProvenance from "./MobileProvenance";
import type { Faq } from "./FaqList";

/**
 * Mobile screen 16 — Africa's biggest.
 *
 * Its own screen rather than the shared deep-page grammar: every board carries
 * a badge stating his standing on it and a note explaining it, which the shared
 * row grammar has nowhere to put. Built from designs/mobile/Burna Boy Stats -
 * Mobile Deep Pages.dc.html, screen 16 (`africa()`).
 *
 * No bars anywhere. Many of these boards rank by placing, and a rank has no
 * length — the design draws rank, name, value and nothing else.
 */

type Filter = null | "leads" | "other";

/**
 * The footnote's first sentence (J1-10). Every board now names its source and
 * date on the phone (J1-9), so it no longer sends readers to the desktop page.
 * "The date it was read" is true only while every board prints a day; while
 * one prints a month ("as of") or "read date not recorded", the sentence says
 * so (design review C-14).
 */
function sourcesSentence(boards: readonly Pick<Board, "p2">[]): string {
  const everyDay = boards.every((b) => b.p2.sources.every((s) => "day" in s.date));
  return everyDay
    ? "Each board names its source and the date it was read. Tap Method for how it's counted."
    : "Each board names its source and, where it is recorded, the date it was read. Tap Method for how it's counted.";
}

/**
 * A year board, one year at a time.
 *
 * WHAT THIS REPLACED, and why it was wrong: the phone drew a year board as
 * five rows, one per year, each naming that year's winner — "01 Burna Boy ·
 * 2026 · 1.856B so far". The ranking behind each year, which is the board, was
 * not on the screen at all. The desktop's own StatBox has always drawn the
 * full five per year; this brings the phone level (Paul, 23 Sep 2026).
 *
 * THE YEAR PILLS ARE ALSO THE SUMMARY. Gold marks a year he topped, so the
 * thing the old card said at a glance — which years are his — is still said at
 * a glance, by the control that moves between them. Nothing was traded away
 * for the detail.
 *
 * It opens on the newest year, the way the certifications log does
 * (CertHistoryByYear), because a card that opens on nothing wastes the fold.
 */
function YearBoard({ years }: { years: BoardYear[] }) {
  const [at, setAt] = useState(0);
  const year = years[at] ?? years[0];
  if (!year) return null;
  return (
    <div className={styles.yearBoard}>
      {/* Pressed buttons in a group, as every other chip rail on the site is
          (CertHistoryByYear, MobileCerts). These were ARIA tabs until 6 Oct
          (V-records-14): the tab roles promise arrow keys and a single tab
          stop, and the rail had neither — ArrowRight on 2026 did nothing, and
          all five pills sat in the Tab order. */}
      <div className={styles.yearPills} role="group" aria-label="Year">
        {years.map((y, i) => (
          <button
            key={y.label}
            type="button"
            aria-pressed={i === at}
            className={`${styles.yearPill} ${i === at ? styles.yearPillOn : ""} ${
              y.his ? styles.yearPillHis : ""
            }`}
            onClick={() => setAt(i)}
          >
            {y.label}
          </button>
        ))}
      </div>
      <div className={styles.yearPanel}>
        <p className={styles.yearState}>
          {year.inProgress ? (
            <>
              <span className={styles.yearRunning}>In progress</span>
              {year.asOf ? ` · read ${year.asOf}` : ""}
            </>
          ) : (
            <>{year.his ? "He won the year" : `${year.entries[0]?.name ?? "—"} won the year`}</>
          )}
        </p>
        <div className={styles.rows}>
          {year.entries.map((e) => (
            <div key={e.name} className={`${styles.row} ${e.his ? styles.rowHis : ""}`}>
              <span className={styles.rank}>{e.rank}</span>
              <span className={styles.rowMain}>
                <span className={styles.rowName}>
                  {e.flag ? `${e.flag} ` : ""}
                  {e.href ? (
                    <Link href={e.href} className={styles.rowLink}>
                      {e.name}
                    </Link>
                  ) : (
                    e.name
                  )}
                </span>
              </span>
              {/* Four of the five years are placings with no published total,
                  which is a fact about the source, not a gap to fill. */}
              <span className={`${styles.rowValue} ${e.value ? "" : styles.rowValueNone}`}>
                {e.value ?? "—"}
              </span>
            </div>
          ))}
        </div>
        {year.note && <p className={styles.yearNote}>{year.note}</p>}
      </div>
    </div>
  );
}

/**
 * "Next to cross" on the phone (fixes 97 and 99), as the desktop StatBox
 * draws it: label and side figure, the sentence, then the bar (--other on
 * --bg-soft-2) with a 2px ink tick at the line. The empty state is the
 * sentence alone; the bar repeats the words, so it is hidden from assistive
 * tech.
 */
function NextToCross({ next }: { next: NonNullable<Board["next"]> }) {
  if ("empty" in next)
    return (
      <div className={styles.next}>
        <p className={styles.nextText}>{next.empty}</p>
      </div>
    );
  return (
    <div className={styles.next}>
      <div className={styles.nextHead}>
        <span className={styles.nextLabel}>{next.label}</span>
        <span className={styles.nextSide}>{next.side}</span>
      </div>
      <p className={styles.nextText}>{next.sentence}</p>
      <div className={styles.nextBar} aria-hidden="true">
        <div className={styles.nextTrack}>
          <span className={styles.nextFill} style={{ width: `${Math.min(next.frac, 1) * 100}%` }} />
          <span className={styles.nextTick} />
        </div>
        <span className={styles.nextTickLabel}>{next.line}</span>
      </div>
    </div>
  );
}

export default function MobileAfricasBiggest({
  boards,
  leads,
  others,
  stats,
  faqs,
}: {
  boards: Board[];
  leads: number;
  /** Boards another artist tops. Year boards are neither — they have no lead. */
  others: number;
  /** Four cells, so the grid never has a short last row. */
  stats: { value: string; label: string; note: string }[];
  /** The page's own `pageFaqs`. The desktop copy of these is inside
   *  `.desktopOnly`, so without them here the FAQPage schema this route emits
   *  at every width promises a phone reader five answers the phone never
   *  shows — see MobileFaqSection. */
  faqs: Faq[];
}) {
  const [filter, setFilter] = useState<Filter>(null);

  const shown = boards.filter((b) =>
    filter === null ? true : filter === "leads" ? b.leads : !b.leads
  );

  const chips: { key: Filter; label: string }[] = [
    { key: null, label: `All ${boards.length}` },
    { key: "leads", label: "He leads" },
    { key: "other", label: "Others lead" },
  ];

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Africa&apos;s biggest</span>
        <span className={styles.badge}>{boards.length} boards</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>African music by the numbers</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Africa&apos;s <span className={styles.gold}>biggest</span>
        </h1>
        <p className={styles.lede}>
          The first African artist ever to reach No. 1 on Billboard&apos;s Global 200 — and
          where he sits on every other board, including the ones he doesn&apos;t lead.
        </p>
      </div>

      <div className={styles.statGrid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statCell}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statNote}>{s.note}</div>
          </div>
        ))}
      </div>

      <ScrollRail className={styles.rail} label="Filter the boards">
        {chips.map((c) => {
          const on = filter === c.key;
          return (
            <button
              key={c.label}
              type="button"
              aria-pressed={on}
              className={`${styles.chip} ${on ? styles.chipOn : ""}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          );
        })}
      </ScrollRail>

      <div className={styles.metaBar}>
        <span>
          {shown.length} {shown.length === 1 ? "board" : "boards"}
        </span>
        <span className={styles.legend}>
          <span className={styles.legendDot} aria-hidden="true" />
          His row
        </span>
      </div>

      {/* The docking index (J4-6/J4-7): the filter above stays in the flow,
          and the dock lists only the boards it shows (fix 90). */}
      <DockIndex label="Jump to a board" items={shown.map((b) => ({ id: `m-${b.id}`, label: b.title }))} />

      {shown.map((b) => (
        <div key={b.id} id={`m-${b.id}`} className={styles.board}>
          <div className={styles.boardHead}>
            <div className={styles.boardHeadMain}>
              {/* The scope tag leads every board (J1-8, fix 22). His standing
                  badge stays at the head's right, level with it. */}
              <span className={styles.scopeTag}>{b.scope}</span>
              {/* White. A board's title is a heading, not one of his records. */}
              <h2 className={styles.boardTitle}>{b.title}</h2>
              <div className={styles.boardMeta}>{b.meta}</div>
              {/* The stated in-tier order (fix 98), under the meta line. */}
              {b.order && <p className={styles.boardOrder}>{b.order}</p>}
            </div>
            <span className={`${styles.boardBadge} ${b.leads ? styles.boardBadgeLeads : ""}`}>
              {b.badge}
            </span>
          </div>
          {/* A year board opens on one year in full, with the others a tap
              away. Every other board is a single ranking and renders as one. */}
          {b.years ? (
            <YearBoard years={b.years} />
          ) : (
            <div className={`${styles.rows} ${b.groups ? styles.rowsTiered : ""}`}>
              {b.rows.map((r, i) => {
                const head = b.groups?.find((g) => g.from === i);
                return (
                <Fragment key={`${i}-${r.name}`}>
                {/* A tier head opens each song count (J5-3). */}
                {head && <div className={styles.tierHead}>{head.label}</div>}
                <div
                  className={`${styles.row} ${r.his ? styles.rowHis : ""}`}
                >
                  <span className={styles.rank}>{r.rank}</span>
                  <span className={styles.rowMain}>
                    {/* Linked where the desktop StatBox links it, from the
                        same entry's `href`; the flag beside it where the
                        board carries one (fix 98). */}
                    <span className={styles.rowName}>
                      {r.flag ? <span aria-hidden="true">{r.flag} </span> : null}
                      {r.href ? (
                        <Link href={r.href} className={styles.rowLink}>
                          {r.name}
                        </Link>
                      ) : (
                        r.name
                      )}
                    </span>
                    {r.sub && (
                      <span className={`${styles.rowSub} ${r.flag ? styles.rowSubDetail : ""}`}>{r.sub}</span>
                    )}
                  </span>
                  <span className={`${styles.rowValue} ${r.value === "—" ? styles.rowValueNone : ""}`}>
                    {r.value}
                  </span>
                </div>
                </Fragment>
                );
              })}
            </div>
          )}
          {/* Next to cross (fix 99): between the rows and the note, P2 last. */}
          {b.next && <NextToCross next={b.next} />}
          {b.note && <p className={styles.boardNote}>{b.note}</p>}
          {/* P2 (J1-9): the source and its read date on every board, with the
              board's own source text behind "Method ▾". The phone showed no
              source at all until 14 Oct 2026. */}
          <MobileProvenance size="p2" {...b.p2} className={styles.p2Slot} />
        </div>
      ))}

      <p className={styles.footNote}>
        {sourcesSentence(boards)} Gold marks his row{" "}
        <strong>wherever it falls</strong> — he tops {leads} of the {boards.length}, another
        artist leads {others}, and the by-year board is a different shape. That honesty is the
        point of the page.
      </p>

      {/* Last, exactly where the desktop layout puts it — boards, then the note
          that explains the gold rows in them, then the questions. The note
          stays welded to the list it describes; dropping the FAQ between the
          two would strand it under a list of boards it no longer looks like it
          belongs to.
          Outside the `shown` filter on purpose: the chips narrow the boards,
          and a question about African music is not a board — filtering to "he
          leads" must not take five answers off the page. */}
      <MobileFaqSection title="Common questions" items={faqs} />
    </div>
  );
}
