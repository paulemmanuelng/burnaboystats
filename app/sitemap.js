import { siteUrl } from "./site";

export default function sitemap() {
  const routes = ["", "/music", "/certifications", "/tour", "/about", "/contact"];
  return routes.map((r) => ({ url: `${siteUrl}${r}`, lastModified: new Date() }));
}
