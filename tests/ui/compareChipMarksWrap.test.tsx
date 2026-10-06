import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareB-04, the full-site debug of 5 Oct 2026. At 320 (live, headless
 * Chrome, 320 dark) Ayra Starr's Mexico chip "4× PLATINUM † ‡ §" was 117.8px
 * in a 108px cell: as side A it ran into column B and touched "NO PLAQUE",
 * as side B it ran past the content edge to 314 of 320 — on all 19 of her
 * pairs, and at 361–375 the same chip ran 2.8–9.8px over the 78px-column
 * grid. The marks rode inside the nowrap `.tierWord` run behind a no-break
 * space, so the chip could not wrap them. Two-mark chips ("2× PLATINUM † ¶",
 * "4× PLATINUM ‡ ¶", "7× PLATINUM ‡ §") ran 0.9px over on 33 pages.
 *
 * In the same table "US · LATIN" broke to "US ·" / "LATIN" beside its flag,
 * and "LATIN" (37px, 30px left) ran 7px out of the 56px code column into the
 * chip or "NO PLAQUE" beside it on all 28 pages with a RIAA Latin row.
 *
 * Layout is not measured in jsdom, so this pins what makes the layout work:
 * the marks sit after an ordinary (breakable) space outside every nowrap run,
 * and the ≤360 code column lets a code that cannot fit take the next line.
 * Checked live by grafting the same markup and rule onto the shipped pages at
 * 320, 340, 360, 361, 375, 390, 760 and 1440 (dark and light): no chip or
 * code past its cell, chips that fit unchanged to the pixel (mark top, space
 * and width), desktop unchanged.
 */

const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const pair = async (slug: string) => html(await PairPage({ params: Promise.resolve({ pair: slug }) }));
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const NOWRAP = [styles.tierWord, styles.nowrap];

/** The table row whose country cell reads `code`. */
function row(root: HTMLElement, code: string) {
  return [...root.querySelectorAll("table tbody tr")].find((tr) => norm(tr.querySelector(`.${styles.countryCode}`)?.textContent) === code)!;
}

/** Every chip on the page that carries marks, with how its marks are set. */
function markChips(root: HTMLElement) {
  return [...root.querySelectorAll(`.${styles.tierChip}`)]
    .filter((chip) => chip.querySelector(`.${styles.mark}`))
    .map((chip) => {
      const mark = chip.querySelector(`.${styles.mark}`)!;
      const before = mark.previousSibling;
      const ancestors: Element[] = [];
      for (let el = mark.parentElement; el && el !== chip; el = el.parentElement) ancestors.push(el);
      return {
        text: norm(chip.textContent),
        marks: mark.textContent ?? "",
        // A break opportunity right before the marks: an ordinary space.
        breakBefore: before?.nodeType === Node.TEXT_NODE && /[ ]$/.test(before.textContent ?? ""),
        insideNowrap: ancestors.some((el) => NOWRAP.some((c) => el.classList.contains(c))),
        runs: [...chip.querySelectorAll(`.${styles.tierWord}`)].map((w) => norm(w.textContent)),
      };
    });
}

describe("a chip's † ‡ § marks can take the chip's next line, together", () => {
  for (const [slug, side] of [
    ["ayra-starr-vs-fireboy-dml", 1],
    ["tyla-vs-ayra-starr", 2],
  ] as const) {
    it(`${slug}: Ayra Starr's Mexico chip (side ${side === 1 ? "A" : "B"}) wraps before its marks, not past its cell`, async () => {
      const root = await pair(slug);
      const chip = row(root, "MX").children[side].querySelector(`.${styles.tierChip}`)!;
      const [c] = markChips(chip.parentElement as HTMLElement);
      expect(c.text).toBe("4× Platinum † ‡ §");
      expect(c.runs).toEqual(["4× Platinum"]);
      expect(c.insideNowrap).toBe(false); // shipped: inside the nowrap "4× Platinum † ‡ §" run
      expect(c.breakBefore).toBe(true); // shipped: a no-break space
      // The marks stay one group: no mark is ever alone on a line.
      expect(c.marks).toBe("† ‡ §");
    });
  }

  it("every chip with marks, on pages with plain, half-step and two-mark chips, sets them the same way", async () => {
    for (const slug of ["ayra-starr-vs-fireboy-dml", "burna-boy-vs-wizkid", "burna-boy-vs-tems", "burna-boy-vs-ckay"]) {
      const chips = markChips(await pair(slug));
      expect(chips.length, slug).toBeGreaterThan(3);
      for (const c of chips) {
        expect(c.insideNowrap, `${slug}: ${c.text}`).toBe(false);
        expect(c.breakBefore, `${slug}: ${c.text}`).toBe(true);
        expect(c.marks, `${slug}: ${c.text}`).not.toMatch(/ /);
      }
    }
  });

  it("a half-step chip keeps its two runs: “4× Platinum” / “+ Gold † ‡ §”", async () => {
    const root = await pair("burna-boy-vs-wizkid");
    const [c] = markChips(row(root, "MX") as HTMLElement);
    expect(c.text).toBe("4× Platinum + Gold † ‡ §");
    expect(c.runs).toEqual(["4× Platinum", "+ Gold"]);
    // The marks ride with "+ Gold" in one flex item of the chip, so the chip
    // still breaks between the halves first.
    const mark = row(root, "MX").querySelector(`.${styles.mark}`)!;
    const run = mark.parentElement!;
    expect(run.parentElement!.classList.contains(styles.tierChip)).toBe(true);
    expect(norm(run.textContent)).toBe("+ Gold † ‡ §");
  });
});

describe("“US · LATIN” stays inside the 56px code column at ≤360", () => {
  const css = readFileSync(join(process.cwd(), "app/compare/compare.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const narrow = css.slice(css.indexOf("@media (max-width: 360px)"));
  const block = narrow.slice(0, narrow.indexOf("\n}"));

  it("the code column is 56px there, and the RIAA Latin row's code is “US · LATIN”", async () => {
    expect(block).toMatch(/grid-template-columns:\s*56px/);
    const root = await pair("ayra-starr-vs-fireboy-dml");
    expect(row(root, "US · LATIN")).toBeTruthy();
  });

  it("a code with no room beside its flag takes the next line (shipped: no wrap, “LATIN” 7px over)", () => {
    const rule = block.match(/(?:^|[\n}])\s*\.country\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(rule).toMatch(/flex-wrap:\s*wrap/);
  });
});
