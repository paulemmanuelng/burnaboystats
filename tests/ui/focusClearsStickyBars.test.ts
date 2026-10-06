import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * V-global-05 (debug of 5 Oct 2026): keyboard focus landed under the sticky
 * bars. The [id] rule in globals.css clears #hash jumps, but a link or button
 * without an id had no top margin, so the browser's focus scroll left it
 * under the 69px bar. Measured in headless Chrome on the live site, Shift+Tab
 * from the footer up, reduced motion so positions are final: at 1440,
 * "See wins by award body →" on /records/awards stopped at 23–69px, wholly
 * behind the navbar; at 1024 the "Home" crumb on /faq and at 1440 "← Music" on
 * /music/last-last sat half under it; at 390 the browser brings the control
 * to the very top (0–70px), so /certifications' "Chart peaks" and "Live
 * charts" buttons went under the back bar and the "Compare" crumb, "Home" and
 * "Choose a different artist" on /compare/burna-boy-vs-wizkid under the
 * navbar — 1, 2, 1, 3 and 5 stops. With the two rules below grafted on, every
 * one of them stops at 81px, 0 covered on 9 page runs.
 *
 * The second rule matters as much as the first: a margin on a control that
 * sits inside a stuck bar makes the browser scroll the page under it each
 * time that control takes focus — 73–76px for the navbar's and a back bar's
 * own controls, 7–19px per step along the revenue boards' stuck chip rails,
 * 10–74px on /search's sticky field (grafted at 1440 and 390, 15 pages). With
 * the exemption, 0 of them moved. html { scroll-padding-top } was tried first
 * and is ruled out here: it scrolled the page 457px whenever a navbar control
 * took focus, and it would stack on every [id] jump.
 *
 * jsdom does no layout or scrolling, so this reads the rules: the focus
 * margin, its exemption, and every position: sticky rule in app/ — each one
 * that sticks above the focus margin must be exempt, or a control in it
 * would move the page. The same checks run on the CSS the site shipped
 * (origin/main, quoted verbatim), so a guard that passed on both would be
 * caught as vacuous.
 */

const GLOBALS = readFileSync("app/globals.css", "utf8");

/** origin/main's only top scroll rule, verbatim (shipped until this fix). */
const SHIPPED = `
[id] {
  scroll-margin-top: calc(88px + env(safe-area-inset-top, 0px));
}
`;

const BAR = 69; // every sticky top bar: the navbar and the phone back bars
const RING = 4; // a 2px outline at a 2px offset

const stripComments = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, "");
/** Innermost rules, @media wrappers dropped: [selector, body]. */
const rulesOf = (css: string) =>
  [...stripComments(css).matchAll(/([^{}]*)\{([^{}]*)\}/g)].map(([, sel, body]) => [sel.trim(), body] as const);
const px = (v: string | undefined) => {
  if (v === undefined) return null;
  if (/^0(px)?$/.test(v.trim())) return 0;
  const m = /(-?\d+(?:\.\d+)?)px/.exec(v);
  return m ? Number(m[1]) : null;
};
const decl = (body: string, prop: string) =>
  new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`).exec(body)?.[1].trim();

const FOCUSABLE = ["a[href]", "button", "input", "select", "textarea", "summary", "[tabindex]"];

/** The top margin a plain (id-less) focusable gets, and where that rule sits. */
function focusRule(css: string) {
  const rules = rulesOf(css);
  const i = rules.findIndex(([sel, body]) => {
    const m = /^:where\((.*)\)$/.exec(sel);
    if (!m) return false;
    const list = m[1].split(",").map((s) => s.trim());
    return FOCUSABLE.every((f) => list.includes(f)) && decl(body, "scroll-margin-top") !== undefined;
  });
  if (i < 0) return null;
  return { index: i, margin: px(decl(rules[i][1], "scroll-margin-top")), value: decl(rules[i][1], "scroll-margin-top") };
}

/** The bars whose descendants are zeroed after the focus rule: plain classes and module-class substrings. */
function exemption(css: string, after: number) {
  const rules = rulesOf(css);
  for (let i = after + 1; i < rules.length; i++) {
    const [sel, body] = rules[i];
    const m = /^:where\((.*)\)\s+\*$/.exec(sel);
    if (!m || px(decl(body, "scroll-margin-top")) !== 0) continue;
    const parts = m[1].split(",").map((s) => s.trim());
    return {
      classes: parts.filter((p) => /^\.[\w-]+$/.test(p)).map((p) => p.slice(1)),
      substrings: parts.map((p) => /^\[class\*="([^"]+)"\]$/.exec(p)?.[1]).filter((s): s is string => !!s),
    };
  }
  return { classes: [] as string[], substrings: [] as string[] };
}

function cssFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...cssFiles(p));
    else if (p.endsWith(".css")) out.push(p);
  }
  return out;
}

/** Every sticky rule in app/ that sticks to a top edge: file, class, top in px. */
const STICKY = cssFiles("app").flatMap((file) =>
  rulesOf(readFileSync(file, "utf8"))
    .filter(([, body]) => decl(body, "position") === "sticky" && decl(body, "top") !== undefined)
    .flatMap(([sel, body]) =>
      sel.split(",").map((s) => ({
        file,
        cls: /\.([\w-]+)[^.\s]*$/.exec(s.trim())?.[1] ?? s.trim(),
        top: px(decl(body, "top")) ?? Number.NaN,
      })),
    ),
);

/** Sticky at the top, but never over the page: its own scroller, or hidden where it would be. */
const NEVER_OVER_THE_PAGE: Record<string, string> = {
  // The chart table's sort header sticks inside .tableWrap, which scrolls
  // sideways and so is the header's scroller; at 640px and below the table
  // turns into cards and its thead is display: none.
  "app/records/charts/charts.module.css .th": "sticks inside its own scroller",
};

function uncovered(css: string) {
  const f = focusRule(css);
  const margin = f?.margin ?? 0;
  const ex = exemption(css, f?.index ?? -1);
  return STICKY.filter(({ file, cls, top }) => {
    if (!(top < margin)) return false;
    if (NEVER_OVER_THE_PAGE[`${file} .${cls}`]) return false;
    if (file.endsWith("globals.css")) return !ex.classes.includes(cls);
    // Next names a module class <file>-module__<hash>__<name>.
    return !ex.substrings.some((s) => `__${cls}`.startsWith(s));
  }).map(({ file, cls, top }) => `${file} .${cls} (top ${top}px)`);
}

describe("V-global-05: keyboard focus clears the sticky bars", () => {
  it("a link or button without an id is held clear of the bar and its ring", () => {
    const f = focusRule(GLOBALS);
    expect(f).not.toBeNull();
    expect(f!.value).toBe("calc(81px + env(safe-area-inset-top, 0px))");
    expect(f!.margin!).toBeGreaterThanOrEqual(BAR + RING);
  });

  it("at zero specificity: [id] jumps keep their 88px and nothing pads the root", () => {
    expect(GLOBALS).toMatch(/\n\[id\] \{\n  scroll-margin-top: calc\(88px \+ env\(safe-area-inset-top, 0px\)\);\n\}/);
    const tops = rulesOf(GLOBALS).filter(([, body]) => decl(body, "scroll-padding-top") !== undefined);
    expect(tops).toEqual([]);
  });

  it("controls inside a bar stuck at the top carry no margin, so focusing one never moves the page", () => {
    const f = focusRule(GLOBALS)!;
    const ex = exemption(GLOBALS, f.index);
    expect(ex.classes).toEqual(["navbar"]);
    expect(ex.substrings).toEqual(["__backBar", "__mobileBackBar", "__railStick", "__heroPad", "__dialogHead"]);
  });

  it("every sticky rule in app/ that sticks above the focus margin is exempt", () => {
    // Sanity: the scan sees the bars it should.
    const seen = (cls: string) => STICKY.some((s) => s.cls === cls);
    for (const c of ["navbar", "backBar", "mobileBackBar", "railStick", "heroPad", "dialogHead", "ceremonyHead", "groupAside", "index"]) {
      expect(seen(c), c).toBe(true);
    }
    expect(uncovered(GLOBALS)).toEqual([]);
  });

  it("the asides that stick lower (84px and down) sit below the focus margin, so they need no exemption", () => {
    const margin = focusRule(GLOBALS)!.margin!;
    const lower = STICKY.filter((s) => s.top > BAR);
    expect(lower.length).toBeGreaterThan(0);
    for (const s of lower) expect(s.top, `${s.file} .${s.cls}`).toBeGreaterThanOrEqual(margin);
  });

  it("negative control: the shipped CSS gives a plain focusable no top margin", () => {
    expect(focusRule(SHIPPED)).toBeNull();
  });

  it("negative control: the focus margin without its exemption leaves the stuck bars' controls moving the page", () => {
    const f = focusRule(GLOBALS)!;
    const alone = `:where(${FOCUSABLE.join(", ")}) {\n  scroll-margin-top: ${f.value};\n}\n`;
    const left = uncovered(alone);
    for (const c of ["globals.css .navbar", "mobileCerts.module.css .backBar", "song.module.css .mobileBackBar", "mobileRevenue.module.css .railStick", "search.module.css .heroPad", "music.module.css .dialogHead"]) {
      expect(left.some((l) => l.includes(c)), c).toBe(true);
    }
  });
});
