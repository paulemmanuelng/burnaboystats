import { describe, it, expect } from "vitest";
import { allChartItems, weeksAtPeak, weeksOnChart } from "../app/data/charts";
import { updates } from "../app/data/updates";
import { arrivalsIn } from "../app/lib/recentNumberOnes";

/**
 * "Dai Dai" in Germany, re-read 10 Oct 2026.
 *
 * GfK Entertainment's own release of 2 Oct ("13 Wochen am Stück führte …")
 * closed the run at No. 1 at thirteen, and its release of 9 Oct has the song at
 * No. 2 again. germancharts.de prints the chart of 02.10.2026 as
 * "2 (1) Shakira x Burna Boy Dai dai 19. Woche". Offizielle Deutsche Charts'
 * news of 8 Oct names it the most successful hit of the third quarter, by
 * GfK's July–September count, and its 13 straight weeks the longest unbroken
 * run at the top since "Despacito" (17 in a row, 2017).
 */

/** The line germancharts.de printed for the chart of 02.10.2026, verbatim. */
const MIRROR_0210 = "2 (1) Shakira x Burna Boy Dai dai 19. Woche";
const printedWeeks = (line: string) => Number(/(\d+)\. Woche/.exec(line)?.[1] ?? NaN);

/** The run the feed line states: "its 13 straight weeks at No. 1". */
const statedRun = (text: string) => Number(/(\d+) straight weeks at No\. 1\b/.exec(text)?.[1] ?? NaN);

/** weeksAtPeak / weeks off a charts.ts row literal, as the file writes them. */
const rowField = (row: string, field: "weeksAtPeak" | "weeks") => Number(new RegExp(`\\b${field}: (\\d+)`).exec(row)?.[1] ?? NaN);

const q3 = updates.find((u) => u.text.startsWith("Germany's No. 1 single of the third quarter"))!;

describe("Dai Dai, Germany: the closed run and the weeks on chart", () => {
  it("13 weeks at No. 1, final, and 19 weeks on the chart as the mirror prints them to 2 October", () => {
    expect(weeksAtPeak("Dai Dai", "DE")).toBe(13);
    expect(weeksOnChart("Dai Dai", "DE")).toBe(printedWeeks(MIRROR_0210));
    expect(weeksOnChart("Dai Dai", "DE")).toBe(19);
    const note = allChartItems.find((r) => r.title === "Dai Dai")!.entries.find((e) => e.c === "DE")!.note!;
    expect(note).toMatch(/^thirteen weeks at No\.1, consecutive/);
    expect(note).toContain("so the run at the top is final");
    expect(note).toContain("19 weeks on chart as printed to 2 October");
    // A count is not a print: the 9 Oct chart's W column was not on the mirror.
    expect(note).not.toMatch(/\b20 weeks\b/);
  });

  it("negative control: the row origin/main shipped on 10 Oct 2026 (18 weeks) disagrees with the printed 19", () => {
    const shipped =
      '{ c: "DE", peak: 1, weeksAtPeak: 13, weeks: 18, note: "thirteen weeks at No.1, consecutive - 3 July to 25 September 2026, the newest issue read at two sources; 18 weeks on chart as printed to 25 September" }';
    expect(rowField(shipped, "weeks")).not.toBe(printedWeeks(MIRROR_0210));
    expect(rowField(shipped, "weeksAtPeak")).toBe(weeksAtPeak("Dai Dai", "DE"));
  });
});

describe("Dai Dai, Germany: the third-quarter feed line", () => {
  it("is logged on 8 October, under Charts, linking the song's page", () => {
    expect(q3).toMatchObject({ date: "2026-10-08", category: "Charts", href: "/dai-dai" });
    expect(q3.text.length).toBeLessThanOrEqual(300);
    expect(q3.text).toContain("GfK Entertainment's July–September 2026 count");
    expect(q3.text).toContain("since “Despacito” held 17 in 2017");
  });

  it("states the run charts.ts holds", () => {
    expect(statedRun(q3.text)).toBe(weeksAtPeak("Dai Dai", "DE"));
  });

  it("negative control: the DE row as it shipped before the 2 Oct 2026 sweep (11 weeks) would not reconcile", () => {
    // app/data/charts.ts at fd296a12^, verbatim.
    const shipped = '{ c: "DE", peak: 1, weeksAtPeak: 11, weeks: 16 }';
    expect(statedRun(q3.text)).not.toBe(rowField(shipped, "weeksAtPeak"));
  });

  it("does not badge Germany as a fresh No. 1 on the home board", () => {
    expect(arrivalsIn(q3.text)).toEqual([]);
    // Not vacuous: the feed's Poland line of 29 Aug 2026 (still in updates.ts),
    // a real arrival, is read as one.
    const poland = updates.find((u) => u.text.startsWith("“Dai Dai” tops the official singles chart in Poland"))!;
    expect(arrivalsIn(poland.text)).toEqual(["Poland"]);
  });

  it("logs no German streaming total past the published one: the 100 million is GfK's forecast", () => {
    // offiziellecharts.de, 8 Oct 2026: "dürfte … in wenigen Tagen die Marke von
    // 100 Millionen Streams knacken" — a forecast, so it is a watchlist item.
    const german = updates.filter((u) => /German|Germany/.test(u.text));
    expect(german.filter((u) => /100 million|100M|100,000,000/i.test(u.text))).toEqual([]);
    // The published figure stands: the Sommerhit line's "close to 60 million".
    expect(german.some((u) => u.text.includes("close to 60 million German streams"))).toBe(true);
  });
});
