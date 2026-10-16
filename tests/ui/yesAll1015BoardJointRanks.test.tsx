import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { CountryBoardView } from "../../app/compare/CountryBoardView";
import styles from "../../app/compare/compare.module.css";
import { certCountryCodes, priceCountry, type CountryProgram } from "../../app/lib/certCountry";
import { countryCard } from "../../app/lib/ogCountryCard";
import { rules } from "../fixtures/cssRules";

/**
 * Question 1 of the 15 Oct 2026 live debug (Paul: "yes to all"): on the
 * /compare/in/<country> boards, artists with the same certified units share a
 * rank, printed "=10", as Africa's Biggest, the /afrobeats table and the
 * country link preview already do. Inside a tie the board keeps its order —
 * more plaques first, then the name (certCountry.ts ranked) — so only the
 * printed place changes. Both layouts render the one table (ProgramTable).
 *
 * Shipped on main (a9574c64) and served by the dev server on 15 Oct 2026, the
 * UK board's tenth and eleventh rows, both at 800,000 units:
 *   10 BNXN 800,000 · 11 Ayra Starr 800,000
 * ProgramTable passed place = i + 1.
 */

const ROOT = join(__dirname, "..", "..");
const OPTIONS = { includeNigeria: true, includeFeatures: true };
const CODES = certCountryCodes();
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const tables = (code: string) =>
  [...parse(renderToStaticMarkup(<CountryBoardView sp={{}} code={code} includeFeatures />)).querySelectorAll(`table.${styles.cbBoardTable}`)];
const ranksOf = (table: Element) => [...table.querySelectorAll(`tbody tr .${styles.cbRank}`)].map((e) => e.textContent ?? "");

/** The rule, written out independently of the page's helper: a line's place
 *  is one more than the number of lines with MORE units, and a place two
 *  lines share prints "=". */
const expectedRanks = (units: readonly number[]) =>
  units.map((u) => `${units.filter((v) => v === u).length > 1 ? "=" : ""}${units.filter((v) => v > u).length + 1}`);
/** The tied groups of a programme, as runs of equal units. */
const tiedGroups = (p: CountryProgram) =>
  [...new Set(p.lines.map((l) => l.units))].map((u) => p.lines.filter((l) => l.units === u)).filter((g) => g.length > 1);

describe("Q1: tied units share a rank on every country board", () => {
  it.each(CODES)("%s", (code) => {
    const board = priceCountry(code, OPTIONS);
    const rendered = tables(code);
    expect(rendered).toHaveLength(board.programs.length);
    board.programs.forEach((p, k) => {
      const ranks = ranksOf(rendered[k]);
      // Colombia prices nothing: no place at all, as before.
      if (!p.counted) expect(ranks.every((r) => r === "–"), `${code} ${p.name}`).toBe(true);
      else expect(ranks, `${code} ${p.name}`).toEqual(expectedRanks(p.lines.map((l) => l.units)));
    });
  });

  it("the case is real: the UK's tied rows print one '=n', and the plaque order stands inside each tie", () => {
    const uk = priceCountry("UK", OPTIONS);
    const own = uk.programs[0];
    const groups = tiedGroups(own);
    expect(groups.length).toBeGreaterThan(0);
    const ranks = ranksOf(tables("UK")[0]);
    for (const g of groups) {
      const first = own.lines.indexOf(g[0]);
      const labels = g.map((l) => ranks[own.lines.indexOf(l)]);
      expect(new Set(labels), g.map((l) => l.artist.name).join(", ")).toEqual(new Set([`=${first + 1}`]));
      // Plaques held, high to low, then the name: the order the board kept.
      for (let i = 1; i < g.length; i++) {
        expect(g[i - 1].plaques >= g[i].plaques).toBe(true);
        if (g[i - 1].plaques === g[i].plaques) expect(g[i - 1].artist.name.localeCompare(g[i].artist.name) <= 0).toBe(true);
      }
    }
    // The first tied place is followed by the place after the whole tie.
    const g = groups[0];
    const after = own.lines.indexOf(g[g.length - 1]) + 1;
    if (after < own.lines.length && own.lines[after].units !== g[0].units) {
      expect(ranks[after].replace("=", "")).toBe(String(after + 1));
    }
  });

  it("one rule for the board and its link preview: the card's top three are the board's places", () => {
    for (const code of CODES) {
      const board = priceCountry(code);
      const card = countryCard(board);
      const metric = board.counted > 0 ? board.lines.map((l) => l.units) : board.lines.map((l) => l.plaques);
      expect(card.rows.map((r) => r.rank), code).toEqual(expectedRanks(metric).slice(0, 3).map((r) => r.replace("=", "")));
    }
    // One definition in the app: the page and the card import it.
    const sources: string[] = [];
    const walk = (dir: string) => {
      for (const f of readdirSync(dir)) {
        const p = join(dir, f);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(ts|tsx)$/.test(f) && /function jointRanks\b/.test(readFileSync(p, "utf8"))) sources.push(p.slice(ROOT.length + 1));
      }
    };
    walk(join(ROOT, "app"));
    expect(sources).toEqual(["app/lib/jointRanks.ts"]);
    expect(readFileSync(join(ROOT, "app/compare/CountryBoardView.tsx"), "utf8")).toMatch(/from "\.\.\/lib\/jointRanks"/);
    expect(readFileSync(join(ROOT, "app/lib/ogCountryCard.ts"), "utf8")).toMatch(/from "\.\/jointRanks"/);
  });

  it("the phone's rank column holds the widest joint rank on any board", () => {
    // The rank sets in Space Mono (advance 0.612 em) at --type-caption,
    // 12.5px: "=10" is 23px. Main's 20px column held two figures; measured on
    // the dev server at 320, 375 and 402 (lane report, 15 Oct 2026).
    const widest = Math.max(
      ...CODES.flatMap((code) => priceCountry(code, OPTIONS).programs.flatMap((p) => (p.counted ? expectedRanks(p.lines.map((l) => l.units)) : ["–"]))).map((r) => r.length),
    );
    const css = readFileSync(join(ROOT, "app/compare/compare.module.css"), "utf8");
    const phone = rules(css).filter((r) => r.media === "@media (max-width: 900px)" && r.selector === ".cbBoardTable tr");
    const cols = phone.map((r) => /grid-template-columns:\s*([^;]+)/.exec(r.body)?.[1]).filter(Boolean).at(-1)!;
    const first = Number(/^(\d+(?:\.\d+)?)px\b/.exec(cols)?.[1]);
    expect(first, cols).toBeGreaterThanOrEqual(Math.ceil(widest * 0.612 * 12.5));
  });

  it("negative control: the places main shipped for the UK's tie fail the rule", () => {
    // Served 15 Oct 2026 (dev server on a9574c64): BNXN "10", Ayra Starr "11",
    // both 800,000 — ProgramTable's i + 1.
    const shipped = ["10", "11"];
    const units = [...Array.from({ length: 9 }, (_, i) => 14_000_000 - i * 1_000_000), 800_000, 800_000];
    expect(expectedRanks(units).slice(9)).toEqual(["=10", "=10"]);
    expect(shipped).not.toEqual(expectedRanks(units).slice(9));
    // And main's 20px phone column is narrower than "=10".
    expect(20).toBeLessThan(Math.ceil(3 * 0.612 * 12.5));
  });
});
