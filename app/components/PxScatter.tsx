"use client"; // measures its own box (usePxBox)

import styles from "./ScatterChart.module.css";
import ScatterSvg from "./ScatterSvg";
import { usePxBox } from "../lib/usePxBox";
import { scatterGeometry, type ScatterPoint, type ScatterScale, type Tick } from "../lib/charts/scatterGeometry";

/** The first measure before the browser reports: a 390 phone's column. */
export const PX_SCATTER_BOX = { w: 354, h: 300 };

/**
 * A scatter plot drawn at its CSS size (site review 8 Oct 2026, J5-1): the
 * viewBox is the box a ResizeObserver measures, so 1 unit = 1 CSS px and its
 * ticks and labels are 11px at every phone width.
 */
export default function PxScatter({
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
}) {
  const [ref, box] = usePxBox<HTMLDivElement>(PX_SCATTER_BOX);
  const g = scatterGeometry({ w: box.w, h: box.h, xMin, xMax, yMin, yMax, scale });
  return (
    <div ref={ref} className={styles.pxBox}>
      <ScatterSvg
        g={g}
        points={points}
        xTicks={xTicks}
        yTicks={yTicks}
        xLabel={xLabel}
        yLabel={yLabel}
        ariaLabel={ariaLabel}
        px
      />
    </div>
  );
}
