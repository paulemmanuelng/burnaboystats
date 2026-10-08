import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent, waitFor } from "@testing-library/react";

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

import PressPage from "../app/press/page";
import MobileTabBar from "../app/components/MobileTabBar";
import { BACK_BAR_ROUTES, ACTION_BAR_ROUTES, hasOwnMobileChrome, hasOwnActionBar } from "../app/lib/mobileScreens";
import { totalAwards } from "../app/data/certifications";
import { spotifyTotalStreams } from "../app/data/streamingTotals";
import { DATASET_CITATION } from "../app/lib/dataDownloads";
import { dom, text, trees, declared, declaredAt, cssRules } from "./fixtures/phoneTrees";
import phoneStyles from "../app/components/mobilePress.module.css";

/**
 * /press gets a phone screen.
 *
 * Design response of 30 Sep 2026, §11 and items 42–44, 48–50, 53, 57–58,
 * 62, 71–72, 75 (designs/mobile/CPC Phone.dc.html, the copy-states board in
 * Curator Press Correction - Mobile.dc.html, and the desktop crops in
 * designs/desktop/Curator Press Correction.dc.html). The downloads section
 * is held in both trees by tests/dataDownloads.test.tsx (item 62). Every
 * negative control is built from what the page shipped with before the split.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const PHONE = read("app/components/mobilePress.module.css");
const DESKTOP = read("app/press/press.module.css");

// The site's one credit line since 8 Oct 2026 (lib/credit.ts, C-17).
const CITATION = "Data from Burna Boy Stats (burnaboystats.com)";
const CITATION_LINKED = 'Data from <a href="https://burnaboystats.com">Burna Boy Stats</a> (burnaboystats.com)';

describe("/press routing (items 42–44, 58)", () => {
  it("has its own phone chrome and keeps the five-tab bar, with no tab lit", () => {
    expect(BACK_BAR_ROUTES.has("/press")).toBe(true);
    expect(hasOwnMobileChrome("/press")).toBe(true);
    expect(ACTION_BAR_ROUTES.has("/press")).toBe(false);
    expect(hasOwnActionBar("/press")).toBe(false);
    nav.pathname = "/press";
    const bar = render(<MobileTabBar />).container.querySelector("nav");
    expect(bar?.querySelectorAll("a").length).toBe(5);
    expect(bar?.querySelector('[aria-current="page"]')).toBeNull();
    nav.pathname = "/";
  });

  it("negative control: the shipped back-bar list gave /press no chrome", () => {
    const shipped = new Set([...BACK_BAR_ROUTES].filter((r) => r !== "/press"));
    expect(shipped.has("/press")).toBe(false);
  });
});

describe("/press", () => {
  const html = renderToStaticMarkup(<PressPage />);
  const { d, desktop, phone } = trees(html);
  const both = () =>
    [
      [phone!, "phone"],
      [desktop!, "desktop"],
    ] as const;

  it("renders the phone screen first, then the desktop column, one h1 in each", () => {
    expect(phone, "no phone screen").toBeTruthy();
    expect(desktop, "no desktop wrapper").toBeTruthy();
    expect(phone!.compareDocumentPosition(desktop!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(phone!.querySelectorAll("h1").length).toBe(1);
    expect(desktop!.querySelectorAll("h1").length).toBe(1);
    expect(text(phone!.querySelector("h1 span"))).toBe("Data Kit");
    const crumbs = [...d.querySelectorAll('nav[aria-label="Breadcrumb"]')];
    expect(crumbs.length).toBe(1);
    expect(desktop!.contains(crumbs[0])).toBe(true);
  });

  it("opens on the back bar: home, 'Press & data kit', a gold badge counting the tiles", () => {
    const back = phone!.querySelector('a[aria-label="Back"]');
    expect(back?.getAttribute("href")).toBe("/");
    const bar = back!.parentElement!;
    const tiles = phone!.querySelectorAll('section[aria-labelledby="m-figures"] a').length;
    expect(tiles).toBe(6);
    expect([...bar.children].map((c) => text(c)).filter(Boolean)).toEqual(["Press & data kit", `${tiles} figures`]);
    expect(declared(PHONE, ".badge", "color")).toEqual(["var(--gold)"]);
  });

  describe("the back-bar label: one line from 360 to 401, two readable lines below (items 42/43, review of 30 Sep)", () => {
    // Measured in Chrome beside today's "6 figures" badge: at the drawn 0.14em
    // the label broke onto two lines set solid (line-height 1) at 360. At the
    // siblings' 0.11em it is one line from 360 to 401; narrower, it wraps — at
    // the leading the sibling back bars inherit, not 1. The same rule as the
    // Spotify correction's bar (tests/unmergePhone.test.tsx).
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
    // The rule the phone screen shipped with (fdc23e77): the artboard's 0.14em,
    // set solid, at every width.
    const SHIPPED = `.backLabel {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}`;

    it("keeps the drawn 0.14em, set solid, at 402 and wider", () => {
      for (const w of DRAWN) {
        expect(declaredAt(PHONE, ".backLabel", "letter-spacing", w), `${w}px`).toBe("0.14em");
        expect(declaredAt(PHONE, ".backLabel", "line-height", w), `${w}px`).toBe("1");
      }
    });

    it("under 402 takes the sibling back bars' 0.11em and the leading they inherit", () => {
      expect(offSiblingGrammar(PHONE)).toEqual([]);
      expect(declared(SIBLING, ".backLabel", "letter-spacing")).toEqual(["0.11em"]);
      expect(declared(SIBLING, ".backLabel", "line-height")).toEqual([]);
    });

    it("never truncates the label and never sets it under 11px", () => {
      for (const prop of ["text-overflow", "overflow", "white-space", "max-width"]) {
        expect(cssRules(PHONE).filter((r) => r.selector === ".backLabel" && new RegExp(`(?:^|;|\\s)${prop}\\s*:`).test(r.body)), prop).toEqual([]);
      }
      for (const w of [...UNDER, ...DRAWN]) expect(declaredAt(PHONE, ".backLabel", "font-size", w), `${w}px`).toBe("11px");
    });

    it("negative control: the shipped rule fails the under-402 check at every width", () => {
      expect(offSiblingGrammar(SHIPPED)).toEqual(UNDER.map((w) => `${w}px: 0.14em / 1`));
    });
  });

  describe("the repository link breaks rather than pushing the page sideways (artboard; measured at 320)", () => {
    // Unbroken, "github.com/paulemmanuelng/burnaboystats" is 326px wide; at 320
    // the column is 284, and the page scrolled 24px sideways (1 Oct 2026). The
    // artboard draws overflow-wrap:anywhere on that link.
    const REPO_HREF = "https://github.com/paulemmanuelng/burnaboystats";
    const breaks = (css: string) => declared(css, ".link", "overflow-wrap");

    it("sets overflow-wrap:anywhere on the phone link class, which the repository link carries", () => {
      expect(breaks(PHONE)).toEqual(["anywhere"]);
      const repo = phone!.querySelector(`a[href="${REPO_HREF}"]`);
      expect(text(repo)).toBe("github.com/paulemmanuelng/burnaboystats");
      expect(repo!.className.split(" ")).toContain(phoneStyles.link);
    });

    it("negative control: the shipped phone link rule set no break", () => {
      expect(breaks(".link { color: var(--gold); }")).toEqual([]);
    });
  });

  it("sets the phone lede on --type-lede (item 71)", () => {
    expect(declared(PHONE, ".lede", "font-size")).toEqual(["var(--type-lede)"]);
  });

  describe("the headline figures (items 48, 53)", () => {
    const tilesIn = (tree: Element) =>
      [...tree.querySelectorAll('section[aria-labelledby$="figures"] a')] as HTMLAnchorElement[];

    it("gives every tile the link cue: an arrow at its foot, hidden from screen readers", () => {
      for (const [tree, name] of both()) {
        const tiles = tilesIn(tree);
        expect(tiles.map((a) => a.getAttribute("href")), name).toEqual([
          "/certifications",
          "/records/charts",
          "/records/charts",
          "/records/awards",
          "/records/by-the-numbers",
          "/records/tours/map",
        ]);
        for (const a of tiles) {
          const arrow = a.querySelector('[aria-hidden="true"]');
          expect(arrow?.textContent, name).toBe("→");
          expect(a.lastElementChild?.contains(arrow!), name).toBe(true);
        }
        expect(text(tiles[0]).startsWith(String(totalAwards())), name).toBe(true);
      }
    });

    it("sets five figures at rest in ink, and only the career total in gold", () => {
      for (const [tree, name] of both()) {
        const live = tilesIn(tree).filter((a) => /Live/.test(a.firstElementChild!.className));
        expect(live.map((a) => text(a.firstElementChild)), name).toEqual([spotifyTotalStreams]);
      }
      expect(declared(PHONE, ".tileValue", "color")).toEqual(["var(--text)"]);
      expect(declared(PHONE, ".tileLive", "color")).toEqual(["var(--gold)"]);
      expect(declared(DESKTOP, ".figureValue", "color")).toEqual(["var(--text)"]);
      expect(declared(DESKTOP, ".figureLive", "color")).toEqual(["var(--gold)"]);
    });

    it("presses to --bg-raised: pressed on the phone, hover on desktop, no glow", () => {
      expect(declared(PHONE, ".tile:active", "background")).toEqual(["var(--bg-raised)"]);
      expect(declared(DESKTOP, ".figure:hover", "background")).toEqual(["var(--bg-raised)"]);
      expect(PHONE + DESKTOP).not.toMatch(/box-shadow/);
    });

    it("negative control: the shipped tiles were all gold, with no arrow and no press state", () => {
      const shippedCss = `.figure { background: var(--bg-soft); padding: 20px 22px; }
.figureValue {
  font-family: var(--font-anton), sans-serif;
  font-size: 34px;
  line-height: 1;
  color: var(--gold);
}`;
      expect(declared(shippedCss, ".figureValue", "color")).not.toEqual(["var(--text)"]);
      expect(declared(shippedCss, ".figure:hover", "background")).toEqual([]);
      const shippedTile = dom(
        `<section aria-labelledby="figures"><a href="/certifications"><div>${totalAwards()}</div><div>Certifications</div><div>26 countries</div></a></section>`,
      ).body;
      expect(tilesIn(shippedTile)[0].querySelector('[aria-hidden="true"]')).toBeNull();
    });
  });

  describe("the copy boxes (items 49, 75)", () => {
    const boxes = (tree: Element) =>
      [...tree.querySelectorAll("code")]
        .map((c) => c.parentElement!)
        .filter((box) => box.querySelector("button"))
        .map((box) => ({
          code: box.querySelector("code")!.textContent,
          label: text(box.querySelector("button")!.previousElementSibling),
          button: text(box.querySelector("button")),
        }));
    const WANT = [
      { code: CITATION, label: "Plain text", button: "Copy" },
      { code: CITATION_LINKED, label: "HTML, with the link", button: "Copy HTML" },
      { code: DATASET_CITATION, label: "Dataset citation", button: "Copy" },
    ];

    it("keeps all three, verbatim, each with a label and its button in the box's footer", () => {
      for (const [tree, name] of both()) expect(boxes(tree), name).toEqual(WANT);
    });

    // The pill is the site's one Copy button since 8 Oct 2026 (C-17): it
    // draws itself in copyButton.module.css, the same on /api and /embed.
    it("sets the button as a 104 × 44 pill on the phone, a 40px one on desktop", () => {
      const COPY = read("app/components/copyButton.module.css");
      expect(declared(COPY, ".copy", "min-width")).toEqual(["104px"]);
      expect(declared(COPY, ".copy", "min-height")).toEqual(["40px", "44px"]);
      expect(COPY).toMatch(/@media \(max-width: 900px\) \{\s*\.copy \{ min-height: 44px; \}/);
      expect(declared(COPY, ".copy:active", "background")).toEqual(["var(--bg-raised)"]);
      // The press modules keep only the download pill.
      expect(declared(PHONE, ".dlPill", "min-height")).toEqual(["44px"]);
      expect(declared(DESKTOP, ".dlPill", "min-height")).toEqual(["40px"]);
    });

    it("still behaves as it ships: 'Copied ✓' after a press, in the new box", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
      const { container } = render(<PressPage />);
      const screen = container.querySelector('[class*="screen"]')!;
      const button = [...screen.querySelectorAll("button")].find((b) => text(b) === "Copy HTML")!;
      fireEvent.click(button);
      await waitFor(() => expect(text(button)).toBe("Copied ✓"));
      expect(writeText).toHaveBeenCalledWith(CITATION_LINKED);
      delete (navigator as { clipboard?: unknown }).clipboard;
    });

    it("negative control: the shipped row had no label beside its button", () => {
      const shipped = dom(
        `<div><code>${CITATION.replace(/</g, "&lt;")}</code><button><span aria-live="polite">Copy</span></button></div>`,
      ).body;
      expect(boxes(shipped)).not.toEqual(WANT.slice(0, 1));
    });
  });

  it("renders Keep exploring once, outside both trees, with its own list", () => {
    const blocks = [...d.querySelectorAll('nav[aria-label="Explore more pages"]')];
    expect(blocks.length).toBe(1);
    expect(phone!.contains(blocks[0]) || desktop!.contains(blocks[0])).toBe(false);
    expect([...blocks[0].querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual([
      "/share",
      "/api",
      "/methodology",
    ]);
  });

  it("carries every paragraph in both trees", () => {
    // Separate designs, the same words: the prose is written once in the page.
    for (const phrase of [
      "Rendered live from the same dataset as the rest of the site",
      "In an article, a tweet or a video description — one line does it:",
      "free for articles, visualisations, bots and research",
      // Four since tours.csv joined (T-11, 8 Oct 2026); the word is derived.
      "The dataset as four spreadsheets",
      "custom cards for fan pages are usually a same-day turnaround",
      "copy one snippet of HTML and paste it in",
      "The verification standard is public",
    ]) {
      for (const [tree, name] of both()) expect(text(tree), `${name}: ${phrase}`).toContain(phrase);
    }
  });
});
