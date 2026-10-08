import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileNavSheet from "../../app/components/MobileNavSheet";
import { navGroups, navSearchHint, navUpdated } from "../../app/lib/navGroups";
import { enGbDate } from "../../app/lib/dates";

/**
 * Live debug of the 7 Oct work, 8 Oct 2026 (screens-sheet-foot-two-digit-day).
 *
 * The menu sheet's foot is one row: "Updated <date>" and the "Box office ↗"
 * pill. #444 kept it one row at 320 by cutting the pill's padding to 12px
 * below 360, measured on "Updated 7 Oct 2026", which left 0.5px. A two-digit
 * day is one Space Mono character (7.83px) longer, so from the first /updates
 * entry dated 10 Oct or later the status broke onto two lines at 320.
 *
 * Read in headless Chrome on the live page, 8 Oct 2026, the status text
 * swapped for every month at a two-digit day, 320/360/375/390, both themes:
 *   main at 320: status 160.81px for "Updated 30 Sep 2026" (152.98 for
 *     "Updated 7 Oct 2026"), pill 120.52, so 7.33px short: two lines.
 *   the fix grafted on: pill 114.52 and a 4px minimum gap, 4.67px to spare,
 *     one line for every stamp; 360, 375 and 390 read as on main (pill
 *     128.52, gap 10).
 *   with the arrow forced to a full-em fallback: pill 118.91, 0.28 to spare,
 *     still one line.
 *
 * jsdom does no layout, so this rebuilds the row's width from the stylesheet
 * and Space Mono's advance, checks the rebuild against those reads, and then
 * asks it about the longest stamp the formatter can print.
 */

const CSS = readFileSync("app/components/mobileNavSheet.module.css", "utf8");

/** Space Mono's advance, the same for every glyph: 612 of 1,000 units. */
const SPACE_MONO = 0.612;
/** "↗" is not in Space Mono, so a fallback draws it: a mono one at 0.602em
 *  (Menlo, 6.62px at 11px, what headless Chrome drew), a proportional one up
 *  to a full em. The row has to hold the wider. */
const ARROW_MONO = 0.602;
const ARROW_WORST = 1;
const PHONE_HEIGHT = 844;

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks, in source order (tests/ui/navSheetSearchOneLine.test.tsx's parse). */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

/** A width or height query on a portrait phone; any other feature is not this phone. */
const holds = (query: string, width: number) =>
  query.split(/\s+and\s+/).every((part) => {
    const m = /^\((min|max)-(width|height):\s*(\d+)px\)$/.exec(part.trim());
    if (!m) return false;
    const v = m[2] === "width" ? width : PHONE_HEIGHT;
    return m[1] === "min" ? v >= Number(m[3]) : v <= Number(m[3]);
  });

/** What one selector ends up with at a width, later rules winning. */
const at = (rules: Rule[], selector: string, width: number): Record<string, string> =>
  Object.assign({}, ...rules.filter((r) => r.selector === selector && (!r.query || holds(r.query, width))).map((r) => r.decls));

const len = (v: string, fontSize: number) => (v.endsWith("em") ? parseFloat(v) * fontSize : parseFloat(v));
/** Left plus right, from a padding shorthand. */
const sides = (v: string) => {
  const [t, r = t, , l = r] = v.trim().split(/\s+/).map(parseFloat);
  return r + l;
};

/** The pill's label and the status prefix, as the component renders them. */
const rendered = (stamp: string) => {
  const { container } = render(<MobileNavSheet groups={navGroups} updated={stamp} searchHint={navSearchHint} />);
  const foot = container.querySelector('[class*="foot"]')!;
  const status = foot.querySelector('[class*="status"]')!;
  const pill = foot.querySelector('a[href="/records/tours/revenue"]')!;
  return { status: (status.textContent ?? "").trim(), label: (pill.textContent ?? "").trim() };
};

/** The row at a width: each part's width and what is left over. */
function foot(css: string, width: number, stamp: string, arrow = ARROW_WORST) {
  const rules = parse(css);
  const row = at(rules, ".foot", width);
  const status = at(rules, ".status", width);
  const dot = at(rules, ".dot", width);
  const pill = at(rules, ".boxOffice", width);
  const { status: text, label } = rendered(stamp);

  const fs = parseFloat(status["font-size"]);
  const statusW = parseFloat(dot.width) + parseFloat(status.gap) + text.length * (SPACE_MONO * fs + len(status["letter-spacing"], fs));
  const pfs = parseFloat(pill["font-size"]);
  const pls = len(pill["letter-spacing"], pfs);
  const glyphs = [...label];
  const arrows = glyphs.filter((g) => g === "↗").length;
  const pillW = sides(pill.padding) + (glyphs.length - arrows) * (SPACE_MONO * pfs + pls) + arrows * (arrow * pfs + pls);
  const room = width - sides(row.padding) - parseFloat(row.gap) - pillW - statusW;
  return { statusW, pillW, room, gap: row.gap, padding: pill.padding, text };
}

/** Every stamp the nav's formatter prints across a common and a leap year
 *  (the options are navGroups.ts's own: day numeric, month short, UTC). */
const stamps = [2026, 2028].flatMap((y) =>
  Array.from({ length: 366 }, (_, d) => new Date(Date.UTC(y, 0, 1 + d)))
    .filter((d) => d.getUTCFullYear() === y)
    .map((d) => enGbDate(d, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })),
);
const longest = Math.max(...stamps.map((s) => s.length));
const LONGEST = stamps.find((s) => s.length === longest)!;

// origin/main's block below 360, verbatim (#444, 7 Oct 2026).
const SHIPPED_BLOCK = `@media (max-width: 359px) {
  .boxOffice { padding: 0 12px; }
}`;
const NARROW_BLOCK = /@media \(max-width: 359px\)\s*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/;
const shipped = (() => {
  const clean = CSS.replace(/\/\*[\s\S]*?\*\//g, "");
  if (!NARROW_BLOCK.test(clean)) throw new Error("no (max-width: 359px) block to swap");
  return clean.replace(NARROW_BLOCK, SHIPPED_BLOCK);
})();

const near = (a: number, b: number) => Math.abs(a - b) < 0.05;

describe("the menu sheet's foot holds the longest date on one row at 320", () => {
  it("the longest stamp is a two-digit day with a three-letter month, and the nav prints that shape", () => {
    expect(LONGEST).toMatch(/^\d{2} [A-Z][a-z]{2} \d{4}$/);
    expect(stamps.every((s) => s.length <= LONGEST.length)).toBe(true);
    expect(stamps).toContain("30 Sep 2026");
    // The stamp the site prints today has the same shape, so the stamps
    // above are the ones the foot can show.
    expect(navUpdated).toMatch(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/);
  });

  it("the rebuild matches headless Chrome's reads, on main and with the fix", () => {
    const now = foot(CSS, 320, LONGEST, ARROW_MONO);
    expect(now.text).toBe(`Updated ${LONGEST}`);
    expect(near(now.statusW, 160.81), `status ${now.statusW}`).toBe(true);
    expect(near(now.pillW, 114.52), `pill ${now.pillW}`).toBe(true);
    expect(near(now.room, 4.67), `room ${now.room}`).toBe(true);
    expect(near(foot(CSS, 320, LONGEST, ARROW_WORST).room, 0.28)).toBe(true);
    expect(near(foot(CSS, 360, LONGEST, ARROW_MONO).pillW, 128.52)).toBe(true);
    // main: the one-digit day it was measured on fit by half a pixel; the
    // two-digit day did not.
    expect(near(foot(shipped, 320, "7 Oct 2026", ARROW_MONO).room, 0.5)).toBe(true);
    expect(near(foot(shipped, 320, LONGEST, ARROW_MONO).room, -7.33)).toBe(true);
  });

  it("at 320 the longest stamp fits beside the pill, even when the arrow falls back to a full em", () => {
    const row = foot(CSS, 320, LONGEST, ARROW_WORST);
    expect(row.room, `${row.room.toFixed(2)}px left at 320`).toBeGreaterThanOrEqual(0);
    // With the arrow headless Chrome drew, there is a margin, not a hair.
    expect(foot(CSS, 320, LONGEST, ARROW_MONO).room).toBeGreaterThanOrEqual(4);
  });

  it("from 360 the foot is as main shipped it: a 10px gap and 16px of pill padding", () => {
    for (const w of [360, 375, 390]) {
      const now = foot(CSS, w, LONGEST);
      const before = foot(shipped, w, LONGEST);
      expect([now.gap, now.padding], `${w}px`).toEqual(["10px", "0 16px"]);
      expect([now.statusW, now.pillW, now.room], `${w}px`).toEqual([before.statusW, before.pillW, before.room]);
      expect(now.room, `${w}px`).toBeGreaterThan(0);
    }
  });

  it("negative control: main's 12px pill at 320 leaves the longest stamp short, and the row breaks", () => {
    const row = foot(shipped, 320, LONGEST, ARROW_MONO);
    expect(row.padding).toBe("0 12px");
    expect(row.gap).toBe("10px");
    expect(row.room).toBeLessThan(0);
  });
});
