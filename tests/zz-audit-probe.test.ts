import { describe, it } from "vitest";
import { writeFileSync } from "node:fs";
import { coverFor } from "../app/lib/covers";
import { allChartItems } from "../app/data/charts";
import { allItems } from "../app/data/certifications";
import { afrobeatsArtists } from "../app/data/afrobeats";

describe("probe2", () => {
  it("official chart + cert releases with no art", () => {
    const out: string[] = [];
    const missChart = allChartItems.filter((r) => !coverFor(r.title));
    out.push(`CHART total ${allChartItems.length} missing ${missChart.length}: ${missChart.map((r) => r.title).join(" | ")}`);
    const missCert = allItems.filter((r) => !coverFor(r.title));
    out.push(`CERT total ${allItems.length} missing ${missCert.length}: ${missCert.map((r) => r.title).join(" | ")}`);
    for (const a of afrobeatsArtists) {
      const mc = a.charts.filter((r) => !r.cover);
      const mr = a.releases.filter((r) => !r.cover);
      if (mc.length || mr.length)
        out.push(`AFRO ${a.slug} charts-missing ${mc.length}/${a.charts.length} releases-missing ${mr.length}/${a.releases.length}`);
    }
    writeFileSync("/tmp/probe2.txt", out.join("\n"));
  });
});
