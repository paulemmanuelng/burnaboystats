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
    return [{ source: "/:path*", headers: securityHeaders }];
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
