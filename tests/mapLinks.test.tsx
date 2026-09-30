import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import Link from "next/link";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../app/records/tours/page";
import { festivals, concerts, otherShows } from "../app/data/tours";
import { performedCountries } from "../app/data/performedCountries";

/**
 * Job 2 of the 30 Sep 2026 design handoff: getting to the map.
 * (docs/design/tour-map-and-phone-screens, change-list items 33–41 and 65–69.)
 *
 * Each changed line is held to what the change list approved, and where a
 * shipped string or rule changed, the line the site shipped until then is kept
 * verbatim as the negative control: the same check, run on it, fails.
 */

const ROOT = join(__dirname, "..");
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

/** The declarations of the rule whose selector list names `selector` exactly. */
function ruleFor(css: string, selector: string): string | null {
  for (const m of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].split(",").map((s) => s.trim()).includes(selector)) return m[2];
  }
  return null;
}
const declared = (block: string | null, prop: string) =>
  block?.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim() ?? null;

const regionCount = new Set(performedCountries.map((c) => c.region)).size;
const appearances = festivals.length + concerts.length + otherShows.length;

const toursDoc = () => parse(renderToStaticMarkup(ToursPage()));
const desktopOf = (doc: Document) => doc.querySelector('[class*="_desktopOnly_"]')!;

// ── Item 33 ─────────────────────────────────────────────────────────────────
describe("item 33: the desktop tickets panel holds only its two outbound links", () => {
  /** Links in the panel that stay on the site. The panel is about tickets. */
  const internalLinksIn = (panel: Element) =>
    [...panel.querySelectorAll("a")]
      .map((a) => a.getAttribute("href") ?? "")
      .filter((href) => !/^https?:\/\//.test(href));

  it("Ticketmaster and the official tour site, and nothing that stays on the site", () => {
    const panel = desktopOf(toursDoc()).querySelector('[class*="_ticketPanel_"]')!;
    expect(clean(panel.textContent)).toContain("Upcoming dates & tickets");
    expect([...panel.querySelectorAll("a")].map((a) => clean(a.textContent))).toEqual([
      "Tickets · Ticketmaster ↗",
      "Official tour site ↗",
    ]);
    expect(internalLinksIn(panel)).toEqual([]);
  });

  it("negative control: the panel as shipped until 30 Sep 2026 held the map as a third ticket link", () => {
    // The shipped JSX, verbatim.
    const shipped = parse(
      renderToStaticMarkup(
        <div className="ticketPanel">
          <div className="kicker">Upcoming dates &amp; tickets</div>
          <div className="ticketBtns">
            <a
              className="btn btnPrimary"
              href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets · Ticketmaster ↗
            </a>
            <a
              className="btn btnSecondary"
              href="https://www.onaspaceship.com/tour"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official tour site ↗
            </a>
            <Link href="/records/tours/map" className="btn btnSecondary">
              Where he&apos;s performed ↗
            </Link>
          </div>
        </div>,
      ),
    ).body;
    expect(internalLinksIn(shipped)).toEqual(["/records/tours/map"]);
  });
});

// ── Items 36 and 38 ─────────────────────────────────────────────────────────
describe("item 36: the desktop cards row, map first, then Festivals", () => {
  const cards = () =>
    [...desktopOf(toursDoc()).querySelectorAll('[class*="_cardsRow_"] > a')].map((a) => ({
      href: a.getAttribute("href"),
      title: clean(a.querySelector('[class*="_cardTitle_"]')?.textContent),
      desc: clean(a.querySelector('[class*="_cardDesc_"]')?.textContent),
      sub: clean(a.querySelector('[class*="_cardSub_"]')?.textContent),
      arrow: a.querySelector(':scope > [aria-hidden="true"]')?.textContent?.trim(),
    }));

  it("two cards that are themselves the link, each ending in →, every figure from the data", () => {
    expect(cards()).toEqual([
      {
        href: "/records/tours/map",
        title: "Where he's performed",
        desc: "The countries he has taken to the stage, on one map",
        sub: `${performedCountries.length} countries documented · ${regionCount} regions`,
        arrow: "→",
      },
      {
        href: "/records/tours/festivals",
        title: "Festivals & shows",
        desc: "The festivals and big stages he's played: the headline sets and beyond",
        sub: `${appearances} documented appearances`,
        arrow: "→",
      },
    ]);
  });

  it("no figure in the cards is typed into the page", () => {
    const src = read("app/records/tours/page.tsx");
    expect(src).not.toMatch(/\b57 countries documented/);
    expect(src).not.toMatch(/\b59 documented appearances/);
    expect(src).toContain("{playedCount} countries documented · {regionCount} regions");
    expect(src).toContain("{appearanceCount} documented appearances");
  });

  /** The owner's hover rule: a card presses to --bg-raised, with no gold wash. */
  const pressesToRaised = (css: string, selector: string) => {
    const bg = declared(ruleFor(css, selector), "background");
    return bg === "var(--bg-raised)";
  };

  it("both cards hover to --bg-raised", () => {
    expect(pressesToRaised(read("app/records/tours/tours.module.css"), ".jumpCard:hover")).toBe(true);
  });

  it("negative control: the hover rule as shipped until 30 Sep 2026 was a gold wash", () => {
    const SHIPPED =
      ".jumpCard:hover,\n.jumpCardAlt:hover { border-color: var(--gold); background: color-mix(in srgb, var(--gold-wash-base) calc(5% * var(--wash-strength)), transparent); }";
    expect(pressesToRaised(SHIPPED, ".jumpCard:hover")).toBe(false);
  });

  it("the 1024 check: the cards keep a 24px side pad below 1240", () => {
    const css = read("app/records/tours/tours.module.css");
    const narrow = css.slice(css.indexOf("@media (max-width: 1239px)"));
    expect(narrow).toMatch(/\.jumpCard\s*\{\s*padding:\s*22px 24px;\s*\}/);
    expect(declared(ruleFor(css, ".cardsRow"), "grid-template-columns")).toBe("repeat(2, minmax(0, 1fr))");
  });
});

describe("item 38: the Festivals card drops its completeness claim", () => {
  const claimsEvery = (s: string) => /\bevery\b/i.test(s);

  it("reads 'The festivals and big stages he's played', not 'Every festival'", () => {
    const card = desktopOf(toursDoc()).querySelector('[class*="_cardsRow_"] a[href="/records/tours/festivals"]');
    const desc = clean(card?.querySelector('[class*="_cardDesc_"]')?.textContent);
    expect(desc).toBe("The festivals and big stages he's played: the headline sets and beyond");
    expect(claimsEvery(desc)).toBe(false);
  });

  it("negative control: the description shipped until 30 Sep 2026 claimed every festival", () => {
    const SHIPPED = "Every festival & big stage he's played — the headline sets and beyond";
    expect(claimsEvery(SHIPPED)).toBe(true);
  });
});
