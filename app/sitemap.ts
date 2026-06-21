import { siteUrl } from "./site";

export default function sitemap() {
  const routes = [
    "", "/music", "/certifications",
    "/records", "/records/charts", "/records/awards", "/records/tours", "/records/tours/shows", "/records/firsts",
    "/about", "/contact",
  ];
  return routes.map((r) => ({ url: `${siteUrl}${r}`, lastModified: new Date() }));
}
