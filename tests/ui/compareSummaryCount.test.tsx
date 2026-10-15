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
import styles from "../../app/compare/compare.module.css";
import { artistBySlug, compare, marketKey, nigeriaDefault, priceArtist, priceRelease, type ArtistUnits } from "../../app/lib/certUnits";
import { marketSummary } from "../../app/lib/compareSummary";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { rules, winning } from "../fixtures/cssRules";

// Renders every page, pair or board in one test, so it outgrows vitest's 5 s
// default on GitHub's 2-core runners (slowest case 6.1 s in the stats bot's
// 14 Oct 2026 runs, where three such files failed the gate on time alone).
// The limit is raised here, per file, never with --testTimeout on the CLI:
// a CLI flag would hide every other slow test from the CI-style gate.
vi.setConfig({ testTimeout: 30_000 });

/**
 * J2-5, fix 35 (design review 8 Oct 2026): the summary above a pair's table
 * counts EVERY priced market, the folded tail included — "{A} leads {a} of
 * the {m} priced markets; {B} leads {b}[; {t} level][. Colombia is listed,
 * not priced ¹]." The shipped table's rows alone gave Burna Boy vs Wizkid
 * "10 of the 23"; the pair holds 27 priced markets and he leads 14.
 *
 * The count here is independent of the page and of compare(): the markets
 * are built straight from each side's priceArtist lines, keyed by
 * marketKey, under the view's own switches.
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
const summaryOf = (page: Element) => norm(page.querySelector(`.${styles.summary}`)?.textContent);

/** Count the markets from two sides' lines alone: no compare() rows, no fold. */
function independent(pa: Pick<ArtistUnits, "byCountry" | "listed">, pb: Pick<ArtistUnits, "byCountry" | "listed">) {
  const markets = new Map<string, { a: number | null; b: number | null; country: string }>();
  for (const [side, p] of [["a", pa], ["b", pb]] as const)
    for (const l of [...p.byCountry, ...p.listed]) {
      const k = marketKey(l.country, l.program);
      const m = markets.get(k) ?? { a: null, b: null, country: l.country };
      m[side] = l.counted ? l.units : null;
      markets.set(k, m);
    }
  let a = 0, b = 0, level = 0;
  const unpriced: string[] = [];
  for (const m of markets.values()) {
    if (m.a === null && m.b === null) {
      unpriced.push(m.country);
      continue;
    }
    const va = m.a ?? 0, vb = m.b ?? 0;
    if (va > vb) a++;
    else if (vb > va) b++;
    else level++;
  }
  return { a, b, level, priced: a + b + level, unpriced };
}

/** The view's switches, read from the engine's own defaults — never from the page. */
function counted(aSlug: string, bSlug: string, view: { ng?: boolean; feat?: boolean } = {}) {
  const a = artistBySlug(aSlug)!;
  const b = artistBySlug(bSlug)!;
  const includeFeatures = view.feat ?? true;
  const includeNigeria = view.ng ?? nigeriaDefault(a, b, includeFeatures).on;
  return independent(priceArtist(a, { includeNigeria, includeFeatures }), priceArtist(b, { includeNigeria, includeFeatures }));
}

/** The rendered sentence, read back into numbers. */
function parse(s: string) {
  const m = s.match(/^(.+?) leads (\d+) of the (\d+) priced (markets?); (.+?) leads (\d+)(?:; (\d+) level)?(\. .+ (?:is|are) listed, not priced ¹)?\.$/);
  if (!m) return null;
  return { nameA: m[1], a: Number(m[2]), priced: Number(m[3]), noun: m[4], nameB: m[5], b: Number(m[6]), level: Number(m[7] ?? 0), listed: Boolean(m[8]) };
}

const VIEWS: [string, Record<string, string>, { ng?: boolean; feat?: boolean }][] = [
  ["default", {}, {}],
  ["ng=1", { ng: "1" }, { ng: true }],
  ["feat=0", { feat: "0" }, { feat: false }],
];

describe("fix 35: the summary counts every priced market, the fold included", () => {
  it("premise: Burna Boy vs Wizkid folds a tail, so the rows on screen are not the pair", () => {
    const c = compare(artistBySlug("burna-boy")!, artistBySlug("wizkid")!, { includeFeatures: true });
    expect(c.collapsed.length).toBeGreaterThan(0);
    expect(marketSummary(c.rows).priced).toBeLessThan(counted("burna-boy", "wizkid").priced);
  });

  it("Burna Boy vs Wizkid reads fix 35's sentence, in the lede's words, before the table", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const s = counted("burna-boy", "wizkid");
    // The figures are the independent count's; the words are fix 35's.
    expect(summaryOf(page)).toBe(`Burna Boy leads ${s.a} of the ${s.priced} priced markets; Wizkid leads ${s.b}. Colombia is listed, not priced ¹.`);
    // No typed figures: a cert sweep moves them, and the line above reads them
    // from the engine. (On 14 Oct 2026 they were fix 35's own example.)
    // The lead clause is the bold one.
    expect(norm(page.querySelector(`.${styles.summary} strong`)?.textContent)).toBe(`Burna Boy leads ${s.a} of the ${s.priced} priced markets`);
    // The row sits directly before the table's heading, and the table follows.
    const row = page.querySelector(`.${styles.summaryRow}`)!;
    expect(row.nextElementSibling?.id).toBe("country-table");
    expect(row.textContent).not.toMatch(/\blevel\b/);
  });

  it("on every 10th pair, in all three views, the rendered numbers equal the independent count", async () => {
    const pairs = allPairs().filter((_, i) => i % 10 === 0);
    const bvw = allPairs().find(([x, y]) => x.slug === "burna-boy" && y.slug === "wizkid")!;
    let checked = 0;
    for (const [a, b] of [bvw, ...pairs]) {
      for (const [label, sp, view] of VIEWS) {
        const page = await query({ a: a.slug, b: b.slug, ...sp });
        const want = counted(a.slug, b.slug, view);
        const table = page.querySelector(`.${styles.table}`);
        const where = `${pairSlug(a, b)} ${label}`;
        if (!table) {
          // No table, no summary: nothing priced or listed to count.
          expect(page.querySelector(`.${styles.summaryRow}`), where).toBeNull();
          continue;
        }
        const got = parse(summaryOf(page));
        expect(got, `${where}: ${summaryOf(page)}`).not.toBeNull();
        expect({ a: got!.a, b: got!.b, level: got!.level, priced: got!.priced }, where).toEqual({ a: want.a, b: want.b, level: want.level, priced: want.priced });
        expect([got!.nameA, got!.nameB], where).toEqual([a.name, b.name]);
        expect(got!.noun, where).toBe(want.priced === 1 ? "market" : "markets");
        // The level clause prints only when a market is level.
        expect(summaryOf(page).includes(" level"), where).toBe(want.level > 0);
        // "Show all" changes nothing in it: the fold is already counted.
        if (label === "default") expect(summaryOf(await query({ a: a.slug, b: b.slug, all: "1" })), where).toBe(summaryOf(page));
        // The Colombia clause shows exactly where a Colombian row renders.
        const coRow = [...table.querySelectorAll("tbody tr")].some((tr) => norm(tr.querySelector(`.${styles.countryName}`)?.textContent) === "Colombia");
        expect(got!.listed, where).toBe(coRow);
        expect(summaryOf(page).includes("Colombia is listed, not priced ¹"), where).toBe(coRow);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(pairs.length * 2);
  }, 120000);

  it("a level market prints its clause: Burna Boy vs Rema", async () => {
    const s = counted("burna-boy", "rema");
    expect(s.level).toBeGreaterThan(0);
    expect(summaryOf(await pairPage("burna-boy-vs-rema"))).toContain(`; Rema leads ${s.b}; ${s.level} level`);
  });

  it("no Colombian row, no clause: Omah Lay vs CKay", async () => {
    const page = await pairPage("omah-lay-vs-ckay");
    expect(counted("omah-lay", "ckay").unpriced).toEqual([]);
    expect(summaryOf(page)).not.toMatch(/listed, not priced/);
    expect(summaryOf(page)).toMatch(/\d\.$/);
  });

  it("one priced market reads 'market': Seyi Vibez vs Olamide with Nigeria separated", async () => {
    const s = counted("seyi-vibez", "olamide", { ng: false });
    expect(s.priced).toBe(1);
    expect(summaryOf(await query({ a: "seyi-vibez", b: "olamide", ng: "0" }))).toContain(`of the 1 priced market; `);
  });

  it("a record pair counts its markets the same way, and its legend drops 'top'", async () => {
    const a = artistBySlug("burna-boy")!;
    const b = artistBySlug("wizkid")!;
    const includeNigeria = nigeriaDefault(a, b, true).on;
    const ra = priceRelease(a, "Last Last", { includeNigeria, includeFeatures: true })!;
    const rb = priceRelease(b, "Essence", { includeNigeria, includeFeatures: true })!;
    const want = independent(ra, rb);
    const page = await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" });
    const got = parse(summaryOf(page))!;
    expect(got).not.toBeNull();
    expect({ nameA: got.nameA, nameB: got.nameB, a: got.a, b: got.b, level: got.level, priced: got.priced }).toEqual({ nameA: "Last Last", nameB: "Essence", a: want.a, b: want.b, level: want.level, priced: want.priced });
    expect(norm(page.querySelector(`.${styles.legendLong}`)?.textContent)).toMatch(/^Pill = the certification there · /);
    expect(norm(page.querySelector(`.${styles.legendShort}`)?.textContent)).toMatch(/^The pill is the certification in that market\./);
  });

  it("the row says certifications, never plaques or awards, and only a pair or a record pair carries it", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const row = norm(page.querySelector(`.${styles.summaryRow}`)?.textContent);
    expect(row).not.toMatch(/\b(?:plaques?|awards?)\b/i);
    for (const tool of [await query({}), await query({ a: "burna-boy" }), await query({ mode: "country" }), await query({ a: "burna-boy", b: "burna-boy" })])
      expect(tool.querySelector(`.${styles.summaryRow}`)).toBeNull();
  });
});

describe("the legend: once, one wording per layout", () => {
  const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);

  it("the desktop's one line above 900, the phone's two sentences at or below, never both", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    expect(norm(page.querySelector(`.${styles.legendLong}`)?.textContent)).toBe(
      "Pill = the top certification there · bar = units, scaled to the row's larger figure · solid leads, outlined trails",
    );
    expect(norm(page.querySelector(`.${styles.legendShort}`)?.textContent)).toBe(
      "The pill is the top certification in that market. Each bar is that side's units, scaled to the row's larger figure: solid leads, outlined trails.",
    );
    for (const w of [1440, 1024, 901]) {
      expect(winning(CSS, ".legendShort", "display", at(w)), `${w}`).toBe("none");
      expect(winning(CSS, ".legendLong", "display", at(w)), `${w}`).toBeUndefined();
    }
    for (const w of [900, 390, 320]) {
      expect(winning(CSS, ".legendLong", "display", at(w)), `${w}`).toBe("none");
      expect(winning(CSS, ".legendShort", "display", at(w)), `${w}`).toBe("inline");
    }
    // "solid leads" is the one bold phrase in each.
    expect([...page.querySelectorAll(`.${styles.legend} strong`)].map((x) => x.textContent)).toEqual(["solid leads", "solid leads"]);
  });

  it("side by side on desktop, stacked on the phone; ink and muted, never gold", () => {
    expect(winning(CSS, ".summaryRow", "justify-content", at(1440))).toBe("space-between");
    expect(winning(CSS, ".summaryRow", "flex-direction", at(1440))).toBeUndefined();
    expect(winning(CSS, ".summaryRow", "flex-direction", at(390))).toBe("column");
    expect(winning(CSS, ".summary", "font-size", at(390))).toBe("14px");
    expect(winning(CSS, ".legend", "color", at(1440))).toBe("var(--text-muted)");
    for (const r of rules(CSS).filter((x) => /\.(summary|legend)/.test(x.selector))) expect(r.body, r.selector).not.toMatch(/--gold/);
  });
});

describe("negative control: the rows on screen alone", () => {
  it("fix 35's false sentence is what the shipped table's rows give, and the page never prints it", async () => {
    // J2-5's summary as first drawn, quoted by fix 35 (fixes-2026-10-08.md):
    // "Burna Boy leads 10 of the 23 priced markets" — the count of the rows
    // the shipped page drew (compare().rows), the fold left out.
    const CANVAS = "Burna Boy leads 10 of the 23 priced markets";
    const shipped = marketSummary(compare(artistBySlug("burna-boy")!, artistBySlug("wizkid")!, { includeFeatures: true }).rows);
    expect(`Burna Boy leads ${shipped.a} of the ${shipped.priced} priced markets`).toBe(CANVAS);
    expect(summaryOf(await pairPage("burna-boy-vs-wizkid"))).not.toContain(CANVAS);
  });
});
