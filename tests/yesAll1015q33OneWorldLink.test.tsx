import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../app/records/tours/page";
import mobileStyles from "../app/components/mobileTours.module.css";
import { liveMoments } from "../app/data/liveMoments";
import { liveMomentHref, liveMomentLinks } from "../app/lib/liveMomentLinks";
import { MOMENT_PLACE, tourMapCountries } from "../app/lib/tourMapData";

/**
 * Owner question #33 (live debug 15 Oct 2026, map-02; Paul: "yes to all"):
 * the "One World: Together at Home" milestone on /records/tours linked to the
 * tour map's Nigeria panel (?country=ng), which lists documented shows only
 * and so never mentions it: it was a broadcast performance from Lagos, not a
 * show. The link is removed on both layouts; the row stays, unlinked.
 */

const TITLE = "One World: Together at Home";
const text = (e: Element | null) => (e?.textContent ?? "").replace(/\s+/g, " ").trim();
const page = () => new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");

describe("#33: the One World milestone links nowhere", () => {
  const i = liveMoments.findIndex((m) => m.title === TITLE);

  it("the moment is still a milestone, placed in Lagos, marked as a broadcast", () => {
    expect(i).toBeGreaterThan(-1);
    expect(MOMENT_PLACE[TITLE]).toEqual({ country: "Nigeria", city: "Lagos", repeats: true, broadcast: true });
    expect(liveMomentHref(liveMoments[i], i)).toBeNull();
  });

  it("no other moment lost its link", () => {
    expect(liveMomentLinks.filter((l) => l.href === null).map((l) => l.title)).toEqual([TITLE]);
    expect(Object.entries(MOMENT_PLACE).filter(([, p]) => p?.broadcast).map(([t]) => t)).toEqual([TITLE]);
  });

  it("desktop: the title is plain text, and the other milestones keep theirs", () => {
    const d = page();
    const titles = [...d.querySelectorAll('[class*="_desktopOnly_"] [class*="_momentTitle_"]')];
    const row = titles.find((h) => text(h) === TITLE)!;
    expect(row).toBeDefined();
    expect(row.querySelector("a")).toBeNull();
    expect(titles.filter((h) => h.querySelector("a")).length).toBe(liveMoments.length - 1);
  });

  it("phone: the row is no link and carries no arrow", () => {
    const d = page();
    const rows = [...d.querySelectorAll(`.${mobileStyles.momentRow}`)];
    const row = rows.find((r) => text(r.querySelector(`.${mobileStyles.momentTitle}`)) === TITLE)!;
    expect(row).toBeDefined();
    expect(row.tagName).not.toBe("A");
    expect(row.closest("a")).toBeNull();
    expect(row.querySelector(`.${mobileStyles.roadArrow}`)).toBeNull();
  });
});

describe("#33 negative control: the link main shipped", () => {
  it("origin/main a9574c64 sent the milestone to the Nigeria panel", () => {
    // liveMomentHref on main, rule 2: the moment's country on the map.
    const ng = tourMapCountries.find((c) => c.name === "Nigeria")!;
    const SHIPPED = `/records/tours/map?country=${ng.a2.toLowerCase()}`;
    expect(SHIPPED).toBe("/records/tours/map?country=ng");
    const hrefs = [...page().querySelectorAll("a")].map((a) => a.getAttribute("href"));
    // The page's only links to the Nigeria panel now are the country links, not this row.
    const row = [...page().querySelectorAll('[class*="_momentTitle_"] a')].find((a) => text(a) === TITLE);
    expect(row).toBeUndefined();
    expect(hrefs.length).toBeGreaterThan(0);
  });
});
