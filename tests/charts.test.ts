import { describe, it, expect } from "vitest";
import {
  CHART_COUNTRIES,
  allChartItems,
  chartEntryCount,
  chartedReleaseCount,
  chartCountryCount,
  numberOnes,
  numberOneReleases,
  daiDaiNumberOnes,
  daiDaiChartEntryCount,
  numberOneCountryCount,
  chartSourceSplit,
} from "../app/data/charts";

// The chart dataset drives the headline numbers on the homepage, /records/charts,
// /records/by-the-numbers, /faq, /methodology, the Dai Dai story and the stat
// cards, and it changes more often than anything else on the site. These guards
// exist so a hand-edit can't quietly break a page or a published figure.

describe("chart data integrity", () => {
  // ChartExplorer does `countries[e.c].name` with no fallback, so an entry
  // pointing at a missing code is a client-side TypeError, not a blank cell.
  it("every entry references a known country code", () => {
    for (const r of allChartItems) {
      for (const e of r.entries) {
        expect(CHART_COUNTRIES[e.c], `${r.title} → ${e.c}`).toBeTruthy();
      }
    }
  });

  it("every country code is used by at least one release", () => {
    const used = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
    for (const code of Object.keys(CHART_COUNTRIES)) {
      expect(used.has(code), `unused country: ${code}`).toBe(true);
    }
  });

  it("no release lists the same country twice", () => {
    for (const r of allChartItems) {
      const codes = r.entries.map((e) => e.c);
      expect(new Set(codes).size, r.title).toBe(codes.length);
    }
  });

  it("peaks are positive whole numbers", () => {
    for (const r of allChartItems) {
      for (const e of r.entries) {
        expect(Number.isInteger(e.peak), `${r.title} → ${e.c}`).toBe(true);
        expect(e.peak, `${r.title} → ${e.c}`).toBeGreaterThan(0);
      }
    }
  });

  // /records/charts and /api state in print that airplay listings are excluded
  // except where a country publishes no non-airplay national chart at all.
  // Keep the data honest with the claim: airplay is allowed ONLY for these
  // countries, and each must say so in its body string. Adding another is a
  // deliberate act that has to come through here. The Aug 2026 Dai Dai sweep
  // added the Monitor Latino belt (GT/HN/NI/PY/PR), the TopHit states
  // (EE/KZ/MD/UA), and Radiomonitor Türkiye (TR) — every one verified to
  // publish no non-airplay national chart. Russia is NOT here: its TopHit
  // chart is streaming.
  const AIRPLAY_EXCEPTIONS = new Set([
    "IL", "BG", "UY", "VE",
    // LB and PA were carried here as ordinary national charts until 3 Sep 2026.
    // Both are airplay and neither body string said so, so the check below —
    // which reads the body string — never saw them. Verified at source before
    // declaring: Lebanon's Official Lebanese Top 20 is Ipsos radio monitoring,
    // and Panama's PRODUCE Top 50 Internacional is BMAT monitoring of 60 radio
    // and TV channels. Each qualifies because the country publishes no
    // non-airplay national chart: IFPI's MENA chart is regional with no Lebanon
    // edition, and Panama's alternative (Monitor Latino) is airplay too.
    "LB", "PA",
    "EE", "GT", "HN", "NI", "PY", "PR", "TR", "KZ", "MD", "UA",
  ]);
  // SV and DO used to sit in this set. Both countries were retracted on 2 Sep
  // 2026 — the entries came from a fan round-up rather than a chart — so the
  // declarations are gone with them. The set is filtered against the live data
  // below, which means a stale code fails nothing and simply lingers; these two
  // lingered for a day.

  /**
   * Countries whose national chart is KNOWN to be airplay, by research.
   *
   * This is the part that actually closes the hole. The sibling check decides
   * what is airplay by looking for the word "airplay" in the body string,
   * which only works while every airplay chart admits to it. Lebanon and
   * Panama did not — their bodies read "The Official Lebanese Top 20" and
   * "PRODUCE International Chart", which sound like national industry charts —
   * so they carried three career No. 1s past the rule unnoticed.
   *
   * Keying on the COUNTRY rather than on the string is what makes this bite:
   * the knowledge lives here, where it cannot be edited away by rewording a
   * body. Sources checked 3 Sep 2026 — Lebanon: Ipsos automated song
   * recognition across Lebanese FM. Panama: BMAT across 60 radio and TV
   * channels, 50 seconds to count a play.
   */
  const KNOWN_AIRPLAY: Record<string, string> = {
    LB: "Ipsos radio monitoring (Official Lebanese Top 20)",
    PA: "BMAT radio/TV monitoring (PRODUCE Top 50 Internacional)",
  };

  /** Monitors whose presence in a body string also implies airplay. */
  const AIRPLAY_MONITORS = [
    "Ipsos", "BMAT", "Radiomonitor", "TopHit", "Monitor Latino", "Mediabase",
    "Record Report", "PROPHON",
  ];

  it("a chart compiled by a broadcast monitor is declared as airplay", () => {
    // The sibling test trusts the body string to say "airplay". This one does
    // not: it asks who compiled the chart. Lebanon (Ipsos) and Panama (BMAT)
    // are the reason it exists — both read as national industry charts and sat
    // undeclared, carrying three career No. 1s past the rule.
    const undeclared: string[] = [];
    // Known-airplay countries first: checked by code, so rewording the body
    // cannot hide one. This is what would have caught LB and PA originally.
    for (const [code, why] of Object.entries(KNOWN_AIRPLAY)) {
      const c = (CHART_COUNTRIES as Record<string, { body: string }>)[code];
      if (!c) continue; // country retracted — nothing to declare
      if (!/airplay/i.test(c.body))
        undeclared.push(`${code}: ${why} — the body must say airplay, reads "${c.body}"`);
      if (!AIRPLAY_EXCEPTIONS.has(code))
        undeclared.push(`${code}: ${why} — not a declared exception`);
    }
    for (const [code, c] of Object.entries(CHART_COUNTRIES)) {
      const monitor = AIRPLAY_MONITORS.find((m) => c.body.includes(m));
      if (!monitor) continue;
      // A body that names its basis has already answered the question. TopHit
      // is on the monitor list because it monitors radio, but it also
      // publishes a streaming chart, and Russia's row says "TopHit streaming"
      // — a declared non-airplay product, not a chart hiding what it is.
      if (/streaming|sales|downloads|consumption/i.test(c.body)) continue;
      if (!/airplay/i.test(c.body))
        undeclared.push(`${code}: compiled by ${monitor} but the body never says airplay — "${c.body}"`);
      if (!AIRPLAY_EXCEPTIONS.has(code))
        undeclared.push(`${code}: compiled by ${monitor} but not a declared exception`);
    }
    expect(undeclared).toEqual([]);
  });

  it("only the declared exceptions are tracked on an airplay chart", () => {
    const onAirplay = Object.entries(CHART_COUNTRIES)
      .filter(([, c]) => /airplay/i.test(c.body))
      .map(([code]) => code);
    expect(new Set(onAirplay)).toEqual(
      new Set([...AIRPLAY_EXCEPTIONS].filter((c) => onAirplay.includes(c)))
    );
    for (const code of onAirplay) {
      expect(AIRPLAY_EXCEPTIONS.has(code), `${code} is on an airplay chart but not declared`).toBe(
        true
      );
    }
  });

  // The carve-out only holds if the country really has no alternative. Croatia
  // is the worked example: HDU's Top lista has "Dai Dai" at No. 1 on airplay,
  // but Billboard Croatia Songs exists, so Croatia is NOT an exception and must
  // never be added as one.
  it("does not treat Croatia as an airplay exception", () => {
    expect(AIRPLAY_EXCEPTIONS.has("HR")).toBe(false);
    expect(/airplay/i.test(CHART_COUNTRIES.HR?.body ?? "")).toBe(false);
  });

  it("derived totals stay consistent with the raw entries", () => {
    expect(chartedReleaseCount).toBe(allChartItems.length);
    expect(chartEntryCount).toBe(
      allChartItems.reduce((n, r) => n + r.entries.length, 0)
    );
    expect(chartCountryCount).toBe(
      new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size
    );
    expect(numberOnes).toBe(
      allChartItems.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0)
    );
    expect(numberOneReleases).toBe(
      allChartItems.filter((r) => r.entries.some((e) => e.peak === 1)).length
    );
  });

  it("matches the published headline figures", () => {
    // 4 Aug 2026 Dai Dai sweep: +11 territories (EE at No.1 on TopHit, the
    // Monitor Latino belt, TR/KZ/MD/UA/RU), Ecuador's IFPI LatAm chart turned
    // its Billboard #4 into a #1, and UY/MY/HR peaks improved (2/5/13).
    expect(chartEntryCount).toBe(278); // 2 Sep 2026: -2, the unsupported Dominican and Salvadoran No. 1s removed (RETRACTIONS #7, #8)
    expect(numberOnes).toBe(47); // 2 Sep 2026: Poland took this to 49, then the Dominican and Salvadoran No. 1s came out (RETRACTIONS #7, #8)
    expect(chartCountryCount).toBe(69); // -2: the Dominican Republic and El Salvador each left with their only entry
  });
});

/**
 * `chartSourceSplit` is published on /methodology and /records/charts — in a
 * stat panel, in a paragraph, and in the source tag on the methodology page —
 * and it had no test at all.
 *
 * It shipped wrong. The classifier had three buckets and no notion of the
 * airplay carve-out: anything whose body did not begin "Billboard" was counted
 * as a national industry body's chart, so all fifteen airplay charts plus
 * Russia's TopHit streaming row were published as "national industry-body
 * charts" — 53 of them, where the honest figure is 37. Monitor Latino is not
 * Guatemala's industry body and TopHit is not Ukraine's, and the same two pages
 * state the airplay rule a paragraph away from the number that broke it.
 */
describe("where the tracked charts come from", () => {
  // The territories whose principal chart is NOT a national industry body's
  // own, named one by one so a reclassification has to be a deliberate edit
  // here — the same standard AIRPLAY_EXCEPTIONS above is held to.
  const NOT_NATIONAL_BODIES = new Set([
    // Airplay carve-outs: the country publishes no non-airplay national chart.
    "LB", "PA", "BG", "UY", "VE", "EE", "GT", "HN", "NI", "PY", "PR", "TR", "KZ", "MD", "UA",
    // Russia is the odd one: TopHit's Russian chart is streaming, not airplay,
    // so no "airplay" in its body — but TopHit is a commercial monitor and no
    // industry body has published a Russian chart since IFPI left in 2022.
    "RU",
  ]);

  it("counts each tracked chart once, into the bucket it belongs in", () => {
    const used = [...new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)))];
    const expected = { nationalBody: 0, airplayMonitor: 0, billboardCountry: 0, global: 0 };
    for (const code of used) {
      const body = CHART_COUNTRIES[code].body;
      // Monitors are tested before Billboard here and after it in the
      // classifier, so pin the fact that makes the two orders equivalent.
      expect(
        NOT_NATIONAL_BODIES.has(code) && /^Billboard/i.test(body),
        `${code} is both a monitor chart and a Billboard chart — the two orders no longer agree`
      ).toBe(false);

      if (code === "GLB" || code === "GLBX") expected.global += 1;
      else if (NOT_NATIONAL_BODIES.has(code)) expected.airplayMonitor += 1;
      else if (/^Billboard/i.test(body)) expected.billboardCountry += 1;
      else expected.nationalBody += 1;
    }
    expect(chartSourceSplit).toEqual(expected);
    const total =
      expected.nationalBody + expected.airplayMonitor + expected.billboardCountry + expected.global;
    expect(total, "every tracked territory lands in exactly one bucket").toBe(chartCountryCount);
  });

  it("never files an airplay chart under the national industry bodies", () => {
    for (const [code, c] of Object.entries(CHART_COUNTRIES)) {
      if (!/airplay/i.test(c.body)) continue;
      expect(
        NOT_NATIONAL_BODIES.has(code),
        `${code} is tracked on an airplay chart ("${c.body}") but the published split counts it as a national industry body`
      ).toBe(true);
    }
  });

  it("matches the published split", () => {
    // Was { nationalBody: 53, billboardCountry: 14, global: 2 } — the 53 folded
    // in the 16 below. 37 + 16 + 14 + 2 = 69 tracked territories.
    expect(chartSourceSplit).toEqual({
      nationalBody: 37,
      airplayMonitor: 16,
      billboardCountry: 14,
      global: 2,
    });
  });
});

describe("Dai Dai", () => {
  const daiDai = allChartItems.find((r) => r.title === "Dai Dai")!;

  it("is present and credited to Shakira", () => {
    expect(daiDai).toBeTruthy();
    expect(daiDai.credit).toContain("Shakira");
  });

  // daiDaiNumberOnes powers "N countries at No. 1" on the Dai Dai page, the FAQ
  // and the stat card — it must count countries only, never the two global charts.
  it("counts country No. 1s without the Billboard global charts", () => {
    expect(daiDaiNumberOnes).toBe(
      daiDai.entries.filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX").length
    );
    expect(daiDaiChartEntryCount).toBe(daiDai.entries.length);
  });

  it("matches the published headline figures", () => {
    // 4 Aug 2026 sweep: +11 territories; Ecuador (IFPI LatAm) and Estonia
    // (TopHit) are the two new country No. 1s.
    expect(daiDaiChartEntryCount).toBe(68);
    expect(daiDaiNumberOnes).toBe(26); // + Poland 29 Aug, - Dominican Republic and El Salvador 2 Sep
  });

  it("tops both Billboard global charts", () => {
    for (const code of ["GLB", "GLBX"]) {
      expect(daiDai.entries.find((e) => e.c === code)?.peak, code).toBe(1);
    }
  });
});

// Two country figures live in this file and they are not interchangeable:
// every territory he has charted in (71) versus the subset where something
// reached No. 1 (33). A home stat tile paired the No. 1s count with the first
// one, which reads as "topped the chart in 71 countries".
describe("the two country figures stay distinct", () => {
  it("counts No. 1 countries as a strict subset of charted territories", () => {
    expect(numberOneCountryCount).toBeLessThan(chartCountryCount);
    const no1 = new Set(
      allChartItems.flatMap((r) => r.entries.filter((e) => e.peak === 1).map((e) => e.c))
    );
    const charted = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
    for (const c of no1) expect(charted.has(c), `${c} at No.1 but not charted`).toBe(true);
    expect(no1.size).toBe(numberOneCountryCount);
  });

  it("never has more No. 1 countries than No. 1 placements", () => {
    expect(numberOneCountryCount).toBeLessThanOrEqual(numberOnes);
  });
});

// The peak map's ramp runs bright-gold (No. 1) to deep-red (No. 100), and two
// captions describe it — one per layout. The mobile one said "darker gold is a
// higher peak", which is the scale backwards. Pin the direction so a caption
// and the ramp cannot disagree again.
describe("peak map colour ramp", () => {
  it("runs bright at No. 1 and dark at No. 100", async () => {
    const src = await import("node:fs").then((fs) =>
      fs.readFileSync("app/components/PeakMap.tsx", "utf8")
    );
    const stops = [...src.matchAll(/\[([\d.]+), \[(\d+), (\d+), (\d+)\]\]/g)].map((m) => ({
      t: Number(m[1]),
      lum: (Number(m[2]) * 299 + Number(m[3]) * 587 + Number(m[4]) * 114) / 1000,
    }));
    expect(stops.length).toBeGreaterThanOrEqual(2);
    const first = stops[0];
    const last = stops[stops.length - 1];
    expect(first.t).toBe(0);
    expect(last.t).toBe(1);
    // t=0 is peak 1. Brighter there, or every caption on the site is wrong.
    expect(first.lum).toBeGreaterThan(last.lum);
  });
});

// isoCodes.ts claims it "covers exactly the countries in CHART_COUNTRIES", and a
// guard was said to enforce it. Neither was true: seventeen charting countries
// had no entry, so the peak map rendered 52 of 69 and dropped the rest without
// erroring. This is that guard.
describe("every charting country can be drawn on the map", () => {
  it("has an ISO numeric for each chart country", async () => {
    const { A2_TO_ISO } = await import("../app/lib/isoCodes");
    const missing = Object.keys(CHART_COUNTRIES)
      .filter((c) => c !== "GLB" && c !== "GLBX")
      .filter((c) => !(c in A2_TO_ISO));
    expect(missing, `chart codes missing from A2_TO_ISO: ${missing.join(", ")}`).toEqual([]);
  });
});
