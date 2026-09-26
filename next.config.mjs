import comparePairRedirects from "./app/data/comparePairRedirects.json" with { type: "json" };
import embedWidgetList from "./app/data/embedWidgetList.json" with { type: "json" };

// The embed widgets' slugs, as one alternation for the framing rules in
// headers(): /embed/<a real widget> exactly, and nothing else under /embed.
// Generated from app/lib/embedWidgets.ts (scripts/build-embed-list.mjs), not
// typed, so a widget added there is framable the day it ships. A slug is
// lower-case words and hyphens; anything else would change what the pattern
// means, so it stops the build instead.
const embedSlugs = embedWidgetList.map((w) => w.slug);
if (!embedSlugs.length || embedSlugs.some((s) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s))) {
  throw new Error(`next.config.mjs: embed slugs must be lower-case words and hyphens, got ${JSON.stringify(embedSlugs)}`);
}
const EMBED_SLUG_PATTERN = embedSlugs.join("|");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // An /api/ URL with a trailing slash is answered, not redirected (F-07).
  //
  // Next's built-in trailing-slash redirect (/x/ → 308 → /x) runs ahead of
  // everything in this file; on Vercel it is the very first route, before
  // headers(). So /api/v1/stats/ got a 308 with no Access-Control-Allow-Origin,
  // and a fetch from another site stopped there. A preflight (OPTIONS) fared
  // worse, because a preflight answer has to be a 2xx. This switches the
  // built-in off. The first entry in redirects() puts it back, word for word,
  // for every path outside /api/ and /_next/ (Next keeps every redirect set
  // here off /_next/; it never links an asset with a trailing slash, so
  // nothing real used that one). The rewrite in rewrites() serves /api/<x>/ as
  // /api/<x>, so the route's own response answers the slash form for GET, HEAD
  // and OPTIONS alike, with its CORS, licence and cache headers. That needs no
  // middleware and no second copy of those headers.
  skipTrailingSlashRedirect: true,

  // Baseline security headers applied to every response.
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
      // REPORT-ONLY on purpose, for now.
      //
      // Every other header here was safe to switch on blind. A CSP is not: this
      // app ships 29 files' worth of inline JSON-LD, Next's own inline bootstrap,
      // and Vercel Analytics and Speed Insights, so an enforcing policy that is
      // even slightly wrong takes the site down rather than degrading it. Report-
      // only surfaces violations to the browser console and to any report-uri
      // without blocking a single request, which is the honest order: watch
      // first, enforce second.
      //
      // 'unsafe-inline' for scripts is what the JSON-LD and Next's bootstrap
      // need without a nonce; adding nonces is the work that makes enforcement
      // possible, and it is why this is not enforcing yet. Image hosts are the
      // three CDNs the site actually uses (Deezer, Apple, Spotify) plus data:
      // for the 1x1 in app/lib/blankPixel.ts.
      {
        key: "Content-Security-Policy-Report-Only",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https://cdn-images.dzcdn.net https://is1-ssl.mzstatic.com https://i.scdn.co",
          "font-src 'self' data:",
          // formsubmit.co is the contact form's POST target (ContactForm.tsx) and
          // the only non-same-origin fetch in the app. connect-src is declared,
          // so it does not fall back to default-src — without this the policy
          // would have blocked the form the moment it stopped being report-only.
          "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://formsubmit.co",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
          // Where the violations go. The comment above counts on "any
          // report-uri", and there was none: a report-only policy with nowhere
          // to report only ever spoke to the console of whoever had it open.
          // app/api/csp-report logs each report, so they land in the Vercel
          // function logs. report-uri is the form every browser reads;
          // report-to is the newer one, named by Reporting-Endpoints below.
          "report-uri /api/csp-report",
          "report-to csp",
        ].join("; "),
      },
      { key: "Reporting-Endpoints", value: 'csp="/api/csp-report"' },
    ];
    // The same report-only policy with one directive changed, for the embed
    // widgets (see their rule below). Derived rather than restated, so the two
    // cannot drift apart.
    const siteReportOnly = securityHeaders.find((h) => h.key === "Content-Security-Policy-Report-Only").value;
    const embedReportOnly = siteReportOnly.replace("frame-ancestors 'self'", "frame-ancestors *");
    if (embedReportOnly === siteReportOnly) throw new Error("next.config.mjs: the CSP no longer says frame-ancestors 'self'");
    return [
      { source: "/:path*", headers: securityHeaders },
      // X-Frame-Options: SAMEORIGIN on every path EXCEPT an embed widget,
      // /embed/<widget> for a slug in the widget list — so /embed itself (the
      // gallery page), a name that is not a widget (the site's 404 page), and
      // everything else keep it. A widget exists to be framed on other people's
      // sites, and there is no X-Frame-Options value that allows that: the only
      // way to allow it is not to send the header. The widgets' own rule below
      // sends frame-ancestors * instead.
      {
        source: `/:path((?!embed/(?:${EMBED_SLUG_PATTERN})$).*)`,
        headers: [{ key: "X-Frame-Options", value: "SAMEORIGIN" }],
      },
      // The API is open data read cross-origin, and its docs recommend a
      // conditional GET (If-None-Match against the ETag). Those request headers
      // are not CORS-safelisted, so a browser preflights them, and the preflight
      // answer (the platform's automatic OPTIONS) named no allowed headers: the
      // check the docs recommend failed from every other site. Measured on
      // production, 25 Sep 2026: OPTIONS /api/v1/stats → 204 with
      // allow-methods and allow-origin, no Access-Control-Allow-Headers.
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Headers", value: "If-None-Match, If-Modified-Since" },
          { key: "Access-Control-Max-Age", value: "86400" },
        ],
      },
      // The embed widgets, /embed/<widget> for the slugs in the widget list
      // only: framable by any site.
      //
      // frame-ancestors * is the ENFORCED half, and the only directive in it,
      // so it can decide nothing but who may frame the page. The report-only
      // policy is re-sent with frame-ancestors * as well (a later rule's header
      // replaces an earlier one's of the same name), because the site-wide one
      // says 'self', and every embed on another site would otherwise file a
      // violation report to /api/csp-report. Everything else in it is the
      // site-wide policy, word for word.
      //
      // noindex: a widget is a thin standalone page. indexifembedded lets Google
      // read it as part of the page that embeds it, which is where it is meant
      // to be read. Ahead of the non-canonical-host rule below on purpose, so a
      // preview deployment's widget still says "noindex, nofollow".
      {
        source: `/embed/:widget(${EMBED_SLUG_PATTERN})`,
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
          { key: "Content-Security-Policy-Report-Only", value: embedReportOnly },
          { key: "X-Robots-Tag", value: "noindex, indexifembedded" },
        ],
      },
      // Only burnaboystats.com should ever be indexable. The redirect below
      // covers the clean Vercel alias, but preview deployments
      // (burnaboystats-<hash>.vercel.app) are deliberately left reachable for
      // testing — which also leaves them crawlable as duplicates of the live
      // site. This makes every non-canonical host explicitly noindex, so no
      // copy of the site can compete with the real domain in search.
      {
        source: "/:path*",
        missing: [{ type: "host", value: "burnaboystats.com" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // Static assets are RESOURCES, not documents.
      //
      // Google has to fetch them to render the page, so it does — then finds
      // they are not pages and files them under "Crawled - currently not
      // indexed". Seven such URLs were sitting in that report on 22 Aug 2026:
      // five .woff2 fonts, the favicon and the root Open Graph image. Nothing
      // was broken; they were simply never indexable in the first place and
      // nothing had said so.
      //
      // noindex says it explicitly WITHOUT disallowing the fetch, and that
      // distinction is the whole point. robots.txt would stop Googlebot
      // retrieving these — and blocking render-critical resources (fonts
      // decide final text layout, and so CLS) costs more than the untidy
      // report it would clean up. Crawling stays open; only indexing is
      // declined.
      //
      // Social scrapers ignore X-Robots-Tag, so link previews are unaffected.
      {
        source: "/_next/static/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/favicon.ico",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/:path*/opengraph-image/:id*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      // The one non-English URL on the site says so at the transport layer too.
      //
      // /dai-dai/es is a real indexed Spanish page: it cross-declares hreflang
      // with /dai-dai, sets og:locale es_ES and marks its Article node
      // inLanguage "es". The one declaration it could NOT make was the document
      // one — <html lang> comes from the root layout, which hard-codes "en" for
      // the whole app, and no nested route can reopen <html> to correct it (the
      // route's own layout patches the DOM instead; see
      // app/dai-dai/es/DocumentLangEs.tsx).
      //
      // This is the part of that correction that survives without JavaScript.
      // Content-Language states the language of the intended audience for the
      // representation (RFC 9110 §8.5); it does not override a present lang
      // attribute for a browser, so it contradicts nothing — it just means a
      // consumer reading headers is told Spanish rather than nothing at all.
      {
        source: "/dai-dai/es",
        headers: [{ key: "Content-Language", value: "es" }],
      },
    ];
  },

  // Keep one canonical surface: send the plain Vercel production alias to the
  // real domain. Only matches the clean alias, so preview deployment URLs
  // (burnaboystats-<hash>.vercel.app) stay reachable for testing.
  async redirects() {
    return [
      // Next's own trailing-slash redirect (source "/:path+/"), switched off by
      // skipTrailingSlashRedirect above, back for every path except those under
      // /api/. /api/ itself is the docs page, so it still redirects: the
      // lookahead needs a character after "api/", and /api/'s only one is the
      // trailing slash. Keep it first, where Next put its own. Its twin is the
      // rewrite in rewrites().
      { source: "/:path((?!api/[^/])(?:[^/]+/)*[^/]+)/", destination: "/:path", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "burnaboystats.vercel.app" }],
        destination: "https://burnaboystats.com/:path*",
        permanent: true,
      },
      // The old Tour page now lives under Career Records. This has to be a
      // routing-layer redirect: as a page calling permanentRedirect() it got
      // statically prerendered, so Next couldn't emit an HTTP status and fell
      // back to a meta-refresh served with 200 — which left /tour looking like
      // a live page carrying the *homepage's* canonical.
      { source: "/tour", destination: "/records/tours", permanent: true },
      // Three pages that were live for under two hours in June and July 2026,
      // each in the sitemap while they stood, and 404s since (the 23 Sep 2026
      // Search Console check). Each goes to the page that replaced it.
      { source: "/music/gbona", destination: "/music/albums/african-giant", permanent: true },
      { source: "/music/kilometre", destination: "/music/albums/love-damini", permanent: true },
      { source: "/records/tours/shows", destination: "/records/tours", permanent: true },
      // /compare/<a>-vs-<b> has one canonical order per pair; the other order
      // redirects here, for the same reason as /tour. Generated from the data
      // by scripts/build-compare-redirects.mjs.
      ...comparePairRedirects,
    ];
  },

  // The other half of the trailing-slash rule: /api/<x>/ is served as /api/<x>,
  // with no redirect. The route handler's own headers answer it, CORS included.
  // Case is kept as typed (no folding), so the slash form of a 404 is the same
  // 404.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/:path(api/(?:[^/]+/)*[^/]+)/", destination: "/:path" }],
    };
  },
};

export default nextConfig;
