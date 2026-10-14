import { render, cleanup, fireEvent, screen } from "@testing-library/react";

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

import MobileTours from "../../app/components/MobileTours";
import styles from "../../app/components/mobileTours.module.css";
import { tours } from "../../app/data/tours";
import { revenueShows } from "../../app/data/tourRevenue";
import { tourBoxOffice } from "../../app/lib/tourBoxOffice";
import { shortGross } from "../../app/lib/grossLabel";
import { NOT_REPORTED_LINE } from "../../app/lib/tourNights";

/**
 * J3-11 on the phone (design review 8 Oct 2026, fixes 59, 69): a board tour's
 * reported night is one whole-row link, at least 44px, ending in →, to its own
 * row on the box-office board; its second line gives way to a figure line
 * ("10,684 tickets · $1.22M · No. 13"), and capacity leaves it. A night with
 * no report reads "— not reported" and links nowhere. A tour with no board
 * night keeps its capacity rows. Every figure here is read off the board.
 */

const box = tourBoxOffice(tours);
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

const phone = (boxOffice: typeof box | null = box) =>
  render(
    <MobileTours
      tours={tours}
      topGross="$30.46M"
      topTourName="I Told Them…"
      countryCount={40}
      regionCount={6}
      biggestNight="60,000"
      biggestVenue="London Stadium"
      yearSpan="2018–2026"
      hisShowCount={20}
      revenueShowCount={60}
      appearanceCount={50}
      headlinedCount={30}
      today="2026-10-14"
      boxOffice={boxOffice ?? undefined}
    />,
  );

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

const open = (name: RegExp) => fireEvent.click(screen.getByRole("button", { name }));
const rowOf = (root: HTMLElement, venue: string) =>
  [...root.querySelectorAll(`.${styles.dateRow}`)].find((el) => el.querySelector(`.${styles.dateVenue}`)?.textContent === venue)!;
const boardRow = (venue: string, year: string) => {
  const i = revenueShows.findIndex((s) => s.artist === "Burna Boy" && s.venue === venue && s.year === year);
  return { s: revenueShows[i], rank: i + 1 };
};

describe("a reported night is one whole-row link to its row on the board", () => {
  it.each([
    ["BMO Stadium", "2023"],
    ["TD Garden", "2024"],
    ["Mercedes-Benz Arena", "2023"],
  ])("%s (%s): '{tickets} tickets · {gross} · No. {n} →', to #m-night-{n}", (venue, year) => {
    const { container } = phone();
    open(/I Told Them… Tour/);
    const { s, rank } = boardRow(venue, year);
    const row = rowOf(container, venue);
    expect(row.tagName).toBe("A");
    expect(row.classList.contains(styles.dateRowLink)).toBe(true);
    expect(row.getAttribute("href")).toBe(`/records/tours/revenue#m-night-${rank}`);
    expect(clean(row.querySelector(`.${styles.dateFigs}`)!.textContent)).toBe(`${s.tickets} tickets · ${shortGross(s.revenue)} · No. ${rank}`);
    expect(row.querySelector(`.${styles.roadArrow}`)!.textContent).toBe("→");
    // Capacity leaves the row.
    expect(row.querySelector(`.${styles.dateCap}`)).toBeNull();
  });

  it("the review's two figures read as drawn: BMO Stadium '10,684 tickets · $1.22M', TD Garden '13,219 tickets · $1.59M'", () => {
    const { container } = phone();
    open(/I Told Them… Tour/);
    expect(clean(rowOf(container, "BMO Stadium").querySelector(`.${styles.dateFigs}`)!.textContent)).toMatch(/^10,684 tickets · \$1\.22M · No\. \d+$/);
    expect(clean(rowOf(container, "TD Garden").querySelector(`.${styles.dateFigs}`)!.textContent)).toMatch(/^13,219 tickets · \$1\.59M · No\. \d+$/);
  });

  it("Waldbühne: '— not reported', not a link, no capacity", () => {
    const { container } = phone();
    open(/I Told Them… Tour/);
    const row = rowOf(container, "Waldbühne");
    expect(row.tagName).toBe("DIV");
    expect(row.closest("a")).toBeNull();
    expect(clean(row.querySelector(`.${styles.dateFigs}`)!.textContent)).toBe(NOT_REPORTED_LINE);
    expect(row.querySelector(`.${styles.roadArrow}`)).toBeNull();
    expect(row.querySelector(`.${styles.dateCap}`)).toBeNull();
  });

  it("the board tour's head drops 'Venue capacity'", () => {
    const { container } = phone();
    open(/I Told Them… Tour/);
    expect(clean(container.querySelector(`.${styles.dateHead}`)!.textContent)).toBe("Date & venue");
  });

  it("the rows meet the 44px floor and press to --hover (they carry the gold →)", async () => {
    const { readFileSync } = await import("node:fs");
    const css = readFileSync("app/components/mobileTours.module.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css).toMatch(/\.dateRowLink\s*\{[^}]*min-height:\s*44px/);
    expect(css).toMatch(/\.dateRowLink:hover,\s*\.dateRowLink:active\s*\{\s*background:\s*var\(--hover\)/);
  });
});

describe("a tour with no board night keeps its rows", () => {
  it("African Giant Tour: capacity on every row, nothing a link", () => {
    const { container } = phone();
    open(/African Giant Tour/);
    const t = tours.find((x) => x.name === "African Giant Tour")!;
    const rows = [...container.querySelectorAll(`.${styles.dateRow}`)];
    expect(rows.length).toBe(t.dates!.length);
    expect(rows.every((r) => r.tagName === "DIV")).toBe(true);
    expect(rows.every((r) => r.querySelector(`.${styles.dateCap}`))).toBe(true);
    expect(clean(container.querySelector(`.${styles.dateHead}`)!.textContent)).toBe("Date & venueVenue capacity");
  });
});

describe("negative control", () => {
  it("main's phone row (a div with the venue's capacity, MobileTours.tsx) is not a link", () => {
    // Without the board's figures the screen renders main's rows verbatim:
    // <div key={`${d.date}-${d.venue}`} className={styles.dateRow} data-show={…}>.
    const { container } = phone(null);
    open(/I Told Them… Tour/);
    const row = rowOf(container, "BMO Stadium");
    expect(row.tagName).toBe("DIV");
    expect(row.querySelector(`.${styles.dateCap}`)).not.toBeNull();
  });
});
