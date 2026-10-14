import { readFileSync } from "node:fs";
import { act, fireEvent } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

import ListenerMap, { REGIONS } from "../../app/components/ListenerMap";
import { listenerCities } from "../../app/data/listeners";
import { MAP_W } from "../../app/data/worldShapes";
import { projectEqualEarth } from "../../app/lib/equalEarth";
import {
  CLUSTER_PX,
  MAP_H_CROP,
  RMAX_DESKTOP,
  RMAX_PHONE,
  LABEL_ADVANCE_PX,
  LABEL_ASCENT_PX,
  LABEL_DESCENT_PX,
  GAP_PX,
  LABEL_PX,
  LEADER_MAX_PX,
  dotRadius,
  drawnRadius,
  placeLabels,
  type LabelDot,
  type MapLabel,
} from "../../app/lib/listenerDots";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * listenersMapLabels (site review 8 Oct 2026, Job 5 · J5-5, fixes 107 and
 * 108): the five biggest cities are named on the map at 11px. On the laptop
 * each has its own label; on the phone at World zoom, dots closer than a
 * label line share one ("Lagos · Port Harcourt · Abuja", left of the
 * cluster) and London and Madrid are labelled to the right, stacked; the
 * West Africa chip labels each Nigerian dot. The map stops at 58°S.
 */
const DESK = 1278;
const PHONE = 364;

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
function mount(el: React.ReactElement) {
  host = document.body.appendChild(document.createElement("div"));
  root = createRoot(host);
  act(() => root!.render(el));
  return host;
}

const byRank = [...listenerCities].sort((a, b) => a.rank - b.rank);
const top5 = byRank.slice(0, 5);
/** A label's text as it reads: its lines joined by a space (each line is a
 *  tspan of its own; no space is drawn between them). */
const textOf = (t: Element) => {
  const spans = [...t.querySelectorAll("tspan")];
  return (spans.length ? spans.map((s) => s.textContent ?? "").join(" ") : (t.textContent ?? "")).replace(/\s+/g, " ").trim();
};
const labelsIn = (el: HTMLElement) => [...el.querySelectorAll("svg text")];

/** A label's box in CSS px, from the attributes the browser draws it with. */
function boxPx(t: Element, k: number) {
  const x = Number(t.getAttribute("x"));
  const y = Number(t.getAttribute("y"));
  const lines = [...t.querySelectorAll("tspan")].map((s) => (s.textContent ?? "").trimEnd());
  const pitch = Number(t.querySelectorAll("tspan")[1]?.getAttribute("dy") ?? 0);
  const w = Math.max(...lines.map((l) => [...l].length * LABEL_ADVANCE_PX));
  const x0 = t.getAttribute("text-anchor") === "end" ? x * k - w : x * k;
  return { x0, x1: x0 + w, y0: y * k - LABEL_ASCENT_PX, y1: (y + (lines.length - 1) * pitch) * k + LABEL_DESCENT_PX };
}
const overlap = (a: ReturnType<typeof boxPx>, b: ReturnType<typeof boxPx>) =>
  a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/** The phone's shared groups, worked out here independently: single-linkage
 *  over the top five at CLUSTER_PX on screen. */
function groupsAt(k: number) {
  const pts = top5.map((c) => ({ c, ...projectEqualEarth(c.lon, c.lat) }));
  const groups: (typeof pts)[] = [];
  for (const p of pts) {
    const near = groups.filter((g) => g.some((q) => Math.hypot(q.x - p.x, q.y - p.y) * k < CLUSTER_PX));
    const merged = [p, ...near.flat()];
    for (const g of near) groups.splice(groups.indexOf(g), 1);
    groups.push(merged);
  }
  return groups.map((g) => g.map((p) => p.c).sort((a, b) => a.rank - b.rank));
}

describe("listenersMapLabels: the laptop names all five, each on its own", () => {
  it("five labels at 11 CSS px, one per top-five city, none touching another", () => {
    stubViewport(DESK);
    const el = mount(<ListenerMap />);
    const k = DESK / MAP_W;
    const ts = labelsIn(el);
    expect(ts.map(textOf)).toEqual(top5.map((c) => c.city));
    for (const t of ts) expect(Number(t.getAttribute("font-size")) * k).toBeCloseTo(11, 2);
    const boxes = ts.map((t) => boxPx(t, k));
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) expect(overlap(boxes[i], boxes[j]), `${i}/${j}`).toBe(false);
  });

  it("the labels are drawn for sight only: hidden from assistive tech, the dots keep their names", () => {
    stubViewport(DESK);
    const el = mount(<ListenerMap />);
    expect(labelsIn(el)[0].closest("[aria-hidden='true']")).not.toBeNull();
    expect(el.querySelectorAll("circle[aria-label]")).toHaveLength(listenerCities.length);
  });
});

describe("listenersMapLabels: the phone at World zoom (fix 107)", () => {
  const k = PHONE / MAP_W;
  const groups = groupsAt(k);
  const shared = groups.filter((g) => g.length > 1);

  it("dots closer than CLUSTER_PX share one label: today the three Nigerian cities", () => {
    stubViewport(PHONE);
    const el = mount(<ListenerMap layout="phone" />);
    const texts = labelsIn(el).map(textOf);
    expect(shared.length).toBeGreaterThan(0);
    for (const g of shared) expect(texts).toContain(g.map((c) => c.city).join(" · "));
    // Today's reading, worked out above from the coordinates, not typed here:
    // every dot in the shared label is Nigerian.
    expect(shared[0].every((c) => c.code === "NG")).toBe(true);
  });

  it("the shared label sits left of its cluster, inside the map; a city alone is labelled to its right", () => {
    stubViewport(PHONE);
    const el = mount(<ListenerMap layout="phone" />);
    for (const t of labelsIn(el)) {
      const ranks = t.getAttribute("data-ranks")!.split(" ").map(Number);
      const xs = ranks.map((r) => projectEqualEarth(byRank[r - 1].lon, byRank[r - 1].lat).x);
      const x = Number(t.getAttribute("x"));
      if (ranks.length > 1) {
        expect(t.getAttribute("text-anchor")).toBe("end");
        expect(x).toBeLessThan(Math.min(...xs));
        expect(boxPx(t, k).x0).toBeGreaterThanOrEqual(0);
      } else {
        expect(t.getAttribute("text-anchor")).toBe("start");
        expect(x).toBeGreaterThan(xs[0]);
      }
    }
  });

  it("no two phone labels touch, at every phone width (London and Madrid stack)", () => {
    for (const w of [282, 330, 364, 400, 600, 862]) {
      const kk = w / MAP_W;
      const all: LabelDot[] = byRank.map((c) => ({
        rank: c.rank,
        city: c.city,
        code: c.code,
        ...projectEqualEarth(c.lon, c.lat),
        r: drawnRadius(dotRadius(c.listeners, byRank[0].listeners, RMAX_PHONE), kk),
      }));
      const ls = placeLabels(all.slice(0, top5.length), kk, "phone", { drawn: all, world: true });
      const named = ls.flatMap((l) => l.ranks);
      expect([...named].sort((a, b) => a - b), `${w}`).toEqual(top5.map((c) => c.rank));
      const boxes = ls.map((l) => {
        const width = Math.max(...l.lines.map((s) => [...s.trimEnd()].length * LABEL_ADVANCE_PX));
        const x0 = l.anchor === "end" ? l.x * kk - width : l.x * kk;
        return { x0, x1: x0 + width, y0: l.y * kk - LABEL_ASCENT_PX, y1: (l.y + (l.lines.length - 1) * l.pitch) * kk + LABEL_DESCENT_PX };
      });
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) expect(overlap(boxes[i], boxes[j]), `${w}: ${i}/${j}`).toBe(false);
      // London and Madrid keep a label each, to the right (fix 107).
      for (const city of ["London", "Madrid"].filter((n) => top5.some((c) => c.city === n))) {
        const l = ls.find((x) => x.lines.join("") === city);
        expect(l, `${w}: ${city}`).toBeDefined();
        expect(l!.anchor).toBe("start");
      }
    }
  });

  it("the West Africa chip gives each Nigerian dot its own label", () => {
    stubViewport(PHONE);
    const el = mount(<ListenerMap layout="phone" />);
    const chip = [...el.querySelectorAll('[role="radio"]')].find((b) => b.textContent === "West Africa")!;
    act(() => fireEvent.click(chip));
    expect(chip.getAttribute("aria-checked")).toBe("true");
    const texts = labelsIn(el).map(textOf);
    for (const c of byRank.filter((x) => x.code === "NG")) expect(texts, c.city).toContain(c.city);
    expect(texts.some((t) => t.includes(" · "))).toBe(false);
  });
});

/**
 * The fix round of 15 Oct 2026 (the Job 5 review): the placer was handed only
 * the named dots, so it never kept off the others — "Lagos" sat on Accra's
 * dot at the laptop's West Africa view, and at the phone's, "Lagos" and
 * "Benin City" stacked about 50px under "Port Harcourt" with no line to their
 * dots. The shared label had no inside check (at 375 it began at x −1: its
 * first line ended in a space the browser draws) and left "Abuja" alone on
 * its second line; at 320 "Madrid" landed nearer the Nigerian group than
 * Madrid. Each view below is the map as rendered, at each chip.
 */
type Placed = { ranks: number[]; raw: string[]; anchor: string; boxes: Box[]; leader: Seg | null };
type Box = { x0: number; x1: number; y0: number; y1: number };
type Seg = { x1: number; y1: number; x2: number; y2: number };
type Dot = { rank: number; x: number; y: number; r: number };

/** A label's boxes, one per line, in viewBox units — every character the
 *  browser draws, a space it ends in included. */
function boxesOf(raw: string[], x: number, y: number, anchor: string, pitch: number, k: number): Box[] {
  return raw.map((line, i) => {
    const w = ([...line].length * LABEL_ADVANCE_PX) / k;
    const x0 = anchor === "end" ? x - w : x;
    const base = y + i * pitch;
    return { x0, x1: x0 + w, y0: base - LABEL_ASCENT_PX / k, y1: base + LABEL_DESCENT_PX / k };
  });
}
function rendered(el: HTMLElement): { k: number; labels: Placed[]; dots: Dot[] } {
  const ts = labelsIn(el);
  const k = LABEL_PX / Number(ts[0].getAttribute("font-size"));
  const labels = ts.map((t) => {
    const ranks = t.getAttribute("data-ranks")!.split(" ").map(Number);
    const spans = [...t.querySelectorAll("tspan")];
    const raw = spans.map((s) => s.textContent ?? "");
    const anchor = t.getAttribute("text-anchor")!;
    const pitch = Number(spans[1]?.getAttribute("dy") ?? 0);
    const line = el.querySelector(`line[data-leader="${ranks.join(" ")}"]`);
    const leader = line ? { x1: +line.getAttribute("x1")!, y1: +line.getAttribute("y1")!, x2: +line.getAttribute("x2")!, y2: +line.getAttribute("y2")! } : null;
    return { ranks, raw, anchor, boxes: boxesOf(raw, Number(t.getAttribute("x")), Number(t.getAttribute("y")), anchor, pitch, k), leader };
  });
  const dots = [...el.querySelectorAll("circle[data-code]")].map((c) => ({
    rank: Number(c.getAttribute("data-code")),
    x: Number(c.getAttribute("cx")),
    y: Number(c.getAttribute("cy")),
    r: Number(c.getAttribute("r")),
  }));
  return { k, labels, dots };
}
/** The placer's own output, as the same boxes. */
const asPlaced = (ls: MapLabel[], k: number): Placed[] =>
  ls.map((l) => ({ ranks: l.ranks, raw: l.lines, anchor: l.anchor, boxes: boxesOf(l.lines, l.x, l.y, l.anchor, l.pitch, k), leader: l.leader ?? null }));

/** How far a dot's edge sits from a label, CSS px (0: the label covers it). */
const gapPx = (bs: Box[], d: Dot, k: number) =>
  Math.min(
    ...bs.map((b) => {
      const cx = Math.max(b.x0, Math.min(d.x, b.x1));
      const cy = Math.max(b.y0, Math.min(d.y, b.y1));
      return Math.max(0, Math.hypot(cx - d.x, cy - d.y) - d.r) * k;
    }),
  );
const boxOverlap = (a: Box, b: Box) => a.x0 < b.x1 - 1e-6 && b.x0 < a.x1 - 1e-6 && a.y0 < b.y1 - 1e-6 && b.y0 < a.y1 - 1e-6;
/** Whether a segment crosses a box (sampled every tenth of a unit). */
const segHits = (s: Seg, b: Box) => {
  const n = Math.max(2, Math.ceil(Math.hypot(s.x2 - s.x1, s.y2 - s.y1) * 10));
  for (let i = 0; i <= n; i++) {
    const x = s.x1 + ((s.x2 - s.x1) * i) / n;
    const y = s.y1 + ((s.y2 - s.y1) * i) / n;
    if (x > b.x0 + 1e-6 && x < b.x1 - 1e-6 && y > b.y0 + 1e-6 && y < b.y1 - 1e-6) return true;
  }
  return false;
};

/** Every label whose own dot is not the nearest dot to it (a leader names its
 *  dot by the line, so those are left to the leader check). */
function misattributed(labels: Placed[], dots: Dot[], k: number): string[] {
  return labels
    .filter((l) => !l.leader)
    .flatMap((l) => {
      const own = Math.min(...dots.filter((d) => l.ranks.includes(d.rank)).map((d) => gapPx(l.boxes, d, k)));
      return dots
        .filter((d) => !l.ranks.includes(d.rank) && gapPx(l.boxes, d, k) <= own)
        .map((d) => `${l.raw.join(" ")} is as near ${byRank[d.rank - 1].city} (${gapPx(l.boxes, d, k).toFixed(1)}px) as its own dot (${own.toFixed(1)}px)`);
    });
}

const VIEWS = [
  ...[942, 1158, DESK].map((w) => ({ layout: "desktop" as const, w })),
  ...[282, 337, PHONE].map((w) => ({ layout: "phone" as const, w })),
];
function eachChip(layout: "desktop" | "phone", w: number, see: (chip: string, view: ReturnType<typeof rendered>) => void) {
  stubViewport(w);
  const el = mount(<ListenerMap layout={layout} />);
  for (const r of REGIONS) {
    const chip = [...el.querySelectorAll('[role="radio"]')].find((b) => b.textContent === r.label)!;
    act(() => fireEvent.click(chip));
    see(r.key, rendered(el));
  }
  act(() => root?.unmount());
  host?.remove();
  root = host = null;
}

describe("listenersMapLabels: every dot is an obstacle (fix round, 15 Oct 2026)", () => {
  it.each(VIEWS)("$layout at $w px, every chip: inside the map, clear of each other, beside their dots or led to them", ({ layout, w }) => {
    eachChip(layout, w, (chip, { k, labels, dots }) => {
      const at = `${layout} ${w} ${chip}`;
      const named = new Set(labels.flatMap((l) => l.ranks));
      for (const l of labels) {
        const who = `${at}: ${l.raw.join(" / ")}`;
        // Inside the map, every character drawn.
        for (const b of l.boxes) {
          expect(b.x0, who).toBeGreaterThanOrEqual(-1e-6);
          expect(b.x1, who).toBeLessThanOrEqual(MAP_W + 1e-6);
          expect(b.y0, who).toBeGreaterThanOrEqual(-1e-6);
          expect(b.y1, who).toBeLessThanOrEqual(MAP_H_CROP + 1e-6);
        }
        // No line ends in a space (it would be drawn past the measured box).
        for (const line of l.raw) expect(line, who).toBe(line.trimEnd());
        // No other named city's dot under it.
        for (const d of dots.filter((x) => named.has(x.rank) && !l.ranks.includes(x.rank))) expect(gapPx(l.boxes, d, k), `${who} on ${byRank[d.rank - 1].city}`).toBeGreaterThan(0);
        // No other label touched, by its text or its leader.
        for (const o of labels.filter((x) => x !== l)) {
          for (const a of l.boxes) for (const b of o.boxes) expect(boxOverlap(a, b), `${who} × ${o.raw.join(" ")}`).toBe(false);
          if (l.leader) for (const b of o.boxes) expect(segHits(l.leader, b), `${who}'s leader × ${o.raw.join(" ")}`).toBe(false);
        }
        const own = dots.filter((d) => l.ranks.includes(d.rank));
        const ownGap = Math.min(...own.map((d) => gapPx(l.boxes, d, k)));
        if (!l.leader) {
          // Beside its dot (or group): GAP_PX out, a corner's diagonal at most.
          expect(ownGap, who).toBeLessThanOrEqual(GAP_PX * Math.SQRT2 + 0.1);
        } else {
          // A leader starts on the dot's edge and ends on the label, and the
          // label it leads to covers no dot at all.
          const d = own[0];
          expect(Math.abs(Math.hypot(l.leader.x1 - d.x, l.leader.y1 - d.y) - d.r) * k, who).toBeLessThan(0.1);
          expect(gapPx(l.boxes, { rank: 0, x: l.leader.x2, y: l.leader.y2, r: 0 }, k), who).toBeLessThan(0.1);
          expect(Math.hypot(l.leader.x2 - l.leader.x1, l.leader.y2 - l.leader.y1) * k, who).toBeLessThanOrEqual(GAP_PX + LEADER_MAX_PX + 0.1);
          for (const o of dots.filter((x) => x.rank !== d.rank)) expect(gapPx(l.boxes, o, k), `${who} on ${byRank[o.rank - 1].city}`).toBeGreaterThan(0);
        }
      }
      if (layout === "desktop" || chip !== "world") {
        // Off the phone's World view, no label covers a city, and a city's
        // own label sits nearer its dot than any other dot. (A shared label
        // is held to the first only: it must sit left of its group.)
        for (const l of labels) for (const d of dots.filter((x) => !l.ranks.includes(x.rank))) expect(gapPx(l.boxes, d, k), `${at}: ${l.raw.join(" ")} on ${byRank[d.rank - 1].city}`).toBeGreaterThan(0);
        expect(misattributed(labels.filter((l) => l.ranks.length === 1), dots, k), at).toEqual([]);
      } else {
        // The phone's World view (fix 107): the shared label, left of its
        // group, covers one dot at most — the ocean left of Nigeria holds
        // Bogotá and Lima a line apart, and under 402 not one spot level with
        // the group clears both — and none named.
        const shared = labels.filter((l) => l.ranks.length > 1);
        for (const l of shared) expect(dots.filter((d) => !l.ranks.includes(d.rank) && gapPx(l.boxes, d, k) === 0).length, at).toBeLessThanOrEqual(1);
        // A city on its own sits nearer its own dot than the shared group's
        // (at 320 Madrid's label was 3.6px from Abuja and 7.6px from Madrid).
        for (const l of labels.filter((x) => x.ranks.length === 1)) {
          const ownGap = gapPx(l.boxes, dots.find((d) => d.rank === l.ranks[0])!, k);
          for (const r of shared.flatMap((s) => s.ranks))
            expect(gapPx(l.boxes, dots.find((d) => d.rank === r)!, k), `${at}: ${l.raw[0]} vs ${byRank[r - 1].city}`).toBeGreaterThan(ownGap);
        }
      }
    });
  });

  it("World view: the shared label takes the narrowest split of its names, so no name is left alone on a line it need not be", () => {
    for (const w of [282, 337, PHONE]) {
      eachChip("phone", w, (chip, { labels }) => {
        if (chip !== "world") return;
        for (const l of labels.filter((x) => x.ranks.length > 1)) {
          const names = l.ranks.map((r) => byRank[r - 1].city);
          // Every split of the names into this many lines, worked out here.
          const splits = (rest: string[], n: number): string[][][] =>
            n === 1 ? [[rest]] : rest.slice(0, rest.length - n + 1).flatMap((_, i) => splits(rest.slice(i + 1), n - 1).map((t) => [rest.slice(0, i + 1), ...t]));
          const widest = (ls: string[]) => Math.max(...ls.map((s) => [...s].length));
          const narrowest = Math.min(...splits(names, l.raw.length).map((p) => widest(p.map((x, j) => x.join(" · ") + (j < p.length - 1 ? " ·" : "")))));
          expect(widest(l.raw), `${w}`).toBe(narrowest);
          // The lines read as one label, in rank order.
          expect(l.raw.join(" "), `${w}`).toBe(names.join(" · "));
        }
      });
    }
  });

  it("negative control: the shipped call, the named dots only, put “Lagos” on Accra's dot at the laptop's West Africa view", () => {
    // ListenerMap.tsx:145–152 on 1c6e459d passed placeLabels the top five and
    // the Nigerian dots, and nothing else.
    const wa = REGIONS.find((r) => r.key === "west-africa")!;
    const k = (DESK * wa.zoom) / MAP_W;
    const all: (LabelDot & Dot)[] = byRank.map((c) => ({
      rank: c.rank,
      city: c.city,
      code: c.code,
      ...projectEqualEarth(c.lon, c.lat),
      r: drawnRadius(dotRadius(c.listeners, byRank[0].listeners, RMAX_DESKTOP) / Math.sqrt(wa.zoom), k),
    }));
    const shown = all.filter((d) => d.rank <= top5.length || (wa.labelCodes as readonly string[]).includes(d.code));
    const shipped = misattributed(asPlaced(placeLabels(shown, k, "desktop"), k), all, k);
    expect(shipped.some((s) => s.startsWith("Lagos is as near Accra")), shipped.join("\n")).toBe(true);
    // The map as built hands it every dot, and the same check passes.
    expect(misattributed(asPlaced(placeLabels(shown, k, "desktop", { drawn: all }), k), all, k)).toEqual([]);
  });

  it("negative control: the shipped shared line ended in a space, and at 375 began left of the map", () => {
    // wrapNames on 1c6e459d kept each separator's trailing space ("${n} · "),
    // so the first line at 375 was this, end-anchored at the group's left.
    const SHIPPED = "Lagos · Port Harcourt · ";
    expect(SHIPPED).not.toBe(SHIPPED.trimEnd());
    stubViewport(337);
    const el = mount(<ListenerMap layout="phone" />);
    const { k, labels } = rendered(el);
    const shared = labels.find((l) => l.ranks.length > 1)!;
    const right = shared.boxes[0].x1;
    expect(right - ([...SHIPPED].length * LABEL_ADVANCE_PX) / k).toBeLessThan(0);
    for (const b of shared.boxes) expect(b.x0).toBeGreaterThanOrEqual(0);
  });
});

describe("the map stops at 58°S (fix 108)", () => {
  it("the viewBox height is the projected 58th parallel south, and the viewport takes its ratio", () => {
    stubViewport(DESK);
    const el = mount(<ListenerMap />);
    expect(MAP_H_CROP).toBe(projectEqualEarth(0, -58).y);
    expect(el.querySelector("svg[role='group']")!.getAttribute("viewBox")).toBe(`0 0 ${MAP_W} ${MAP_H_CROP}`);
    expect((el.querySelector("svg[role='group']")!.parentElement as HTMLElement).style.aspectRatio).toBe(`${MAP_W} / ${MAP_H_CROP}`);
    // Every city sits above the crop.
    for (const c of listenerCities) expect(projectEqualEarth(c.lon, c.lat).y).toBeLessThan(MAP_H_CROP);
  });

  it("negative control: the shipped viewport ran the full 470-unit height", () => {
    // worldMap.module.css:17 on main e85e6efe.
    const shipped = ".viewport { width: 100%; aspect-ratio: 900 / 470; scrollbar-width: thin; }";
    expect(decl(rules(shipped)[0].body, "aspect-ratio")).toBe("900 / 470");
    expect(Number(decl(rules(shipped)[0].body, "aspect-ratio")!.split("/")[1])).not.toBe(MAP_H_CROP);
    // The sheet no longer sets a ratio of its own; the component sets the crop's.
    const now = rules(read("app/components/worldMap.module.css")).find((r) => r.selector === ".viewport")!;
    expect(decl(now.body, "aspect-ratio")).toBeUndefined();
  });
});

describe("negative control: the shipped map named no city on the map", () => {
  it("main's ListenerMap drew circles and no <text>; labels lived only in the tap card", () => {
    // ListenerMap.tsx:224–234 on main e85e6efe, the SVG's last children.
    const shipped = `{dots.map((d) => (
            <circle
              key={d.rank}
              cx={d.x}
              cy={d.y}
              r={d.r * rScale}
              className={\`\${styles.city}\${active === d.rank ? \` \${styles.cityActive}\` : ""}\`}
              {...wire(d)}
            />
          ))}
        </svg>`;
    expect(shipped).not.toContain("<text");
    expect(readFileSync("app/components/ListenerMap.tsx", "utf8")).toContain("<text");
  });

  it("the region chips are the four the canvas draws, World at zoom 1", () => {
    expect(REGIONS.map((r) => r.label)).toEqual(["World", "Europe", "West Africa", "Americas"]);
    expect(REGIONS[0].zoom).toBe(1);
    expect(RMAX_DESKTOP).toBeLessThan(RMAX_PHONE);
  });
});
