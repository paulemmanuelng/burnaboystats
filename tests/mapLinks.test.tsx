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
import { tours, festivals, concerts, otherShows } from "../app/data/tours";
import { revenueShows } from "../app/data/tourRevenue";
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

// ── Item 39 ─────────────────────────────────────────────────────────────────
describe("item 39: the Tours lede dates the biggest night from its tour date", () => {
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthOf = (date: string) => {
    const iso = date.match(/^(\d{4})-(\d{2})-\d{2}$/);
    if (iso) return `${MONTHS[Number(iso[2]) - 1]} ${iso[1]}`;
    const [, mon, year] = date.match(/^([A-Z][a-z]{2}) \d{1,2}, (\d{4})$/) ?? [];
    return `${MONTHS.find((m) => m.startsWith(mon))} ${year}`;
  };
  const top = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
  const atVenue = tours.flatMap((t) => t.dates ?? []).filter((d) => d.venue === top.venue);
  const night = atVenue.find((d) => d.date.includes(top.year));

  it("the venue is in tours.ts more than once, so the match needs the year too", () => {
    expect(atVenue.length).toBeGreaterThan(1);
    expect(night, `a ${top.venue} date in ${top.year}`).toBeDefined();
    // Read by venue alone, another night gives another year.
    const other = atVenue.find((d) => d !== night)!;
    expect(monthOf(other.date)).not.toBe(monthOf(night!.date));
  });

  it("the rendered lede names the month and year of that date", () => {
    const lede = clean(desktopOf(toursDoc()).querySelector('[class*="_lede_"]')?.textContent);
    expect(lede).toContain(`and his ${monthOf(night!.date)} ${top.venue} concert (`);
  });

  /** A month and year typed beside the venue in the page source. */
  const typesTheMonth = (src: string) =>
    new RegExp(`his\\s+(?:${MONTHS.join("|")})\\s+\\d{4}\\s+\\{topShow\\.venue\\}`).test(src);

  it("the page source types no month beside the venue", () => {
    expect(typesTheMonth(read("app/records/tours/page.tsx"))).toBe(false);
  });

  it("negative control: the lede line shipped until 30 Sep 2026 typed 'June 2024'", () => {
    const SHIPPED = `the highest-grossing tour by an African artist in history — and his June
                  2024 {topShow.venue} concert ({topShowM(2)} from {topShow.tickets} fans) is`;
    expect(typesTheMonth(SHIPPED)).toBe(true);
  });
});

// ── Items 35 and 68 ─────────────────────────────────────────────────────────
describe("item 35: phone Tours gains 'More from the road', map first", () => {
  const ROAD = ["/records/tours/map", "/records/tours/revenue", "/records/tours/festivals"];
  /** Links on the phone screen to the three pages the group routes to. */
  const roadHrefs = (hrefs: string[]) => hrefs.filter((h) => ROAD.includes(h));
  const phoneOf = (doc: Document) => doc.querySelector('[class*="_screen_"]')!;
  const his = revenueShows.filter((s) => s.artist === "Burna Boy").length;

  it("a nav labelled by its h2, three rows in order, each sub-line from the data", () => {
    const phone = phoneOf(toursDoc());
    const nav = phone.querySelector('nav[aria-labelledby="more-from-the-road"]')!;
    const h2 = phone.querySelector(`#${nav.getAttribute("aria-labelledby")}`)!;
    expect(h2.tagName).toBe("H2");
    expect(clean(h2.textContent)).toBe("More from the road");
    const rows = [...nav.querySelectorAll("a")].map((a) => ({
      href: a.getAttribute("href"),
      title: clean(a.querySelector('[class*="_roadTitle_"]')?.textContent),
      sub: clean(a.querySelector('[class*="_roadSub_"]')?.textContent),
      arrow: a.querySelector(':scope > [aria-hidden="true"]')?.textContent?.trim(),
    }));
    expect(rows).toEqual([
      {
        href: "/records/tours/map",
        title: "Where he's performed",
        sub: `${performedCountries.length} countries documented · ${regionCount} regions`,
        arrow: "→",
      },
      {
        href: "/records/tours/revenue",
        title: "Revenue per show",
        sub: `His ${his} of the ${revenueShows.length} biggest reported single-show grosses by an African artist`,
        arrow: "→",
      },
      {
        href: "/records/tours/festivals",
        title: "Festivals & shows",
        sub: `${appearances} documented appearances · ${festivals.length} headlined`,
        arrow: "→",
      },
    ]);
    // Links, not expanders: no caret in the group.
    expect(nav.textContent).not.toMatch(/[▸▾]/);
  });

  it("sits directly under the last tour row, before the footnote", () => {
    const phone = phoneOf(toursDoc());
    const nav = phone.querySelector('nav[aria-labelledby="more-from-the-road"]')!;
    const lastTour = [...phone.querySelectorAll('[class*="_tour_"]')].at(-1)!;
    const foot = phone.querySelector('[class*="_footNote_"]')!;
    expect(lastTour.nextElementSibling).toBe(nav);
    expect(nav.nextElementSibling).toBe(foot);
  });

  it("the 'Countries' tile stays a figure, not a link", () => {
    const grid = phoneOf(toursDoc()).querySelector('[class*="_statGrid_"]')!;
    expect(clean(grid.textContent)).toContain("Countries");
    expect(grid.querySelectorAll("a")).toHaveLength(0);
  });

  it("the phone screen now links to all three pages", () => {
    const hrefs = [...phoneOf(toursDoc()).querySelectorAll("a")].map((a) => a.getAttribute("href") ?? "");
    expect(roadHrefs(hrefs)).toEqual(ROAD);
  });

  it("negative control: the screen shipped until 30 Sep 2026 linked to none of them", () => {
    // Every href in app/components/MobileTours.tsx as shipped: the back link
    // and the Ticketmaster bar.
    const SHIPPED_HREFS = ["/records", "https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"];
    expect(roadHrefs(SHIPPED_HREFS)).toEqual([]);
  });
});

describe("item 69: the phone Tours footnote stays the build's own", () => {
  // Map Links §1 had added "and Pollstar"; the fix put the artboard back to the
  // footnote as it ships, so the build's line must not move.
  const SHIPPED =
    "Tour grosses come from Billboard Boxscore. The per-date figure is the venue's capacity, not tickets sold — tours.ts records capacity, and only some nights have a Boxscore headcount. A dash means the run has no reported gross, not that it was small. Dates shown are a documented sample, not the full itinerary.";

  it("reads exactly as shipped, with no Pollstar added", () => {
    const foot = clean(toursDoc().querySelector('[class*="_screen_"] [class*="_footNote_"]')?.textContent);
    expect(foot).toBe(SHIPPED);
    expect(foot).not.toContain("Pollstar");
  });

  it("negative control: the footnote Map Links §1 first drew would fail it", () => {
    const DRAWN =
      "Box-office figures are reported by Billboard Boxscore and Pollstar. The per-date figure inside each tour is the venue's capacity, not tickets sold. A dash means the run has no reported gross, not that it was small.";
    expect(DRAWN).not.toBe(SHIPPED);
    expect(DRAWN).toContain("Pollstar");
  });
});

describe("item 68: the rows are 64px and press to --bg-raised", () => {
  const pressesToRaised = (css: string) => declared(ruleFor(css, ".roadRow:active"), "background") === "var(--bg-raised)";

  it("in mobileTours.module.css", () => {
    const css = read("app/components/mobileTours.module.css");
    expect(pressesToRaised(css)).toBe(true);
    expect(declared(ruleFor(css, ".roadRow"), "min-height")).toBe("64px");
    // Geist, not mono, for the sub-line: it runs to a sentence.
    expect(declared(ruleFor(css, ".roadSub"), "font-family")).toBeNull();
  });

  it("negative control: Deep Pages 12's pressed row as first drawn (raw #24242a)", () => {
    // style-hover="background:#24242a", as a rule.
    expect(pressesToRaised(".roadRow:active { background: #24242a; }")).toBe(false);
  });
});

