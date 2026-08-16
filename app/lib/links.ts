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
/**
 * The footer sitemap, as four titled columns.
 *
 * This is the site's main internal-linking surface: every page links straight
 * to the deep stat pages from here, so link equity reaches the routes that earn
 * search traffic.
 */
export const footerColumns: { label: string; links: { href: string; label: string }[] }[] = [
  {
    label: "The data",
    links: [
      { href: "/certifications", label: "Certifications" },
      { href: "/live-charts", label: "Live Charts" },
      { href: "/records/charts", label: "Chart records" },
      { href: "/music", label: "Discography" },
      { href: "/records/by-the-numbers", label: "By the numbers" },
      { href: "/records/visualized", label: "Visualized" },
      { href: "/analysis", label: "Chart analysis" },
    ],
  },
  {
    label: "Records",
    links: [
      { href: "/records", label: "All career records" },
      { href: "/records/awards", label: "Awards" },
      { href: "/records/tours", label: "Tours" },
      { href: "/records/tours/revenue", label: "Tour revenue" },
      { href: "/records/tours/festivals", label: "Festivals" },
      { href: "/records/tours/map", label: "Tour map" },
      { href: "/records/firsts", label: "Firsts" },
      { href: "/records/africas-biggest", label: "Africa's Biggest" },
      { href: "/records/cars", label: "Car collection" },
    ],
  },
  {
    label: "The story",
    links: [
      { href: "/dai-dai", label: "The Dai Dai Story" },
      // Labelled in Spanish so a Spanish reader recognises it at a glance.
      { href: "/dai-dai/es", label: "Dai Dai en español" },
      { href: "/updates", label: "Updates" },
      { href: "/timeline", label: "Career timeline" },
      { href: "/about", label: "About Burna Boy" },
      { href: "/music", label: "Song pages" },
      { href: "/rss.xml", label: "RSS feed" },
    ],
  },
  {
    label: "The site",
    links: [
      { href: "/methodology", label: "Methodology" },
      // Next to the methodology: the two together answer "who says so, and how".
      { href: "/curator", label: "About the curator" },
      { href: "/api", label: "Open data API" },
      { href: "/search", label: "Search" },
      { href: "/share", label: "Stat Cards" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
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

/**
 * The compact footer used on every page except the home page.
 *
 * The design gives each deep page its own four links and its own provenance
 * line — the footer is part of the page's argument, not boilerplate. Pages the
 * design didn't draw a footer for fall back to DEFAULT_FOOTER.
 */
export interface FooterVariant {
  /** Appended after the standing "unofficial fan site" sentence. */
  note?: string;
  links: { href: string; label: string }[];
}

export const DEFAULT_FOOTER: FooterVariant = {
  links: [
    { href: "/music", label: "Music" },
    { href: "/records", label: "Records" },
    { href: "/live-charts", label: "Live Charts" },
    { href: "/api", label: "Open data API" },
    { href: "/press", label: "Press kit" },
  ],
};

export const footerFor: Record<string, FooterVariant> = {
  "/certifications": {
    note: "Certification data is read from each issuing body.",
    links: [
      { href: "/music", label: "Music" },
      { href: "/records", label: "Records" },
      { href: "/live-charts", label: "Live Charts" },
      { href: "/api", label: "Open data API" },
    ],
  },
  "/music": {
    note: "Album artwork is provided by Spotify and remains the property of its owners.",
    links: [
      { href: "/certifications", label: "Certifications" },
      { href: "/records", label: "Records" },
      { href: "/live-charts", label: "Live Charts" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/records": {
    note: "Box-office figures via Billboard Boxscore.",
    links: [
      { href: "/music", label: "Music" },
      { href: "/certifications", label: "Certifications" },
      { href: "/live-charts", label: "Live Charts" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/live-charts": {
    note: "Platform chart positions via kworb.",
    links: [
      { href: "/records/charts", label: "Chart records" },
      { href: "/certifications", label: "Certifications" },
      { href: "/dai-dai", label: "Dai Dai" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/about": {
    note: "Biography facts sourced from Wikipedia.",
    links: [
      { href: "/music", label: "Music" },
      { href: "/records", label: "Records" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  "/contact": {
    note: "Built by Paul Emmanuel.",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/methodology", label: "Methodology" },
      { href: "/api", label: "Open data API" },
    ],
  },
  "/faq": {
    links: [
      { href: "/methodology", label: "Methodology" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/api", label: "Open data API" },
    ],
  },
  "/updates": {
    links: [
      { href: "/rss.xml", label: "RSS" },
      { href: "/certifications", label: "Certifications" },
      { href: "/live-charts", label: "Live Charts" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/records/awards": {
    links: [
      { href: "/records/firsts", label: "Firsts" },
      { href: "/certifications", label: "Certifications" },
      { href: "/records/charts", label: "Chart records" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/records/firsts": {
    links: [
      { href: "/records/charts", label: "Chart records" },
      { href: "/records/tours", label: "Tours" },
      { href: "/dai-dai", label: "Dai Dai" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/records/tours": {
    links: [
      { href: "/records/tours/revenue", label: "Revenue" },
      { href: "/records/tours/festivals", label: "Festivals" },
      { href: "/records/tours/map", label: "Tour map" },
      { href: "/records/firsts", label: "Firsts" },
    ],
  },
  "/records/tours/revenue": {
    note: "Box-office figures via Billboard Boxscore.",
    links: [
      { href: "/records/tours", label: "Tours" },
      { href: "/records/tours/festivals", label: "Festivals" },
      { href: "/records/africas-biggest", label: "Africa's Biggest" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  "/records/tours/festivals": {
    links: [
      { href: "/records/tours", label: "Tours" },
      { href: "/records/tours/revenue", label: "Revenue" },
      { href: "/records/tours/map", label: "Tour map" },
      { href: "/records/firsts", label: "Firsts" },
    ],
  },
};
