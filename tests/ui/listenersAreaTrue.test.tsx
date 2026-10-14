import { readFileSync } from "node:fs";
import { act } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

import ListenerMap from "../../app/components/ListenerMap";
import { listenerCities } from "../../app/data/listeners";
import { MAP_W } from "../../app/data/worldShapes";
import { RMAX_DESKTOP, RMAX_PHONE, DOT_FLOOR_PX, dotRadius } from "../../app/lib/listenerDots";

/**
 * listenersAreaTrue (site review 8 Oct 2026, Job 5 · J5-5, fix 108; canvas
 * "Data Modules" §5): a dot's AREA is in proportion to its city's listeners,
 * r = Rmax · √(listeners / max), with a 2px screen floor. Rmax is 9.2
 * viewBox units on the laptop and 18 on the phone (C-19).
 *
 * The map is rendered in the browser with a ResizeObserver that reports its
 * viewport at the 1440 laptop frame (1278px) or the 402 phone card (364px).
 */
const DESK = 1278;
const PHONE = 364; // 402 − 2 × 18 gutters − the card's 1px edges
const byRank = [...listenerCities].sort((a, b) => a.rank - b.rank);
const first = byRank[0];
const last = byRank[byRank.length - 1];

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
/** Each dot's drawn radius (viewBox units) by its rank. */
const radii = (el: HTMLElement) =>
  new Map([...el.querySelectorAll("circle[data-code]")].map((c) => [Number(c.getAttribute("data-code")), Number(c.getAttribute("r"))]));

describe("listenersAreaTrue: every dot's area is in proportion to its listeners", () => {
  it.each([
    ["the laptop at 1440", "desktop", DESK],
    ["the phone at 402", "phone", PHONE],
  ] as const)("%s: every pair of dots holds the ratio of their listeners (±1%)", (_, layout, w) => {
    stubViewport(w);
    const r = radii(mount(<ListenerMap layout={layout} />));
    expect(r.size).toBe(listenerCities.length);
    const k = w / MAP_W;
    const floored = new Set([...r].filter(([, v]) => v * k <= DOT_FLOOR_PX + 1e-6).map(([rank]) => rank));
    const free = byRank.filter((c) => !floored.has(c.rank));
    for (const a of free)
      for (const b of free) {
        const areas = (r.get(a.rank)! / r.get(b.rank)!) ** 2;
        expect(Math.abs(areas / (a.listeners / b.listeners) - 1), `${a.city} / ${b.city}`).toBeLessThan(0.01);
      }
  });

  it("the 50th city's area is its share of the first's: a tenth today, not a quarter", () => {
    stubViewport(DESK);
    const r = radii(mount(<ListenerMap />));
    expect((r.get(last.rank)! / r.get(first.rank)!) ** 2).toBeCloseTo(last.listeners / first.listeners, 3);
  });

  it("the biggest dot is Rmax: 9.2 units on the laptop, 18 on the phone", () => {
    expect(RMAX_DESKTOP).toBe(9.2);
    expect(RMAX_PHONE).toBe(18);
    stubViewport(DESK);
    expect(radii(mount(<ListenerMap />)).get(first.rank)).toBeCloseTo(RMAX_DESKTOP, 3);
  });

  it("no dot is floored on the laptop at 1440", () => {
    stubViewport(DESK);
    const k = DESK / MAP_W;
    for (const [rank, v] of radii(mount(<ListenerMap />))) expect(v * k, `No. ${rank}`).toBeGreaterThan(DOT_FLOOR_PX);
  });

  // An alarm for a person, not a fact about any one reading: a reading whose
  // smallest city is under a fourteenth of its biggest would floor a phone dot.
  it.skipIf(process.env.PUBLISH_GATE === "1")("the phone's Rmax keeps all 50 dots above the 2px floor at 402 (C-19)", () => {
    expect(dotRadius(last.listeners, first.listeners, RMAX_PHONE) * (PHONE / MAP_W)).toBeGreaterThanOrEqual(DOT_FLOOR_PX);
    // And on the narrowest 402-class card the plan measured (330px).
    expect(dotRadius(last.listeners, first.listeners, RMAX_PHONE) * (330 / MAP_W)).toBeGreaterThanOrEqual(DOT_FLOOR_PX);
  });

  it("the floor holds at every zoom: a dot is never under 2 CSS px", () => {
    stubViewport(282); // a 320 phone's card
    const el = mount(<ListenerMap layout="phone" />);
    const k = 282 / MAP_W;
    for (const [rank, v] of radii(el)) expect(v * k, `No. ${rank}`).toBeGreaterThanOrEqual(DOT_FLOOR_PX - 1e-3);
  });

  it("negative control: the shipped radius rule (a floor plus a square root) drew the 50th city at about a quarter of Lagos's area", () => {
    // ListenerMap.tsx:41–42, 66 on main e85e6efe.
    const shipped = "const R_MIN = 2.6; const R_MAX = 9.2; r: R_MIN + (R_MAX - R_MIN) * Math.sqrt(c.listeners / max)";
    const R_MIN = Number(shipped.match(/R_MIN = ([\d.]+)/)![1]);
    const R_MAX = Number(shipped.match(/R_MAX = ([\d.]+)/)![1]);
    const r = (l: number) => R_MIN + (R_MAX - R_MIN) * Math.sqrt(l / first.listeners);
    const area = (r(last.listeners) / r(first.listeners)) ** 2;
    expect(area).toBeCloseTo(0.26, 2);
    expect(Math.abs(area / (last.listeners / first.listeners) - 1)).toBeGreaterThan(0.01);
  });
});

describe("listenerDots: one radius rule, server-safe, for the map and its link preview", () => {
  const lib = readFileSync("app/lib/listenerDots.ts", "utf8");
  it("the rule's module runs on the server: no client directive, no data import", () => {
    expect(lib).not.toMatch(/^\s*["']use client["']/m);
    expect(lib).not.toMatch(/from\s+["'][^"']*data\/listeners["']/);
  });
  it("the map takes its radius from it and carries no floor-plus-root rule", () => {
    const map = readFileSync("app/components/ListenerMap.tsx", "utf8");
    expect(map).toMatch(/import \{[^}]*\bdotRadius\b[^}]*\} from "\.\.\/lib\/listenerDots"/);
    expect(map).not.toContain("R_MIN");
  });
  it("the link preview carries no copy of the retired floor rule", () => {
    const og = readFileSync("app/music/listeners/opengraph-image.tsx", "utf8");
    expect(og).not.toContain("R_MIN");
    // Once it draws dots (Job 6), it draws them with the shared rule.
    if (/<circle|borderRadius:\s*["']50%/.test(og)) expect(og).toContain("listenerDots");
  });
});
