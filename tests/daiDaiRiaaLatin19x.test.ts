import { describe, it, expect } from "vitest";
import { allItems, certHistory, totalAwards, daiDaiCertCount, COUNTRIES, CERTS_VERIFIED_ON } from "../app/data/certifications";
import { CERT_PROGRAMS } from "../app/data/certThresholds";
import { updates } from "../app/data/updates";
import { comparableArtists, priceArtist, priceRelease, unitsForCert } from "../app/lib/certUnits";
import { priceCountry } from "../app/lib/certCountry";
import { awardLabel, awardRank } from "../app/lib/awardName";
import { headlineAward } from "../app/lib/headlineAward";

/**
 * "Dai Dai" 🇺🇸 RIAA Latin 6× → 19× Platino, read 7 Oct 2026 in RIAA's own
 * database (riaa.com/gold-platinum/?tab_active=default-award&se=dai+dai):
 * award 454813, "SHAKIRA & BURNA BOY | DAI DAI | SONY LATIN | SINGLE |
 * October 6, 2026", badge la_19_big.png, alt "badge LA level 19", title "1X
 * Diamante" (the band Latin levels 10–19 sit in; level 24 reads "2X
 * Diamante"); the row's timeline prints "Current Certification | October 6,
 * 2026 | 19X PLATINO".
 *
 * A US award from the RIAA's Latin programme (Premios de Oro y Platino) — not
 * a Latin American one. An upgrade: one plaque per title per country, so the
 * plaque count does not move.
 *
 * The figures below are anchored to the register (level 19) and the
 * programme's published Platino (60,000), not read back from the data.
 */
const REGISTER_LEVEL = 19;
const PLATINO = 60_000;
const UNITS = REGISTER_LEVEL * PLATINO; // 1,140,000
const SHIPPED_UNITS = 6 * PLATINO; // the 6× of 24 Sep 2026: 360,000
const SHIPPED_TOTAL = 251; // his plaques before the read (7 Oct 2026, Turkey's Diamond)
const SHIPPED_DAI_DAI = 19;

const daiDai = allItems.find((r) => r.title === "Dai Dai")!;
const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
const OPTS = { includeNigeria: true, includeFeatures: true };

describe("Dai Dai: 19× Platino in the RIAA's Latin programme", () => {
  it("holds one US plaque, at its current tier: Platinum ×19, RIAA Latin, the newest award last", () => {
    expect(daiDai.certs.filter((c) => c.c === "US")).toEqual([{ c: "US", level: "Platinum", x: REGISTER_LEVEL, body: "RIAA Latin" }]);
    expect(daiDai.certs.at(-1)).toEqual({ c: "US", level: "Platinum", x: REGISTER_LEVEL, body: "RIAA Latin" });
  });

  it("is labelled as the programme names it: 19× Platino", () => {
    expect(awardLabel(daiDai.certs.find((c) => c.c === "US")!)).toBe("19× Platino");
  });

  it("negative control: the 6× is not a plaque any more, only a logged step", () => {
    expect(daiDai.certs.some((c) => c.c === "US" && c.x === 6)).toBe(false);
    const rows = certHistory.filter((e) => e.title === "Dai Dai" && e.country === "US");
    expect(rows.map((e) => e.x)).toEqual([2, 6, REGISTER_LEVEL]);
    expect(rows.every((e) => e.body === "RIAA Latin" && e.level === "Platinum")).toBe(true);
  });

  it("logs the step on the register's own date", () => {
    const row = certHistory.at(-1)!;
    expect(row).toEqual({
      title: "Dai Dai",
      credit: "Shakira & Burna Boy",
      country: "US",
      level: "Platinum",
      x: REGISTER_LEVEL,
      year: 2026,
      date: "2026-10-06",
      body: "RIAA Latin",
    });
  });

  it("an upgrade: the song's and his plaque counts hold", () => {
    expect(daiDaiCertCount).toBe(SHIPPED_DAI_DAI);
    expect(totalAwards()).toBe(SHIPPED_TOTAL);
  });

  it("the RIAA read moves the sources line's date", () => {
    expect(CERTS_VERIFIED_ON).toBe("2026-10-07");
    expect(COUNTRIES.US.body).toBe("RIAA");
  });

  it("does not change his headline award: a Diamond outranks any Platino multiple", () => {
    const all = allItems.flatMap((r) => r.certs);
    const head = headlineAward(all, (c) => COUNTRIES[c.c]?.body);
    expect(head).toMatchObject({ c: "FR", level: "Diamond" });
    expect(awardRank(daiDai.certs.find((c) => c.c === "US")!)).toBeLessThan(awardRank({ level: "Diamond" }));
  });
});

describe("Dai Dai's 19× Platino on /compare", () => {
  it("is priced at the programme's level, 19 × 60,000, never the standard programme's 19,000,000", () => {
    expect(CERT_PROGRAMS["RIAA Latin"].single.platinum).toBe(PLATINO);
    expect(unitsForCert(daiDai.certs.find((c) => c.c === "US")!, "single").units).toBe(UNITS);
    expect(unitsForCert({ c: "US", level: "Platinum", x: REGISTER_LEVEL }, "single").units).toBe(19_000_000);
  });

  it("is COUNTED on the song's US · LATIN line", () => {
    const p = priceRelease(burna, "Dai Dai", OPTS)!;
    expect(p.byCountry.find((l) => l.country === "US")).toMatchObject({ program: "RIAA Latin", units: UNITS, counted: true, releases: 1 });
  });

  it("moves his certified units by exactly 780,000, the step from 6×", () => {
    const at6x = {
      ...burna,
      releases: burna.releases.map((r) =>
        r.title === "Dai Dai" ? { ...r, certs: r.certs.map((c) => (c.c === "US" ? { ...c, x: 6 } : c)) } : r,
      ),
    };
    expect(priceArtist(burna, OPTS).total - priceArtist(at6x, OPTS).total).toBe(UNITS - SHIPPED_UNITS);
    expect(UNITS - SHIPPED_UNITS).toBe(780_000);
  });

  it("puts Burna Boy first on the RIAA Latin board, ahead of Ayra Starr's 16× Santa", () => {
    const latin = priceCountry("US", OPTS).programs.find((p) => p.name === "RIAA Latin")!;
    expect(latin.lines.map((l) => [l.artist.slug, l.units])).toEqual([
      ["burna-boy", UNITS],
      ["ayra-starr", 16 * PLATINO],
      ["rema", 2 * PLATINO],
    ]);
  });
});

describe("the feed's entry for it", () => {
  const entry = updates.find((u) => u.date === "2026-10-07" && /19× Platino/.test(u.text))!;

  it("is a short Burna Boy certification line, linked to the song", () => {
    expect(entry).toBeDefined();
    expect(entry.category).toBe("Certifications");
    expect(entry.href).toBe("/dai-dai");
    expect(entry.text.length).toBeLessThan(300);
    expect(updates[0]).toBe(entry);
  });

  it("states the register's level and the units at the programme's level", () => {
    expect(entry.text).toBe(
      "“Dai Dai” is 19× Platino in the US: the RIAA's own database lists Shakira & Burna Boy's World Cup anthem at 19X Platino in its Latin programme, certified 6 October — 1,140,000 units at the programme's levels, up from 6×.",
    );
  });

  it("calls it a US award, never a Latin American one, and states no running total", () => {
    expect(entry.text).not.toMatch(/Latin America|América Latina/i);
    expect(entry.text).not.toMatch(/\b\d{3}(st|nd|rd|th)? plaques?\b|plaques in all/);
  });
});
