import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../app/records/tours/page";
import ToursExplorer from "../app/components/ToursExplorer";
import MobileTours from "../app/components/MobileTours";
import { tours } from "../app/data/tours";
import { liveMoments } from "../app/data/liveMoments";
import { ceremonies } from "../app/data/awards";
import { tourMapCountries, MOMENT_PLACE } from "../app/lib/tourMapData";
import { readCountryParam } from "../app/lib/tourMapUrl";
import { DATE_PARAM, TOUR_PARAM, showDateIso, tourForSlug } from "../app/lib/tourDeepLink";
import { dayBySlug } from "../app/lib/onThisDay";
import { liveMomentHref, liveMomentLinks } from "../app/lib/liveMomentLinks";

/**
 * Quick win 6, tours part (design review of 8 Oct 2026):
 *  T-13 — the tour map's country card sent "Tour dates on the Tours page" to a
 *         bare /records/tours: the top of the page, every tour shut, the
 *         country's nights nowhere on screen.
 *  T-20 — the 17 "Record nights & live milestones" rows linked nowhere, though
 *         nearly all of them have a page on the site that holds them.
 */

const COUNTRY_ALIAS: Record<string, string> = { USA: "United States", UK: "United Kingdom" };
const countryOf = (s: string) => COUNTRY_ALIAS[s] ?? s;
const TOUR_DATES = "Tour dates on the Tours page";
/** The link as it shipped until 8 Oct 2026, on every card that had one. */
const SHIPPED_TOUR_DATES_HREF = "/records/tours";

/** The night a #tour=&date= link names, if it is a night of that tour in `country`. */
function nightIn(href: string, country: string) {
  const [path, hash = ""] = href.split("#");
  if (path !== "/records/tours" || !hash) return null;
  const q = new URLSearchParams(hash);
  const tour = tourForSlug(q.get(TOUR_PARAM), tours);
  const night = tour?.dates?.find((d) => showDateIso(d.date) === q.get(DATE_PARAM) && countryOf(d.country) === country);
  return tour && night ? { tour, night } : null;
}

describe("T-13: the map card's tour-dates link opens the Tours page at that country's nights", () => {
  const withDates = tourMapCountries.filter((c) => c.links.some((l) => l.label === TOUR_DATES));

  it("every card that has the link names one of that country's nights, the first in the page's order", () => {
    expect(withDates.length).toBeGreaterThanOrEqual(14);
    for (const c of withDates) {
      const href = c.links.find((l) => l.label === TOUR_DATES)!.href;
      const hit = nightIn(href, c.name);
      expect(hit, `${c.name}: ${href}`).not.toBeNull();
      // The first of the country's nights as the page lists them: tours in
      // the data's order (newest first), dates in each table's order.
      const first = tours.flatMap((t) => (t.dates ?? []).map((d) => ({ t, d }))).find((x) => countryOf(x.d.country) === c.name)!;
      expect([hit!.tour.name, hit!.night.date], c.name).toEqual([first.t.name, first.d.date]);
    }
  });

  it("negative control: the shipped bare link names no night", () => {
    for (const c of withDates) expect(nightIn(SHIPPED_TOUR_DATES_HREF, c.name), c.name).toBeNull();
  });

  afterEach(() => {
    cleanup();
    window.history.replaceState(null, "", "/");
  });

  const nigeria = () => tourMapCountries.find((c) => c.name === "Nigeria")!.links.find((l) => l.label === TOUR_DATES)!.href;

  it("Nigeria, on the phone: the link opens Space Drift with the Lagos night in the list", () => {
    window.history.replaceState(null, "", nigeria());
    const { container } = render(
      <MobileTours
        tours={tours}
        topGross="$30.46M"
        topTourName="I Told Them…"
        countryCount={57}
        regionCount={7}
        biggestNight="58,973"
        biggestVenue="London Stadium"
        yearSpan="2018 — 2026"
        hisShowCount={20}
        revenueShowCount={82}
        appearanceCount={58}
        headlinedCount={32}
        today="2026-10-08"
      />,
    );
    expect(screen.getByRole("button", { name: /Space Drift World Tour/ })).toHaveAttribute("aria-expanded", "true");
    expect(container.querySelector('[data-show="2021-12-27"]')?.textContent).toContain("Lagos");
  });

  it("Nigeria, on desktop: the same link opens Space Drift over the default tour", () => {
    window.history.replaceState(null, "", nigeria());
    const { container } = render(<ToursExplorer tours={tours} />);
    expect(screen.getByRole("button", { name: /Space Drift World Tour/ })).toHaveAttribute("aria-expanded", "true");
    expect(container.querySelector('tr[data-show="2021-12-27"]')?.textContent).toContain("Lagos");
  });
});

describe("T-20: each record night and live milestone links to the page that holds it", () => {
  it("every row has a link", () => {
    expect(liveMomentLinks.map((l) => [l.title, l.href === null])).toEqual(liveMoments.map((m) => [m.title, false]));
  });

  it("an On This Day link lands on a day that carries the moment", () => {
    const otd = liveMomentLinks.filter((l) => l.href!.startsWith("/on-this-day/"));
    // The two dated in their own right, and the six that are dated tour nights.
    expect(otd.map((l) => l.title)).toEqual([
      "FIFA World Cup Final halftime show",
      "AFCON 2025 Fan Zone grand finale",
      "Red Rocks Amphitheatre",
      "Stade de France, Paris",
      "London Stadium — African concert record",
      "Citi Field, New York (sold out)",
      "London Stadium (sold out)",
      "Madison Square Garden (sold out)",
    ]);
    for (const l of otd) {
      const m = liveMoments.find((x) => x.title === l.title)!;
      const day = dayBySlug(l.href!.slice("/on-this-day/".length));
      expect(day, l.title).toBeDefined();
      expect(day!.events.some((e) => e.headline === m.title || e.detail === m.text), l.title).toBe(true);
    }
  });

  it("a map link selects the moment's own country there", () => {
    const map = liveMomentLinks.filter((l) => l.href!.startsWith("/records/tours/map?"));
    expect(map.length).toBeGreaterThan(0);
    for (const l of map) {
      const want = tourMapCountries.find((c) => c.name === MOMENT_PLACE[l.title]!.country)!;
      expect(readCountryParam(l.href!.split("?")[1], tourMapCountries), l.title).toEqual({ kind: "played", a2: want.a2 });
    }
  });

  it("the two Grammy stages, which the map cannot place, open the Grammys on the awards page", () => {
    const awards = liveMomentLinks.filter((l) => l.href!.startsWith("/records/awards"));
    expect(awards.map((l) => l.title)).toEqual(["Grammy Awards Stage", "Grammy Awards Premiere Ceremony"]);
    for (const l of awards) {
      const body = decodeURIComponent(new URLSearchParams(l.href!.split("#")[1]).get("body")!);
      expect(ceremonies.some((c) => c.name === body)).toBe(true);
    }
  });

  it("the desktop page prints each title as that link", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");
    const titles = [...doc.querySelectorAll('[class*="_desktopOnly_"] [class*="_momentTitle_"]')];
    expect(titles.length).toBe(liveMoments.length);
    titles.forEach((h, i) => {
      const a = h.querySelector("a");
      expect(a, liveMoments[i].title).not.toBeNull();
      expect(a!.getAttribute("href")).toBe(liveMomentHref(liveMoments[i], i));
      expect(a!.textContent).toBe(liveMoments[i].title);
    });
  });

  it("negative control: the row as it shipped carried no link", () => {
    const shipped = `<h3 class="_momentTitle_x">London Stadium — African concert record</h3>`;
    const h = new DOMParser().parseFromString(shipped, "text/html").querySelector("h3")!;
    expect(h.querySelector("a")).toBeNull();
  });
});
