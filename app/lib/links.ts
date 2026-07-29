// Single source of truth for site navigation + cross-page "explore" links.
// Kept free of data imports so it's safe to use in the client Nav bundle.

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/records", label: "Records" },
  { href: "/live-charts", label: "Live Charts" },
  { href: "/updates", label: "Updates" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Footer sitemap. Carries only the DEEP pages — the ones with no route through
// the top nav. Certifications, Discography, Stat Cards, FAQ and About all live
// in navItems above, so repeating them here made the list twice as long while
// adding no new path into the site.
export const footerLinks = [
  { href: "/dai-dai", label: "The Dai Dai Story" },
  { href: "/share", label: "Stat Cards" },
  { href: "/records/charts", label: "Chart records" },
  { href: "/records/awards", label: "Awards" },
  { href: "/records/tours", label: "Tours" },
  { href: "/records/cars", label: "Car collection" },
  { href: "/records/africas-biggest", label: "Africa's Biggest" },
  { href: "/records/firsts", label: "Firsts" },
  { href: "/analysis", label: "Chart analysis" },
  { href: "/api", label: "Open data API" },
  { href: "/methodology", label: "Methodology" },
];
// Which 3 sections each page points to in its "Keep exploring" block.
export const exploreFor: Record<string, string[]> = {
  "/": ["certifications", "live-charts", "records"],
  "/music": ["live-charts", "certifications", "share"],
  "/certifications": ["music", "share", "records"],
  "/about": ["music", "certifications", "records"],
  "/faq": ["records", "certifications", "music"],
  "/methodology": ["about", "records", "certifications"],
  // The analysis page argues from the chart + cert data, so send readers to the
  // raw records behind it — and to the API if they want to check the working.
  "/analysis": ["charts", "certifications", "api"],
  "/api": ["analysis", "charts", "certifications"],
  // Cars is the site's #1 landing page (search traffic). Funnel that
  // wealth/lifestyle-curious audience toward the flashiest career stats.
  "/records/cars": ["records", "tours", "certifications"],
  // The other record pages were dead-ends too — point each onward to sibling
  // flagship stats (never to itself).
  "/records/awards": ["certifications", "charts", "share"],
  "/records/charts": ["live-charts", "dai-dai", "analysis"],
  "/live-charts": ["charts", "dai-dai", "africas-biggest"],
  "/dai-dai": ["live-charts", "charts", "share"],
  "/records/tours": ["records", "certifications", "charts"],
  "/records/firsts": ["dai-dai", "charts", "certifications"],
  "/records/africas-biggest": ["certifications", "charts", "share"],
  "/share": ["dai-dai", "certifications", "records"],
};
