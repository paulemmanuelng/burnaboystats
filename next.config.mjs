/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baseline security headers applied to every response.
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
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
          "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
        ].join("; "),
      },
    ];
    return [
      { source: "/:path*", headers: securityHeaders },
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
    ];
  },

  // Keep one canonical surface: send the plain Vercel production alias to the
  // real domain. Only matches the clean alias, so preview deployment URLs
  // (burnaboystats-<hash>.vercel.app) stay reachable for testing.
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
