import Link from "next/link";
import type { Words } from "../lib/naija66/copy";

/**
 * A line of Naija @ 66 copy (lib/naija66/copy.ts Words) as inline content:
 * its strings as text, its link as a site link. Both layouts print the hunt's
 * lines through this, so the one page the hunt names is linked the same way
 * everywhere. Inside a <p>, a class-less link takes the site's prose
 * underline (globals.css).
 */
export default function Naija66Words({ words }: { words: Words }) {
  return (
    <>
      {words.map((w, i) =>
        typeof w === "string" ? (
          w
        ) : (
          <Link key={i} href={w.href}>
            {w.text}
          </Link>
        ),
      )}
    </>
  );
}

/** The same line as plain text, for places a link cannot go (a key, a test). */
export const wordsText = (words: Words) => words.map((w) => (typeof w === "string" ? w : w.text)).join("");
