// When the next digest lands, for the "you're in" ticket on /updates.
//
// The promise is Saturdays at 18:00 Europe/London, so the question is asked
// in London time: the next Saturday from now, and today counts if it is a
// Saturday and the send has not happened yet. Everything runs through Intl so
// the answer is the same on a reader's clock in Lagos, New York or London —
// the ticket names a London evening, not the reader's Saturday.

export const DIGEST_ZONE = "Europe/London";
export const DIGEST_HOUR = 18;

const parts = new Intl.DateTimeFormat("en-GB", {
  timeZone: DIGEST_ZONE,
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  hourCycle: "h23",
});

const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/** The London calendar date of the next digest, as an ISO day. */
export function nextDigestDay(now: Date = new Date()): string {
  const p = Object.fromEntries(parts.formatToParts(now).map((x) => [x.type, x.value]));
  const dow = DOW[p.weekday];
  const hour = Number(p.hour);
  let ahead = (6 - dow + 7) % 7;
  if (ahead === 0 && hour >= DIGEST_HOUR) ahead = 7;
  // Arithmetic on the London calendar date, not on the instant: adding
  // 3 × 86400 s across a clock change would land on the wrong day.
  const day = new Date(Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day) + ahead));
  return day.toISOString().slice(0, 10);
}

/** "Saturday 19 September" — the ticket's own wording. */
export function nextDigestLabel(now: Date = new Date()): string {
  return new Date(`${nextDigestDay(now)}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}
