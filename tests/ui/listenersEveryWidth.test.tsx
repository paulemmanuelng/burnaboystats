import { act, fireEvent } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenerMap, { chipView, REGIONS, ZOOM_BTN_PX, ZOOM_GAP_PX, ZOOM_INSET_PX } from "../../app/components/ListenerMap";
import { listenerCities } from "../../app/data/listeners";
import { MAP_W } from "../../app/data/worldShapes";
import { GAP_PX, LABEL_ADVANCE_PX, LABEL_ASCENT_PX, LABEL_DESCENT_PX, LABEL_PX, LABELLED, MAP_H_CROP } from "../../app/lib/listenerDots";

/**
 * listenersEveryWidth (review of PR #530, 4 Nov 2026): the label tests held
 * the phone's Americas chip at three map widths, 282, 337 and 364, and all
 * three passed while 113 of the 311 even widths from 242 to 862 set a label
 * on another city: on the 4 Nov reading "New York City" ran over Toronto's
 * and Chicago's dots at every width from 400 to 574 (the 440 phone, a 600
 * tablet), and "Toronto" over Chicago's below 270. Here every fourth width is
 * held to the rules the map's labels keep, as the page draws them, worked out
 * from the drawn SVG and the stylesheet's numbers, not from the placer.
 */

const byRank = [...listenerCities].sort((a, b) => a.rank - b.rank);
const AMERICAN = new Set(["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "VE", "EC", "BO", "UY", "PY", "CU", "DO", "JM", "PR", "GT", "HN", "SV", "NI", "CR", "PA", "TT", "HT", "BS", "BB"]);
const americas = byRank.filter((c) => AMERICAN.has(c.code)).slice(0, LABELLED);

let root: Root | null = null;
let host: HTMLDivElement | null = null;
afterEach(() => {
  act(() => root?.unmount());
  host?.remove();
  root = host = null;
  vi.unstubAllGlobals();
});
function mount(layout: "phone" | "desktop", w: number) {
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
  act(() => root!.render(<ListenerMap layout={layout} />));
  return host;
}
const press = (el: HTMLElement, label: string) => {
  const chip = [...el.querySelectorAll('[role="radio"]')].find((b) => b.textContent === label)!;
  act(() => fireEvent.click(chip));
};

type Box = { x0: number; x1: number; y0: number; y1: number };
type Seg = { x1: number; y1: number; x2: number; y2: number };
type Dot = { rank: number; x: number; y: number; r: number };
type Label = { ranks: number[]; text: string; boxes: Box[]; leader: Seg | null };

/** The labels as drawn, in CSS px: every character's box, and the leader. */
function drawn(el: HTMLElement): { k: number; labels: Label[]; dots: Dot[] } {
  const ts = [...el.querySelectorAll("svg text")];
  const k = LABEL_PX / Number(ts[0].getAttribute("font-size"));
  const labels = ts.map((t) => {
    const spans = [...t.querySelectorAll("tspan")];
    const raw = spans.map((s) => s.textContent ?? "");
    const x = Number(t.getAttribute("x"));
    const y = Number(t.getAttribute("y"));
    const pitch = Number(spans[1]?.getAttribute("dy") ?? 0);
    const end = t.getAttribute("text-anchor") === "end";
    const ranks = t.getAttribute("data-ranks")!.split(" ").map(Number);
    const line = el.querySelector(`line[data-leader="${ranks.join(" ")}"]`);
    const leader = line ? { x1: +line.getAttribute("x1")! * k, y1: +line.getAttribute("y1")! * k, x2: +line.getAttribute("x2")! * k, y2: +line.getAttribute("y2")! * k } : null;
    const boxes = raw.map((l, i) => {
      const w = [...l].length * LABEL_ADVANCE_PX;
      const x0 = end ? x * k - w : x * k;
      const base = (y + i * pitch) * k;
      return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX };
    });
    return { ranks, text: raw.join(" "), boxes, leader };
  });
  const dots = [...el.querySelectorAll("circle[data-code]")].map((c) => ({
    rank: Number(c.getAttribute("data-code")),
    x: Number(c.getAttribute("cx")) * k,
    y: Number(c.getAttribute("cy")) * k,
    r: Number(c.getAttribute("r")) * k,
  }));
  return { k, labels, dots };
}
/** How far a dot's edge sits from a label, CSS px (0: the label covers it). */
const gap = (bs: Box[], d: Dot) =>
  Math.min(...bs.map((b) => Math.max(0, Math.hypot(Math.max(b.x0, Math.min(d.x, b.x1)) - d.x, Math.max(b.y0, Math.min(d.y, b.y1)) - d.y) - d.r)));
const overlap = (a: Box, b: Box) => a.x0 < b.x1 - 1e-6 && b.x0 < a.x1 - 1e-6 && a.y0 < b.y1 - 1e-6 && b.y0 < a.y1 - 1e-6;
/** Whether a segment crosses a box (sampled every tenth of a pixel). */
const hits = (s: Seg, b: Box) => {
  const n = Math.max(2, Math.ceil(Math.hypot(s.x2 - s.x1, s.y2 - s.y1) * 10));
  for (let i = 0; i <= n; i++) {
    const x = s.x1 + ((s.x2 - s.x1) * i) / n;
    const y = s.y1 + ((s.y2 - s.y1) * i) / n;
    if (x > b.x0 + 1e-6 && x < b.x1 - 1e-6 && y > b.y0 + 1e-6 && y < b.y1 - 1e-6) return true;
  }
  return false;
};
const city = (rank: number) => byRank[rank - 1].city;

/** Everything a set of labels gets wrong: the page's rules for every chip
 *  but the phone's World view (whose ranks have their own test). */
function wrongs(el: HTMLElement, chip: string): string[] {
  const { k, labels, dots } = drawn(el);
  const r = REGIONS.find((x) => x.label === chip)!;
  const v = r.westOf != null ? chipView(r) : null;
  const view = v && { x0: v.x0 * k, x1: v.x1 * k, y0: v.y0 * k, y1: v.y1 * k };
  // The + and − over the view, from the stylesheet's numbers
  // (listenersRankNumbers checks them against worldMap.module.css).
  const buttons = view && { x0: view.x1 - ZOOM_INSET_PX - ZOOM_BTN_PX, x1: view.x1 - ZOOM_INSET_PX, y0: view.y0 + ZOOM_INSET_PX, y1: view.y0 + ZOOM_INSET_PX + 2 * ZOOM_BTN_PX + ZOOM_GAP_PX };
  const out: string[] = [];
  for (const l of labels) {
    const own = dots.filter((d) => l.ranks.includes(d.rank));
    const ownGap = Math.min(...own.map((d) => gap(l.boxes, d)));
    for (const d of dots.filter((x) => !l.ranks.includes(x.rank))) {
      const g = gap(l.boxes, d);
      if (g === 0) out.push(`"${l.text}" on ${city(d.rank)}`);
      else if (!l.leader && l.ranks.length === 1 && g <= ownGap) out.push(`"${l.text}" as near ${city(d.rank)} (${g.toFixed(2)}px) as its own dot (${ownGap.toFixed(2)}px)`);
    }
    if (!l.leader && ownGap > GAP_PX * Math.SQRT2 + 0.1) out.push(`"${l.text}" ${ownGap.toFixed(2)}px from its dot, unled`);
    for (const b of l.boxes) if (b.x0 < -1e-6 || b.x1 > MAP_W * k + 1e-6 || b.y0 < -1e-6 || b.y1 > MAP_H_CROP * k + 1e-6) out.push(`"${l.text}" off the map`);
    for (const o of labels.filter((x) => x !== l)) {
      if (l.boxes.some((a) => o.boxes.some((b) => overlap(a, b)))) out.push(`"${l.text}" on "${o.text}"`);
      if (o.leader && l.boxes.some((b) => hits(o.leader!, b))) out.push(`"${o.text}"'s leader through "${l.text}"`);
      // A rank keeps two letters clear of a label level with it.
      if (/^\d+$/.test(l.text))
        for (const a of l.boxes)
          for (const b of o.boxes)
            if (Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0) >= (LABEL_ASCENT_PX + LABEL_DESCENT_PX) / 2 && Math.max(b.x0 - a.x1, a.x0 - b.x1) < 2 * LABEL_ADVANCE_PX - 0.01)
              out.push(`"${l.text}" crowds "${o.text}"`);
    }
    if (view) {
      const inside = l.boxes.every((b) => b.x0 >= view.x0 - 0.01 && b.x1 <= view.x1 + 0.01 && b.y0 >= view.y0 - 0.01 && b.y1 <= view.y1 + 0.01);
      const past = l.boxes.every((b) => b.x1 <= view.x0 + 0.01 || b.x0 >= view.x1 - 0.01 || b.y1 <= view.y0 + 0.01 || b.y0 >= view.y1 - 0.01);
      if (!inside && !past) out.push(`"${l.text}" cut by the view's edge`);
      if (buttons && l.boxes.some((b) => overlap(b, buttons))) out.push(`"${l.text}" under the + and −`);
    }
  }
  return [...new Set(out)];
}

const every = (from: number, to: number, step: number) => Array.from({ length: Math.floor((to - from) / step) + 1 }, (_, i) => from + i * step);

describe("the phone's Americas chip, at every fourth map width from 242 to 862 (the 280 phone to past the 900 breakpoint)", () => {
  it.each(every(242, 862, 4))("at %ipx: no label on a city, nearer another dot than its own, cut by the view, under the + and − or on another label", (w) => {
    const el = mount("phone", w);
    press(el, "Americas");
    expect(wrongs(el, "Americas")).toEqual([]);
    // Each of the Americas' five has a label: its name, or its rank where its
    // name has no clear spot by its dot (owner ruling 4 Nov 2026).
    const { labels } = drawn(el);
    for (const c of americas)
      expect(labels.some((l) => l.ranks.includes(c.rank) && (l.text.includes(c.city) || l.text === String(c.rank))), `${c.city} at ${w}`).toBe(true);
  });
});

describe("the phone's other chips and the laptop's, at a spread of widths", () => {
  it.each(every(242, 862, 40).flatMap((w) => ["Europe", "West Africa"].map((chip) => [w, chip] as const)))("phone at %ipx, %s", (w, chip) => {
    const el = mount("phone", w);
    press(el, chip);
    expect(wrongs(el, chip)).toEqual([]);
  });
  it.each(every(835, 1278, 34).flatMap((w) => ["World", "Europe", "West Africa", "Americas"].map((chip) => [w, chip] as const)))("laptop at %ipx, %s", (w, chip) => {
    const el = mount("desktop", w);
    press(el, chip);
    expect(wrongs(el, chip)).toEqual([]);
  });
});

describe("negative control: this PR's first build", () => {
  it("set \"New York City\" across Toronto's and Chicago's dots at the 440 phone's Americas chip (map 402)", () => {
    // placeLabels' output at 402 (viewBox units): end-anchored left of its
    // dot, set after Toronto and Montreal by the "least room first" order.
    const el = mount("phone", 402);
    press(el, "Americas");
    const { k, dots } = drawn(el);
    const w = [..."New York City"].length * LABEL_ADVANCE_PX;
    const base = 109.17 * k;
    const shipped = [{ x0: 271.26 * k - w, x1: 271.26 * k, y0: base - LABEL_ASCENT_PX, y1: base + LABEL_DESCENT_PX }];
    const on = dots.filter((d) => gap(shipped, d) === 0).map((d) => city(d.rank));
    expect(on).toEqual(expect.arrayContaining(["Toronto", "Chicago"]));
    // What the page draws there now.
    expect(wrongs(el, "Americas")).toEqual([]);
  });
});
