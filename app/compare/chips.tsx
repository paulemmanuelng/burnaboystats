import styles from "./compare.module.css";
import { countryMeta } from "../data/afrobeats";

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
 *  split its own parenthetical at 375. */
export const keepParens = (title: string) => {
  const m = title.match(/^(.*?)(\s*\([^()]*\))$/);
  return m ? <>{m[1]}<span className={styles.nowrap}>{m[2]}</span></> : title;
};

export const plaque = (top: { level: string; x: number } | null) =>
  top ? `${top.x > 1 ? `${top.x}× ` : ""}${top.level}` : "";

/** The marker's short form for a phone chip: "Latin" stays; a whole other
 *  issuer ("Sony Music Colombia") becomes its first word, the full name in
 *  the chip's title and in the desktop run. */
export const shortProgram = (p: string) => (p.length > 12 ? p.split(" ")[0] : p);

/** The programme marker, derived exactly as Burna's explorer derives it:
 *  whatever the override adds beyond the country's default body. "RIAA Latin"
 *  against RIAA reads "Latin". Without it a 16× Platino worth 960,000 sat
 *  beside a 5× Platinum worth 5,000,000 with nothing to say why. */
export const program = (top: { body?: string } | null, country: string) => {
  const own = countryMeta(country).body;
  if (!top?.body || top.body === own) return null;
  return top.body.replace(own, "").trim() || top.body;
};
