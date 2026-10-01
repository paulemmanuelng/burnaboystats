"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type FocusEvent, type MouseEvent, type PointerEvent, type RefObject } from "react";
import type { Region } from "../data/performedCountries";
import type { Box } from "../lib/tourMapData";
import styles from "./tourMapSvg.module.css";

/**
 * The tour map's drawing, shared by the desktop and phone layouts the way the
 * old PerformanceMap was: the layouts are separate components and decide
 * everything (view, selection, keyboard); this only paints what they say.
 *
 * ONE MAP, NO SECOND COPY OF THE GEOMETRY. The shapes are the site's static
 * sprite (app/dai-dai/replay-map.svg, every shape in data/worldShapes.ts,
 * keyed s<ISO numeric>), placed by <use>. Until 30 Sep 2026 the page inlined
 * the full 120 KB of path data twice, once per layout, and shipped it a third
 * time in its JS. A view change moves this one map's viewBox; the desktop
 * close-up is a second viewBox over the same sprite, drawing only the shapes
 * in its box (design response, items 8 and 77).
 *
 * Layers, bottom to top (tour-map.js, the canvas renderer): the land nobody
 * played, one layer; the played countries; the state layers of the focused,
 * selected and hovered countries (ring, outline, then the country's own fill
 * again on top); the eight dots; the close-up's area.
 */

export const SPRITE = "/dai-dai/replay-map.svg";
/** Dots are 8px at every view (design response §3). */
export const DOT_PX = 8;

export interface MapCountry {
  code: number;
  region: Region;
  say: string;
  dot: { x: number; y: number } | null;
}

export interface MapKeys {
  /** The one country with tabIndex 0: the map is one Tab stop. */
  tabCode: number;
  onKeyDown: (code: number, e: KeyboardEvent<SVGElement>) => void;
  onFocus: (code: number, keyboard: boolean) => void;
  onBlur: () => void;
}

/** Keyboard focus, not a click: `:focus-visible`, as mapFocus.ts reads it. */
const isKeyboard = (el: Element) => {
  try {
    return el.matches(":focus-visible");
  } catch {
    return true;
  }
};

export default function TourMapSvg({
  countries,
  land,
  view,
  initialScale,
  selected,
  hovered,
  focused,
  marked,
  litRegion,
  area,
  keys,
  label,
  svgRef,
  className,
  onPointerMove,
  onPointerLeave,
  onClick,
}: {
  countries: MapCountry[];
  /** The unplayed shapes to draw (all of them, or only the close-up's). */
  land: number[];
  view: Box;
  /** px per map unit before the first measure (server render). */
  initialScale: number;
  selected: number | null;
  hovered: number | null;
  focused: number | null;
  /** Countries drawn in the hover style together: a phone region row with no
   *  view of its own lights its countries on World (design response §2). */
  marked?: ReadonlySet<number>;
  /** Desktop: a region row hovered lights its countries and dims the rest. */
  litRegion?: Region | null;
  /** The close-up's area, marked on the world map. */
  area?: Box | null;
  /** Absent on the close-up, which shares the world map's one Tab stop. */
  keys?: MapKeys;
  label?: string;
  svgRef?: RefObject<SVGSVGElement | null>;
  className?: string;
  onPointerMove?: (e: PointerEvent<SVGSVGElement>) => void;
  onPointerLeave?: (e: PointerEvent<SVGSVGElement>) => void;
  onClick?: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  // Dots keep their screen size in every view: their radius follows the
  // scale the map is drawn at.
  const own = useRef<SVGSVGElement | null>(null);
  const ref = svgRef ?? own;
  const [scale, setScale] = useState(initialScale);
  const [vx, vy, vw, vh] = view;
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    // A ResizeObserver reports once as it starts observing, so this is also
    // the first measure.
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      if (r.width && r.height) setScale(Math.min(r.width / vw, r.height / vh));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, vw, vh]);
  const u = (px: number) => px / scale;

  const hot = (code: number) => code === hovered || !!marked?.has(code);
  const dim = (c: MapCountry) => !!litRegion && c.region !== litRegion;
  const shapes = countries.filter((c) => !c.dot);
  const dots = countries.filter((c) => c.dot);

  const interactive = (c: MapCountry) =>
    keys
      ? {
          tabIndex: c.code === keys.tabCode ? 0 : -1,
          role: "button" as const,
          "aria-label": c.say,
          onKeyDown: (e: KeyboardEvent<SVGElement>) => keys.onKeyDown(c.code, e),
          onFocus: (e: FocusEvent<SVGElement>) => keys.onFocus(c.code, isKeyboard(e.currentTarget)),
          onBlur: keys.onBlur,
        }
      : {};

  // The state layers, in the canvas renderer's order: each country with a
  // state gets its ring (focus), its outline (selected or hot), then its own
  // fill again on top.
  const stateCodes = [...new Set([focused, selected, hovered, ...(marked ?? [])])].filter(
    (c): c is number => c != null && shapes.some((s) => s.code === c),
  );

  return (
    <svg
      ref={ref}
      className={`${styles.svg}${className ? ` ${className}` : ""}`}
      viewBox={`${vx} ${vy} ${vw} ${vh}`}
      preserveAspectRatio="xMidYMid meet"
      // "group", not "img": an img role would declare the country buttons
      // inside it presentational to assistive tech.
      role={keys ? "group" : undefined}
      aria-label={keys ? label : undefined}
      aria-hidden={keys ? undefined : true}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <g className={styles.land}>
        {land.map((code) => (
          <use key={code} href={`${SPRITE}#s${code}`} />
        ))}
      </g>
      <g>
        {shapes.map((c) => (
          <use
            key={c.code}
            href={`${SPRITE}#s${c.code}`}
            data-code={c.code}
            className={`${styles.played}${dim(c) ? ` ${styles.dim}` : ""}`}
            {...interactive(c)}
          />
        ))}
      </g>
      <g className={styles.state} aria-hidden="true">
        {stateCodes.map((code) => (
          <g key={code}>
            {code === focused && (
              <>
                <use href={`${SPRITE}#s${code}`} className={styles.ringOuter} />
                <use href={`${SPRITE}#s${code}`} className={styles.ringInner} />
              </>
            )}
            {code === selected ? (
              <use href={`${SPRITE}#s${code}`} className={styles.selOutline} />
            ) : hot(code) ? (
              <use href={`${SPRITE}#s${code}`} className={styles.hotOutline} />
            ) : null}
            <use href={`${SPRITE}#s${code}`} className={hot(code) ? styles.refillHot : styles.refill} />
          </g>
        ))}
      </g>
      <g>
        {dots.map((c) => (
          <g key={c.code}>
            {c.code === focused && (
              <circle cx={c.dot!.x} cy={c.dot!.y} r={u(DOT_PX / 2 + 5)} className={styles.dotRing} vectorEffect="non-scaling-stroke" aria-hidden="true" />
            )}
            <circle
              cx={c.dot!.x}
              cy={c.dot!.y}
              r={u(DOT_PX / 2)}
              data-code={c.code}
              vectorEffect="non-scaling-stroke"
              className={[styles.dot, hot(c.code) && styles.dotHot, (c.code === selected || hot(c.code)) && styles.dotSel, dim(c) && styles.dim]
                .filter(Boolean)
                .join(" ")}
              {...interactive(c)}
            />
          </g>
        ))}
      </g>
      {area && (
        <rect x={area[0]} y={area[1]} width={area[2]} height={area[3]} className={styles.area} vectorEffect="non-scaling-stroke" aria-hidden="true" />
      )}
    </svg>
  );
}

/** A pointer's position in map units, for a map drawn with this viewBox and
 *  xMidYMid meet; and the map's current px per unit. */
export function toMapUnits(svg: SVGSVGElement, view: Box, clientX: number, clientY: number) {
  const r = svg.getBoundingClientRect();
  const [vx, vy, vw, vh] = view;
  const k = Math.min(r.width / vw, r.height / vh) || 1;
  const ox = (r.width - vw * k) / 2;
  const oy = (r.height - vh * k) / 2;
  return { x: vx + (clientX - r.left - ox) / k, y: vy + (clientY - r.top - oy) / k, k };
}
