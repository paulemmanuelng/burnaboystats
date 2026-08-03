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

const OCEAN = "#0d0f14";
const LAND = "#2a2a33";
const PERFORMED = "#ffb627";
const STROKE = "#0a0a0b";
const GRID = "rgba(245,244,240,0.05)";

/**
 * The rotating globe itself — a real orthographic projection with the back
 * hemisphere clipped, drawn to a canvas so the spin stays smooth. Countries he
 * has performed in are filled gold.
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
      ctx.fillStyle = OCEAN;
      ctx.fill();

      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = GRID;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      for (const c of countries) {
        ctx.beginPath();
        path(c);
        ctx.fillStyle = performedCodes.has(Number(c.id)) ? PERFORMED : LAND;
        ctx.fill();
        ctx.strokeStyle = STROKE;
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

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <span className={className} ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </span>
  );
}
