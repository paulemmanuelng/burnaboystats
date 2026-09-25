import { artistBySlug, priceRelease } from "../app/lib/certUnits";
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { unsourcedBodies, disputedCounts } from "../app/data/rejectedClaims";
import { ceremonies } from "../app/data/awards";

// This list publishes what the site refused to publish, which makes a stale
// entry uniquely embarrassing: it would be the site claiming it could not
// source something it now carries. That is not hypothetical — an earlier pass
// rejected a tenth Headies win for want of a source, a later one found it (2012
// Rookie of the Year, shared with Dammy Krane) and added it, and the rejection
// was nearly published anyway.

const winsFor = (fragment: string) =>
  ceremonies
    .filter((c) => c.name.toLowerCase().includes(fragment.toLowerCase()))
    .reduce((n, c) => n + c.noms.filter((x) => x.won).length, 0);

describe("rejected claims are still rejected", () => {
  it("names no body the site has since added", () => {
    // Each unsourced body must be absent from awards.ts. If one appears there,
    // the claim was sourced after all and this entry has to go.
    // Exact names, not substrings. The claim is that a body by THAT NAME has no
    // source — and the site does carry a "Ghana Music Awards" (Accra) and a
    // "Ghana Music Awards UK", neither of which is the "Ghana Music Awards USA"
    // being rejected. A substring match called that a contradiction; it is not.
    const names = new Set(ceremonies.map((c) => c.name.toLowerCase()));
    const contradicted = unsourcedBodies.filter((r) => {
      const key = r.claim.toLowerCase().replace(/[“”"]/g, "").split(" (")[0].trim();
      return names.has(key);
    });
    expect(
      contradicted.map((c) => c.claim),
      "listed as unsourced but present in awards.ts"
    ).toEqual([]);
  });

  it("quotes the site's real figure in every disputed count", () => {
    // "AFRIMMA — 10 wins" is only a useful rejection while the site says 8.
    expect(winsFor("AFRIMMA")).toBe(8);
    expect(winsFor("Metro FM")).toBe(3);
    expect(winsFor("BMI")).toBe(1);
    expect(winsFor("Galaxy")).toBe(1);
    // Four award-wins disputes above, plus one chart-position dispute added
    // 28 Aug 2026: "Dai Dai — No. 2 on US Rhythmic radio". Mediabase's own
    // chart had it at No. 4 that week, and Mediabase is a different chart
    // from Billboard's Rhythmic Airplay (No. 3 then; both charts reached
    // No. 1 in September 2026), and Billboard's is the peak this site
    // publishes. It carries no win count, so winsFor() does not apply to it.
    // Seven since 14 Sep 2026: two more that carry no win count — the African
    // Giant "first ever certified Nigerian album" superlative (BPI: Silver
    // 18 Sep 2020, Gold 22 Jul 2022; Sade and Keziah Jones precede it) and the
    // circulating "6,050,000 units worldwide" for "Dai Dai", whose figure is
    // derived from priceRelease() and must match what the compare page prices.
    // Six since 24 Sep 2026: the Rhythmic entry is gone. The site now publishes
    // No. 1 on Billboard's Rhythmic Airplay (5 and 12 Sep charts), so a
    // circulating "No. 2" sits BELOW the site's figure and no longer belongs
    // under "Counts that circulate higher than ours".
    expect(disputedCounts.length).toBe(6);
    expect(disputedCounts.filter((c) => /rhythmic/i.test(`${c.claim} ${c.reason}`)).length).toBe(0);
    const units = disputedCounts.find((c) => /6,050,000/.test(c.claim));
    const dd = priceRelease(artistBySlug("burna-boy")!, "Dai Dai")!;
    expect(units?.reason).toContain(`at least ${dd.total.toLocaleString("en-US")} certified units`);
    expect(units?.reason).toContain("publishes no worldwide total");
  });

  it("does not reject the Headies count the site now carries", () => {
    // The specific trap. The Headies stand at 10; nothing here may say otherwise.
    expect(winsFor("Headies")).toBe(10);
    const all = [...unsourcedBodies, ...disputedCounts].map((r) => r.claim.toLowerCase());
    expect(all.some((c) => c.includes("headies"))).toBe(false);
  });

  // FIFA's own announcement names Madonna, Shakira, BTS and Justin Bieber as
  // the co-headliners of the World Cup Final halftime show and says Burna Boy
  // "will also appear"; the site's records say "perform at" — but four pages
  // and the timeline said "headline" until 17 Sep 2026. No sentence may pair
  // the two again.
  it("never calls the World Cup Final halftime appearance a headline slot", () => {
    const files = ["app/data/timeline.ts", "app/page.tsx", "app/components/MobileHome.tsx", "app/faq/page.tsx", "app/data/faqs.ts", "app/data/firsts.ts", "app/data/tours.ts", "app/about/page.tsx"];
    const offenders: string[] = [];
    for (const f of files) {
      const text = readFileSync(join(process.cwd(), f), "utf8");
      for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
        // He DID headline the NBA All-Star halftime (2023) and does the NFL
        // Paris one (Oct 2026), and the FAQ pairs the opening-ceremony headline
        // slot with the Final's "perform at" in one sentence — those stand.
        if (/opening ceremony|NFL|NBA/i.test(sentence)) continue;
        if (/halftime/i.test(sentence) && /headlin/i.test(sentence)) offenders.push(`${f}: ${sentence.trim().slice(0, 120)}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});
