"use client"; // reads the current path so breadcrumb data is correct on every page

import { usePathname } from "next/navigation";
import { breadcrumbList, hasOwnBreadcrumb } from "../lib/seo";

// Emits BreadcrumbList structured data for the current page (server-rendered in
// the initial HTML, so search engines can show the site hierarchy). Renders
// nothing on the home page, and nothing on the routes that hand-write their own
// trail — those know leaf titles the URL cannot spell, and emitting both left a
// search engine choosing between two competing hierarchies for the same page.
// Placed once in the root layout — no per-page setup.
export default function Breadcrumbs() {
  const pathname = usePathname();
  if (hasOwnBreadcrumb(pathname)) return null;
  const data = breadcrumbList(pathname);
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
