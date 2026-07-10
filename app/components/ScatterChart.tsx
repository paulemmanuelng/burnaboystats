import styles from "./ScatterChart.module.css";

export interface ScatterPoint {
  x: number;
  y: number;
  title: string; // hover text
  label?: string; // optional direct label
  tone?: "gold" | "muted";
}
export interface Tick {
  value: number;
  label: string;
}

// A scatter plot (correlation). Pure SVG, responsive via viewBox. Points draw
// muted-first so the gold marks sit on top; a thin surface ring separates
// overlapping dots. Hover text via native <title>.
export default function ScatterChart({
  points,
  xMax,
  yMax,
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  ariaLabel,
}: {
  points: ScatterPoint[];
  xMax: number;
  yMax: number;
  xTicks: Tick[];
  yTicks: Tick[];
  xLabel: string;
  yLabel: string;
  ariaLabel: string;
}) {
  const W = 720, H = 440;
  const m = { top: 22, right: 26, bottom: 46, left: 66 };
  const px = (v: number) => m.left + (v / xMax) * (W - m.left - m.right);
  const py = (v: number) => H - m.bottom - (v / yMax) * (H - m.top - m.bottom);

  const sorted = [...points].sort((a) => (a.tone === "muted" ? -1 : 1)); // gold last

  return (
    <div className={styles.wrap}>
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label={ariaLabel}>
        {/* horizontal gridlines + y labels */}
        {yTicks.map((t, i) => (
          <g key={`y${i}`}>
            <line x1={m.left} x2={W - m.right} y1={py(t.value)} y2={py(t.value)} className={styles.grid} />
            <text x={m.left - 10} y={py(t.value) + 4} textAnchor="end" className={styles.tick}>{t.label}</text>
          </g>
        ))}
        {/* x labels */}
        {xTicks.map((t, i) => (
          <text key={`x${i}`} x={px(t.value)} y={H - m.bottom + 22} textAnchor="middle" className={styles.tick}>{t.label}</text>
        ))}
        {/* axis titles */}
        <text x={m.left + (W - m.left - m.right) / 2} y={H - 6} textAnchor="middle" className={styles.axisTitle}>{xLabel}</text>
        <text transform={`rotate(-90 16 ${m.top + (H - m.top - m.bottom) / 2})`} x={16} y={m.top + (H - m.top - m.bottom) / 2} textAnchor="middle" className={styles.axisTitle}>{yLabel}</text>

        {/* points */}
        {sorted.map((p, i) => (
          <circle
            key={i}
            cx={px(p.x)}
            cy={py(p.y)}
            r={p.tone === "muted" ? 5 : 6}
            className={p.tone === "muted" ? styles.dotMuted : styles.dot}
          >
            <title>{p.title}</title>
          </circle>
        ))}
        {/* direct labels for the standout shows */}
        {points.filter((p) => p.label).map((p, i) => (
          <text key={`l${i}`} x={px(p.x)} y={py(p.y) - 12} textAnchor="middle" className={styles.pointLabel}>{p.label}</text>
        ))}
      </svg>
    </div>
  );
}
