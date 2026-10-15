import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenersPage from "../../app/music/listeners/page";
import phoneStyles from "../../app/components/mobileListeners.module.css";
import deskStyles from "../../app/music/listeners/listeners.module.css";
import {
  listenerCities,
  listenerInsights,
  compactListeners,
  MONTHLY_LISTENERS_ON_READ,
  listenersReadOnLabel,
  LISTENERS_READ_ON,
} from "../../app/data/listeners";
import { read, winning } from "../fixtures/cssRules";

/**
 * listenersInsight (site review 8 Oct 2026, Job 5 · J5-5, fix 106): the
 * insight row under the hero, on both layouts. Each tile names its own
 * denominator — the second is Nigeria's share of the top 50, not of all his
 * listeners — and the meta line keeps one number format. On the phone the
 * list prints full figures, so the screen has one format (compact only in
 * the insight row).
 *
 * The figures are worked out here from the 50 rows themselves, not from the
 * helpers the page prints them with.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const doc = () => parse(renderToStaticMarkup(<ListenersPage />));

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const top50 = sum(listenerCities.map((c) => c.listeners));
const ng = listenerCities.filter((c) => c.country === "Nigeria");
const AFRICAN = new Set(["Nigeria", "Kenya", "South Africa", "Ghana"]);
const outside = listenerCities.filter((c) => !AFRICAN.has(c.country)).length;
const pct = (n: number, of: number) => `${Math.round((100 * n) / of)}%`;
const millions = (n: number) => `${(n / 1e6).toFixed(2)}M`;

const EXPECT = [
  { value: pct(top50, MONTHLY_LISTENERS_ON_READ), label: `in the top ${listenerCities.length} cities` },
  { value: pct(sum(ng.map((c) => c.listeners)), top50), label: `of the top ${listenerCities.length} · Nigeria's ${ng.length} cities` },
  { value: `${outside} of ${listenerCities.length}`, label: "outside Africa" },
];
const META = `${millions(top50)} of ${millions(MONTHLY_LISTENERS_ON_READ)} monthly listeners · read ${listenersReadOnLabel}`;

describe("listenersInsight: three tiles, each over its own denominator (fix 106)", () => {
  it("the helper's tiles and meta are the reading's own figures", () => {
    const ins = listenerInsights();
    expect(ins.tiles.map((t) => ({ value: t.of ? `${t.value} ${t.of}` : t.value, label: t.label }))).toEqual(EXPECT);
    expect(ins.meta).toBe(META);
    expect(LISTENERS_READ_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each([
    ["phone", phoneStyles],
    ["desktop", deskStyles],
  ] as const)("the %s layout prints them under the hero lede, figures then labels", (_, s) => {
    const d = doc();
    const row = d.querySelector(`.${s.insights}`)!;
    expect(row).not.toBeNull();
    // Under the lede: the lede is the row's previous sibling.
    expect(row.previousElementSibling?.className).toBe(s.lede);
    const tiles = [...row.querySelectorAll(`.${s.insight}`)].map((t) => ({
      value: t.querySelector(`.${s.insightValue}`)!.textContent!.replace(/\s+/g, " ").trim(),
      label: t.querySelector(`.${s.insightLabel}`)!.textContent,
    }));
    expect(tiles).toEqual(EXPECT);
    expect(row.nextElementSibling?.textContent).toBe(META);
    expect(row.nextElementSibling?.className).toBe(s.insightMeta);
  });

  it("the second tile is a share of the top 50; of all his listeners it would be a far smaller figure", () => {
    const ngSum = sum(ng.map((c) => c.listeners));
    expect(listenerInsights().tiles[1].value).toBe(pct(ngSum, top50));
    expect(pct(ngSum, MONTHLY_LISTENERS_ON_READ)).not.toBe(listenerInsights().tiles[1].value);
  });

  it.each([
    ["app/components/mobileListeners.module.css", (m: string | null) => m === null || /max-width/.test(m)],
    ["app/music/listeners/listeners.module.css", (m: string | null) => m === null],
  ] as const)("%s: the labels are mono 700 at 11px, the figures ink", (file, at) => {
    const css = read(file);
    expect(winning(css, ".insightLabel", "font-family", at)).toBe("var(--font-mono), monospace");
    expect(winning(css, ".insightLabel", "font-weight", at)).toBe("700");
    expect(winning(css, ".insightLabel", "font-size", at)).toBe("11px");
    expect(winning(css, ".insightValue", "color", at)).toBe("var(--text)");
  });

  it("negative control: the canvas meta mixed a full figure with a compact one", () => {
    // Data Modules.dc.html §5, the drawn meta line (fix 106 rejects it).
    const canvas = "15,087,851 of 45.97M monthly listeners · read 2 Oct 2026";
    const [a, b] = canvas.split(" of ");
    expect(/,/.test(a) && /M\b/.test(b)).toBe(true);
    const [x, y] = META.split(" of ");
    expect(/,/.test(x) || /,/.test(y.split(" ")[0])).toBe(false);
  });
});

describe("one format per screen on the phone: the list prints full figures", () => {
  const full = /^\d{1,3}(,\d{3})*$/;

  it("every row of The 50 and every city in By country is a full figure", () => {
    const d = doc();
    const phone = d.querySelector(`.${phoneStyles.screen}`)!;
    const counts = [...phone.querySelectorAll(`.${phoneStyles.cityCount}`)].map((c) => c.textContent!);
    expect(counts).toHaveLength(listenerCities.length);
    for (const c of counts) expect(c).toMatch(full);
    for (const p of phone.querySelectorAll(`.${phoneStyles.regionList}`)) expect(p.textContent).not.toMatch(/\d(?:\.\d+)?[MK]\b/);
  });

  it("negative control: the shipped row printed the compact figure", () => {
    // MobileListeners.tsx:94 on main e85e6efe: {compactListeners(c.listeners)}.
    const shipped = (n: number) => compactListeners(n);
    expect(shipped(listenerCities[0].listeners)).not.toMatch(full);
  });
});
