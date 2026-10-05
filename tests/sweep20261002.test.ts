import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { afrobeatsArtists, artistBySlug } from "../app/data/afrobeats";
import { albums, allItems, type Release } from "../app/data/certifications";
import { artistBySlug as comparable, priceArtist, unitsForCert } from "../app/lib/certUnits";

// The 2 Oct 2026 register sweep (docs/sweeps/sweep-2026-10-02.md). The data
// changed in four places: two upgrades on Wizkid's "One Dance" and two Nigerian
// plaques credited to the artist on the recording rather than the one TCSN's
// `artiste` field names. One lead was refuted. Each is pinned here to the
// register row it rests on, quoted exactly as it was read, so the data cannot
// drift from its evidence and a refuted row cannot slip back in.

// ── The register rows, verbatim ────────────────────────────────────────────
// RMNZ via RadioScope, TablePress table 2052 (Artist | Title | Cert | Date).
const RMNZ_ONE_DANCE = "Drake feat. Wizkid And Kyla | One Dance | Plat x11 | 2026-10-01";
const RMNZ_ONE_DANCE_BEFORE = "Drake feat. Wizkid And Kyla | One Dance | Plat x10 | 2025-11-20";
// IFPI Danmark (Dato | Artist | Udgivelse | Selskab | Format | Status).
const DK_ONE_DANCE = "22.09.2026. | Drake, Wizkid, Kyla | One Dance | Universal Music | Track | 6xPlatin";
const DK_ONE_DANCE_BEFORE = "14.05.2024. | Drake feat. Wizkid & Kyla | One Dance | Universal Music | Track | 5xPlatin";
// TCSN certEntries rows: the 21 Feb 2026 capture (Road Runners) and the live
// page (Bad Influence), both re-read 2 Oct 2026.
const TCSN_ROAD_RUNNERS =
  '{"id":2493,"milestone":"Silver","title":"Road Runners","artiste":"Blaqbonez ft. Seyi Vibez","format":"Single","label":"","certifiedDate":"2025-02-06T00:00:00","isClaimed":false}';
const TCSN_BAD_INFLUENCE =
  '{"id":136,"milestone":"Platinum_2","title":"Bad Influence","artiste":"Asake","format":"Single","label":"","certifiedDate":"2026-02-06T00:00:00","isClaimed":false}';
// The refuted row: TCSN's first state, Wayback 20230214120546, id 1.
const TCSN_LOVE_DAMINI =
  '{"id":1,"milestone":"Silver","title":"Love, Damini","artiste":"Burna Boy ","format":"Single","label":"Spaceship","certifiedDate":"2022-11-20T00:00:00","isClaimed":false}';

type Tier = { level: string; x: number };

const rmnzTier = (row: string): Tier => {
  const cell = row.split(" | ")[2];
  const m = /^Plat x(\d+)$/.exec(cell);
  if (m) return { level: "Platinum", x: Number(m[1]) };
  return { level: cell, x: 1 };
};
const dkTier = (row: string): Tier => {
  const cell = row.split(" | ").at(-1)!;
  const m = /^(\d+)xPlatin$/.exec(cell);
  if (m) return { level: "Platinum", x: Number(m[1]) };
  return { level: cell === "Platin" ? "Platinum" : cell === "Guld" ? "Gold" : cell, x: 1 };
};
const tcsnTier = (json: string): Tier => {
  const [level, x] = (JSON.parse(json).milestone as string).split("_");
  return { level, x: x ? Number(x) : 1 };
};

const certOf = (slug: string, title: string, c: string): Tier | undefined => {
  const cert = artistBySlug(slug)
    ?.releases.find((r) => r.title === title)
    ?.certs.find((x) => x.c === c);
  return cert && { level: cert.level, x: cert.x ?? 1 };
};

describe("the two One Dance upgrades are the registers' rows", () => {
  it("New Zealand is RMNZ's Plat x11 of 2026-10-01", () => {
    expect(rmnzTier(RMNZ_ONE_DANCE)).toEqual({ level: "Platinum", x: 11 });
    expect(certOf("wizkid", "One Dance", "NZ")).toEqual(rmnzTier(RMNZ_ONE_DANCE));
  });

  it("Denmark is IFPI Danmark's 6xPlatin of 22.09.2026", () => {
    expect(dkTier(DK_ONE_DANCE)).toEqual({ level: "Platinum", x: 6 });
    expect(certOf("wizkid", "One Dance", "DK")).toEqual(dkTier(DK_ONE_DANCE));
  });

  it("negative control: the tiers that shipped are the superseded rows, not the current ones", () => {
    const shippedNZ = { level: "Platinum", x: 10 };
    const shippedDK = { level: "Platinum", x: 5 };
    expect(rmnzTier(RMNZ_ONE_DANCE_BEFORE)).toEqual(shippedNZ);
    expect(dkTier(DK_ONE_DANCE_BEFORE)).toEqual(shippedDK);
    expect(shippedNZ).not.toEqual(rmnzTier(RMNZ_ONE_DANCE));
    expect(shippedDK).not.toEqual(dkTier(DK_ONE_DANCE));
  });

  it("an upgrade replaces, it does not add: one plaque per country", () => {
    const certs = artistBySlug("wizkid")!.releases.find((r) => r.title === "One Dance")!.certs;
    expect(certs.filter((c) => c.c === "NZ")).toHaveLength(1);
    expect(certs.filter((c) => c.c === "DK")).toHaveLength(1);
  });

  it("the Wizkid sweep document carries both rows", () => {
    const doc = readFileSync("docs/sweeps/wizkid-certifications-v1.md", "utf8");
    expect(doc).toContain("`Drake feat. Wizkid And Kyla | One Dance | Plat x11 | 2026-10-01`");
    expect(doc).toContain("`22.09.2026. | Drake, Wizkid, Kyla | One Dance | Universal Music | Track | 6xPlatin`");
    expect(doc).toContain("🇳🇿 11× Platinum ✓");
    expect(doc).toContain("🇩🇰 6× Platinum ✓");
  });
});

// ── The two credits Paul ruled on 2 Oct 2026 ───────────────────────────────
// Rema's "Smooth Criminal" and Ayra Starr's "Many Roads" set the precedent on
// 23 Sep 2026: a TCSN row whose `artiste` is mis-entered is credited to the
// artist on the recording, on the owner's ruling, never by a matcher.
describe("the two TCSN credit rulings", () => {
  const RULED = [
    { slug: "black-sherif", title: "Road Runners", row: TCSN_ROAD_RUNNERS, named: "seyi-vibez", doc: '"id":2493' },
    { slug: "omah-lay", title: "Bad Influence", row: TCSN_BAD_INFLUENCE, named: "asake", doc: '"id":136' },
  ] as const;

  // What an artiste-keyed matcher would do with the row: credit whichever board
  // artist the register names.
  const creditedByArtiste = (json: string) =>
    afrobeatsArtists.filter((a) => (JSON.parse(json).artiste as string).includes(a.name)).map((a) => a.slug);

  for (const { slug, title, row, named, doc } of RULED) {
    it(`${title} sits on ${slug} at the register's tier`, () => {
      expect(JSON.parse(row).title).toBe(title);
      expect(certOf(slug, title, "NG")).toEqual(tcsnTier(row));
    });

    it(`${title} stays off ${named}, the artist the register names`, () => {
      expect(artistBySlug(named)!.releases.some((r) => r.title === title)).toBe(false);
    });

    it(`negative control: the real ${title} row credits ${named}, not ${slug}`, () => {
      // Followed literally, the register's own string puts the plaque on the
      // wrong board, which is why it is placed by ruling, not by matcher.
      expect(creditedByArtiste(row)).toEqual([named]);
      expect(creditedByArtiste(row)).not.toContain(slug);
    });

    it(`${title}: the ruling is recorded where the precedent records it`, () => {
      const src = readFileSync("app/data/afrobeats.ts", "utf8");
      const at = src.indexOf(`{ title: "${title}", kind:`);
      const comment = src.slice(src.lastIndexOf("// 2 Oct 2026", at), at);
      expect(comment).toContain("Paul's ruling");
      expect(comment).toContain("Smooth Criminal");
      const sweepDoc = readFileSync(`docs/sweeps/${slug}-certifications-v1.md`, "utf8");
      expect(sweepDoc).toContain(doc);
      expect(sweepDoc).toContain("Paul's ruling of 2 Oct 2026");
    });
  }

  it("the three moved artists print the sweep's date", () => {
    for (const slug of ["black-sherif", "omah-lay"]) {
      expect(artistBySlug(slug)!.verifiedOn, slug).toBe("2026-10-02");
    }
    // Wizkid moved again on 4 Oct 2026 (AMPROFON's "One Dance" row re-read,
    // AFROBEATS_VERIFIED_ON_20). A later read moves a stamp on, never back.
    expect(artistBySlug("wizkid")!.verifiedOn >= "2026-10-02").toBe(true);
  });
});

// ── Refuted: Burna Boy's "Love, Damini" NG Silver ──────────────────────────
// A pre-launch placeholder in TCSN's first two-row state (Feb 2023), gone by
// 6 Mar 2023, and in no later state including the uncapped 2,477-row one.
describe("the refuted Love, Damini row is not on the site", () => {
  const songSilverAdded = (items: Release[]) =>
    items.some(
      (r) => !albums.includes(r) && r.title === "Love, Damini" && r.certs.some((c) => c.c === "NG" && c.level === "Silver"),
    );

  it("no Burna Boy single or feature carries it", () => {
    expect(songSilverAdded(allItems)).toBe(false);
  });

  it("negative control: the real register row, added as it reads, is caught", () => {
    const r = JSON.parse(TCSN_LOVE_DAMINI);
    const asAdded: Release = { title: r.title, certs: [{ c: "NG", level: tcsnTier(TCSN_LOVE_DAMINI).level as "Silver" }] };
    expect(songSilverAdded([...allItems, asAdded])).toBe(true);
  });

  it("the album keeps its NG 5× Platinum (13 Aug ruling)", () => {
    const album = albums.find((a) => a.title === "Love, Damini")!;
    expect(album.certs.filter((c) => c.c === "NG")).toEqual([{ c: "NG", level: "Platinum", x: 5 }]);
  });

  it("Made in Lagos NG Gold, the other placeholder row, is kept and flagged", () => {
    expect(certOf("wizkid", "Made in Lagos", "NG")).toEqual({ level: "Gold", x: 1 });
    const src = readFileSync("app/data/afrobeats.ts", "utf8");
    expect(src).toContain("NG Gold rests on TCSN's launch-state placeholder row");
  });
});

// ── Kept, with a plain note and no ⚠ (Paul, 2 Oct 2026) — no tier or count change
describe("the two Music Canada rows that do not print the board artist", () => {
  it("Be Honest CA Gold and Raindance CA Platinum stand", () => {
    const beHonest = allItems.find((r) => r.title === "Be Honest")!;
    expect(beHonest.certs).toContainEqual({ c: "CA", level: "Gold" });
    expect(certOf("tems", "Raindance", "CA")).toEqual({ level: "Platinum", x: 1 });
  });

  // Paul, 2 Oct 2026: "only one be honest and one raindance exist" — so each
  // carries a plain note in the documents, and never a ⚠.
  it("each carries a plain note, pointed to from the data, and no ⚠", () => {
    const sweep = readFileSync("docs/sweeps/sweep-2026-10-02.md", "utf8");
    expect(sweep).toContain("`Jorja Smith \\| Be Honest \\| Gold Single \\| 2020-01-20`");
    expect(sweep).toContain("`DAVE \\| Raindance \\| Platinum Single \\| 2026-04-22`");
    const tems = readFileSync("docs/sweeps/tems-certifications-v1.md", "utf8");
    const raindanceRow = tems.split("\n").find((l) => l.startsWith("| Raindance (Dave ft. Tems)"))!;
    expect(raindanceRow).toContain("🇨🇦 Platinum ✓ (22.04.2026");
    expect(raindanceRow).not.toContain("⚠");
    // The negative control is the cell this PR first wrote.
    expect("🇨🇦 Platinum ✓⚠ (22.04.2026; the row prints `DAVE` alone)").toContain("⚠");
    const certs = readFileSync("app/data/certifications.ts", "utf8");
    const note = certs.slice(certs.indexOf("// CA Gold (2 Oct 2026)"), certs.indexOf('{ title: "Be Honest"'));
    expect(note).toContain("docs/sweeps/sweep-2026-10-02.md");
    expect(certs).not.toContain("// CA Gold ⚠");
    const board = readFileSync("app/data/afrobeats.ts", "utf8");
    expect(board).toContain("// CA Platinum (2 Oct 2026)");
    expect(board).not.toContain("CA Platinum ⚠");
  });
});

// ── /compare counts every changed plaque ───────────────────────────────────
describe("the 2 Oct 2026 sweep's plaques are all priced", () => {
  const SWEEP: [slug: string, title: string, country: string, units: number][] = [
    ["wizkid", "One Dance", "NZ", 330_000],
    ["wizkid", "One Dance", "DK", 540_000],
    ["black-sherif", "Road Runners", "NG", 25_000],
    ["omah-lay", "Bad Influence", "NG", 200_000],
  ];

  for (const [slug, title, country, units] of SWEEP) {
    it(`${slug} — ${title} ${country}: ${units.toLocaleString("en-US")} units, counted`, () => {
      const a = comparable(slug)!;
      const release = a.releases.find((r) => r.title === title && r.format === "single");
      expect(release, `${slug} has no single "${title}"`).toBeTruthy();
      const cert = release!.certs.find((c) => c.c === country)!;
      // toMatchObject: the result also carries `exact`, the unfloored figure sums use.
      expect(unitsForCert(cert, "single")).toMatchObject({ units, why: null });
      const all = priceArtist(a, { includeNigeria: true, includeFeatures: true });
      expect(all.excluded.filter((e) => e.country === country && e.format === "single")).toEqual([]);
    });
  }
});
