import { CO_LEAD_TAG, coLeadTitle } from "../lib/coLead";

/**
 * The small "co-lead" tag on a Burna Boy row that is filed as his single but
 * is not billed as his own — someone else's record that Spotify credits him
 * on as a Main Artist ("Location", Dave ft. Burna Boy) or a co-billed one
 * ("Dai Dai", Shakira & Burna Boy). The credit-role rule, Paul, 6 Oct 2026.
 *
 * Read in place by a screen reader, after the credit line it sits in
 * ("Dave ft. Burna Boy · 2019 co-lead"); the names are its hover text. Ink,
 * never gold — gold is live-or-action only. Each layout passes its own
 * module's `.roleTag`, so the tag takes that layout's type and spacing.
 * Renders nothing for a release that is not a co-lead (no names).
 */
export default function CoLeadTag({ names, className }: { names?: readonly string[]; className?: string }) {
  if (!names?.length) return null;
  return (
    <span className={className} title={coLeadTitle(names)}>
      {CO_LEAD_TAG}
    </span>
  );
}
