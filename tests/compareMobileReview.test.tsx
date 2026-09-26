import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
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

import ComparePage from "../app/compare/page";
import styles from "../app/compare/compare.module.css";

/**
 * /compare on a phone, after Claude Design's code review of 26 Sep 2026
 * (design_handoff_burnaboystats/docs-design/compare-mobile-code-review-2026-09-26.md).
 * Each item was measured with the headless harness before it was changed; the
 * layout needs a browser, so these read the CSS the way the cascade will —
 * rule, media block and order — and the page's own markup.
 *
 * Each negative control is the line the site shipped.
 */

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null, base: number) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head, base + open + 1);
      else out.push({ media, selector: head, body, at: base + i });
      i = j;
    }
  };
  walk(src, null, 0);
  return out;
}

const read = (p: string) => readFileSync(p, "utf8");
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();
const COMPARE = "app/compare/compare.module.css";
const TABBAR = "app/components/mobileTabBar.module.css";
const GLOBALS = "app/globals.css";

/** A rule that applies at a phone width of 375: no media, or a max-width media at or above it. */
const atPhone = (media: string | null) => {
  if (media === null) return true;
  const m = media.match(/^@media \(max-width: (\d+)px\)$/);
  return Boolean(m && Number(m[1]) >= 375);
};

/**
 * The winning value of `prop` for a bare `.cls` at a phone width: the last
 * rule in source order (these are all one class, so order decides) whose
 * selector list names exactly `.cls`.
 */
function phoneValue(css: string, cls: string, prop: string): string | undefined {
  let win: string | undefined;
  for (const r of rules(css)) {
    if (!atPhone(r.media)) continue;
    if (!r.selector.split(",").map((s) => s.trim()).includes(`.${cls}`)) continue;
    const v = decl(r.body, prop);
    if (v !== undefined) win = v;
  }
  return win;
}

async function html(sp: Record<string, string>): Promise<string> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return renderToStaticMarkup(tree);
}
/** The opening tag and body of the first <p> whose text contains `needle`. */
function paragraph(h: string, needle: string): { cls: string; inner: string } | null {
  for (const m of h.matchAll(/<p class="([^"]*)">([\s\S]*?)<\/p>/g)) {
    if (m[2].replace(/<[^>]+>/g, "").includes(needle)) return { cls: m[1], inner: m[2] };
  }
  return null;
}
const classes = (cls: string) => cls.split(/\s+/);

describe("1. the phone's chips meet the 44px touch floor", () => {
  const floor = (css: string) =>
    ["chip", "featuredLink", "moreToggle"].map((c) => [c, parseFloat(phoneValue(css, c, "min-height") ?? "0")] as const);

  it("artist and song chips, the head-to-head links and the fold toggle", () => {
    for (const [cls, h] of floor(read(COMPARE))) expect(h, cls).toBeGreaterThanOrEqual(44);
  });

  it("negative control: the shipped rules, 40px each", () => {
    const shipped = `.chip {\n  padding: 8px 13px;\n  min-height: 40px;\n}\n.featuredLink {\n  min-height: 40px;\n}\n.moreToggle {\n  min-height: 40px;\n}`;
    expect(floor(shipped).every(([, h]) => h === 40)).toBe(true);
  });

  it("negative control: the fix inside the 760px block loses to .moreToggle's later base rule", () => {
    // The review's line, placed where it said — above the base rule, which wins on order.
    const early = `.chip {\n  min-height: 40px;\n}\n@media (max-width: 760px) {\n  .chip, .featuredLink, .moreToggle { min-height: 44px; }\n}\n.moreToggle {\n  min-height: 40px;\n}`;
    expect(Object.fromEntries(floor(early))).toMatchObject({ chip: 44, moreToggle: 40 });
  });
});

describe("3. the why-line is the design's: a 1px gold edge, and refusals take no gold", () => {
  const why = () => rules(read(COMPARE)).find((r) => r.media === null && r.selector === ".why")!;

  it("the why-line has a 1px edge all round, not a left-border accent", () => {
    const body = why().body;
    expect(decl(body, "border")).toBe("1px solid var(--gold-edge)");
    expect(decl(body, "border-left")).toBeUndefined();
    expect(decl(body, "color")).toBe("var(--text)");
  });

  it("negative control: the shipped rule", () => {
    const shipped = `border-left: 3px solid var(--gold);\n  background: var(--gold-wash);\n  padding: 13px 18px;`;
    expect(decl(shipped, "border")).toBeUndefined();
    expect(decl(shipped, "border-left")).toBe("3px solid var(--gold)");
  });

  it("every rule for the refusal variant is neutral: --bg-raised on a --line edge, no gold", () => {
    const own = rules(read(COMPARE)).filter((r) => r.selector.includes(".whyRefusal"));
    expect(own.length).toBeGreaterThan(0);
    for (const r of own) expect(r.body).not.toMatch(/gold/);
    const base = own.find((r) => r.selector === ".whyRefusal")!;
    expect(decl(base.body, "background")).toBe("var(--bg-raised)");
    expect(decl(base.body, "border-color")).toBe("var(--line)");
  });

  it("the same-artist refusal renders as the neutral note, with no gold mark", async () => {
    const p = paragraph(await html({ a: "burna-boy", b: "burna-boy" }), "That is Burna Boy on both sides.");
    expect(p).not.toBeNull();
    expect(classes(p!.cls)).toContain(styles.whyRefusal);
    expect(p!.inner).not.toContain(styles.whyMark);
  });

  it("the same-recording refusal renders as the neutral note, with no gold mark", async () => {
    const p = paragraph(
      await html({ mode: "songs", a: "wizkid", b: "tems", sa: "Essence", sb: "Essence" }),
      "That is the same recording on both sides."
    );
    expect(p).not.toBeNull();
    expect(classes(p!.cls)).toContain(styles.whyRefusal);
    expect(p!.inner).not.toContain(styles.whyMark);
  });

  it("the Nigeria-by-default reason keeps the gold why-line and its mark, hidden from the AX tree", async () => {
    const p = paragraph(await html({ a: "burna-boy", b: "black-sherif" }), "Nigeria included by default");
    expect(p).not.toBeNull();
    expect(classes(p!.cls)).toContain(styles.why);
    expect(classes(p!.cls)).not.toContain(styles.whyRefusal);
    expect(p!.inner).toContain(`<span class="${styles.whyMark}" aria-hidden="true">i</span>`);
  });

  it("negative control: the shipped refusal was the gold why-line", () => {
    // What <p className={styles.why}> rendered for both refusals.
    expect(classes(styles.why)).not.toContain(styles.whyRefusal);
  });
});

describe("4. the qualifier '· at least' cannot be clipped by its own line", () => {
  const clips = (css: string) =>
    rules(css).some(
      (r) => r.selector === ".headName" && atPhone(r.media) && /overflow\s*:\s*hidden/.test(r.body)
    );

  it("no .headName rule hides overflow (the name ellipsises on .headNameName)", () => {
    expect(clips(read(COMPARE))).toBe(false);
    // The phone's letter-spacing is kept.
    expect(phoneValue(read(COMPARE), "headName", "letter-spacing")).toBe("0.08em");
  });

  it("negative control: the shipped 760px rule", () => {
    expect(clips(`@media (max-width: 760px) {\n  .headName { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n}`)).toBe(true);
  });
});

describe("5. the board bar sits on the tab bar's own height, one source", () => {
  const boardBottom = (css: string) =>
    rules(css).find((r) => r.selector === ".boardBar" && decl(r.body, "bottom") !== undefined)?.body;

  it("the board bar reads --tabbar-h and adds nothing of its own", () => {
    expect(decl(boardBottom(read(COMPARE))!, "bottom")).toBe("var(--tabbar-h)");
  });

  it("--tabbar-h is the sum of the tokens the tab bar is built from", () => {
    const root = rules(read(GLOBALS)).filter((r) => r.media === null && r.selector === ":root" && /--tabbar-h\s*:/.test(r.body));
    expect(root.length).toBe(1);
    expect(decl(root[0].body, "--tabbar-h")).toBe(
      "calc(var(--tabbar-pad) + var(--tabbar-row) + var(--tabbar-foot) + var(--tabbar-edge))"
    );
    const rs = rules(read(TABBAR));
    const bar = rs.find((r) => r.selector === ".bar" && decl(r.body, "position") === "fixed")!;
    expect(decl(bar.body, "padding")).toBe("var(--tabbar-pad) 10px var(--tabbar-foot)");
    expect(decl(bar.body, "border-top")).toBe("var(--tabbar-edge) solid var(--line)");
    const tab = rs.find((r) => r.selector === ".tab")!;
    expect(decl(tab.body, "min-height")).toBe("var(--tabbar-row)");
  });

  it("negative control: the shipped offset re-added the tab bar's parts by hand", () => {
    const shipped = `@media (max-width: 900px) {\n  .boardBar {\n    bottom: calc(57px + max(30px, env(safe-area-inset-bottom, 0px)));\n  }\n}`;
    expect(decl(boardBottom(shipped)!, "bottom")).not.toBe("var(--tabbar-h)");
  });
});
