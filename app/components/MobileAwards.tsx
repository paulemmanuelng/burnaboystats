"use client"; // the three chips filter every body's nominations

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileAwards.module.css";
import ScrollRail from "./ScrollRail";
import type { Ceremony, Honour } from "../data/awards";

/**
 * Mobile screen 11 — Awards & nominations.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 11 and its `awards()` method. Its own screen, not the shared deep-page
 * grammar: this is a nomination *ledger* — every body, every year, every
 * category, won or not — which the shared single-row list cannot carry.
 *
 * The design's mock shows six bodies because that is what fits a mockup; the
 * real screen renders all of them, per the README's data-parity rule.
 */

type Filter = "all" | "wins" | "noms";

export default function MobileAwards({
  ceremonies,
  honours,
  stats,
  wins,
  footNote,
}: {
  ceremonies: Ceremony[];
  honours: Honour[];
  stats: { value: string; label: string; note: string }[];
  wins: number;
  footNote: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const bodies = ceremonies
    .map((c) => ({
      name: c.name,
      wins: c.noms.filter((n) => n.won).length,
      total: c.noms.length,
      rows: c.noms.filter((n) => (filter === "all" ? true : filter === "wins" ? n.won : !n.won)),
    }))
    .filter((b) => b.rows.length > 0);

  const shown = bodies.reduce((n, b) => n + b.rows.length, 0);
  const noun =
    filter === "wins"
      ? shown === 1
        ? "win"
        : "wins"
      : filter === "noms"
        ? shown === 1
          ? "nomination (no win)"
          : "nominations, no win"
        : shown === 1
          ? "nomination"
          : "nominations";

  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: `All ${ceremonies.reduce((n, c) => n + c.noms.length, 0)}` },
    { key: "wins", label: "Wins only" },
    { key: "noms", label: "Nominated" },
  ];

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Awards</span>
        <span className={styles.badge}>{wins} wins</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Decorated</div>
        {/* Deliberately not an <h1>: both layouts sit in the DOM at once. */}
        <p className={styles.title}>
          Awards &amp; <span className={styles.gold}>nominations</span>
        </p>
        <p className={styles.lede}>{footNote}</p>
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

      <ScrollRail className={styles.rail} label="Filter nominations">
        {chips.map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={filter === c.key}
            className={`${styles.chip} ${filter === c.key ? styles.chipOn : ""}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.metaBar}>
        <span>
          {shown} {noun} · {bodies.length} {bodies.length === 1 ? "body" : "bodies"}
        </span>
        <span className={styles.legend}>
          <span className={styles.legendDot} aria-hidden="true" />
          Won
        </span>
      </div>

      {bodies.map((b) => (
        <div key={b.name}>
          <div className={styles.bodyHead}>
            <h2 className={styles.bodyName}>{b.name}</h2>
            <span className={`${styles.tally} ${b.wins > 0 ? styles.tallyWon : ""}`}>
              {b.wins} of {b.total}
            </span>
            <span className={styles.tallyLabel}>won</span>
          </div>
          {b.rows.map((n, i) => (
            <div key={`${i}-${n.year}-${n.category}`} className={styles.nom}>
              <span className={styles.year}>{n.year}</span>
              <div className={styles.nomMain}>
                <div className={styles.category}>{n.category}</div>
                {/* An em dash where the body names no work — absent, not blank. */}
                <div className={styles.work}>{n.work || "—"}</div>
              </div>
              <span className={`${styles.result} ${n.won ? styles.resultWon : ""}`}>
                {n.won ? "Won" : "Nominated"}
              </span>
            </div>
          ))}
        </div>
      ))}

      <div className={styles.honours}>
        <h2 className={styles.honoursTitle}>Honours &amp; recognitions</h2>
        <p className={styles.honoursNote}>Not counted in the {wins} wins</p>
        <div className={styles.honoursList}>
          {/* Two BRIT Billion Awards share a title and a year — one for 1bn UK
              streams, one for 2bn — so position is what disambiguates. */}
          {honours.map((h, i) => (
            <div key={`${i}-${h.title}`} className={styles.honour}>
              <div className={styles.honourMain}>
                <div className={styles.honourTitle}>{h.title}</div>
                <div className={styles.honourOrg}>{h.org}</div>
              </div>
              <span className={styles.honourYear}>{h.year}</span>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.foot}>
        Wins and nominations come from each body&apos;s own winners list. Honours like the
        MFR and TIME 100 are recognitions rather than competitive awards, so they are listed
        separately and not counted in the {wins}.
      </p>
    </div>
  );
}
