import { describe, it, expect, vi, afterEach } from "vitest";

/**
 * The C-07 hazard (debug pass 4 Oct 2026, simulated by the verifier with the
 * site's own modules): Burna Boy's second 3Arena night, 4 Dec 2022, belongs to
 * the Love, Damini run, which does not list it yet. The On This Day gross join
 * matched a revenue row on venue and year only, so listing that date would
 * have printed the March Space Drift night's $378,802 from 7,504 tickets on
 * /on-this-day/4-december. Here the date is added for real — the tours module
 * is swapped for one carrying it — and the join is read off the result.
 */

const DEC_4 = { date: "Dec 4, 2022", venue: "3Arena", city: "Dublin", country: "Ireland", cap: 13000 };

afterEach(() => {
  vi.doUnmock("../app/data/tours");
  vi.resetModules();
});

async function eventsWithDecemberListed() {
  vi.resetModules();
  vi.doMock("../app/data/tours", async (orig) => {
    const real = await orig<typeof import("../app/data/tours")>();
    return {
      ...real,
      tours: real.tours.map((t) =>
        t.name === "Love, Damini Tour" ? { ...t, dates: [...(t.dates ?? []), DEC_4] } : t,
      ),
    };
  });
  return (await import("../app/lib/onThisDay")).onThisDayEvents;
}

describe("a second night at a grossed venue never takes the first night's gross", () => {
  it("4 December 2022 at 3Arena prints no gross; 17 March keeps its own", async () => {
    const events = await eventsWithDecemberListed();
    const dec = events.find((e) => e.id === "show:2022-12-04:3arena")!;
    expect(dec).toBeDefined();
    expect(dec.detail).toBe("Love, Damini Tour");
    expect(dec.detail).not.toMatch(/\$378,802|7,504 tickets/);
    expect(dec.href).toBe("/records/tours");
    const mar = events.find((e) => e.id === "show:2022-03-17:3arena")!;
    expect(mar.detail).toBe("Space Drift World Tour · $378,802 from 7,504 tickets");
  });

  it("negative control: a venue-and-year join, as it shipped, would have handed December the March gross", async () => {
    const { revenueShows } = await import("../app/data/tourRevenue");
    // onThisDay.ts at 3e4dedf4: rows matched on artist, venue and year only.
    const shippedJoin = revenueShows.filter((r) => r.artist === "Burna Boy" && r.venue === DEC_4.venue && r.year === "2022");
    expect(shippedJoin.map((r) => r.revenue)).toEqual([378802]);
  });
});
