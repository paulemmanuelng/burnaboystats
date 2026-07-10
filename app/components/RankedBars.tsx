import styles from "./RankedBars.module.css";

// A dependency-free horizontal bar chart. Single-series by design: the mark
// (gold) carries magnitude, every value is shown as text (so identity/quantity
// are never colour-alone), and a recessive track anchors each bar. `tone:
// "muted"` recedes a row to grey — used to make one entity (Burna Boy) stand out
// against others without a legend, since each row is already labelled by name.
export interface BarItem {
  flag?: string;
  name: string;
  meta?: string;
  value: number;
  displayValue: string;
  tone?: "gold" | "muted";
}

export default function RankedBars({
  items,
  max,
  ariaLabel,
}: {
  items: BarItem[];
  max?: number;
  ariaLabel: string;
}) {
  const peak = max ?? Math.max(...items.map((i) => i.value), 1);
  return (
    <figure className={styles.chart} role="img" aria-label={ariaLabel}>
      {items.map((it, i) => (
        <div key={i} className={`${styles.row} ${it.tone === "muted" ? styles.muted : ""}`}>
          <div className={styles.head}>
            <span className={styles.label}>
              {it.flag ? <span className={styles.flag} aria-hidden="true">{it.flag}</span> : null}
              <span className={styles.name}>{it.name}</span>
              {it.meta ? <span className={styles.meta}>{it.meta}</span> : null}
            </span>
            <span className={styles.value}>{it.displayValue}</span>
          </div>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${Math.max((it.value / peak) * 100, 1.5)}%` }} />
          </div>
        </div>
      ))}
    </figure>
  );
}
