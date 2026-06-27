"use client";

import { useState } from "react";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";
import {
  countryByCode,
  performedCountries,
  type PerformedCountry,
} from "../data/performedCountries";
import styles from "../records/tours/map/map.module.css";

// Width we reserve for the floating card, so we can keep it inside the viewport.
const CARD_W = 230;

export default function PerformanceMap() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const country = active != null ? countryByCode.get(active) : undefined;

  const show = (code: number, x: number, y: number) => {
    setActive(code);
    setPos({ x, y });
  };
  const clear = () => {
    setActive(null);
    setPos(null);
  };

  // Shared interaction wiring for a country shape or dot — hover/tap follow the
  // pointer, focus/Enter anchor to the element centre (keyboard accessible).
  const wire = (c: PerformedCountry) => ({
    tabIndex: 0,
    role: "button" as const,
    "aria-label": `${c.name}: ${c.events.slice(0, 2).join("; ")}${c.more ? " and more" : ""}`,
    onMouseEnter: (e: React.MouseEvent<SVGElement>) => show(c.code, e.clientX, e.clientY),
    onMouseMove: (e: React.MouseEvent<SVGElement>) => setPos({ x: e.clientX, y: e.clientY }),
    onMouseLeave: clear,
    onClick: (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      show(c.code, e.clientX, e.clientY);
    },
    onFocus: (e: React.FocusEvent<SVGElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      show(c.code, r.left + r.width / 2, r.top + r.height / 2);
    },
    onBlur: clear,
    onKeyDown: (e: React.KeyboardEvent<SVGElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const r = e.currentTarget.getBoundingClientRect();
        show(c.code, r.left + r.width / 2, r.top + r.height / 2);
      }
    },
  });

  // Anchor the card near the cursor / tap, clamped to the viewport.
  const left =
    pos && typeof window !== "undefined"
      ? Math.min(Math.max(8, pos.x + 14), window.innerWidth - CARD_W - 8)
      : 0;
  const top = pos ? pos.y + 16 : 0;

  return (
    <div className={styles.mapWrap}>
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className={styles.svg}
        role="img"
        aria-label="World map highlighting the countries Burna Boy has performed in"
        onClick={(e) => {
          // Tapping the ocean / empty space dismisses the card.
          if (e.target === e.currentTarget) clear();
        }}
      >
        {/* Country shapes — gold where he's performed, muted otherwise. */}
        {worldShapes.map((s) => {
          const hit = countryByCode.get(s.code);
          if (!hit) return <path key={s.code} d={s.d} className={styles.off} />;
          return (
            <path
              key={s.code}
              d={s.d}
              className={`${styles.on}${active === s.code ? ` ${styles.activePath}` : ""}`}
              {...wire(hit)}
            />
          );
        })}

        {/* Dot markers for island nations too small to have a shape at 110m. */}
        {performedCountries.map((c) =>
          c.marker ? (
            <circle
              key={`dot-${c.code}`}
              cx={c.marker.x}
              cy={c.marker.y}
              r={3.2}
              className={`${styles.dot}${active === c.code ? ` ${styles.activePath}` : ""}`}
              {...wire(c)}
            />
          ) : null
        )}
      </svg>

      {country && pos && (
        <div
          className={styles.card}
          style={{ left, top, width: CARD_W }}
          role="status"
        >
          <span className={styles.cardName}>
            <span aria-hidden="true">{country.flag}</span> {country.name}
          </span>
          <ul className={styles.cardEvents}>
            {country.events.slice(0, 2).map((ev) => (
              <li key={ev}>{ev}</li>
            ))}
          </ul>
          {country.more && <span className={styles.cardMore}>…and more</span>}
        </div>
      )}
    </div>
  );
}
