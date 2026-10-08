import { CO_LEAD_TAG, CO_LEAD_NOTE } from "../lib/coLead";

/**
 * The one visible line that says what the "co-lead" tag means — "co-lead: on
 * one of Burna Boy's own releases, so counted as his lead (the rule
 * ChartMasters uses)" — printed once over a list whose rows carry the tag.
 * The tag's own explanation is a hover title, which a phone never shows.
 * Each layout passes its module's `.roleTag`, so the word in the line looks
 * like the tag on the rows, and its own class for the line.
 */
export default function CoLeadNote({ className, tagClassName }: { className?: string; tagClassName?: string }) {
  return (
    <p className={className}>
      <span className={tagClassName}>{CO_LEAD_TAG}</span>: {CO_LEAD_NOTE}.
    </p>
  );
}
