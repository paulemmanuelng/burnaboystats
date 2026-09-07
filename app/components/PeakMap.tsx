"use client";

import { useEffect, useState } from "react";
import styles from "./PeakMap.module.css";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";

export interface PeakSong {
  title: string;
  peak: number;
}
export interface PeakInfo {
  name: string;
  peak: number;
  songs: PeakSong[];
}

// Continuous warm ramp so every distinct peak gets its own shade (a #2 reads
// apart from a #6 from a #14) instead of big flat bands. Log scale, because the
// peaks bunch up at the top (most are 1–10). Brighter = higher.
type Stop = [number, [number, number, number]];
const RAMP_DARK: Stop[] = [
  [0.0, [255, 226, 122]], // peak 1   — bright gold
  [0.28, [255, 173, 40]], // ~peak 3
  [0.52, [245, 123, 27]], // ~peak 10 — orange
  [0.78, [219, 62, 36]], //  ~peak 40 — red
  [1.0, [122, 34, 32]], //   peak 100 — deep red
];
/**
 * The same journey, re-derived for paper.
 *
 * A sequential ramp cannot keep one lightness direction across an inverting
 * ground. On black "he went to No. 1 here" is the BRIGHTEST country; on cream
 * the same country has to be the DARKEST, because everything pale now reads as
 * the uncharted fill (--bg-soft-2, #efeae1). Painted dark-mode-first, a No. 1
 * was #ffe27a on #efeae1 — 1.07:1 — so the map's whole subject disappeared and
 * the only countries you could see were the ones he charted worst in.
 *
 * Measured against that uncharted fill the light ramp runs 9.05 : 4.54 : 3.45 :
 * 2.75 : 1.60, monotone, best first — the mirror of dark's 13.3 : 9.1 : 6.3 :
 * 3.8 : 1.7, and with the same warm-gold-into-red hue path.
 */
const RAMP_LIGHT: Stop[] = [
  [0.0, [87, 54, 10]], //   peak 1   — deep gold-brown
  [0.28, [148, 94, 0]], //  ~peak 3  — the site's one gold
  [0.52, [186, 104, 26]], //~peak 10 — burnt orange
  [0.78, [201, 120, 105]], //~peak 40 — dusty red
  [1.0, [219, 178, 170]], // peak 100 — pale red
];

function shade(peak: number, ramp: Stop[]): string {
  const t = Math.min(Math.log(peak) / Math.log(100), 1);
  let i = 0;
  while (i < ramp.length - 2 && t > ramp[i + 1][0]) i++;
  const [t0, c0] = ramp[i];
  const [t1, c1] = ramp[i + 1];
  const f = t1 === t0 ? 0 : (t - t0) / (t1 - t0);
  const mix = (a: number, b: number) => Math.round(a + (b - a) * f);
  return `rgb(${mix(c0[0], c1[0])}, ${mix(c0[1], c1[1])}, ${mix(c0[2], c1[2])})`;
}

/**
 * light-dark() rather than a theme hook: the fill is an inline style, and the
 * function resolves against the color-scheme <html> already carries — so the
 * map follows a theme change with no re-render and no hydration mismatch.
 */
function color(peak: number): string {
  return `light-dark(${shade(peak, RAMP_LIGHT)}, ${shade(peak, RAMP_DARK)})`;
}

const RAMP_CSS =
  "linear-gradient(to right," +
  " light-dark(#57360a, #ffe27a) 0%," +
  " light-dark(#945e00, #ffad28) 28%," +
  " light-dark(#ba681a, #f57b1b) 52%," +
  " light-dark(#c97869, #db3e24) 78%," +
  " light-dark(#dbb2aa, #7a2220) 100%)";

interface Tip {
  info: PeakInfo;
  x: number;
  y: number;
}

export default function PeakMap({
  data,
  ariaLabel,
}: {
  data: Record<number, PeakInfo>;
  ariaLabel: string;
}) {
  const [tip, setTip] = useState<Tip | null>(null);

  const show = (info: PeakInfo, e: { clientX: number; clientY: number }) => {
    const x = Math.min(Math.max(e.clientX + 16, 12), window.innerWidth - 244);
    const y = Math.min(e.clientY + 16, window.innerHeight - 168);
    setTip({ info, x, y });
  };

  // A fixed tooltip goes stale on scroll — dismiss it.
  useEffect(() => {
    if (!tip) return;
    const clear = () => setTip(null);
    window.addEventListener("scroll", clear, { passive: true });
    return () => window.removeEventListener("scroll", clear);
  }, [tip]);

  return (
    <figure className={styles.wrap} onMouseLeave={() => setTip(null)}>
      <div className={styles.scroll}>
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className={styles.svg} role="img" aria-label={ariaLabel}>
          {worldShapes.map((s) => {
            const info = data[s.code];
            return (
              <path
                key={s.code}
                d={s.d}
                className={info ? styles.countryOn : styles.country}
                style={info ? { fill: color(info.peak) } : undefined}
                onMouseEnter={info ? (e) => show(info, e) : undefined}
                onMouseMove={info ? (e) => show(info, e) : undefined}
                onClick={info ? (e) => show(info, e) : undefined}
              />
            );
          })}
        </svg>
      </div>

      {tip && (
        <div className={styles.tip} style={{ left: tip.x, top: tip.y }} role="tooltip">
          <span className={styles.tipCountry}>{tip.info.name}</span>
          <ul className={styles.tipSongs}>
            {tip.info.songs.slice(0, 3).map((s, i) => (
              <li key={i}>
                <span className={styles.tipSong}>{s.title}</span>
                <span className={styles.tipPeak}>No. {s.peak}</span>
              </li>
            ))}
          </ul>
          {tip.info.songs.length > 3 && (
            <span className={styles.tipMore}>…and {tip.info.songs.length - 3} more</span>
          )}
        </div>
      )}

      <div className={styles.legend}>
        <span className={styles.legendBar} style={{ background: RAMP_CSS }} aria-hidden="true" />
        <div className={styles.legendTicks}>
          <span>No. 1</span>
          <span>Top 10</span>
          <span>Top 40</span>
          <span>40+</span>
        </div>
      </div>
    </figure>
  );
}
