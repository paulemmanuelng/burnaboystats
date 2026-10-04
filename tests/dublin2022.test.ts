import { describe, it, expect } from "vitest";
import { tours } from "../app/data/tours";
import { revenueShows } from "../app/data/tourRevenue";
import { onThisDayEvents } from "../app/lib/onThisDay";
import { tourMapCountries } from "../app/lib/tourMapData";
import { GET } from "../app/api/v1/tours/route";

// Burna Boy's 17 Mar 2022 3Arena night joined the Space Drift dates on the
// owner's ruling of 4 Oct 2026 ("Adding Burna's 17 Mar 2022 Dublin show to his
// tour dates. yes"). Everything that reads tours.ts follows from that one row;
// these pin the row and the four places a reader meets it.
describe("Dublin, 17 Mar 2022 (3Arena, Space Drift)", () => {
  const spaceDrift = tours.find((t) => t.name === "Space Drift World Tour")!;

  it("is one Space Drift date, in the file's own shape, between Lagos and Geneva", () => {
    const i = spaceDrift.dates!.findIndex((d) => d.venue === "3Arena");
    expect(spaceDrift.dates![i]).toEqual({ date: "Mar 17, 2022", venue: "3Arena", city: "Dublin", country: "Ireland", cap: 13000 });
    expect(spaceDrift.dates![i - 1].city).toBe("Lagos");
    expect(spaceDrift.dates![i + 1].city).toBe("Geneva");
    // One 3Arena date in the whole file: the December night (Love, Damini) was
    // not part of the ruling.
    expect(tours.flatMap((t) => t.dates ?? []).filter((d) => d.venue === "3Arena").length).toBe(1);
  });

  it("is the night the box-office row reports", () => {
    const row = revenueShows.filter((r) => r.artist === "Burna Boy" && r.venue === "3Arena");
    expect(row.map((r) => [r.year, r.tickets, r.revenue, r.tour])).toEqual([["2022", "7,504", 378802, "Space Drift Tour"]]);
  });

  it("On This Day gains the show on 17 March, with its gross", () => {
    const e = onThisDayEvents.filter((x) => x.date === "2022-03-17");
    expect(e.map((x) => [x.kind, x.headline, x.detail])).toEqual([
      ["show", "Burna Boy played 3Arena, Dublin", "Space Drift World Tour · $378,802 from 7,504 tickets"],
    ]);
  });

  it("the map's Ireland card dates the night and counts the tour date", () => {
    const ie = tourMapCountries.find((c) => c.name === "Ireland")!;
    expect(ie.documented).toBe("1 tour date · 1 city · 2022");
    expect(ie.big?.line).toBe("3Arena, Dublin · 17 Mar 2022 · 7,504 tickets");
  });

  it("/api/v1/tours counts nine Space Drift shows and carries the date", async () => {
    const body = await GET().json();
    const sd = body.data.tours.find((t: { name: string }) => t.name === "Space Drift World Tour");
    expect(sd.shows).toBe(9);
    expect(sd.dates).toContainEqual({ date: "Mar 17, 2022", venue: "3Arena", city: "Dublin", country: "Ireland", capacity: 13000 });
  });
});
