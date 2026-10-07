import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { singles, features } from "../app/data/certifications";
import { singleCharts, featureCharts } from "../app/data/charts";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { songs } from "../app/data/songs";
import { BOARD_ROLES, BURNA_ROLES, SONG_ROLES_READ_ON, burnaCoLeadTitles, roleTag, roleTagEs } from "../app/data/songRoles";
import overridesFile from "../app/data/roleOverrides.json";
import {
  isCoLeadBilling,
  normTitle,
  ownTitleIndex,
  renderSongRoles,
  roleFromBilling,
  ruleC,
  // @ts-expect-error — a plain .mjs module with no types
} from "../scripts/roles/rule-c-lib.mjs";

// RULE C (Paul, 7 Oct 2026: "exactly as ChartMasters reads it"): a song is
// LEAD for an artist when the same song — matched by title — is on one of the
// artist's own Spotify releases, or the artist is first-listed on the track;
// FEATURED otherwise; three overrides to featured; the billing only where
// Spotify has no track for the artist. These tests pin the rule at song level
// and hold every filing on the site to it.

const ROOT = process.cwd();
const json = (p: string) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));
const INPUTS = json("docs/sourcing/rule-c-inputs-2026-10-07.json");
const OWN = json("docs/sourcing/own-releases-2026-10-07.json");
const OVERRIDES = overridesFile.overrides;

/** Rule C on one song, from the committed own-release list — what a NEW
 *  release is filed by (scripts/roles/rule-c-role.mjs). */
const fileSong = (slug: string, spotifyTitle: string, firstListed = false, overrides = OVERRIDES) =>
  ruleC({
    title: spotifyTitle,
    input: { spotifyTitle, firstListed },
    artistName: OWN.artists[slug].name,
    own: ownTitleIndex(OWN.artists[slug]),
    overrides: overrides.filter((o) => o.artist === slug),
  });

describe("the generated roles are current", () => {
  it("app/data/songRoles.generated.ts is what the inputs, the own releases and the overrides generate", () => {
    const src = readFileSync(join(ROOT, "app/data/songRoles.generated.ts"), "utf8");
    expect(src.startsWith("// GENERATED FILE — do not edit by hand.")).toBe(true);
    expect(src).toBe(renderSongRoles(INPUTS, OWN, OVERRIDES));
    expect(SONG_ROLES_READ_ON).toBe(INPUTS.readOn);
  });

  it("no role is typed in the inputs — the rule derives every one", () => {
    const rows = [...Object.values(INPUTS.burna), ...Object.values(INPUTS.board).flatMap((r) => Object.values(r as object))] as Record<string, unknown>[];
    expect(rows.length).toBe(116 + 727);
    for (const r of rows) expect(Object.keys(r)).not.toContain("role");
  });

  it("every artist's own-release list carries its read date", () => {
    expect(Object.keys(OWN.artists).sort()).toEqual(["burna-boy", ...afrobeatsArtists.map((a) => a.slug)].sort());
    for (const [slug, a] of Object.entries(OWN.artists) as [string, { readOn: string; releases: unknown[] }][]) {
      expect(a.readOn, slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(a.releases.length, slug).toBeGreaterThan(0);
    }
  });
});

describe("Rule C, song by song", () => {
  it("Burna Boy: Location, Own It, Be Honest and WE PRAY are featured", () => {
    for (const t of ["Location", "Own It", "Be Honest", "We Pray"]) {
      expect(BURNA_ROLES[t].role, t).toBe("featured");
      expect(BURNA_ROLES[t].rule, t).toBe("neither");
    }
    // From the Spotify titles themselves, against his own releases.
    expect(fileSong("burna-boy", "Location (feat. Burna Boy)").role).toBe("featured");
    expect(fileSong("burna-boy", "Own It (feat. Ed Sheeran & Burna Boy)").role).toBe("featured");
    expect(fileSong("burna-boy", "Be Honest").role).toBe("featured");
    expect(fileSong("burna-boy", "WE PRAY").role).toBe("featured");
  });

  it("Burna Boy: Dai Dai, WGFT and My Oasis are lead (his own releases), Alone too (first-listed)", () => {
    expect(BURNA_ROLES["Dai Dai"]).toMatchObject({ role: "lead", rule: "own-release", ownRelease: "Dai Dai" });
    expect(BURNA_ROLES.WGFT).toMatchObject({ role: "lead", rule: "own-release", ownRelease: "wgft (feat. Burna Boy)" });
    expect(BURNA_ROLES["My Oasis"]).toMatchObject({ role: "lead", rule: "own-release" });
    expect(BURNA_ROLES.Alone).toMatchObject({ role: "lead", rule: "first-listed" });
    // WGFT is lead by its TITLE: kworb's copy is the one on Gunna's album.
    expect(fileSong("burna-boy", "wgft (feat. Burna Boy)").role).toBe("lead");
    expect(fileSong("burna-boy", "Alone", true).role).toBe("lead");
    expect(fileSong("burna-boy", "Alone", false).role).toBe("featured");
  });

  it("the three overrides are featured — and Rule C alone would file each as lead", () => {
    const cases: [string, string, string][] = [
      ["tyla", "Show Me Love", "Show Me Love (with Tyla)"],
      ["ayra-starr", "Overloading", "Overloading (OVERDOSE)"],
      ["black-sherif", "Come & Go", "Come & Go - Black Sherif Remix"],
    ];
    expect(OVERRIDES.map((o) => [o.artist, o.siteTitle, o.spotifyTitle])).toEqual(cases);
    for (const [slug, site, spotify] of cases) {
      expect(BOARD_ROLES[slug][site], `${slug} ${site}`).toMatchObject({ role: "featured", rule: "override" });
      expect(fileSong(slug, spotify).role).toBe("featured");
      expect(fileSong(slug, spotify, false, []).role, `${spotify} without the override`).toBe("lead");
    }
    for (const o of OVERRIDES) expect(o.reason.length, o.spotifyTitle).toBeGreaterThan(20);
  });

  it("one record, two roles: each artist is filed by their own discography", () => {
    expect(BOARD_ROLES.wizkid.Ginger.role).toBe("lead");
    expect(BURNA_ROLES.Ginger.role).toBe("featured");
    expect(BOARD_ROLES.davido["Like (Iyanya ft. Davido & Kizz Daniel)"].role).toBe("lead");
    expect(BOARD_ROLES["kizz-daniel"]["Like (Iyanya ft. Davido & Kizz Daniel)"].role).toBe("featured");
    expect(BOARD_ROLES.tems["Isaka (6AM)"].role).toBe("lead");
    expect(BOARD_ROLES["omah-lay"]["Isaka (6AM)"].role).toBe("lead");
  });

  it("a release with no Spotify track for the artist is still theirs when its title is in their discography", () => {
    // Kizz Daniel ft. Falz, Olamide & LK Kuddy — the single is in Olamide's discography.
    expect(BOARD_ROLES.olamide.Currently).toMatchObject({ role: "lead", rule: "own-release" });
    // Not in his: the billing decides.
    expect(BOARD_ROLES.olamide.Loml).toMatchObject({ role: "featured", rule: "billing", billing: "Cheque ft. Olamide" });
    expect(BURNA_ROLES.Baddest).toMatchObject({ role: "featured", rule: "billing" });
  });

  it("titles compare without the guest bracket, curly quotes or zero-width characters", () => {
    expect(normTitle("wgft (feat. Burna Boy)")).toBe("wgft");
    expect(normTitle("Donne-moi l’accord")).toBe("donne-moi l'accord");
    expect(normTitle("Happiness ​(f​eat​. Asake, Gunna​)")).toBe("happiness");
    expect(normTitle("Isaka II (6am) [with Tems, Omah Lay, Thukuthela, JAZZWRLD, Lekaa Beats]")).toBe("isaka ii (6am)");
    expect(normTitle("Ye - Single Version")).toBe("ye");
    expect(normTitle("Sungba (feat. Burna Boy) - Remix")).toBe("sungba - remix");
    // A different song keeps its own words.
    expect(normTitle("Own It (feat. Burna Boy & Stylo G) [Toddla T Remix]")).not.toBe(normTitle("Own It (feat. Ed Sheeran & Burna Boy)"));
  });

  it("the billing rule: after “ft.” is featured, anything else is lead", () => {
    expect(roleFromBilling("Arrdee ft. Black Sherif", "Black Sherif")).toBe("featured");
    expect(roleFromBilling("Kizz Daniel ft. Falz, Olamide & LK Kuddy", "Olamide")).toBe("featured");
    expect(roleFromBilling("Poco Lee & Kizz Daniel", "Kizz Daniel")).toBe("lead");
    expect(roleFromBilling("TxC, Davido ft. Tony Duardo, LeeMcKrazy & Djy Biza", "Davido")).toBe("lead");
  });

  it("Olamide's “Julie” and Fireboy DML's “Running” are their own records, not a same-titled song", () => {
    expect(INPUTS.board.olamide.Julie.spotifyId).toBe("58f9RS1Wkaapezwhu5Cu3L");
    expect(INPUTS.board["fireboy-dml"].Running.spotifyId).toBe("6858xmZthZ7jEe06VyZxbN");
  });
});

describe("coverage", () => {
  it("Burna Boy: every title in his ledgers and song pages, and nothing else", () => {
    const titles = new Set([...singles, ...features, ...singleCharts, ...featureCharts, ...songs].map((r) => r.title));
    expect(new Set(Object.keys(BURNA_ROLES))).toEqual(titles);
  });

  it("the board: every certified release of every artist, and nothing else", () => {
    expect(Object.keys(BOARD_ROLES).sort()).toEqual(afrobeatsArtists.map((a) => a.slug).sort());
    for (const a of afrobeatsArtists) {
      const titles = a.releases.filter((r) => r.kind !== "Albums").map((r) => r.title);
      expect(new Set(titles).size, `${a.slug}: a title twice`).toBe(titles.length);
      expect(new Set(Object.keys(BOARD_ROLES[a.slug])), a.slug).toEqual(new Set(titles));
    }
  });

  it("the inputs name each artist as the board does (the billing rule reads the name)", () => {
    for (const a of afrobeatsArtists) expect(INPUTS.artists[a.slug], a.slug).toBe(a.name);
  });
});

describe("Burna Boy's co-leads", () => {
  // Anchored here, not built from the data: his leads whose billing is not his
  // own — 19 in the ledgers plus the "Darko" song page — and the acts the tag names.
  const CO_LEADS: Record<string, string[]> = {
    "4 Kampé II": ["Joé Dwèt Filé"],
    Birthday: ["Fredo", "Steel Banglez"],
    "Coming Home": ["Usher"],
    "Dai Dai": ["Shakira"],
    Darko: ["DJDS"],
    "Do I": ["Phyno"],
    "Just Like Me": ["21 Savage", "Metro Boomin"],
    "Laho II": ["Shallipopi"],
    "Lenu (Remix)": ["BNXN"],
    Masculine: ["J Hus"],
    "Mera Na": ["Sidhu Moose Wala"],
    "My Oasis": ["Sam Smith"],
    "Play Play": ["J Hus"],
    "Rollin'": ["Mist"],
    Rotate: ["Becky G"],
    "Second Sermon (Remix)": ["Black Sherif"],
    "Talibans II": ["Byron Messia"],
    "Tshwala Bam (Remix)": ["TitoM", "Yuppe", "S.N.E"],
    WGFT: ["Gunna"],
    "Yaba Buluku (Remix)": ["DJ Tárico"],
  };

  it("are exactly the twenty, each a lead billed to another act or co-billed", () => {
    expect(burnaCoLeadTitles().sort()).toEqual(Object.keys(CO_LEADS).sort());
    for (const [t, names] of Object.entries(CO_LEADS)) {
      expect(BURNA_ROLES[t].role, t).toBe("lead");
      expect(BURNA_ROLES[t].coLeadWith, t).toEqual(names);
      expect(isCoLeadBilling(BURNA_ROLES[t].billing), t).toBe(true);
    }
  });

  it("his own songs with a guest, and the features, carry no co-lead", () => {
    for (const t of ["For My Hand", "TaTaTa", "Pardon", "Smoke", "Last Last", "Location", "Own It", "We Pray", "Be Honest"])
      expect(BURNA_ROLES[t].coLeadWith, t).toBeUndefined();
  });

  it("the song pages' tags say it", () => {
    for (const s of songs) expect(() => roleTag(s.title), s.title).not.toThrow();
    expect(roleTag("Last Last")).toBe("Lead");
    expect(roleTag("Alone")).toBe("Lead");
    expect(roleTag("WGFT")).toBe("Co-lead with Gunna");
    expect(roleTag("Darko")).toBe("Co-lead with DJDS");
    expect(roleTag("Dai Dai")).toBe("Co-lead with Shakira");
    expect(roleTagEs("Dai Dai")).toBe("Artista principal junto a Shakira");
    expect(roleTag("Jerusalema (Remix)")).toBe("Featured");
    expect(roleTag("TaTaTa")).toBe("Lead");
  });
});
