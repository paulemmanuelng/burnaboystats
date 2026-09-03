import { describe, it, expect } from "vitest";
import { allChartItems } from "../app/data/charts";
import { allItems } from "../app/data/certifications";

// charts.ts and certifications.ts each carry their own copy of a release's
// year and credit, and each renders it as the same subtitle line ("credit ·
// year") — ChartExplorer, CertExplorer and MobileCerts all build it the same
// way. So the same song can be dated two different ways on two pages, and on
// 3 Sep 2026 two were:
//
//   Giza     charts 2023 "feat. Seyi Vibez"  vs  certs 2025, no credit.
//            The cert row came in with the Feb 2026 TCSN batch and took that
//            batch's shape; Giza is an I Told Them… track (2023), and this
//            file's own certHistory row already carried the Seyi Vibez credit.
//   Rollin'  charts 2019  vs  certs 2021. BPI's register dates MIST FT BURNA
//            BOY — ROLLIN' to 23 June 2021 and the OCC run behind its UK #46
//            entered 8 July 2021, so 2019 could not have charted at all.
//
// Neither was visible from inside either file. This is the join.

interface Row {
  title: string;
  credit?: string;
  year?: number;
}

const chartsByTitle = new Map<string, Row[]>();
for (const r of allChartItems) {
  const rows = chartsByTitle.get(r.title) ?? [];
  rows.push(r);
  chartsByTitle.set(r.title, rows);
}

/** Every (certification row, chart row) pair that describes the same title. */
const shared: [Row, Row][] = allItems.flatMap((cert) =>
  (chartsByTitle.get(cert.title) ?? []).map((chart) => [cert, chart] as [Row, Row]),
);

describe("releases carried in both charts.ts and certifications.ts", () => {
  it("finds the shared titles at all", () => {
    // If this drops to zero the join has silently stopped matching — a title
    // rename on one side, or a refactor of either export — and every assertion
    // below would pass vacuously.
    expect(shared.length).toBeGreaterThanOrEqual(30);
  });

  it("gives each release the same year in both files", () => {
    const clashes = shared
      .filter(([cert, chart]) => cert.year !== undefined && chart.year !== undefined)
      .filter(([cert, chart]) => cert.year !== chart.year)
      .map(([cert, chart]) => `${cert.title}: certs ${cert.year} vs charts ${chart.year}`);
    expect(clashes, `release years disagree across the two files:\n${clashes.join("\n")}`).toEqual(
      [],
    );
  });

  it("dates a release in both files or neither", () => {
    // A year on one page and a bare title on the other reads as missing data
    // rather than as the same release, and hides the mismatch above from view.
    const clashes = shared
      .filter(([cert, chart]) => (cert.year === undefined) !== (chart.year === undefined))
      .map(([cert, chart]) => `${cert.title}: certs ${cert.year} vs charts ${chart.year}`);
    expect(clashes, `one file dates these and the other does not:\n${clashes.join("\n")}`).toEqual(
      [],
    );
  });

  it("credits a release in both files or neither", () => {
    // Presence, not wording. The two files bill the same collaborators
    // differently on purpose — certifications.ts abbreviates a long line
    // ("Coldplay ft. Burna Boy & others" for We Pray, "Master KG, Nomcebo &
    // Burna Boy" for Jerusalema (Remix)) and states Burna Boy's own billing
    // ("with Byron Messia", "TitoM & Yuppe ft. S.N.E & Burna Boy") where
    // charts.ts prints the chart's full credit line. Those four are style, not
    // drift, so equality here would only invite someone to flatten them.
    //
    // A credit that exists on one side and not the other is different: it is
    // the same release shown as a collaboration on one page and as a solo
    // record on the other, which is exactly how Giza was wrong.
    const clashes = shared
      .filter(([cert, chart]) => (cert.credit === undefined) !== (chart.credit === undefined))
      .map(
        ([cert, chart]) =>
          `${cert.title}: certs ${JSON.stringify(cert.credit)} vs charts ${JSON.stringify(chart.credit)}`,
      );
    expect(
      clashes,
      `one file credits these and the other does not:\n${clashes.join("\n")}`,
    ).toEqual([]);
  });
});
