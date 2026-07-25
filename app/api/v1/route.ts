import { apiJson, API_VERSION } from "../../lib/api";

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
];

export function GET() {
  return apiJson({
    endpoint: "",
    description:
      "Open, verified Burna Boy chart and certification data. Free to use with attribution.",
    data: { endpoints },
  });
}
