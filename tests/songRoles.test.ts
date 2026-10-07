import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { singles, features } from "../app/data/certifications";
import { singleCharts, featureCharts } from "../app/data/charts";
import { afrobeatsArtists, type AfroRelease } from "../app/data/afrobeats";
import { songs } from "../app/data/songs";
import { BOARD_ROLES, BURNA_ROLES, KIND_FOR_ROLE, SONG_ROLES_READ_ON, burnaCoLeadTitles, roleTag, roleTagEs } from "../app/data/songRoles";
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

  // Review of 7 Oct 2026: part 1 matched the site's "For You" — Teni ft.
  // Davido (2021), his NG Platinum and NG No. 1 — to a DIFFERENT song with the
  // same title, his 2012 solo "For You" on "Omo Baba Olowo: The Genesis" and
  // "Best Of Davido", and the build filed it as his lead single.
  it("Davido's “For You” is Teni ft. Davido, his feature — not his 2012 song of the same title", () => {
    const row = INPUTS.board.davido["For You"];
    expect(row.spotifyId).toBe("4c7UBMrX7NC9QHtZQCQKBn");
    expect(row.firstListed).toBe(false);
    expect(row.titleCollision).toMatch(/Teni ft\. Davido/);
    expect(BOARD_ROLES.davido["For You"]).toMatchObject({ role: "featured", rule: "neither" });
    expect(afrobeatsArtists.find((a) => a.slug === "davido")!.releases.find((r) => r.title === "For You")!.kind).toBe("Featured appearances");
    // The other song IS on his own releases, so without the guard part 1 fires.
    const own = ownTitleIndex(OWN.artists.davido);
    const unguarded = { ...row };
    delete unguarded.titleCollision;
    expect(ruleC({ title: "For You", input: unguarded, artistName: "Davido", own })).toMatchObject({ role: "lead", rule: "own-release", ownRelease: "Best Of Davido" });
    // The guard skips part 1 only: first-listed on the track would still be lead.
    expect(ruleC({ title: "For You", input: { ...row, firstListed: true }, artistName: "Davido", own }).role).toBe("lead");
  });

  it("negative control: the “For You” row as the build shipped it fails the board check", () => {
    expect(boardMisfiled("davido", [{ title: "For You", kind: "Lead singles" }])).toEqual(["davido: For You (Lead singles)"]);
  });

  it("the title-collision guard is on the one row the review found, and nowhere else", () => {
    const rows: [string, string, { titleCollision?: string }][] = [
      ...Object.entries(INPUTS.burna).map(([t, r]) => ["burna-boy", t, r] as [string, string, { titleCollision?: string }]),
      ...Object.entries(INPUTS.board).flatMap(([slug, byTitle]) =>
        Object.entries(byTitle as object).map(([t, r]) => [slug, t, r] as [string, string, { titleCollision?: string }]),
      ),
    ];
    expect(rows.filter(([, , r]) => r.titleCollision).map(([slug, t]) => `${slug}: ${t}`)).toEqual(["davido: For You"]);
  });
});

/** The titles a pair of lead/featured ledgers files on the wrong side. */
function misfiled(lead: readonly { title: string }[], featured: readonly { title: string }[]): string[] {
  return [
    ...lead.filter((r) => BURNA_ROLES[r.title]?.role !== "lead").map((r) => `${r.title} (filed lead)`),
    ...featured.filter((r) => BURNA_ROLES[r.title]?.role !== "featured").map((r) => `${r.title} (filed featured)`),
  ];
}

/** Board releases whose `kind` is not their artist's own role. */
function boardMisfiled(slug: string, releases: readonly Pick<AfroRelease, "title" | "kind">[]): string[] {
  return releases
    .filter((r) => r.kind !== "Albums")
    .filter((r) => !BOARD_ROLES[slug]?.[r.title] || r.kind !== KIND_FOR_ROLE[BOARD_ROLES[slug][r.title].role])
    .map((r) => `${slug}: ${r.title} (${r.kind})`);
}

describe("Burna Boy's ledgers file every song by Rule C", () => {
  it("/certifications: Singles are lead (co-leads included), Featured appearances are featured", () => {
    expect(misfiled(singles, features)).toEqual([]);
  });

  it("/records/charts: Singles are lead, Featured are featured", () => {
    expect(misfiled(singleCharts, featureCharts)).toEqual([]);
  });

  it("negative control: the credit-role filing of the paused build fails", () => {
    // That build filed "Location" under Singles because Spotify's credits panel
    // names him a Main Artist on it — the row as it stood there, verbatim.
    const CREDIT_ROLE_ROW = { title: "Location", credit: "Dave ft. Burna Boy", year: 2019 };
    expect(misfiled([...singles, CREDIT_ROLE_ROW], features.filter((r) => r.title !== "Location"))).toEqual(["Location (filed lead)"]);
    expect(misfiled([{ title: "We Pray" }, { title: "Own It" }, { title: "Loved by You" }], [])).toEqual([
      "We Pray (filed lead)",
      "Own It (filed lead)",
      "Loved by You (filed lead)",
    ]);
  });

  it("negative control: main's billing filing fails too (WGFT and My Oasis under Featured)", () => {
    const MAIN_ROW = { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025 };
    expect(misfiled(singles.filter((r) => r.title !== "WGFT"), [...features, MAIN_ROW])).toEqual(["WGFT (filed featured)"]);
    expect(misfiled([], [{ title: "My Oasis" }, { title: "Do I" }, { title: "Ginger" }])).toEqual(["My Oasis (filed featured)", "Do I (filed featured)"]);
  });
});

describe("the board files every certified release by the artist's own Rule C role", () => {
  it("every non-album release's kind is its artist's role", () => {
    expect(afrobeatsArtists.flatMap((a) => boardMisfiled(a.slug, a.releases))).toEqual([]);
  });

  it("negative control: the credit-role filing of the paused build fails", () => {
    // Spotify credits BNXN a Main Artist on "Mood (Wizkid ft. BNXN)", so that
    // build made it his lead single; it is on none of his releases.
    expect(boardMisfiled("bnxn", [{ title: "Mood (Wizkid ft. BNXN)", kind: "Lead singles" }])).toEqual([
      "bnxn: Mood (Wizkid ft. BNXN) (Lead singles)",
    ]);
    expect(boardMisfiled("tyla", [{ title: "Show Me Love", kind: "Lead singles" }])).toEqual(["tyla: Show Me Love (Lead singles)"]);
  });

  it("negative control: main's filing fails (“Wait For U” as Tems's featured appearance)", () => {
    expect(boardMisfiled("tems", [{ title: "Wait For U", kind: "Featured appearances" }])).toEqual(["tems: Wait For U (Featured appearances)"]);
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

// ── Copy that states a role ───────────────────────────────────────────────
describe("copy that names a role says what the roles say", () => {
  it("the FAQ's “biggest featured credit” is featured by Rule C", async () => {
    const { faqs } = await import("../app/data/faqs");
    const a = faqs.find((f) => f.q === "What is Burna Boy's biggest song?")!.a;
    const named = /His biggest featured credit is "([^"]+)"/.exec(a)?.[1];
    expect(named).toBe("Location");
    expect(BURNA_ROLES[named!].role).toBe("featured");
    // Negative control: the credit-role build's sentence called "Location" a
    // co-lead, which Rule C does not.
    const CREDIT_ROLE = `His biggest featured credit is "Be Honest" with Jorja Smith, certified Diamond in France; "Location" with Dave, 5× Platinum in the UK, is a co-lead — Spotify credits him as a main artist on it.`;
    expect(/"Location" with Dave, 5× Platinum in the UK, is a co-lead/.test(CREDIT_ROLE) && BURNA_ROLES.Location.coLeadWith === undefined).toBe(true);
  });

  it("the “more than 20 songs past 100 million” split is recounted from the roles", async () => {
    const { SONGS_PAST_100M, allFirsts } = await import("../app/data/firsts");
    const text = allFirsts.find((f) => f.title === "First African artist with more than 20 songs past 100 million Spotify streams")!.text;
    expect(SONGS_PAST_100M).toHaveLength(23);
    const roles = SONGS_PAST_100M.map((t) => BURNA_ROLES[t]);
    expect(roles.every(Boolean)).toBe(true);
    const featured = SONGS_PAST_100M.filter((_, i) => roles[i].role === "featured");
    const coLeads = SONGS_PAST_100M.filter((_, i) => roles[i].role === "lead" && roles[i].coLeadWith?.length);
    const withGuest = SONGS_PAST_100M.filter((_, i) => roles[i].role === "lead" && !roles[i].coLeadWith?.length && /^(feat\.|with) /.test(roles[i].billing ?? ""));
    const solo = SONGS_PAST_100M.filter((_, i) => roles[i].role === "lead" && !roles[i].coLeadWith?.length && !roles[i].billing);
    expect(solo.length + withGuest.length + coLeads.length + featured.length).toBe(SONGS_PAST_100M.length);
    expect([...coLeads]).toEqual(["Dai Dai", "WGFT", "My Oasis", "Play Play"]);
    expect([...featured]).toEqual(["Location", "Own It", "Be Honest", "We Pray", "Loved by You", "Ginger", "Sungba (Remix)"]);
    const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    expect(text).toContain(
      `Twenty-three of his songs have each passed 100 million streams on Spotify — ${word[solo.length]} of them solo, ${word[withGuest.length]} as lead with a guest, ${word[coLeads.length]} as a co-lead, and ${word[featured.length]} as a featured artist.`,
    );
    // Negative control: the line as it shipped filed eleven under "featured artist".
    const SHIPPED = "nine of them solo, three as lead with a guest, and the rest as a featured artist";
    expect(23 - 9 - 3).not.toBe(featured.length);
    expect(text).not.toContain(SHIPPED);
  });
});
