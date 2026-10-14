import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const nav = vi.hoisted(() => ({ pathname: "/compare" }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.pathname,
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import PairPage from "../../app/compare/[pair]/page";
import CountryIndexPage from "../../app/compare/in/page";
import CountryPage from "../../app/compare/in/[country]/page";
import MobileTabBar from "../../app/components/MobileTabBar";
import styles from "../../app/compare/compare.module.css";
import { BACK_BAR_ROUTES, hasOwnActionBar, hasOwnMobileChrome } from "../../app/lib/mobileScreens";
import { SEGMENT_LABELS } from "../../app/lib/seo";
import { countryMeta } from "../../app/data/afrobeats";
import { artistBySlug } from "../../app/lib/certUnits";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { certCountryCodes, countryFromSlug, countrySlug } from "../../app/lib/certCountry";
import { rules, winning } from "../fixtures/cssRules";

/**
 * J2-12, fixes 48 and 49 (design review 8 Oct 2026). Every compare phone
 * screen opens with the back bar the other phone screens open with — the
 * chevron, the page's own name, the menu button — over the five-tab bar with
 * Certs lit; the site masthead, the breadcrumb and the repeated kicker are not
 * shown. The back targets are fix 48's: "‹ COMPARE" → /certifications,
 * "‹ BY COUNTRY" → /compare, "‹ {COUNTRY}" → /compare/in, "‹ {A} VS {B}" →
 * /compare. And the whole compare phone layout switches at 900, with that
 * chrome (fix 49): at 760 it left 761–900 drawing the desktop table, which
 * needs about 850px, under the phone's chrome.
 *
 * Every label is read from the data and the label map, never typed: the pair
 * from artistBySlug, the country from countryMeta, the rest from SEGMENT_LABELS.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

/** A width-only media query at `width`; a query that tests anything else does not apply. */
const at = (width: number) => (media: string | null) => {
  if (media === null) return true;
  const rest = media.replace(/^@media\s*/, "").replace(/\((min|max)-width:\s*\d+px\)/g, "").replace(/\band\b/g, "").trim();
  if (rest !== "") return false;
  return [...media.matchAll(/\((min|max)-width:\s*(\d+)px\)/g)].every(([, k, n]) => (k === "min" ? width >= Number(n) : width <= Number(n)));
};
const display = (css: string, sel: string, w: number) => winning(css, sel, "display", at(w));

const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const sp = (q: Record<string, string>) => ({ searchParams: Promise.resolve(q) });
const pair = (a: string, b: string) => artistBySlug(a)!.name + " vs " + artistBySlug(b)!.name;

// The four routes, and each state the bar names differently.
const ROUTES = ["/compare", "/compare/in", "/compare/in/united-states", "/compare/burna-boy-vs-wizkid"];
const VIEWS: [string, () => Promise<React.ReactElement>, { label: string; href: string }][] = [
  ["/compare", () => ComparePage(sp({})), { label: SEGMENT_LABELS.compare, href: "/certifications" }],
  ["/compare?mode=songs", () => ComparePage(sp({ mode: "songs" })), { label: SEGMENT_LABELS.compare, href: "/certifications" }],
  ["/compare?mode=songs (both songs)", () => ComparePage(sp({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" })), { label: SEGMENT_LABELS.compare, href: "/certifications" }],
  ["/compare?a=burna-boy", () => ComparePage(sp({ a: "burna-boy" })), { label: SEGMENT_LABELS.compare, href: "/certifications" }],
  ["/compare?a=burna-boy&b=burna-boy (refused)", () => ComparePage(sp({ a: "burna-boy", b: "burna-boy" })), { label: SEGMENT_LABELS.compare, href: "/certifications" }],
  ["/compare/burna-boy-vs-wizkid", () => PairPage({ params: Promise.resolve({ pair: "burna-boy-vs-wizkid" }) }), { label: pair("burna-boy", "wizkid"), href: "/compare" }],
  ["/compare?a=burna-boy&b=wizkid&feat=0", () => ComparePage(sp({ a: "burna-boy", b: "wizkid", feat: "0" })), { label: pair("burna-boy", "wizkid"), href: "/compare" }],
  ["/compare/in", () => CountryIndexPage(), { label: SEGMENT_LABELS.in, href: "/compare" }],
  ["/compare?mode=country", () => ComparePage(sp({ mode: "country" })), { label: SEGMENT_LABELS.in, href: "/compare" }],
  ["/compare/in/united-states", () => CountryPage({ params: Promise.resolve({ country: "united-states" }) }), { label: countryMeta("US").name, href: "/compare/in" }],
  // Features off is a query board; its back bar still lands on the index
  // page, never a /compare?… variant (robots closes those, #464).
  ["/compare?mode=country&country=united-states&feat=0", () => ComparePage(sp({ mode: "country", country: "united-states", feat: "0" })), { label: countryMeta("US").name, href: "/compare/in" }],
];

describe("J2-12: the compare family has its own phone chrome, and keeps the tab bar", () => {
  const every = [...ROUTES, ...allPairs().map(([a, b]) => `/compare/${pairSlug(a, b)}`), ...certCountryCodes().map((c) => `/compare/in/${countrySlug(c)}`)];

  it("every compare route draws its own chrome (the masthead hides below 900) and is no action-bar route", () => {
    expect(every.length).toBeGreaterThan(200);
    for (const p of every) {
      expect(hasOwnMobileChrome(p), p).toBe(true);
      expect(hasOwnActionBar(p), p).toBe(false);
    }
    // Anchored: a look-alike path is not the compare family.
    expect(hasOwnMobileChrome("/compared")).toBe(false);
  });

  it.each(ROUTES)("%s keeps the five-tab bar with Certs lit", (p) => {
    nav.pathname = p;
    const bar = root(renderToStaticMarkup(<MobileTabBar />)).querySelector("nav");
    expect(bar, p).not.toBeNull();
    expect(bar!.querySelectorAll("a").length).toBe(5);
    expect([...bar!.querySelectorAll('a[aria-current="page"]')].map((a) => a.lastElementChild?.textContent)).toEqual(["Certs"]);
    nav.pathname = "/compare";
  });

  it.each(VIEWS)("%s: the back bar's label and target", async (_path, render, want) => {
    const page = root(renderToStaticMarkup(await render()));
    const bars = page.querySelectorAll(`.${styles.backBar}`);
    expect(bars.length).toBe(1);
    const bar = bars[0];
    expect(bar.querySelector(`.${styles.backLabel}`)?.textContent).toBe(want.label);
    const back = bar.querySelector(`a.${styles.backBtn}`)!;
    expect(back.getAttribute("href")).toBe(want.href);
    expect(back.getAttribute("aria-label")).toBe("Back");
    // A page of its own, never a query variant.
    expect(want.href).not.toContain("?");
    // The menu button: fix 48's "every compare phone screen has the menu button".
    expect(bar.querySelector("button[data-mobile-menu-button]")).not.toBeNull();
    // Outside <main>, before the breadcrumb's wrapper, as every phone screen draws it.
    const main = page.querySelector("main#content")!;
    expect(main.contains(bar)).toBe(false);
    const crumbs = page.querySelector(`.${styles.crumbs}`)!;
    expect(crumbs.querySelector('nav[aria-label="Breadcrumb"]')).not.toBeNull();
    expect(bar.compareDocumentPosition(crumbs) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(crumbs.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("every pair page names its pair and every board its country, read from the data", async () => {
    for (const [a, b] of allPairs().filter((_, i) => i % 19 === 0)) {
      const page = root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: pairSlug(a, b) }) })));
      expect(page.querySelector(`.${styles.backLabel}`)?.textContent).toBe(`${a.name} vs ${b.name}`);
    }
    for (const code of certCountryCodes().filter((_, i) => i % 4 === 0)) {
      const page = root(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: countrySlug(code) }) })));
      expect(page.querySelector(`.${styles.backLabel}`)?.textContent).toBe(countryMeta(countryFromSlug(countrySlug(code))!).name);
    }
  });
});

describe("J2-12 / fix 49: the bar shows at 900 and below, the breadcrumb and the kicker above it", () => {
  it.each([320, 375, 390, 402, 760, 800, 900])("at %ipx: the back bar shows; the breadcrumb and the kicker do not", (w) => {
    expect(display(CSS, ".backBar", w)).toBe("flex");
    expect(display(CSS, ".crumbs", w)).toBe("none");
    expect(display(CSS, ".kicker", w)).toBe("none");
    // 18px between the bar and the h1, as the frames draw it.
    expect(winning(CSS, ".wrap", "padding-top", at(w))).toBe("18px");
  });

  it.each([901, 1024, 1240, 1440])("at %ipx: the breadcrumb and the kicker show; the back bar does not", (w) => {
    expect(display(CSS, ".backBar", w)).toBe("none");
    expect(display(CSS, ".crumbs", w)).toBeUndefined();
    expect(display(CSS, ".kicker", w)).toBeUndefined();
  });

  it("the bar's values are the deep pages' bar's: sticky, 44px circle, the 11px mono label", () => {
    const ph = (p: string) => winning(CSS, ".backBar", p, at(390));
    expect([ph("position"), ph("top")]).toEqual(["sticky", "0"]);
    expect(ph("background")).toBe("var(--scrim)");
    expect(ph("border-bottom")).toBe("1px solid var(--line)");
    expect(winning(CSS, ".backBtn", "width", at(390))).toBe("44px");
    expect(winning(CSS, ".backBtn", "height", at(390))).toBe("44px");
    expect(winning(CSS, ".backBtn", "border", at(390))).toBe("1px solid var(--btn-edge)");
    expect(winning(CSS, ".backLabel", "font-size", at(390))).toBe("11px");
    expect(winning(CSS, ".backLabel", "text-transform", at(390))).toBe("uppercase");
  });

  it("the whole phone layout is on the 900 edge: no 760 or 761 query is left, every max-width query is 900 or 360", () => {
    const media = [...new Set(rules(CSS).map((r) => r.media).filter((m): m is string => m !== null))];
    expect(media.filter((m) => /\b76[01]px/.test(m))).toEqual([]);
    const maxes = media.flatMap((m) => [...m.matchAll(/max-width:\s*(\d+)px/g)].map((x) => Number(x[1])));
    expect([...new Set(maxes)].filter((n) => n !== 900 && n !== 360 && n !== 1239)).toEqual([]);
    // The phone table at 800, the old band: the phone grid, not a table row.
    expect(winning(CSS, ".table tr", "display", at(800))).toBe("grid");
  });
});

describe("negative controls: what shipped", () => {
  it("main's chrome list gave /compare no chrome of its own, so the masthead stayed on every compare phone screen", () => {
    // app/lib/mobileScreens.ts on main, the predicate verbatim but for the
    // route this change adds.
    const shipped = (p: string) =>
      BACK_BAR_ROUTES.has(p) || p.startsWith("/music/") || p.startsWith("/afrobeats/") || p.startsWith("/records/cars/") || p.startsWith("/on-this-day/");
    for (const p of ROUTES) expect(shipped(p), p).toBe(false);
  });

  it("the live kicker rendered above the h1 at 390 under the shipped phone block", () => {
    // burnaboystats.com/compare/burna-boy-vs-wizkid, 8 Oct 2026, verbatim.
    const live = '<p class="compare-module__-ZWgpW__kicker">Certified units, compared</p>';
    expect(root(live).querySelector("p")!.className).toMatch(/__kicker$/);
    // main's compare.module.css: the phone block's head, verbatim. No rule
    // in it touches the kicker, so the kicker showed.
    const shipped = "@media (max-width: 760px) {\n  .wrap { padding: 0 16px 28px; }\n}\n.kicker { margin: 16px 0 14px; }";
    expect(display(shipped, ".kicker", 390)).toBeUndefined();
    expect(display(CSS, ".kicker", 390)).toBe("none");
  });

  it("main's 760 block drew the desktop table at 800, under the phone chrome", () => {
    // main's compare.module.css, lines 647 and 695–705, verbatim.
    const shipped = `@media (max-width: 760px) {
  .tableWrap { overflow: visible; }
  .table, .table thead, .table tbody { display: block; }
  .table tr {
    display: grid;
    grid-template-columns: 78px minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    align-items: center;
    min-height: 56px;
    padding: 8px 0;
    border-bottom: 1px solid var(--rule-soft);
  }
}`;
    expect(winning(shipped, ".table tr", "display", at(800))).toBeUndefined();
    expect(winning(shipped, ".table tr", "display", at(760))).toBe("grid");
  });
});
