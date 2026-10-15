"use client";

import { useState, useRef, useEffect, useEffectEvent, useMemo, useContext, type ReactNode } from "react";
import { worldShapes, MAP_W } from "../data/worldShapes";
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
import { usePxBox } from "../lib/usePxBox";
import {
  RMAX_DESKTOP,
  RMAX_PHONE,
  dotRadius,
  drawnRadius,
  MAP_H_CROP,
  CROPPED_VIEWBOX,
  LABEL_PX,
  placeLabels,
} from "../lib/listenerDots";
import { ListenersPickContext } from "./ListenersExplorer";
import mapStyles from "./worldMap.module.css";
import styles from "./ListenerMap.module.css";

/**
 * "Where the world listens" — the top-50 Spotify cities as dots on the same
 * Equal Earth world the performance map uses. Its frame, zoom controls and
 * anchored card come from worldMap.module.css (they were the tour map's until
 * that map was redesigned on 30 Sep 2026), different geometry: a city is a
 * point, not a shape, so every dot is projected from its coordinates at
 * render and sized by its listeners.
 *
 * AREA-TRUE (site review 8 Oct 2026, Job 5 · J5-5, fix 108): a dot's area is
 * in proportion to its listeners, r = Rmax · √(listeners / max), with a 2px
 * screen floor — the rule is lib/listenerDots.ts's, shared with the page's
 * link preview. The 50th city is a tenth of Lagos's area, as the data says;
 * the floor it replaced drew it at about a quarter. Rmax is 9.2 viewBox units
 * on the laptop and 18 on the phone, whose map is a third as wide.
 *
 * The five biggest cities are labelled at 11 CSS px at every zoom; on the
 * phone, dots that sit closer than a label line share one label (fix 107).
 * Every dot on the map is an obstacle to the labels, so a name never lands on
 * a city it is not; a label with no clear spot beside its dot takes a leader.
 * The map is cropped at 58°S. Region chips (World · Europe · West Africa ·
 * Americas) drive the same zoom as + and −.
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
const HIT_PX = 22; // half the site's 44 px thumb floor (worldMap.module.css .zoomBtn on coarse pointers)
const LABELLED = 5; // the top five carry a label (fixes 107, 108)

/** The region chips: each a zoom step and the point it centres on. World is
 *  zoom 1. Each view holds its region's cities (projected extents, 14 Oct
 *  2026): Europe's span 85 × 56 units, the Americas' 161 × 260. */
export const REGIONS = [
  { key: "world", label: "World", zoom: 1, lon: 0, lat: 0, labelCodes: [] as string[] },
  { key: "europe", label: "Europe", zoom: 4, lon: 8, lat: 49, labelCodes: [] as string[] },
  // Fix 107: at this chip each Nigerian dot gets its own label.
  { key: "west-africa", label: "West Africa", zoom: 4, lon: 4, lat: 8, labelCodes: ["NG"] },
  { key: "americas", label: "Americas", zoom: 1.5, lon: -78, lat: 6, labelCodes: [] as string[] },
] as const;
type RegionKey = (typeof REGIONS)[number]["key"];

/** The map viewport's CSS box before it is measured (the server render): the
 *  1440 laptop frame (1360 − 2 × 40 − its 1px edges) and the 402 phone card
 *  (402 − 2 × 18 − its 1px edges). */
const FIRST_BOX = {
  desktop: { w: 1278, h: (1278 * MAP_H_CROP) / MAP_W },
  phone: { w: 364, h: (364 * MAP_H_CROP) / MAP_W },
} as const;

interface Anchor {
  cx: number;
  top: number;
  bottom: number;
}

type Dot = ListenerCity & { x: number; y: number; r0: number };

export default function ListenerMap({
  layout = "desktop",
  frameClassName,
  innerClassName,
  footer,
}: {
  layout?: "desktop" | "phone";
  /** The frame around the map (and its footer): the page's card or border. */
  frameClassName?: string;
  /** The map's own ground, inside the frame. */
  innerClassName?: string;
  /** Printed inside the frame, under the map (the phone's hint). */
  footer?: ReactNode;
}) {
  const shared = useContext(ListenersPickContext);
  const [ownActive, setOwnActive] = useState<number | null>(null);
  const active = shared ? shared.active : ownActive;
  const setActive = shared ? shared.setActive : setOwnActive;
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [zoom, setZoom] = useState(1);
  const [region, setRegion] = useState<RegionKey | null>(null);
  const [viewportRef, box] = usePxBox<HTMLDivElement>(FIRST_BOX[layout]);
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  /** The city a row put on the map: its card follows the dot through a
   *  scroll (the one the row's tap starts), rather than going. */
  const pinned = useRef<number | null>(null);

  const rmax = layout === "phone" ? RMAX_PHONE : RMAX_DESKTOP;
  const max = listenerCities[0].listeners;
  // Largest first, so the smaller dots paint last and stay visible.
  const dots: Dot[] = useMemo(
    () =>
      [...listenerCities]
        .sort((a, b) => b.listeners - a.listeners)
        .map((c) => ({ ...c, ...projectEqualEarth(c.lon, c.lat), r0: dotRadius(c.listeners, max, rmax) })),
    [max, rmax],
  );
  const city = active != null ? dots.find((d) => d.rank === active) : undefined;

  // CSS px per viewBox unit, zoom included (the SVG is zoom × the viewport).
  const k = (box.w * zoom) / MAP_W;
  // Dots keep roughly their screen size as the map zooms (the SVG scales with
  // the zoom, so an unscaled radius would swell to four times its size). The
  // scale is the same for every dot, so their areas stay in proportion.
  const rScale = 1 / Math.sqrt(zoom);
  const radius = (d: Dot) => drawnRadius(d.r0 * rScale, k);

  const current: RegionKey | null = zoom === 1 ? "world" : region;
  const labels = useMemo(() => {
    const labelCodes: readonly string[] = REGIONS.find((r) => r.key === current)?.labelCodes ?? [];
    // Every dot as drawn: the labels keep off all of them, not only the named.
    const drawn = dots.map((d) => ({ rank: d.rank, city: d.city, code: d.code, x: d.x, y: d.y, r: drawnRadius(d.r0 * rScale, k) }));
    return placeLabels(
      drawn.filter((d) => d.rank <= LABELLED || labelCodes.includes(d.code)).sort((a, b) => a.rank - b.rank),
      k,
      layout,
      { drawn, world: current === "world", apart: labelCodes },
    );
  }, [dots, k, rScale, layout, current]);

  const show = (rank: number, rect: { left: number; width: number; top: number; bottom: number }) => {
    setActive(rank);
    setAnchor({ cx: rect.left + rect.width / 2, top: rect.top, bottom: rect.bottom });
  };
  const clear = () => {
    pinned.current = null;
    setActive(null);
    setAnchor(null);
  };

  // The dot nearest the pointer, in SCREEN pixels, within HIT_PX of its edge —
  // so the reach is a thumb's at every zoom and on every screen size, and
  // inside an overlap the nearer centre wins rather than the top paint.
  const nearest = (clientX: number, clientY: number): Dot | null => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const kk = rect.width / MAP_W; // screen px per viewBox unit
    const px = (clientX - rect.left) / kk;
    const py = (clientY - rect.top) / kk;
    let best: Dot | null = null;
    let bestDist = HIT_PX / kk;
    for (const d of dots) {
      const dist = Math.hypot(d.x - px, d.y - py) - radius(d);
      if (dist < bestDist) {
        bestDist = dist;
        best = d;
      }
    }
    return best;
  };
  // Where a dot sits on screen, so the card anchors to the dot, not the pointer.
  const rectOf = (d: Dot) => {
    const rect = svgRef.current!.getBoundingClientRect();
    const kk = rect.width / MAP_W;
    const r = radius(d) * kk;
    return { left: rect.left + d.x * kk - r, width: 2 * r, top: rect.top + d.y * kk - r, bottom: rect.top + d.y * kk + r };
  };
  const pointTo = (clientX: number, clientY: number) => {
    const d = nearest(clientX, clientY);
    if (!d) {
      if (active != null) clear();
      return;
    }
    pinned.current = null;
    if (d.rank !== active) show(d.rank, rectOf(d));
  };

  const zoomIn = () => {
    clear();
    setRegion(null);
    setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.5).toFixed(1)));
  };
  const zoomOut = () => {
    clear();
    setRegion(null);
    setZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)));
  };
  const goTo = (key: RegionKey) => {
    clear();
    const r = REGIONS.find((x) => x.key === key)!;
    setRegion(key === "world" ? null : key);
    setZoom(r.zoom);
  };

  // A zoom centres the view; a region chip centres it on the region.
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const r = REGIONS.find((x) => x.key === region);
    if (r && r.zoom === zoom) {
      const p = projectEqualEarth(r.lon, r.lat);
      const kk = vp.scrollWidth / MAP_W;
      vp.scrollLeft = p.x * kk - vp.clientWidth / 2;
      vp.scrollTop = p.y * kk - vp.clientHeight / 2;
      return;
    }
    vp.scrollLeft = (vp.scrollWidth - vp.clientWidth) / 2;
    vp.scrollTop = (vp.scrollHeight - vp.clientHeight) / 2;
  }, [zoom, region, viewportRef]);

  // A row of "The 50" asked for a city (the phone, through ListenersExplorer):
  // bring the map into view, centre the dot when zoomed, and show its card.
  // The row's click calls this directly, so it runs in the tap's own event.
  const showCity = (rank: number) => {
    const d = dots.find((x) => x.rank === rank);
    const vp = viewportRef.current;
    if (!d || !vp || !svgRef.current) return;
    rootRef.current?.scrollIntoView?.({ block: "center" });
    if (zoom > 1) {
      const kk = vp.scrollWidth / MAP_W;
      vp.scrollLeft = d.x * kk - vp.clientWidth / 2;
      vp.scrollTop = d.y * kk - vp.clientHeight / 2;
    }
    pinned.current = d.rank;
    show(d.rank, rectOf(d));
  };
  useEffect(() => {
    shared?.register(showCity);
  });

  // The card is fixed to where the dot sat at tap time; a scroll would leave
  // it floating, so it goes on scroll (same rule as the performance map) —
  // unless a Tab stop is what scrolled, which dismissed the card of the dot
  // just focused: five of eight at zoom 2, and Sydney at zoom 1 (24 Sep 2026).
  // A focused dot re-anchors to where it now sits instead, and so does a city
  // a row put on the map.
  // An Effect Event, so the listener reads this render's dots and zoom, not
  // the ones it was attached under.
  const onScroll = useEffectEvent(() => {
    const el = keyboardFocused(viewportRef.current);
    if (el) show(Number(el.dataset.code), el.getBoundingClientRect());
    else if (pinned.current === active && svgRef.current) {
      const d = dots.find((x) => x.rank === active);
      if (d) show(d.rank, rectOf(d));
    } else clear();
  });
  useEffect(() => {
    if (active == null) return;
    const vp = viewportRef.current;
    const handler = () => onScroll();
    window.addEventListener("scroll", handler, { passive: true });
    vp?.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      vp?.removeEventListener("scroll", handler);
    };
  }, [active, viewportRef]);

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
    <div className={mapStyles.mapRoot} ref={rootRef}>
      <div className={`${mapStyles.chipsRail} ${layout === "phone" ? mapStyles.chipsRailPhone : ""}`}>
        <div className={mapStyles.chips} role="radiogroup" aria-label="Zoom the map to">
          {REGIONS.map((r) => (
            <button
              key={r.key}
              type="button"
              role="radio"
              aria-checked={current === r.key}
              className={current === r.key ? `${mapStyles.chip} ${mapStyles.chipOn}` : mapStyles.chip}
              onClick={() => goTo(r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className={frameClassName}>
        <div className={`${mapStyles.mapWrap} ${innerClassName ?? ""}`}>
          <div className={mapStyles.zoom}>
            <button type="button" className={mapStyles.zoomBtn} onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">+</button>
            <button type="button" className={mapStyles.zoomBtn} onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out">−</button>
          </div>
          <div
            className={mapStyles.viewport}
            ref={viewportRef}
            style={{ overflow: zoom === 1 ? "hidden" : "auto", aspectRatio: `${MAP_W} / ${MAP_H_CROP}` }}
          >
            {/* role="group", not "img": an img role would declare the 50 buttons
                inside it presentational; the aria-label still names the map. */}
            <svg
              ref={svgRef}
              viewBox={CROPPED_VIEWBOX}
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
                pinned.current = null;
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
                  r={+radius(d).toFixed(3)}
                  className={`${styles.city}${active === d.rank ? ` ${styles.cityActive}` : ""}`}
                  {...wire(d)}
                />
              ))}
              {/* The top five, named on the map (the rest on tap, in the card). */}
              <g aria-hidden="true" className={styles.labels}>
                {labels.map((l) =>
                  l.leader ? (
                    <line
                      key={`leader-${l.ranks.join("-")}`}
                      data-leader={l.ranks.join(" ")}
                      x1={+l.leader.x1.toFixed(2)}
                      y1={+l.leader.y1.toFixed(2)}
                      x2={+l.leader.x2.toFixed(2)}
                      y2={+l.leader.y2.toFixed(2)}
                      strokeWidth={+(1 / k).toFixed(3)}
                      className={styles.leader}
                    />
                  ) : null,
                )}
                {labels.map((l) => (
                  <text
                    key={l.ranks.join("-")}
                    data-ranks={l.ranks.join(" ")}
                    x={+l.x.toFixed(2)}
                    y={+l.y.toFixed(2)}
                    textAnchor={l.anchor}
                    fontSize={+(LABEL_PX / k).toFixed(3)}
                    strokeWidth={+(3 / k).toFixed(3)}
                    className={styles.label}
                  >
                    {l.lines.map((line, i) => (
                      <tspan key={i} x={+l.x.toFixed(2)} dy={i === 0 ? 0 : +l.pitch.toFixed(3)}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                ))}
              </g>
            </svg>
          </div>
        </div>
        {footer}
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
