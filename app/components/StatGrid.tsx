import type { CSSProperties, ReactNode } from "react";
import styles from "./StatGrid.module.css";

export interface Stat {
  num: ReactNode; // a number, <CountUp/>, or short string like "2021"
  label: string;
}

// The shared page-summary stat row used across the records pages. One source of
// truth so every page's stat band looks and behaves identically — a single row
// on desktop, a tidy 2-column grid on phones (previously each page rolled its
// own, some stacking 1-per-row, some 2×2).
export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.grid} style={{ "--n": stats.length } as CSSProperties}>
      {stats.map((s, i) => (
        <div key={i} className={styles.cell}>
          <span className={styles.num}>{s.num}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
