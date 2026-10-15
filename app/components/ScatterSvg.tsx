import styles from "./ScatterChart.module.css";
import { labelColumn, type ScatterGeometry, type ScatterPoint, type Tick } from "../lib/charts/scatterGeometry";

/**
 * The drawing of a scatter plot, from its geometry. No hooks and no
 * directive, so the desktop server chart and the phone's client chart
 * (PxScatter) draw the same marks (site review 8 Oct 2026, J5-1).
 *
 * `px`: the viewBox is the chart's own CSS box, so the text is set at its
 * CSS size (11px labels, mono 700) and never scales with the drawing.
 */
export default function ScatterSvg({
  g,
  points,
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  ariaLabel,
  px = false,
}: {
  g: ScatterGeometry;
  points: ScatterPoint[];
  xTicks: Tick[];
  yTicks: Tick[];
  xLabel: string;
  yLabel: string;
  ariaLabel: string;
  px?: boolean;
}) {
  const { w: W, h: H, m } = g;
  const label = (cls: string) => (px ? `${cls} ${styles.pxLabel}` : cls);
  const tick = px ? `${styles.tick} ${styles.pxTick} ${styles.pxLabel}` : styles.tick;
  const sorted = [...points].sort((a) => (a.tone === "muted" ? -1 : 1)); // gold last
  const labels = labelColumn(points, g);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={px ? `${styles.svg} ${styles.pxSvg}` : styles.svg} role="img" aria-label={ariaLabel}>
      {/* horizontal gridlines + y labels */}
      {yTicks.map((t, i) => (
        <g key={`y${i}`}>
          <line x1={m.left} x2={W - m.right} y1={g.py(t.value)} y2={g.py(t.value)} className={styles.grid} />
          <text x={m.left - 10} y={g.py(t.value) + 4} textAnchor="end" className={tick}>{t.label}</text>
        </g>
      ))}
      {/* x labels */}
      {xTicks.map((t, i) => (
        <text key={`x${i}`} x={g.px(t.value)} y={H - m.bottom + 22} textAnchor="middle" className={tick}>{t.label}</text>
      ))}
      {/* axis titles */}
      <text x={m.left + (W - m.left - m.right) / 2} y={H - 6} textAnchor="middle" className={label(styles.axisTitle)}>{xLabel}</text>
      <text transform={`rotate(-90 16 ${m.top + (H - m.top - m.bottom) / 2})`} x={16} y={m.top + (H - m.top - m.bottom) / 2} textAnchor="middle" className={label(styles.axisTitle)}>{yLabel}</text>

      {/* hairlines from each label to its dot, under the dots */}
      {labels.map((l, i) => (
        <line key={`h${i}`} x1={l.x + 4} y1={l.y} x2={l.dot.x} y2={l.dot.y} className={styles.leader} />
      ))}

      {/* points */}
      {sorted.map((p, i) => (
        <circle
          key={i}
          cx={g.px(p.x)}
          cy={g.py(p.y)}
          r={p.tone === "muted" ? 5 : 6}
          className={p.tone === "muted" ? styles.dotMuted : styles.dot}
        >
          <title>{p.title}</title>
        </circle>
      ))}
      {/* the named shows, in one column (labelColumn) */}
      {labels.map((l, i) => (
        <text key={`l${i}`} x={l.x} y={l.y} textAnchor="end" dominantBaseline="middle" className={label(styles.pointLabel)}>
          {l.text}
        </text>
      ))}
    </svg>
  );
}
