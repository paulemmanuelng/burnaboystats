import { updates } from "../data/updates";
import { CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { feedGuids } from "../lib/feedGuid";

// RSS 2.0 feed of the Latest Updates, so fans and aggregators can subscribe to
// the site's Burna Boy news. Statically generated; regenerates on each build.
export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const feedUrl = `${CANONICAL_ORIGIN}/rss.xml`;
  // Numbered per date, so a new entry never renumbers the ones below it.
  const guids = feedGuids(updates);
  const items = updates
    .map((u, i) => {
      const link = `${CANONICAL_ORIGIN}${u.href}`;
      // The start of the entry's day. Noon dated a morning entry in the
      // future: one live from about 09:05 UTC on 24 Sep 2026 went out as
      // "Thu, 24 Sep 2026 12:00:00 GMT".
      const pubDate = new Date(`${u.date}T00:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(u.text)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${escapeXml(guids[i])}</guid>
      <category>${escapeXml(u.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(u.text)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Latest Updates</title>
    <link>${CANONICAL_ORIGIN}/updates</link>
    <description>Real Burna Boy news as it happens — chart peaks, certifications, streaming milestones and records.</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
