"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import type { Region } from "../data/performedCountries";
import type { TourMapProps, ViewKey } from "../lib/tourMapData";
import { HIT_PX, nearestPlayed, type HitDot } from "../lib/tourMapHit";
import { cardinalWord } from "../lib/plural";
import TourMapSvg, { DOT_PX, toMapUnits } from "./TourMapSvg";
import TourMapPanel from "./TourMapPanel";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { useTourMapHits, codeAt } from "./useTourMapHits";
import { useTourMapUrl } from "./useTourMapUrl";
import styles from "./mobileTourMap.module.css";

/**
 * The phone "where he's performed" screen (900px and below): TM Phone.dc.html
 * and Deep Pages screen 20, with the design response's change list where
 * they differ. A separate screen, not the desktop page narrowed; the desktop
 * is TourMapDesktop.
 *
 * On the phone the unit is the REGION, not the zoom: four views (World ·
 * Europe · Africa · Caribbean) in one 260px frame, so the list below never
 * jumps when a chip changes; no + and −. A tap near a small place counts
 * (the nearest played country within 22px). The panel sits in the page flow
 * under the map, never over the heading or the map.
 *
 * The list under the map is not decoration. Eight small places have no shape
 * of their own and are drawn as dots, so the region rows are the accessible
 * reading of the map: each row names every country, and its header line is a
 * button that switches the map to that region.
 */

const VIEW_NAME: Record<ViewKey, string> = { world: "World", europe: "Europe", africa: "Africa", caribbean: "Caribbean" };
const CHIPS: ViewKey[] = ["world", "europe", "africa", "caribbean"];
/** A region row's view: its own, or World with its countries lit. */
const ROW_VIEW: Partial<Record<Region, ViewKey>> = { Europe: "europe", Africa: "africa", Caribbean: "caribbean" };
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const FRAME = { w: 364, h: 260 };

export default function MobileTourMap({ data }: { data: TourMapProps }) {
  const { countries, regions, order, totals, views } = data;
  const byCode = useMemo(() => new Map(countries.map((c) => [c.code, c])), [countries]);
  const dots: HitDot[] = useMemo(() => countries.flatMap((c) => (c.dot ? [{ code: c.code, x: c.dot.x, y: c.dot.y }] : [])), [countries]);
  const hits = useTourMapHits(useMemo(() => countries.filter((c) => !c.dot).map((c) => c.code), [countries]));

  const [view, setView] = useState<ViewKey>("world");
  const [dip, setDip] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [row, setRow] = useState<Region | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [tabCode, setTabCode] = useState(order[0]);
  const [live, setLive] = useState("");
  const [urlRead, setUrlRead] = useState(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const scrollOnOpen = useRef(false);

  const box = views[view];
  const changeView = (v: ViewKey) => {
    if (v === view) return;
    setView(v);
    setDip((d) => d + 1);
    setLive(`${VIEW_NAME[v]} view.`);
  };

  const url = useTourMapUrl(countries, (p, initial) => {
    if (p?.kind === "played") {
      const c = countries.find((x) => x.a2 === p.a2)!;
      setSelected(c.code);
      setTabCode(c.code);
      setView(c.home);
      setNote(null);
      // On a deep-link visit the page opens scrolled so the chips, the map
      // and the top of the panel are in view.
      if (initial) scrollOnOpen.current = true;
    } else if (p?.kind === "unplayed") {
      setSelected(null);
      setView("world");
      setNote(`No documented show in ${p.name}.`);
      if (initial) scrollOnOpen.current = true;
    } else {
      setSelected(null);
      setNote(null);
    }
    setUrlRead(true);
  });

  // The panel's space was reserved before paint (page.tsx sets
  // data-tm-deep on <html> when the address has ?country=), so nothing jumps
  // as it arrives. Released once the panel, the note, or nothing, is drawn.
  useLayoutEffect(() => {
    if (urlRead) document.documentElement.removeAttribute("data-tm-deep");
  }, [urlRead]);
  useEffect(() => {
    if (!scrollOnOpen.current) return;
    scrollOnOpen.current = false;
    if (window.matchMedia?.("(max-width: 900px)").matches) chipsRef.current?.scrollIntoView?.({ block: "start" });
  }, [selected, note]);

  const select = (code: number) => {
    setSelected(code);
    setTabCode(code);
    setNote(null);
    url.open(byCode.get(code)!.a2);
    setLive("Pinned. Links follow.");
  };
  const clear = () => {
    const had = selected !== null || note !== null;
    setSelected(null);
    setNote(null);
    if (had) {
      url.close();
      setLive("Selection cleared.");
    }
  };

  // ── Tap: the nearest played country within 22px, in the view shown ─────
  const onTap = (e: MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const { x, y, k } = toMapUnits(svg, box, e.clientX, e.clientY);
    const code = hits ? nearestPlayed(x, y, hits, dots, HIT_PX / k, DOT_PX / 2 / k) : codeAt(e.target);
    if (code != null) select(code);
    else clear();
  };

  // ── What the frame shows: the view, widened to the frame's shape ────────
  const visible = (code: number) => {
    const c = byCode.get(code)!;
    const k = Math.min(FRAME.w / box[2], FRAME.h / box[3]);
    const w = FRAME.w / k, h = FRAME.h / k;
    const x0 = box[0] + box[2] / 2 - w / 2, y0 = box[1] + box[3] / 2 - h / 2;
    const [bx, by, bw, bh] = c.box;
    return bx <= x0 + w && bx + bw >= x0 && by <= y0 + h && by + bh >= y0;
  };

  // ── Keyboard: one Tab stop, arrows through the 57 (§7) ──────────────────
  const onMapKey = (code: number, e: KeyboardEvent<SVGElement>) => {
    const i = order.indexOf(code);
    const k = e.key;
    const to =
      k === "ArrowRight" || k === "ArrowDown" ? i + 1 : k === "ArrowLeft" || k === "ArrowUp" ? i - 1 : k === "Home" ? 0 : k === "End" ? order.length - 1 : null;
    if (to !== null) {
      e.preventDefault();
      const next = order[Math.max(0, Math.min(order.length - 1, to))];
      // Outside the view: switch to the country's home view (instant under
      // reduced motion). A country already in view keeps the view.
      if (!visible(next)) changeView(byCode.get(next)!.home);
      setTabCode(next);
      svgRef.current?.querySelector<SVGElement>(`[data-code="${next}"]`)?.focus();
    } else if (k === "Enter" || k === " ") {
      e.preventDefault();
      select(code);
    } else if (k === "Escape") {
      e.preventDefault();
      clear();
    }
  };

  // ── Region rows: the header line is the button (items 13, 82) ──────────
  const onRow = (region: Region) => {
    changeView(ROW_VIEW[region] ?? "world");
    setRow(region);
    chipsRef.current?.scrollIntoView?.({ block: "start", behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  // World with a region lit: its countries in the hover style, outlined, so
  // the UAE (4.5 × 4.7px at World) still shows (design response §2).
  const marked = useMemo(
    () => (row && !ROW_VIEW[row] ? new Set(regions.find((r) => r.region === row)?.codes ?? []) : undefined),
    [row, regions],
  );

  const panel = selected != null ? byCode.get(selected) : undefined;
  const figs = [
    { v: String(totals.documentedShows), l: "documented shows" },
    { v: String(totals.cities), l: "cities" },
    { v: totals.years, l: "years documented" },
  ];

  return (
    <div className={styles.screen}>
      {/* "Skip to country list" (item 14): the first stop inside the main
          content, ahead of the back bar and the map. */}
      <a href="#country-list-m" className={styles.skip}>
        Skip to country list
      </a>

      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/records/tours" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Tour map</span>
        <span className={styles.badge}>{totals.countries} countries</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.kicker}>
          <span className={styles.tick} aria-hidden="true" />
          Live worldwide
        </span>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the
            document carries two, one per layout, and only ever one is
            visible. The SEO gate checks that pairing rather than a bare
            count. */}
        <h1 className={styles.title}>
          Where he&apos;s <span className={styles.gold}>performed</span>
        </h1>
        <p className={styles.lede}>
          {totals.countries} countries across {totals.regions} regions.
        </p>
        <div className={styles.figs}>
          {figs.map((f) => (
            <div key={f.l} className={styles.fig}>
              <span className={styles.figValue}>{f.v}</span>
              <span className={styles.figLabel}>{f.l}</span>
            </div>
          ))}
        </div>

        {/* The views (item 7): an ink fill with a --bg label when current,
            the Dai Dai toggle's pattern; not gold, which is for live
            figures and actions. */}
        <div ref={chipsRef} className={styles.chips} role="radiogroup" aria-label="Map view">
          {CHIPS.map((k) => (
            <button
              key={k}
              type="button"
              role="radio"
              aria-checked={view === k}
              tabIndex={view === k ? 0 : -1}
              className={`${styles.chip}${view === k ? ` ${styles.chipOn}` : ""}`}
              onClick={() => {
                changeView(k);
                setRow(null);
              }}
              onKeyDown={(e) => {
                const i = CHIPS.indexOf(k);
                const to = e.key === "ArrowRight" || e.key === "ArrowDown" ? i + 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? i - 1 : null;
                if (to === null) return;
                e.preventDefault();
                const next = CHIPS[(to + CHIPS.length) % CHIPS.length];
                changeView(next);
                setRow(null);
                chipsRef.current?.querySelector<HTMLButtonElement>(`[data-view="${next}"]`)?.focus();
              }}
              data-view={k}
            >
              {VIEW_NAME[k]}
            </button>
          ))}
        </div>

        <div className={styles.mapFrame}>
          <div className={`${styles.mapDip} ${dip % 2 ? styles.dipA : dip ? styles.dipB : ""}`}>
            <TourMapSvg
              countries={countries}
              land={data.land}
              view={box}
              initialScale={Math.min(FRAME.w / box[2], FRAME.h / box[3])}
              selected={selected}
              hovered={null}
              focused={focused}
              marked={marked}
              label="World map of the countries where a Burna Boy show is documented"
              svgRef={svgRef}
              keys={{
                tabCode,
                onKeyDown: onMapKey,
                onFocus: (code, keyboard) => {
                  setTabCode(code);
                  setFocused(keyboard ? code : null);
                },
                onBlur: () => setFocused(null),
              }}
              onClick={onTap}
            />
          </div>
        </div>
        <p className={styles.hint}>
          {view === "world" ? "Tap a country for its shows. A tap near a small place counts." : `${VIEW_NAME[view]} view. Tap a country for its shows.`}
        </p>
        <p className={styles.caveat}>
          Documented shows only. Tour itineraries on this site start in {totals.itinerariesFrom}, and cities are counted as each record
          names them.
        </p>
        <p className="visuallyHidden" aria-live="polite">
          {live}
        </p>

        <div className={styles.panelSlot}>
          {panel ? (
            <TourMapPanel country={panel} itinerariesFrom={totals.itinerariesFrom} onClose={clear} />
          ) : note ? (
            <div className={styles.note} role="status">
              <span>{note}</span>
              <button type="button" className={styles.noteClose} aria-label="Close" onClick={clear}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>

        {/* Regions */}
        <span id="country-list-m" className={`${styles.kicker} ${styles.listKicker}`}>
          <span className={styles.tick} aria-hidden="true" />
          By region
        </span>
        <h2 className={styles.h2}>
          {cap(cardinalWord(totals.regions))} regions, {cardinalWord(totals.continents)} continents
        </h2>
        <div className={styles.regions}>
          {regions.map(({ region, codes }) => (
            <div key={region} className={`${styles.region}${row === region ? ` ${styles.regionOn}` : ""}`}>
              <button type="button" className={styles.regionTop} aria-label={`Show ${region} on the map`} onClick={() => onRow(region)}>
                <span className={styles.regionName}>{region}</span>
                <span className={styles.regionCount}>{codes.length}</span>
              </button>
              <p className={styles.regionList}>
                {codes
                  .map((code) => {
                    const c = byCode.get(code)!;
                    // A flag stays on the line of its name.
                    return `${c.flag ? `${c.flag} ` : ""}${c.name.replace(/ /g, " ")}`;
                  })
                  // A separator ends the line it follows, never starts one:
                  // "· Switzerland" opened a line of Europe (F-12, 4 Oct 2026).
                  .join("\u00a0· ")}
              </p>
            </div>
          ))}
        </div>

        <p className={styles.footNote}>
          {cap(cardinalWord(totals.dots))} small places, {cardinalWord(totals.caribbeanDots)} Caribbean islands plus{" "}
          {totals.otherDotNames.join(" and ")}, are shown as dots. The list above names every country.
        </p>
      </div>

      <div className={styles.spacer} />

      <div className={styles.actionBar}>
        <Link href="/records/tours/festivals" className={styles.actionPrimary}>
          Festivals &amp; shows
        </Link>
      </div>
    </div>
  );
}
