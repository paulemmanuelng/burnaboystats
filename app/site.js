// The canonical site URL. On Vercel this becomes the production domain
// (your custom domain once attached, otherwise the .vercel.app URL); locally
// it falls back to the planned domain.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://burnaboystats.com";
