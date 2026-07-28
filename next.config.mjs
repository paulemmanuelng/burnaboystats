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
