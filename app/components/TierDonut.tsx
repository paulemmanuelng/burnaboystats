"use client";

import { useState } from "react";
import styles from "./TierDonut.module.css";

export interface DonutSeg {
  label: string;
  value: number;
  color: string;
}

// Cumulative dash offsets for each donut segment (pure — computed outside render).
function buildArcs(segments: DonutSeg[], total: number, C: number, gap: number) {
  let cursor = 0;
  return segments.map((s) => {
    const frac = s.value / total;
    const len = Math.max(frac * C - gap, 0.5);
    const arc = { color: s.color, dash: `${len} ${C - len}`, off: -cursor };
    cursor += frac * C;
    return arc;
  });
}

// A composition donut. Hovering a tier (segment or legend row) lifts the row and
// pops that segment while dimming the rest, so you can read which slice is which.
export default function TierDonut({
  segments,
  total,
  centerNum,
  centerLabel,
  ariaLabel,
}: {
  segments: DonutSeg[];
  total: number;
  centerNum: string;
  centerLabel: string;
  ariaLabel: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const R = 78;
  const C = 2 * Math.PI * R;
  const arcs = buildArcs(segments, total, C, 3);

  return (
    <div className={styles.wrap}>
      <div className={styles.chartArea}>
        <svg viewBox="0 0 200 200" className={styles.svg} role="img" aria-label={ariaLabel}>
          <circle cx="100" cy="100" r={R} fill="none" stroke="var(--bg-soft-2)" strokeWidth="24" />
          <g transform="rotate(-90 100 100)">
            {arcs.map((a, i) => {
              const isActive = active === segments[i].label;
              const dim = active !== null && !isActive;
              return (
                <circle
                  key={i}
                  className={styles.arc}
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke={a.color}
                  strokeWidth={isActive ? 30 : 24}
                  strokeDasharray={a.dash}
                  strokeDashoffset={a.off}
                  strokeLinecap="butt"
                  opacity={dim ? 0.35 : 1}
                  onMouseEnter={() => setActive(segments[i].label)}
                  onMouseLeave={() => setActive(null)}
                />
              );
            })}
          </g>
          <text x="100" y="96" textAnchor="middle" className={styles.centerNum}>{centerNum}</text>
          <text x="100" y="118" textAnchor="middle" className={styles.centerLabel}>{centerLabel}</text>
        </svg>
      </div>
      <ul className={styles.legend}>
        {segments.map((s, i) => (
          <li
            key={i}
            className={`${styles.legendItem} ${active === s.label ? styles.active : ""}`}
            onMouseEnter={() => setActive(s.label)}
            onMouseLeave={() => setActive(null)}
          >
            <span className={styles.swatch} style={{ background: s.color }} aria-hidden="true" />
            <span className={styles.legendLabel}>{s.label}</span>
            <span className={styles.legendVal}>
              {s.value}
              <span className={styles.pct}>{Math.round((s.value / total) * 100)}%</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
