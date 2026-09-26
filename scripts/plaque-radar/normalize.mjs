// Title and credit matching for the plaque radar.
//
// The rule the site learned the hard way (see the "match artist WITH title"
// notes in app/data/afrobeats.ts): a certification row is never matched on its
// title alone. "Location" is Khalid's as well as Dave's; "That Girl" is Tyla's
// and Darkoo's. Every join below needs BOTH a title key and an artist name that
// appears, as a whole word, in the credit the list prints.

/** Fold a title to a key: case, accents, apostrophes, "&", punctuation and any
 *  "(feat. …)" tail. Version suffixes such as "(Remix)" are KEPT — a remix can
 *  be a different record with a different credit. */
export function titleKey(title) {
  return String(title ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[‘’`´']/g, "")
    .replace(/…/g, " ")
    .replace(/\s*[([](?:feat|ft|featuring|with|w\/)\.?\s[^)\]]*[)\]]/gi, "")
    .replace(/\s+(?:feat|ft|featuring)\.?\s.*$/i, "")
    .replace(/&/g, " and ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Spellings that name the same title: "Wait 4 U" / "Wait For U". */
const WORD_FOLD = { 4: "for", 2: "to", u: "you", ur: "your", n: "and" };

/**
 * A looser key, for the second try after titleKey and only ever together with
 * an artist match: every parenthetical and any " - A COLORS SHOW"-style tail
 * goes, "4"/"2"/"u" read as "for"/"to"/"you", and spaces are dropped — the
 * lists write Omah Lay's "soso" as "So So".
 */
export function looseTitleKey(title) {
  const fold = (t) => t.split(" ").map((w) => WORD_FOLD[w] ?? w).join("");
  const loose = fold(titleKey(String(title ?? "").replace(/\s*[([][^)\]]*[)\]]/g, "").replace(/\s+[-–—]\s+.*$/, "")));
  // A title that is all parenthesis would fold to nothing and match anything.
  return loose || fold(titleKey(title));
}

/**
 * Who counts as each artist inside a certification credit.
 *
 * `not` lists longer names that CONTAIN the alias and belong to someone else:
 * "Buju" was BNXN's name until 2022, but "Buju Banton" is a different artist;
 * "Tyla Yaweh" is not Tyla. The board has tripped on both before.
 */
export const ARTIST_ALIASES = {
  "burna-boy": { names: ["Burna Boy"] },
  olamide: { names: ["Olamide"] },
  "black-sherif": { names: ["Black Sherif"] },
  bnxn: { names: ["BNXN", "Buju"], not: ["Buju Banton"] },
  wizkid: { names: ["Wizkid", "Wiz Kid"] },
  davido: { names: ["Davido"] },
  rema: { names: ["Rema"] },
  tems: { names: ["Tems"] },
  tyla: { names: ["Tyla"], not: ["Tyla Yaweh"] },
  "ayra-starr": { names: ["Ayra Starr"] },
  asake: { names: ["Asake"] },
  "omah-lay": { names: ["Omah Lay"] },
  "seyi-vibez": { names: ["Seyi Vibez"] },
  victony: { names: ["Victony"] },
  "fireboy-dml": { names: ["Fireboy DML", "Fireboy"] },
  ckay: { names: ["CKay"] },
  "kizz-daniel": { names: ["Kizz Daniel", "Kiss Daniel"] },
  ruger: { names: ["Ruger"] },
  oxlade: { names: ["Oxlade"] },
  "tiwa-savage": { names: ["Tiwa Savage"] },
};

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const fold = (s) =>
  String(s ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

/** True when `name` appears in `credit` as a whole word (or words), and not as
 *  part of one of the `not` names. Case and accents are ignored. */
export function creditHas(credit, name, not = []) {
  let c = fold(credit);
  for (const n of not) c = c.replace(new RegExp(`(^|[^a-z0-9])${esc(fold(n))}(?=$|[^a-z0-9])`, "g"), "$1 ");
  return new RegExp(`(^|[^a-z0-9])${esc(fold(name))}(?=$|[^a-z0-9])`).test(c);
}

/** True when the credit names this board artist (by slug). */
export function creditHasArtist(credit, slug) {
  const a = ARTIST_ALIASES[slug];
  if (!a) return false;
  return a.names.some((n) => creditHas(credit, n, a.not ?? []));
}

/** Every board slug the credit names. */
export function artistsInCredit(credit) {
  return Object.keys(ARTIST_ALIASES).filter((slug) => creditHasArtist(credit, slug));
}

/** Names pulled out of a site credit such as "Coldplay ft. Burna Boy & others"
 *  or a board title's "(Olamide & CKay)". Used as extra artist anchors so a
 *  record the register files under its lead act still matches. */
export function namesInCredit(credit) {
  return String(credit ?? "")
    .split(/\s*(?:,|&|\/|\bfeat\.?|\bft\.?|\bfeaturing\b|\bwith\b|\bx\b|\band\b|\bvs\.?)\s*/i)
    .map((s) => s.replace(/[()]/g, "").trim())
    .filter((s) => s.length >= 2 && !/^others?$/i.test(s) && !/^(remix|version|edit)$/i.test(s));
}
