"use client";

// The signature interactive for the Dai Dai run: an animated "world conquest".
// The countries the song charted in light up one by one — the No. 1 countries
// first, pulsing gold, then the rest filling in warm — while a live counter
// ticks the totals up. Built entirely from the real chart data (no new source),
// reusing the site's own world-map shapes. Made to be screenshotted.
//
// Server/no-JS/reduced-motion render the FINAL state (every country lit), so the
// map is never blank for crawlers or motion-sensitive users; JS adds the play.

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./DaiDaiConquest.module.css";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";

export interface ConquestCountry {
  iso: number;
  name: string;
  peak: number;
}

// Reveal order = drama order: No. 1 countries first (alphabetical for stability),
// then everyone else by how high they charted. So the gold strongholds land
// first, then the map fills in around them.
function order(countries: ConquestCountry[]): ConquestCountry[] {
  return [...countries].sort(
    (a, b) => a.peak - b.peak || a.name.localeCompare(b.name)
  );
}

const NO1_MS = 150; // pace while the No. 1 countries drop
const REST_MS = 55; // faster sweep for the remaining charts

export default function DaiDaiConquest({
  countries,
  totalCountries,
}: {
  countries: ConquestCountry[];
  // Total charting countries incl. any without a map shape (e.g. Singapore),
  // so the headline count matches the Dai Dai page even if the dot can't render.
  totalCountries: number;
}) {
  const seq = order(countries);
  const no1Total = seq.filter((c) => c.peak === 1).length;
  const byIso = new Map(seq.map((c, i) => [c.iso, i]));

  // How many of the ordered countries are "revealed". Starts fully revealed so
  // SSR shows the finished map; the mount effect rewinds to 0 only when JS runs
  // and the user hasn't asked to reduce motion.
  const [revealed, setRevealed] = useState(seq.length);
  const [playing, setPlaying] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const figureRef = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = undefined;
  };

  const play = useCallback(() => {
    stop();
    setHasRun(true);
    setPlaying(true);
    setRevealed(0);
    let i = 0;
    const step = () => {
      i += 1;
      setRevealed(i);
      if (i >= seq.length) {
        setPlaying(false);
        return;
      }
      // Pace depends on whether we're still in the gold (No. 1) phase.
      const delay = i < no1Total ? NO1_MS : REST_MS;
      timer.current = window.setTimeout(step, delay);
    };
    timer.current = window.setTimeout(step, NO1_MS);
  }, [seq.length, no1Total]);

  // Auto-play once when it first scrolls into view — the "wow" on arrival.
  // Skipped entirely for prefers-reduced-motion (map just stays fully lit).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = figureRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasRun, play]);

  useEffect(() => stop, []);

  const no1Shown = Math.min(revealed, no1Total);
  // Once the gold phase is done, the counter switches to total charts.
  const inNo1Phase = revealed < no1Total;
  const chartsShown = Math.round((revealed / seq.length) * totalCountries);

  return (
    <figure className={styles.wrap} ref={figureRef}>
      <div className={styles.counters} aria-hidden="true">
        <div className={styles.counter}>
          <span className={styles.num}>{inNo1Phase || revealed === 0 ? no1Shown : no1Total}</span>
          <span className={styles.label}>countries at No.&nbsp;1</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.counter}>
          <span className={styles.num}>{revealed >= seq.length ? totalCountries : chartsShown}</span>
          <span className={styles.label}>countries charted</span>
        </div>
      </div>

      <div className={styles.scroll}>
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className={styles.svg}
          role="img"
          aria-label={`World map of “Dai Dai” — No. 1 in ${no1Total} countries and charting in ${totalCountries} in total.`}
        >
          {worldShapes.map((s) => {
            const idx = byIso.get(s.code);
            const country = idx != null ? seq[idx] : undefined;
            const lit = idx != null && idx < revealed;
            const isNo1 = country?.peak === 1;
            const cls = !country
              ? styles.base
              : !lit
                ? styles.pending
                : isNo1
                  ? styles.no1
                  : styles.charted;
            return (
              <path key={s.code} d={s.d} className={cls}>
                {country && <title>{`${country.name} — No. ${country.peak}`}</title>}
              </path>
            );
          })}
        </svg>
      </div>

      <figcaption className={styles.controls}>
        <button type="button" className={styles.playBtn} onClick={play} disabled={playing}>
          {playing ? "Playing…" : hasRun ? "↻ Replay" : "▶ Play the takeover"}
        </button>
        <span className={styles.legend}>
          <span className={`${styles.dot} ${styles.dotNo1}`} aria-hidden="true" /> No.&nbsp;1
          <span className={`${styles.dot} ${styles.dotCharted}`} aria-hidden="true" /> Charted
        </span>
      </figcaption>
    </figure>
  );
}
