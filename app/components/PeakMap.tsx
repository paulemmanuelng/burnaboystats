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

// Warm sequential ramp — gold → orange → burnt-orange → brick — so the four
// bands read apart at a glance while staying on-brand. Lightness decreases
// monotonically (brighter = higher peak).
function band(peak: number): string {
  if (peak === 1) return "#ffd24a";
  if (peak <= 10) return "#f79333";
  if (peak <= 40) return "#dd5f2b";
  return "#9c3d2b";
}

const LEGEND = [
  { c: "#ffd24a", label: "No. 1" },
  { c: "#f79333", label: "Top 10" },
  { c: "#dd5f2b", label: "Top 40" },
  { c: "#9c3d2b", label: "Charted" },
];

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
                style={info ? { fill: band(info.peak) } : undefined}
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

      <ul className={styles.legend}>
        {LEGEND.map((l) => (
          <li key={l.label} className={styles.legendItem}>
            <span className={styles.swatch} style={{ background: l.c }} aria-hidden="true" />
            {l.label}
          </li>
        ))}
      </ul>
    </figure>
  );
}
