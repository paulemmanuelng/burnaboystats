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
import styles from "../../app/compare/compare.module.css";
import { artistBySlug, compare, marketKey } from "../../app/lib/certUnits";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { rules, winning } from "../fixtures/cssRules";

/**
 * J2-4 (design review 8 Oct 2026, fixes 41, 42, 52): the butterfly. In every
 * row the side with the larger counted units leads — a solid ink bar
 * (.bfBarLead) and a bold ink figure (.bfLead) — and the other trails, an
 * outlined bar and a muted figure. A tie styles both as leading. A side with
 * no certification reads "No cert" and draws no bar; an unpriced market
 * (Colombia) draws no bar on either side. Each bar is that side's units over
 * the row's larger figure (--pct). Nothing in the table is gold, whoever leads.
 *
 * The response's own name for this test: "the leader's bar is solid in every
 * row, and none in Colombia".
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const num = (s: string | null | undefined) => Number(norm(s).replace(/,/g, ""));
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

/** A class selector by the module's name for it: the test build's, or the served page's hashed one. */
type Sel = (name: string) => string;
const built: Sel = (n) => `.${(styles as Record<string, string>)[n]}`;
const served: Sel = (n) => `[class~="compare-module__-ZWgpW__${n}"]`;

/** Each country row's broken promises, in words. */
function rowProblems(tr: Element, $: Sel = built, figure = "bfFigure"): string[] {
  const out: string[] = [];
  const name = norm(tr.querySelector($("countryName"))?.textContent) || "?";
  const cells = [...tr.children].slice(1);
  const sides = cells.map((td) => {
    const fig = td.querySelector($(figure));
    const bar = td.querySelector($("bfBar"));
    return {
      units: fig ? num(fig.textContent) : null,
      fig: fig ? (fig.matches($("bfLead")) ? "lead" : fig.matches($("bfTrail")) ? "trail" : "unstyled") : null,
      bar: bar ? (bar.matches($("bfBarLead")) ? "lead" : bar.matches($("bfBarTrail")) ? "trail" : "?") : null,
      pct: bar ? Number((bar as HTMLElement).style.getPropertyValue("--pct")) : null,
      none: norm(td.textContent) === "No cert",
      text: norm(td.textContent),
    };
  });
  if (sides.length !== 2) return [`${name}: ${sides.length} side cells`];
  const counted = sides.map((s) => s.units ?? 0);
  const top = Math.max(...counted);
  if (top > 0 && !sides.some((s) => s.bar === "lead")) out.push(`${name}: no leader bar`);
  sides.forEach((s, i) => {
    const other = counted[1 - i];
    if (s.none && s.bar) out.push(`${name}: "No cert" draws a bar`);
    if (s.units === null) {
      if (s.bar) out.push(`${name}: a side with no priced units draws a bar`);
      return;
    }
    const leads = s.units >= other;
    if (s.units > 0 && s.bar !== (leads ? "lead" : "trail")) out.push(`${name}: side ${"AB"[i]} bar is ${s.bar}, want ${leads ? "lead" : "trail"}`);
    if (s.fig !== (leads ? "lead" : "trail")) out.push(`${name}: side ${"AB"[i]} figure ${s.fig}, want ${leads ? "lead" : "trail"}`);
    if (s.units > 0 && Math.abs((s.pct ?? -1) - s.units / top) > 1e-9) out.push(`${name}: side ${"AB"[i]} bar ${s.pct}, want ${s.units / top}`);
  });
  if (name === "Colombia" && sides.some((s) => s.bar)) out.push("Colombia: a bar on an unpriced market");
  return out;
}

const rowsOf = (page: Element) => [...page.querySelectorAll("table tbody tr")].filter((tr) => !tr.matches(built("collapseRow")));

describe("J2-4: the leader's bar is solid in every row, and there is none in Colombia", () => {
  it("every 10th pair, in its default view", async () => {
    const wrong: string[] = [];
    for (const [a, b] of allPairs().filter((_, i) => i % 10 === 0)) {
      const page = await pairPage(pairSlug(a, b));
      const rows = rowsOf(page);
      expect(rows.length, pairSlug(a, b)).toBeGreaterThan(0);
      for (const tr of rows) wrong.push(...rowProblems(tr).map((w) => `${pairSlug(a, b)}: ${w}`));
    }
    expect(wrong).toEqual([]);
  }, 30000);

  it.each([
    ["features off", { feat: "0" }],
    ["Nigeria included", { ng: "1" }],
    ["every row (all=1)", { all: "1" }],
  ] as const)("Burna Boy vs Wizkid, %s", async (_label, sw) => {
    const page = await query({ a: "burna-boy", b: "wizkid", ...sw });
    const rows = rowsOf(page);
    expect(rows.length).toBeGreaterThan(10);
    expect(rows.flatMap((tr) => rowProblems(tr))).toEqual([]);
  });

  it("a song pair: Last Last vs Essence", async () => {
    const page = await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" });
    const rows = rowsOf(page);
    expect(rows.length).toBeGreaterThan(5);
    expect(rows.flatMap((tr) => rowProblems(tr))).toEqual([]);
    // One release a side: no count line in a record mode.
    expect(page.querySelector(`table ${built("bfCount")}`)).toBeNull();
  });

  it("the figures are the engine's: Burna Boy vs Wizkid's rows, in the order compare() gives them", async () => {
    const c = compare(artistBySlug("burna-boy")!, artistBySlug("wizkid")!, { includeFeatures: true });
    const page = await pairPage("burna-boy-vs-wizkid");
    const rows = rowsOf(page);
    expect(rows.length).toBe(c.rows.length);
    rows.forEach((tr, i) => {
      const r = c.rows[i];
      const figs = [...tr.children].slice(1).map((td) => td.querySelector(built("bfFigure")));
      expect(figs.map((f) => (f ? num(f.textContent) : null)), marketKey(r.country, r.program)).toEqual(
        [r.a, r.b].map((l) => (l && l.counted ? l.units : null)),
      );
    });
  });

  it("a tie styles both sides as leading, naming no leader", async () => {
    // A level market on a real page: the engine's own rows, found, not typed.
    let found = 0;
    for (const [a, b] of allPairs()) {
      const c = compare(a, b, { includeFeatures: true });
      const tie = c.rows.find((r) => r.a?.counted && r.b?.counted && r.a.units === r.b.units && r.a.units > 0);
      if (!tie) continue;
      const page = await pairPage(pairSlug(a, b));
      const i = c.rows.indexOf(tie);
      const tr = rowsOf(page)[i];
      const cells = [...tr.children].slice(1);
      expect(cells.map((td) => td.querySelector(built("bfBar"))!.matches(built("bfBarLead"))), pairSlug(a, b)).toEqual([true, true]);
      expect(cells.map((td) => td.querySelector(built("bfFigure"))!.matches(built("bfLead")))).toEqual([true, true]);
      expect(rowProblems(tr)).toEqual([]);
      if (++found >= 3) break;
    }
    expect(found, "the premise: some pair has a level market").toBeGreaterThan(0);
  }, 30000);

  it("no .bf* rule, and no rule for the table's links, declares a gold token (fix 52)", () => {
    const gold = /var\(--gold[\w-]*\)/;
    const bf = rules(CSS).filter((r) => /\.(bf[A-Z]\w*|countryLink|rowGo)\b/.test(r.selector));
    expect(bf.length).toBeGreaterThan(15);
    expect(bf.filter((r) => gold.test(r.body)).map((r) => r.selector)).toEqual([]);
  });

  it("the phone row is one link: the name's ::after spans the positioned row, with a muted →", () => {
    const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);
    expect(winning(CSS, ".countryLink::after", "inset", at(390))).toBe("0");
    expect(winning(CSS, ".countryLink::after", "position", at(390))).toBe("absolute");
    expect(winning(CSS, ".table tr", "position", at(390))).toBe("relative");
    expect(winning(CSS, ".rowGo", "color", at(390))).toBe("var(--text-muted)");
    // Desktop links the underlined name only, with no → (fix 51).
    expect(winning(CSS, ".rowGo", "display", at(1440))).toBe("none");
    expect(winning(CSS, ".countryLink::after", "inset", at(1440))).toBeUndefined();
  });

  it("the desktop link is the name alone; the flag and the code sit outside it", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    for (const tr of rowsOf(page)) {
      const a = tr.querySelector("a");
      if (!a) continue;
      expect(norm(a.textContent)).toBe(norm(tr.querySelector(built("countryName"))?.textContent));
      expect(a.querySelector(built("countryCode"))).toBeNull();
      expect(a.querySelector(built("flag"))).toBeNull();
    }
  });

  it("the butterfly's phone code is muted; the /compare/in index, which shares the class, keeps main's ink (review, 14 Oct 2026)", async () => {
    const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);
    expect(winning(CSS, ".countryCode", "color", at(390))).toBe("var(--text)");
    expect(winning(CSS, ".bfCountry .countryCode", "color", at(390))).toBe("var(--text-muted)");
    // The premise: the index's codes sit outside any butterfly cell, the pair's inside one.
    const index = root(renderToStaticMarkup(await CountryIndexPage()));
    const codes = [...index.querySelectorAll(built("countryCode"))];
    expect(codes.length).toBeGreaterThan(20);
    expect(codes.filter((c) => c.closest(built("bfCountry")))).toEqual([]);
    const pair = await pairPage("burna-boy-vs-wizkid");
    for (const c of pair.querySelectorAll(`table ${built("countryCode")}`)) expect(c.closest(built("bfCountry"))).not.toBeNull();
    // Negative control: J2-4 as first built (f00eac38, never shipped) muted the
    // shared class in the phone block, the index's codes with it; main's 760
    // block (e85e6efe, compare.module.css:722), verbatim, drew them in ink.
    const first = "@media (max-width: 900px) {\n  .countryCode { font-size: 11px; letter-spacing: 0.06em; color: var(--text-muted); }\n}";
    expect(winning(first, ".countryCode", "color", at(390))).not.toBe("var(--text)");
    const main = "@media (max-width: 760px) {\n  .countryCode { font-size: 11px; letter-spacing: 0.06em; color: var(--text); }\n}";
    expect(winning(main, ".countryCode", "color", (m) => m === null || /max-width: 760px/.test(m))).toBe("var(--text)");
  });
});

describe("negative control: the shipped table", () => {
  it("the live UK row has no leader bar", () => {
    // https://burnaboystats.com/compare/burna-boy-vs-wizkid, 8 Oct 2026, verbatim.
    const live =
      '<table><tbody><tr role="row"><td role="cell"><span class="compare-module__-ZWgpW__country"><span class="compare-module__-ZWgpW__flag" aria-hidden="true">🇬🇧</span><span class="compare-module__-ZWgpW__countryName">United Kingdom</span><span class="compare-module__-ZWgpW__countryCode">UK</span></span></td><td role="cell" class="compare-module__-ZWgpW__tdNum"><div class="compare-module__-ZWgpW__cell"><span class="compare-module__-ZWgpW__tierChip compare-module__-ZWgpW__tPlatinum"><span class="compare-module__-ZWgpW__tierWord">5× Platinum</span></span><span class="compare-module__-ZWgpW__units compare-module__-ZWgpW__unitsLead">14,160,000</span><span class="compare-module__-ZWgpW__notCounted">30<!-- --> <!-- -->plaques<!-- --> <!-- -->· top<!-- --> <!-- -->shown</span></div></td><td role="cell" class="compare-module__-ZWgpW__tdNum"><div class="compare-module__-ZWgpW__cell"><span class="compare-module__-ZWgpW__tierChip compare-module__-ZWgpW__tPlatinum"><span class="compare-module__-ZWgpW__tierWord">8× Platinum</span></span><span class="compare-module__-ZWgpW__units compare-module__-ZWgpW__unitsBehind">9,500,000</span><span class="compare-module__-ZWgpW__notCounted">17<!-- --> <!-- -->plaques<!-- --> <!-- -->· top<!-- --> <!-- -->shown</span></div></td></tr></tbody></table>';
    const tr = root(live).querySelector("tr")!;
    // Its figures sat in .units: read there, the row draws no bar at all.
    const found = rowProblems(tr, served, "units");
    expect(found[0]).toBe("United Kingdom: no leader bar");
    expect(found).toContain("United Kingdom: side A bar is null, want lead");
  });
});
