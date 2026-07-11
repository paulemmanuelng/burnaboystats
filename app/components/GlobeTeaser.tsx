"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import { performedCodes, countryCount, regionCount } from "../data/performedCountries";
import styles from "./GlobeTeaser.module.css";

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

// Spherical, slowly-rotating version of the performance map — home page only.
// Real orthographic projection (back hemisphere clipped), rendered to canvas so
// the spin is smooth. Pauses off-screen and honours reduced-motion.
export default function GlobeTeaser() {
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
    <Link
      href="/records/tours/map"
      className={styles.card}
      aria-label={`Where Burna Boy has performed — ${countryCount} countries across ${regionCount} regions`}
    >
      <span className={styles.globeWrap} ref={wrapRef} aria-hidden="true">
        <canvas ref={canvasRef} className={styles.globe} />
      </span>
      <div className={styles.text}>
        <span className={styles.kicker}>Live worldwide</span>
        <span className={styles.title}>Where he&apos;s performed</span>
        <span className={styles.stat}>
          <strong>{countryCount}</strong> countries · <strong>{regionCount}</strong> regions
          <span className={styles.arrow} aria-hidden="true"> →</span>
        </span>
      </div>
    </Link>
  );
}
