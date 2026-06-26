"use client";

import { useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-50m.json";
import { countryByCode } from "../data/performedCountries";
import styles from "../records/tours/map/map.module.css";

const W = 900;
const H = 470;

// Build the country shapes once. d3-geo + topojson are deterministic, so the
// same paths render on the server (build) and the client (hydration).
const collection: any = feature(worldData as any, (worldData as any).objects.countries);
const projection = geoEqualEarth().fitSize([W, H], { type: "Sphere" } as any);
const pathGen = geoPath(projection as any);
const shapes: { code: number; d: string }[] = (collection.features as any[])
  .map((f) => ({ code: Number(f.id), d: pathGen(f) ?? "" }))
  .filter((s) => s.d);

export default function PerformanceMap() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const country = active != null ? countryByCode.get(active) : undefined;

  return (
    <div className={styles.mapWrap}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className={styles.svg}
        role="img"
        aria-label="World map highlighting every country Burna Boy has performed in"
      >
        {shapes.map((s, i) => {
          const hit = countryByCode.get(s.code);
          return (
            <path
              key={i}
              d={s.d}
              className={hit ? styles.on : styles.off}
              onMouseEnter={hit ? () => setActive(s.code) : undefined}
              onMouseMove={hit ? (e) => setPos({ x: e.clientX, y: e.clientY }) : undefined}
              onMouseLeave={
                hit
                  ? () => {
                      setActive(null);
                      setPos(null);
                    }
                  : undefined
              }
              onClick={
                hit
                  ? (e) => {
                      setActive(s.code);
                      setPos({ x: e.clientX, y: e.clientY });
                    }
                  : undefined
              }
            />
          );
        })}
      </svg>

      {country && pos && (
        <div className={styles.tooltip} style={{ left: pos.x, top: pos.y }}>
          <span className={styles.tipName}>
            {country.flag} {country.name}
          </span>
          <span className={styles.tipSub}>{country.highlight}</span>
        </div>
      )}
    </div>
  );
}
