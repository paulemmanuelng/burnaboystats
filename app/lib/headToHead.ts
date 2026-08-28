// Who each board artist is measured against.
//
// Every artist page used to run its head-to-head against Burna Boy. Nine pages
// asked the same question and got the same answer: he is bigger. A peer pairing
// asks a better one — two careers of comparable weight, counted identically,
// side by side — and it stops the board reading as nine footnotes to his page.
//
// Pairs are MUTUAL, so each artist appears exactly once as an opponent and the
// comparison says the same thing from either side. Two pairings point OFF the
// board at Burna, who has no board page of his own: Wizkid, because that is the
// comparison the genre has always actually argued, and Tyla, because her 23
// certifying countries are the only spread on the board close to his 26. An even
// number of artists would need only one; twelve leaves a remainder after Wizkid,
// and a second off-board pairing is better than a peer pairing that says nothing.

import {
  artistBySlug,
  certCount,
  countryCount,
  chartNo1s,
  type AfroArtist,
} from "../data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../data/certifications";
import { numberOnes as burnaNo1s } from "../data/charts";

/** slug → opponent slug. "burna-boy" is not a board slug; it means his own pages. */
export const HEAD_TO_HEAD: Record<string, string> = {
  // The two biggest careers here, and the only pairing that leaves the board.
  wizkid: "burna-boy",

  // 99 charted records against 89, and 54 plaques against 65 — the deepest home
  // catalogue on the board against the artist who turned fewer records into more
  // No. 1s and five countries' worth of plaques. The veteran and the crossover.
  olamide: "bnxn",
  bnxn: "olamide",

  // The only Ghanaian here, and the comparison that makes the point: he took
  // "Kwaku the Traveller" to No. 1 on NIGERIA's chart, a foreign act topping
  // someone else's national chart — which is the same trick, in reverse, that
  // the artist this site is about pulled everywhere else.
  "black-sherif": "burna-boy",

  // 103 plaques held in 1 country against 79 in 3 — the two careers on this
  // board built almost entirely at home. Paul's pairing.
  "seyi-vibez": "asake",
  asake: "seyi-vibez",

  // Paul's pairing.
  "ayra-starr": "davido",
  davido: "ayra-starr",

  // 80 plaques across 20 countries against 70 across 19. The closest
  // like-for-like on the board: same era, same reach, same shape.
  rema: "tems",
  tems: "rema",

  // 27 plaques in 14 countries against 22 in 4. The two careers here carried
  // almost wholly by ONE crossover record — "love nwantiti" and "Soweto" — and
  // the pairing shows how differently one record can travel: CKay's is
  // certified in fourteen countries, Victony's in four.
  ckay: "victony",
  victony: "ckay",

  // 36 plaques across 6 countries against 61 across 9. Both Nigerian, both
  // built at home with a single record that crossed ("Peru", "Understand").
  "fireboy-dml": "omah-lay",
  "omah-lay": "fireboy-dml",

  // The second pairing that leaves the board, and the reason is the country
  // count: 23 certifying countries against Burna Boy's 26. Nobody else on the
  // board comes within eight of him on spread, so this is the one other
  // comparison where the answer is not simply "he is bigger".
  tyla: "burna-boy",
};

export interface Opponent {
  name: string;
  href: string;
  total: number;
  countries: number;
  no1s: number;
  /** Burna is the site's subject: his cell reads gold and his figures move daily. */
  isBurna: boolean;
}

/**
 * The opponent's figures, read the same way as the artist's own. Returns null
 * when an artist has no pairing, so the panel can be dropped rather than shown
 * against a blank — a new artist joins the board before anyone decides who they
 * belong next to.
 */
export function opponentOf(a: AfroArtist): Opponent | null {
  const slug = HEAD_TO_HEAD[a.slug];
  if (!slug) return null;

  if (slug === "burna-boy") {
    return {
      name: "Burna Boy",
      href: "/certifications",
      total: totalAwards(),
      countries: burnaCountries,
      no1s: burnaNo1s,
      isBurna: true,
    };
  }

  const o = artistBySlug(slug);
  // A pairing that names a swept artist is the only kind that can render: an
  // unswept opponent has no plaque count to show.
  if (!o || !o.swept) return null;

  return {
    name: o.name,
    href: `/afrobeats/${o.slug}`,
    total: certCount(o),
    countries: countryCount(o),
    no1s: chartNo1s(o),
    isBurna: false,
  };
}
