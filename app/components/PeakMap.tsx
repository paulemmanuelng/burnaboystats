import styles from "./PeakMap.module.css";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";

export interface PeakInfo {
  name: string;
  peak: number;
}

// Choropleth: colour each country by Burna Boy's best chart peak there, on a
// single-hue gold ramp (brighter = higher peak). Reuses the performance-map
// country shapes. Native <title> gives an accessible per-country tooltip.
function band(peak: number): string {
  if (peak === 1) return "#ffd24a";
  if (peak <= 10) return "#ffb627";
  if (peak <= 40) return "#c98a2e";
  return "#7a5622";
}

const LEGEND = [
  { c: "#ffd24a", label: "No. 1" },
  { c: "#ffb627", label: "Top 10" },
  { c: "#c98a2e", label: "Top 40" },
  { c: "#7a5622", label: "Charted" },
];

export default function PeakMap({
  data,
  ariaLabel,
}: {
  data: Record<number, PeakInfo>;
  ariaLabel: string;
}) {
  return (
    <figure className={styles.wrap}>
      <div className={styles.scroll}>
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className={styles.svg} role="img" aria-label={ariaLabel}>
          {worldShapes.map((s) => {
            const info = data[s.code];
            return (
              <path
                key={s.code}
                d={s.d}
                className={styles.country}
                style={info ? { fill: band(info.peak) } : undefined}
              >
                {info ? <title>{`${info.name}: peaked at No. ${info.peak}`}</title> : null}
              </path>
            );
          })}
        </svg>
      </div>
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
