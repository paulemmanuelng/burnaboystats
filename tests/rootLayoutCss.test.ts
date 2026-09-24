import { describe, it, expect } from "vitest";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

/**
 * The root layout links no page's CSS, and the rules that relied on the old
 * sheet order are pinned.
 *
 * app/lib/navGroups.ts builds the nav sheet and the root layout imports it, so
 * whatever it imports is linked on every page. Until 23 Sep 2026 it counted the
 * FAQ and the By-the-numbers figures by importing them from app/faq/page.tsx
 * and app/records/by-the-numbers/page.tsx, which brought those pages' CSS with
 * them: faq.module.css sat in the layout's own sheet and byTheNumbers,
 * MobileDeepPage, MobileFaq, TrendDelta, KeepExploring and BreadcrumbBar in the
 * 115 KB shared one, render-blocking on every page including the home page. The
 * arrays now live in app/data/faqs.ts and app/data/byTheNumbers.ts, which
 * import no CSS. On a local build the home page's blocking CSS fell from
 * 210 KB to 96 KB (36 → 19 KB at Vercel's brotli level).
 *
 * It also moved globals.css. Turbopack now bundles it into the first sheet and
 * the shared sheet follows, where the shared sheet used to come first. A
 * module rule that ties a globals.css rule on specificity now wins it, so a
 * computed-style diff of 42 routes at 375 and 1440 px in both themes was run
 * before and after. Three rules had only ever lost, and would now paint:
 * KeepExploring's `.wrap` margins, the phone FAQ's `.item` scroll margin and
 * the artist page's `.heroLive` gap. Each is deleted rather than brought to
 * life. Sheet order is Next's code, not ours: re-run that diff on any Next
 * upgrade or chunking change.
 */

const ROOT = process.cwd();
const posix = (p: string) => p.split(sep).join("/");

/** Relative (and `@/`) imports that bring code or CSS in; type-only imports do not. */
const IMPORT = /(?:import|export)\s+(?:type\s+)?(?:[^'"]*?\s+from\s+)?["']([^"']+)["']/g;
const EXTENSIONS = ["", ".ts", ".tsx", ".js", ".mjs", "/index.ts", "/index.tsx"];

const stripComments = (src: string) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/[^\n]*/g, "$1");

function resolveImport(from: string, spec: string): string | null {
  const base = spec.startsWith(".") ? join(dirname(from), spec) : spec.startsWith("@/") ? join(ROOT, spec.slice(2)) : null;
  if (!base) return null;
  for (const ext of EXTENSIONS) if (existsSync(base + ext) && statSync(base + ext).isFile()) return base + ext;
  return null;
}

/** Every file the root layout reaches through static imports, repo-relative. */
function reachedFromLayout(sources: Record<string, string> = {}): string[] {
  const seen = new Set<string>();
  const visit = (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    if (!/\.(tsx?|mjs|js)$/.test(file)) return;
    const rel = posix(relative(ROOT, file));
    const src = stripComments(sources[rel] ?? readFileSync(file, "utf8"));
    for (const m of src.matchAll(IMPORT)) {
      if (/^(import|export)\s+type\b/.test(m[0])) continue;
      const next = resolveImport(file, m[1]);
      if (next) visit(next);
    }
  };
  visit(join(ROOT, "app/layout.tsx"));
  return [...seen].map((f) => posix(relative(ROOT, f))).sort();
}

const isPage = (f: string) => /(^|\/)page\.[jt]sx?$/.test(f);

/** The two lines app/lib/navGroups.ts carried until 23 Sep 2026, verbatim. */
const NAV_IMPORTS_SHIPPED_UNTIL_2026_09_23 = [
  'import { faqs } from "../faq/page";',
  'import { stats as byTheNumbers } from "../records/by-the-numbers/page";',
];
const NAV_IMPORTS_NOW = [
  'import { faqs } from "../data/faqs";',
  'import { stats as byTheNumbers } from "../data/byTheNumbers";',
];

describe("the root layout's CSS", () => {
  it("reaches no page module, so no page's stylesheet is linked on every page", () => {
    const reached = reachedFromLayout();
    expect(
      reached.filter(isPage),
      "A page module imported from the layout's graph (usually via lib/navGroups.ts) links its " +
        "stylesheets, render-blocking, on every page. Move the data it needs into app/data/.",
    ).toEqual([]);
  });

  it("still walks the graph it is guarding", () => {
    const reached = reachedFromLayout();
    for (const f of ["app/lib/navGroups.ts", "app/data/faqs.ts", "app/data/byTheNumbers.ts", "app/globals.css"]) {
      expect(reached).toContain(f);
    }
  });

  it("negative control: navGroups as it shipped until 23 Sep 2026 reaches both pages and their CSS", () => {
    let nav = readFileSync(join(ROOT, "app/lib/navGroups.ts"), "utf8");
    NAV_IMPORTS_NOW.forEach((line, i) => {
      expect(nav, "navGroups no longer carries this import; update NAV_IMPORTS_NOW").toContain(line);
      nav = nav.replace(line, NAV_IMPORTS_SHIPPED_UNTIL_2026_09_23[i]);
    });
    const reached = reachedFromLayout({ "app/lib/navGroups.ts": nav });
    expect(reached.filter(isPage)).toEqual(["app/faq/page.tsx", "app/records/by-the-numbers/page.tsx"]);
    expect(reached).toContain("app/faq/faq.module.css");
    expect(reached).toContain("app/records/by-the-numbers/byTheNumbers.module.css");
  });
});

/** Declarations of every rule in `css` whose selector names `.cls`. */
const declarationsOf = (css: string, cls: string) =>
  [...stripComments(css).matchAll(/([^{}]*)\{([^{}]*)\}/g)]
    .filter(([, selector]) => new RegExp(`\\.${cls}\\b`).test(selector))
    .flatMap(([, , body]) => body.split(";").map((d) => d.trim()).filter(Boolean));

/** The rules origin/main 31c5c2a3 served until 23 Sep 2026, verbatim. */
const KEEP_EXPLORING_WRAP_SHIPPED_UNTIL_2026_09_23 = `.wrap {
  margin: 64px auto 80px;
}
/* Less top gap above "Keep exploring" on phones (the CTA above already adds space). */
@media (max-width: 760px) {
  .wrap {
    margin: 36px auto 56px;
  }
}`;
const MOBILE_FAQ_ITEM_SHIPPED_UNTIL_2026_09_23 = `.item {
  /* Clears the sticky back bar when a chip jumps to this group. */
  scroll-margin-top: 84px; padding: 18px; border-bottom: 1px solid var(--line); }`;

const setsMargin = (d: string) => /^margin(-[a-z-]+)?\s*:/.test(d);
const setsScrollMargin = (d: string) => /^scroll-margin(-[a-z-]+)?\s*:/.test(d);

describe("rules that never painted stay unpainted", () => {
  it("'Keep exploring' takes its margin from .container alone", () => {
    const tsx = readFileSync(join(ROOT, "app/components/KeepExploring.tsx"), "utf8");
    expect(tsx).toMatch(/<nav className="container" aria-label="Explore more pages">/);
    const css = readFileSync(join(ROOT, "app/components/KeepExploring.module.css"), "utf8");
    expect(
      declarationsOf(css, "wrap").filter(setsMargin),
      "These margins lost to .container { margin: 0 auto } until 23 Sep 2026 and never painted. " +
        "Loaded after globals.css now, they would add 36-80px around 'Keep exploring' on nearly every page.",
    ).toEqual([]);
  });

  it("the phone FAQ's jump targets take their scroll margin from [id] alone", () => {
    const css = readFileSync(join(ROOT, "app/components/mobileFaq.module.css"), "utf8");
    expect(
      declarationsOf(css, "item").filter(setsScrollMargin),
      "84px here lost to [id]'s 88px + safe area until 23 Sep 2026; after globals.css it would win.",
    ).toEqual([]);
  });

  it("negative controls: the rules the site shipped until 23 Sep 2026 fail", () => {
    expect(declarationsOf(KEEP_EXPLORING_WRAP_SHIPPED_UNTIL_2026_09_23, "wrap").filter(setsMargin)).toEqual([
      "margin: 64px auto 80px",
      "margin: 36px auto 56px",
    ]);
    expect(declarationsOf(MOBILE_FAQ_ITEM_SHIPPED_UNTIL_2026_09_23, "item").filter(setsScrollMargin)).toEqual([
      "scroll-margin-top: 84px",
    ]);
  });
});

/** The live-board button's rule as origin/main 31c5c2a3 served it until 23 Sep 2026, verbatim. */
const HERO_LIVE_SHIPPED_UNTIL_2026_09_23 = ".heroLive { display: inline-flex; align-items: center; gap: 9px; }";

/** A declaration that spaces a flex container's children. */
const setsGap = (d: string) => /^(row-|column-)?gap\s*:/.test(d);

describe("the live-board button keeps the gap it painted", () => {
  it("is still a .btn carrying .heroLive, so the pin below means something", () => {
    expect(readFileSync(join(ROOT, "app/afrobeats/[artist]/page.tsx"), "utf8")).toMatch(
      /className=\{`btn btnSecondary \$\{styles\.heroLive\}`\}/,
    );
  });

  it(".heroLive declares no gap of its own, so .btn's 6px applies in either order", () => {
    const decls = declarationsOf(readFileSync(join(ROOT, "app/afrobeats/[artist]/artist.module.css"), "utf8"), "heroLive");
    expect(decls.length, "no .heroLive rule found in the artist stylesheet").toBeGreaterThan(0);
    expect(
      decls.filter(setsGap),
      "The artist sheet now loads after globals.css, so a gap here beats .btn's and moves the dot " +
        "away from the label. It painted 6px until 23 Sep 2026.",
    ).toEqual([]);
  });

  it("negative control: the rule the site shipped until 23 Sep 2026 fails", () => {
    expect(declarationsOf(HERO_LIVE_SHIPPED_UNTIL_2026_09_23, "heroLive").filter(setsGap)).toEqual(["gap: 9px"]);
  });
});
