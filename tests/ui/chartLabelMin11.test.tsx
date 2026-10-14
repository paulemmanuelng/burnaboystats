import { readFileSync } from "node:fs";
import { act } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/visualized",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import VisualizedPage from "../../app/records/visualized/page";
import AnalysisPage from "../../app/analysis/page";
import vizStyles from "../../app/components/mobileVisualized.module.css";
import seriesStyles from "../../app/components/TimeSeriesChart.module.css";
import scatterStyles from "../../app/components/ScatterChart.module.css";
import analysisStyles from "../../app/components/mobileAnalysis.module.css";
import peakStyles from "../../app/components/PeakMap.module.css";
import yearStyles from "../../app/components/yearBars.module.css";
import { rules } from "../fixtures/cssRules";

/**
 * chartLabelMin11 (site review 8 Oct 2026, Job 5 · J5-1, fix 115; canvas
 * "Data Modules" §1): chart text is never inside a scaling viewBox on the
 * phone. Each phone chart's SVG has a viewBox equal to its CSS box (kept by a
 * ResizeObserver), so its labels are 11px and its values 13px at 402.
 *
 * The page is rendered in the browser (react-dom/client) with a
 * ResizeObserver that reports the 402 phone's chart box — 402 less the
 * block's 18px gutters, 366 — as browsers do, once, as it starts observing.
 */
const PHONE = 402;
const BOX = { width: PHONE - 2 * 18, height: 240 };

const SHEETS: [Record<string, string>, string][] = [
  [vizStyles, "app/components/mobileVisualized.module.css"],
  [seriesStyles, "app/components/TimeSeriesChart.module.css"],
  [scatterStyles, "app/components/ScatterChart.module.css"],
  [analysisStyles, "app/components/mobileAnalysis.module.css"],
  [peakStyles, "app/components/PeakMap.module.css"],
  [yearStyles, "app/components/yearBars.module.css"],
];
/** A module class as vitest names it, `_{name}_{file hash}`, back to its sheet
 *  and selector (the module objects are proxies, so they cannot be listed). */
const hashOf = (map: Record<string, string>) => map.screen.match(/_([0-9a-z]+)$/i)![1];
const SHEET_BY_HASH = new Map(SHEETS.map(([map, file]) => [hashOf(map), file]));
function sourceOf(cls: string): { file: string; name: string } | null {
  const m = cls.match(/^_(.+)_([0-9a-z]+)$/i);
  const file = m ? SHEET_BY_HASH.get(m[2]) : undefined;
  return m && file ? { file, name: m[1] } : null;
}
const TOKENS = readFileSync("app/globals.css", "utf8");
const token = (name: string) => TOKENS.match(new RegExp(`${name}:\\s*([\\d.]+)px`))?.[1];

/** A media query applies at the phone width (width tests only; others never). */
const atPhone = (media: string | null) => {
  if (media === null) return true;
  const tests = [...media.matchAll(/\((max|min)-width:\s*([\d.]+)px\)/g)];
  if (!tests.length) return false;
  return tests.every(([, k, v]) => (k === "max" ? PHONE <= Number(v) : PHONE >= Number(v)));
};

/** The px font-size the cascade gives an element from its module classes: the
 *  last rule (source order; equal specificity) that declares one wins. */
function fontSize(el: Element): number | null {
  let best: { at: number; v: string } | null = null;
  for (const cls of el.classList) {
    const src = sourceOf(cls);
    if (!src) continue;
    const { file, name } = src;
    {
      for (const r of rules(readFileSync(file, "utf8"))) {
        if (!atPhone(r.media)) continue;
        if (!r.selector.split(",").map((s) => s.trim()).includes(`.${name}`)) continue;
        const v = r.body.match(/(?:^|;|\s)font-size\s*:\s*([^;]+)/)?.[1].trim();
        // Sheets are compared by position only within one file; a class lives in one.
        if (v && (!best || r.at >= best.at)) best = { at: r.at, v };
      }
    }
  }
  if (!best) return null;
  const v = best.v.replace(/\s*\/\*.*$/, "");
  const tok = v.match(/^var\((--[\w-]+)\)$/)?.[1];
  const rem = v.match(/^([\d.]+)rem$/)?.[1];
  if (rem) return Number(rem) * 16;
  const px = tok ? token(tok) : v.match(/^([\d.]+)px$/)?.[1];
  return px ? Number(px) : NaN;
}

/** The CSS px size a class pins on an element (width and height), if any. */
function pinnedBox(el: Element): { w: number; h: number } | null {
  for (const cls of el.classList) {
    const src = sourceOf(cls);
    if (!src) continue;
    const { file, name } = src;
    {
      const body = rules(readFileSync(file, "utf8"))
        .filter((r) => r.media === null && r.selector === `.${name}`)
        .map((r) => r.body)
        .join(";");
      const w = body.match(/(?:^|;|\s)width\s*:\s*([\d.]+)px/)?.[1];
      const h = body.match(/(?:^|;|\s)height\s*:\s*([\d.]+)px/)?.[1];
      if (w && h) return { w: Number(w), h: Number(h) };
    }
  }
  return null;
}

let root: Root | null = null;
let host: HTMLDivElement | null = null;
beforeEach(() => {
  class PhoneRO {
    constructor(private cb: ResizeObserverCallback) {}
    observe() {
      this.cb([{ contentRect: BOX } as unknown as ResizeObserverEntry], this as unknown as ResizeObserver);
    }
    unobserve() {}
    disconnect() {}
  }
  vi.stubGlobal("ResizeObserver", PhoneRO);
});
afterEach(() => {
  act(() => root?.unmount());
  host?.remove();
  root = null;
  host = null;
  vi.unstubAllGlobals();
});

function mount(page: React.ReactElement) {
  host = document.body.appendChild(document.createElement("div"));
  root = createRoot(host);
  act(() => root!.render(page));
  return host;
}

const phoneOf = (el: HTMLElement, screen: string) => el.querySelector(`.${screen}`)!;

describe("chartLabelMin11: phone chart text is 11px or more at 402", () => {
  it("/records/visualized: every SVG that holds text is px-true", () => {
    const phone = phoneOf(mount(<VisualizedPage />), vizStyles.screen);
    const svgs = [...phone.querySelectorAll("svg")].filter((s) => s.querySelector("text"));
    // The line chart, the scatter and the three donuts (the wins are HTML bars).
    expect(svgs.length).toBeGreaterThanOrEqual(5);
    for (const svg of svgs) {
      const [, , w, h] = (svg.getAttribute("viewBox") ?? "").split(/\s+/).map(Number);
      const pinned = pinnedBox(svg);
      const want = pinned ?? { w: BOX.width, h: BOX.height };
      expect({ w, h }, svg.getAttribute("aria-label") ?? "").toEqual(want);
    }
  });

  it("/records/visualized: every chart label is ≥11px, every bar value 13px", () => {
    const phone = phoneOf(mount(<VisualizedPage />), vizStyles.screen);
    const texts = [...phone.querySelectorAll("svg text")];
    expect(texts.length).toBeGreaterThan(10);
    for (const t of texts) {
      const size = fontSize(t);
      expect(size, `<text class="${t.getAttribute("class")}">${t.textContent}`).not.toBeNull();
      expect(size!).toBeGreaterThanOrEqual(11);
    }
    // The HTML text inside the chart blocks (bar rows, legends, route rows).
    const blocks = [...phone.querySelectorAll(`.${vizStyles.chart}, .${vizStyles.donut}`)];
    expect(blocks.length).toBeGreaterThan(0);
    for (const b of blocks) {
      for (const el of b.querySelectorAll("*")) {
        if (el.closest("svg")) continue;
        const size = fontSize(el);
        if (size === null) continue; // inherits
        expect(size, `.${el.getAttribute("class")} "${el.textContent?.slice(0, 30)}"`).toBeGreaterThanOrEqual(11);
      }
    }
    const values = [...phone.querySelectorAll(`.${vizStyles.barValue}`)];
    expect(values.length).toBeGreaterThan(0);
    for (const v of values) expect(fontSize(v)).toBe(13);
  });

  it("/analysis: the phone tree's chart text follows the same rule", () => {
    const phone = phoneOf(mount(<AnalysisPage />), analysisStyles.screen);
    expect(phone).not.toBeNull();
    for (const svg of [...phone.querySelectorAll("svg")].filter((s) => s.querySelector("text"))) {
      const [, , w] = (svg.getAttribute("viewBox") ?? "").split(/\s+/).map(Number);
      expect(w).toBe(pinnedBox(svg)?.w ?? BOX.width);
      for (const t of svg.querySelectorAll("text")) expect(fontSize(t)!).toBeGreaterThanOrEqual(11);
    }
  });

  it("desktop keeps its fixed viewBoxes (C-20: px-true is the phone's)", () => {
    const desk = mount(<VisualizedPage />).querySelector('[class*="desktopOnly"]')!;
    const boxes = [...desk.querySelectorAll("svg[viewBox]")].map((s) => s.getAttribute("viewBox"));
    expect(boxes).toContain("0 0 720 260"); // the two dated line charts
    expect(boxes).toContain("0 0 720 440"); // the scatter
  });

  it("negative control: the shipped phone line chart drew its 15px axis at ~7.6px", () => {
    // app/components/TimeSeriesChart.tsx:79 and TimeSeriesChart.module.css:75–76
    // on main e85e6efe: a fixed 720-unit viewBox, and the phone's bump.
    const shippedTsx = "  const W = 720;";
    const shippedCss = "@media (max-width: 720px) {\n  .axis { font-size: 15px; }";
    const W = Number(shippedTsx.match(/const W = (\d+);/)![1]);
    const set = Number(shippedCss.match(/\.axis \{ font-size: (\d+)px; \}/)![1]);
    const onScreen = (set * BOX.width) / W;
    expect(onScreen).toBeCloseTo(7.6, 1);
    expect(onScreen).toBeLessThan(11);
    // The same text on a px-true viewBox is its CSS size.
    expect(readFileSync("app/components/TimeSeriesChart.module.css", "utf8")).not.toMatch(/@media \(max-width: 720px\)/);
  });
});
