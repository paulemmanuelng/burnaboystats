import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import PairPage from "../../app/compare/[pair]/page";
import CountryIndexPage from "../../app/compare/in/page";
import CountryPage from "../../app/compare/in/[country]/page";
import styles from "../../app/compare/compare.module.css";
import { CERT_THRESHOLDS } from "../../app/data/certThresholds";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { winning } from "../fixtures/cssRules";

/**
 * J2-8 with fix 37 (design review 8 Oct 2026). The footnotes print only the
 * marks the table uses, under fix 37's five headings — "¹ Not counted · †
 * Multiplier assumed · ‡ This body raised its thresholds since 2015 · § Ratio
 * assumed · ¶ Historic figure" — with no "*" anywhere, in two 62ch columns on
 * desktop and one on the phone. The three method cards stay on /compare and
 * the tool's states; a pair view and every country view say how they count
 * in one paragraph and "The full method ↗" instead.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const board = async (country: string) => root(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));
const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);

const HEADINGS = ["¹ Not counted", "† Multiplier assumed", "‡ This body raised its thresholds since 2015", "§ Ratio assumed", "¶ Historic figure"];
const MARKS = ["¹", "†", "‡", "§", "¶"];

describe("fix 37: the marks the table uses, and only those, under the five headings", () => {
  it("on every 10th pair and on Burna Boy vs Wizkid, every mark in the table has its note and every note's mark is in the table", async () => {
    const pairs = allPairs().filter((_, i) => i % 10 === 0);
    const bvw = allPairs().find(([x, y]) => x.slug === "burna-boy" && y.slug === "wizkid")!;
    const seen = new Set<string>();
    for (const [a, b] of [bvw, ...pairs]) {
      const slug = pairSlug(a, b);
      const page = await pairPage(slug);
      const table = page.querySelector("table");
      if (!table) continue;
      const inTable = new Set([...table.querySelectorAll(`.${styles.mark}`)].flatMap((m) => [...norm(m.textContent)].filter((ch) => MARKS.includes(ch))));
      const headings = [...page.querySelectorAll(`.${styles.notes} > p > strong`)].map((st) => norm(st.textContent));
      for (const h of headings) expect(HEADINGS, `${slug}: "${h}"`).toContain(h);
      const noted = new Set(headings.map((h) => h[0]));
      expect([...noted].sort(), slug).toEqual([...inTable].sort());
      expect(norm(table.textContent), slug).not.toContain("*");
      for (const m of inTable) seen.add(m);
    }
    // The sample exercises every mark but ¶, which only a Greek or Polish row carries.
    for (const m of ["¹", "†", "‡", "§"]) expect([...seen], m).toContain(m);
  }, 60000);

  it("the headings are in the order the marks run, ¹ † ‡ § ¶", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const headings = [...page.querySelectorAll(`.${styles.notes} > p > strong`)].map((st) => norm(st.textContent));
    expect(headings.length).toBeGreaterThan(1);
    expect(headings).toEqual(HEADINGS.filter((h) => headings.includes(h)));
  });
});

describe("J2-8: two 62ch columns on desktop, one on the phone", () => {
  it("the notes' grid", () => {
    for (const w of [901, 1024, 1440]) {
      expect(winning(CSS, ".notes", "grid-template-columns", at(w)), `${w}`).toBe("repeat(2, minmax(0, 62ch))");
      expect(winning(CSS, ".notes", "column-gap", at(w)), `${w}`).toBe("48px");
    }
    for (const w of [320, 390, 900]) expect(winning(CSS, ".notes", "grid-template-columns", at(w)), `${w}`).toBeUndefined();
    // Each note stops at the measure, so a column never runs wider than 62ch.
    expect(winning(CSS, ".notes p", "max-width", at(1440))).toBe("var(--measure)");
  });
});

describe("J2-8: the method cards stay on the tool; a pair and a country view say it in one paragraph", () => {
  const cards = (page: Element) => page.querySelectorAll(`.${styles.method}`).length;
  const hows = (page: Element) => [...page.querySelectorAll(`section.${styles.how}`)];

  it("the tool keeps the three cards: /compare, one side, a record pair", async () => {
    for (const page of [await query({}), await query({ a: "burna-boy" }), await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" })]) {
      expect(cards(page)).toBe(1);
      expect(page.querySelectorAll(`.${styles.method} > div`).length).toBe(3);
      expect(hows(page)).toHaveLength(0);
    }
  });

  it("a pair view: one paragraph, the generic lede, and The full method ↗", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    expect(cards(page)).toBe(0);
    expect(hows(page)).toHaveLength(1);
    expect(norm(hows(page)[0].querySelector("a")?.textContent)).toBe("The full method ↗");
  });

  it("every country view: the lede's first sentence, with its figures derived, and no how-link in the controls or the foot", async () => {
    const uk = CERT_THRESHOLDS.UK.single!.platinum!;
    const sentence = `Every certification is a floor — a Platinum single in the UK means at least ${uk.toLocaleString("en-US")}, and could be ${(uk * 2 - 10_000).toLocaleString("en-US")}.`;
    for (const [label, page] of [
      ["/compare/in", root(renderToStaticMarkup(await CountryIndexPage()))],
      ["?mode=country", await query({ mode: "country" })],
      ["?mode=country&feat=0", await query({ mode: "country", feat: "0" })],
      ["/compare/in/united-states", await board("united-states")],
      ["/compare/in/colombia", await board("colombia")],
      ["a query board", await query({ mode: "country", country: "nigeria", feat: "0" })],
    ] as const) {
      expect(cards(page), label).toBe(0);
      const how = hows(page);
      expect(how, label).toHaveLength(1);
      expect(norm(how[0].querySelector("h2")?.textContent), label).toBe("How this is counted");
      expect(norm(how[0].querySelector(`.${styles.howBody}`)?.textContent), label).toBe(sentence);
      const full = how[0].querySelector("a")!;
      expect(norm(full.textContent), label).toBe("The full method ↗");
      expect(full.getAttribute("href"), label).toBe("/methodology#certified-units");
      expect(page.querySelectorAll(`.${styles.howLink}`).length, label).toBe(0);
    }
  });
});

describe("negative controls", () => {
  it("main's notes were one column, and the live pair page carried the three cards", () => {
    // main e85e6efe, compare.module.css:592-594, verbatim.
    const shipped = ".notes {\n  display: grid;\n  gap: 8px;\n}";
    expect(winning(shipped, ".notes", "grid-template-columns", () => true)).toBeUndefined();
    // live/pair.html (burnaboystats.com, 8 Oct 2026).
    const live = root('<div class="compare-module__-ZWgpW__method"><div><p class="compare-module__-ZWgpW__methodTitle">One plaque per release per country</p></div></div>');
    expect(live.querySelector('[class$="__method"]')).not.toBeNull();
  });

  it("the canvas's invented mark is what the guard would catch", () => {
    // Compare - Oct 2026.dc.html, the FR row's pill (a canvas string, never shipped).
    const canvasPill = "Diamond *";
    expect(canvasPill).toContain("*");
    expect(HEADINGS.map((h) => h[0])).not.toContain("*");
  });
});
