import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { singles, features } from "../app/data/certifications";
import { singleCharts, featureCharts } from "../app/data/charts";
import { afrobeatsArtists, type AfroRelease } from "../app/data/afrobeats";
import { songs } from "../app/data/songs";
import {
  BOARD_ROLES,
  BURNA_ROLES,
  CREDIT_ROLES_READ_ON,
  KIND_FOR_ROLE,
  burnaCoLeadTitles,
  roleTag,
  type ReleaseRole,
} from "../app/data/creditRoles";
// @ts-expect-error — a plain .mjs module with no types
import { renderCreditRoles, roleFromBilling } from "../scripts/roles/credit-roles-lib.mjs";
import burnaTrackRoles from "../app/data/burnaTrackRoles.json";

// THE RULE (Paul, 6 Oct 2026): an artist's role on a release is Spotify's own
// credit role for that artist ("Main Artist" = lead, "Featured Artist" =
// featured); the release billing decides only where Spotify has no credit for
// the artist on the record. These tests hold every filing on the site to it,
// and trace every role back to the raw reads.

const ROOT = process.cwd();
const DECIDED = JSON.parse(readFileSync(join(ROOT, "docs/sourcing/roles-decided-2026-10-07.json"), "utf8"));
type RawRow = { spotifyId: string; spotifyTitle: string; artists: { name: string; role: string }[]; readAt: string; from: string };
const RAW: RawRow[] = JSON.parse(readFileSync(join(ROOT, "docs/sourcing/credit-roles-2026-10-07.json"), "utf8")).tracks;
const RAW_BY_ID = new Map(RAW.map((r) => [r.spotifyId, r]));

/** Each board artist's name in Spotify's credits panel, as read — anchored
 *  here, not taken from the data: "OMAH LAY" is how Spotify writes Omah Lay. */
const SPOTIFY_NAME: Record<string, string> = {
  olamide: "Olamide",
  "black-sherif": "Black Sherif",
  bnxn: "BNXN",
  wizkid: "Wizkid",
  davido: "Davido",
  rema: "Rema",
  tems: "Tems",
  tyla: "Tyla",
  "ayra-starr": "Ayra Starr",
  asake: "Asake",
  "omah-lay": "OMAH LAY",
  "seyi-vibez": "Seyi Vibez",
  victony: "Victony",
  "fireboy-dml": "Fireboy DML",
  ckay: "CKay",
  "kizz-daniel": "Kizz Daniel",
  ruger: "Ruger",
  oxlade: "Oxlade",
  "tiwa-savage": "Tiwa Savage",
};
/** The board's display name, for the billing rule (billing strings use it). */
const BILLING_NAME = (slug: string) => afrobeatsArtists.find((a) => a.slug === slug)!.name;

const roleOfCredit = (raw: string | undefined) =>
  raw === "Main Artist" ? "lead" : raw === "Featured Artist" ? "featured" : undefined;

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
    .filter((r) => r.kind !== KIND_FOR_ROLE[BOARD_ROLES[slug]?.[r.title]?.role ?? "lead"] || !BOARD_ROLES[slug]?.[r.title])
    .map((r) => `${slug}: ${r.title} (${r.kind})`);
}

describe("the generated roles are current", () => {
  it("app/data/creditRoles.generated.ts is what the decided file generates", () => {
    const src = readFileSync(join(ROOT, "app/data/creditRoles.generated.ts"), "utf8");
    expect(src.startsWith("// GENERATED FILE — do not edit by hand.")).toBe(true);
    expect(src).toBe(renderCreditRoles(DECIDED));
    expect(CREDIT_ROLES_READ_ON).toBe(DECIDED.readOn);
  });
});

describe("Burna Boy's ledgers file every song by his Spotify credit", () => {
  it("/certifications: Singles are lead (co-leads included), Featured appearances are featured", () => {
    expect(misfiled(singles, features)).toEqual([]);
  });

  it("/records/charts: Singles are lead, Featured are featured", () => {
    expect(misfiled(singleCharts, featureCharts)).toEqual([]);
  });

  it("negative control: the filing that shipped until 7 Oct 2026 fails", () => {
    // The row as it stood in `features`, verbatim.
    const SHIPPED = { title: "Location", credit: "Dave ft. Burna Boy", year: 2019 };
    expect(misfiled(singles.filter((r) => r.title !== "Location"), [...features, SHIPPED])).toEqual(["Location (filed featured)"]);
    expect(misfiled([], [{ title: "We Pray" }, { title: "Own It" }, { title: "Ginger" }])).toEqual([
      "We Pray (filed featured)",
      "Own It (filed featured)",
    ]);
  });

  it("every song page has a role, and its tag says it", () => {
    for (const s of songs) expect(BURNA_ROLES[s.title], s.title).toBeTruthy();
    expect(roleTag("Last Last")).toBe("Lead");
    expect(roleTag("WGFT")).toBe("Co-lead with Gunna");
    expect(roleTag("Darko")).toBe("Co-lead with DJDS");
    expect(roleTag("Jerusalema (Remix)")).toBe("Featured");
    expect(roleTag("Dai Dai")).toBe("Co-lead with Shakira");
    // His own songs with a guest are plain Lead, though Spotify lists the guest as a main artist too.
    expect(roleTag("TaTaTa")).toBe("Lead");
    expect(roleTag("For My Hand")).toBe("Lead");
  });

  it("covers every title in his ledgers and song pages, and nothing else", () => {
    const titles = new Set([...singles, ...features, ...singleCharts, ...featureCharts, ...songs].map((r) => r.title));
    expect(new Set(Object.keys(BURNA_ROLES))).toEqual(titles);
  });
});

describe("the board files every certified release by the artist's own Spotify credit", () => {
  it("every non-album release's kind is its artist's role", () => {
    expect(afrobeatsArtists.flatMap((a) => boardMisfiled(a.slug, a.releases))).toEqual([]);
  });

  it("negative control: Wizkid's “Brown Skin Girl” as it was filed until 7 Oct 2026 fails", () => {
    const SHIPPED = { title: "Brown Skin Girl", kind: "Featured appearances" as const };
    expect(boardMisfiled("wizkid", [SHIPPED])).toEqual(["wizkid: Brown Skin Girl (Featured appearances)"]);
  });

  it("covers every certified release of every board artist, and nothing else", () => {
    expect(Object.keys(BOARD_ROLES).sort()).toEqual(afrobeatsArtists.map((a) => a.slug).sort());
    for (const a of afrobeatsArtists) {
      const titles = a.releases.filter((r) => r.kind !== "Albums").map((r) => r.title);
      expect(new Set(titles).size, `${a.slug}: a title twice`).toBe(titles.length);
      expect(new Set(Object.keys(BOARD_ROLES[a.slug])), a.slug).toEqual(new Set(titles));
    }
  });

  it("one record can be lead for one artist and featured for another — what Spotify credits each as", () => {
    // Supersedes the 6 Oct 2026 ruling that the board artists billed after one
    // lead are filed one way (debug rulings item 3).
    expect(BOARD_ROLES.davido["Like (Iyanya ft. Davido & Kizz Daniel)"].role).toBe("lead");
    expect(BOARD_ROLES["kizz-daniel"]["Like (Iyanya ft. Davido & Kizz Daniel)"].role).toBe("featured");
    expect(BOARD_ROLES.rema["Won Da Mo"].role).toBe("lead");
    expect(BOARD_ROLES["ayra-starr"]["Won Da Mo"].role).toBe("featured");
    // Isaka (6AM): CIZA, Tems and OMAH LAY are all Main Artist — lead on both boards.
    expect(BOARD_ROLES.tems["Isaka (6AM)"].role).toBe("lead");
    expect(BOARD_ROLES["omah-lay"]["Isaka (6AM)"].role).toBe("lead");
  });
});

describe("every role traces to the raw reads", () => {
  const all: [string, string, ReleaseRole][] = [
    ...Object.entries(BURNA_ROLES).map(([t, r]) => ["burna-boy", t, r] as [string, string, ReleaseRole]),
    ...Object.entries(BOARD_ROLES).flatMap(([slug, rows]) => Object.entries(rows).map(([t, r]) => [slug, t, r] as [string, string, ReleaseRole])),
  ];

  it("a Spotify role is the artist's credit on that track: Main Artist ⇔ lead", () => {
    const bad: string[] = [];
    for (const [slug, title, r] of all) {
      if (r.source !== "spotify") continue;
      const row = RAW_BY_ID.get(r.spotifyId!);
      if (!row) {
        bad.push(`${slug} ${title}: no raw read for ${r.spotifyId}`);
        continue;
      }
      const name = slug === "burna-boy" ? "Burna Boy" : SPOTIFY_NAME[slug];
      const credits = row.artists.filter((x) => x.name === name);
      if (credits.length !== 1 || roleOfCredit(credits[0].role) !== r.role)
        bad.push(`${slug} ${title}: ${JSON.stringify(row.artists)} vs ${r.role}`);
    }
    expect(bad).toEqual([]);
  });

  it("a billing role carries its billing, and the billing rule gives it", () => {
    // The six the sweep filed without storing the billing: they keep the
    // sweep's filing (billed first = lead), and say so.
    const NOT_STORED = ["davido/Dodo", "asake/Military", "seyi-vibez/Alaska", "seyi-vibez/IG Story", "seyi-vibez/G.O.A.T", "fireboy-dml/Southy Love"];
    const seen: string[] = [];
    for (const [slug, title, r] of all) {
      if (r.source !== "billing") continue;
      expect(r.spotifyId, `${slug} ${title}`).toBeUndefined();
      if (!r.billing) {
        seen.push(`${slug}/${title}`);
        expect(r.basis, `${slug} ${title}`).toMatch(/billing string not stored/);
        continue;
      }
      const name = slug === "burna-boy" ? "Burna Boy" : BILLING_NAME(slug);
      expect(roleFromBilling(r.billing, name), `${slug} ${title}: "${r.billing}"`).toBe(r.role);
    }
    expect(seen.sort()).toEqual([...NOT_STORED].sort());
  });

  it("the billing rule: after “ft.” is featured, anything else is lead", () => {
    expect(roleFromBilling("Arrdee ft. Black Sherif", "Black Sherif")).toBe("featured");
    expect(roleFromBilling("Kizz Daniel ft. Falz, Olamide & LK Kuddy", "Olamide")).toBe("featured");
    expect(roleFromBilling("Kizz Daniel ft. Falz, Olamide & LK Kuddy", "Kizz Daniel")).toBe("lead");
    expect(roleFromBilling("Poco Lee & Kizz Daniel", "Kizz Daniel")).toBe("lead");
    expect(roleFromBilling("TxC, Davido ft. Tony Duardo, LeeMcKrazy & Djy Biza", "Davido")).toBe("lead");
    expect(roleFromBilling("Olamide", "Olamide")).toBe("lead");
  });

  it("Olamide's “Julie” and Fireboy DML's “Running” use their own tracks, not a same-titled song", () => {
    expect(BOARD_ROLES.olamide.Julie.spotifyId).toBe("58f9RS1Wkaapezwhu5Cu3L");
    expect(BOARD_ROLES["fireboy-dml"].Running.spotifyId).toBe("6858xmZthZ7jEe06VyZxbN");
    expect(BOARD_ROLES["fireboy-dml"].Running.role).toBe("lead");
  });
});

describe("Burna Boy's co-leads", () => {
  // Anchored here, not built from the data: the 30 lead releases whose billing
  // is not his own (29 in the ledgers, plus the "Darko" song page).
  const CO_LEADS = [
    "4 Kampé II", "All My Life (Burna Boy Remix)", "Birthday", "Coming Home", "Dai Dai", "Darko", "Do I",
    "Good Time", "I FEEL IT", "Just Like Me", "Laho II", "Lenu (Remix)", "Location", "Loved by You",
    "Masculine", "Mera Na", "My Oasis", "Only You", "Own It", "Play Play", "ROBOSHOTTA", "Rollin'", "Rotate",
    "Second Sermon (Remix)", "Talibans II", "Teary Eyes", "Tshwala Bam (Remix)", "We Pray", "WGFT",
    "Yaba Buluku (Remix)",
  ];

  it("are exactly the thirty, and every one is a lead", () => {
    expect(burnaCoLeadTitles().sort()).toEqual([...CO_LEADS].sort());
    for (const [t, r] of Object.entries(BURNA_ROLES)) if (r.coLeadWith) expect(r.role, t).toBe("lead");
  });

  it("name Spotify's other Main Artists on the track, in the site's spelling", () => {
    const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
    for (const t of CO_LEADS) {
      const r = BURNA_ROLES[t];
      const row = RAW_BY_ID.get(r.spotifyId!)!;
      const mains = row.artists.filter((a) => a.role === "Main Artist" && a.name !== "Burna Boy").map((a) => fold(a.name));
      expect(r.coLeadWith!.map(fold).sort(), t).toEqual(mains.sort());
    }
  });
});

describe("Burna Boy's role on every track on his kworb page", () => {
  const tracks = Object.entries(burnaTrackRoles.tracks as Record<string, { role: string; title: string }>);

  it("holds all 284 tracks of the read, each traced to its credits", () => {
    expect(tracks.length).toBeGreaterThanOrEqual(284);
    for (const [id, t] of tracks) {
      const row = RAW_BY_ID.get(id);
      expect(row, `${t.title} (${id}) has no raw read`).toBeTruthy();
      const own = row!.artists.filter((a) => a.name === "Burna Boy");
      expect(own.length, t.title).toBe(1);
      expect(roleOfCredit(own[0].role), t.title).toBe(t.role);
    }
  });

  it("agrees with the ledgers wherever a site release is one of his kworb tracks", () => {
    const byId = new Map(tracks);
    for (const [title, r] of Object.entries(BURNA_ROLES)) {
      const t = r.spotifyId ? byId.get(r.spotifyId) : undefined;
      if (!t) continue;
      expect(t.role, title).toBe(r.role);
      expect(t.title, r.spotifyId).toBe(title);
    }
  });
});
