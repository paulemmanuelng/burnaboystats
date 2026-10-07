// Pure helpers for the credit-role data: the decided file in, the generated
// TypeScript out. scripts/roles/build-credit-roles.mjs is only the file writer;
// tests/creditRoles.test.ts calls renderCreditRoles() itself and asserts the
// checked-in app/data/creditRoles.generated.ts is still what it returns.
//
// THE RULE (Paul, 6 Oct 2026): an artist's role on a release is Spotify's own
// credit role for that artist in the track's "View credits" panel — "Main
// Artist" is LEAD, "Featured Artist" is FEATURED. Where Spotify has no credit
// for the artist on the record (not on Spotify with them, or only a different
// version), the release billing decides: "X ft. ARTIST" is featured, anything
// else (solo, "ARTIST ft. X", co-billed "X & ARTIST") is lead. Evidence:
// docs/sourcing/credit-roles-2026-10-07.md.

/** The billing string a fallback row was decided by, as its basis quotes it
 *  ('billing "Arrdee ft. Black Sherif" (TCSN register row)'). Undefined where
 *  the sweep never stored one. */
export function billingOf(basis) {
  const m = /billing "([^"]+)"/.exec(basis ?? "");
  return m ? m[1] : undefined;
}

/** The billing rule, for a release with no Spotify credit for the artist:
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

function entry(v, { burna }) {
  const out = { role: v.role, source: v.source };
  if (v.spotifyId) out.spotifyId = v.spotifyId;
  const billing = burna ? v.billing ?? undefined : billingOf(v.basis);
  if (billing) out.billing = billing;
  if (v.coLeadWith?.length) out.coLeadWith = v.coLeadWith;
  if (v.basis) out.basis = v.basis;
  return out;
}

const line = (key, value) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`;

/** The source of app/data/creditRoles.generated.ts for a decided file. */
export function renderCreditRoles(decided) {
  const burna = Object.entries(decided.burna).map(([title, v]) => line(title, entry(v, { burna: true })));
  const board = Object.entries(decided.board).map(
    ([slug, rows]) =>
      `  ${JSON.stringify(slug)}: {\n${Object.entries(rows)
        .map(([title, v]) => `  ${line(title, entry(v, { burna: false }))}`)
        .join("\n")}\n  },`
  );
  return `// GENERATED FILE — do not edit by hand.
// Rebuilt by scripts/roles/build-credit-roles.mjs from
// docs/sourcing/roles-decided-${decided.readOn}.json; tests/creditRoles.test.ts
// asserts this file matches it. To change a role, change the decided file (and
// its evidence in docs/sourcing/credit-roles-${decided.readOn}.md), then rerun.
//
// ${decided.rule}.

import type { ReleaseRole } from "./creditRoles";

export const CREDIT_ROLES_READ_ON = ${JSON.stringify(decided.readOn)};

/** Burna Boy: every title in his certification and chart ledgers, plus the
 *  song pages that are in neither. */
export const BURNA_ROLES_DATA: Readonly<Record<string, ReleaseRole>> = {
${burna.join("\n")}
};

/** The board: each artist's certified releases (albums excepted), by slug. */
export const BOARD_ROLES_DATA: Readonly<Record<string, Readonly<Record<string, ReleaseRole>>>> = {
${board.join("\n")}
};
`;
}
