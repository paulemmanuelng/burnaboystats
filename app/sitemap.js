export default function sitemap() {
  const base = "https://burnaboystats.com";
  const routes = ["", "/music", "/certifications", "/tour", "/about", "/contact"];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
