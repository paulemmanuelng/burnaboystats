import styles from "./ScatterChart.module.css";
import ScatterSvg from "./ScatterSvg";
import PxScatter from "./PxScatter";
import { scatterGeometry, type ScatterPoint, type Tick } from "../lib/charts/scatterGeometry";

export type { ScatterPoint, Tick };

// The region's name reads the axis label mid-sentence: lower only its first
// letter, so "Gross (USD)" reads "against gross (USD)", never "gross (usd)".
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

// A scatter plot (correlation). Pure SVG, responsive via viewBox. Points draw
// muted-first so the gold marks sit on top; a thin surface ring separates
// overlapping dots. Hover text via native <title>.
//
// `px` (the phone, site review 8 Oct 2026, J5-1): drawn at its CSS box by
// PxScatter, 1 unit = 1 CSS px, so its text is never scaled down with the
// drawing. Desktop leaves it unset and keeps its fixed 720 × 440 viewBox.
export default function ScatterChart({
  points,
  xMax,
  yMax,
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  ariaLabel,
  px = false,
}: {
  points: ScatterPoint[];
  xMax: number;
  yMax: number;
  xTicks: Tick[];
  yTicks: Tick[];
  xLabel: string;
  yLabel: string;
  ariaLabel: string;
  px?: boolean;
}) {
  return (
    // Focusable: under 460px the chart scrolls sideways, and a scroll box with
    // nothing focusable inside it cannot be scrolled from a keyboard.
    <div className={styles.wrap} tabIndex={0} role="region" aria-label={`Scatter chart: ${xLabel} against ${lowerFirst(yLabel)}`}>
      {px ? (
        <PxScatter
          points={points}
          xMax={xMax}
          yMax={yMax}
          xTicks={xTicks}
          yTicks={yTicks}
          xLabel={xLabel}
          yLabel={yLabel}
          ariaLabel={ariaLabel}
        />
      ) : (
        <ScatterSvg
          g={scatterGeometry({ w: 720, h: 440, xMax, yMax })}
          points={points}
          xTicks={xTicks}
          yTicks={yTicks}
          xLabel={xLabel}
          yLabel={yLabel}
          ariaLabel={ariaLabel}
        />
      )}
    </div>
  );
}
