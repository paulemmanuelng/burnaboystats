import styles from "./ScatterChart.module.css";
import ScatterSvg from "./ScatterSvg";
import PxScatter from "./PxScatter";
import { scatterGeometry, type ScatterPoint, type ScatterScale, type Tick } from "../lib/charts/scatterGeometry";

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
// `scale="log"` (J5-2 (f)): both axes logarithmic from xMin/yMin.
export default function ScatterChart({
  points,
  xMin,
  xMax,
  yMin,
  yMax,
  scale = "linear",
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  ariaLabel,
  px = false,
}: {
  points: ScatterPoint[];
  xMin?: number;
  xMax: number;
  yMin?: number;
  yMax: number;
  scale?: ScatterScale;
  xTicks: Tick[];
  yTicks: Tick[];
  xLabel: string;
  yLabel: string;
  ariaLabel: string;
  px?: boolean;
}) {
  // The phone fits its column (J5-2 (f)): nothing scrolls, so no scroll box.
  if (px)
    return (
      <PxScatter
        points={points}
        xMin={xMin}
        xMax={xMax}
        yMin={yMin}
        yMax={yMax}
        scale={scale}
        xTicks={xTicks}
        yTicks={yTicks}
        xLabel={xLabel}
        yLabel={yLabel}
        ariaLabel={ariaLabel}
      />
    );
  return (
    // Focusable: under 460px the chart scrolls sideways, and a scroll box with
    // nothing focusable inside it cannot be scrolled from a keyboard.
    <div className={styles.wrap} tabIndex={0} role="region" aria-label={`Scatter chart: ${xLabel} against ${lowerFirst(yLabel)}`}>
      <ScatterSvg
        g={scatterGeometry({ w: 720, h: 440, xMin, xMax, yMin, yMax, scale })}
        points={points}
        xTicks={xTicks}
        yTicks={yTicks}
        xLabel={xLabel}
        yLabel={yLabel}
        ariaLabel={ariaLabel}
      />
    </div>
  );
}
