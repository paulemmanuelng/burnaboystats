// Structured-data (JSON-LD) builders that produce output we validate in tests,
// so missing Google-recommended fields fail our CI instead of showing up as a
// Search Console warning weeks later.
import { tours } from "../data/tours";
import { CANONICAL_ORIGIN } from "./seo";

const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

// Turn "Oct 16, 2025" into an ISO date; null if it doesn't match.
export function toISODate(date: string): string | null {
  const m = date.match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})$/);
  if (!m || !MONTHS[m[1]]) return null;
  return `${m[3]}-${MONTHS[m[1]]}-${m[2].padStart(2, "0")}`;
}

// MusicEvent graph for every documented tour show, with the full set of fields
// Google recommends for Event rich results (name, start/endDate, eventStatus,
// eventAttendanceMode, description, image, location, performer, organizer).
// We deliberately omit `offers`: these are historical, sold-out shows on a
// records site, so we have no honest ticket price/priceCurrency/validFrom to
// give — and an incomplete Offer is exactly what Search Console flags.
export function tourEventsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": tours.flatMap((t) =>
      (t.dates ?? []).flatMap((s) => {
        const iso = toISODate(s.date);
        if (!iso) return [];
        return [
          {
            "@type": "MusicEvent",
            name: `Burna Boy — ${t.name} (${s.city})`,
            startDate: iso,
            endDate: iso,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            description: `Burna Boy performing live at ${s.venue} in ${s.city} on the ${t.name}.`,
            image: [`${CANONICAL_ORIGIN}/opengraph-image`],
            location: {
              "@type": "Place",
              name: s.venue,
              address: {
                "@type": "PostalAddress",
                addressLocality: s.city,
                addressCountry: s.country,
              },
            },
            performer: { "@type": "MusicGroup", name: "Burna Boy" },
            organizer: {
              "@type": "Organization",
              name: "Spaceship Entertainment",
              url: "https://www.onaspaceship.com",
            },
          },
        ];
      })
    ),
  };
}
