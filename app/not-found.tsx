import Link from "next/link";
import AppState from "./components/AppState";

export const metadata = { title: "Page Not Found — Burna Boy Stats" };

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
