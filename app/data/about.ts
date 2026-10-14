// /about's fast facts and their provenance (design review 8 Oct 2026, J1-14,
// fixes 24 and 25). The facts moved here from app/about/page.tsx so the hero
// on both layouts, and the P1 under them, read one list.
import { BURNA_BOY_REAL_NAME, BURNA_BOY_BIRTH_DATE } from "../lib/seo";
import { ceremonies } from "./awards";

/** "2 July 1991": his birth date as the fact prints it, from lib/seo.ts. */
const born = new Date(`${BURNA_BOY_BIRTH_DATE}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** The years he won a Grammy, read off the awards data ("2021"). */
const grammyWinYears = [
  ...new Set(
    (ceremonies.find((c) => c.name === "Grammy Awards")?.noms ?? []).filter((n) => n.won).map((n) => n.year),
  ),
].sort((a, b) => a - b);
if (grammyWinYears.length === 0) throw new Error("data/about.ts: no Grammy win in data/awards.ts");

/** The six fast facts, in the order both layouts print them. */
export const facts: { label: string; value: string }[] = [
  { label: "Real name", value: BURNA_BOY_REAL_NAME },
  { label: "Born", value: born },
  { label: "Birthplace", value: "Port Harcourt, Nigeria" },
  { label: "Genre", value: "Afro-fusion" },
  { label: "Labels", value: "Spaceship · Atlantic" },
  { label: "Grammy", value: `Winner, ${grammyWinYears.join(", ")}` },
];

/** Where the facts are read: the sources the page's own comment named
 *  (Wikipedia, Grammy.com, Billboard), in that order. Billboard backs no single
 *  fact and was not re-read (it answers AI agents with a paywall redirect);
 *  it stays listed as on file until Paul rules (C-32). */
export const ABOUT_FACT_SOURCES = ["Wikipedia", "Grammy.com", "Billboard"] as const;

/**
 * The day the six facts were last checked by hand against their sources —
 * set only on a real re-read (fix 24). 14 Oct 2026, with the site's own user
 * agent, robots.txt allowing both for every agent:
 * - en.wikipedia.org/wiki/Burna_Boy (revision 1379952735, last edited
 *   12 Oct 2026): born Damini Ebunoluwa Ogulu, 2 July 1991, Port Harcourt,
 *   Rivers State, Nigeria; labels Atlantic and Spaceship; his music, "which
 *   he refers to as 'Afro-fusion'" (Artistry).
 * - grammy.com/artists/burna-boy/251682: 1 win, 2021 Best Global Music
 *   Album, Twice As Tall.
 * All six matched; nothing on the page changed.
 */
export const ABOUT_CHECKED_ON = "2026-10-14";
