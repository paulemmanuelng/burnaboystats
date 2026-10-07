/** The marker a plaque chip prints beside its tier, or null for none.
 *
 *  Whatever the plaque's `body` adds beyond the country's own body: "RIAA
 *  Latin" against RIAA reads "Latin"; a whole other issuer ("Sony Music
 *  Africa" against RiSA) reads in full. And a label's plaque (`source:
 *  "label"`) always names its issuer, even where that issuer IS the country's
 *  listed body: Turkey has no register, so COUNTRIES.TR names the label that
 *  issued "Dai Dai"'s Diamond (Sony Music Türkiye), and the difference test
 *  alone left that chip unmarked, reading like a register Diamond beside
 *  Colombia's "Sony Music" and South Africa's "Sony Music Africa" (review of
 *  7 Oct 2026). Every chip surface reads this one rule: /certifications on
 *  both layouts, the board's artist pages, /compare and the share cards. */
export const plaqueMarker = (c: { body?: string; source?: string }, own: string): string | null => {
  if (!c.body) return null;
  if (c.body === own && c.source !== "label") return null;
  return c.body.replace(own, "").trim() || c.body;
};
