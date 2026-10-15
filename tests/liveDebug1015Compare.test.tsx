import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, scroll: _scroll, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../app/compare/page";
import S from "../app/compare/compare.module.css";
import { decl, read, rules, winning } from "./fixtures/cssRules";

/**
 * The live debug pass of 15 Oct 2026, /compare lane. Each block holds one
 * finding; each negative control is the CSS the site shipped (origin/main
 * 51ad46b1), pasted verbatim.
 */

const COMPARE = "app/compare/compare.module.css";
/** A rule that applies at the 390px phone the pass read: no media, or a max-width at or above it. */
const atPhone = (media: string | null) => {
  if (media === null) return true;
  const m = media.match(/^@media \(max-width: (\d+)px\)$/);
  return Boolean(m && Number(m[1]) >= 390);
};

async function doc(sp: Record<string, string>): Promise<Document> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return new DOMParser().parseFromString(renderToStaticMarkup(tree), "text/html");
}

/** A module selector as the test's class names spell it: `.flow` is the
 *  module's flow class, `:global(.x)` is plain `.x`. */
const mapSel = (sel: string) =>
  sel.replace(/:global\(\.([\w-]+)\)|\.([A-Za-z_][\w-]*)/g, (_, g: string | undefined, l: string) =>
    g ? `.${g}` : `.${(S as Record<string, string>)[l] ?? l}`,
  );

const drawn = (v: string | undefined) => v !== undefined && !/^(0|none)\b/.test(v);

// ── compare-songs-double-rule ──────────────────────────────────────────────

describe("compare-songs-double-rule: one rule between the controls and the method", () => {
  /** The method's border-top on this page: the bare rule, unless a compound
   *  rule naming the method matches it here (each one outranks the bare class). */
  function methodTop(d: Document, css: string): string | undefined {
    const method = d.querySelector(`.${S.method}`)!;
    let v = winning(css, ".method", "border-top", atPhone);
    for (const r of rules(css)) {
      if (!atPhone(r.media)) continue;
      const top = decl(r.body, "border-top");
      if (top === undefined) continue;
      for (const sel of r.selector.split(",").map((s) => s.trim())) {
        if (sel === ".method" || !/\.method$/.test(sel)) continue;
        if (method.matches(mapSel(sel))) v = top;
      }
    }
    return v;
  }

  /** The horizontal rules drawn from the controls' foot to the method's head. */
  function rulesBetween(d: Document, css: string): number {
    const controls = d.querySelector(`.${S.controls}`)!;
    const method = d.querySelector(`.${S.method}`)!;
    expect(controls, "the controls render").not.toBeNull();
    expect(method, "the method renders").not.toBeNull();
    return [winning(css, ".controls", "border-bottom", atPhone), methodTop(d, css)].filter(drawn).length;
  }

  // origin/main 51ad46b1, app/compare/compare.module.css: the two rules as shipped.
  const SHIPPED = `.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 26px;
  padding: 14px 0;
  border-top: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  margin-bottom: 24px;
  font-family: var(--font-mono), monospace;
  font-size: var(--type-label);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.method {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  padding-top: 26px;
  border-top: 1px solid var(--rule);
  margin-bottom: 40px;
}`;

  it.each([
    ["/compare?mode=songs", { mode: "songs" }],
    ["/compare?mode=songs&a=burna-boy", { mode: "songs", a: "burna-boy" }],
    ["/compare?mode=albums", { mode: "albums" }],
  ])("%s: the controls end the flow and the method follows them under one rule", async (_, sp) => {
    const d = await doc(sp);
    const flow = d.querySelector(`.${S.flow}`)!;
    expect(flow.lastElementChild?.classList.contains(S.controls)).toBe(true);
    expect(rulesBetween(d, read(COMPARE))).toBe(1);
    // The method's own top padding goes with its rule: the controls' 24px
    // margin is the space between the rule and the cards.
    const method = d.querySelector(`.${S.method}`)!;
    const fix = rules(read(COMPARE)).find((r) => /\.method$/.test(r.selector) && r.selector !== ".method" && method.matches(mapSel(r.selector)));
    expect(decl(fix!.body, "padding-top")).toBe("0");
  });

  it.each([
    ["/compare?mode=songs", { mode: "songs" }],
    ["/compare?mode=songs&a=burna-boy", { mode: "songs", a: "burna-boy" }],
  ])("negative control: the shipped CSS draws both rules on %s", async (_, sp) => {
    expect(rulesBetween(await doc(sp), SHIPPED)).toBe(2);
  });

  it("the Artists landing keeps the method's rule: the head to head sits between them", async () => {
    const d = await doc({});
    const flow = d.querySelector(`.${S.flow}`)!;
    expect(flow.lastElementChild?.classList.contains(S.controls)).toBe(false);
    expect(drawn(methodTop(d, read(COMPARE)))).toBe(true);
  });

  it("a song pair's results keep the method's rule", async () => {
    const d = await doc({ mode: "songs", a: "burna-boy", sa: "Last Last", b: "wizkid", sb: "Essence" });
    expect(d.querySelector(`.${S.head}`), "the pair's figures render").not.toBeNull();
    expect(drawn(methodTop(d, read(COMPARE)))).toBe(true);
  });

  it("country mode: the controls also end the flow, but the board follows and no method renders", async () => {
    const d = await doc({ mode: "country", country: "france" });
    const flow = d.querySelector(`.${S.flow}`)!;
    expect(flow.lastElementChild?.classList.contains(S.controls)).toBe(true);
    expect(d.querySelector(`.${S.method}`)).toBeNull();
    expect(winning(read(COMPARE), ".controls", "border-bottom", atPhone)).toBe("1px solid var(--rule-soft)");
  });
});
