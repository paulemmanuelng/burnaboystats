// Single source of truth for site navigation + cross-page "explore" links.
// Kept free of data imports so it's safe to use in the client Nav bundle.

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/records", label: "Records" },
  { href: "/updates", label: "Updates" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Footer sitemap — every page links straight to the deep stat pages that rank
// for search queries (awards, charts, tours…), spreading internal link equity.
export const footerLinks = [
  { href: "/certifications", label: "Certifications" },
  { href: "/music", label: "Discography" },
  { href: "/records/awards", label: "Awards" },
  { href: "/records/charts", label: "Chart records" },
  { href: "/records/tours", label: "Tours" },
  { href: "/records/africas-biggest", label: "Africa's Biggest" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

// Which 3 sections each page points to in its "Keep exploring" block.
export const exploreFor: Record<string, string[]> = {
  "/": ["certifications", "music", "records"],
  "/music": ["certifications", "records", "about"],
  "/certifications": ["music", "records", "about"],
  "/about": ["music", "certifications", "records"],
  "/faq": ["records", "certifications", "music"],
  // Cars is the site's #1 landing page (search traffic). Funnel that
  // wealth/lifestyle-curious audience toward the flashiest career stats.
  "/records/cars": ["records", "tours", "certifications"],
  // The other record pages were dead-ends too — point each onward to sibling
  // flagship stats (never to itself).
  "/records/awards": ["certifications", "charts", "tours"],
  "/records/charts": ["certifications", "records", "music"],
  "/records/tours": ["records", "certifications", "charts"],
  "/records/firsts": ["records", "charts", "certifications"],
  "/records/africas-biggest": ["certifications", "charts", "records"],
};
