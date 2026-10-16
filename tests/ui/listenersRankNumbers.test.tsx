import { readFileSync } from "node:fs";
import { act, fireEvent } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenerMap, { AMERICAS_WEST_OF, chipView, REGIONS, ZOOM_BTN_PX, ZOOM_GAP_PX, ZOOM_INSET_PX } from "../../app/components/ListenerMap";
import ListenersPage from "../../app/music/listeners/page";
import phoneStyles from "../../app/components/mobileListeners.module.css";
import { listenerCities } from "../../app/data/listeners";
import { MAP_W } from "../../app/data/worldShapes";
import { projectEqualEarth } from "../../app/lib/equalEarth";
import {
  dotRadius,
  drawnRadius,
  GAP_PX,
  LABEL_ADVANCE_PX,
  LABEL_ASCENT_PX,
  LABEL_DESCENT_PX,
  LABEL_PX,
  LABELLED,
  placeLabels,
  RMAX_PHONE,
} from "../../app/lib/listenerDots";

/**
 * listenersRankNumbers (owner ruling 15 Oct 2026, #3, "yes to all"): on the
 * phone's World view the five biggest cities carry their ranks, 1 to 5, by
 * their dots — not the shared and stacked names, which covered other cities
 * there ("Lagos · Port Harcourt · Abuja" ran west over Bogotá, "London" lay
 * over the German dots). The names stay in the list under the map and in the
 * tap card. The phone's Americas chip names the Americas' own biggest
 * cities; it named none, only the five in Europe and Africa at its edge.
 *
 * Every expectation is worked out here from the 50 rows and the coordinates,
 * not from the helpers the map labels with.
 */

const byRank = [...listenerCities].sort((a, b) => a.rank - b.rank);
const top = byRank.slice(0, LABELLED);
/** The Americas' biggest, worked out here: every city of an American country,
 *  by rank. */
const AMERICAN_COUNTRIES = new Set(["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "VE", "EC", "BO", "UY", "PY", "CU", "DO", "JM", "PR", "GT", "HN", "SV", "NI", "CR", "PA", "TT", "HT", "BS", "BB"]);
const americas = byRank.filter((c) => AMERICAN_COUNTRIES.has(c.code)).slice(0, LABELLED);

let root: Root | null = null;
let host: HTMLDivElement | null = null;
function stubViewport(w: number) {
  class RO {
    constructor(private cb: ResizeObserverCallback) {}
    observe() {
      this.cb([{ contentRect: { width: w, height: w / 2 } } as unknown as ResizeObserverEntry], this as unknown as ResizeObserver);
    }
    unobserve() {}
    disconnect() {}
  }
  vi.stubGlobal("ResizeObserver", RO);
}
afterEach(() => {
  act(() => root?.unmount());
  host?.remove();
  root = host = null;
  vi.unstubAllGlobals();
});
function mount(layout: "phone" | "desktop", w: number) {
  stubViewport(w);
  host = document.body.appendChild(document.createElement("div"));
  root = createRoot(host);
  act(() => root!.render(<ListenerMap layout={layout} />));
  return host;
}
const press = (el: HTMLElement, label: string) => {
  const chip = [...el.querySelectorAll('[role="radio"]')].find((b) => b.textContent === label)!;
  act(() => fireEvent.click(chip));
};

type Box = { x0: number; x1: number; y0: number; y1: number };
type Dot = { rank: number; x: number; y: number; r: number };
/** The labels as drawn: ranks, text and one box per line, in CSS px. */
function drawn(el: HTMLElement) {
  const ts = [...el.querySelectorAll("svg text")];
  const k = LABEL_PX / Number(ts[0].getAttribute("font-size"));
  const labels = ts.map((t) => {
    const spans = [...t.querySelectorAll("tspan")];
    const raw = spans.map((s) => s.textContent ?? "");
    const x = Number(t.getAttribute("x"));
    const y = Number(t.getAttribute("y"));
    const pitch = Number(spans[1]?.getAttribute("dy") ?? 0);
    const end = t.getAttribute("text-anchor") === "end";
    const boxes: Box[] = raw.map((line, i) => {
      const w = [...line].length * LABEL_ADVANCE_PX;
      const x0 = end ? x * k - w : x * k;
      const base = (y + i * pitch) * k;
      return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
    });
    return { ranks: t.getAttribute("data-ranks")!.split(" ").map(Number), text: raw.join(" "), boxes };
  });
  const dots: Dot[] = [...el.querySelectorAll("circle[data-code]")].map((c) => ({
    rank: Number(c.getAttribute("data-code")),
    x: Number(c.getAttribute("cx")) * k,
    y: Number(c.getAttribute("cy")) * k,
    r: Number(c.getAttribute("r")) * k,
  }));
  return { k, labels, dots };
}
/** How far a dot's edge sits from a label, in CSS px (0: it covers the dot). */
const gap = (bs: Box[], d: Dot) =>
  Math.min(...bs.map((b) => Math.max(0, Math.hypot(Math.max(b.x0, Math.min(d.x, b.x1)) - d.x, Math.max(b.y0, Math.min(d.y, b.y1)) - d.y) - d.r)));

/** What a set of labels gets wrong on the phone's World view: a city covered,
 *  or a dot nearer a rank than its own (a dot that overlaps its own aside). */
function wrongs(labels: { ranks: number[]; text: string; boxes: Box[] }[], dots: Dot[]): string[] {
  return labels.flatMap((l) => {
    const own = dots.filter((d) => l.ranks.includes(d.rank));
    const ownGap = Math.min(...own.map((d) => gap(l.boxes, d)));
    return dots
      .filter((d) => !l.ranks.includes(d.rank))
      .flatMap((d) => {
        const g = gap(l.boxes, d);
        const name = byRank[d.rank - 1].city;
        if (g === 0) return [`"${l.text}" covers ${name}`];
        const overlapsOwn = own.some((o) => Math.hypot(o.x - d.x, o.y - d.y) < o.r + d.r);
        return g <= ownGap && !overlapsOwn ? [`"${l.text}" nearer ${name}`] : [];
      });
  });
}

const PHONES = [282, 337, 364]; // the map at 320, 375 and 402

/** The view the Americas chip opens on, in CSS px when one unit is `k` px. */
const americasView = (k: number): Box => {
  const v = chipView(REGIONS.find((x) => x.key === "americas")!);
  return { x0: v.x0 * k, y0: v.y0 * k, x1: v.x1 * k, y1: v.y1 * k };
};
/** A label the view's edge cuts: neither wholly inside the view nor wholly
 *  past its edge (it shows half a name when the chip opens). */
const cut = (bs: Box[], v: Box) =>
  !bs.every((b) => b.x0 >= v.x0 - 0.01 && b.x1 <= v.x1 + 0.01 && b.y0 >= v.y0 - 0.01 && b.y1 <= v.y1 + 0.01) &&
  !bs.every((b) => b.x1 <= v.x0 + 0.01 || b.x0 >= v.x1 - 0.01 || b.y1 <= v.y0 + 0.01 || b.y0 >= v.y1 - 0.01);
/** The 30°W meridian's x at a viewBox y, worked out from the projection (an
 *  Equal Earth y is its latitude's alone, and falls as the latitude rises). */
function meridianX(y: number) {
  let lo = -90;
  let hi = 90;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (projectEqualEarth(AMERICAS_WEST_OF, mid).y > y) lo = mid;
    else hi = mid;
  }
  return projectEqualEarth(AMERICAS_WEST_OF, (lo + hi) / 2).x;
}
/** Lines naming only cities east of 30°W that start west of it, as text. */
const westward = (labels: { ranks: number[]; text: string; boxes: Box[] }[], k: number) =>
  labels
    .filter((l) => l.ranks.every((rank) => byRank[rank - 1].lon >= AMERICAS_WEST_OF))
    .filter((l) => l.boxes.some((b) => b.x0 / k < meridianX((b.y0 + b.y1) / 2 / k)))
    .map((l) => l.text);
/** A placeLabels result as drawn boxes, CSS px. */
const asDrawn = (ls: { ranks: number[]; lines: string[]; x: number; y: number; end: boolean; pitch: number }[], k: number) =>
  ls.map((l) => ({
    ranks: l.ranks,
    text: l.lines.join(" "),
    boxes: l.lines.map((line, i) => {
      const w = [...line].length * LABEL_ADVANCE_PX;
      const x0 = l.end ? l.x * k - w : l.x * k;
      const base = (l.y + i * l.pitch) * k;
      return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
    }),
  }));

describe("the phone's World view numbers the five (owner ruling 15 Oct 2026, #3)", () => {
  it.each(PHONES)("at %ipx: the ranks 1–5, one to a dot, each beside its own and covering no city", (w) => {
    const el = mount("phone", w);
    const { labels, dots } = drawn(el);
    expect(labels.map((l) => l.text)).toEqual(top.map((c) => String(c.rank)));
    expect(labels.map((l) => l.ranks)).toEqual(top.map((c) => [c.rank]));
    expect(wrongs(labels, dots)).toEqual([]);
    for (const l of labels) {
      const own = dots.find((d) => d.rank === l.ranks[0])!;
      // Beside it: GAP_PX from its edge, a corner's diagonal at most, no leader.
      expect(gap(l.boxes, own), l.text).toBeLessThanOrEqual(GAP_PX * Math.SQRT2 + 0.1);
      for (const b of l.boxes) expect(b.x0 >= 0 && b.y0 >= 0, l.text).toBe(true);
    }
    expect(el.querySelectorAll("svg line[data-leader]")).toHaveLength(0);
  });

  it("the names stay: each dot's accessible name and the tap card name the city", () => {
    const el = mount("phone", 364);
    for (const c of top) {
      const dot = el.querySelector(`circle[data-code="${c.rank}"]`)!;
      expect(dot.getAttribute("aria-label")).toMatch(new RegExp(`^${c.city}, `));
      act(() => fireEvent.focus(dot));
      expect(el.querySelector('[role="status"]')?.textContent).toContain(c.city);
    }
  });

  it("the names stay in the phone's list of the 50, and the hint says what the numbers are", () => {
    const d = new DOMParser().parseFromString(renderToStaticMarkup(<ListenersPage />), "text/html");
    const rows = [...d.querySelectorAll(`.${phoneStyles.cities} li`)].map((li) => li.textContent ?? "");
    for (const c of top) expect(rows[c.rank - 1]).toContain(c.city);
    const hint = d.querySelector(`.${phoneStyles.mapHint}`)?.textContent?.replace(/\s+/g, " ");
    expect(hint).toContain("the World and Americas views number the first five");
  });

  it("the laptop's World view still names all five, each on its own", () => {
    const el = mount("desktop", 1278);
    expect(drawn(el).labels.map((l) => l.text)).toEqual(top.map((c) => c.city));
  });

  it("a chip still names: Europe and West Africa set names on the phone, not ranks", () => {
    const el = mount("phone", 364);
    for (const chip of ["Europe", "West Africa"]) {
      press(el, chip);
      const texts = drawn(el).labels.map((l) => l.text);
      expect(texts.some((t) => /^\d+$/.test(t)), chip).toBe(false);
      for (const c of top) expect(texts.join(" | "), chip).toContain(c.city);
    }
  });

  it("negative control: main's World view on the 375 phone covered Bogotá and nine European dots", () => {
    // placeLabels' output at 337px on main a9574c64 (ListenerMap.tsx:150–155,
    // `world: true`): the shared label end-anchored left of Nigeria, London's
    // name and Madrid's right of their dots. Viewbox units.
    const k = 337 / MAP_W;
    const SHIPPED = [
      { ranks: [1, 3, 4], lines: ["Lagos ·", "Port Harcourt · Abuja"], x: 428.52, y: 201.37, end: true, pitch: 42.73 },
      { ranks: [2], lines: ["London"], x: 473.81, y: 83.98, end: false, pitch: 42.73 },
      { ranks: [5], lines: ["Madrid"], x: 461.27, y: 126.8, end: false, pitch: 42.73 },
    ].map((l) => ({
      ranks: l.ranks,
      text: l.lines.join(" "),
      boxes: l.lines.map((line, i) => {
        const w = [...line].length * LABEL_ADVANCE_PX;
        const x0 = l.end ? l.x * k - w : l.x * k;
        const base = (l.y + i * l.pitch) * k;
        return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
      }),
    }));
    const { dots } = drawn(mount("phone", 337));
    const shipped = wrongs(SHIPPED, dots);
    expect(shipped).toContain('"Lagos · Port Harcourt · Abuja" covers Bogotá');
    expect(shipped.filter((s) => s.startsWith('"London" covers'))).toHaveLength(9);
  });
});

describe("the phone's Americas chip names the Americas' own biggest cities (owner ruling 15 Oct 2026, #3)", () => {
  it("the meridian splits the 50: every city west of it is American, every other east of it", () => {
    expect(REGIONS.find((r) => r.key === "americas")!.westOf).toBe(AMERICAS_WEST_OF);
    for (const c of listenerCities) expect(c.lon < AMERICAS_WEST_OF, c.city).toBe(AMERICAN_COUNTRIES.has(c.code));
    // Today: São Paulo, Mexico City, Santiago, Montreal and Toronto.
    expect(americas).toHaveLength(LABELLED);
  });

  it.each(PHONES)("at %ipx: each of the five has a label, and every label stays clear of every other city", (w) => {
    const el = mount("phone", w);
    press(el, "Americas");
    const { labels, dots } = drawn(el);
    for (const c of americas) expect(labels.some((l) => l.ranks.includes(c.rank) && l.text.includes(c.city)), c.city).toBe(true);
    for (const l of labels) for (const d of dots.filter((x) => !l.ranks.includes(x.rank))) expect(gap(l.boxes, d), `${l.text} on ${byRank[d.rank - 1].city}`).toBeGreaterThan(0);
    // The world's five keep theirs, numbered as on the World view: their
    // shared names ran west of Nigeria over the Caribbean here.
    const ranked = top.map((c) => labels.find((l) => l.ranks.includes(c.rank)));
    expect(ranked.map((l) => l?.text)).toEqual(top.map((c) => String(c.rank)));
    expect(wrongs(ranked.filter((l) => !!l), dots)).toEqual([]);
  });

  it.each(PHONES)("at %ipx: no label is cut by the view's edge — each sits wholly inside the view the chip opens on, or wholly past it", (w) => {
    const el = mount("phone", w);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    expect(labels.filter((l) => cut(l.boxes, americasView(k))).map((l) => l.text)).toEqual([]);
  });

  it("at the 320 phone: Montreal and Toronto, with no clear spot in the view for one shared label, are named city by city, neither cut by its edge", () => {
    const el = mount("phone", 282);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    const v = americasView(k);
    const inside = (bs: Box[]) => bs.every((b) => b.x0 >= v.x0 && b.x1 <= v.x1 && b.y0 >= v.y0 && b.y1 <= v.y1);
    const placed = ["Montreal", "Toronto"].map((city) => {
      const rank = byRank.find((c) => c.city === city)!.rank;
      const l = labels.find((x) => x.ranks.includes(rank))!;
      expect(l.ranks, city).toEqual([rank]);
      expect(l.text, city).toBe(city);
      expect(cut(l.boxes, v), city).toBe(false);
      return { city, inside: inside(l.boxes) };
    });
    // Toronto inside the view; Montreal, whose spots inside it are the ranks'
    // ("5" by Madrid) and Toronto's, just past its top edge, whole.
    expect(placed).toEqual([
      { city: "Montreal", inside: false },
      { city: "Toronto", inside: true },
    ]);
  });

  it("negative control: this lane's first build cut \"Montreal · Toronto\" at the 320 phone's view top, y 28–44 against 36", () => {
    // placeLabels' output at 282px before the review fix (viewBox units).
    const k = (282 * 1.5) / MAP_W;
    const [shipped] = asDrawn([{ ranks: [11, 12], lines: ["Montreal · Toronto"], x: 259.82, y: 85.73, end: true, pitch: 34.04 }], k);
    const v = americasView(k);
    expect(v.y0).toBeCloseTo(36.3, 1);
    expect(shipped.boxes[0].y0).toBeCloseTo(28.3, 1);
    expect(cut(shipped.boxes, v)).toBe(true);
  });

  /** The + and − buttons over the view, CSS px, worked out from the CSS's
   *  numbers (checked against worldMap.module.css below). */
  const buttons = (v: Box): Box => ({ x0: v.x1 - ZOOM_INSET_PX - ZOOM_BTN_PX, x1: v.x1 - ZOOM_INSET_PX, y0: v.y0 + ZOOM_INSET_PX, y1: v.y0 + ZOOM_INSET_PX + 2 * ZOOM_BTN_PX + ZOOM_GAP_PX });
  const under = (bs: Box[], z: Box) => bs.some((b) => b.x0 < z.x1 && z.x0 < b.x1 && b.y0 < z.y1 && z.y0 < b.y1);

  it("the buttons' box is the stylesheet's: 10px in from the corner, two 44px buttons for a thumb, 6px apart", () => {
    const css = readFileSync("app/components/worldMap.module.css", "utf8");
    const zoom = css.match(/\.zoom \{([^}]*)\}/)![1];
    expect(zoom).toContain(`top: ${ZOOM_INSET_PX}px;`);
    expect(zoom).toContain(`right: ${ZOOM_INSET_PX}px;`);
    expect(zoom).toContain(`gap: ${ZOOM_GAP_PX}px;`);
    expect(css).toMatch(new RegExp(`@media \\(pointer: coarse\\) \\{\\s*\\.zoomBtn \\{ width: ${ZOOM_BTN_PX}px; height: ${ZOOM_BTN_PX}px; \\}`));
  });

  it.each(PHONES)("at %ipx: no label sits under the + and − buttons in the view the chip opens on", (w) => {
    const el = mount("phone", w);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    const z = buttons(americasView(k));
    expect(labels.filter((l) => under(l.boxes, z)).map((l) => l.text)).toEqual([]);
  });

  it("negative control: the first fix set Abuja's \"4\" under \"+\" at the 320 phone's Americas chip", () => {
    const k = (282 * 1.5) / MAP_W;
    const [four] = asDrawn([{ ranks: [4], lines: ["4"], x: 486.045, y: 213.111, end: false, pitch: 34.04 }], k);
    expect(under(four.boxes, buttons(americasView(k)))).toBe(true);
  });

  /** Ranks with a label level with them (half a line or more side by side)
   *  nearer than two letters, as text. */
  const crowded = (labels: { ranks: number[]; text: string; boxes: Box[] }[]) =>
    labels
      .filter((l) => /^\d+$/.test(l.text))
      .flatMap((r) =>
        labels
          .filter((o) => o !== r)
          .filter((o) =>
            o.boxes.some((b) =>
              r.boxes.some((a) => Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0) >= (LABEL_ASCENT_PX + LABEL_DESCENT_PX) / 2 && Math.max(b.x0 - a.x1, a.x0 - b.x1) < 2 * LABEL_ADVANCE_PX - 0.01),
            ),
          )
          .map((o) => `${r.text} by ${o.text}`),
      );

  it.each(PHONES)("at %ipx: a rank keeps two letters clear of any label level with it, on the World view and the Americas chip", (w) => {
    const el = mount("phone", w);
    for (const chip of ["World", "Americas"]) {
      press(el, chip);
      expect(crowded(drawn(el).labels), chip).toEqual([]);
    }
  });

  it("negative control: the first fix set Madrid's \"5\" half a pixel after \"Montreal\" at the 320 phone's Americas chip", () => {
    const k = (282 * 1.5) / MAP_W;
    const shipped = asDrawn(
      [
        { ranks: [5], lines: ["5"], x: 440.685, y: 146.463, end: false, pitch: 34.04 },
        { ranks: [11], lines: ["Montreal"], x: 325.166, y: 150.098, end: false, pitch: 34.04 },
      ],
      k,
    );
    expect(shipped[0].boxes[0].x0 - shipped[1].boxes[0].x1).toBeCloseTo(0.4, 1);
    expect(crowded(shipped)).toEqual(["5 by Montreal"]);
  });

  it("negative control: with the names set before the ranks, Madrid's \"5\" was pushed west to Lisbon's side at the 320 phone's Americas chip", () => {
    // That build's placeLabels output at 282px (viewBox units): "Montreal"
    // took the spot under Madrid, and the "5" went left of it with a leader.
    const k = (282 * 1.5) / MAP_W;
    const shipped = asDrawn([{ ranks: [5], lines: ["5"], x: 392.224, y: 112.611, end: false, pitch: 34.04 }], k);
    const el = mount("phone", 282);
    press(el, "Americas");
    expect(wrongs(shipped, drawn(el).dots)).toContain('"5" nearer Lisbon');
  });

  it.each(PHONES)("at %ipx: no label for a city east of 30°W starts west of it, at any chip", (w) => {
    const el = mount("phone", w);
    for (const chip of ["World", "Europe", "West Africa", "Americas"]) {
      press(el, chip);
      const { k, labels } = drawn(el);
      expect(westward(labels, k), chip).toEqual([]);
    }
  });

  it("negative control: this lane's first build set \"Lagos · Port Harcourt · Abuja\" from x 9 to 204 at the 320 phone's Americas chip, over the Caribbean", () => {
    const k = (282 * 1.5) / MAP_W;
    const shipped = asDrawn([{ ranks: [1, 3, 4], lines: ["Lagos · Port Harcourt · Abuja"], x: 433.99, y: 203.5, end: true, pitch: 34.04 }], k);
    expect(shipped[0].boxes[0].x0).toBeCloseTo(8.7, 1);
    expect(shipped[0].boxes[0].x1).toBeCloseTo(204, 0);
    expect(westward(shipped, k)).toEqual(["Lagos · Port Harcourt · Abuja"]);
  });

  it.each(PHONES)("at %ipx: the names sit in the view the chip opens on where a clear spot there exists — more of them than past its edge", (w) => {
    const r = REGIONS.find((x) => x.key === "americas")!;
    const v = chipView(r);
    const el = mount("phone", w);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    const inView = (bs: Box[]) => bs.every((b) => b.x0 >= v.x0 * k - 0.01 && b.x1 <= v.x1 * k + 0.01 && b.y0 >= v.y0 * k - 0.01 && b.y1 <= v.y1 * k + 0.01);
    const seen = (ls: { ranks: number[]; boxes: Box[] }[]) => americas.filter((c) => ls.some((l) => l.ranks.includes(c.rank) && inView(l.boxes))).map((c) => c.city);
    // The same names, placed without the view (main's rule: the first clear
    // spot, wherever the view's edge falls).
    const kk = (w * r.zoom) / MAP_W;
    const all = byRank.map((c) => ({ rank: c.rank, city: c.city, code: c.code, ...projectEqualEarth(c.lon, c.lat), r: drawnRadius(dotRadius(c.listeners, byRank[0].listeners, RMAX_PHONE) / Math.sqrt(r.zoom), kk) }));
    const named = all.filter((d) => d.rank <= LABELLED || americas.some((c) => c.rank === d.rank));
    const blind = placeLabels(named, kk, "phone", { drawn: all }).map((l) => ({
      ranks: l.ranks,
      boxes: l.lines.map((line, i) => {
        const lw = [...line].length * LABEL_ADVANCE_PX;
        const x0 = l.anchor === "end" ? l.x * kk - lw : l.x * kk;
        const base = (l.y + i * l.pitch) * kk;
        return { x0, x1: x0 + lw, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
      }),
    }));
    expect(seen(labels).length).toBeGreaterThan(seen(blind).length);
    for (const c of seen(blind)) expect(seen(labels)).toContain(c);
    // Santiago, 4px over the view's bottom edge, was cut by it.
    const santiago = americas.find((c) => c.city === "Santiago");
    if (santiago) {
      expect(seen(blind)).not.toContain("Santiago");
      expect(seen(labels)).toContain("Santiago");
    }
    // A named city past the view's edge keeps its label beside its dot, with
    // no line in from the view (this build's first pass drew "London" in
    // the Atlantic with a leader up to a dot off the view).
    const { dots } = drawn(el);
    const out = dots.filter((d) => d.x < v.x0 * k || d.x > v.x1 * k || d.y < v.y0 * k || d.y > v.y1 * k);
    for (const l of labels.filter((x) => x.ranks.every((rank) => out.some((d) => d.rank === rank)))) {
      expect(el.querySelector(`svg line[data-leader="${l.ranks.join(" ")}"]`), l.text).toBeNull();
      const own = dots.filter((d) => l.ranks.includes(d.rank));
      expect(Math.min(...own.map((d) => gap(l.boxes, d))), l.text).toBeLessThanOrEqual(GAP_PX * Math.SQRT2 + 0.1);
    }
  });

  it("the laptop's Americas chip names the Americas' five too, by name, and numbers none (owner, 16 Oct 2026)", () => {
    // Until 16 Oct 2026 the laptop's chip named the top five only (the ruling
    // was the phone's); tests/ui/listenersDesktopAmericas.test.tsx holds the
    // laptop's labels to the view and the dots.
    const el = mount("desktop", 1278);
    press(el, "Americas");
    const { labels } = drawn(el);
    expect(labels.flatMap((l) => l.ranks).sort((a, b) => a - b)).toEqual([...top, ...americas].map((c) => c.rank).sort((a, b) => a - b));
    expect(labels.map((l) => l.text).sort()).toEqual([...top, ...americas].map((c) => c.city).sort());
  });

  it("negative control: main's chip named the top five only, none of them American", () => {
    // ListenerMap.tsx:151 on main a9574c64: `d.rank <= LABELLED ||
    // labelCodes.includes(d.code)`, and the Americas chip's labelCodes were [].
    const shipped = byRank.filter((c) => c.rank <= LABELLED || ([] as string[]).includes(c.code));
    expect(shipped.filter((c) => c.lon < AMERICAS_WEST_OF)).toEqual([]);
    expect(americas.every((c) => !shipped.includes(c))).toBe(true);
  });
});
