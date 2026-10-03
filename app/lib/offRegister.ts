import { allItems, COUNTRIES } from "../data/certifications";
import { CERT_PROGRAMS } from "../data/certThresholds";
import { sweptArtists, countryMeta, offRegisterCount, type AfroCert } from "../data/afrobeats";

// The plaques counted WITHOUT a register row behind them, across the whole
// board — Burna Boy's own ledger and every swept artist's — in one place, so
// the hub's Provenance tile and the methodology's Certifications card say the
// same thing and move with the data (PR #400 review, 3 Oct 2026). Both used to
// say a figure with no register behind it is never counted, which stopped
// being true when Tyla's Sony Music Africa award and SNEP's own announcement
// of her album's Or were counted.

/** Burna Boy's label plaques: a per-cert `body` that is not a separately
 *  priced programme names a different ISSUER ("Dai Dai"'s Colombian Gold,
 *  Sony Music Colombia). */
export const burnaLabelPlaques = allItems.flatMap((r) =>
  r.certs
    .filter((c) => c.body && !CERT_PROGRAMS[c.body])
    .map((c) => `“${r.title}”'s ${c.level} in ${COUNTRIES[c.c]?.name ?? c.c}, issued by ${c.body}`),
);

const swept = sweptArtists;

/** Every plaque on the board that is not a register row, counted the way the
 *  board total counts (per artist, so a featured plaque on two boards is two). */
export const boardOffRegisterTotal = burnaLabelPlaques.length + swept.reduce((n, a) => n + offRegisterCount(a), 0);

const dateLabel = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** The board's label plaques, one entry per artist, issuer and country:
 *  "Tyla's 9 plaques in South Africa, issued by Sony Music Africa", or, for a
 *  single plaque, "Tems's “No.1” Gold in South Africa, issued by Sony Music Africa".
 *  A plaque the label announced rather than awarded (`announced` set) is named
 *  with its post: "…, one of them, “Chanel” Gold, announced on its own X
 *  account, 8 Jan 2026". */
export const boardLabelPlaques: string[] = swept.flatMap((a) => {
  const rows = a.releases.flatMap((r) => r.certs.filter((c) => c.source === "label").map((c) => ({ r, c })));
  const groups = new Map<string, { r: (typeof rows)[number]["r"]; c: AfroCert }[]>();
  for (const x of rows) {
    const key = `${x.c.c}|${x.c.body ?? ""}`;
    groups.set(key, [...(groups.get(key) ?? []), x]);
  }
  return [...groups.values()].map((g) => {
    const { r, c } = g[0];
    const where = countryMeta(c.c).name;
    const issuer = c.body ?? countryMeta(c.c).body;
    const post = (x: { c: AfroCert }) => (x.c.announced ? ` on ${x.c.announced.via}, ${dateLabel(x.c.announced.on)}` : "");
    if (g.length === 1)
      return c.announced
        ? `${a.name}'s “${r.title}” ${c.level} in ${where}, announced by ${issuer}${post(g[0])}`
        : `${a.name}'s “${r.title}” ${c.level} in ${where}, issued by ${issuer}`;
    const posts = g.filter((x) => x.c.announced);
    if (!posts.length) return `${a.name}'s ${g.length} plaques in ${where}, issued by ${issuer}`;
    // A group that mixes the label's award and its own announcement names the
    // two kinds apart: the post announces a certification, it does not say the
    // label issued a plaque (PR #402 review). "Tyla's 10 plaques in South
    // Africa from Sony Music Africa — 9 issued on its own award and “Chanel”
    // Gold, announced on its own X account, 8 Jan 2026".
    const awards = g.length - posts.length;
    const named = posts.map((x) => `“${x.r.title}” ${x.c.level}, announced${post(x)}`);
    const announcedPart =
      posts.length === 1 ? named[0] : `${posts.length} announced on its own posts (${named.join("; ")})`;
    return awards
      ? `${a.name}'s ${g.length} plaques in ${where} from ${issuer} — ${awards} issued on its own award and ${announcedPart}`
      : `${a.name}'s ${g.length} plaques in ${where} from ${issuer}, all ${announcedPart.replace(/^\d+ /, "")}`;
  });
});

/** Whether any of the board's label plaques is the label's own announcement
 *  rather than its award — the methodology names both kinds when it is. */
const labelAnnounced = swept.some((a) => a.releases.some((r) => r.certs.some((c) => c.source === "label" && c.announced)));

/** The board's body announcements the register omits, one entry per plaque:
 *  "Tyla's “Tyla” Gold in France, announced by SNEP on its own X account,
 *  6 Apr 2026, and not in its database". */
export const boardAnnouncements: string[] = swept.flatMap((a) =>
  a.releases.flatMap((r) =>
    r.certs
      .filter((c) => c.source === "announcement")
      .map((c) => {
        const body = c.body ?? countryMeta(c.c).body;
        const how = c.announced ? ` on ${c.announced.via}, ${dateLabel(c.announced.on)}` : "";
        return `${a.name}'s “${r.title}” ${c.level} in ${countryMeta(c.c).name}, announced by ${body}${how}, and not in its database`;
      }),
  ),
);

/** The methodology's Certifications rule, with its exceptions named from the
 *  data. Burna Boy's own exception keeps the words Paul's ruling of 24 Sep 2026
 *  gave it (tests/ownerRulings.test.tsx); the board's follow, by kind. With no
 *  exceptions at all it is the plain database rule it always was. */
export function certificationRule(): string {
  const announced = boardAnnouncements;
  const rule = `A certification is only counted once it appears in the awarding body's own searchable database${
    announced.length ? ", or the body itself has published it" : ""
  }.`;
  const parts: string[] = [];
  if (burnaLabelPlaques.length)
    parts.push(
      `In Burna Boy's own record, the one exception is a market with no current public register, where the label's own plaque stands: ${burnaLabelPlaques.join("; ")}.`,
    );
  if (boardLabelPlaques.length)
    parts.push(
      `On the Afrobeats board, a label's own plaque${labelAnnounced ? " or announcement" : ""} stands where the register holds no row: ${boardLabelPlaques.join("; ")}.`,
    );
  if (announced.length)
    parts.push(
      `${boardLabelPlaques.length ? "And" : "On the Afrobeats board,"} the certifying body's own published announcement stands where its database omits the row: ${announced.join("; ")}.`,
    );
  return [rule, ...parts].join(" ");
}

/** The hub Provenance tile's closing sentence. It said "A figure with no
 *  register behind it is not published." over the board's label plaques and
 *  SNEP's announced Or (PR #400 review); with any such plaque it says what
 *  stands instead, and how many. */
export function provenanceTileSentence(): string {
  return boardOffRegisterTotal > 0
    ? `A figure with no register row behind it is published only where the body itself announced it or the label ${labelAnnounced ? "issued or announced" : "issued"} the plaque — ${boardOffRegisterTotal} of the board's plaques, each named in the methodology.`
    : "A figure with no register behind it is not published.";
}
