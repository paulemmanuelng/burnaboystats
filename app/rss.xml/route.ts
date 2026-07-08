import { updates } from "../data/updates";
import { CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";

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
  const items = updates
    .map((u, i) => {
      const link = `${CANONICAL_ORIGIN}${u.href}`;
      const pubDate = new Date(`${u.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(u.text)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${escapeXml(`${u.href}#${u.date}-${i}`)}</guid>
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
