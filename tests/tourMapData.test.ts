import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  tourMapCountries,
  tourMapTotals,
  tourMapCities,
  rowsRepeatingATourDate,
  ROW_PLACE,
  MOMENT_PLACE,
  VIEWS,
} from "../app/lib/tourMapData";
import { festivals, otherShows, concerts } from "../app/data/tours";
import { liveMoments } from "../app/data/liveMoments";
import { performedCountries } from "../app/data/performedCountries";

/**
 * The tour map's figures, derived from the data files under the brief's
 * counting rules (docs/design/tour-map-and-phone-screens/README.md §3.3).
 *
 * The expected values are research/countries.md, made on 30 Sep 2026 by the
 * reference implementation (research/tour-map-method/card_counts.py and
 * country_links.py) — an outside anchor, not this module's own output copied
 * back. The eight cases are the ones the design draws; if a data change moves
 * one, re-run the reference and update both.
 */

const countriesMd = readFileSync("docs/design/tour-map-and-phone-screens/research/countries.md", "utf8");
/** A country's row in research/countries.md: [documented, biggest, peak, plaques, board]. */
const mdRow = (name: string) => {
  const line = countriesMd.split("\n").find((l) => l.split("|")[2]?.trim() === name);
  if (!line) throw new Error(`no row for ${name} in countries.md`);
  const cells = line.split("|").map((s) => s.trim());
  return { documented: cells[3], biggest: cells[4], peak: cells[5], plaques: cells[6], board: cells[7] };
};
const get = (name: string) => tourMapCountries.find((c) => c.name === name)!;
const EIGHT = ["United States", "United Kingdom", "Canada", "Nigeria", "Benin", "Mexico", "Barbados", "Kosovo"];

describe("every row is placed, so nothing is counted in the wrong country", () => {
  it("each festival, one-off and concert location has a place", () => {
    const unplaced = [...festivals, ...otherShows, ...concerts].map((f) => f.location).filter((l) => !(l in ROW_PLACE));
    expect(unplaced).toEqual([]);
  });
  it("each live moment is placed or marked as naming no place", () => {
    expect(liveMoments.map((m) => m.title).filter((t) => !(t in MOMENT_PLACE))).toEqual([]);
  });
  it("every place names a country on the map", () => {
    const names = new Set(performedCountries.map((c) => c.name));
    const places = [...Object.values(ROW_PLACE), ...Object.values(MOMENT_PLACE).flatMap((p) => (p ? [p] : []))];
    expect(places.filter((p) => !names.has(p.country)).map((p) => p.country)).toEqual([]);
  });
  it("the one row that repeats a tour date is the Lagos Live Experience", () => {
    expect(rowsRepeatingATourDate).toEqual(["Burna Boy: The Live Experience"]);
  });
});

describe("the eight drawn cases match research/countries.md", () => {
  for (const name of EIGHT) {
    it(name, () => {
      const c = get(name);
      const md = mdRow(name);
      // Documented line: the md cell reads "none (no row: event lines only)" for Benin.
      expect(c.documented || "none (no row: event lines only)").toBe(md.documented);
      // Biggest line: "—" where there is none.
      expect(c.big ? `${c.big.label} · ${c.big.line}` : "—").toBe(md.biggest);
      // Chart peak: "No. 1 · Official Charts Company · …" or "none".
      const peak = c.links.find((l) => l.peak !== undefined);
      expect(peak ? `No. ${peak.peak} · ${peak.sub}` : "none").toBe(md.peak === "none" ? "none" : md.peak.split(" · ").slice(0, 2).join(" · "));
      // Board: linked only where Burna Boy holds a plaque there.
      const cert = c.links.find((l) => l.label.startsWith("Certifications in"));
      const board = md.board === "none" || md.plaques === "0" ? undefined : md.board.replace(/`/g, "");
      expect(cert?.href).toBe(board);
    });
  }

  it("the link rows, in order, as the brief lists them for the eight", () => {
    const rows = (name: string) => get(name).links.map((l) => (l.peak !== undefined ? `${l.label} No. ${l.peak}` : l.label));
    expect(rows("United States")).toEqual(["Tour dates on the Tours page", "Festivals & shows", "Certifications in the US", "Chart peak here: No. 14"]);
    expect(rows("United Kingdom")).toEqual(["Tour dates on the Tours page", "Festivals & shows", "Certifications in the UK", "Chart peak here: No. 1"]);
    expect(rows("Canada")).toEqual(["Tour dates on the Tours page", "Certifications in Canada", "Chart peak here: No. 3"]);
    expect(rows("Nigeria")).toEqual(["Tour dates on the Tours page", "Festivals & shows", "Certifications in Nigeria", "Chart peak here: No. 1"]);
    expect(rows("Benin")).toEqual([]);
    expect(rows("Mexico")).toEqual([]);
    expect(rows("Barbados")).toEqual(["Tour dates on the Tours page"]);
    expect(rows("Kosovo")).toEqual(["Festivals & shows"]);
    expect(get("United States").links.map((l) => l.href)).toEqual([
      "/records/tours",
      "/records/tours/festivals",
      "/compare/in/united-states",
      "/records/charts",
    ]);
  });

  it("the screen-reader lines read as the response writes them", () => {
    expect(get("Nigeria").say).toBe("Nigeria, Africa: 1 tour date, 1 festival or one-off appearance, 1 city, 2016 to 2021.");
    expect(get("Benin").say).toBe("Benin, Africa: known from WeLoveYa Festival, Cotonou, 2025.");
  });

  it("negative control: the shipped card for Nigeria had no documented line, only its events and 'and more'", () => {
    // PerformanceMap.tsx's aria-label on 30 Sep 2026, verbatim for Nigeria.
    const shipped = "Nigeria: The Live Experience, Lagos (2021); NATIVELAND Festival, Lagos (2016) and more";
    expect(shipped).not.toContain(get("Nigeria").documented);
    expect(shipped).not.toMatch(/\d+ tour dates?/);
  });
});

describe("Canada's biggest line follows the design rule (3 Oct 2026)", () => {
  // The rule (research/countries.md): the single night with the most reported
  // tickets; a stand only where a country has no single night. Canada gained
  // single nights (Vancouver, Edmonton) when the box-office board was extended,
  // so its card names the night — a stand's combined headcount never competes
  // with one night's.
  it("names the biggest single night, not the Toronto stand", () => {
    const big = get("Canada").big!;
    expect(big.label).toBe("Biggest reported night");
    expect(big.line).toBe("Rogers Arena, Vancouver · 7 Nov 2023 · 7,198 tickets");
  });
});

describe("Ireland's biggest line follows the same rule (3 Oct 2026)", () => {
  // His 3Arena night of March 2022 (Space Drift, TouringData's own post of
  // 27 May 2022) joined tourRevenue.ts. Ireland has no tour date in tours.ts,
  // so by rule 6 the line carries the year, not a day.
  it("names the 3Arena night, dated by its year", () => {
    expect(get("Ireland").big?.line).toBe("3Arena, Dublin · 2022 · 7,504 tickets");
  });
});

describe("all 57 match research/countries.md", () => {
  it("documented lines and biggest lines, every country", () => {
    const off = tourMapCountries.flatMap((c) => {
      const md = mdRow(c.name);
      const doc = c.documented || "none (no row: event lines only)";
      const big = c.big ? `${c.big.label} · ${c.big.line}` : "—";
      return doc === md.documented && big === md.biggest ? [] : [`${c.name}: "${doc}" / "${big}"`];
    });
    expect(off).toEqual([]);
  });

  it("the totals line: 28 chart peaks, 21 plaque countries, 21 boards linked", () => {
    const m = /\*\*Totals:\*\* (\d+) countries · (\d+) with a Burna Boy chart peak · (\d+) with at least one Burna Boy plaque/.exec(countriesMd)!;
    expect(tourMapCountries.length).toBe(Number(m[1]));
    expect(tourMapCountries.filter((c) => c.links.some((l) => l.peak !== undefined)).length).toBe(Number(m[2]));
    expect(tourMapCountries.filter((c) => c.links.some((l) => l.label.startsWith("Certifications in"))).length).toBe(Number(m[3]));
    // Nine countries are known only from the map's event lines.
    expect(tourMapCountries.filter((c) => !c.documented).map((c) => c.name)).toEqual([
      "Benin", "Cameroon", "Tanzania", "Zambia", "Botswana", "Ireland", "Austria", "Haiti", "Antigua & Barbuda",
    ]);
  });
});

describe("the headline figures", () => {
  it("156 documented shows, 96 cities, 2014–2026, London Stadium 58,973 (the brief's §3.3 totals)", () => {
    expect(tourMapTotals).toMatchObject({
      countries: 57,
      regions: 7,
      continents: 6,
      tourDates: 98,
      appearances: 58,
      documentedShows: 156,
      milestones: 6,
      cities: 96,
      years: "2014–2026",
      itinerariesFrom: 2018,
      biggestNight: { venue: "London Stadium", city: "London", when: "29 Jun 2024", tickets: "58,973" },
      dots: 8,
      caribbeanDots: 6,
      otherDotNames: ["Mauritius", "Kosovo"],
    });
  });

  it("negative control: counting the Lagos row twice would give 157, not the brief's 156", () => {
    expect(tourMapTotals.documentedShows + rowsRepeatingATourDate.length).not.toBe(156);
  });

  it("Toronto, for the find box: 5 documented tour dates", () => {
    expect(tourMapCities.find((c) => c.city === "Toronto")).toEqual({ city: "Toronto", country: "Canada", line: "5 documented tour dates" });
  });
});

describe("the views are the response's boxes, in the site's map units", () => {
  it("projected from the lon/lat boxes with the site's own Equal Earth", () => {
    // Design response §2, "Map units (x, y, w, h)". Within 0.15 of a unit:
    // lib/equalEarth.ts rounds each projected point to 0.1, the response's
    // script did not (Africa's width comes out 191.8 against its 191.9).
    const near = (got: number[], want: number[]) => got.forEach((v, i) => expect(Math.abs(v - want[i])).toBeLessThan(0.15));
    near(VIEWS.europe, [423.2, 31.0, 129.7, 92.4]);
    near(VIEWS.africa, [403.3, 112.7, 191.9, 237.7]);
    near(VIEWS.caribbean, [248.1, 143.7, 52.7, 59.4]);
    expect(VIEWS.world).toEqual([0, 10, 900, 405]);
  });

  it("home views: Europe, Africa or Caribbean for those regions, World for the rest", () => {
    expect(get("United Kingdom").home).toBe("europe");
    expect(get("United Arab Emirates").home).toBe("world");
    expect(get("Barbados").home).toBe("caribbean");
    expect(get("Guyana").home).toBe("world");
  });

  it("deep-link codes come from the flags; Kosovo takes XK", () => {
    expect(get("United Kingdom").a2).toBe("gb");
    expect(get("Kosovo").a2).toBe("xk");
    expect(new Set(tourMapCountries.map((c) => c.a2)).size).toBe(57);
    expect(tourMapCountries.every((c) => /^[a-z]{2}$/.test(c.a2))).toBe(true);
  });
});
