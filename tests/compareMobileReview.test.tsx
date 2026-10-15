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
import { winning as win } from "./fixtures/cssRules";

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

describe("5. nothing on /compare sits on the tab bar; the tab bar's height stays one source", () => {
  const boardBottom = (css: string) =>
    rules(css).find((r) => r.selector === ".boardBar" && decl(r.body, "bottom") !== undefined)?.body;

  // The fixed "The Afrobeats Board ↗" bar left the compare family (Job 2,
  // J2-13): the window grows by its 69px and the board stays as Next and in
  // the menu. So no rule for it remains, and nothing adds 69 to --tabbar-h.
  it("no rule for the board bar remains, and nothing reads --tabbar-h + 69", () => {
    expect(rules(read(COMPARE)).filter((r) => /\.(boardBar|boardBtn|barSpacer)\b/.test(r.selector))).toEqual([]);
    expect(boardBottom(read(COMPARE))).toBeUndefined();
    for (const f of [COMPARE, GLOBALS, "app/components/BirthdayCelebration.module.css"]) {
      expect(rules(read(f)).filter((r) => /\+\s*69px/.test(r.body)).map((r) => r.selector), f).toEqual([]);
    }
    expect(read(GLOBALS)).not.toContain("compareBoardBar");
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

  it("negative control: the shipped bar had a rule of its own, at an offset re-added by hand", () => {
    const shipped = `@media (max-width: 900px) {\n  .boardBar {\n    bottom: calc(57px + max(30px, env(safe-area-inset-bottom, 0px)));\n  }\n}`;
    expect(boardBottom(shipped)).toBeDefined();
    expect(decl(boardBottom(shipped)!, "bottom")).not.toBe("var(--tabbar-h)");
  });
});

describe("6. J2-1: the phone pair page order (design review 8 Oct 2026, fix 36)", () => {
  const CSS = read(COMPARE);
  const at = (w: number) => (m: string | null) =>
    m === null || (/max-width: 900px/.test(m) ? w <= 900 : /max-width: 360px/.test(m) ? w <= 360 : /min-width: 901px/.test(m) ? w > 900 : false);
  // The module's names as the stylesheet spells them, keyed by the test build's (the import is a proxy, not a map).
  const SOURCE = new Map([...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]));
  const names = (el: Element) => [...el.classList].map((c) => SOURCE.get(c) ?? c);
  const prop = (el: Element, p: string, w: number) => {
    let v: string | undefined;
    for (const n of names(el)) {
      const own = win(CSS, `.${n}`, p, at(w));
      if (own !== undefined) v = own;
    }
    for (const n of names(el)) {
      const scoped = win(CSS, `.flowPair > .${n}`, p, at(w));
      if (scoped !== undefined) v = scoped;
    }
    return v;
  };
  const page = async () => {
    const d = document.createElement("div");
    d.innerHTML = await html({ a: "burna-boy", b: "wizkid" });
    return d;
  };
  /** The flow's shown children at width w, in the order a column paints them, by their stylesheet names. */
  const painted = (flow: Element, w: number) =>
    [...flow.children]
      .map((el, i) => ({ el, i }))
      .filter(({ el }) => prop(el, "display", w) !== "none")
      .sort((x, y) => Number(prop(x.el, "order", w) ?? 0) - Number(prop(y.el, "order", w) ?? 0) || x.i - y.i)
      .map(({ el }) => el);
  const FOCUSABLE = "a[href], summary, button, input";

  it("at 390: both totals, the verdict and coverage line, the switches, the Nigeria strip, the change row", async () => {
    const d = await page();
    const flow = d.querySelector(`.${styles.flowPair}`)!;
    expect(flow).not.toBeNull();
    for (const w of [320, 390, 900]) {
      expect(win(CSS, ".flowPair", "display", at(w)), `${w}`).toBe("flex");
      expect(win(CSS, ".flowPair", "flex-direction", at(w)), `${w}`).toBe("column");
      expect(painted(flow, w).map((el) => names(el)[0]), `${w}`).toEqual(["head", "diffRow", "controls", "ngStrip", "changeRow"]);
    }
    // The pair line sits above the flow, straight under the h1.
    expect(d.querySelector("h1")!.nextElementSibling?.classList.contains(styles.pairLine)).toBe(true);
    expect(d.querySelector(`.${styles.pairLine}`)!.nextElementSibling).toBe(flow);
    // ...and the summary and the table come after it.
    expect(flow.compareDocumentPosition(d.querySelector(`.${styles.summaryRow}`)!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("the focusables, in DOM order, follow what the eye reads: switches, the strip's action, both changes, the mode menu", async () => {
    const d = await page();
    const flow = d.querySelector(`.${styles.flowPair}`)!;
    const w = 390;
    // Shown at 390, and reachable: a shut <details> holds only its summary.
    const shown = (el: Element) => {
      for (let n: Element | null = el; n && n !== flow; n = n.parentElement) {
        if (prop(n, "display", w) === "none") return false;
        if (n !== el && n.tagName === "DETAILS" && !n.hasAttribute("open") && el.tagName !== "SUMMARY") return false;
      }
      return true;
    };
    const inDom = [...flow.querySelectorAll(FOCUSABLE)].filter(shown);
    const byPaint = painted(flow, w).flatMap((el) => [...el.querySelectorAll(FOCUSABLE)].filter(shown));
    expect(inDom).toEqual(byPaint);
    const label = (el: Element) => (el.textContent ?? "").replace(/\s+/g, " ").trim();
    expect(inDom.map(label)).toEqual([
      "Featured appearances: on · every cert held",
      "Nigeria: separated",
      "Include Nigeria",
      "Burna Boy Change",
      "Wizkid Change",
      "Comparison mode: Artists ▾▴",
    ]);
  });

  it("above 900 the wrapper is no box, so the desktop reads in DOM order", () => {
    for (const w of [901, 1024, 1440]) {
      expect(win(CSS, ".flow", "display", at(w)), `${w}`).toBe("contents");
      expect(win(CSS, ".flowPair", "display", at(w)), `${w}`).toBeUndefined();
      expect(win(CSS, ".flowPair > .head", "order", at(w)), `${w}`).toBeUndefined();
    }
  });

  it("fix 55b: the coverage line is Geist 12.5, muted, in sentence case, on both layouts", async () => {
    for (const w of [390, 1440]) {
      expect(win(CSS, ".scope", "font-family", at(w)), `${w}`).toBe("var(--font-body, inherit)");
      expect(win(CSS, ".scope", "font-size", at(w)), `${w}`).toBe("var(--type-caption)");
      expect(win(CSS, ".scope", "text-transform", at(w)), `${w}`).toBe("none");
      expect(win(CSS, ".scope", "letter-spacing", at(w)), `${w}`).toBe("0");
      expect(win(CSS, ".scope", "color", at(w)), `${w}`).toBe("var(--text-muted)");
    }
    // Both variants are built: one date when both registers were read the
    // same day, two when they were not.
    const d = await page();
    // Since 15 Oct 2026 the full sweep's date is followed by the targeted
    // re-reads (question 2, tests/ui/yesAll1015RegistersReread).
    expect((d.querySelector(`.${styles.scope}`)?.textContent ?? "").replace(/\u00a0/g, " ")).toMatch(
      / · both registers read \d{1,2} [A-Z][a-z]+ \d{4}, then re-read on each register's publishing day \(latest \d{1,2} [A-Z][a-z]+ \d{4}\)$/,
    );
    expect(read("app/compare/page.tsx")).toContain("` · registers read ${longDate(a.registersReadOn)} (${a.name}) and ${longDate(b.registersReadOn)} (${b.name})`");
  });

  it("negative controls: the shipped DOM order and the shipped coverage face", () => {
    // live/pair.html (burnaboystats.com, 8 Oct 2026): the controls' classes in
    // the order served — with no ordering rule, the switches sat above the totals.
    const SERVED = ["seg", "slots", "controls", "head", "diffRow", "ngStrip"];
    expect(SERVED.indexOf("controls")).toBeLessThan(SERVED.indexOf("head"));
    // main's .scope (e85e6efe, compare.module.css:406-413), verbatim, and the
    // live line it set: "27 countries checked · outside Nigeria · both registers read 2 October 2026".
    const shipped = ".scope {\n  margin-left: auto;\n  font-family: var(--font-mono), monospace;\n  font-size: var(--type-caption);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}";
    expect(win(shipped, ".scope", "font-family", () => true)).toMatch(/--font-mono/);
    expect(win(shipped, ".scope", "text-transform", () => true)).toBe("uppercase");
    const live = '<span class="compare-module__-ZWgpW__scope">27 countries checked · outside Nigeria<!-- --> · both registers read 2 October 2026</span>';
    expect(live).toContain("both registers read 2 October 2026");
  });
});
