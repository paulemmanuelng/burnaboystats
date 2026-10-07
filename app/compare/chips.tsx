import type { ReactNode } from "react";
import styles from "./compare.module.css";
import { countryMeta } from "../data/afrobeats";
import { plaqueMarker } from "../lib/issuerMarker";
import { awardLabel, plusWord } from "../lib/awardName";

/**
 * The compare section's shared display atoms — the tier chip's class, the
 * plaque's words, the programme marker and the number format.
 *
 * Shared because /compare and the country boards under /compare/in must render
 * a plaque IDENTICALLY. A second copy of `plaque()` that forgot the multiplier
 * would print "Platinum" on one page and "3× Platinum" on the other for the
 * same award, which is the one thing a certifications page cannot do.
 */

export const fmt = (n: number) => n.toLocaleString("en-US");

export const tierClass = (level: string) =>
  level === "Diamond" ? styles.tDiamond
  : level === "Platinum" ? styles.tPlatinum
  : level === "Gold" ? styles.tGold
  : styles.tSilver;

/** A title's trailing "(…)" stays on one line — "love nwantiti (ah ah / ah)"
 *  split its own parenthetical at 375.
 *
 *  One inline span around the whole title, so it is ONE item of a flex or
 *  grid parent, and the space before the "(" sits outside the nowrap run.
 *  As two siblings with the space inside the run, the picker chip
 *  (inline-flex) made the words and " (…)" two flex items and dropped the
 *  space — "Buga(Lo Lo Lo)" — and the board's Biggest plaques title (a grid)
 *  put "(ah ah ah)" on a row of its own under "love nwantiti" (debug pass
 *  5 Oct 2026, V-compareB-05). Outside the run the space is also where a line
 *  too narrow for the whole title may break, so the "(…)" stays whole without
 *  gluing the last word to it. */
export const keepParens = (title: string) => {
  const m = title.match(/^(.*?\s*)(\([^()]*\))$/);
  return m ? <span>{m[1]}<span className={styles.nowrap}>{m[2]}</span></span> : title;
};

/** "3× Platinum", "16× Platino", "4× Platinum + Gold" — awardLabel, so the
 *  half step AMPROFON prints on top ("Platino & Oro") is never dropped. */
export const plaque = (top: { level: string; x: number; body?: string; plus?: string } | null) =>
  top ? awardLabel(top) : "";

/** A chip's words, as `.tierWord` runs: "4× Platinum" and, where the body
 *  awarded a half step on top, "+ Gold" as a SECOND unbreakable run, with
 *  `after` (a "+2") riding on the last one. One run per half so a phone chip
 *  can wrap between them: "4× Platinum + Gold † ‡ §" as a single nowrap run
 *  ran 30px off a 390px screen on /compare's Mexico row.
 *
 *  `marks` (the † ‡ §) follow the last run behind an ordinary space, in one
 *  plain span with it: a phone chip with no room puts them on a line of their
 *  own, together, under the words. Glued to the words they made Ayra Starr's
 *  Mexico chip "4× Platinum † ‡ §" 118px in a 108px cell at 320, into the
 *  next column (debug pass 5 Oct 2026, V-compareB-04). Inline, not a flex
 *  item of the chip, so a chip that fits sets them exactly as before: same
 *  baseline, same space. On desktop the chip is nowrap and nothing breaks. */
export function PlaqueWords({
  top,
  after,
  marks,
}: {
  top: { level: string; x: number; body?: string; plus?: string } | null;
  after?: ReactNode;
  marks?: ReactNode;
}) {
  const last = (words: string) => {
    const run = <span className={styles.tierWord}>{words}{after}</span>;
    return marks ? <span>{run}{" "}{marks}</span> : run;
  };
  if (!top?.plus) return last(plaque(top));
  const { plus: _half, ...main } = top;
  return (
    <>
      <span className={styles.tierWord}>{awardLabel(main)}</span>{" "}
      {last(plusWord(top).trim())}
    </>
  );
}

/** The marker's short form for a phone chip: "Latin" stays; a whole other
 *  issuer ("Sony Music Colombia") becomes its first word, the full name in
 *  the chip's title and in the desktop run. */
export const shortProgram = (p: string) => (p.length > 12 ? p.split(" ")[0] : p);

/** The programme marker, derived exactly as Burna's explorer derives it:
 *  whatever the override adds beyond the country's default body. "RIAA Latin"
 *  against RIAA reads "Latin". Without it a 16× Platino worth 960,000 sat
 *  beside a 5× Platinum worth 5,000,000 with nothing to say why. A label's
 *  plaque names its issuer even where it is the country's listed body
 *  (plaqueMarker: "Dai Dai"'s Turkish Diamond, Sony Music Türkiye). */
export const program = (top: { body?: string; source?: string } | null, country: string) =>
  top ? plaqueMarker(top, countryMeta(country).body) : null;
