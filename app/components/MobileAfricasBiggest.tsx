"use client"; // the three chips filter the boards

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileAfricasBiggest.module.css";
import ScrollRail from "./ScrollRail";
import type { Board } from "../lib/africaBoards";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * Mobile screen 16 — Africa's biggest.
 *
 * Its own screen rather than the shared deep-page grammar: every board carries
 * a badge stating his standing on it and a note explaining it, which the shared
 * row grammar has nowhere to put. Built from designs/mobile/Burna Boy Stats -
 * Mobile Deep Pages.dc.html, screen 16 (`africa()`).
 *
 * No bars anywhere. Eight of these boards rank by placing, and a rank has no
 * length — the design draws rank, name, value and nothing else.
 */

type Filter = null | "leads" | "other";

export default function MobileAfricasBiggest({
  boards,
  leads,
  others,
  stats,
}: {
  boards: Board[];
  leads: number;
  /** Boards another artist tops. Year boards are neither — they have no lead. */
  others: number;
  /** Four cells, so the grid never has a short last row. */
  stats: { value: string; label: string; note: string }[];
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

      {shown.map((b) => (
        <div key={b.id} className={styles.board}>
          <div className={styles.boardHead}>
            <div className={styles.boardHeadMain}>
              {/* White. A board's title is a heading, not one of his records. */}
              <h2 className={styles.boardTitle}>{b.title}</h2>
              <div className={styles.boardMeta}>{b.meta}</div>
            </div>
            <span className={`${styles.boardBadge} ${b.leads ? styles.boardBadgeLeads : ""}`}>
              {b.badge}
            </span>
          </div>
          <div className={styles.rows}>
            {b.rows.map((r, i) => (
              <div
                key={`${i}-${r.name}`}
                className={`${styles.row} ${r.his ? styles.rowHis : ""}`}
              >
                <span className={styles.rank}>{r.rank}</span>
                <span className={styles.rowMain}>
                  <span className={styles.rowName}>{r.name}</span>
                  {r.sub && <span className={styles.rowSub}>{r.sub}</span>}
                </span>
                <span className={`${styles.rowValue} ${r.value === "—" ? styles.rowValueNone : ""}`}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
          {b.note && <p className={styles.boardNote}>{b.note}</p>}
        </div>
      ))}

      <p className={styles.footNote}>
        Each board cites its own source and date on the desktop page. Gold marks his row{" "}
        <strong>wherever it falls</strong> — he tops {leads} of the {boards.length}, another
        artist leads {others}, and the by-year board is a different shape. That honesty is the
        point of the page.
      </p>
    </div>
  );
}
