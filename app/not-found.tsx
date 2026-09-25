import Link from "next/link";
import AppState from "./components/AppState";
import { ROOT_OG_IMAGE } from "./lib/og-image";

// Title alone inherits the root layout's openGraph AND its canonical of "/",
// so a dead burnaboystats.com link pasted into a chat unfurled as a healthy
// home page — the reader got no signal the URL was broken — and every 404
// self-canonicalised to the home page. Same inheritance trap /search documents
// one route over. robots limits the SEO side, but never reaches an unfurler.
//
// noindex is stated here rather than left to Next, which adds it to a real 404
// but not to /_not-found itself: that URL answers 200 and shipped with no
// robots tag at all. And no canonical at all: the one it had, /404, is itself
// a 404, so every miss named a dead URL as its canonical. `null` still stops
// the root layout's "/" from being inherited.
export const metadata = {
  title: "Page Not Found — Burna Boy Stats",
  description: "That page doesn't exist. Every certification, chart peak, award and tour record is still here.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: {
    title: "Page Not Found — Burna Boy Stats",
    description: "That page doesn't exist. Every certification, chart peak, award and tour record is still here.",
    url: "/404",
    images: [{ url: ROOT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

// The five routes worth offering instead. The handoff is explicit: a 404 with
// only a "go home" button wastes the visit, and not to invent a "did you mean".
const SUGGESTIONS = [
  { label: "Certifications", href: "/certifications" },
  { label: "Official charts", href: "/records/charts" },
  { label: "Tours & live", href: "/records/tours" },
  { label: "Awards", href: "/records/awards" },
  { label: "The Dai Dai story", href: "/dai-dai" },
];

export default function NotFound() {
  return (
    <main id="content">
      <AppState
        glyph="404"
        appLevel
        title="No record of that page"
        body="Every page on this site maps to a dataset. This URL doesn't match one — it may have moved, or the record may never have existed."
        actions={
          <>
            <Link href="/" className="btn btnPrimary">Back to home</Link>
            <Link href="/search" className="btn btnSecondary">Search the dataset</Link>
          </>
        }
        suggestions={SUGGESTIONS}
      />
    </main>
  );
}
