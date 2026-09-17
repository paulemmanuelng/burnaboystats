"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";
import {
  listenerCities,
  listenerShapeCodes,
  countryName,
  formatListeners,
  cityCount,
  type ListenerCity,
} from "../data/listeners";
import { projectEqualEarth } from "../lib/equalEarth";
import mapStyles from "../records/tours/map/map.module.css";
import styles from "./ListenerMap.module.css";

/**
 * "Where the world listens" — the top-50 Spotify cities as dots on the same
 * Equal Earth world the performance map uses. Same frame, zoom controls and
 * anchored card as PerformanceMap (whose classes it imports), different
 * geometry: a city is a point, not a shape, so every dot is projected from its
 * coordinates at render and sized by its listeners — area, not radius, so a
 * city with twice the listeners reads as twice the dot.
 *
 * Countries that place a city are washed lightly, non-interactive — the wash
 * says "reach", the dots say "how much". Dots draw largest first so a small
 * city sitting inside a big one's circle (Brooklyn on New York, the Rhine
 * cluster) still lands on top and can be hovered; the ranked list under the
 * map is the accessible reading for anyone who can't work the map.
 */

const CARD_W = 230;
const MAX_ZOOM = 4;
const CARD_EST_H = 120;
const GAP = 9;
const R_MIN = 2.6; // the 50th city
const R_MAX = 9.2; // the first

interface Anchor {
  cx: number;
  top: number;
  bottom: number;
}

export default function ListenerMap() {
  const [active, setActive] = useState<number | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [zoom, setZoom] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  const max = listenerCities[0].listeners;
  // Largest first, so the smaller dots paint last and stay reachable.
  const dots = useMemo(
    () =>
      [...listenerCities]
        .sort((a, b) => b.listeners - a.listeners)
        .map((c) => ({ ...c, ...projectEqualEarth(c.lon, c.lat), r: R_MIN + (R_MAX - R_MIN) * Math.sqrt(c.listeners / max) })),
    [max],
  );
  const city = active != null ? dots.find((d) => d.rank === active) : undefined;

  const show = (rank: number, rect: DOMRect) => {
    setActive(rank);
    setAnchor({ cx: rect.left + rect.width / 2, top: rect.top, bottom: rect.bottom });
  };
  const clear = () => {
    setActive(null);
    setAnchor(null);
  };
  const zoomIn = () => {
    clear();
    setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.5).toFixed(1)));
  };
  const zoomOut = () => {
    clear();
    setZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)));
  };

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.scrollLeft = (vp.scrollWidth - vp.clientWidth) / 2;
    vp.scrollTop = (vp.scrollHeight - vp.clientHeight) / 2;
  }, [zoom]);

  // The card is fixed to where the dot sat at tap time; a scroll would leave
  // it floating, so it goes on scroll (same rule as the performance map).
  useEffect(() => {
    if (active == null) return;
    const vp = viewportRef.current;
    window.addEventListener("scroll", clear, { passive: true });
    vp?.addEventListener("scroll", clear, { passive: true });
    return () => {
      window.removeEventListener("scroll", clear);
      vp?.removeEventListener("scroll", clear);
    };
  }, [active]);

  const wire = (c: ListenerCity) => ({
    tabIndex: 0,
    role: "button" as const,
    "aria-label": `${c.city}, ${countryName(c)}: ${formatListeners(c.listeners)} monthly listeners, No. ${c.rank} of ${cityCount}`,
    onMouseEnter: (e: React.MouseEvent<SVGElement>) => show(c.rank, e.currentTarget.getBoundingClientRect()),
    onMouseLeave: clear,
    onClick: (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      show(c.rank, e.currentTarget.getBoundingClientRect());
    },
    onFocus: (e: React.FocusEvent<SVGElement>) => show(c.rank, e.currentTarget.getBoundingClientRect()),
    onBlur: clear,
    onKeyDown: (e: React.KeyboardEvent<SVGElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        show(c.rank, e.currentTarget.getBoundingClientRect());
      }
    },
  });

  let cardStyle: React.CSSProperties = {};
  let arrowLeft = CARD_W / 2;
  let placeAbove = true;
  if (anchor && typeof window !== "undefined") {
    placeAbove = anchor.top > CARD_EST_H + 24;
    const left = Math.min(Math.max(8, anchor.cx - CARD_W / 2), window.innerWidth - CARD_W - 8);
    const top = placeAbove ? anchor.top - GAP : anchor.bottom + GAP;
    cardStyle = { left, top, width: CARD_W, transform: placeAbove ? "translateY(-100%)" : "none" };
    arrowLeft = Math.min(Math.max(14, anchor.cx - left), CARD_W - 14);
  }

  // Dots keep roughly their screen size as the map zooms (the SVG scales with
  // the zoom, so an unscaled radius would swell to four times its size).
  const rScale = 1 / Math.sqrt(zoom);

  return (
    <div className={mapStyles.mapWrap}>
      <div className={mapStyles.zoom}>
        <button type="button" className={mapStyles.zoomBtn} onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">+</button>
        <button type="button" className={mapStyles.zoomBtn} onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out">−</button>
      </div>
      <div className={mapStyles.viewport} ref={viewportRef} style={{ overflow: zoom === 1 ? "hidden" : "auto" }}>
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className={mapStyles.svg}
          style={{ width: `${zoom * 100}%` }}
          role="img"
          aria-label={`World map of the ${cityCount} cities with the most Burna Boy listeners on Spotify`}
          onClick={(e) => {
            if (e.target === e.currentTarget) clear();
          }}
        >
          {worldShapes.map((s) => (
            <path
              key={s.code}
              d={s.d}
              className={listenerShapeCodes.has(s.code) ? styles.reach : mapStyles.off}
            />
          ))}
          {dots.map((d) => (
            <circle
              key={d.rank}
              cx={d.x}
              cy={d.y}
              r={d.r * rScale}
              className={`${styles.city}${active === d.rank ? ` ${styles.cityActive}` : ""}`}
              {...wire(d)}
            />
          ))}
        </svg>
      </div>

      {city && anchor && (
        <div
          className={`${mapStyles.card} ${placeAbove ? mapStyles.cardAbove : mapStyles.cardBelow}`}
          style={cardStyle}
          role="status"
        >
          <span className={mapStyles.cardName}>
            <span aria-hidden="true">{city.flag} </span>
            {city.city}
          </span>
          <span className={mapStyles.cardRegion}>{countryName(city)}</span>
          <span className={styles.cardCount}>{formatListeners(city.listeners)}</span>
          <span className={styles.cardWord}>monthly listeners · No. {city.rank} of {cityCount}</span>
          <span className={mapStyles.arrow} style={{ left: arrowLeft }} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
