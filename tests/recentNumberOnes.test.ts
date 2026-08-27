import { describe, it, expect } from "vitest";
import { arrivalsIn } from "../app/lib/recentNumberOnes";

// The homepage badges a country cell as a fresh No. 1 from the updates feed.
// It used to decide that by asking whether the country's name appeared ANYWHERE
// in an update that contained No.-1 wording — which is exactly the mistake the
// module's own doc comment warns against. One real feed entry carries a "tops
// the" clause and three other countries at No. 14, No. 26 and No. 21; all four
// were published as new No. 1 arrivals, and the homepage announced "4 charts
// changed this week".

describe("arrivalsIn binds a country to the No.-1 clause", () => {
  it("takes only the country that actually topped, from the real feed entry", () => {
    const text =
      "No.1 in the Middle East and Luxembourg: “Dai Dai” tops the Official MENA Chart's " +
      "Top 20 and Luxembourg's Billboard chart, debuts at No.14 in Egypt and climbs to " +
      "new peaks of No.26 in Hungary and No.21 in Israel.";
    const got = arrivalsIn(text);
    expect(got).toContain("Luxembourg");
    for (const notArrived of ["Egypt", "Hungary", "Israel"]) {
      expect(got, `${notArrived} did not reach No. 1 in this update`).not.toContain(notArrived);
    }
  });

  it("does not treat a new peak as an arrival", () => {
    // A No. 5 on a platform chart is not an official No. 1.
    const text = "“Dai Dai” tops the Spotify daily chart, and hits a new No. 5 peak in Costa Rica.";
    expect(arrivalsIn(text)).not.toContain("Costa Rica");
  });

  it("still finds several genuine arrivals in one update", () => {
    const text = "“Dai Dai” tops the charts in France and Portugal, and rises in Japan.";
    const got = arrivalsIn(text);
    expect(got).toEqual(expect.arrayContaining(["France", "Portugal"]));
    expect(got).not.toContain("Japan");
  });

  it("never reports the Billboard Global charts as a country", () => {
    const text = "“Dai Dai” tops the Billboard Global 200 for a ninth week.";
    const got = arrivalsIn(text);
    expect(got.some((n) => n.toLowerCase().includes("global"))).toBe(false);
  });

  it("returns nothing when no clause reports a No. 1", () => {
    expect(arrivalsIn("“Dai Dai” climbs to No. 3 in Sweden and No. 7 in Norway.")).toEqual([]);
  });
});
