import { act, fireEvent } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenerMap, { chipView, REGIONS, ZOOM_BTN_PX, ZOOM_GAP_PX, ZOOM_INSET_PX } from "../../app/components/ListenerMap";
import { listenerCities } from "../../app/data/listeners";
import { MAP_W } from "../../app/data/worldShapes";
import { GAP_PX, LABEL_ADVANCE_PX, LABEL_ASCENT_PX, LABEL_DESCENT_PX, LABEL_HALO_PX, LABEL_PX, LABELLED, MAP_H_CROP } from "../../app/lib/listenerDots";

/**
 * listenersEveryWidth (review of PR #530, 4 Nov 2026): the label tests held
 * the phone's Americas chip at three map widths, 282, 337 and 364, and all
 * three passed while 105 of the 311 even widths from 242 to 862 set a label
 * on another city: on the 4 Nov reading "New York City" ran over Toronto's
 * and Chicago's dots at every width from 400 to 574 (the 440 phone, a 600
 * tablet), and "Toronto" over Chicago's below 270. Here every fourth width is
 * held to the rules the map's labels keep, as the page draws them, worked out
 * from the drawn SVG and the stylesheet's numbers, not from the placer. The
 * second review added two rules no earlier test could see: two names on one
 * line ("TorontoNew York City" at the 375 phone) and a name that sits just
 * after another city's dot ("New York City" read as Dallas on the 390 to 430
 * phones), and the phone's World view and the + and − steps.
 *
 * The 18 Nov 2026 reading (the phone's Rmax 18 → 19) added the phone's West
 * Africa chip at every fourth width: its every-40th widths saw "Benin City"
 * on Lagos's and Accra's dots at 282 and "Enugu" read as Abuja's at 242, but
 * not that the two ran on every width from 242 to 321. It added one rule no
 * test could see, only a picture: a leader that passes another label nearer
 * than the halo the letters are drawn with runs under it (Toronto's, under
 * "New York City" at the 375 and 393 phones).
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
/** How near a segment passes a box, CSS px (sampled every tenth of a pixel,
 *  as `hits` is). */
const passes = (s: Seg, b: Box) => {
  const n = Math.max(2, Math.ceil(Math.hypot(s.x2 - s.x1, s.y2 - s.y1) * 10));
  let near = Infinity;
  for (let i = 0; i <= n; i++) {
    const x = s.x1 + ((s.x2 - s.x1) * i) / n;
    const y = s.y1 + ((s.y2 - s.y1) * i) / n;
    near = Math.min(near, Math.hypot(Math.max(b.x0 - x, 0, x - b.x1), Math.max(b.y0 - y, 0, y - b.y1)));
  }
  return near;
};
const city = (rank: number) => byRank[rank - 1].city;

const isRank = (l: Label) => /^\d+$/.test(l.text);
const level = (b: Box, d: Dot) => d.y >= b.y0 && d.y <= b.y1;

/** Everything a set of labels gets wrong, from the labels and dots alone. On
 *  the phone's World view (`ranks`) a dot that overlaps a rank's own may sit
 *  as near it: the five's dots overlap their neighbours there. */
function faults(labels: Label[], dots: Dot[], k: number, view: Box | null, opts: { ranks?: boolean } = {}): string[] {
  // The + and − over the view, from the stylesheet's numbers
  // (listenersRankNumbers checks them against worldMap.module.css).
  const buttons = view && { x0: view.x1 - ZOOM_INSET_PX - ZOOM_BTN_PX, x1: view.x1 - ZOOM_INSET_PX, y0: view.y0 + ZOOM_INSET_PX, y1: view.y0 + ZOOM_INSET_PX + 2 * ZOOM_BTN_PX + ZOOM_GAP_PX };
  const out: string[] = [];
  for (const l of labels) {
    const own = dots.filter((d) => l.ranks.includes(d.rank));
    const ownGap = Math.min(...own.map((d) => gap(l.boxes, d)));
    for (const d of dots.filter((x) => !l.ranks.includes(x.rank))) {
      const g = gap(l.boxes, d);
      const overlapsOwn = opts.ranks && own.some((o) => Math.hypot(o.x - d.x, o.y - d.y) < o.r + d.r);
      if (g === 0) out.push(`"${l.text}" on ${city(d.rank)}`);
      else if (!l.leader && l.ranks.length === 1 && g <= ownGap && !overlapsOwn) out.push(`"${l.text}" as near ${city(d.rank)} (${g.toFixed(2)}px) as its own dot (${ownGap.toFixed(2)}px)`);
      // Dot then name: with no dot of its own level with it, a name just after
      // (or before) a city's dot reads as that city's, however near its own.
      if (
        g > 0 &&
        !l.leader &&
        !isRank(l) &&
        !l.boxes.some((b) => own.some((o) => level(b, o))) &&
        l.boxes.some((b) => level(b, d) && Math.max(b.x0 - d.x - d.r, d.x - d.r - b.x1) < 2 * LABEL_ADVANCE_PX - 0.01)
      )
        out.push(`"${l.text}" reads as ${city(d.rank)}'s`);
    }
    if (!l.leader && ownGap > GAP_PX * Math.SQRT2 + 0.1) out.push(`"${l.text}" ${ownGap.toFixed(2)}px from its dot, unled`);
    for (const b of l.boxes) if (b.x0 < -1e-6 || b.x1 > MAP_W * k + 1e-6 || b.y0 < -1e-6 || b.y1 > MAP_H_CROP * k + 1e-6) out.push(`"${l.text}" off the map`);
    for (const o of labels.filter((x) => x !== l)) {
      if (l.boxes.some((a) => o.boxes.some((b) => overlap(a, b)))) out.push(`"${l.text}" on "${o.text}"`);
      if (o.leader && l.boxes.some((b) => hits(o.leader!, b))) out.push(`"${o.text}"'s leader through "${l.text}"`);
      // The letters are drawn over the leaders with a halo in the map's
      // ground: a leader that passes nearer a label than the halo runs under
      // it (18 Nov 2026 reading: Toronto's, 0.33px from "New York City").
      else if (o.leader && l.boxes.some((b) => passes(o.leader!, b) < LABEL_HALO_PX - 0.01)) out.push(`"${o.text}"'s leader under "${l.text}"`);
      // Level with another label: a rank keeps two letters clear of it, a name
      // one letter clear of a name.
      for (const a of l.boxes)
        for (const b of o.boxes) {
          if (Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0) < (LABEL_ASCENT_PX + LABEL_DESCENT_PX) / 2) continue;
          const apart = Math.max(b.x0 - a.x1, a.x0 - b.x1);
          if (isRank(l) && apart < 2 * LABEL_ADVANCE_PX - 0.01) out.push(`"${l.text}" crowds "${o.text}"`);
          if (!isRank(l) && !isRank(o) && apart < LABEL_ADVANCE_PX - 0.01) out.push(`"${l.text}" runs into "${o.text}"`);
        }
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

/** The chip's view as drawn, CSS px (none for a chip that has no view). */
const viewOf = (chip: string, k: number): Box | null => {
  const r = REGIONS.find((x) => x.label === chip)!;
  const v = r.westOf != null ? chipView(r) : null;
  return v && { x0: v.x0 * k, x1: v.x1 * k, y0: v.y0 * k, y1: v.y1 * k };
};
/** What the page draws wrong now at this chip. */
function wrongs(el: HTMLElement, chip: string, opts: { ranks?: boolean } = {}): string[] {
  const { k, labels, dots } = drawn(el);
  return faults(labels, dots, k, viewOf(chip, k), opts);
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

describe("the phone's West Africa chip, at every fourth map width from 242 to 862", () => {
  const nigerian = byRank.filter((c) => c.code === "NG");
  it.each(every(242, 862, 4))("at %ipx: each Nigerian city by its name, and no label on a city, nearer another dot than its own or on another label", (w) => {
    const el = mount("phone", w);
    press(el, "West Africa");
    expect(wrongs(el, "West Africa")).toEqual([]);
    // Fix 107: at this chip each Nigerian dot gets its own label, by name.
    const { labels } = drawn(el);
    for (const c of nigerian) expect(labels.find((l) => l.ranks.includes(c.rank))?.text, `${c.city} at ${w}`).toBe(c.city);
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

describe("the phone's World view, at every fourth map width from 242 to 862", () => {
  it.each(every(242, 862, 4))("at %ipx: the five by rank, each by its own dot", (w) => {
    const el = mount("phone", w);
    expect(drawn(el).labels.map((l) => l.text)).toEqual(["1", "2", "3", "4", "5"]);
    expect(wrongs(el, "World", { ranks: true })).toEqual([]);
  });
});

describe("the + and − steps, at a spread of widths", () => {
  const zoomBy = (el: HTMLElement, name: string) => act(() => fireEvent.click(el.querySelector(`button[aria-label="${name}"]`)!));
  it.each([...every(242, 862, 40).map((w) => ["phone", w] as const), ...every(835, 1278, 68).map((w) => ["desktop", w] as const)])("%s at %ipx", (layout, w) => {
    const el = mount(layout, w);
    const sets: string[] = [];
    const inBtn = () => el.querySelector<HTMLButtonElement>('button[aria-label="Zoom in"]')!;
    while (!inBtn().disabled) {
      zoomBy(el, "Zoom in");
      expect(wrongs(el, "World"), `zoom step ${sets.length + 1}`).toEqual([]);
      sets.push(JSON.stringify(drawn(el).labels));
    }
    expect(sets.length).toBeGreaterThan(1);
    // A step back draws what the step up drew.
    zoomBy(el, "Zoom out");
    expect(JSON.stringify(drawn(el).labels)).toBe(sets[sets.length - 2]);
  });
});

describe("negative controls: labels this PR's earlier builds drew, as the page reads them", () => {
  /** A label as drawn, from placeLabels' viewBox coordinates. */
  const label = (k: number, rank: number, text: string, x: number, y: number, end = false, leader: Seg | null = null): Label => {
    const w = [...text].length * LABEL_ADVANCE_PX;
    const x0 = end ? x * k - w : x * k;
    return { ranks: [rank], text, leader, boxes: [{ x0, x1: x0 + w, y0: y * k - LABEL_ASCENT_PX, y1: y * k + LABEL_DESCENT_PX }] };
  };
  const rankOf = (name: string) => byRank.find((c) => c.city === name)!.rank;
  const kept = (labels: Label[], rank: number) => labels.filter((l) => !l.ranks.includes(rank));
  const led: Seg = { x1: 0, y1: 0, x2: 0, y2: 0 };

  it("the first build: \"New York City\" across Toronto's and Chicago's dots at the 440 phone's Americas chip", () => {
    const el = mount("phone", 402);
    press(el, "Americas");
    const { k, labels, dots } = drawn(el);
    const nyc = rankOf("New York City");
    const got = faults([...kept(labels, nyc), label(k, nyc, "New York City", 271.26, 109.17, true)], dots, k, viewOf("Americas", k));
    expect(got).toEqual(expect.arrayContaining(['"New York City" on Toronto', '"New York City" on Chicago']));
    expect(wrongs(el, "Americas")).toEqual([]);
  });

  it("the retry build: \"TorontoNew York City\", 0.89px apart, at the 375 phone's Americas chip", () => {
    const el = mount("phone", 337);
    press(el, "Americas");
    const { k, labels, dots } = drawn(el);
    const nyc = rankOf("New York City");
    const tor = rankOf("Toronto");
    const rest = labels.filter((l) => !l.ranks.includes(nyc) && !l.ranks.includes(tor));
    const got = faults([...rest, label(k, tor, "Toronto", 233.35, 158.5, false, led), label(k, nyc, "New York City", 318.83, 159.5, false, led)], dots, k, viewOf("Americas", k));
    expect(got).toEqual(expect.arrayContaining(['"Toronto" runs into "New York City"', '"New York City" runs into "Toronto"']));
    expect(wrongs(el, "Americas")).toEqual([]);
  });

  it("the retry build: \"New York City\" just after Dallas's dot at the 393 phone's Americas chip", () => {
    const el = mount("phone", 355);
    press(el, "Americas");
    const { k, labels, dots } = drawn(el);
    const nyc = rankOf("New York City");
    const got = faults([...kept(labels, nyc), label(k, nyc, "New York City", 235.29, 136.92)], dots, k, viewOf("Americas", k));
    expect(got).toContain('"New York City" reads as Dallas\'s');
    expect(wrongs(el, "Americas")).toEqual([]);
  });

  // The 18 Nov 2026 reading. This branch's second build (the phone's Rmax at
  // 19, the West Africa chip retried in rank order only) at that chip:
  it("the 18 Nov second build: \"Benin City\" on Lagos's and Accra's dots at the 320 phone's West Africa chip", () => {
    const el = mount("phone", 282);
    press(el, "West Africa");
    const { k, labels, dots } = drawn(el);
    const benin = rankOf("Benin City");
    const got = faults([...kept(labels, benin), label(k, benin, "Benin City", 455.14, 216.99, true)], dots, k, null);
    expect(got).toEqual(expect.arrayContaining(['"Benin City" on Lagos', '"Benin City" on Accra']));
    expect(wrongs(el, "West Africa")).toEqual([]);
  });

  it("the 18 Nov second build: \"Enugu\" as near Abuja's dot as its own, and read as Abuja's, at the 280 phone's West Africa chip", () => {
    const el = mount("phone", 242);
    press(el, "West Africa");
    const { k, labels, dots } = drawn(el);
    const enugu = rankOf("Enugu");
    const got = faults([...kept(labels, enugu), label(k, enugu, "Enugu", 474.55, 207.82)], dots, k, null);
    expect(got.some((s) => s.startsWith('"Enugu" as near Abuja'))).toBe(true);
    expect(got).toContain('"Enugu" reads as Abuja\'s');
    expect(wrongs(el, "West Africa")).toEqual([]);
  });

  it("the 18 Nov third build: Toronto's leader 0.33px from \"New York City\", under its halo, at the 393 phone's Americas chip", () => {
    const el = mount("phone", 355);
    press(el, "Americas");
    const { k, labels, dots } = drawn(el);
    // The halo the rule keeps clear is the one the map draws.
    for (const t of el.querySelectorAll("svg text")) expect(Number(t.getAttribute("stroke-width")) * k).toBeCloseTo(2 * LABEL_HALO_PX, 2);
    const tor = rankOf("Toronto");
    const nyc = rankOf("New York City");
    const leader = { x1: 275.3 * k, y1: 101.86 * k, x2: 275.3 * k, y2: 162.71 * k };
    const shipped = [label(k, tor, "Toronto", 235.48, 182.99, false, leader), label(k, nyc, "New York City", 275.86, 137.22)];
    const got = faults([...labels.filter((l) => !l.ranks.includes(tor) && !l.ranks.includes(nyc)), ...shipped], dots, k, viewOf("Americas", k));
    expect(got).toContain('"Toronto"\'s leader under "New York City"');
    expect(got.filter((s) => s.includes("leader through"))).toEqual([]);
    expect(wrongs(el, "Americas")).toEqual([]);
  });

  // Main's placer on the 18 Nov 2026 reading: "London", slid down beside its
  // dot until the line's top sat on the dot's centre, drew 0.002 units below
  // it, its place rounded, level with Paris's dot alone.
  it("main on the 18 Nov reading: \"London\" read as Paris's on the laptop's World view at 869", () => {
    const el = mount("desktop", 869);
    const { k, labels, dots } = drawn(el);
    const london = rankOf("London");
    const got = faults([...kept(labels, london), label(k, london, "London", 437.64, 85.73, true)], dots, k, null);
    expect(got).toContain('"London" reads as Paris\'s');
    expect(wrongs(el, "World")).toEqual([]);
  });

  it("a name by its own dot is not read as the next city's, however near: \"Montreal\" keeps its dot level with it", () => {
    const el = mount("phone", 337);
    press(el, "Americas");
    const { labels } = drawn(el);
    expect(labels.find((l) => l.text === "Montreal")).toBeTruthy();
    expect(wrongs(el, "Americas").filter((w) => w.startsWith('"Montreal" reads'))).toEqual([]);
  });
});
