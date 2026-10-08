"use client";

import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import type { Region } from "../data/performedCountries";
import type { Box, TourMapCountry, TourMapProps } from "../lib/tourMapData";
import { HIT_PX, nearestPlayed, type HitDot } from "../lib/tourMapHit";
import { cardinalWord } from "../lib/plural";
import TourMapSvg, { DOT_PX, toMapUnits } from "./TourMapSvg";
import TourMapCard from "./TourMapCard";
import { useTourMapHits, codeAt } from "./useTourMapHits";
import { useTourMapUrl } from "./useTourMapUrl";
import styles from "../records/tours/map/map.module.css";

/**
 * The desktop tour map (above 900px): TM Desktop.dc.html, with the change
 * list of the 30 Sep 2026 design response where the two differ (the lede on
 * --type-lede, its wording, the biggest night's venue and date under its
 * label). The phone is a separate component, MobileTourMap.
 *
 * One selection, shown everywhere: a country picked on the map, in the
 * close-up, in the list, in the find box or by ?country= lights in each place
 * and pins the same card. Hover or keyboard focus previews; click or Enter
 * pins; Escape, the close button or a click on the sea clears.
 */

/** The close-up's px per map unit at 1440: its 260 × 224 box less the 1px
 *  border, 4px padding and 22px label band, over the 75 × 62 unit area —
 *  2.47 times the world map's 1.287 (item 8). Measured again once drawn. */
const CLOSEUP_SCALE = Math.min((260 - 10) / 75, (224 - 27) / 62);
const norm = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/** The find box narrows the list from the third letter, as TM Desktop.dc.html
 *  dims it ("Tor", B12); an exact country or city selects at any length. */
const FIND_MIN = 3;

export default function TourMapDesktop({ data }: { data: TourMapProps }) {
  const { countries, regions, order, totals, cities, views, closeup } = data;
  const byCode = useMemo(() => new Map(countries.map((c) => [c.code, c])), [countries]);
  const closeCountries = useMemo(() => countries.filter((c) => c.box && c.inCloseup), [countries]);
  const dots: HitDot[] = useMemo(() => countries.flatMap((c) => (c.dot ? [{ code: c.code, x: c.dot.x, y: c.dot.y }] : [])), [countries]);
  const hits = useTourMapHits(useMemo(() => countries.filter((c) => !c.dot).map((c) => c.code), [countries]));

  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [quiet, setQuiet] = useState(false);
  const [pinned, setPinned] = useState<number | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [lit, setLit] = useState<Region | null>(null);
  const [query, setQuery] = useState("");
  const [tabCode, setTabCode] = useState(order[0]);
  const [live, setLive] = useState("");
  const [side, setSide] = useState<"right" | "left">("right");
  const [frame, setFrame] = useState({ w: 1158, h: 521 });

  const frameRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<SVGSVGElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const url = useTourMapUrl(countries, (p) => {
    if (p?.kind === "played") {
      const c = countries.find((x) => x.a2 === p.a2)!;
      setPinned(c.code);
      setTabCode(c.code);
      setNote(null);
    } else if (p?.kind === "unplayed") {
      setPinned(null);
      setNote(`No documented show in ${p.name}.`);
    } else {
      setPinned(null);
      setNote(null);
    }
  });

  const pin = (code: number) => {
    const c = byCode.get(code)!;
    setPinned(code);
    setTabCode(code);
    setNote(null);
    setQuiet(false);
    url.open(c.a2);
    setLive("Pinned. Links follow.");
  };
  const clear = () => {
    const had = pinned !== null || note !== null;
    setPinned(null);
    setNote(null);
    setHovered(null);
    setQuiet(true);
    if (had) {
      url.close();
      setLive("Selection cleared.");
    }
  };

  // ── Pointer: the nearest played country within 22px (item 9) ────────────
  // Measured on the <svg> the handler sits on (the event's currentTarget), so
  // the world map and the close-up each read in their own units.
  const pick = (view: Box, e: PointerEvent<SVGSVGElement> | MouseEvent<SVGSVGElement>) => {
    const { x, y, k } = toMapUnits(e.currentTarget, view, e.clientX, e.clientY);
    return hits ? nearestPlayed(x, y, hits.filter((h) => view === views.world || closeCountries.some((c) => c.code === h.code)), dots, HIT_PX / k, DOT_PX / 2 / k) : codeAt(e.target);
  };
  const pointer = (view: Box) => ({
    onPointerMove: (e: PointerEvent<SVGSVGElement>) => {
      if (e.pointerType !== "mouse") return;
      const c = pick(view, e);
      if (c !== hovered) {
        setHovered(c);
        setQuiet(false);
      }
    },
    onPointerLeave: () => setHovered(null),
    onClick: (e: MouseEvent<SVGSVGElement>) => {
      const c = pick(view, e);
      if (c != null) pin(c);
      else clear();
    },
  });

  // ── Keyboard: one Tab stop, arrows through the 57 (item 14, §7) ─────────
  const focusCode = (code: number) => {
    setTabCode(code);
    worldRef.current?.querySelector<SVGElement>(`[data-code="${code}"]`)?.focus();
  };
  const onMapKey = (code: number, e: KeyboardEvent<SVGElement>) => {
    const i = order.indexOf(code);
    const k = e.key;
    const to =
      k === "ArrowRight" || k === "ArrowDown" ? i + 1 : k === "ArrowLeft" || k === "ArrowUp" ? i - 1 : k === "Home" ? 0 : k === "End" ? order.length - 1 : null;
    if (to !== null) {
      e.preventDefault();
      focusCode(order[Math.max(0, Math.min(order.length - 1, to))]);
    } else if (k === "Enter" || k === " ") {
      e.preventDefault();
      pin(code);
    } else if (k === "Escape") {
      e.preventDefault();
      clear();
    }
  };

  // ── The card: the pin, else a hover preview, else a keyboard preview ─────
  // A pinned card stays while the pointer crosses other countries on its way
  // to the card's links (TM Desktop.dc.html: cardCountry = selected || hover);
  // those countries still light on the map. A click moves the pin.
  const cardCode = pinned ?? hovered ?? (quiet ? null : focused);
  const card = cardCode != null ? byCode.get(cardCode) : undefined;
  const preview = card != null && cardCode !== pinned;

  // Frame size, for the card's height cap (the frame less 18px) and the
  // placement test below.
  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => setFrame({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Placement (item 4): top-right, 9px in; top-left when that rectangle
  // would cover the country the card is about (Australia at every width,
  // New Zealand at 1024). Measured before paint, so it never flickers.
  //
  // Measured again whenever the card's height can change: a preview becoming
  // a pin (same country, so the same `card`, but the link rows arrive and the
  // card grows: New Zealand at 1024 is 296px as a preview and 386px pinned,
  // and only the pinned card reaches it), the frame's height (the card's cap),
  // and any later resize of the card itself (a web font swapping in). Until
  // 1 Oct 2026 the deps were [card, frame.w, views.world], so hovering New
  // Zealand and then clicking it left the pinned card over it.
  useLayoutEffect(() => {
    const el = cardRef.current;
    const measure = () => {
      const want = (() => {
        if (!el || !card) return "right";
        const [wx, wy, ww] = views.world;
        const k = frame.w / ww;
        const r = card.dot ? DOT_PX / 2 : 0;
        const x0 = (card.box[0] - wx) * k - r, x1 = (card.box[0] + card.box[2] - wx) * k + r;
        const y0 = (card.box[1] - wy) * k - r, y1 = (card.box[1] + card.box[3] - wy) * k + r;
        const cx0 = frame.w - 9 - el.offsetWidth, cy1 = 9 + el.offsetHeight;
        return x1 >= cx0 && x0 <= frame.w - 9 && y0 <= cy1 && y1 >= 9 ? "left" : "right";
      })();
      setSide(want);
    };
    measure();
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [card, preview, frame.w, frame.h, views.world]);

  // ── The find box (item 11) ───────────────────────────────────────────────
  const q = norm(query);
  const found = useMemo(() => {
    if (!q) return null;
    const country = countries.find((c) => norm(c.name) === q);
    if (country)
      return {
        code: country.code,
        lead: `${country.name} · ${country.region} · `,
        slot: country.documented || `known from ${country.events.join("; ")}`,
      };
    const city = cities.find((c) => norm(c.city) === q);
    if (city) {
      const c = countries.find((x) => x.name === city.country)!;
      return { code: c.code, lead: `${city.city} · ${city.country} · `, slot: city.line };
    }
    const any = countries.some((c) => norm(c.name).startsWith(q)) || cities.some((c) => norm(c.city).startsWith(q));
    return any || q.length < FIND_MIN ? null : { code: null, lead: `No documented show in ‘${query.trim()}’.`, slot: "" };
  }, [q, query, countries, cities]);
  const rowMatches = (codes: number[]) =>
    q.length < FIND_MIN ||
    codes.some((code) => {
      const c = byCode.get(code)!;
      return norm(c.name).startsWith(q) || cities.some((x) => x.country === c.name && norm(x.city).startsWith(q));
    });
  const onFind = (v: string) => {
    setQuery(v);
    const nq = norm(v);
    const hit =
      countries.find((c) => norm(c.name) === nq) ??
      (() => {
        const city = cities.find((c) => norm(c.city) === nq);
        return city ? countries.find((x) => x.name === city.country) : undefined;
      })();
    if (nq && hit && hit.code !== pinned) pin(hit.code);
  };

  const showOnMap = (code: number) => {
    pin(code);
    frameRef.current?.scrollIntoView?.({ block: "nearest" });
  };

  const showCloseup = !(card && side === "left");
  const figs: { v: string; l: string; sub?: string }[] = [
    { v: String(totals.countries), l: "countries" },
    { v: String(totals.regions), l: "regions" },
    { v: String(totals.documentedShows), l: "documented shows" },
    { v: String(totals.cities), l: "cities" },
    { v: totals.years, l: "years documented" },
    { v: totals.biggestNight.tickets, l: "Biggest night, by reported tickets", sub: `${totals.biggestNight.venue} · ${totals.biggestNight.when}` },
  ];

  return (
    <div className={styles.page}>
      {/* "Skip to country list" is page.tsx's, ahead of the breadcrumb bar:
          the first stop inside the main content (item 14). */}
      <section className={`${styles.wrap} ${styles.head}`}>
        <span className={styles.kicker}>
          <span className={styles.tick} aria-hidden="true" />
          Live worldwide
        </span>
        <div className={styles.titleRow}>
          {/* The page's <h1>. Both layouts are in the DOM at once, one per
              layout, and only one is ever visible; the SEO gate checks the
              pairing. The split word stays gold (owner, 30 Sep 2026). */}
          <h1 className={styles.title}>
            Where he&apos;s <span className="inkText">performed</span>
          </h1>
          {/* Two lines at 16px on the 430px measure, so the map's foot reaches a
              1440x900 screen (item 5, Paul 1 Oct 2026: measured 905px, against
              934px for the four-line wording it replaced). */}
          <p className={styles.lede}>
            Every country Burna Boy has played, from stadium nights to festival headlines. Pick one to see its shows.
          </p>
        </div>
        <div className={styles.figs}>
          {figs.map((f) => (
            <div key={f.l} className={styles.fig}>
              <span className={styles.figValue}>{f.v}</span>
              <span className={styles.figLabel}>{f.l}</span>
              {f.sub && <span className={styles.figSub}>{f.sub}</span>}
            </div>
          ))}
        </div>
        <p className={styles.caveat}>
          Documented shows only. Tour itineraries on this site start in {totals.itinerariesFrom}, and cities are counted as each record
          names them.
        </p>
      </section>

      <figure className={`${styles.wrap} ${styles.figure}`}>
        <div
          className={styles.frame}
          ref={frameRef}
          onKeyDown={(e) => {
            // Escape from inside the card (its links, its close) clears too;
            // the map's own Escape has already been handled.
            if (e.key === "Escape" && !e.defaultPrevented && (pinned !== null || note !== null)) clear();
          }}
        >
          <TourMapSvg
            countries={countries}
            land={data.land}
            view={views.world}
            initialScale={1158 / 900}
            selected={pinned}
            hovered={hovered}
            focused={focused}
            litRegion={lit}
            area={showCloseup ? closeup : null}
            label="World map of the countries where a Burna Boy show is documented"
            svgRef={worldRef}
            className={styles.world}
            keys={{
              tabCode,
              onKeyDown: onMapKey,
              onFocus: (code, keyboard) => {
                setTabCode(code);
                setFocused(keyboard ? code : null);
                setQuiet(false);
              },
              onBlur: () => setFocused(null),
            }}
            {...pointer(views.world)}
          />

          {showCloseup && (
            <div className={styles.closeup}>
              <span className={styles.closeupLabel}>Western Europe</span>
              <div className={styles.closeupMap}>
                <TourMapSvg
                  countries={closeCountries}
                  land={data.closeupLand}
                  view={closeup}
                  initialScale={CLOSEUP_SCALE}
                  selected={pinned}
                  hovered={hovered}
                  focused={focused}
                  litRegion={lit}
                  {...pointer(closeup)}
                />
              </div>
            </div>
          )}

          {card && (
            <div className={`${styles.cardSlot} ${side === "left" ? styles.cardLeft : styles.cardRight}`}>
              <TourMapCard
                country={card}
                pinned={!preview}
                itinerariesFrom={totals.itinerariesFrom}
                maxHeight={frame.h - 18}
                cardRef={cardRef}
                onClose={() => {
                  // Focus back to the map first, then clear: the focus would
                  // otherwise open a preview of the country it lands on.
                  focusCode(tabCode);
                  clear();
                }}
              />
            </div>
          )}
          {!card && note && (
            <div className={`${styles.cardSlot} ${styles.cardRight}`}>
              <div className={styles.note} role="status">
                <span>{note}</span>
                <button type="button" className={styles.noteClose} aria-label="Close" onClick={clear}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="visuallyHidden" aria-live="polite">
          {live}
        </p>
        <figcaption className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={styles.swatch} aria-hidden="true" />
            Countries where a show is documented
          </span>
          <span className={styles.legendItem}>
            <span className={styles.swatchDot} aria-hidden="true" />
            Small islands and Kosovo, shown as dots
          </span>
          <span className={styles.legendItem}>
            <span className={styles.swatchLand} aria-hidden="true" />
            No documented show
          </span>
        </figcaption>
      </figure>

      <section className={`${styles.wrap} ${styles.breakdown}`} aria-labelledby="tm-regions-h">
        <div className={styles.listHead} id="country-list">
          <div>
            <span className={styles.kicker}>
              <span className={styles.tick} aria-hidden="true" />
              By region
            </span>
            <h2 id="tm-regions-h" className={styles.breakdownTitle}>
              {cap(cardinalWord(totals.regions))} regions, {cardinalWord(totals.continents)} continents
            </h2>
          </div>
          <div className={styles.find}>
            <label htmlFor="tm-find" className={styles.findLabel}>
              Find a country or city
            </label>
            <div className={styles.findField}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                id="tm-find"
                type="search"
                className={styles.findInput}
                placeholder="Country or city"
                autoComplete="off"
                value={query}
                onChange={(e) => onFind(e.target.value)}
              />
            </div>
          </div>
        </div>
        {found && (
          <div className={styles.result} role="status">
            <span className={styles.resultText}>
              {found.lead}
              {found.slot}
            </span>
            {found.code != null && (
              <button type="button" className={styles.resultLink} onClick={() => showOnMap(found.code!)}>
                Show on the map
              </button>
            )}
          </div>
        )}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Region</th>
                <th scope="col" className={styles.numCol}>
                  Count
                </th>
                <th scope="col">Countries</th>
              </tr>
            </thead>
            <tbody>
              {regions.map(({ region, codes }) => (
                <tr
                  key={region}
                  className={`${lit === region ? styles.rowLit : ""} ${rowMatches(codes) ? "" : styles.rowDim}`}
                  onMouseEnter={() => setLit(region)}
                  onMouseLeave={() => setLit(null)}
                  onFocus={() => setLit(region)}
                  onBlur={() => setLit(null)}
                >
                  <th scope="row" className={styles.regionCell}>
                    {region}
                  </th>
                  <td className={styles.numCol}>{codes.length}</td>
                  <td>
                    <div className={styles.names}>
                      {codes.map((code) => {
                        const c = byCode.get(code) as TourMapCountry;
                        return (
                          <button
                            key={code}
                            type="button"
                            className={`${styles.countryBtn}${code === pinned ? ` ${styles.countryOn}` : ""}${code === hovered ? ` ${styles.countryHot}` : ""}`}
                            aria-pressed={code === pinned}
                            onClick={() => showOnMap(code)}
                          >
                            {c.flag && <span aria-hidden="true">{c.flag} </span>}
                            {c.name}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td className={styles.numCol}>{totals.countries}</td>
                <td className={styles.tfootPlain}>{totals.regions} regions</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className={styles.note2}>
          Compiled from his tours, festivals and one-off shows, cross-checked against press and setlist records. Only documented shows
          are counted. For dates, venues and grosses, see the <Link href="/records/tours">Tours page</Link>.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.pills}`}>
        <Link href="/records/tours" className="btn btnSecondary">
          ← Back to tours
        </Link>
        <Link href="/records/tours/festivals" className="btn btnPrimary">
          Festivals &amp; shows ↗
        </Link>
        <Link href="/records/tours/revenue" className="btn btnSecondary">
          Highest-grossing shows ↗
        </Link>
      </section>
    </div>
  );
}
