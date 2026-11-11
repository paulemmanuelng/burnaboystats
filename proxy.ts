import { NextResponse, type NextRequest } from "next/server";
import { botVerdict } from "./app/lib/botBlock";

/**
 * The request layer's bot block (Next 16 calls middleware "proxy"). The rules
 * and their reasons are in app/lib/botBlock.ts; tests/botBlock.test.ts covers
 * them. A 403 here is cheap: no page renders, and nothing is cached.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const verdict = botVerdict(request.headers.get("user-agent"), pathname, search);
  if (verdict === "block") {
    return new NextResponse("Forbidden\n", {
      status: 403,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
  const res = NextResponse.next();
  if (verdict === "noindex") res.headers.set("X-Robots-Tag", "noindex");
  return res;
}

export const config = {
  // Pages only. Left out: the open API (/api, whose users script it), /_next,
  // share cards, icons, and any path with a file extension (robots.txt,
  // sitemap.xml, rss.xml, favicon.ico, sw.js, images, fonts). The same list
  // is EXEMPT_PATH in app/lib/botBlock.ts; the tests hold the two together.
  matcher: ["/((?!api(?:/|$)|_next/|.*(?:opengraph|twitter)-image|(?:apple-)?icon(?:$|[-/])|.*\\.[^/]*$).*)"],
};
