/**
 * The last item of a kicker that ends on his role on the record — "· Lead",
 * "· Co-lead with Shakira", "· Artista principal junto a Shakira" — as ONE
 * unit with the separator in front of it.
 *
 * #441 (7 Oct 2026) appended the role to the song pages' and the Dai Dai
 * hero's kickers as plain text after a plain " · ", and a phone broke it
 * wherever it could: "· CO-" / "LEAD WITH SHAKIRA" at 375 and 390, "SHAKIRA"
 * alone on a third line of /dai-dai/es at 320 and 360, "Artista principal" /
 * "junto a Shakira" at 1024 (debug pass of 7 Oct 2026). The span is an
 * inline-block, so the role moves to the next line whole, its separator with
 * it — the side keepSeparators (lib/onThisDay) binds the On This Day kickers'
 * separators to, so where such a line wraps the next one starts on "·". Only
 * a role longer than the whole line wraps inside itself, at a space. The separator has to sit INSIDE the block: a no-break space before
 * an inline-block does not stop Chrome breaking there, so "·" + NBSP outside
 * it left the dot at the end of the line above.
 */
export default function KickerRole({ role, className }: { role: string; className: string }) {
  return <span className={className}>{`· ${role}`}</span>;
}
