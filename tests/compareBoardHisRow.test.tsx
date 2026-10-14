import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { CountryBoardView } from "../app/compare/CountryBoardView";
import styles from "../app/compare/compare.module.css";
import { certCountryCodes, priceCountry } from "../app/lib/certCountry";
import { decl, read, rules } from "./fixtures/cssRules";
import { colour, contrast, over, tokenColour, THEMES, type Theme } from "./fixtures/tokenColours";

/**
 * Job 2 Q22 (Paul, 14 Oct 2026, "yes all"): on /compare/in/<country> boards
 * Burna Boy's row gets the site's his-row treatment (N4) — the row wash, his
 * units gold, his name ink, his rank muted — on both layouts, wherever he
 * places. Matched to the boards that already draw it (tests/goldMarksHisRows
 * and the rows it covers): Africa's Biggest, the 500M board and the Hot 100
 * board, desktop .entryHim and phone .rowHis. Only his row; every other row,
 * and the leader and ties logic, as before.
 *
 * Measured on the dev server before the change (14 Oct 2026): his UK row
 * (No. 1, 14,160,000) had a transparent ground and ink units — rgb(23, 20, 15)
 * light, rgb(245, 244, 240) dark — the same as Wizkid's below it.
 */

const CSS = read("app/compare/compare.module.css");
const DESK_HIS = read("app/records/africas-biggest/africas-biggest.module.css");
const PHONE_HIS = read("app/components/mobileAfricasBiggest.module.css");
const PHONE = "@media (max-width: 900px)";
const body = (css: string, sel: string, media: string | null = null) =>
  rules(css).filter((r) => r.media === media && r.selector === sel).map((r) => r.body).join(";");

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const has = (el: Element | null | undefined, cls: string) => !!el && el.classList.contains(cls);
const board = (code: string) =>
  parse(renderToStaticMarkup(<CountryBoardView sp={{}} code={code} includeFeatures />)).querySelectorAll(`table.${styles.cbBoardTable} tbody tr`);
const nameOf = (tr: Element) => tr.querySelector(`.${styles.cbArtistName}`)!.textContent;
/** His row, as the page marks it: the wash on the row, gold on counted units. */
const washed = (tr: Element) => has(tr, styles.cbRowHis);
const goldUnits = (tr: Element) => has(tr.querySelector(`.${styles.units}`), styles.cbUnitsHis);

const CODES = certCountryCodes();

describe("his row on every country board, and only his", () => {
  it.each(CODES)("%s", (code) => {
    const rows = [...board(code)];
    const priced = priceCountry(code, { includeNigeria: true, includeFeatures: true });
    // The board's order is the engine's, programme by programme: nothing re-ranked.
    expect(rows.map(nameOf)).toEqual(priced.programs.flatMap((p) => p.lines.map((l) => l.artist.name)));
    const lines = priced.programs.flatMap((p) => p.lines);
    rows.forEach((tr, i) => {
      const his = lines[i].artist.slug === "burna-boy";
      expect(washed(tr), `${code} ${nameOf(tr)}: wash`).toBe(his);
      // Gold only on a figure that is there: "not counted" stays muted.
      expect(goldUnits(tr), `${code} ${nameOf(tr)}: gold units`).toBe(his && lines[i].counted > 0);
      if (his && lines[i].counted === 0) expect(tr.querySelector(`.${styles.cbUnitsCell} .${styles.notCounted}`)).not.toBeNull();
    });
  });

  it("the cases are real: he leads the UK, places sixth and first in the US's two tables, and Colombia prices nothing", () => {
    const uk = [...board("UK")];
    expect(washed(uk[0]) && goldUnits(uk[0])).toBe(true);
    expect(uk[0].querySelector(`.${styles.units}`)!.textContent).toBe("14,160,000");
    const us = [...board("US")];
    expect(us.filter(washed).length).toBe(2);
    const co = [...board("CO")].find(washed)!;
    expect(goldUnits(co)).toBe(false);
    expect(co.querySelector(`.${styles.cbRank}`)!.textContent).toBe("–");
  });
});

describe("the treatment is the site's own his row, exactly", () => {
  it("the wash: .entryHim's on desktop, .rowHis's at ≤900", () => {
    expect(decl(body(CSS, ".cbRowHis"), "background")).toBe(decl(body(DESK_HIS, ".entryHim"), "background"));
    expect(decl(body(CSS, ".cbRowHis", PHONE), "background")).toBe(decl(body(PHONE_HIS, ".rowHis"), "background"));
    expect(decl(body(CSS, ".cbRowHis"), "background")).toBe("color-mix(in srgb, var(--gold-wash-base) calc(7% * var(--wash-strength)), transparent)");
  });

  it("his units --gold, his name ink, his rank muted: the phone board's .rowHis colours", () => {
    expect(decl(body(CSS, ".cbUnitsHis"), "color")).toBe(decl(body(PHONE_HIS, ".rowHis .rowValue"), "color"));
    expect(decl(body(CSS, ".cbUnitsHis"), "color")).toBe("var(--gold)");
    expect(decl(body(CSS, ".cbRowHis .cbArtistName"), "color")).toBe(decl(body(PHONE_HIS, ".rowHis .rowName"), "color"));
    expect(decl(body(CSS, ".cbRowHis .cbRank"), "color")).toBe(decl(body(PHONE_HIS, ".rowHis .rank"), "color"));
    expect(decl(body(CSS, ".cbRowHis .cbRank"), "color")).toBe("var(--text-muted)");
    // Nobody else's row moves: no other row rule paints a ground or a gold.
    expect(decl(body(CSS, ".unitsLead"), "color")).toBe("var(--text)");
    expect(decl(body(CSS, ".cbBarFill"), "background")).toBe("var(--text)");
  });

  it("every word on his row reads 4.5:1 or better on the wash, both themes, both strengths", () => {
    const globals = read("app/globals.css");
    const strength: Record<Theme, number> = {
      dark: Number(globals.match(/--wash-strength:\s*([\d.]+)/)![1]),
      light: Number(globals.match(/:root\[data-theme="light"\]\s*\{[^}]*--wash-strength:\s*([\d.]+)/)![1]),
    };
    expect(strength).toEqual({ dark: 1, light: 0.42 });
    for (const media of [null, PHONE]) {
      const n = Number(decl(body(CSS, ".cbRowHis", media), "background")!.match(/calc\(([\d.]+)% \*/)![1]);
      for (const theme of THEMES) {
        const page = tokenColour("--bg", theme);
        const plate = over(colour(`color-mix(in srgb, var(--gold-wash-base) ${n * strength[theme]}%, transparent)`, theme), page);
        for (const ink of ["--gold", "--text", "--text-muted"])
          expect(contrast(tokenColour(ink, theme), plate), `${ink} on ${n}% ${theme}`).toBeGreaterThanOrEqual(4.5);
      }
    }
  });

  it("under the pointer his row presses to --hover (gold on --bg-raised is under 4.5:1 on paper); the phone has no hover", () => {
    const hover = rules(CSS).filter((r) => r.selector === ".cbBoardTable tbody tr.cbRowHis:hover td");
    expect(hover.map((r) => [r.media, decl(r.body, "background")])).toEqual([["@media (min-width: 901px)", "var(--hover)"]]);
    const page = tokenColour("--bg", "light");
    expect(contrast(tokenColour("--gold", "light"), over(tokenColour("--hover", "light"), page))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(tokenColour("--gold", "light"), over(tokenColour("--bg-raised", "light"), page))).toBeLessThan(4.5);
  });
});

describe("negative control: the board as main shipped it", () => {
  it("his UK row carried no wash and ink units, like everyone's", () => {
    // CountryBoardView.tsx on main (9873d85a): `<tr role="row">` and
    // `<span className={`${styles.units} ${styles.unitsLead}`}>{fmt(line.units)}</span>`,
    // rendered for his UK line.
    const shipped = parse(
      `<table><tbody><tr role="row"><td role="cell" class="${styles.cbRankCell}"><span class="${styles.cbRank}">1</span></td>` +
        `<td role="cell" class="${styles.cbArtistCell}"><a href="/certifications" class="${styles.cbArtistLink}"><span class="${styles.cbArtistName}">Burna Boy</span></a></td>` +
        `<td role="cell" class="${styles.tdNum} ${styles.cbUnitsCell}"><span class="${styles.units} ${styles.unitsLead}">14,160,000</span></td></tr></tbody></table>`,
    ).querySelector("tr")!;
    expect(nameOf(shipped)).toBe("Burna Boy");
    expect(washed(shipped)).toBe(false);
    expect(goldUnits(shipped)).toBe(false);
    // …and main's sheet had no rule to give him one.
    const MAIN_RULES = `.unitsLead { color: var(--text); }\n.cbRank { font-family: var(--font-mono), monospace; font-size: var(--type-caption); font-variant-numeric: tabular-nums; color: var(--text-muted); }`;
    expect(rules(MAIN_RULES).some((r) => /cbRowHis|cbUnitsHis/.test(r.selector))).toBe(false);
  });
});
