// Who each board artist is measured against.
//
// Every artist page used to run its head-to-head against Burna Boy. Nine pages
// asked the same question and got the same answer: he is bigger. A peer pairing
// asks a better one — two careers of comparable weight, counted identically,
// side by side — and it stops the board reading as nine footnotes to his page.
//
// Pairs are MUTUAL, so each artist appears exactly once as an opponent and the
// comparison says the same thing from either side. Burna is the opponent for
// Wizkid alone: he has no board page of his own, so that is the one pairing
// pointing off the board, and it is the one comparison that has always been the
// genre's actual argument.

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

  // 62 plaques in 23 countries against 61 in 9. Near-identical weight, opposite
  // shape — which is the whole point of putting the country count next to it.
  tyla: "omah-lay",
  "omah-lay": "tyla",
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
