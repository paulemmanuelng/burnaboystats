// Lead or featured, the way ChartMasters files it ("Rule C"; Paul, 7 Oct 2026).
// Pure helpers: the rule's inputs in, the generated TypeScript out.
// scripts/roles/build-song-roles.mjs is only the file writer;
// tests/songRoles.test.ts calls these itself and asserts the checked-in
// app/data/songRoles.generated.ts is still what they return.
//
// THE RULE. A song is LEAD for an artist when
//   (1) the same song — matched by TITLE, never by track id — is on any
//       release in the artist's OWN Spotify discography (albums, singles & EPs,
//       compilations where they are a release artist), or
//   (2) the artist is the first-listed artist on the track (kworb's song list
//       shows no "*" against it).
// Everything else is FEATURED. Three songs ChartMasters files as features
// although they sit on the artist's own single are overridden to featured
// (app/data/roleOverrides.json). Part 1 matches titles, so a row whose title
// is shared by a DIFFERENT song on the artist's own releases carries
// `titleCollision` in the inputs and skips part 1 (Davido's "For You", Teni
// ft. Davido, is not his 2012 solo "For You"). A release that is not on Spotify with the
// artist falls back to its billing: "X ft. ARTIST" is featured, anything else
// is lead. Evidence and how to refresh: docs/sourcing/rule-c-2026-10-07.md.

/** The title as Rule C compares it: lower case, straight quotes, no
 *  zero-width characters, and no "(feat./ft./with …)" / "[with …]" bracket,
 *  " - feat. …" tail or " - Single Version". "wgft (feat. Burna Boy)" and
 *  "WGFT" are one song; "Own It (feat. Burna Boy & Stylo G) [Toddla T Remix]"
 *  and "Own It (feat. Ed Sheeran & Burna Boy)" are not. */
export function normTitle(title) {
  let t = String(title)
    .replace(/[​-‍﻿]/g, "")
    .toLowerCase()
    .replace(/[‘’]/g, "'");
  t = t.replace(/\s+-\s+single version$/, "");
  t = t.replace(/\s*[([]\s*(feat|ft|with)\.?\s[^)\]]*[)\]]/g, "");
  t = t.replace(/\s+-\s+(feat|ft)\.?\s.*$/, "");
  return t.replace(/\s+/g, " ").trim();
}

/** normalised track title -> the first own release that carries it, for one
 *  artist's block of own-releases-*.json. */
export function ownTitleIndex(artistBlock) {
  const index = new Map();
  for (const release of artistBlock.releases)
    for (const track of release.tracks) {
      const key = normTitle(track);
      if (!index.has(key)) index.set(key, release.title);
    }
  return index;
}

/** The billing rule, for a release with no Spotify track for the artist:
 *  named after " ft. " is featured; named before it (or with no " ft. " at
 *  all) is lead. Undefined when the billing does not name the artist. */
export function roleFromBilling(billing, artist) {
  const [main, guests = ""] = String(billing).split(/ ft\. /);
  const names = (part) => part.split(/,\s*| & | x /).map((s) => s.trim().toLowerCase());
  const who = artist.toLowerCase();
  if (names(main).includes(who)) return "lead";
  if (names(guests).includes(who)) return "featured";
  return undefined;
}

/**
 * Rule C for one release.
 *  - `title`: the site's title for the release.
 *  - `input`: { spotifyTitle?, firstListed?, billing?, fallbackRole?,
 *    titleCollision? } — the Spotify track's title and whether the artist is
 *    first-listed on it; for a release with no Spotify track for the artist,
 *    its billing (or, where the sweep never stored one, the role it filed);
 *    and, where a different song on the artist's own releases has the same
 *    title, why (part 1 is then skipped).
 *  - `own`: ownTitleIndex() of the artist's discography.
 *  - `overrides`: the artist's rows of roleOverrides.json.
 * Returns { role, rule, ownRelease? } with rule one of "own-release",
 * "first-listed", "neither", "override", "billing".
 */
export function ruleC({ title, input, artistName, own, overrides = [] }) {
  const songTitle = input.spotifyTitle ?? title;
  const key = normTitle(songTitle);
  const override = overrides.find((o) => normTitle(o.spotifyTitle) === key);
  if (override) return { role: "featured", rule: "override" };
  // Part 1 by the song's own title. A release with no Spotify track matched is
  // still "on Spotify with the artist" when its title is in their discography.
  // A title shared with a different song of theirs is no match.
  if (own.has(key) && !input.titleCollision) return { role: "lead", rule: "own-release", ownRelease: own.get(key) };
  if (input.spotifyTitle) return input.firstListed ? { role: "lead", rule: "first-listed" } : { role: "featured", rule: "neither" };
  const byBilling = input.billing ? roleFromBilling(input.billing, artistName) : input.fallbackRole;
  if (!byBilling) throw new Error(`Rule C: “${title}” (${artistName}) has no Spotify track, no billing naming them and no stored filing`);
  return { role: byBilling, rule: "billing" };
}

/** Is the artist billed first on the record? On Spotify: kworb's first-listed
 *  flag. Off it: named first in the billing ("TxC, Davido ft. …" is TxC's).
 *  Not a role — a record can have two leads — but the order the country
 *  boards name a shared record's lead acts in: "Bandana" is Fireboy DML's
 *  single with Asake, both leads, Fireboy DML billed first. */
export function isBilledFirst(input, artist) {
  if (input.spotifyTitle) return !!input.firstListed;
  if (!input.billing) return false;
  const first = String(input.billing).split(/ ft\. /)[0].split(/,\s*| & | x /)[0].trim().toLowerCase();
  return first === artist.toLowerCase();
}

/** A lead whose billing is not Burna Boy's own ("Burna Boy", "Burna Boy ft. X",
 *  or a guest line on his own song) — someone else's record in his discography,
 *  or a co-billed one. */
export function isCoLeadBilling(billing) {
  if (!billing) return false;
  if (/^(feat\.|with) /.test(billing)) return false;
  return !/^Burna Boy( (ft\.|feat\.) .*)?$/.test(billing);
}

/** Every release's role, from the inputs, the own-release lists and the
 *  overrides: { burna: {title: role}, board: {slug: {title: role}} }. */
export function decideAll(inputs, ownReleases, overrides) {
  const forArtist = (slug) => ({
    artistName: inputs.artists[slug],
    own: ownTitleIndex(ownReleases.artists[slug]),
    overrides: overrides.filter((o) => o.artist === slug),
  });
  const one = (slug, title, input) => {
    const decided = ruleC({ title, input, ...forArtist(slug) });
    const out = { role: decided.role, rule: decided.rule };
    if (decided.ownRelease) out.ownRelease = decided.ownRelease;
    if (input.spotifyTitle) out.spotifyTitle = input.spotifyTitle;
    if (input.billing) out.billing = input.billing;
    if (isBilledFirst(input, inputs.artists[slug])) out.billedFirst = true;
    if (slug === "burna-boy" && decided.role === "lead" && isCoLeadBilling(input.billing)) {
      if (!input.coLeadWith?.length) throw new Error(`Rule C: co-lead “${title}” has no coLeadWith names`);
      out.coLeadWith = input.coLeadWith;
    }
    return out;
  };
  const burna = Object.fromEntries(Object.entries(inputs.burna).map(([t, input]) => [t, one("burna-boy", t, input)]));
  const board = Object.fromEntries(
    Object.entries(inputs.board).map(([slug, rows]) => [slug, Object.fromEntries(Object.entries(rows).map(([t, input]) => [t, one(slug, t, input)]))]),
  );
  return { burna, board };
}

const line = (key, value) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`;

/** The source of app/data/songRoles.generated.ts. */
export function renderSongRoles(inputs, ownReleases, overrides) {
  const { burna, board } = decideAll(inputs, ownReleases, overrides);
  const burnaLines = Object.entries(burna).map(([t, v]) => line(t, v));
  const boardLines = Object.entries(board).map(
    ([slug, rows]) => `  ${JSON.stringify(slug)}: {\n${Object.entries(rows).map(([t, v]) => `  ${line(t, v)}`).join("\n")}\n  },`,
  );
  return `// GENERATED FILE — do not edit by hand.
// Rebuilt by scripts/roles/build-song-roles.mjs from
// docs/sourcing/rule-c-inputs-${inputs.readOn}.json, docs/sourcing/own-releases-${ownReleases.readOn}.json
// and app/data/roleOverrides.json; tests/songRoles.test.ts asserts this file
// matches them. To file a new release, add it to the inputs and rerun.
//
// Rule C (Paul, 7 Oct 2026): lead when the song is on one of the artist's own
// Spotify releases (matched by title) or the artist is first-listed on it;
// featured otherwise; three overrides; billing only where Spotify has no track
// for the artist.

import type { ReleaseRole } from "./songRoles";

export const SONG_ROLES_READ_ON = ${JSON.stringify(inputs.readOn)};

/** Burna Boy: every title in his certification and chart ledgers, plus the
 *  song pages that are in neither. */
export const BURNA_ROLES_DATA: Readonly<Record<string, ReleaseRole>> = {
${burnaLines.join("\n")}
};

/** The board: each artist's certified releases (albums excepted), by slug. */
export const BOARD_ROLES_DATA: Readonly<Record<string, Readonly<Record<string, ReleaseRole>>>> = {
${boardLines.join("\n")}
};
`;
}
