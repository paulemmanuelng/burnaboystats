import { act, fireEvent } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenerMap, { AMERICAS_WEST_OF, chipView, REGIONS, ZOOM_BTN_PX, ZOOM_GAP_PX, ZOOM_INSET_PX } from "../../app/components/ListenerMap";
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
  RMAX_DESKTOP,
} from "../../app/lib/listenerDots";

/**
 * The laptop's Americas chip names the Americas' own biggest cities (owner,
 * 16 Oct 2026: "for other 4, do your recommendation"), the rule the phone got
 * on 15 Oct (#3, PR #505): it named only the world's five, in Europe and
 * Africa at the view's right edge, and none of the region it opens on. The
 * world's five keep their names there, as the laptop's World view does (fix
 * 107) — each its own label, east of 30°W; the laptop has no hint that would
 * say what a number is. Every label: clear of every dot and every other
 * label, wholly inside the view the chip opens on or wholly past it, and none
 * under the + and −, at the laptop's 1024, 1240 and 1440 — with and without a
 * classic scrollbar. The World view and the other chips are as main draws
 * them.
 *
 * The Americas' five are worked out here from the 50 rows (the cities of
 * American countries, by rank), not from the map's meridian.
 */

const byRank = [...listenerCities].sort((a, b) => a.rank - b.rank);
const top = byRank.slice(0, LABELLED);
const AMERICAN_COUNTRIES = new Set(["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "VE", "EC", "BO", "UY", "PY", "CU", "DO", "JM", "PR", "GT", "HN", "SV", "NI", "CR", "PA", "TT", "HT", "BS", "BB"]);
const americas = byRank.filter((c) => AMERICAN_COUNTRIES.has(c.code)).slice(0, LABELLED);

/** The laptop map's CSS width at each laptop width, from listeners.module.css:
 *  .wrap is 1360 at most, 40px sides from 1240 and 32px in 901–1239 (a media
 *  query reads the window, scrollbar included), and the frame's 1px edges;
 *  each with a 16px classic scrollbar and without. */
const LAPTOPS = [
  { page: 1024, w: 1024 - 16 - 64 - 2 },
  { page: 1024, w: 1024 - 64 - 2 },
  { page: 1240, w: 1240 - 16 - 80 - 2 },
  { page: 1240, w: 1240 - 80 - 2 },
  { page: 1440, w: 1360 - 80 - 2 },
];

let root: Root | null = null;
let host: HTMLDivElement | null = null;
function mount(w: number) {
  class RO {
    constructor(private cb: ResizeObserverCallback) {}
    observe() {
      this.cb([{ contentRect: { width: w, height: w / 2 } } as unknown as ResizeObserverEntry], this as unknown as ResizeObserver);
    }
    unobserve() {}
    disconnect() {}
  }
  vi.stubGlobal("ResizeObserver", RO);
  host = document.body.appendChild(document.createElement("div"));
  root = createRoot(host);
  act(() => root!.render(<ListenerMap layout="desktop" />));
  return host;
}
afterEach(() => {
  act(() => root?.unmount());
  host?.remove();
  root = host = null;
  vi.unstubAllGlobals();
});
const press = (el: HTMLElement, label: string) => {
  const chip = [...el.querySelectorAll('[role="radio"]')].find((b) => b.textContent === label)!;
  act(() => fireEvent.click(chip));
};

type Box = { x0: number; x1: number; y0: number; y1: number };
type Dot = { rank: number; x: number; y: number; r: number };
type Label = { ranks: number[]; text: string; boxes: Box[] };
/** The labels as drawn, CSS px: text and one box per line. */
function drawn(el: HTMLElement) {
  const ts = [...el.querySelectorAll("svg text")];
  const k = LABEL_PX / Number(ts[0].getAttribute("font-size"));
  const labels: Label[] = ts.map((t) => {
    const spans = [...t.querySelectorAll("tspan")];
    const raw = spans.map((s) => s.textContent ?? "");
    const x = Number(t.getAttribute("x"));
    const y = Number(t.getAttribute("y"));
    const pitch = Number(spans[1]?.getAttribute("dy") ?? 0);
    const end = t.getAttribute("text-anchor") === "end";
    return {
      ranks: t.getAttribute("data-ranks")!.split(" ").map(Number),
      text: raw.join(" "),
      boxes: raw.map((line, i) => {
        const w = [...line].length * LABEL_ADVANCE_PX;
        const x0 = end ? x * k - w : x * k;
        const base = (y + i * pitch) * k;
        return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
      }),
    };
  });
  const dots: Dot[] = [...el.querySelectorAll("circle[data-code]")].map((c) => ({
    rank: Number(c.getAttribute("data-code")),
    x: Number(c.getAttribute("cx")) * k,
    y: Number(c.getAttribute("cy")) * k,
    r: Number(c.getAttribute("r")) * k,
  }));
  return { k, labels, dots, leaders: el.querySelectorAll("svg line[data-leader]").length };
}
const gap = (bs: Box[], d: Dot) =>
  Math.min(...bs.map((b) => Math.max(0, Math.hypot(Math.max(b.x0, Math.min(d.x, b.x1)) - d.x, Math.max(b.y0, Math.min(d.y, b.y1)) - d.y) - d.r)));
const overlap = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
/** The view the Americas chip opens on, CSS px. */
const americasView = (k: number): Box => {
  const v = chipView(REGIONS.find((x) => x.key === "americas")!);
  return { x0: v.x0 * k, y0: v.y0 * k, x1: v.x1 * k, y1: v.y1 * k };
};
const cut = (bs: Box[], v: Box) =>
  !bs.every((b) => b.x0 >= v.x0 - 0.01 && b.x1 <= v.x1 + 0.01 && b.y0 >= v.y0 - 0.01 && b.y1 <= v.y1 + 0.01) &&
  !bs.every((b) => b.x1 <= v.x0 + 0.01 || b.x0 >= v.x1 - 0.01 || b.y1 <= v.y0 + 0.01 || b.y0 >= v.y1 - 0.01);
/** The + and − buttons, CSS px, at the thumb's 44px (a laptop's mouse gets
 *  34px; the larger box holds both). */
const buttons = (v: Box): Box => ({ x0: v.x1 - ZOOM_INSET_PX - ZOOM_BTN_PX, x1: v.x1 - ZOOM_INSET_PX, y0: v.y0 + ZOOM_INSET_PX, y1: v.y0 + ZOOM_INSET_PX + 2 * ZOOM_BTN_PX + ZOOM_GAP_PX });
/** The 30°W meridian's x at a viewBox y. */
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
/** Every label the laptop drew on main a9574c64/db35e489 at a chip: the
 *  named dots there (the top five, and a chip's labelCodes), placed by the
 *  same placer, with no `view` and no numbers — ListenerMap.tsx's call on
 *  main, worked out here from the rows. */
function mainsLabels(chipKey: string, w: number) {
  const chip = REGIONS.find((r) => r.key === chipKey)!;
  const k = (w * chip.zoom) / MAP_W;
  const max = byRank[0].listeners;
  const all = byRank.map((c) => ({
    rank: c.rank,
    city: c.city,
    code: c.code,
    ...projectEqualEarth(c.lon, c.lat),
    r: drawnRadius(dotRadius(c.listeners, max, RMAX_DESKTOP) / Math.sqrt(chip.zoom), k),
  }));
  const codes: readonly string[] = chip.labelCodes;
  const named = all.filter((d) => d.rank <= LABELLED || codes.includes(d.code));
  return placeLabels(named, k, "desktop", { drawn: all, numbers: false, apart: codes }).map((l) => ({
    ranks: l.ranks,
    text: l.lines.join(" "),
    x: +l.x.toFixed(2),
    y: +l.y.toFixed(2),
  }));
}
const asAttrs = (el: HTMLElement) =>
  [...el.querySelectorAll("svg text")].map((t) => ({
    ranks: t.getAttribute("data-ranks")!.split(" ").map(Number),
    text: [...t.querySelectorAll("tspan")].map((s) => s.textContent).join(" "),
    x: Number(t.getAttribute("x")),
    y: Number(t.getAttribute("y")),
  }));

describe("the laptop's Americas chip names the Americas' own biggest cities (owner, 16 Oct 2026)", () => {
  it("the Americas' five today: São Paulo, Mexico City, Santiago, Montreal, Toronto — none of the world's five", () => {
    expect(americas).toHaveLength(LABELLED);
    expect(americas.some((c) => c.rank <= LABELLED)).toBe(false);
  });

  it.each(LAPTOPS)("at $page ($w px map): the five are named, and the world's five keep their names, not numbers", ({ w }) => {
    const el = mount(w);
    press(el, "Americas");
    const { labels } = drawn(el);
    for (const c of [...top, ...americas]) {
      const l = labels.filter((x) => x.ranks.includes(c.rank));
      expect(l.map((x) => x.text), c.city).toEqual([c.city]);
    }
    expect(labels).toHaveLength(2 * LABELLED);
    expect(labels.some((l) => /^\d+$/.test(l.text))).toBe(false);
  });

  it.each(LAPTOPS)("at $page ($w px map): no label covers a dot or another label, and each sits beside its own dot", ({ w }) => {
    const el = mount(w);
    press(el, "Americas");
    const { labels, dots, leaders } = drawn(el);
    for (const l of labels) {
      for (const d of dots.filter((x) => !l.ranks.includes(x.rank))) expect(gap(l.boxes, d), `${l.text} on ${byRank[d.rank - 1].city}`).toBeGreaterThan(0);
      for (const o of labels.filter((x) => x !== l)) for (const a of l.boxes) for (const b of o.boxes) expect(overlap(a, b), `${l.text} × ${o.text}`).toBe(false);
      const own = dots.find((d) => d.rank === l.ranks[0])!;
      expect(gap(l.boxes, own), l.text).toBeLessThanOrEqual(GAP_PX * Math.SQRT2 + 0.1);
      // Nearer its own dot than any other, so it names the right one.
      for (const d of dots.filter((x) => x.rank !== own.rank)) expect(gap(l.boxes, d), `${l.text} nearer ${byRank[d.rank - 1].city}`).toBeGreaterThan(gap(l.boxes, own));
    }
    expect(leaders).toBe(0);
  });

  it.each(LAPTOPS)("at $page ($w px map): every label sits wholly inside the view the chip opens on — none cut by its edge, none under the + and −", ({ w }) => {
    const el = mount(w);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    const v = americasView(k);
    expect(labels.filter((l) => cut(l.boxes, v)).map((l) => l.text)).toEqual([]);
    const inside = labels.filter((l) => l.boxes.every((b) => b.x0 >= v.x0 && b.x1 <= v.x1 && b.y0 >= v.y0 && b.y1 <= v.y1));
    expect(inside.map((l) => l.text).sort()).toEqual([...top, ...americas].map((c) => c.city).sort());
    const z = buttons(v);
    expect(labels.filter((l) => l.boxes.some((b) => overlap(b, z))).map((l) => l.text)).toEqual([]);
  });

  it.each(LAPTOPS)("at $page ($w px map): no name of a city east of 30°W starts west of it", ({ w }) => {
    const el = mount(w);
    press(el, "Americas");
    const { k, labels } = drawn(el);
    const westward = labels
      .filter((l) => l.ranks.every((rank) => byRank[rank - 1].lon >= AMERICAS_WEST_OF))
      .filter((l) => l.boxes.some((b) => b.x0 / k < meridianX((b.y0 + b.y1) / 2 / k)));
    expect(westward.map((l) => l.text)).toEqual([]);
  });

  it.each(LAPTOPS)("at $page ($w px map): the World view and the Europe and West Africa chips draw what main drew", ({ w }) => {
    const el = mount(w);
    for (const [label, key] of [
      ["World", "world"],
      ["Europe", "europe"],
      ["West Africa", "west-africa"],
    ]) {
      press(el, label);
      expect(asAttrs(el), label).toEqual(mainsLabels(key, w));
    }
    // and back from the Americas, the World view is main's again
    press(el, "Americas");
    press(el, "World");
    expect(asAttrs(el)).toEqual(mainsLabels("world", w));
  });
});

describe("negative control: the laptop's Americas chip on main", () => {
  it.each(LAPTOPS)("at $page ($w px map): main's call named the top five only, none of them American", ({ w }) => {
    // ListenerMap.tsx on main: `const westOf = layout === "phone" ?
    // chip?.westOf : null;`, so the laptop's Americas chip named the top
    // five and its own cities went unnamed.
    const shipped = mainsLabels("americas", w);
    expect(shipped.map((l) => l.text)).toEqual(top.map((c) => c.city));
    for (const c of americas) expect(shipped.some((l) => l.ranks.includes(c.rank)), c.city).toBe(false);
    // This build names them.
    const el = mount(w);
    press(el, "Americas");
    expect(asAttrs(el)).not.toEqual(shipped);
  });
});
