import { describe, it, expect } from "vitest";
import { allItems, certHistory, totalAwards, daiDaiCertCount, countryCount, COUNTRIES, CERTS_STAMP } from "../app/data/certifications";
import { CERT_THRESHOLDS, thresholdFor } from "../app/data/certThresholds";
import { updates } from "../app/data/updates";
import { afrobeatsArtists, artistBySlug, certCount, countryCount as boardCountryCount, offRegisterPhrase } from "../app/data/afrobeats";
import { comparableArtists, priceArtist, priceRelease, unitsForCert } from "../app/lib/certUnits";
import { priceCountry, countryFromSlug, certCountryCodes, countryCopy } from "../app/lib/certCountry";
import { registerUrl, plaqueSource, certificationRows, CERT_HEADER } from "../app/lib/dataDownloads";
import { burnaLabelPlaques, boardLabelPlaques, boardOffRegisterTotal, certificationRule } from "../app/lib/offRegister";
import { diamondCerts, diamondsElsewhere } from "../app/lib/analysis";
import { findings } from "../app/lib/analysisFindings";
import { topPlaque } from "../app/components/DaiDaiRecord";
import { GET as afrobeatsApi } from "../app/api/v1/afrobeats/route";

/**
 * Turkey as a label-issued market, 7 Oct 2026 (owner's ruling).
 *
 * Turkey has no certification register for singles or streaming — Mü-Yap runs
 * yearly awards only — and Turkish single plaques are label-issued: Sony Music
 * Türkiye awards its own. Paul: label-issued Turkey plaques count, and for
 * fairness Tyla's go in too. So:
 *   • "Dai Dai" 🇹🇷 Diamond, Sony Music Türkiye's ("certified DIAMOND SINGLE
 *     for 75,000 units sold in Türkiye"), and Sony Music's plaque lifts its
 *     🇨🇴 Gold (Sony Music Colombia's) to Platinum;
 *   • Tyla's "Water" 🇹🇷 3× Diamond, read off Epic Records' TYLA plaque (Getty
 *     Images 2206148592, LA, 30 Jan 2025).
 * docs/sweeps/turkey-label-plaques-2026-10-07.md has the evidence.
 *
 * The figures shipped before it, which the feed's ordinals count on from.
 */
const SHIPPED_TOTAL = 250;
const SHIPPED_DAI_DAI = 18;
const SHIPPED_COUNTRIES = 26;
const SHIPPED_TYLA = 75;
const SHIPPED_BOARD = 1_088;

const daiDai = allItems.find((r) => r.title === "Dai Dai")!;
const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
const tyla = artistBySlug("tyla")!;
const OPTS = { includeNigeria: true, includeFeatures: true };
const trDiamond = 75_000;

describe("Dai Dai: Diamond in Turkey, Platinum in Colombia — both label plaques", () => {
  it("Turkey is a country of the site's own, named for the label that issues its plaques, with a link", () => {
    expect(COUNTRIES.TR).toEqual({ name: "Turkey", flag: "🇹🇷", body: "Sony Music Türkiye", url: "https://www.sonymusic.com.tr/" });
    expect(countryCount).toBe(SHIPPED_COUNTRIES + 1);
  });

  it("holds one Turkish plaque, Diamond, marked as the label's own", () => {
    expect(daiDai.certs.filter((c) => c.c === "TR")).toEqual([{ c: "TR", level: "Diamond", body: "Sony Music Türkiye", source: "label" }]);
  });

  it("holds one Colombian plaque, at its current tier: Platinum, Sony Music's", () => {
    expect(daiDai.certs.filter((c) => c.c === "CO")).toEqual([{ c: "CO", level: "Platinum", body: "Sony Music" }]);
  });

  it("logs both as 2026 steps with no award date; the Gold step stays", () => {
    const rows = (code: string) => certHistory.filter((e) => e.title === "Dai Dai" && e.country === code);
    expect(rows("TR")).toEqual([{ title: "Dai Dai", credit: "Shakira & Burna Boy", country: "TR", level: "Diamond", year: 2026, body: "Sony Music Türkiye" }]);
    expect(rows("CO").map((e) => e.level)).toEqual(["Gold", "Platinum"]);
    expect(rows("CO").every((e) => !e.date)).toBe(true);
  });

  it("one new plaque, one new country: Turkey is new, Colombia an upgrade", () => {
    expect(new Set(daiDai.certs.map((c) => c.c)).size).toBe(daiDai.certs.length);
    expect(daiDaiCertCount).toBe(SHIPPED_DAI_DAI + 1);
    expect(totalAwards()).toBe(SHIPPED_TOTAL + 1);
  });

  it("the routes that print his plaques are stamped with the day", () => {
    expect(CERTS_STAMP >= "2026-10-07").toBe(true);
  });

  it("the Dai Dai caption names both Diamond countries, in both editions", () => {
    expect(topPlaque({ diamond: "Diamond", platinum: "Platinum", gold: "Gold", silver: "Silver" }, "en", " in ")).toBe("Diamond in France and Turkey");
    expect(topPlaque({ diamond: "diamante", platinum: "platino", gold: "oro", silver: "plata" }, "es", " en ")).toBe("diamante en Francia y Turquía");
  });
});

describe("Turkey and Colombia on /compare", () => {
  it("a Turkish Diamond single is Sony Music Türkiye's own 75,000; no other Turkish level is published", () => {
    expect(thresholdFor("TR", "single", "Diamond")).toBe(trDiamond);
    for (const tier of ["Silver", "Gold", "Platinum"] as const) expect(thresholdFor("TR", "single", tier)).toBeNull();
    expect(CERT_THRESHOLDS.TR.album).toBeNull();
    expect(CERT_THRESHOLDS.TR.albumExcluded).toBeTruthy();
  });

  it("Dai Dai's Turkish Diamond is COUNTED at 75,000, not listed", () => {
    const p = priceRelease(burna, "Dai Dai", OPTS)!;
    expect(p.byCountry.find((l) => l.country === "TR")).toMatchObject({ units: trDiamond, counted: true, releases: 1 });
    expect(p.listed.some((l) => l.country === "TR")).toBe(false);
  });

  it("Colombia's Platinum stays unpriced, under the same Colombia rule as the Gold", () => {
    const co = daiDai.certs.find((c) => c.c === "CO")!;
    expect(unitsForCert(co, "single").units).toBeNull();
    const p = priceRelease(burna, "Dai Dai", OPTS)!;
    expect(p.listed.find((l) => l.country === "CO")).toMatchObject({ counted: false, top: { level: "Platinum" } });
  });

  it("moves Burna Boy's certified units by exactly 75,000 (Colombia moves nothing)", () => {
    const without = {
      ...burna,
      releases: burna.releases.map((r) => (r.title === "Dai Dai" ? { ...r, certs: r.certs.filter((c) => c.c !== "TR") } : r)),
    };
    expect(priceArtist(burna, OPTS).total - priceArtist(without, OPTS).total).toBe(trDiamond);
  });

  it("Tyla's Water 3× Diamond is 225,000, with the multiplier note", () => {
    const tylaC = comparableArtists.find((a) => a.slug === "tyla")!;
    const line = priceArtist(tylaC, OPTS).byCountry.find((l) => l.country === "TR")!;
    expect(line).toMatchObject({ units: 3 * trDiamond, counted: true });
    expect(line.caveat).toBe(CERT_THRESHOLDS.TR.caveat);
  });

  it("Turkey gets its own country board: Tyla first, Burna Boy second, 300,000 in all", () => {
    expect(certCountryCodes()).toContain("TR");
    expect(countryFromSlug("turkey")).toBe("TR");
    const board = priceCountry("TR");
    expect(board.lines.map((l) => [l.artist.slug, l.units])).toEqual([
      ["tyla", 225_000],
      ["burna-boy", 75_000],
    ]);
    expect(board.units).toBe(300_000);
    expect(board.notCounted).toBe(0);
    expect(countryCopy(board).description).toBe(
      "Every Afrobeats plaque awarded in Turkey, priced at Sony Music Türkiye's own Diamond level — 2 artists, 2 plaques, at least 300,000 certified units.",
    );
  });
});

describe("the CSV, the API and the methodology call them label plaques", () => {
  const col = (row: unknown[], name: (typeof CERT_HEADER)[number]) => row[CERT_HEADER.indexOf(name)];

  it("the CSV names the issuer, prices the units, and links no register — even where the issuer is Turkey's own body", () => {
    const tr = daiDai.certs.find((c) => c.c === "TR")!;
    expect(plaqueSource(tr, COUNTRIES.TR)).toBe("label");
    expect(registerUrl(tr, COUNTRIES.TR)).toBeNull();
    const row = certificationRows.find((r) => col(r, "artist") === "Burna Boy" && col(r, "release") === "Dai Dai" && col(r, "country_code") === "TR")!;
    expect(col(row, "certifying_body")).toBe("Sony Music Türkiye");
    expect(col(row, "certified_units")).toBe(trDiamond);
    expect(col(row, "register_url")).toBeNull();
    expect(col(row, "source")).toBe("label");
    // Negative control: before this edit registerUrl tested only for a
    // DIFFERENT issuer, and offered the label's home page as the register.
    const shippedRegisterUrl = (c: typeof tr, k: typeof COUNTRIES.TR) =>
      c.source === "announcement" ? null : c.body !== undefined && c.body !== k.body ? null : (k.url ?? null);
    expect(shippedRegisterUrl(tr, COUNTRIES.TR)).toBe("https://www.sonymusic.com.tr/");
  });

  it("the API gives both of Dai Dai's label plaques a `source`", async () => {
    const d = (await (await afrobeatsApi()).json()).data;
    const certs = d.subject.releases.find((r: { title: string }) => r.title === "Dai Dai").certifications;
    const at = (code: string) => certs.find((c: { countryCode: string }) => c.countryCode === code);
    expect(at("TR")).toMatchObject({ body: "Sony Music Türkiye", source: "label", level: "Diamond" });
    expect(at("CO")).toMatchObject({ body: "Sony Music", source: "label", level: "Platinum" });
  });

  it("the methodology names both markets with no register", () => {
    expect(burnaLabelPlaques).toEqual([
      "“Dai Dai”'s Platinum in Colombia, issued by Sony Music",
      "“Dai Dai”'s Diamond in Turkey, issued by Sony Music Türkiye",
      "“All Eyes on Me”'s 19× Platinum in South Africa, issued by Sony Music Africa",
    ]);
    expect(certificationRule()).toContain(
      "In Burna Boy's own record, the 4 exceptions are markets with no current public register, where the labels' own plaques stand: “Dai Dai”'s Platinum in Colombia, issued by Sony Music, and “Dai Dai”'s Diamond in Turkey, issued by Sony Music Türkiye; a register that holds no row for the title,",
    );
    expect(boardLabelPlaques).toContain("Tyla's “Water” 3× Diamond in Turkey, issued by Epic Records");
    expect(boardOffRegisterTotal).toBe(17);
  });
});

describe("Tyla: Water 3× Diamond in Turkey, Epic Records' plaque", () => {
  it("is a label plaque naming Epic Records, and her only Turkish plaque (Jump's Platinum waits)", () => {
    const tr = tyla.releases.flatMap((r) => r.certs.filter((c) => c.c === "TR").map((c) => ({ title: r.title, ...c })));
    expect(tr).toEqual([{ title: "Water", c: "TR", level: "Diamond", x: 3, body: "Epic Records", source: "label" }]);
  });

  it("76 plaques across 25 countries; the board 1,089", () => {
    expect(certCount(tyla)).toBe(SHIPPED_TYLA + 1);
    expect(boardCountryCount(tyla)).toBe(25);
    expect(afrobeatsArtists.reduce((n, a) => n + certCount(a), 0)).toBe(SHIPPED_BOARD + 1);
  });

  it("her page names Turkey apart from South Africa: a different label's award", () => {
    expect(offRegisterPhrase(tyla)).toBe(
      "10 certifications in South Africa, 9 read from the label's own award and 1 from its own announcement; 1 in Turkey, read from the label's own award; and 1 in France, read from SNEP's own announcement",
    );
    // Negative control: one label group across both countries, which the
    // grouping by kind alone produced — one award, one label, neither true.
    expect(offRegisterPhrase(tyla)).not.toMatch(/\b11 (?:plaques|certifications) in South Africa and Turkey/);
  });
});

describe("finding 3 on /analysis: France no longer holds every Diamond", () => {
  it("names the Turkish Diamond as the label's, and stops saying 'every one'", () => {
    expect(diamondCerts).toHaveLength(8);
    expect(diamondsElsewhere).toEqual([
      { title: "Dai Dai", code: "TR", country: "Turkey", body: "Sony Music Türkiye", label: true },
    ]);
    const f = findings.find((x) => x.id === "diamond-country")!;
    const body = f.body.join(" ");
    expect(body).toContain(
      "Of his 8 Diamond certifications — the highest tier there is — 7 were awarded by a single body: SNEP in France. The other is “Dai Dai”'s in Turkey, a label-issued plaque from Sony Music Türkiye.",
    );
    expect(f.chartNote).toContain("France holds 7 of the 8 Diamond certifications.");
    // Negative control: the sentence that shipped, now false.
    expect(body).not.toContain("Every one of his 8 Diamond certifications");
  });
});

// The feed's line is a dated log entry, so its two ordinals are typed. Held
// here to the figures shipped before it, plus this one plaque.
describe("the 7 Oct feed entry", () => {
  const entry = updates.find((u) => u.date === "2026-10-07" && u.text.includes("Diamond in Turkey"))!;

  it("is a Certifications headliner on the song's page, Burna Boy's story", () => {
    expect(entry).toMatchObject({ category: "Certifications", href: "/dai-dai", big: true });
    expect(entry.text.length).toBeLessThan(300);
  });

  it("prints the label's own units from the threshold table", () => {
    expect(entry.text).toContain(`${CERT_THRESHOLDS.TR.single!.diamond!.toLocaleString("en-US")} units`);
    expect(entry.text).toContain("Colombia to Platinum");
  });

  it("counts a nineteenth country and a 251st plaque: the shipped figures plus one", () => {
    expect(entry.text).toContain("A nineteenth country for the song, and Burna Boy's 251st plaque.");
    expect(SHIPPED_DAI_DAI + 1).toBe(19);
    expect(SHIPPED_TOTAL + 1).toBe(251);
  });

  it("Tyla is not in the feed (Burna Boy only)", () => {
    expect(updates.filter((u) => u.date === "2026-10-07").some((u) => /Tyla|Water/.test(u.text))).toBe(false);
  });
});
