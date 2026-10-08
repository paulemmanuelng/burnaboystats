import { downloadBySlug, downloadFilename } from "../lib/dataDownloads";
import { API_VERSION, LICENSE } from "../lib/api";
import { CANONICAL_ORIGIN } from "../lib/seo";

/** "burnaboystats.com", from the canonical origin rather than typed. */
const SITE_HOST = new URL(CANONICAL_ORIGIN).host;
export const TOURS_JSON_PATH = `/api/${API_VERSION}/tours`;

/**
 * The one line under a tours page's source note that hands a journalist the
 * data behind it (design review of 8 Oct 2026, quick win 5 / T-11):
 * "Download CSV ↓ · JSON · CC BY 4.0 · cite as burnaboystats.com".
 *
 * A server component with no client code: the phone screens are client
 * components, so their pages render this and pass it in as a prop, and no
 * client bundle reaches the data modules (tests/tourRevenueServerOnly.test.ts).
 * The class is the note's own, so the line reads as part of it on each layout;
 * the links are class-less, so the site's prose-link underline marks them.
 *
 * `csv={false}` drops the file for a page whose rows are not in it — the
 * festivals list is in the JSON, not in tours.csv, which is the box-office
 * board — rather than offer a download that does not hold what the page shows.
 */
export default function ToursDataLine({ className, csv = true }: { className?: string; csv?: boolean }) {
  const file = downloadBySlug("tours");
  // Non-breaking before each separator, so a "·" never starts a line.
  const sep = " · ";
  return (
    <p className={className} data-tours-data-line="">
      {csv && (
        <>
          <a href={file.path} download={downloadFilename("tours")}>
            Download CSV<span aria-hidden="true">{" ↓"}</span>
          </a>
          {sep}
        </>
      )}
      <a href={TOURS_JSON_PATH}>JSON</a>
      {sep}
      <a href={LICENSE.url} rel="license noopener" target="_blank">
        {LICENSE.name}
      </a>
      {sep}cite as {SITE_HOST}
    </p>
  );
}
