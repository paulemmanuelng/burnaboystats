"use client"; // each tour opens its own date list

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileTours.module.css";
import { tourMeta } from "../lib/tourMeta";
import type { Tour } from "../data/tours";
import NotReported from "./NotReported";

// The lede reads as a sentence, so the count is spelled out — still derived,
// just worded. Anything past the list falls back to the numeral.
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const spell = (n: number) => (WORDS[n] ? WORDS[n][0].toUpperCase() + WORDS[n].slice(1) : String(n));

/**
 * The mobile tours screen.
 *
 * A distinct screen, not the desktop accordion narrowed: a two-up stat grid,
 * then one expandable row per tour whose dates stack rather than becoming a
 * table. Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html,
 * screen 12.
 *
 * The per-date figure is the VENUE'S CAPACITY, not tickets sold — tours.ts
 * records capacity, and only some nights have a Boxscore headcount. The column
 * says so, and the note under the list repeats it, because the two are easy to
 * conflate and the difference is large.
 */
export default function MobileTours({
  tours,
  topGross,
  topTourName,
  countryCount,
  regionCount,
  biggestNight,
  biggestVenue,
  yearSpan,
}: {
  tours: Tour[];
  topGross: string;
  topTourName: string;
  countryCount: number;
  regionCount: number;
  biggestNight: string;
  biggestVenue: string;
  yearSpan: string;
}) {
  const [open, setOpen] = useState<string | null>(null);

  const stats = [
    { v: String(tours.length), l: "Tours", n: yearSpan },
    { v: topGross, l: "Top gross", n: topTourName },
    { v: String(countryCount), l: "Countries", n: `${regionCount} regions` },
    { v: biggestNight, l: "Biggest night", n: biggestVenue },
  ];

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Tours &amp; live</span>
        <span className={styles.badge}>{tours.length} tours</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>On the road</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Tours &amp; <span className={styles.gold}>live</span>
        </h1>
        <p className={styles.lede}>
          {spell(tours.length)} tours across {countryCount} countries — and the
          highest-grossing tour by any African artist. Tap a tour for its dates.
        </p>
      </div>

      {/* Stat strip */}
      <div className={styles.statGrid}>
        {stats.map((s) => (
          <div key={s.l} className={styles.statCell}>
            <div className={styles.statValue}>{s.v}</div>
            <div className={styles.statLabel}>{s.l}</div>
            <div className={styles.statNote}>{s.n}</div>
          </div>
        ))}
      </div>

      {/* Tours */}
      {tours.map((t) => {
        const isOpen = open === t.name;
        return (
          <div key={t.name} className={`${styles.tour} ${isOpen ? styles.tourOpen : ""}`}>
            <button
              type="button"
              className={styles.tourBtn}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : t.name)}
            >
              <div className={styles.tourTop}>
                <div className={styles.tourMain}>
                  <div className={styles.tourNameRow}>
                    <span className={styles.tourName}>{t.name}</span>
                    {t.record && <span className={styles.recordBadge}>Record</span>}
                  </div>
                  <div className={styles.tourMeta}>
                    {t.years} · {tourMeta(t)}
                  </div>
                </div>
                <span className={`${styles.tourGross} ${t.gross ? "" : styles.grossNone}`}>
                  {t.gross ?? <NotReported />}
                </span>
                <span className={styles.caret} aria-hidden="true">{isOpen ? "▾" : "▸"}</span>
              </div>
            </button>

            {isOpen && (
              <div className={styles.tourBody}>
                <p className={styles.tourNote}>{t.note}</p>
                <div className={styles.dateHead}>
                  <span>Date &amp; venue</span>
                  <span className={styles.dateHeadRight}>Venue capacity</span>
                </div>
                {t.dates?.length ? (
                  t.dates.map((d) => (
                    <div key={`${d.date}-${d.venue}`} className={styles.dateRow}>
                      <div className={styles.dateMain}>
                        <div className={styles.dateVenue}>{d.venue}</div>
                        <div className={styles.dateMeta}>
                          {d.country} {d.city} · {d.date}
                        </div>
                      </div>
                      <span className={styles.dateCap}>
                        {d.cap ? d.cap.toLocaleString("en-GB") : <NotReported what="Capacity not stated" />}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className={styles.empty}>No date-level Boxscore report for this run.</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      <p className={styles.footNote}>
        Tour grosses come from Billboard Boxscore. The per-date figure is the{" "}
        <strong>venue&apos;s capacity</strong>, not tickets sold — tours.ts records
        capacity, and only some nights have a Boxscore headcount. A dash means the run has
        no reported gross, not that it was small. Dates shown are a documented sample, not
        the full itinerary.
      </p>

      <div className={styles.spacer} />

      <div className={styles.actionBar}>
        <a
          href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionPrimary}
        >
          Tickets · Ticketmaster<span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
