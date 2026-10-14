import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/visualized",
}));

import VisualizedPage from "../../app/records/visualized/page";
import seriesStyles from "../../app/components/TimeSeriesChart.module.css";
import barStyles from "../../app/components/RankedBars.module.css";
import yearStyles from "../../app/components/yearBars.module.css";
import vizStyles from "../../app/components/mobileVisualized.module.css";
import { monthlyListenersSeries } from "../../app/data/trends";
import { allNoms, AWARDS_EDITED_ON } from "../../app/data/awards";
import { intlCertHistory, CERTS_VERIFIED_ON } from "../../app/data/certifications";
import { niceTicks } from "../../app/lib/charts/niceTicks";
import { SERIES_TICKS } from "../../app/lib/charts/timeSeriesGeometry";
import { shortStamp } from "../../app/lib/dates";
import { trees, text } from "../fixtures/phoneTrees";

/**
 * visualizedEncodings (site review 8 Oct 2026, Job 5 · J5-2 (a), (b), (d),
 * (e); canvas "Data Modules" §2). Every figure is read from the data, never
 * pinned: the stats bots move the listener series.
 */
const { desktop, phone } = trees(renderToStaticMarkup(<VisualizedPage />));
const vMax = Math.max(...monthlyListenersSeries.map((p) => p.value));

const winYears = [...new Set(allNoms.filter((n) => n.won).map((n) => n.year))].sort((a, b) => a - b);
const winRunning = Number(AWARDS_EDITED_ON.slice(0, 4));
const winSpan = (() => {
  const last = Math.max(winYears[winYears.length - 1], winRunning);
  return Array.from({ length: last - winYears[0] + 1 }, (_, i) => winYears[0] + i);
})();
const certRunning = Number(CERTS_VERIFIED_ON.slice(0, 4));

describe("(a) the climb: line only, from zero, round ticks", () => {
  const climbs = [desktop!.querySelector("#the-climb svg")!, phone!.querySelector('svg[aria-label^="Burna Boy\'s Spotify monthly listeners"]')!];

  it("both layouts draw the line with no area under it", () => {
    for (const svg of climbs) {
      expect(svg).not.toBeNull();
      expect(svg.querySelector(`.${seriesStyles.area}`)).toBeNull();
      expect(svg.querySelector(`.${seriesStyles.line}`)).not.toBeNull();
    }
  });

  it("the y axis starts at 0 and its ticks are round (niceTicks)", () => {
    const want = niceTicks(0, vMax).map(SERIES_TICKS.listeners);
    expect(want[0]).toBe("0");
    expect(niceTicks(0, vMax)[niceTicks(0, vMax).length - 1]).toBeGreaterThanOrEqual(vMax);
    for (const svg of climbs) {
      const yTicks = [...svg.querySelectorAll(`text[text-anchor="end"][dominant-baseline="middle"]`)].map(text);
      expect(yTicks).toEqual(want);
      // The tick at 0 sits on the plot's baseline.
      const grid = [...svg.querySelectorAll(`line.${seriesStyles.grid}`)].map((l) => Number(l.getAttribute("y1")));
      const [, , , h] = svg.getAttribute("viewBox")!.split(" ").map(Number);
      expect(Math.max(...grid)).toBeCloseTo(h - 30, 5);
    }
  });

  it("negative control: the shipped band put the axis floor above zero", () => {
    // TimeSeriesChart.tsx:100–103 and 123 on main e85e6efe.
    const vMin = Math.min(...monthlyListenersSeries.map((p) => p.value));
    const band = vMax - vMin;
    const yLo = vMin - band * 0.18; // const yLo = vMin - band * 0.18;
    const shippedTicks = [vMin, (vMin + vMax) / 2, vMax];
    expect(yLo).toBeGreaterThan(0);
    expect(shippedTicks[0]).not.toBe(0);
    expect(readFileSync("app/components/TimeSeriesSvg.tsx", "utf8")).toContain("{area && <path className={styles.area}");
  });
});

describe("(b) wins per year as bars, every year labelled", () => {
  it("desktop: one bar per year from the first win to the running year, full years", () => {
    const fig = desktop!.querySelector("#wins-by-year figure")!;
    expect(fig.querySelectorAll(`.${yearStyles.bar}`).length).toBe(winSpan.length);
    expect([...fig.querySelectorAll(`.${yearStyles.year}`)].map(text)).toEqual(winSpan.map(String));
    // No line chart is left in the section.
    expect(desktop!.querySelector("#wins-by-year svg")).toBeNull();
  });

  it("phone: the same bars, two-digit years, and a key that spells them out", () => {
    const block = [...phone!.querySelectorAll(`.${vizStyles.chart}`)].find((b) => /years of winning$/i.test(text(b.querySelector("h2"))))!;
    expect(block.querySelectorAll(`.${yearStyles.bar}`).length).toBe(winSpan.length);
    expect([...block.querySelectorAll(`.${yearStyles.year}`)].map(text)).toEqual(winSpan.map((y) => String(y).slice(-2)));
    const first = winSpan[0], last = winSpan[winSpan.length - 1];
    expect(text(block.querySelector(`.${yearStyles.key}`))).toContain(`'${String(first).slice(-2)}–'${String(last).slice(-2)} = ${first}–${last}`);
  });

  it("the bars are --other, the labels 11px mono", () => {
    const css = readFileSync("app/components/yearBars.module.css", "utf8");
    expect(css).toMatch(/\.bar \{[^}]*background: var\(--other\);/);
    expect(css).toMatch(/\.year \{[^}]*font-size: 11px;/);
    expect(css).not.toMatch(/--gold/);
  });
});

describe("(d) a chart with a gold bar says what the gold is", () => {
  it("desktop: every RankedBars figure with a gold row has a key or a caption naming the gold", () => {
    const figs = [...desktop!.querySelectorAll("figure")].filter((f) => f.querySelector(`.${barStyles.gold}`));
    expect(figs.length).toBeGreaterThan(0);
    for (const f of figs) {
      const section = f.closest("section")!;
      const key = text(f.querySelector(`.${barStyles.key}`));
      const caption = text(section.querySelector("p"));
      expect(`${key} ${caption}`, section.id).toMatch(/gold/i);
    }
    expect(text(desktop!.querySelector(`#african-artists .${barStyles.key}`))).toBe("Gold = Burna Boy");
  });

  it("phone: every bar set with a gold bar says so in its note", () => {
    for (const block of phone!.querySelectorAll(`.${vizStyles.chart}`)) {
      if (!block.querySelector(`.${vizStyles.barFillHis}`)) continue;
      expect(text(block.querySelector(`.${vizStyles.chartNote}`))).toMatch(/^Gold is /);
    }
  });
});

describe("(e) every year on the axis; the running year hatched and dated", () => {
  it("desktop cert pace: every year from the first logged to the running one, the running one hatched", () => {
    const years = [...new Set(intlCertHistory.map((e) => e.year))].sort((a, b) => a - b);
    const span = Array.from({ length: Math.max(years[years.length - 1], certRunning) - years[0] + 1 }, (_, i) => years[0] + i);
    const rows = [...desktop!.querySelectorAll(`#cert-pace .${barStyles.row}`)];
    expect(rows.map((r) => text(r.querySelector(`.${barStyles.name}`)))).toEqual(span.map(String));
    for (const r of rows) {
      const y = Number(text(r.querySelector(`.${barStyles.name}`)));
      const n = intlCertHistory.filter((e) => e.year === y).length;
      expect(text(r.querySelector(`.${barStyles.value}`))).toBe(String(n));
      expect(r.classList.contains(barStyles.partial)).toBe(y === certRunning);
      expect(r.classList.contains(barStyles.gold)).toBe(false);
    }
    const running = rows.find((r) => r.classList.contains(barStyles.partial))!;
    expect(text(running.querySelector(`.${barStyles.meta}`))).toBe(`so far · verified ${shortStamp(CERTS_VERIFIED_ON)}`);
  });

  it("phone cert pace: the same years, the running one hatched with its date", () => {
    const block = [...phone!.querySelectorAll(`.${vizStyles.chart}`)].find((b) => text(b.querySelector("h2")) === "The pace of the certifications")!;
    const rows = [...block.querySelectorAll(`.${vizStyles.barRow}`)];
    const hatched = rows.filter((r) => r.querySelector(`.${vizStyles.barFillPartial}`));
    expect(hatched.length).toBe(1);
    expect(text(hatched[0])).toContain(`${certRunning} · so far · verified ${shortStamp(CERTS_VERIFIED_ON)}`);
    expect(block.querySelector(`.${vizStyles.barFillHis}`)).toBeNull();
  });

  it("wins: the running year's bar is hatched and the key dates it", () => {
    for (const fig of [desktop!.querySelector("#wins-by-year figure")!, phone!.querySelector(`.${yearStyles.phone}`)!]) {
      const bars = [...fig.querySelectorAll(`.${yearStyles.bar}`)];
      const i = winSpan.indexOf(winRunning);
      expect(bars.map((b) => b.classList.contains(yearStyles.partial))).toEqual(winSpan.map((_, j) => j === i));
      expect(text(fig.querySelector(`.${yearStyles.key}`))).toMatch(
        new RegExp(`hatched = ${winRunning} so far · updated ${shortStamp(AWARDS_EDITED_ON)}$`, "i"),
      );
    }
  });

  it("negative control: the shipped pace skipped a year and painted the running one gold", () => {
    // app/records/visualized/page.tsx:142–153 on main e85e6efe: the axis was
    // the set of logged years, so a year with none vanished; and the last one
    // took `tone: year === thisYear ? "gold" : "muted"`.
    const shippedAxis = (log: number[]) => [...new Set(log)].sort((a, b) => a - b);
    expect(shippedAxis([2020, 2022, 2022, 2023])).toEqual([2020, 2022, 2023]); // 2021 gone
    const page = readFileSync("app/records/visualized/page.tsx", "utf8");
    expect(page).not.toContain('tone: year === thisYear ? "gold" : "muted"');
    expect(page).not.toContain("const certYears = [...new Set(intlCertHistory.map((e) => e.year))]");
  });
});
