import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/visualized",
}));

import VisualizedPage from "../../app/records/visualized/page";
import scatterStyles from "../../app/components/ScatterChart.module.css";
import { revenueShows } from "../../app/data/tourRevenue";
import { decades, shortNumber } from "../../app/lib/charts/niceTicks";
import {
  LABEL_ADVANCE,
  LABEL_PX,
  labelColumn,
  scatterGeometry,
  type ScatterPoint,
} from "../../app/lib/charts/scatterGeometry";
import { trees, text } from "../fixtures/phoneTrees";
import { rules } from "../fixtures/cssRules";

/**
 * scatterDecadeTicks (site review 8 Oct 2026, Job 5 · J5-2 (f), fix 113): the
 * tickets-vs-gross scatter is log–log with ticks at the data's own decades,
 * labels his five biggest nights at 11px, and fits a 354px phone column with
 * no sideways scroll. Every expectation is derived from the board's data.
 */
const num = (s: string | undefined) => Number((s ?? "").replace(/,/g, ""));
const plotted = revenueShows.filter((s) => s.tickets && !Number.isNaN(num(s.tickets)));
const xs = plotted.map((s) => num(s.tickets));
const ys = plotted.map((s) => s.revenue);
const his5 = plotted
  .filter((s) => s.artist === "Burna Boy")
  .sort((a, b) => b.revenue - a.revenue)
  .slice(0, 5);

const { desktop, phone } = trees(renderToStaticMarkup(<VisualizedPage />));
const desktopSvg = desktop!.querySelector("#tickets-revenue svg")!;
const phoneSvg = phone!.querySelector('svg[aria-label^="Tickets sold against box-office gross"]')!;

describe("decades(min, max)", () => {
  it("runs from the decade at or under the least value to the one at or over the most", () => {
    expect(decades(525, 60000)).toEqual([100, 1e3, 1e4, 1e5]);
    expect(decades(47221, 6.15e6)).toEqual([1e4, 1e5, 1e6, 1e7]);
    expect(decades(1000, 1000)).toEqual([1e3, 1e4]);
    expect([100, 1e3, 1e4, 1e5, 1e6, 1e7].map(shortNumber)).toEqual(["100", "1k", "10k", "100k", "1M", "10M"]);
  });
});

describe("the scatter is log–log on the data's decades, both layouts", () => {
  const wantX = decades(Math.min(...xs), Math.max(...xs)).map(shortNumber);
  const wantY = decades(Math.min(...ys), Math.max(...ys)).map((v) => `$${shortNumber(v)}`);

  it.each([
    ["desktop", () => desktopSvg],
    ["phone", () => phoneSvg],
  ])("%s: the ticks are the decades of the plotted shows", (_, svg) => {
    const ticks = [...svg().querySelectorAll("text")].filter((t) => t.getAttribute("class")?.includes(scatterStyles.tick));
    const labels = ticks.map(text);
    expect(labels.filter((l) => l.startsWith("$"))).toEqual(wantY);
    expect(labels.filter((l) => !l.startsWith("$"))).toEqual(wantX);
  });

  it("every plotted show sits inside the frame", () => {
    const [lo, hi] = [decades(Math.min(...xs), Math.max(...xs)), decades(Math.min(...ys), Math.max(...ys))];
    for (const x of xs) expect(x >= lo[0] && x <= lo[lo.length - 1]).toBe(true);
    for (const y of ys) expect(y >= hi[0] && y <= hi[hi.length - 1]).toBe(true);
  });
});

describe("his five biggest nights are labelled, and the labels clear every dot", () => {
  it.each([
    ["desktop", () => desktopSvg],
    ["phone", () => phoneSvg],
  ])("%s: exactly five labels, his top five by gross", (_, svg) => {
    const labels = [...svg().querySelectorAll(`text.${scatterStyles.pointLabel}`)].map(text);
    expect(labels.length).toBe(5);
    expect(new Set(labels)).toEqual(new Set(his5.map((s) => s.venue.replace(/ Arena$/, ""))));
  });

  const points: ScatterPoint[] = plotted.map((s) => ({
    x: num(s.tickets),
    y: s.revenue,
    title: "",
    tone: s.artist === "Burna Boy" ? "gold" : "muted",
    label: his5.includes(s) ? s.venue.replace(/ Arena$/, "") : undefined,
  }));
  const dx = decades(Math.min(...xs), Math.max(...xs));
  const dy = decades(Math.min(...ys), Math.max(...ys));

  it.each([
    ["the 390 phone's 354px column", 354, 300],
    ["the 402 phone's 366px column", 366, 300],
    ["a 320 phone's 284px column", 284, 300],
    ["the desktop chart (viewBox units)", 720, 440],
  ])("%s: no label box overlaps another label or a dot", (_, w, h) => {
    const g = scatterGeometry({ w, h, xMin: dx[0], xMax: dx[dx.length - 1], yMin: dy[0], yMax: dy[dy.length - 1], scale: "log" });
    const placed = labelColumn(points, g);
    expect(placed.length).toBe(5);
    // Space Mono 11px: the box the collision test measures.
    for (const p of placed) expect(p.box.x1 - p.box.x0).toBeCloseTo(p.text.length * LABEL_ADVANCE * (LABEL_PX / 11), 5);
    for (let i = 1; i < placed.length; i++) expect(placed[i].box.y0).toBeGreaterThanOrEqual(placed[i - 1].box.y1);
    for (const p of placed) {
      expect(p.box.x0, p.text).toBeGreaterThanOrEqual(g.m.left);
      for (const d of points) {
        const cx = g.px(d.x), cy = g.py(d.y), r = d.tone === "muted" ? 5 : 6;
        const nx = Math.max(p.box.x0, Math.min(cx, p.box.x1)), ny = Math.max(p.box.y0, Math.min(cy, p.box.y1));
        expect(Math.hypot(nx - cx, ny - cy), `${p.text} over a dot at ${Math.round(cx)},${Math.round(cy)}`).toBeGreaterThanOrEqual(r);
      }
    }
  });
});

describe("the phone scatter fits its column", () => {
  it("no 460px floor and no scroll box on the phone", () => {
    const css = rules(readFileSync("app/components/ScatterChart.module.css", "utf8"));
    const pxBox = css.filter((r) => r.selector === ".pxBox").map((r) => r.body).join(";");
    expect(pxBox).not.toMatch(/min-width/);
    expect(pxBox).toMatch(/width: 100%/);
    expect(phoneSvg.closest(`.${scatterStyles.wrap}`)).toBeNull();
    expect(phoneSvg.closest("[tabindex]")).toBeNull();
  });

  it("the phone note no longer says to swipe", () => {
    expect(text(phone!)).not.toContain("Swipe the chart");
    expect(text(phone!)).toContain("Each dot is one show — how a night's attendance turned into its gross.");
  });
});

describe("negative control: the shipped linear axes piled the shows into the first tick", () => {
  it("on 0–65k tickets, almost every show sat in the first 20k of the axis; on decades they spread", () => {
    // page.tsx:675–677 on main e85e6efe: xMax={65000}, ticks 0 · 20k · 40k · 60k.
    const linear = scatterGeometry({ w: 720, h: 440, xMax: 65000, yMax: 6.5e6 });
    const plotW = 720 - linear.m.left - linear.m.right;
    const small = xs.filter((x) => x < 20000);
    expect(small.length / xs.length).toBeGreaterThan(0.75);
    const spanOf = (g: typeof linear) => (Math.max(...small.map(g.px)) - Math.min(...small.map(g.px))) / plotW;
    expect(spanOf(linear)).toBeLessThan(0.31);
    const dx = decades(Math.min(...xs), Math.max(...xs));
    const log = scatterGeometry({ w: 720, h: 440, xMin: dx[0], xMax: dx[dx.length - 1], yMin: 1e4, yMax: 1e7, scale: "log" });
    expect(spanOf(log)).toBeGreaterThan(spanOf(linear) * 1.5);
  });
});
