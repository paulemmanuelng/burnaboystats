import { createHash } from "node:crypto";

/**
 * Naija @ 66 — the word each prize's code hides behind (Paul, 1 Oct 2026:
 * "you have to hide it in a word or phrase").
 *
 * SCRAMBLED. The site's repository is public, so the words are not written
 * here: each prize keeps only sha256("naija66-word:<prize>:<word>") of its
 * word, normalised as word.ts reads a tap (case-folded, edge punctuation
 * stripped). A tap is hashed the same way and compared (word.server.ts).
 *
 * SERVER ONLY. Imported by app/lib/naija66/word.server.ts and nothing else;
 * that module only by the spot and reveal routes (tests/naija66Words.test.ts
 * walks the client import graph). Prizes 1 and 2 were awarded on X and have
 * none.
 */
export const wordHash = (prize: number, normalised: string) =>
  createHash("sha256").update(`naija66-word:${prize}:${normalised}`).digest("hex");

export const NAIJA66_WORD_HASHES: Readonly<Record<number, string>> = {
  0: "2277934b244eb858162ef9fd98327d25776a9c8986048b259ed9de5bc41d61b6",
  3: "e612a68fe858d3a56a49dc72ecb86862d27e27ced9b37dcb67416005338526e7",
  4: "83c21af543dffb3c699792ffad495551bca2c91b8e8b56b159480de1692ffa1a",
  5: "898dbc494bae4183126fcde3ca6412bf9b414cb49029e92373569d9307088202",
};

/**
 * Paul's private test code (1 Oct 2026: "put one extra code somewhere so I
 * can test it when it is live"). Prize 0: never on the board or the banner,
 * not counted as a prize, open from the start of the day.
 */
export const NAIJA66_TEST_PRIZE = { prize: 0, path: "/about", dropsAt: "2026-10-01T00:00:00Z" } as const;
