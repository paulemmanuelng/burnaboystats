import { apiJson, API_VERSION } from "../../lib/api";
import { sweptArtists } from "../../data/afrobeats";

// Prerendered at build time — these are static datasets, not live queries.
export const dynamic = "force-static";

const endpoints = [
  {
    path: `/api/${API_VERSION}/stats`,
    description: "Headline career totals plus the Spotify monthly-listeners trend series.",
  },
  {
    path: `/api/${API_VERSION}/charts`,
    description:
      "Every official chart entry, by release, with the country and the chart body that owns it.",
  },
  {
    path: `/api/${API_VERSION}/certifications`,
    description: "Every certification, by release, with the awarding body and level.",
  },
  {
    path: `/api/${API_VERSION}/songs`,
    description: "The song catalogue behind the per-song pages, with streaming totals.",
  },
  {
    path: `/api/${API_VERSION}/awards`,
    description:
      "Every competitive nomination as one row — ceremony, year, category, work, won — plus the honours listed separately from the competitive total.",
  },
  {
    path: `/api/${API_VERSION}/tours`,
    description:
      "Tours, festivals and one-off shows with box-office figures where a source publishes them, plus the cross-artist highest-grossing-show board.",
  },
  {
    path: `/api/${API_VERSION}/afrobeats`,
    description:
      // + 1 for the subject, who is a row on that board like everyone else.
      // This said ${sweptArtists.length} — fifteen — while the endpoint it
      // describes, the /afrobeats page and the docs page all said sixteen: the
      // directory contradicted the thing it was pointing at.
      `The Afrobeats Board — ${sweptArtists.length + 1} artists' certifications and chart records counted by one stated rule, so the totals are comparable.`,
  },
  {
    path: `/api/${API_VERSION}/live-charts`,
    description:
      "Current platform positions across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts, rebuilt hourly. Add /{artist} for a board artist.",
  },
];

export function GET() {
  return apiJson({
    endpoint: "",
    description:
      "Open, verified Burna Boy chart and certification data. Free to use with attribution.",
    data: { endpoints },
  });
}
