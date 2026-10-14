"use client"; // measures its own box (usePxBox)

import styles from "./TimeSeriesChart.module.css";
import TimeSeriesSvg from "./TimeSeriesSvg";
import { usePxBox } from "../lib/usePxBox";
import {
  SERIES_FORMATS,
  SERIES_TICKS,
  timeSeriesGeometry,
  type SeriesAnnotation,
  type SeriesFormat,
  type SeriesPoint,
} from "../lib/charts/timeSeriesGeometry";

/** The phone's first measure before the browser reports: a 390 phone's column. */
export const PX_SERIES_BOX = { w: 354, h: 220 };
const PAD = { l: 46, r: 16, t: 22, b: 30 };

/**
 * A dated line chart drawn at its CSS size (site review 8 Oct 2026, J5-1):
 * the viewBox is the box a ResizeObserver measures, so 1 unit = 1 CSS px and
 * the axis text is 11px at every phone width, where the old fixed 720-unit
 * viewBox shrank it to ~7px at 402.
 */
export default function PxTimeSeries({
  points,
  annotations = [],
  format = "plain",
  ariaLabel,
  unitLabel,
  zeroBased = false,
  area = true,
}: {
  points: SeriesPoint[];
  annotations?: SeriesAnnotation[];
  format?: SeriesFormat;
  ariaLabel: string;
  unitLabel?: string;
  zeroBased?: boolean;
  area?: boolean;
}) {
  const [ref, box] = usePxBox<HTMLDivElement>(PX_SERIES_BOX);
  const g = timeSeriesGeometry(points, annotations, { w: box.w, h: box.h, pad: PAD, zeroBased });
  return (
    <div ref={ref} className={styles.pxBox}>
      <TimeSeriesSvg
        g={g}
        format={SERIES_FORMATS[format]}
        tickFormat={SERIES_TICKS[format]}
        ariaLabel={ariaLabel}
        unitLabel={unitLabel}
        area={area}
        px
      />
    </div>
  );
}
