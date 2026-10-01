import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render } from "@testing-library/react";

const nav = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.pathname,
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

import UnmergePage from "../app/analysis/spotify-unmerge/page";
import MobileTabBar from "../app/components/MobileTabBar";
import { BACK_BAR_ROUTES, ACTION_BAR_ROUTES, hasOwnMobileChrome, hasOwnActionBar } from "../app/lib/mobileScreens";
import { spotifyTotalStreamsExact } from "../app/data/streamingTotals";
import { dom, text, trees, declared, declaredAt, cssRules } from "./fixtures/phoneTrees";

/**
 * /analysis/spotify-unmerge gets a phone screen.
 *
 * Design response of 30 Sep 2026, §11 and items 42–44, 51–55, 57–59, 78
 * (designs/mobile/CPC Phone.dc.html, and the desktop crops in
 * designs/desktop/Curator Press Correction.dc.html). tests/spotifyUnmerge.test.ts
 * holds the arithmetic and tests/faqMobileVisibility.test.tsx the answers a
 * phone reader sees; this file holds the new layout. Every negative control is
 * built from what the page shipped with before the split.
 */

const ROUTE = "/analysis/spotify-unmerge";
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const PHONE = read("app/components/mobileUnmerge.module.css");
const DESKTOP = read("app/analysis/spotify-unmerge/unmerge.module.css");
const LIVE_LABEL = "Career Spotify streams · updates daily";

/** The JSON-LD nodes of a document, by @type. */
const jsonLd = (d: Document | Element) =>
  [...d.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent ?? "{}"));
const count = (d: Document | Element, type: string) => jsonLd(d).filter((j) => j["@type"] === type).length;

describe("routing (items 42–44, 58)", () => {
  it("has its own phone chrome and keeps the five-tab bar, with no tab lit", () => {
    expect(BACK_BAR_ROUTES.has(ROUTE)).toBe(true);
    expect(hasOwnMobileChrome(ROUTE)).toBe(true);
    expect(ACTION_BAR_ROUTES.has(ROUTE)).toBe(false);
    expect(hasOwnActionBar(ROUTE)).toBe(false);
    nav.pathname = ROUTE;
    const bar = render(<MobileTabBar />).container.querySelector("nav");
    expect(bar?.querySelectorAll("a").length).toBe(5);
    expect(bar?.querySelector('[aria-current="page"]')).toBeNull();
    nav.pathname = "/";
  });

  it("negative control: the shipped back-bar list gave the route no chrome", () => {
    const shipped = new Set([...BACK_BAR_ROUTES].filter((r) => r !== ROUTE));
    expect(shipped.has(ROUTE)).toBe(false);
    // /analysis alone is in both lists, and matching is exact: the child route
    // never inherited its parent's action bar.
    expect(ACTION_BAR_ROUTES.has("/analysis")).toBe(true);
  });
});

describe(ROUTE, () => {
  const html = renderToStaticMarkup(<UnmergePage />);
  const { d, main, desktop, phone } = trees(html);
  const both = () =>
    [
      [phone!, "phone"],
      [desktop!, "desktop"],
    ] as const;
  const faq = jsonLd(d).find((j) => j["@type"] === "FAQPage")!;
  const questions: { name: string; acceptedAnswer: { text: string } }[] = faq.mainEntity;

  it("renders the phone screen first, then the desktop column, one h1 in each", () => {
    expect(phone, "no phone screen").toBeTruthy();
    expect(desktop, "no desktop wrapper").toBeTruthy();
    expect(phone!.compareDocumentPosition(desktop!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    for (const [tree, name] of both()) {
      expect(tree.querySelectorAll("h1").length, name).toBe(1);
      expect(text(tree.querySelector("h1")), name).toBe("Did Burna Boy lose Spotify streams to bots?");
    }
    expect(text(phone!.querySelector("h1 span"))).toBe("to bots?");
    const crumbs = [...d.querySelectorAll('nav[aria-label="Breadcrumb"]')];
    expect(crumbs.length).toBe(1);
    expect(desktop!.contains(crumbs[0])).toBe(true);
  });

  it("opens on the back bar: back to /analysis, 'Spotify correction', a gold badge counting the questions", () => {
    const back = phone!.querySelector('a[aria-label="Back"]');
    expect(back?.getAttribute("href")).toBe("/analysis");
    expect(questions.length).toBe(6);
    expect([...back!.parentElement!.children].map((c) => text(c)).filter(Boolean)).toEqual([
      "Spotify correction",
      `${questions.length} questions`,
    ]);
    expect(declared(PHONE, ".badge", "color")).toEqual(["var(--gold)"]);
  });

  describe("the back-bar label: one line from 390 to 401, two readable lines below (items 42/43, review of 30 Sep)", () => {
    // Measured in Chrome beside today's "6 questions" badge: at the drawn
    // 0.14em the label needs 148.9px where the bar leaves 143.8 at 390, so it
    // broke onto two lines set solid (line-height 1). At the siblings' 0.11em
    // it is one line from 390 to 401; at 375 and under no single line fits, so
    // it wraps — at the leading the sibling back bars inherit, not 1.
    const DRAWN = [402, 430, 900];
    const UNDER = [320, 360, 375, 390, 393, 401];
    const SIBLING = read("app/components/mobileAnalysis.module.css");
    /** Widths under 402 where the label is not on the sibling bars' 0.11em and inherited leading. */
    const offSiblingGrammar = (css: string) =>
      UNDER.flatMap((w) => {
        const ls = declaredAt(css, ".backLabel", "letter-spacing", w);
        const lh = declaredAt(css, ".backLabel", "line-height", w);
        return ls === "0.11em" && lh === "inherit" ? [] : [`${w}px: ${ls} / ${lh}`];
      });
    // The rule the phone screen shipped with (591562f6): the artboard's 0.14em,
    // set solid, at every width.
    const SHIPPED = `.backLabel {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}`;
    // The first fix (review round 2): 0.11em under 402, still set solid, so
    // 375 and 360 broke onto two lines with no leading between them.
    const FIRST_FIX = `${SHIPPED}
@media (max-width: 401px) {
  .backLabel { letter-spacing: 0.11em; }
}`;

    it("keeps the drawn 0.14em, set solid, at 402 and wider", () => {
      for (const w of DRAWN) {
        expect(declaredAt(PHONE, ".backLabel", "letter-spacing", w), `${w}px`).toBe("0.14em");
        expect(declaredAt(PHONE, ".backLabel", "line-height", w), `${w}px`).toBe("1");
      }
    });

    it("under 402 takes the sibling back bars' 0.11em and the leading they inherit", () => {
      expect(offSiblingGrammar(PHONE)).toEqual([]);
      // Both values are the siblings' own: 0.11em, and no line-height of their own.
      expect(declared(SIBLING, ".backLabel", "letter-spacing")).toEqual(["0.11em"]);
      expect(declared(SIBLING, ".backLabel", "line-height")).toEqual([]);
    });

    it("never truncates the label and never sets it under 11px", () => {
      for (const prop of ["text-overflow", "overflow", "white-space", "max-width"]) {
        expect(cssRules(PHONE).filter((r) => r.selector === ".backLabel" && new RegExp(`(?:^|;|\\s)${prop}\\s*:`).test(r.body)), prop).toEqual([]);
      }
      for (const w of [...UNDER, ...DRAWN]) expect(declaredAt(PHONE, ".backLabel", "font-size", w), `${w}px`).toBe("11px");
    });

    it("negative control: the shipped rule and the first fix both fail the under-402 check", () => {
      expect(offSiblingGrammar(SHIPPED)).toEqual(UNDER.map((w) => `${w}px: 0.14em / 1`));
      expect(offSiblingGrammar(FIRST_FIX)).toEqual(UNDER.map((w) => `${w}px: 0.11em / 1`));
    });
  });

  describe("structured data (item 78)", () => {
    it("emits FAQPage, ClaimReview and Article once for the page, outside both trees", () => {
      for (const type of ["FAQPage", "ClaimReview", "Article"]) expect(count(d, type), type).toBe(1);
      for (const [tree, name] of both()) expect(jsonLd(tree).length, name).toBe(0);
      expect(main.querySelectorAll(":scope > script").length).toBe(3);
    });

    it("negative control: a phone tree that emitted its own FAQPage would count two", () => {
      const doubled = dom(
        `<main><script type="application/ld+json">{"@type":"FAQPage"}</script><div class="screen"><script type="application/ld+json">{"@type":"FAQPage"}</script></div></main>`,
      );
      expect(count(doubled, "FAQPage")).not.toBe(1);
    });

    it("paints every question and answer verbatim in both trees", () => {
      for (const [tree, name] of both()) {
        expect([...tree.querySelectorAll("h3")].map((h) => h.textContent), name).toEqual(questions.map((q) => q.name));
        for (const q of questions) {
          const painted = [...tree.querySelectorAll("p")].filter((p) => p.textContent === q.acceptedAnswer.text);
          expect(painted.length, `${name}: ${q.name}`).toBe(1);
        }
      }
    });
  });

  it("sets the kicker muted in both layouts (item 54)", () => {
    for (const [tree, name] of both()) {
      expect(text(tree.querySelector('[class*="kicker"]')), name).toBe("The February 2026 correction");
    }
    expect(declared(PHONE, ".kicker", "color")).toEqual(["var(--text-muted)"]);
    expect(declared(DESKTOP, ".kicker", "color")).toEqual(["var(--text-muted)"]);
    // Negative control: the shipped desktop rule.
    const shipped = ".kicker { font-family: var(--font-mono), monospace; font-weight: 700; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); }";
    expect(declared(shipped, ".kicker", "color")).not.toEqual(["var(--text-muted)"]);
  });

  describe("the ledger (items 51, 55)", () => {
    const rows = (tree: Element) =>
      [...tree.querySelectorAll("dl > div")].map((r) => ({
        cls: r.className,
        label: r.querySelector("dt")!.firstChild!.textContent,
        op: r.querySelector('dd [aria-hidden="true"]')?.textContent ?? null,
        value: text(r.querySelector("dd")).replace(/^=\s*/, ""),
      }));
    const VALUES = [
      "9,508,991,024",
      "232,346,699",
      "50,077,530",
      "130,244,873",
      "3,075,692",
      "309,438,350",
      "9,199,552,674",
      "9,438,600,171",
      "+239,047,497",
    ];

    it("keeps the nine rows, labels and values verbatim, in both trees", () => {
      for (const [tree, name] of both()) {
        const r = rows(tree);
        expect(r.map((x) => x.value), name).toEqual(VALUES);
        expect(r[0].label, name).toBe("Career Spotify streams, 31 December 2025");
        expect(r[8].label, name).toBe("Actual streams gained in 2026 by then");
      }
    });

    it("groups each remix's before and after, and marks the three results with an aria-hidden =", () => {
      for (const [tree, name] of both()) {
        const r = rows(tree);
        const kind = (x: { cls: string }) => /_before_/.test(x.cls) ? "before" : /_after_/.test(x.cls) ? "after" : /_result_/.test(x.cls) ? "result" : "";
        expect(r.map(kind), name).toEqual(["", "before", "after", "before", "after", "result", "result", "", "result"]);
        expect(r.map((x) => x.op), name).toEqual(["", "", "", "", "", "=", "=", "", "="]);
      }
      for (const css of [PHONE, DESKTOP]) {
        expect(declared(css, ".result", "border-top")).toEqual(["2px solid var(--rule)"]);
        expect(declared(css, ".after", "border-top")).toEqual(["1px dashed var(--line)"]);
      }
      // Desktop: narrowed so each value sits beside its label.
      expect(declared(DESKTOP, ".sums", "max-width")).toEqual(["600px"]);
    });

    it("sets the values in ink display numerals, never gold", () => {
      expect(declared(PHONE, ".sumFigure", "color")).toEqual(["var(--text)"]);
      expect(declared(DESKTOP, ".sumFigure", "color")).toEqual(["var(--text)"]);
      expect(declared(PHONE, ".sumFigure", "font-family")).toEqual(["var(--font-anton), sans-serif"]);
      expect(declared(DESKTOP, ".sumFigure", "font-family")).toEqual(["var(--font-anton), sans-serif"]);
    });

    it("negative control: the shipped ledger value was gold mono, with no = and no groups", () => {
      const shipped = `.sumValue {
  margin: 0;
  font-family: var(--font-mono), monospace;
  font-size: 15px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}`;
      expect(declared(shipped, ".sumValue", "color")).not.toEqual(["var(--text)"]);
      const shippedRow = dom(
        '<dl><div class="_sumRow_x"><dt>Total reallocated to the original recordings<span>not deleted — moved</span></dt><dd>309,438,350</dd></div></dl>',
      ).body;
      expect(rows(shippedRow)[0].op).toBeNull();
    });
  });

  describe("where that leaves him today (item 52)", () => {
    const block = (tree: Element) => [...tree.querySelectorAll("div")].find((el) => text(el.firstElementChild) === LIVE_LABEL);

    it("gives the live career total its own gold block, right above the two paragraphs", () => {
      for (const [tree, name] of both()) {
        const b = block(tree);
        expect(b, name).toBeTruthy();
        expect(text(b!.lastElementChild), name).toBe(spotifyTotalStreamsExact);
        expect(b!.nextElementSibling?.textContent, name).toMatch(/^His career Spotify total now stands at/);
        expect(b!.nextElementSibling?.nextElementSibling?.textContent, name).toMatch(/^That is the number the/);
      }
      expect(declared(PHONE, ".liveValue", "color")).toEqual(["var(--gold)"]);
      expect(declared(DESKTOP, ".liveValue", "color")).toEqual(["var(--gold)"]);
    });

    it("drops the block with the paragraphs when the career total cannot be read", async () => {
      vi.resetModules();
      vi.doMock("../app/data/streamingTotals", async (importOriginal) => ({
        ...(await importOriginal<typeof import("../app/data/streamingTotals")>()),
        spotifyTotalStreamsExact: "not a number",
      }));
      const { renderToStaticMarkup: fresh } = await import("react-dom/server");
      const { default: Page } = await import("../app/analysis/spotify-unmerge/page");
      const t = trees(fresh(<Page />));
      for (const [tree, name] of [
        [t.phone!, "phone"],
        [t.desktop!, "desktop"],
      ] as const) {
        expect(block(tree), name).toBeUndefined();
        expect(text(tree), name).not.toContain("His career Spotify total now stands at");
        // The note about the daily job stays: it is true either way.
        expect(text(tree), name).toContain("The career total is built daily from Spotify's per-track counts");
      }
      vi.doUnmock("../app/data/streamingTotals");
      vi.resetModules();
    });
  });

  it("keeps the three typed figures the owner re-reads, in one place each (item 59)", () => {
    const src = read("app/analysis/spotify-unmerge/page.tsx");
    expect(src).toContain('const VERIFIED_ON = "17 September 2026";');
    expect(src).toContain('const ENJOY_NOW = "52.1 million";');
    expect(src).toContain('const FINDERS_NOW = "3.4 million";');
    for (const [tree, name] of both()) {
      expect(text(tree), name).toContain("As of 17 September 2026 they show roughly 52.1 million and 3.4 million plays");
    }
  });

  it("renders Keep exploring once, outside both trees, with the list this route already had", () => {
    const blocks = [...d.querySelectorAll('nav[aria-label="Explore more pages"]')];
    expect(blocks.length).toBe(1);
    expect(phone!.contains(blocks[0]) || desktop!.contains(blocks[0])).toBe(false);
    expect([...blocks[0].querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual([
      "/analysis",
      "/records/by-the-numbers",
      "/methodology",
    ]);
  });
});
