/**
 * Naija @ 66 times, printed by hand in WAT (UTC+1, no daylight saving) rather
 * than through toLocaleTimeString with timeZone "Africa/Lagos": the server's
 * ICU and a phone's disagree on spacing ("9:00 AM" with a narrow no-break
 * space on one, a plain space on the other).
 */

/** WAT is UTC+1 all year. */
const WAT_OFFSET_MS = 60 * 60 * 1000;

/** "09:07 WAT" — a claim time, to the minute. */
export function watClock(iso: string | number): string {
  const d = new Date(new Date(iso).getTime() + WAT_OFFSET_MS);
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm} WAT`;
}

/** "9am WAT", "12pm WAT", "9:30pm WAT" — a drop time, the way the rules say it. */
export function watHour(iso: string | number): string {
  const d = new Date(new Date(iso).getTime() + WAT_OFFSET_MS);
  const h24 = d.getUTCHours();
  const m = d.getUTCMinutes();
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}${m ? `:${String(m).padStart(2, "0")}` : ""}${h24 < 12 ? "am" : "pm"} WAT`;
}
