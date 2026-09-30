// The four "Popular pages" the ⌘K palette shows before anything is typed.
//
// Built here, on the server, and handed to the palette as a prop (layout.tsx →
// Nav → SearchPalette), because the palette no longer carries the search index
// in its bundle: the index is 183 KB of JS that used to load on every page,
// and it now arrives only when somebody may search (SearchPalette.tsx). The
// suggestions still have to show the instant the palette opens, so the few
// fields a result row prints travel with the page instead: title, path,
// section and description, not the keywords.

import { searchIndex, type SearchDoc } from "./searchIndex";

/** The palette's suggestions, most-used first. */
export const SUGGESTED_PATHS = [
  "/records/cars",
  "/records/charts",
  "/certifications",
  "/records/africas-biggest",
] as const;

/** A search doc as a result row prints it. */
export type SuggestedDoc = Pick<SearchDoc, "title" | "path" | "section" | "description">;

/** The index's page doc for each path, in order. A path the index does not
 *  hold is left out rather than shown blank. */
export function suggestedSearchDocs(
  paths: readonly string[] = SUGGESTED_PATHS,
  index: readonly SearchDoc[] = searchIndex
): SuggestedDoc[] {
  return paths
    .map((p) => index.find((d) => d.path === p))
    .filter((d): d is SearchDoc => d !== undefined)
    .map(({ title, path, section, description }) => ({ title, path, section, description }));
}
