// Shared SEO helpers — keeps every page's metadata complete and consistent
// (canonical + Open Graph + Twitter card), and builds breadcrumb structured data.
import type { Metadata } from "next";

export const SITE_NAME = "Burna Boy Stats";
// Canonical production origin (stable — used for absolute URLs in structured data).
export const CANONICAL_ORIGIN = "https://burnaboystats.com";

// Build a full Metadata object for a page: title + description + canonical, plus
// a matching Open Graph and Twitter card so social/search previews are unique
// per page (Next does not copy the page title into og:title automatically).
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  shareTitle?: string; // shorter title for social cards (optional)
  shareDescription?: string;
}): Metadata {
  const ogTitle = opts.shareTitle ?? opts.title;
  const ogDescription = opts.shareDescription ?? opts.description;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: opts.path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}

// Human-readable labels for each URL segment, used for breadcrumbs.
const SEGMENT_LABELS: Record<string, string> = {
  music: "Music",
  certifications: "Certifications",
  records: "Career Records",
  charts: "Official Charts",
  awards: "Awards",
  tours: "Tours & Live",
  festivals: "Festivals & Shows",
  firsts: "Firsts & Records",
  faq: "FAQ",
  about: "About",
  contact: "Contact",
};

// BreadcrumbList JSON-LD for a given path (e.g. "/records/tours/festivals").
// Returns null for the home page (a one-item breadcrumb is meaningless).
export function breadcrumbList(path: string) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [{ name: "Home", url: CANONICAL_ORIGIN }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({ name: SEGMENT_LABELS[seg] ?? seg, url: `${CANONICAL_ORIGIN}${acc}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
