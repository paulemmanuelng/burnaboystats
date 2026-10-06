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
import FestivalsPage from "../app/records/tours/festivals/page";
import GlobeTeaser from "../app/components/GlobeTeaser";
import { tours, festivals, concerts, otherShows } from "../app/data/tours";
import { revenueShows } from "../app/data/tourRevenue";
import { performedCountries } from "../app/data/performedCountries";
import { numberWord } from "../app/lib/homeData";

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
    const css = read("app/records/tours/tours.module.css");
    expect(pressesToRaised(css, ".jumpCard:hover")).toBe(true);
    // The second card (the Festivals card under the pair) kept the gold wash
    // until item 37 (approved 4 Oct 2026).
    expect(pressesToRaised(css, ".jumpCardAlt:hover")).toBe(true);
    expect(declared(ruleFor(css, ".jumpCardAlt:hover"), "border-color")).toBe("var(--gold)");
  });

  it("negative control: .jumpCardAlt:hover as shipped until item 37 was a gold wash", () => {
    const SHIPPED =
      ".jumpCardAlt:hover { border-color: var(--gold); background: color-mix(in srgb, var(--gold-wash-base) calc(5% * var(--wash-strength)), transparent); }";
    expect(pressesToRaised(SHIPPED, ".jumpCardAlt:hover")).toBe(false);
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
        title: "Highest-grossing shows",
        sub: `His ${his} of the ${revenueShows.length} verified single-show grosses by an African artist`,
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
  // footnote as it ships, so the build's line must not move — except its first
  // sentence, which named Billboard Boxscore alone while the desktop page and
  // the box-office board credit TouringData (debug pass 4 Oct 2026, D-03). That
  // sentence is now the board's own credit, from app/lib/revenueSource.ts; the
  // rest is the build's line, word for word.
  const SHIPPED =
    "Tour grosses come from Billboard Boxscore. The per-date figure is the venue's capacity, not tickets sold — tours.ts records capacity, and only some nights have a Boxscore headcount. A dash means the run has no reported gross, not that it was small. Dates shown are a documented sample, not the full itinerary.";
  // The footnote as it shipped on 5 Oct 2026, after the 4 Oct credit fix.
  const SHIPPED_1005 =
    "Tour grosses come from TouringData, which republishes Billboard Boxscore and Pollstar reports. The per-date figure is the venue's capacity, not tickets sold — tours.ts records capacity, and only some nights have a Boxscore headcount. A dash means the run has no reported gross, not that it was small. Dates shown are a documented sample, not the full itinerary.";
  // The debug pass of 5 Oct 2026 rewrote the rest: the handoff lists the file
  // name in reader copy as a code fix still owed (README §10), and the dash
  // sits beside No Sign of Weakness and Space Drift, whose single nights ARE on
  // the board — so it means no tour total, not "no reported gross".
  const NOW =
    "Tour grosses come from TouringData, which republishes Billboard Boxscore and Pollstar reports. The per-date figure is the venue's capacity, not tickets sold; only some nights have a reported headcount. A dash means no tour total has been reported, not that the run was small; single nights from a run can still be on the Highest-grossing shows board. Some runs list only their confirmed dates.";

  it("reads as the build's own, its source sentence the board's credit", () => {
    const foot = clean(toursDoc().querySelector('[class*="_screen_"] [class*="_footNote_"]')?.textContent);
    expect(foot).toBe(NOW);
    // The first sentence is still the board's own credit.
    expect(foot.slice(0, foot.indexOf(". ") + 1)).toBe(SHIPPED_1005.slice(0, SHIPPED_1005.indexOf(". ") + 1));
    // No reader copy names a data file, or says a dash means no gross at all.
    expect(foot).not.toMatch(/\.ts\b|no reported gross/);
    // Negative controls: the Boxscore-only line that shipped until 5 Oct 2026,
    // and the line that followed it the same day.
    expect(foot).not.toBe(SHIPPED);
    expect(SHIPPED_1005).toMatch(/\.ts\b|no reported gross/);
  });

  it("the dash beside a run with no tour total says so, on both layouts", () => {
    // Space Drift and No Sign of Weakness have reported nights on the board;
    // their tour total is what is missing. The screen-reader text said "Not
    // reported" until 5 Oct 2026.
    const html = renderToStaticMarkup(ToursPage());
    const labels = [...html.matchAll(/<span class="visuallyHidden">([^<]*)<\/span>/g)].map((m) => m[1]);
    const noTotal = tours.filter((t) => !t.gross).length;
    expect(noTotal).toBeGreaterThan(0);
    // Every gross-less run, once in the desktop list and once on the phone.
    expect(labels.filter((l) => l === "No tour total reported").length).toBe(2 * noTotal);
  });

  it("negative control: the footnote Map Links §1 first drew would fail it", () => {
    const DRAWN =
      "Box-office figures are reported by Billboard Boxscore and Pollstar. The per-date figure inside each tour is the venue's capacity, not tickets sold. A dash means the run has no reported gross, not that it was small.";
    expect(DRAWN).not.toBe(SHIPPED);
    expect(DRAWN).not.toBe(NOW);
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

// ── Festivals: items 37, 40, 65, 66, 67 ─────────────────────────────────────
const festDoc = () => parse(renderToStaticMarkup(FestivalsPage()));
const festPhone = (doc: Document) => doc.querySelector('[class*="_screen_"]')!;
const MAP = "/records/tours/map";
const mapLinksIn = (root: Element) => [...root.querySelectorAll(`a[href="${MAP}"]`)];

describe("item 37: Festivals links to the map near the top, on both layouts", () => {
  it("desktop: an outlined pill in the hero, clear of the count strip", () => {
    const desk = desktopOf(festDoc());
    const hero = desk.querySelector('[class*="_heroRow_"]')!;
    expect(mapLinksIn(hero).map((a) => clean(a.textContent))).toEqual(["Where he's performed ↗"]);
    // The strip's cells stay anchors to the page's own sections.
    const strip = [...desk.querySelectorAll('[class*="_countGrid_"] a')].map((a) => a.getAttribute("href"));
    expect(strip).toEqual(["#headlined", "#concerts", "#others"]);
  });

  it("phone: a pill between the 2 × 2 grid and the first section", () => {
    const phone = festPhone(festDoc());
    const grid = phone.querySelector('[class*="_statGrid_"]')!;
    const wrap = grid.nextElementSibling!;
    expect(mapLinksIn(wrap)).toHaveLength(1);
    const link = mapLinksIn(wrap)[0];
    // The name a screen reader hears, and the arrow drawn beside it.
    const named = link.cloneNode(true) as Element;
    named.querySelectorAll('[aria-hidden="true"]').forEach((e) => e.remove());
    expect(clean(named.textContent)).toBe("Where he's performed");
    expect(link.querySelector('[aria-hidden="true"]')?.textContent?.trim()).toBe("↗");
    // Then the first section, whichever is open.
    expect(wrap.nextElementSibling?.querySelector("button[aria-expanded]")).not.toBeNull();
  });

  it("negative control: the desktop hero and phone top as shipped until 30 Sep 2026 had no map link", () => {
    // The shipped hero JSX, verbatim, with the count as rendered.
    const hero = parse(
      renderToStaticMarkup(
        <div className="wide heroPad">
          <div className="eyebrow">
            <span className="eyebrowRule" aria-hidden="true" />
            Big stages
          </div>
          <h1 className="h1">
            Festivals <span className="inkText">&amp; Shows</span>
          </h1>
          <p className="lede">
            The festivals Burna Boy has headlined — and the other big stages he&apos;s
            played. {appearances} appearances across three categories.
          </p>
        </div>,
      ),
    ).body;
    expect(mapLinksIn(hero)).toHaveLength(0);
    // Every href in app/components/MobileFestivals.tsx as shipped: the back link.
    const SHIPPED_PHONE_HREFS = ["/records/tours"];
    expect(SHIPPED_PHONE_HREFS.filter((h) => h === MAP)).toEqual([]);
  });

  /** Item 37's one style: 11px, a --btn-edge outline, no gold wash. */
  const oneStyle = (rule: string | null) =>
    declared(rule, "font-size") === "11px" &&
    declared(rule, "border") === "1px solid var(--btn-edge)" &&
    !/gold-wash|rgba\(255,\s*182,\s*39/.test(rule ?? "");

  it("both files draw the pill in that style; hover and press go to --bg-raised", () => {
    const desk = read("app/records/tours/festivals/festivals.module.css");
    const phone = read("app/components/mobileFestivals.module.css");
    expect(oneStyle(ruleFor(desk, ".mapLink"))).toBe(true);
    expect(oneStyle(ruleFor(phone, ".mapLink"))).toBe(true);
    expect(declared(ruleFor(desk, ".mapLink:hover"), "background")).toBe("var(--bg-raised)");
    expect(declared(ruleFor(phone, ".mapLink:active"), "background")).toBe("var(--bg-raised)");
    expect(declared(ruleFor(phone, ".mapLink"), "min-height")).toBe("48px");
    expect(declared(ruleFor(desk, ".mapLink"), "min-height")).toBe("44px");
  });

  it("negative control: the pills as first drawn in the two artboards", () => {
    // Records - Festivals.dc.html: 11.5px, a --color-divider edge, a gold-wash hover.
    const DESKTOP_FIRST =
      ".mapLink { font-size:11.5px; border:1px solid var(--color-divider); } .mapLink:hover { border-color:var(--color-accent); background:rgba(255,182,39,0.05) }";
    expect(oneStyle(ruleFor(DESKTOP_FIRST, ".mapLink"))).toBe(false);
    // Deep Pages 13: a --line edge, pressed to a raw #24242a fallback.
    const PHONE_FIRST = ".mapLink { font-size:11px; border:1px solid var(--line); } .mapLink:active { background:var(--bg-raised, #24242a) }";
    expect(oneStyle(ruleFor(PHONE_FIRST, ".mapLink"))).toBe(false);
    expect(declared(ruleFor(PHONE_FIRST, ".mapLink:active"), "background")).not.toBe("var(--bg-raised)");
  });
});

describe("item 40: every Festivals count is read from the lists, and the strip agrees with the headings", () => {
  const lists = { headlined: festivals.length, concerts: concerts.length, others: otherShows.length };
  /** Each strip cell's count equals the count in its own section heading. */
  const stripAgrees = (strip: string[], headings: string[]) =>
    strip.length === headings.length && strip.every((v, i) => headings[i].startsWith(`${v} `));

  it("desktop: strip, section headings and the data", () => {
    const desk = desktopOf(festDoc());
    const strip = [...desk.querySelectorAll('[class*="_countValue_"]')].map((e) => clean(e.textContent));
    const headings = [...desk.querySelectorAll('[class*="_groupCount_"]')].map((e) => clean(e.textContent));
    expect(strip).toEqual([lists.headlined, lists.concerts, lists.others].map(String));
    expect(stripAgrees(strip, headings)).toBe(true);
  });

  it("phone: the badge, the grid and the section counts", () => {
    const phone = festPhone(festDoc());
    expect(clean(phone.querySelector('[class*="_badge_"]')?.textContent)).toBe(String(appearances));
    const grid = [...phone.querySelectorAll('[class*="_statCell_"]')].map((c) => clean(c.textContent));
    const afro = festivals.filter((f) => f.name === "Afro Nation").length;
    expect(grid).toEqual([`${lists.headlined}Headlined`, `${afro}Afro Nation`, `${lists.concerts}Solo shows`, `${appearances}Total`]);
    const sections = [...phone.querySelectorAll('button[aria-expanded] [class*="_count_"]')].map((e) => clean(e.textContent));
    expect(sections).toEqual([lists.headlined, lists.concerts, lists.others].map((n) => `(${n})`));
  });

  it("negative control: the desktop artboard's strip and heading could disagree (32 against '31 sets')", () => {
    expect(stripAgrees(["32"], ["31 sets"])).toBe(false);
  });

  it("no count is typed into either file", () => {
    // Comments may name the old values; the code may not.
    const code = (f: string) => read(f).replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    for (const f of ["app/records/tours/festivals/page.tsx", "app/components/MobileFestivals.tsx"]) {
      expect(code(f)).not.toMatch(/\b(?:57|58|59|30|32|14|13)\b/);
    }
  });
});

describe("item 65: the desktop lede says 'documented appearances'", () => {
  const saysDocumented = (lede: string) => new RegExp(`\\b${appearances} documented appearances across three categories\\.`).test(lede);

  it("with the count and the number of categories from the page's own lists", () => {
    const lede = clean(desktopOf(festDoc()).querySelector('[class*="_lede_"]')?.textContent);
    expect(saysDocumented(lede)).toBe(true);
  });

  it("negative control: the lede as shipped until 30 Sep 2026", () => {
    const SHIPPED = `The festivals Burna Boy has headlined — and the other big stages he's played. ${appearances} appearances across three categories.`;
    expect(saysDocumented(SHIPPED)).toBe(false);
  });
});

describe("items 66 and 67: the phone grid in ink, labels at the 11px floor, Afro Nation a slot", () => {
  const css = read("app/components/mobileFestivals.module.css");
  const inInk = (rule: string | null) => declared(rule, "color") === "var(--text)";
  const px = (rule: string | null) => Number.parseFloat(declared(rule, "font-size") ?? "0");

  it("the four values are ink, not gold", () => {
    expect(inInk(ruleFor(css, ".statValue"))).toBe(true);
  });

  it("negative control: the value rule as shipped until 30 Sep 2026 was gold", () => {
    const SHIPPED = `.statValue {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 0.9;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}`;
    expect(inInk(ruleFor(SHIPPED, ".statValue"))).toBe(false);
  });

  it("the badge and the grid labels are at least 11px; the artboard's first 10px was not", () => {
    expect(px(ruleFor(css, ".badge"))).toBeGreaterThanOrEqual(11);
    expect(px(ruleFor(css, ".statLabel"))).toBeGreaterThanOrEqual(11);
    expect(px(".badge { font-size: 10px; }")).toBeLessThan(11);
  });

  it("the lede's Afro Nation count is read from the list and spelled out", () => {
    const afro = festivals.filter((f) => f.name === "Afro Nation").length;
    const lede = clean(festPhone(festDoc()).querySelector('[class*="_lede_"]')?.textContent);
    expect(lede).toContain(`${festivals.length} festivals headlined, including ${numberWord(afro).toLowerCase()} Afro Nation editions.`);
  });
});

// ── Item 41 ─────────────────────────────────────────────────────────────────
describe("item 41: the home map teaser drops the typed 'Oceania added Oct 2025'", () => {
  /** A line dating when a region was added. The data holds no such date. */
  const datesAnAddition = (text: string) => /\badded\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}(?!\d)/i.test(text);
  const teaser = () => parse(renderToStaticMarkup(GlobeTeaser())).body;

  it("the foot holds only 'Open the map ↗', and nothing dates an addition", () => {
    const t = teaser();
    expect(clean(t.querySelector('[class*="_foot_"]')?.textContent)).toBe("Open the map ↗");
    expect(datesAnAddition(clean(t.textContent))).toBe(false);
  });

  it("negative control: the foot as shipped until 30 Sep 2026", () => {
    // The shipped JSX, verbatim.
    const shipped = parse(
      renderToStaticMarkup(
        <div className="foot">
          <span className="dot" aria-hidden="true" />
          <span className="note">Oceania added Oct 2025</span>
          <span className="cta">Open the map ↗</span>
        </div>,
      ),
    ).body;
    expect(datesAnAddition(clean(shipped.textContent))).toBe(true);
  });

  it("the region strip is left as it is: three regions, then Rest, adding up to the total", () => {
    // The Rest split has no artboard, so it is not built in this job.
    const cells = [...teaser().querySelectorAll('[class*="_cell_"]')].map((c) => ({
      n: Number(clean(c.querySelector('[class*="_num_"]')?.textContent)),
      label: clean(c.querySelector('[class*="_label_"]')?.textContent),
    }));
    expect(cells).toHaveLength(4);
    expect(cells[3].label).toBe("Rest");
    expect(cells.reduce((t, c) => t + c.n, 0)).toBe(performedCountries.length);
  });
});
