import type { Metadata } from "next";
import SearchResults from "../components/SearchResults";
import { SITE_NAME } from "../lib/seo";
import { searchStats } from "../lib/searchStats";

export const metadata: Metadata = {
  title: `Search — ${SITE_NAME}`,
  description:
    "Search Burna Boy's charts, awards, certifications, tours, cars and career records.",
  // A query-results page shouldn't be indexed, but its links should be followed.
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  return (
    <main id="content">
      {/* One layout at every width — see SearchResults. The stat map is built
          here, on the server, so the index stays out of the client bundle. */}
      <SearchResults initialQuery={q} stats={searchStats} />
    </main>
  );
}
