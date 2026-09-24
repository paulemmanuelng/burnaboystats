import { one } from "./compareUrl";

/**
 * The ?q= of /search, as the page and the field may use it.
 *
 * Two shapes of address reached the search code raw (24 Sep 2026):
 *   - /search?q=a&q=b hands Next an ARRAY, and the index's fold() called
 *     .replace on it: "TypeError: e.replace is not a function", and the error
 *     screen instead of results. The first value is the query.
 *   - /search?q=%00 put a NUL into the text of the page. The HTML parser
 *     rewrites that character, so the browser's text never matched the
 *     server's, and React threw hydration error #418. Control characters are
 *     never part of a real query, so they are dropped.
 */
export function cleanQuery(v: string | string[] | null | undefined): string {
  return (one(v ?? undefined) ?? "").replace(/[\u0000-\u001F\u007F]/g, "");
}
