import { readFileSync } from "node:fs";
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
import styles from "../app/components/mobileTours.module.css";
import { BIGGEST_NIGHT_LABEL } from "../app/lib/tourMeta";
import { tourMapTotals } from "../app/lib/tourMapData";
import { revenueShows } from "../app/data/tourRevenue";

/**
 * Owner question #29 (live debug 15 Oct 2026, tours-03; Paul: "yes to all"):
 * the phone /records/tours tile read "58,973 · BIGGEST NIGHT · London
 * Stadium" with no word of what the figure counts, while the milestones lower
 * down say "about 60,000 fans" for that night and 65,000 for the Lionesses'
 * parade. The tour map labels the same figure "Biggest night, by reported
 * tickets"; the phone tile now says so too, from the same night.
 */

const text = (e: Element | null) => (e?.textContent ?? "").replace(/\s+/g, " ").trim();
const tiles = () => {
  const d = new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");
  return [...d.querySelectorAll(`.${styles.statGrid} .${styles.statCell}`)].map((c) => ({
    v: text(c.querySelector(`.${styles.statValue}`)),
    l: text(c.querySelector(`.${styles.statLabel}`)),
    n: text(c.querySelector(`.${styles.statNote}`)),
  }));
};
const ticketsOf = (s: string) => Number(s.replace(/,/g, ""));

describe("#29: the phone 'Biggest night' tile says what it counts, as the map does", () => {
  it("the label is the map's: 'Biggest night, by reported tickets'", () => {
    expect(BIGGEST_NIGHT_LABEL).toBe("Biggest night, by reported tickets");
    const t = tiles().find((x) => x.l.startsWith("Biggest night"))!;
    expect(t.l).toBe(BIGGEST_NIGHT_LABEL);
  });

  it("over the map's night: the same figure and venue", () => {
    const t = tiles().find((x) => x.l === BIGGEST_NIGHT_LABEL)!;
    expect(t.v).toBe(tourMapTotals.biggestNight.tickets);
    expect(t.n).toBe(tourMapTotals.biggestNight.venue);
  });

  it("which is his single night with the most reported tickets on the board", () => {
    const his = revenueShows.filter((s) => s.artist === "Burna Boy" && s.tickets);
    const most = Math.max(...his.map((s) => ticketsOf(s.tickets!)));
    const t = tiles().find((x) => x.l === BIGGEST_NIGHT_LABEL)!;
    expect(ticketsOf(t.v)).toBe(most);
    expect(his.filter((s) => ticketsOf(s.tickets!) === most).map((s) => s.venue)).toEqual([t.n]);
  });

  it("the map's desktop figures read the same constant, so the two cannot drift", () => {
    const src = readFileSync("app/components/TourMapDesktop.tsx", "utf8");
    expect(src).toContain("l: BIGGEST_NIGHT_LABEL,");
    expect(src).not.toContain('"Biggest night, by reported tickets"');
  });
});

describe("#29 negative control: the tile main shipped", () => {
  it("origin/main a9574c64 labelled the phone tile a bare 'Biggest night'", () => {
    // MobileTours.tsx:156 on main, verbatim.
    const SHIPPED = { v: "58,973", l: "Biggest night", n: "London Stadium" };
    expect(SHIPPED.l).not.toMatch(/reported tickets/);
    expect(tiles().map((t) => t.l)).not.toContain(SHIPPED.l);
  });
});
