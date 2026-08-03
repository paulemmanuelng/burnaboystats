/**
 * A stable key for matching the same release across data files.
 *
 * The data files don't agree on punctuation — albums.ts writes "I Told Them…"
 * with a real ellipsis while charts.ts and certifications.ts write
 * "I Told Them..." with three dots. An exact `===` join silently returns
 * nothing, which is how that album lost its chart peak on the homepage.
 *
 * Fold the punctuation and the casing; keep everything else, since version
 * suffixes ("(Remix)", "(Deluxe)") are genuinely different releases.
 */
export const titleKey = (title: string) =>
  title
    .replace(/…/g, "...")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

/** True when two titles name the same release. */
export const sameTitle = (a: string, b: string) => titleKey(a) === titleKey(b);
