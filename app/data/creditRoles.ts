/**
 * Lead or featured: ONE role per artist per release, read off Spotify.
 *
 * THE RULE (Paul, 6 Oct 2026): an artist's role on a song is Spotify's own
 * credit role for that artist in the track's "View credits" panel. "Main
 * Artist" is LEAD; "Featured Artist" is FEATURED. Where a release is not on
 * Spotify with that artist, or Spotify carries only a different version, the
 * release billing decides — "X ft. ARTIST" is featured, anything else (solo,
 * "ARTIST ft. X", co-billed "X & ARTIST") is lead — and the release says so
 * (`source: "billing"`). Not Wikipedia, Genius or fan pages. ChartMasters'
 * per-artist "Lead streams" / "Feat streams" are a cross-check only, and they
 * do not file every song the way Spotify credits it (CM_FEATURES_GROUP_BURNA).
 *
 * One record can be lead for one artist and featured for another — "Like"
 * (Iyanya ft. Davido & Kizz Daniel) is Davido's lead and Kizz Daniel's
 * feature, because that is what Spotify credits each of them as.
 *
 * Every page that splits lead from featured reads this: Burna Boy's ledgers
 * (certifications.ts `singles` / `features`, charts.ts `singleCharts` /
 * `featureCharts`), the board's `kind`, the song pages' role tag and /music's
 * "Lead vs featured" section. tests/creditRoles.test.ts holds every filing to
 * it. The data is generated (creditRoles.generated.ts) from
 * docs/sourcing/roles-decided-2026-10-07.json; the evidence is
 * docs/sourcing/credit-roles-2026-10-07.md and .json.
 *
 * Server-only: client components get titles and names as props.
 */
import { BOARD_ROLES_DATA, BURNA_ROLES_DATA, CREDIT_ROLES_READ_ON } from "./creditRoles.generated";

export { CREDIT_ROLES_READ_ON };

export type CreditRole = "lead" | "featured";

export interface ReleaseRole {
  role: CreditRole;
  /** "spotify": the role is the artist's credit in Spotify's panel for
   *  `spotifyId`. "billing": no Spotify credit for the artist on the record,
   *  so the release billing decided. */
  source: "spotify" | "billing";
  spotifyId?: string;
  /** The billing as stored (the ledger's credit line, or the register row a
   *  fallback was decided by). Never parsed for the role of a "spotify" row. */
  billing?: string;
  /** Burna Boy's co-leads only: Spotify's other Main Artists on the track, in
   *  the site's spelling. STORED, never parsed out of a title or a credit
   *  line. A lead whose billing is his own ("For My Hand" feat. Ed Sheeran)
   *  carries none, even where Spotify lists the guest as a main artist too. */
  coLeadWith?: readonly string[];
  /** Why a row is what it is, where that is not a plain Spotify read. */
  basis?: string;
}

/** Burna Boy's role on every title in his ledgers and song pages. */
export const BURNA_ROLES: Readonly<Record<string, ReleaseRole>> = BURNA_ROLES_DATA;

/** Each board artist's role on each certified release (albums excepted). */
export const BOARD_ROLES: Readonly<Record<string, Readonly<Record<string, ReleaseRole>>>> = BOARD_ROLES_DATA;

/** The board's group for a role (AfroRelease.kind). */
export const KIND_FOR_ROLE: Readonly<Record<CreditRole, "Lead singles" | "Featured appearances">> = {
  lead: "Lead singles",
  featured: "Featured appearances",
};

/** Burna Boy's role on a title; throws on a title the data does not hold, so
 *  a new release cannot be filed without its credits being read. */
export function burnaRole(title: string): ReleaseRole {
  const r = BURNA_ROLES[title];
  if (!r) throw new Error(`No credit role for “${title}”: read its Spotify credits and add it to the decided file.`);
  return r;
}

/** Every Burna Boy title tagged co-lead, in the data's order. */
export const burnaCoLeadTitles = (): string[] =>
  Object.entries(BURNA_ROLES)
    .filter(([, r]) => r.coLeadWith?.length)
    .map(([t]) => t);

/** title -> the other main artists, for the co-lead tag. Only the titles in
 *  `titles` (the ledger a page renders), so a component gets what it shows. */
export function coLeadsFor(titles: readonly string[]): Record<string, readonly string[]> {
  const out: Record<string, readonly string[]> = {};
  for (const t of titles) {
    const names = BURNA_ROLES[t]?.coLeadWith;
    if (names?.length) out[t] = names;
  }
  return out;
}

/** "A", "A and B", "A, B and C". */
export const andList = (names: readonly string[]): string =>
  names.length <= 1 ? (names[0] ?? "") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;

/** The song pages' role tag: "Lead", "Co-lead with Gunna" or "Featured". */
export function roleTag(title: string): string {
  const r = burnaRole(title);
  if (r.role === "featured") return "Featured";
  return r.coLeadWith?.length ? `Co-lead with ${andList(r.coLeadWith)}` : "Lead";
}

/** The co-lead tag's hover text. */
export const coLeadTitleText = (names: readonly string[]): string =>
  `Spotify credits Burna Boy as a main artist alongside ${andList(names)}`;

/**
 * The four songs ChartMasters' public song table for Burna Boy files in its
 * "Features" group although Spotify's credits list him as a Main Artist on
 * each — read 7 Oct 2026 (chartmasters.org/artist/burna-boy, its top 20).
 * They are most of the gap between his lead streams by Spotify's credits and
 * ChartMasters' 8.0B; /music names them in its cross-check line. Site titles.
 */
export const CM_FEATURES_GROUP_BURNA = ["Location", "Own It", "We Pray", "Loved by You"] as const;
export const CM_FEATURES_GROUP_READ_ON = "2026-10-07";
