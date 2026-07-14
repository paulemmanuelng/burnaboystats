import type { Metadata } from "next";
import SearchResults from "../components/SearchResults";
import { SITE_NAME } from "../lib/seo";

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
      <header className="pageHeader container">
        <h1>
          <span className="accent">Search</span>
        </h1>
        <p>Find any page — charts, awards, cars, certifications and more.</p>
      </header>

      <div className="container">
        <SearchResults initialQuery={q} />
      </div>
    </main>
  );
}
