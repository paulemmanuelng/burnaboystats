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
import { keyboardFocused } from "../lib/mapFocus";
import mapStyles from "../records/tours/map/map.module.css";
import styles from "./ListenerMap.module.css";

/**
 * "Where the world listens" — the top-50 Spotify cities as dots on the same
 * Equal Earth world the performance map uses. Same frame, zoom controls and
 * anchored card as PerformanceMap (whose classes it imports), different
 * geometry: a city is a point, not a shape, so every dot is projected from its
 * coordinates at render and sized by its listeners: the radius grows with the
 * square root of the count above a floor, so bigger always means more but the
 * 50th city still reads as a dot. The encoding is ordinal, not proportional.
 *
 * Countries that place a city are washed, non-interactive — the wash says
 * "reach", the dots say "how much". Dots draw largest first so a small city
 * sitting inside a big one's circle (Brooklyn on New York, the Rhine cluster)
 * still paints on top; the POINTER, though, resolves to the nearest dot centre
 * within a thumb's reach, not to the top paint, so New York is reachable
 * through Brooklyn and a 4 px dot on a phone answers a tap beside it. Keyboard
 * focus walks the 50 by rank. The ranked list under the map is the accessible
 * reading for anyone who can't work the map.
 */

const CARD_W = 230;
const MAX_ZOOM = 4;
const CARD_EST_H = 150; // measured 148 — the count line plus the wrapped "monthly listeners · No. n of 50"; matches PerformanceMap
const GAP = 9;
const R_MIN = 2.6; // the floor (a city of zero listeners); the 50th city lands near 4.8
const R_MAX = 9.2; // the first
const HIT_PX = 22; // half the site's 44 px thumb floor (map.module.css .zoomBtn on coarse pointers)

interface Anchor {
  cx: number;
  top: number;
  bottom: number;
}

type Dot = ListenerCity & { x: number; y: number; r: number };

export default function ListenerMap() {
  const [active, setActive] = useState<number | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [zoom, setZoom] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const max = listenerCities[0].listeners;
  // Largest first, so the smaller dots paint last and stay visible.
  const dots: Dot[] = useMemo(
    () =>
      [...listenerCities]
        .sort((a, b) => b.listeners - a.listeners)
        .map((c) => ({ ...c, ...projectEqualEarth(c.lon, c.lat), r: R_MIN + (R_MAX - R_MIN) * Math.sqrt(c.listeners / max) })),
    [max],
  );
  const city = active != null ? dots.find((d) => d.rank === active) : undefined;

  // Dots keep roughly their screen size as the map zooms (the SVG scales with
  // the zoom, so an unscaled radius would swell to four times its size).
  const rScale = 1 / Math.sqrt(zoom);

  const show = (rank: number, rect: { left: number; width: number; top: number; bottom: number }) => {
    setActive(rank);
    setAnchor({ cx: rect.left + rect.width / 2, top: rect.top, bottom: rect.bottom });
  };
  const clear = () => {
    setActive(null);
    setAnchor(null);
  };

  // The dot nearest the pointer, in SCREEN pixels, within HIT_PX of its edge —
  // so the reach is a thumb's at every zoom and on every screen size, and
  // inside an overlap the nearer centre wins rather than the top paint.
  const nearest = (clientX: number, clientY: number): Dot | null => {
    const svg = svgRef.current;
    if (!svg) return null;
    const box = svg.getBoundingClientRect();
    const k = box.width / MAP_W; // screen px per viewBox unit
    const px = (clientX - box.left) / k;
    const py = (clientY - box.top) / k;
    let best: Dot | null = null;
    let bestDist = HIT_PX / k;
    for (const d of dots) {
      const dist = Math.hypot(d.x - px, d.y - py) - d.r * rScale;
      if (dist < bestDist) {
        bestDist = dist;
        best = d;
      }
    }
    return best;
  };
  // Where a dot sits on screen, so the card anchors to the dot, not the pointer.
  const rectOf = (d: Dot) => {
    const box = svgRef.current!.getBoundingClientRect();
    const k = box.width / MAP_W;
    const r = d.r * rScale * k;
    return { left: box.left + d.x * k - r, width: 2 * r, top: box.top + d.y * k - r, bottom: box.top + d.y * k + r };
  };
  const pointTo = (clientX: number, clientY: number) => {
    const d = nearest(clientX, clientY);
    if (!d) {
      if (active != null) clear();
      return;
    }
    if (d.rank !== active) show(d.rank, rectOf(d));
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
  // it floating, so it goes on scroll (same rule as the performance map) —
  // unless a Tab stop is what scrolled, which dismissed the card of the dot
  // just focused: five of eight at zoom 2, and Sydney at zoom 1 (24 Sep 2026).
  // A focused dot re-anchors to where it now sits instead.
  useEffect(() => {
    if (active == null) return;
    const vp = viewportRef.current;
    const onScroll = () => {
      const el = keyboardFocused(vp);
      if (el) show(Number(el.dataset.code), el.getBoundingClientRect());
      else clear();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    vp?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      vp?.removeEventListener("scroll", onScroll);
    };
  }, [active]);

  // Keyboard: each dot is a button in rank order; Enter/Space show the card,
  // Escape dismisses it without moving focus (WCAG 1.4.13).
  const wire = (c: ListenerCity) => ({
    tabIndex: 0,
    role: "button" as const,
    "data-code": c.rank,
    "aria-label": `${c.city}, ${countryName(c)}: ${formatListeners(c.listeners)} monthly listeners, No. ${c.rank} of ${cityCount}`,
    onFocus: (e: React.FocusEvent<SVGElement>) => show(c.rank, e.currentTarget.getBoundingClientRect()),
    onBlur: clear,
    onKeyDown: (e: React.KeyboardEvent<SVGElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        clear();
        return;
      }
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

  return (
    <div className={mapStyles.mapWrap}>
      <div className={mapStyles.zoom}>
        <button type="button" className={mapStyles.zoomBtn} onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">+</button>
        <button type="button" className={mapStyles.zoomBtn} onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out">−</button>
      </div>
      <div className={mapStyles.viewport} ref={viewportRef} style={{ overflow: zoom === 1 ? "hidden" : "auto" }}>
        {/* role="group", not "img": an img role would declare the 50 buttons
            inside it presentational; the aria-label still names the map. */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className={mapStyles.svg}
          style={{ width: `${zoom * 100}%` }}
          role="group"
          aria-label={`World map of the ${cityCount} cities with the most Burna Boy listeners on Spotify`}
          onMouseMove={(e) => pointTo(e.clientX, e.clientY)}
          onMouseLeave={clear}
          onClick={(e) => {
            // A tap resolves the same way a hover does; one beside no dot
            // dismisses the card.
            const d = nearest(e.clientX, e.clientY);
            if (d) show(d.rank, rectOf(d));
            else clear();
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
          <span className={styles.cardCountry}>{countryName(city)}</span>
          <span className={styles.cardCount}>{formatListeners(city.listeners)}</span>
          <span className={styles.cardWord}>monthly listeners · No. {city.rank} of {cityCount}</span>
          <span className={mapStyles.arrow} style={{ left: arrowLeft }} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
