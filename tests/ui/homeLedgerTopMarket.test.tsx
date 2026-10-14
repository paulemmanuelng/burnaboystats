import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));

import CertLedger from "../../app/components/CertLedger";
import styles from "../../app/components/certLedger.module.css";
import { ledgerRows, certifiedReleaseTotal, certTotal, certCountryTotal } from "../../app/lib/homeData";
import { allItems, COUNTRIES } from "../../app/data/certifications";
import { isLabelPlaque } from "../../app/lib/headlineAward";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * homeLedgerTopMarket (site review 8 Oct 2026, Job 5 · J5-7, fix 103): the
 * home ledger keeps its rows, columns, tier filter, stat-card button and
 * aside. Only "Countries" — which equalled Certs on every row — becomes "Top
 * market": the flag and code of the country holding the row's highest tier,
 * a register's plaque before a label's (C-9). Certs is ink, Geist 13.5.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const table = () =>
  parse(
    renderToStaticMarkup(
      <CertLedger rows={ledgerRows} releaseTotal={certifiedReleaseTotal} certTotal={certTotal} certCountries={certCountryTotal}>
        <div />
      </CertLedger>,
    ),
  ).querySelector("table")!;
const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];

describe("homeLedgerTopMarket: one column changes, the rest stay as built (fix 103)", () => {
  it("the heads: #, Title, Year, Highest tier, Top market, Certs (and the hidden Stat card)", () => {
    expect([...table().querySelectorAll("th")].map((t) => t.textContent)).toEqual([
      "#",
      "Title",
      "Year",
      "Highest tier",
      "Top market",
      "Certs",
      "Stat card",
    ]);
  });

  it("every row's top market holds a plaque at the row's highest tier, a register's whenever one exists", () => {
    for (const r of ledgerRows) {
      const item = allItems.find((i) => i.title === r.title)!;
      // The highest tier, worked out here from the plaques.
      const top = TIERS.find((t) => item.certs.some((c) => c.level === t))!;
      expect(r.top, r.title).toBe(top);
      const atTop = item.certs.filter((c) => c.level === top);
      const there = atTop.filter((c) => c.c === r.topMarket.code);
      expect(there.length, `${r.title}: ${r.topMarket.code} holds a ${top}`).toBeGreaterThan(0);
      const registers = atTop.filter((c) => !isLabelPlaque(c, COUNTRIES[c.c]?.body));
      if (registers.length) expect(there.some((c) => !isLabelPlaque(c, COUNTRIES[c.c]?.body)), r.title).toBe(true);
      expect(r.topMarket.flag).toBe(COUNTRIES[r.topMarket.code].flag);
    }
  });

  it("the cell prints the flag and the code, and the table no longer says \"{n} countries\"", () => {
    const t = table();
    const cells = [...t.querySelectorAll(`td.${styles.market}`)];
    expect(cells.length).toBeGreaterThan(0);
    cells.forEach((td, i) => expect(td.textContent).toBe(`${ledgerRows[i].topMarket.flag} ${ledgerRows[i].topMarket.code}`));
    expect(t.textContent).not.toMatch(/\d+ countries/);
  });

  it("Certs is ink, Geist 13.5 tabular; Top market is mono 700 11 upper", () => {
    const css = read("app/components/certLedger.module.css");
    const body = (sel: string) => rules(css).filter((r) => r.media === null && r.selector === sel).map((r) => r.body).join(";");
    expect(decl(body(".certs"), "font-family")).toMatch(/^var\(--font-geist-sans\)/);
    expect(decl(body(".certs"), "font-size")).toBe("var(--type-small)");
    expect(read("app/globals.css")).toMatch(/--type-small:\s*13\.5px/);
    expect(decl(body(".certs"), "color")).toBe("var(--text)");
    expect(decl(body(".certs"), "font-variant-numeric")).toBe("tabular-nums");
    expect(decl(body(".market"), "font-family")).toMatch(/^var\(--font-mono\)/);
    expect(decl(body(".market"), "font-weight")).toBe("700");
    expect(decl(body(".market"), "font-size")).toBe("var(--type-label)");
    expect(decl(body(".market"), "text-transform")).toBe("uppercase");
  });

  it("negative control: the shipped Countries column repeated the Certs count", () => {
    // CertLedger.tsx:101 and :125 on main e85e6efe.
    const shippedHead = "<th className={styles.colCountries}>Countries</th>";
    const shippedCell = (r: { countries: number }) => `${r.countries} countries`;
    expect(shippedHead).toContain(">Countries<");
    // The duplicate fix 103 names: the column said what Certs said (on every
    // row when it was reviewed; a property of the catalogue, so "most").
    expect(ledgerRows.filter((r) => shippedCell(r) === `${r.certs} countries`).length).toBeGreaterThan(ledgerRows.length / 2);
    expect(table().textContent).not.toContain(shippedCell(ledgerRows[0]));
  });
});
