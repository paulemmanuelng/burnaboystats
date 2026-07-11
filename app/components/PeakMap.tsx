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
const RAMP: [number, [number, number, number]][] = [
  [0.0, [255, 226, 122]], // peak 1   — bright gold
  [0.28, [255, 173, 40]], // ~peak 3
  [0.52, [245, 123, 27]], // ~peak 10 — orange
  [0.78, [219, 62, 36]], //  ~peak 40 — red
  [1.0, [122, 34, 32]], //   peak 100 — deep red
];
function color(peak: number): string {
  const t = Math.min(Math.log(peak) / Math.log(100), 1);
  let i = 0;
  while (i < RAMP.length - 2 && t > RAMP[i + 1][0]) i++;
  const [t0, c0] = RAMP[i];
  const [t1, c1] = RAMP[i + 1];
  const f = t1 === t0 ? 0 : (t - t0) / (t1 - t0);
  const mix = (a: number, b: number) => Math.round(a + (b - a) * f);
  return `rgb(${mix(c0[0], c1[0])}, ${mix(c0[1], c1[1])}, ${mix(c0[2], c1[2])})`;
}

const RAMP_CSS = "linear-gradient(to right, #ffe27a 0%, #ffad28 28%, #f57b1b 52%, #db3e24 78%, #7a2220 100%)";

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
