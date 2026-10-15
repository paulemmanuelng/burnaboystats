import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/methodology",
  useSearchParams: () => new URLSearchParams(),
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

import MethodologyPage from "../../app/methodology/page";
import S from "../../app/methodology/methodology.module.css";
import { CERT_THRESHOLDS } from "../../app/data/certThresholds";
import { countryMeta } from "../../app/data/afrobeats";
import { read, winning } from "../fixtures/cssRules";

/**
 * #7 of the live debug of 15 Oct 2026 (tools-methodology-1, Paul: "yes to
 * all"). On /methodology's threshold table a body that prices neither format
 * for one and the same reason, Colombia's Pro Música, printed that reason
 * twice side by side, once under Single and once under Album. Now it is one
 * cell across all eight figure columns, reading "Listed, not priced — <the
 * reason>". A body that prices one format keeps its "listed — …" note on
 * the other, as before.
 *
 * The table is in the section both layouts share, so this one markup is
 * the phone's and the desktop's.
 */

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const rows = () => [...doc(renderToStaticMarkup(MethodologyPage())).querySelectorAll('[aria-label="Threshold table"] table tbody tr')];
const rowOf = (code: string) => rows().find((tr) => tr.querySelector(`th .${S.thresholdCountry}`)?.textContent === countryMeta(code).name)!;
const notes = (tr: Element) => [...tr.querySelectorAll(`td .${S.listedNote}`)].map((n) => n.textContent);
const width = (tr: Element) => [...tr.children].reduce((n, c) => n + Number(c.getAttribute("colspan") ?? 1), 0);

/** Desktop only: a rule under (min-width: 901px). The unscoped rules are none of the note's. */
const atDesktop = (m: string | null) => m !== null && /\(min-width:\s*901px\)/.test(m);
const atPhone = (m: string | null) => m === null || /\(max-width:\s*900px\)/.test(m);
/** What the desktop cascade gives the note to size by. */
const desktopNoteSizing = (css: string) => ({
  display: winning(css, ".listedNote", "display", atDesktop),
  width: winning(css, ".listedNote", "width", atDesktop),
  minWidth: winning(css, ".listedNote", "min-width", atDesktop),
  // The room the notes give up goes to the figures, not the body column:
  // without this the body column took 77px of it at 1440.
  bodyColumn: winning(css, ".thresholdTable tr > :first-child", "width", atDesktop),
});

/** Bodies whose two formats are unpriced for the same stated reason, read from the data. */
const oneReason = Object.values(CERT_THRESHOLDS).filter((c) => !c.single && !c.album && c.singleExcluded && c.singleExcluded === c.albumExcluded);

describe("#7: one reason, said once across both formats", () => {
  it("the data has such a body today: Colombia", () => {
    expect(oneReason.map((c) => c.code)).toContain("CO");
  });

  it.each(oneReason.map((c) => [c.code, c] as const))("%s: one cell spanning all eight columns, 'Listed, not priced — <reason>'", (_code, c) => {
    const tr = rowOf(c.code);
    const cells = [...tr.querySelectorAll("td")];
    expect(cells).toHaveLength(1);
    expect(cells[0].getAttribute("colspan")).toBe("8");
    expect(cells[0].classList.contains(S.thresholdListed)).toBe(true);
    expect(notes(tr)).toEqual([`Listed, not priced — ${c.singleExcluded}`]);
    // The row is as wide as every other: the body, then eight figure columns.
    expect(width(tr)).toBe(9);
  });

  it("a body that prices one format keeps its own note on the other (Turkey's albums)", () => {
    const one = Object.values(CERT_THRESHOLDS).filter((c) => (c.single === null) !== (c.album === null));
    expect(one.length).toBeGreaterThan(0);
    for (const c of one) {
      const tr = rowOf(c.code);
      const reason = c.single === null ? c.singleExcluded : c.albumExcluded;
      expect(notes(tr), c.code).toEqual([`listed — ${reason ?? "not priced"}`]);
      expect(width(tr), c.code).toBe(9);
    }
  });

  it("every row is nine columns wide, and no row prints the same note twice", () => {
    for (const tr of rows()) {
      expect(width(tr)).toBe(9);
      const n = notes(tr);
      expect(new Set(n).size, tr.querySelector("th")?.textContent ?? "").toBe(n.length);
    }
  });

  it("from 901px a note wraps to the columns the figures set, and sets none itself; phones keep the pinned note", () => {
    // The table sizes its columns automatically, and a note at its widest is
    // one long line shared across the columns it spans. Once Colombia's two
    // notes became one across all eight, Turkey's album note alone pulled the
    // Album columns ~190px wider at 1440, and Single's as much narrower, on
    // every row (review of #7, 15 Oct 2026). width 0 takes a note out of the sizing;
    // min-width 100% hands it back the cell's width.
    const css = read("app/methodology/methodology.module.css");
    expect(desktopNoteSizing(css)).toEqual({ display: "block", width: "0", minWidth: "100%", bodyColumn: "1px" });
    // The phone rules are as they were: the note held at the pinned column's edge, measured to the box.
    expect(winning(css, ".listedNote", "position", atPhone)).toBe("sticky");
    expect(winning(css, ".listedNote", "max-width", atPhone)).toBe("calc(100cqi - 120px - 64px)");
    expect(winning(css, ".listedNote", "width", atPhone)).toBeUndefined();
  });

  it("negative control: the sheet the merged cell shipped with let the notes size the columns", () => {
    // app/methodology/methodology.module.css as #7 first shipped it (and as
    // origin/main has it): the note's and the body column's only rules are
    // the phone ones.
    const shipped = `@media (max-width: 900px) {
  .thresholdTable tr > :first-child {
    position: sticky;
    left: 0;
    z-index: 1;
    width: 120px;
    min-width: 120px;
    white-space: normal;
    background: var(--bg);
    box-shadow: inset -1px 0 var(--line);
  }
  .listedNote { position: sticky; left: 130px; display: block; max-width: calc(100cqi - 120px - 64px); }
}`;
    expect(desktopNoteSizing(shipped)).toEqual({ display: undefined, width: undefined, minWidth: undefined, bodyColumn: undefined });
    expect(desktopNoteSizing(shipped)).not.toEqual({ display: "block", width: "0", minWidth: "100%", bodyColumn: "1px" });
  });

  it("negative control: the row origin/main shipped for Colombia printed the reason twice", () => {
    // app/methodology/page.tsx on origin/main (a9574c64), lines 905–922: a
    // colSpan 4 cell per format, each "listed — {reason}".
    const co = CERT_THRESHOLDS.CO;
    const shipped = doc(
      `<table><tbody><tr><th scope="row">PRO MÚSICA</th>` +
        `<td colspan="4" class="${S.thresholdListed}"><span class="${S.listedNote}">listed — ${co.singleExcluded}</span></td>` +
        `<td colspan="4" class="${S.thresholdListed}"><span class="${S.listedNote}">listed — ${co.albumExcluded}</span></td>` +
        `</tr></tbody></table>`,
    ).querySelector("tr")!;
    const n = notes(shipped);
    expect(n).toHaveLength(2);
    expect(new Set(n).size).toBeLessThan(n.length);
    expect(n).not.toContain(`Listed, not priced — ${co.singleExcluded}`);
  });
});
