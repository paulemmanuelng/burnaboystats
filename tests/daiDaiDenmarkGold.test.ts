import { describe, it, expect } from "vitest";
import { allItems, certHistory, totalAwards, daiDaiCertCount, COUNTRIES } from "../app/data/certifications";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { updates } from "../app/data/updates";
import { comparableArtists, priceArtist, priceRelease } from "../app/lib/certUnits";
import { priceCountry, countryFromSlug } from "../app/lib/certCountry";

/**
 * "Dai Dai" Gold in Denmark, 4 Oct 2026.
 *
 * Read on Hitlisten (hitlisten.nu), IFPI Danmark's own official chart: Track
 * Top-40 "Uge 38 - 2026" prints "SHAKIRA & BURNA BOY | DAI DAI | SONY MUSIC |
 * GULD" at No. 32, and week 37 prints the same row with no badge. The chart
 * prints no award date and IFPI Danmark's register ran only to 22.09.2026 with
 * no row for the song, so the plaque is dated by the read: the feed entry is
 * 4 Oct and the log row carries no `date` (CertEvent.date is the register's
 * award day, never a read day).
 *
 * Before this plaque the site shipped 249 plaques for Burna Boy, 17 of them on
 * "Dai Dai" — the figures the feed's 4 Oct entry counts on from.
 */
const SHIPPED_TOTAL = 249;
const SHIPPED_DAI_DAI = 17;

const daiDai = allItems.find((r) => r.title === "Dai Dai")!;
const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
const OPTS = { includeNigeria: true, includeFeatures: true };

describe("Dai Dai: Gold in Denmark", () => {
  it("holds one Danish plaque, Gold, issued by IFPI Danmark itself", () => {
    expect(daiDai.credit).toBe("Shakira & Burna Boy");
    expect(daiDai.certs.filter((c) => c.c === "DK")).toEqual([{ c: "DK", level: "Gold" }]);
    // No `body` override: the issuer is the country's own body.
    expect(COUNTRIES.DK.body).toBe("IFPI Denmark");
  });

  it("logs the award once, as a 2026 Gold with no award date", () => {
    const rows = certHistory.filter((e) => e.title === "Dai Dai" && e.country === "DK");
    expect(rows).toHaveLength(1);
    expect(rows[0]).toEqual({ title: "Dai Dai", credit: "Shakira & Burna Boy", country: "DK", level: "Gold", year: 2026 });
  });

  it("is a new country for the song, not an upgrade, so both totals rise", () => {
    expect(new Set(daiDai.certs.map((c) => c.c)).size).toBe(daiDai.certs.length);
    expect(daiDaiCertCount).toBeGreaterThanOrEqual(SHIPPED_DAI_DAI + 1);
    expect(totalAwards()).toBeGreaterThanOrEqual(SHIPPED_TOTAL + 1);
  });
});

describe("Denmark priced on /compare for it", () => {
  const dkGold = CERT_THRESHOLDS.DK.single!.gold!;

  it("a Danish single Gold is 45,000 units (4.5M streams at IFPI Danmark's 100 a unit)", () => {
    expect(dkGold).toBe(45_000);
    expect(CERT_THRESHOLDS.DK.singleRaw!.gold! / 100).toBe(dkGold);
  });

  it("the song's own figure counts the plaque, priced and not listed", () => {
    const p = priceRelease(burna, "Dai Dai", OPTS)!;
    const dk = p.byCountry.find((l) => l.country === "DK");
    expect(dk).toMatchObject({ units: dkGold, counted: true, releases: 1 });
    expect(p.listed.some((l) => l.country === "DK")).toBe(false);
  });

  it("Burna Boy's Danish line on /compare/in/denmark carries it at 45,000", () => {
    expect(countryFromSlug("denmark")).toBe("DK");
    const board = priceCountry("DK", OPTS);
    const line = board.lines.find((l) => l.artist.slug === "burna-boy")!;
    const plaque = line.plaqueList.find((x) => x.title === "Dai Dai");
    expect(plaque).toMatchObject({ level: "Gold", x: 1, units: dkGold, format: "single", isFeature: false });
    // The country view and the compare engine agree on the line.
    const priced = priceArtist(burna, OPTS).byCountry.find((l) => l.country === "DK")!;
    expect(line.units).toBe(priced.units);
  });

  it("it moves Burna Boy's certified units by exactly the Danish Gold", () => {
    const without = { ...burna, releases: burna.releases.map((r) => (r.title === "Dai Dai" ? { ...r, certs: r.certs.filter((c) => c.c !== "DK") } : r)) };
    expect(priceArtist(burna, OPTS).total - priceArtist(without, OPTS).total).toBe(45_000);
    expect(priceArtist(burna, OPTS).pricedPlaques - priceArtist(without, OPTS).pricedPlaques).toBe(1);
  });
});

// The feed's line is a dated log entry, so its two ordinals are typed (a live
// count would walk them forward with every later plaque). They are held here
// to the figures shipped before it, plus this one plaque.
const WORD_ORDINALS: Record<string, number> = { sixteenth: 16, seventeenth: 17, eighteenth: 18, nineteenth: 19, twentieth: 20 };
function ordinalsIn(text: string): { song: number | null; total: number | null } {
  const song = /An? (\w+) country for the song/.exec(text)?.[1]?.toLowerCase();
  const total = /Burna Boy's (\d+)(?:st|nd|rd|th) plaque/.exec(text)?.[1];
  return { song: song ? (WORD_ORDINALS[song] ?? null) : null, total: total ? Number(total) : null };
}
const holds = (text: string) => {
  const o = ordinalsIn(text);
  return o.song === SHIPPED_DAI_DAI + 1 && o.total === SHIPPED_TOTAL + 1;
};

describe("the 4 Oct feed entry", () => {
  const entry = updates.find((u) => u.date === "2026-10-04" && u.text.includes("Gold in Denmark"))!;

  it("is on the feed, a Certifications headliner linking to the song's page", () => {
    expect(entry).toBeDefined();
    expect(entry).toMatchObject({ category: "Certifications", href: "/dai-dai", big: true });
  });

  it("prints the threshold's own units, not a typed copy", () => {
    expect(entry.text).toContain(`${CERT_THRESHOLDS.DK.single!.gold!.toLocaleString("en-US")} units`);
  });

  it("counts an eighteenth country and a 250th plaque: the shipped figures plus one", () => {
    expect(ordinalsIn(entry.text)).toEqual({ song: 18, total: 250 });
    expect(holds(entry.text)).toBe(true);
  });

  it("negative control: the shipped Germany line fails the same check", () => {
    const de = "“Dai Dai” is Gold in Germany — BVMI's own database lists Shakira & Burna Boy's single at 1x Gold, 300,000 units. A seventeenth country for the song, and Burna Boy's 239th plaque.";
    expect(updates.some((u) => u.text === de)).toBe(true);
    expect(ordinalsIn(de)).toEqual({ song: 17, total: 239 });
    expect(holds(de)).toBe(false);
  });
});
