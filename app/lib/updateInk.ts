import type { UpdateCategory } from "../data/updates";
import type { OnThisDayKind } from "./onThisDayKinds";

/**
 * The shape each update category wears, shared by the desktop feed and the
 * phone screen so a "Charts" tag is the same on both.
 *
 * A category is a word in ink, with On This Day's shape where one maps (Job 0
 * colour roles, J0-6 with fix 5): Charts ▲, Certifications ○, Streaming ◆,
 * Awards ★, Tours ●. "Firsts & Records" and "Lifestyle" print the word alone.
 * Colour does no work: until 8 Oct 2026 each category read in its own colour
 * (gold for certifications, cyan for charts, ember, silver, green), and every
 * one of those colours means something else on this site — his, the Top 10
 * band, the records kicker, live. The mark draws in currentColor, so it is
 * whatever ink the tag or chip around it is.
 */
export const UPDATE_MARK: Record<UpdateCategory, OnThisDayKind | null> = {
  Charts: "chart",
  Certifications: "certification",
  Streaming: "streaming",
  Awards: "award",
  Tours: "show",
  "Firsts & Records": null,
  Lifestyle: null,
};

export const markFor = (c: UpdateCategory): OnThisDayKind | null => UPDATE_MARK[c] ?? null;
