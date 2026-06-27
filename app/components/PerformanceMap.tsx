"use client";

import { useState } from "react";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";
import {
  countryByCode,
  performedCountries,
  type PerformedCountry,
} from "../data/performedCountries";
import styles from "../records/tours/map/map.module.css";

const CARD_W = 230; // card width, reserved so we can keep it inside the viewport
const CARD_EST_H = 150; // rough card height, only used to pick above vs below
const GAP = 9; // space (for the arrow) between the card and the country

// Where a country sits on screen, so the card can anchor to it (not the cursor).
interface Anchor {
  cx: number; // country centre x (viewport px)
  top: number; // country top edge
  bottom: number; // country bottom edge
}

export default function PerformanceMap() {
  const [active, setActive] = useState<number | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);

  const country = active != null ? countryByCode.get(active) : undefined;

  const show = (code: number, rect: DOMRect) => {
    setActive(code);
    setAnchor({ cx: rect.left + rect.width / 2, top: rect.top, bottom: rect.bottom });
  };
  const clear = () => {
    setActive(null);
    setAnchor(null);
  };

  // Shared interaction wiring — the card anchors to the hovered/focused country
  // itself (centred just above it), so it never drifts off into the ocean.
  const wire = (c: PerformedCountry) => ({
    tabIndex: 0,
    role: "button" as const,
    "aria-label": `${c.name}: ${c.events.slice(0, 2).join("; ")}${c.more ? " and more" : ""}`,
    onMouseEnter: (e: React.MouseEvent<SVGElement>) => show(c.code, e.currentTarget.getBoundingClientRect()),
    onMouseLeave: clear,
    onClick: (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      show(c.code, e.currentTarget.getBoundingClientRect());
    },
    onFocus: (e: React.FocusEvent<SVGElement>) => show(c.code, e.currentTarget.getBoundingClientRect()),
    onBlur: clear,
    onKeyDown: (e: React.KeyboardEvent<SVGElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        show(c.code, e.currentTarget.getBoundingClientRect());
      }
    },
  });

  // Position the card centred over the country, above it (flipping below when the
  // country is near the top), with an arrow pointing at it. Clamped horizontally.
  let cardStyle: React.CSSProperties = {};
  let arrowLeft = CARD_W / 2;
  let placeAbove = true;
  if (anchor && typeof window !== "undefined") {
    placeAbove = anchor.top > CARD_EST_H + 24;
    const left = Math.min(Math.max(8, anchor.cx - CARD_W / 2), window.innerWidth - CARD_W - 8);
    const top = placeAbove ? anchor.top - GAP : anchor.bottom + GAP;
    cardStyle = {
      left,
      top,
      width: CARD_W,
      transform: placeAbove ? "translateY(-100%)" : "none",
    };
    arrowLeft = Math.min(Math.max(14, anchor.cx - left), CARD_W - 14);
  }

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

      {country && anchor && (
        <div
          className={`${styles.card} ${placeAbove ? styles.cardAbove : styles.cardBelow}`}
          style={cardStyle}
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
          <span className={styles.arrow} style={{ left: arrowLeft }} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
