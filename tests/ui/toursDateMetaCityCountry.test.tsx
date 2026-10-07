import { render, screen, cleanup, fireEvent } from "@testing-library/react";

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

/**
 * V-tourscars-07 (debug pass, 5 Oct 2026). Each night in a phone tour panel
 * printed `{country} {city} · {date}`, so the country ran into the city with
 * nothing between them: read live at 390x844, dark and light, 7 Oct, all six
 * tours (99 nights) — "UK London · Aug 27, 2021", "USA Washington, D.C. ·
 * May 30, 2018". The announced list above reads "city, country" and the
 * desktop table gives each its own column. The line now reads city, country,
 * and the date is held whole: at 320 "Apr 12," / "2022" split across lines
 * (four nights as shipped, nine once the city leads), as the announced list's
 * date already is.
 */

const phone = () =>
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
    />
  );

type Night = { city: string; country: string; date: string };

/** The meta line a night should carry: city, then country, then the date. */
const readsCityThenCountry = (line: string, d: Night) =>
  line.replace(/\u00a0/g, " ") === `${d.city}, ${d.country} · ${d.date}`;

/** The date cannot break: no ordinary space inside it. */
const dateHeldWhole = (line: string, d: Night) => line.endsWith(` · ${d.date.replace(/ /g, "\u00a0")}`);

/** Open one tour on the phone and read its nights' meta lines, in order. */
function metaLines(container: HTMLElement, name: string): string[] {
  fireEvent.click(screen.getByRole("button", { name: new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) }));
  return [...container.querySelectorAll(`.${styles.dateMeta}`)].map((e) => e.textContent!.trim());
}

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("phone tour nights read city, country", () => {
  const withDates = tours.filter((t) => t.dates?.length);

  it("covers every tour that lists its nights", () => {
    expect(withDates.length).toBeGreaterThanOrEqual(6);
  });

  for (const t of withDates) {
    it(`${t.name}: every night reads "city, country · date"`, () => {
      const { container } = phone();
      const lines = metaLines(container, t.name);
      expect(lines).toHaveLength(t.dates!.length);
      lines.forEach((line, i) => {
        expect(readsCityThenCountry(line, t.dates![i]), line).toBe(true);
        expect(dateHeldWhole(line, t.dates![i]), line).toBe(true);
      });
    });
  }

  it("the nights the sweep read come out as they should", () => {
    const { container } = phone();
    expect(metaLines(container, "Space Drift")).toContain("London, UK · Aug\u00a027,\u00a02021");
    cleanup();
    const again = phone();
    expect(metaLines(again.container, "Life on the Outside")).toContain("Washington, D.C., USA · May\u00a030,\u00a02018");
  });

  it("negative control: the lines the live site shipped (country first, no comma, breakable date) fail the rules", () => {
    // Read live at 390x844 on 7 Oct 2026, before the fix.
    expect(readsCityThenCountry("UK London · Aug 27, 2021", { city: "London", country: "UK", date: "Aug 27, 2021" })).toBe(false);
    expect(
      readsCityThenCountry("USA Washington, D.C. · May 30, 2018", {
        city: "Washington, D.C.",
        country: "USA",
        date: "May 30, 2018",
      })
    ).toBe(false);
    // Broke after "Apr 12," at 320.
    const rotterdam = { city: "Rotterdam", country: "Netherlands", date: "Apr 12, 2022" };
    expect(dateHeldWhole("Netherlands Rotterdam · Apr 12, 2022", rotterdam)).toBe(false);
    expect(dateHeldWhole("Rotterdam, Netherlands · Apr 12, 2022", rotterdam)).toBe(false);
  });
});
