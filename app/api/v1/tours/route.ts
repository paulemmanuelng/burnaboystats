import { apiJson } from "../../../lib/api";
import { tours, festivals, otherShows } from "../../../data/tours";
import { revenueShows } from "../../../data/tourRevenue";
import { countryCount as performedCountryCount } from "../../../data/performedCountries";

export const dynamic = "force-static";

// Gross and ticket counts stay as the strings the source publishes them in
// ("$30.46M", "58,973") rather than being parsed into numbers. Box-office
// figures arrive already rounded and already qualified, and converting
// "$30.46M" to 30460000 would invent a precision Billboard Boxscore never
// claimed. The one genuinely numeric field here — revenue on the per-show
// board — is published as a number because it arrives as one.
const runs = tours.map((t) => ({
  name: t.name,
  years: t.years,
  gross: t.gross ?? null,
  tickets: t.tickets ?? null,
  shows: t.shows ?? t.dates?.length ?? null,
  // A run still in progress: its totals are a floor, not a final figure.
  partial: t.partial ?? false,
  note: t.note,
  dates:
    t.dates?.map((d) => ({
      date: d.date,
      venue: d.venue,
      city: d.city,
      country: d.country,
      capacity: d.cap ?? null,
    })) ?? [],
}));

export function GET() {
  return apiJson({
    endpoint: "/tours",
    description:
      "Tours, festival sets and one-off shows, with box-office figures where a source publishes them. `gross` and `tickets` are kept as the strings the box-office source published — they arrive rounded and qualified, and parsing them to numbers would invent precision the source never claimed. `partial: true` marks a run still in progress, whose totals are a floor.",
    count: runs.length,
    data: {
      totals: {
        tours: runs.length,
        festivals: festivals.length,
        otherShows: otherShows.length,
        countriesPerformedIn: performedCountryCount,
      },
      tours: runs,
      festivals: festivals.map((f) => ({
        year: f.year,
        name: f.name,
        location: f.location,
        note: f.note ?? null,
      })),
      otherShows: otherShows.map((f) => ({
        year: f.year,
        name: f.name,
        location: f.location,
        note: f.note ?? null,
      })),
      // Cross-artist: the leaderboard this site publishes for context, so a
      // consumer can see whose show a figure belongs to.
      highestGrossingShows: revenueShows.map((r) => ({
        artist: r.artist,
        venue: r.venue,
        city: r.city,
        tour: r.tour,
        year: r.year,
        tickets: r.tickets,
        revenueUsd: r.revenue,
      })),
    },
  });
}
