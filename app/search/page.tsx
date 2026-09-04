import type { Metadata } from "next";
import SearchResults from "../components/SearchResults";
import { SITE_NAME } from "../lib/seo";
import { searchStats } from "../lib/searchStats";

const DESCRIPTION =
  "Search Burna Boy's charts, awards, certifications, tours, cars and career records.";

export const metadata: Metadata = {
  title: `Search — ${SITE_NAME}`,
  description: DESCRIPTION,
  // A query-results page shouldn't be indexed, but its links should be followed.
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
  // Open Graph DOES cascade: a page that sets no `openGraph` block inherits the
  // root layout's wholesale — which is the home page's title, description and,
  // worst, `url: "/"`. So /search was not shipping "no card"; it was shipping
  // the HOME PAGE's card, pointing at the home page, under a /search link. That
  // is the same inheritance bug the comment in primitives/page.tsx names for
  // `alternates.canonical`, one field over.
  //
  // Noindex is not a reason to skip this. Nothing about robots reaches a chat
  // app's unfurler — /search is linked from the footer sitemap and is exactly
  // the kind of URL a reader pastes ("search the site for it"), and the card is
  // what they'd see. It still needs no opengraph-image.tsx of its own: the root
  // card is a generic site card, which is the right picture for a search box.
  // Only the words and the URL were wrong.
  //
  // `images` has to be spelled out, though, and that is the trap. The root
  // opengraph-image.tsx is attached to the root's openGraph OBJECT, so a page
  // inherits the picture only for as long as it inherits the whole block.
  // Declaring three correct fields here silently dropped the fourth, and the
  // post-build og:image gate caught the page shipping no image at all.
  openGraph: {
    title: `Search — ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/search",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Search — ${SITE_NAME}`,
    description: DESCRIPTION,
  },
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
