/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Send www.burnaboystats.com → burnaboystats.com (canonical apex)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.burnaboystats.com" }],
        destination: "https://burnaboystats.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
