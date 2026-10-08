import { downloadBySlug, type DownloadSlug } from "../lib/dataDownloads";
import { API_VERSION, LICENSE } from "../lib/api";
import { CANONICAL_ORIGIN } from "../lib/seo";

/**
 * The open-data line for a page's source note: "Download CSV ↓ · JSON ·
 * CC BY 4.0 · cite as burnaboystats.com".
 *
 * The CSV files and the JSON API exist (/api lists them), but the pages whose
 * data they are never linked them: the only routes were the menu sheet's "API
 * v1" and the footer's "Open data API", 15,000px down /certifications and
 * hidden on phones (design review CC-07, 8 Oct 2026). Journalists are a named
 * audience, and this puts the file one click from the figures it holds.
 *
 * A server component, rendered into the note's own paragraph after a line
 * break, so it reads as the note's last line in the note's own type. Its links
 * are class-less, so they take the site's prose-link underline. Every path is
 * read off the registries the routes are built from (DATA_DOWNLOADS, the API
 * version, the licence), never typed.
 */
export default function OpenDataLine({ data, json }: { data: DownloadSlug; json: string }) {
  const csv = downloadBySlug(data).path;
  return (
    // A no-break space before each "·", so a separator never opens a line.
    <span>
      <a href={csv} download>
        Download CSV <span aria-hidden="true">↓</span>
      </a>
      {"\u00a0· "}
      <a href={`/api/${API_VERSION}/${json}`}>JSON</a>
      {"\u00a0· "}
      <a href={LICENSE.url} rel="license noopener" target="_blank">
        {LICENSE.name}
      </a>
      {"\u00a0· "}
      cite as {new URL(CANONICAL_ORIGIN).host}
    </span>
  );
}
