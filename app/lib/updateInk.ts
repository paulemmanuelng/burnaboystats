import type { UpdateCategory } from "../data/updates";

/**
 * The colour each update category reads in, shared by the desktop feed and the
 * mobile screen so a "Charts" pill is the same cyan on both.
 *
 * These are the design's, mapped onto the repo's category names (the prototype
 * used singulars, and had no "Lifestyle"). The palette is the site's existing
 * one: gold for certifications, cyan for charts, silver for awards, green for
 * tours — the same meanings those colours carry everywhere else.
 */
export const UPDATE_INK: Record<UpdateCategory, string> = {
  Certifications: "var(--gold)",
  Charts: "var(--cyan)",
  "Firsts & Records": "var(--grad-b)",
  Awards: "var(--silver)",
  Tours: "var(--green)",
  Streaming: "#b8bcc4",
  // Not in the prototype. Deliberately the muted text colour rather than a new
  // hue: it's the one category that isn't a music statistic.
  Lifestyle: "var(--text-muted)",
};

export const inkFor = (c: UpdateCategory) => UPDATE_INK[c] ?? "var(--gold)";
