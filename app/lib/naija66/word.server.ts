import { timingSafeEqual } from "node:crypto";
import { NAIJA66_TEST_PRIZE, NAIJA66_WORD_HASHES, wordHash } from "../../data/naija66Words";
import { normaliseWord } from "./word";

/**
 * Whether `w` is prize `prize`'s word, compared as a hash (the words are not
 * in the repository). SERVER ONLY: imported by the spot and reveal routes
 * and nothing else, so nothing about the words ships to a browser
 * (tests/naija66Words.test.ts).
 */
export function isPrizeWord(prize: number, w: unknown): boolean {
  const want = NAIJA66_WORD_HASHES[prize];
  const got = normaliseWord(w);
  if (!want || got === null) return false;
  const h = Buffer.from(wordHash(prize, got));
  const t = Buffer.from(want);
  return h.length === t.length && timingSafeEqual(h, t);
}

/** Paul's private test code's page, when this is it (prize 0; never on the board). */
export const testPrizeOnPage = (pathname: string) =>
  pathname === NAIJA66_TEST_PRIZE.path ? NAIJA66_TEST_PRIZE : undefined;
