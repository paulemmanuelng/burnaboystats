/**
 * Lead or featured: ONE role per artist per release, the way ChartMasters
 * files it ("Rule C"; Paul, 7 Oct 2026: "exactly as ChartMasters reads it").
 *
 * THE RULE. A song is LEAD for an artist when (1) the same song — matched by
 * title, never by track id — is on any release in the artist's OWN Spotify
 * discography (albums, singles & EPs, compilations where they are a release
 * artist), or (2) the artist is the first-listed artist on the track (kworb
 * shows no "*" against it). Everything else is FEATURED. Three songs that sit
 * on the artist's own single but that ChartMasters files as features are
 * overridden to featured (roleOverrides.json, Paul approved 7 Oct 2026). A
 * release that is not on Spotify with the artist falls back to its billing:
 * "X ft. ARTIST" is featured, anything else is lead. Albums keep their own
 * group.
 *
 * So "WGFT" (Gunna ft. Burna Boy) is his LEAD — the song is on his own single
 * "wgft (feat. Burna Boy)" — and "Location" (Dave ft. Burna Boy) is FEATURED:
 * it is on none of his releases and Dave is billed first. One record can be
 * lead for one artist and featured for another: "Ginger" is Wizkid's lead (his
 * album) and Burna Boy's feature.
 *
 * Every page that splits lead from featured reads this: Burna Boy's ledgers
 * (certifications.ts `singles` / `features`, charts.ts `singleCharts` /
 * `featureCharts`), the board's `kind`, the co-lead tag and the song pages'
 * role tag. tests/songRoles.test.ts holds every filing to it. The data is
 * generated (songRoles.generated.ts) by scripts/roles/build-song-roles.mjs from
 * docs/sourcing/rule-c-inputs-2026-10-07.json, the artists' own releases
 * (docs/sourcing/own-releases-2026-10-07.json) and roleOverrides.json; the
 * evidence and how to file a new release: docs/sourcing/rule-c-2026-10-07.md.
 *
 * Server-only: client components get titles and names as props.
 */
import { BOARD_ROLES_DATA, BURNA_ROLES_DATA, SONG_ROLES_READ_ON } from "./songRoles.generated";
import { andList } from "../lib/coLead";

export { SONG_ROLES_READ_ON };

export type SongRole = "lead" | "featured";

export interface ReleaseRole {
  role: SongRole;
  /** Which part of Rule C decided it. "own-release": the song is on one of
   *  the artist's own Spotify releases (`ownRelease`). "first-listed": the
   *  artist is first-listed on the track. "neither": on Spotify with the
   *  artist, but neither. "override": one of roleOverrides.json. "billing":
   *  not on Spotify with the artist, so the billing decided. */
  rule: "own-release" | "first-listed" | "neither" | "override" | "billing";
  /** The own release that carries the song, for "own-release". */
  ownRelease?: string;
  /** The Spotify track's title the rule matched. */
  spotifyTitle?: string;
  /** The billing as stored. Never parsed for the role of a song on Spotify. */
  billing?: string;
  /** The artist is billed first on the record: first-listed on the Spotify
   *  track (kworb shows no "*"), or, off Spotify, named first in the billing.
   *  Not part of the role; it orders a shared record's lead acts on the
   *  country boards (certCountry.recordsOf). */
  billedFirst?: true;
  /** Burna Boy's co-leads only: the other acts the tag names, in the site's
   *  spelling. STORED, never parsed out of a title or a credit line. His own
   *  songs with a guest ("For My Hand" feat. Ed Sheeran) carry none. */
  coLeadWith?: readonly string[];
}

/** Burna Boy's role on every title in his ledgers and song pages. */
export const BURNA_ROLES: Readonly<Record<string, ReleaseRole>> = BURNA_ROLES_DATA;

/** Each board artist's role on each certified release (albums excepted). */
export const BOARD_ROLES: Readonly<Record<string, Readonly<Record<string, ReleaseRole>>>> = BOARD_ROLES_DATA;

/** Is the artist billed first on this release (`billedFirst`)? False for a
 *  title the roles do not hold, such as an album. */
export function isBilledFirst(slug: string, title: string): boolean {
  const r = slug === "burna-boy" ? BURNA_ROLES[title] : BOARD_ROLES[slug]?.[title];
  return r?.billedFirst === true;
}

/** The board's group for a role (AfroRelease.kind). */
export const KIND_FOR_ROLE: Readonly<Record<SongRole, "Lead singles" | "Featured appearances">> = {
  lead: "Lead singles",
  featured: "Featured appearances",
};

/** Burna Boy's role on a title; throws on a title the data does not hold, so
 *  a new release cannot be filed without Rule C being run on it. */
export function burnaRole(title: string): ReleaseRole {
  const r = BURNA_ROLES[title];
  if (!r) throw new Error(`No Rule C role for “${title}”: add it to docs/sourcing/rule-c-inputs and run scripts/roles/build-song-roles.mjs.`);
  return r;
}

/** Every Burna Boy title tagged co-lead, in the data's order. */
export const burnaCoLeadTitles = (): string[] =>
  Object.entries(BURNA_ROLES)
    .filter(([, r]) => r.coLeadWith?.length)
    .map(([t]) => t);

/** title -> the other acts, for the co-lead tag. Only the titles in `titles`
 *  (the ledger a page renders), so a component gets what it shows. */
export function coLeadsFor(titles: readonly string[]): Record<string, readonly string[]> {
  const out: Record<string, readonly string[]> = {};
  for (const t of titles) {
    const names = BURNA_ROLES[t]?.coLeadWith;
    if (names?.length) out[t] = names;
  }
  return out;
}

/** The song pages' role tag: "Lead", "Co-lead with Gunna" or "Featured". */
export function roleTag(title: string): string {
  const r = burnaRole(title);
  if (r.role === "featured") return "Featured";
  return r.coLeadWith?.length ? `Co-lead with ${andList(r.coLeadWith)}` : "Lead";
}

/** The same tag in Spanish, for /dai-dai/es: "Artista principal", "Artista
 *  principal junto a Shakira" or "Artista invitado". */
export function roleTagEs(title: string): string {
  const r = burnaRole(title);
  if (r.role === "featured") return "Artista invitado";
  const names = r.coLeadWith ?? [];
  if (!names.length) return "Artista principal";
  const list = names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} y ${names.at(-1)}`;
  return `Artista principal junto a ${list}`;
}
