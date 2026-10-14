"use client";

import { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import { performedCodes } from "../data/performedCountries";

// world-atlas is a TopoJSON topology; convert its `countries` object to GeoJSON
// features once. Feature ids are numeric ISO 3166 strings — the same codes our
// performedCountries data uses — so a highlight is a Set lookup on +id.
const countries = (
  feature(
    worldData as unknown as Parameters<typeof feature>[0],
    (worldData as unknown as { objects: { countries: object } }).objects.countries as Parameters<typeof feature>[1]
  ) as unknown as GeoJSON.FeatureCollection
).features;
const graticule = geoGraticule10();

/** The globe's colours for each theme (site review 8 Oct 2026, Job 5 · J5-7,
 *  fix 104; owner J5-Q2: globe (b), themed). A canvas cannot read CSS custom
 *  properties as it paints, so the light values are the paper tokens'
 *  (globals.css: --bg, --bg-raised, --line) and the light gold, held to them
 *  by tests/ui/globeThemed. Dark is as built. Performed against the rest
 *  stays legible in both: 3.85:1 on paper, 6.4:1 on black. */
export const GLOBE_PALETTES = {
  light: {
    ocean: "#f7f4ee", // --bg: a paper ocean
    land: "#e6e0d4", // --bg-raised: where he has not performed
    performed: "#945e00", // the light gold
    stroke: "rgba(23,20,15,0.12)", // --line
    grid: "rgba(23,20,15,0.06)",
  },
  dark: {
    ocean: "#0d0f14",
    land: "#2a2a33",
    performed: "#ffb627",
    stroke: "#0a0a0b",
    grid: "rgba(245,244,240,0.05)",
  },
} as const;
export type GlobeTheme = keyof typeof GLOBE_PALETTES;

/** The theme the page is showing: <html data-theme> holds the resolved one
 *  ("system" is already resolved into it); dark when it is unset. */
export const pageTheme = (): GlobeTheme =>
  typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark";

/**
 * The rotating globe itself — a real orthographic projection with the back
 * hemisphere clipped, drawn to a canvas so the spin stays smooth. Countries he
 * has performed in are filled gold. It follows the page's theme, as the
 * masthead does: a paper globe on paper, the night globe on black, redrawn
 * when the theme flips.
 *
 * Just the drawing: no card, link or copy, so the desktop teaser and the mobile
 * home screen can each frame it their own way and neither can drift from the
 * other's geometry.
 *
 * It sizes itself to its parent (square, from the shorter side), pauses when
 * scrolled off-screen, and honours prefers-reduced-motion by drawing one static
 * frame instead of animating.
 */
export default function GlobeCanvas({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const projection = geoOrthographic().clipAngle(90).rotate([0, -12]);
    const path = geoPath(projection, ctx);
    let raf = 0;
    let lambda = 0;
    let size = 0;
    let visible = true;
    let colours = GLOBE_PALETTES[pageTheme()];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const s = Math.min(wrap.clientWidth, wrap.clientHeight);
      if (s <= 0 || s === size) return;
      size = s;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = s * dpr;
      canvas.height = s * dpr;
      canvas.style.width = `${s}px`;
      canvas.style.height = `${s}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.scale(s / 2 - 3).translate([s / 2, s / 2]);
    };

    const draw = () => {
      if (!size) return;
      ctx.clearRect(0, 0, size, size);
      projection.rotate([lambda, -12]);

      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = colours.ocean;
      ctx.fill();

      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = colours.grid;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      for (const c of countries) {
        ctx.beginPath();
        path(c);
        ctx.fillStyle = performedCodes.has(Number(c.id)) ? colours.performed : colours.land;
        ctx.fill();
        ctx.strokeStyle = colours.stroke;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    };

    const tick = () => {
      lambda = (lambda + 0.16) % 360;
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce || !visible) draw();
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible && !reduce) raf = requestAnimationFrame(tick);
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    // A theme flip repaints at once, spinning or not.
    const mo = new MutationObserver(() => {
      colours = GLOBE_PALETTES[pageTheme()];
      draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <span className={className} ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </span>
  );
}
