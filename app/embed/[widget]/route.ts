import { EMBED_SLUGS, renderEmbed } from "../../lib/embedWidgets";

// GET /embed/<widget> → one embeddable stat box, as a standalone HTML document.
//
// A route handler rather than a page on purpose: a page renders inside the root
// layout, and the root layout is the whole site — nav, footer, tab bar, search,
// analytics and the Next runtime — none of which belongs inside a 360px iframe
// on somebody else's blog. This answers a few kilobytes of HTML and inline CSS.
//
// Prerendered for every widget at build time and served from the CDN; a figure
// moves when the deploy that moves it on the site's own pages lands. An unknown
// name is the site's ordinary 404 (dynamicParams false: nothing runs for it).
//
// Framing is decided in next.config.mjs, not here: /embed/<widget> is the one
// path family that drops X-Frame-Options and sends frame-ancestors *, and the
// config is where every other path's headers already live.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return EMBED_SLUGS.map((widget) => ({ widget }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ widget: string }> }) {
  const { widget } = await params;
  const html = renderEmbed(widget);
  if (html === null) return new Response("Not found", { status: 404 });
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
