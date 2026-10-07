import { CO_LEAD_TAG, coLeadTitle } from "../lib/coLead";

/**
 * The small "co-lead" tag on a Burna Boy row that is filed as his single but
 * is not billed as his own — someone else's record that sits in his own
 * Spotify discography ("WGFT", Gunna ft. Burna Boy) or a co-billed one
 * ("Dai Dai", Shakira & Burna Boy). Rule C, Paul, 7 Oct 2026
 * (app/data/songRoles.ts).
 *
 * Read in place by a screen reader, after the credit line it sits in
 * ("Gunna ft. Burna Boy · 2025 co-lead"); the names are its hover text. A
 * real space goes before it, so the line reads that way as text too — copied,
 * in reader view, to a screen reader — where a CSS margin alone ran it into
 * "2025co-lead". That space is the gap; each module's `.roleTag` margin only
 * tops it up. Ink, never gold — gold is live-or-action only. Each layout
 * passes its own module's `.roleTag`, so the tag takes that layout's type and
 * spacing. Renders nothing for a release that is not a co-lead (no names).
 */
export default function CoLeadTag({ names, className }: { names?: readonly string[]; className?: string }) {
  if (!names?.length) return null;
  return (
    <>
      {" "}
      <span className={className} title={coLeadTitle(names)}>
        {CO_LEAD_TAG}
      </span>
    </>
  );
}
