import { allItems, announcedPlaques, COUNTRIES, features, type Release } from "../data/certifications";
import { CERT_PROGRAMS, hasNoRegister } from "../data/certThresholds";
import { awardLabel } from "./awardName";
import { BURNA, sweptArtists, countryMeta, offRegisterCount, type AfroCert } from "../data/afrobeats";
import { enGbDate } from "./dates";
import { certsInView, homeCodeFor, type CertView } from "./certScope";

// The plaques counted WITHOUT a register row behind them, across the whole
// board — Burna Boy's own ledger and every swept artist's — in one place, so
// the hub's Provenance tile and the methodology's Certifications card say the
// same thing and move with the data (PR #400 review, 3 Oct 2026). Both used to
// say a figure with no register behind it is never counted, which stopped
// being true when Tyla's Sony Music Africa award and SNEP's own announcement
// of her album's Or were counted.

/** Burna Boy's label plaques: a per-cert `body` that is not a separately
 *  priced programme names a different ISSUER ("Dai Dai"'s Colombian Platinum,
 *  Sony Music; its Turkish Diamond, Sony Music Türkiye; "All Eyes on Me"'s
 *  South African 19× Platinum, Sony Music Africa). Each says why the label's
 *  plaque stands: a market with no current public register (Paul's rulings,
 *  24 Sep 2026 on Colombia, 7 Oct 2026 on Turkey), or a
 *  register he holds other rows in that holds none for this title — read
 *  from the data, not typed: a country where none of his plaques is a
 *  register row has no register this site reads. */
const issued = allItems.flatMap((r) =>
  r.certs
    .filter((c) => c.body && !CERT_PROGRAMS[c.body])
    .map((c) => ({
      text: `“${r.title}”'s ${awardLabel(c)} in ${COUNTRIES[c.c]?.name ?? c.c}, issued by ${c.body}`,
      registerRead: allItems.some((x) => x.certs.some((y) => y.c === c.c && (!y.body || CERT_PROGRAMS[y.body]))),
    })),
);
export const burnaLabelPlaques = issued.map((x) => x.text);

/** His label plaques in a market whose register the site DOES read, which
 *  holds no row for the title — "All Eyes on Me"'s 19× Platinum in South
 *  Africa, Sony Music Africa's. */
export const burnaNoRowLabelPlaques = issued.filter((x) => x.registerRead).map((x) => x.text);

/** The clause the short copies of the certification rule add while any such
 *  plaque stands. They named only the no-register route (Colombia), so on
 *  /share, /curator, /api/v1/certifications and /certifications the 19×
 *  Platinum had no route that admitted it (5 Oct 2026, core-12). `on` is the
 *  preposition each copy's list uses ("on ", "from ", or none). Empty when
 *  none stands, and the copy reads as it did before. */
export const noRowLabelClause = (lead: string, on = ""): string =>
  burnaNoRowLabelPlaques.length ? `${lead}where the register holds no row for the title, ${on}the label's own plaque` : "";

/** Burna Boy's plaques read from the certifying body's own publication, its
 *  register not yet listing the row (`source: "announcement"`): "“Dai Dai”'s
 *  Gold in Denmark, published by IFPI Denmark on Hitlisten, its official chart,
 *  in week 38 of 2026, and not yet in its database". Invisible here until
 *  5 Oct 2026, so the methodology named two exceptions and the hub counted 14
 *  over a Danish Gold no register lists (D-02). */
export const burnaAnnouncements = announcedPlaques.map(({ release: r, cert: c }) => {
  const body = c.body ?? COUNTRIES[c.c]?.body ?? c.c;
  const where = c.announced ? ` on ${c.announced.via}${c.announced.on ? `, ${dateLabel(c.announced.on)}` : ""}` : "";
  return `“${r.title}”'s ${awardLabel(c)} in ${COUNTRIES[c.c]?.name ?? c.c}, published by ${body}${where}, and not yet in its database`;
});

/**
 * Burna Boy's off-register line (design review 8 Oct 2026, fix 21; J1-5):
 * "3 certifications from the label's own plaque (Colombia, South Africa,
 * Turkey); 1 in Denmark from IFPI Denmark's own chart" — or undefined when
 * every plaque in the view is a register row.
 *
 * Built from the rows behind burnaLabelPlaques and burnaAnnouncements, so it
 * counts what they count: his label plaques grouped by their evidence, the
 * countries A–Z in brackets (C-9); then each body's own publications, named
 * from the data (COUNTRIES.DK.body is "IFPI Denmark", C-8) and called its
 * "own chart" when the publication is a chart, else its "own announcement".
 * The words are the board's (offRegisterPhrase, short form): the noun is
 * "certifications" and a label's document is its "plaque", never an "award"
 * (B-10). A view counts only the plaques it holds (lib/certScope, item 26b):
 * with features off, "All Eyes on Me" — a featured credit — leaves South
 * Africa out.
 */
export function burnaOffRegisterPhrase(view?: CertView): string | undefined {
  const rows: readonly Release[] = view
    ? certsInView(allItems, { home: homeCodeFor(BURNA.country), featured: new Set(features.map((r) => r.title)) }, view)
    : allItems;
  const label = rows.flatMap((r) => r.certs.filter((c) => c.body && !CERT_PROGRAMS[c.body]));
  const posts = rows.flatMap((r) => r.certs.filter((c) => c.source === "announcement" && !(c.body && !CERT_PROGRAMS[c.body])));
  const name = (c: string) => COUNTRIES[c]?.name ?? c;
  const and = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}` : xs[0]);
  const parts: { n: number; text: (noun: string) => string }[] = [];
  if (label.length) {
    const where = [...new Set(label.map((c) => name(c.c)))].sort((a, b) => a.localeCompare(b, "en"));
    parts.push({
      n: label.length,
      text: (noun) =>
        label.length === 1
          ? `${noun} in ${where[0]} from the label's own plaque`
          : `${noun} from the label's own plaque (${where.join(", ")})`,
    });
  }
  const byBody = new Map<string, typeof posts>();
  for (const c of posts) {
    const body = c.body ?? COUNTRIES[c.c]?.body ?? c.c;
    byBody.set(body, [...(byBody.get(body) ?? []), c]);
  }
  for (const [body, here] of byBody) {
    const kind = here.every((c) => /\bchart\b/.test(c.announced?.via ?? "")) ? "chart" : "announcement";
    const where = and([...new Set(here.map((c) => name(c.c)))].sort((a, b) => a.localeCompare(b, "en")));
    parts.push({ n: here.length, text: (noun) => `${noun} in ${where} from ${body}'s own ${kind}` });
  }
  if (!parts.length) return undefined;
  return parts
    .map((p, i) => p.text(i === 0 ? (p.n === 1 ? "1 certification" : `${p.n} certifications`) : String(p.n)))
    .join("; ");
}

const swept = sweptArtists;

/** Every plaque on the board that is not a register row, counted the way the
 *  board total counts (per artist, so a featured plaque on two boards is two). */
export const boardOffRegisterTotal =
  burnaLabelPlaques.length + burnaAnnouncements.length + swept.reduce((n, a) => n + offRegisterCount(a), 0);

// A declaration, so burnaAnnouncements above can call it.
function dateLabel(iso: string): string {
  return enGbDate(new Date(`${iso}T12:00:00Z`), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

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
        ? `${a.name}'s “${r.title}” ${awardLabel(c)} in ${where}, announced by ${issuer}${post(g[0])}`
        : `${a.name}'s “${r.title}” ${awardLabel(c)} in ${where}, issued by ${issuer}`;
    const posts = g.filter((x) => x.c.announced);
    if (!posts.length) return `${a.name}'s ${g.length} certifications in ${where}, issued by ${issuer}`;
    // A group that mixes the label's award and its own announcement names the
    // two kinds apart: the post announces a certification, it does not say the
    // label issued a plaque (PR #402 review). "Tyla's 10 plaques in South
    // Africa from Sony Music Africa — 9 issued on its own award and “Chanel”
    // Gold, announced on its own X account, 8 Jan 2026" until 8 Oct 2026;
    // now "Tyla's 10 certifications … — 9 on its own plaques and …": a
    // plaque is never an award (design review B-10).
    const awards = g.length - posts.length;
    const named = posts.map((x) => `“${x.r.title}” ${awardLabel(x.c)}, announced${post(x)}`);
    const announcedPart =
      posts.length === 1 ? named[0] : `${posts.length} announced on its own posts (${named.join("; ")})`;
    return awards
      ? `${a.name}'s ${g.length} certifications in ${where} from ${issuer} — ${awards} on its own ${awards === 1 ? "plaque" : "plaques"} and ${announcedPart}`
      : `${a.name}'s ${g.length} certifications in ${where} from ${issuer}, all ${announcedPart.replace(/^\d+ /, "")}`;
  });
});

/** The countries the board's label plaques sit in. */
const boardLabelCodes: string[] = swept.flatMap((a) => a.releases.flatMap((r) => r.certs.filter((c) => c.source === "label").map((c) => c.c)));

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
        return `${a.name}'s “${r.title}” ${awardLabel(c)} in ${countryMeta(c.c).name}, announced by ${body}${how}, and not in its database`;
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
    announced.length || burnaAnnouncements.length ? ", or the body itself has published it" : ""
  }.`;
  const parts: string[] = [];
  // Count-aware (debug pass, 3 Oct 2026): "the one exception" was true of
  // "Dai Dai" alone, and stopped being true when "All Eyes on Me" was marked as
  // the label plaque it always was. Each kind keeps its own reason.
  const noRegister = issued.filter((x) => !x.registerRead).map((x) => x.text);
  const noRow = issued.filter((x) => x.registerRead).map((x) => x.text);
  // Two markets with no register since 7 Oct 2026 (Colombia and Turkey). Each
  // item carries a comma of its own and the kinds are split by semicolons, so
  // the items take ", and" — "…: “Dai Dai”'s Platinum in Colombia, issued by
  // Sony Music, and “Dai Dai”'s Diamond in Turkey, issued by Sony Music
  // Türkiye; a register that …".
  const items = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")}, and ${xs.at(-1)}`);
  const kinds = [
    noRegister.length > 1
      ? `markets with no current public register, where the labels' own plaques stand: ${items(noRegister)}`
      : noRegister.length
        ? `a market with no current public register, where the label's own plaque stands: ${noRegister[0]}`
        : "",
    noRow.length ? `a register that holds no row for the title, where the label's own plaque stands: ${noRow.join("; ")}` : "",
    // The body's own publication ahead of its database (D-02, 4 Oct 2026).
    burnaAnnouncements.length
      ? `a register that has not yet listed the certification, where the body's own publication stands: ${burnaAnnouncements.join("; ")}`
      : "",
  ].filter(Boolean);
  const exceptions = issued.length + burnaAnnouncements.length;
  if (exceptions)
    parts.push(
      `In Burna Boy's own record, ${exceptions === 1 ? "the one exception is" : `the ${exceptions} exceptions are`} ${
        kinds.length > 1 ? `${kinds.slice(0, -1).join("; ")}; and ${kinds.at(-1)}` : kinds[0]
      }.`,
    );
  // A board label plaque in a country with NO register (Turkey, Tyla's
  // "Water") sat under "where the register holds no row", which gave Turkey a
  // register (review of 7 Oct 2026). Such countries are named as the second
  // route, from the data.
  const noRegisterNames = [...new Set(boardLabelCodes.filter(hasNoRegister).map((c) => countryMeta(c).name))];
  if (boardLabelPlaques.length)
    parts.push(
      `On the Afrobeats board, a label's own plaque${labelAnnounced ? " or announcement" : ""} stands where the register holds no row${
        noRegisterNames.length
          ? ` or, as in ${noRegisterNames.length < 2 ? noRegisterNames[0] : `${noRegisterNames.slice(0, -1).join(", ")} and ${noRegisterNames.at(-1)}`}, there is no register`
          : ""
      }: ${boardLabelPlaques.join("; ")}.`,
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
    ? `A figure with no register row behind it is published only where the body itself announced it or the label ${labelAnnounced ? "issued or announced" : "issued"} the plaque — ${boardOffRegisterTotal} of the board's certifications, each named in the methodology.`
    : "A figure with no register behind it is not published.";
}
