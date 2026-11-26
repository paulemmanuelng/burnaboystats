import { certCountryCodes, countryFromSlug, countrySlug, priceCountry } from "../../../../../lib/certCountry";
import { compareStamp, compareView } from "../../../../../lib/boardFeeds/compare";
import { feedBody, feedNotFound, feedResponse } from "../../../../../lib/boardFeeds/envelope";

// One market's ranking (feed spec 4.6), prebuilt for all 28. Only the
// country's own slug answers; anything else is a JSON 404.
export const dynamicParams = true;
export function generateStaticParams() {
  return certCountryCodes().map((code) => ({ country: countrySlug(code) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const endpoint = `/api/v1/compare/in/${country}`;
  const code = countryFromSlug(country);
  if (!code || countrySlug(code) !== country) return feedNotFound(endpoint);
  const sp = { mode: "country", country };
  const view = compareView(sp, { path: `/compare/in/${country}`, leaf: priceCountry(code).name });
  return feedResponse(feedBody(endpoint, compareStamp(sp), { query: Object.entries(sp), ...view }));
}
