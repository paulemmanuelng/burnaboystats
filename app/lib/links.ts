// Single source of truth for site navigation + cross-page "explore" links.
// Kept free of data imports so it's safe to use in the client Nav bundle.

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/records", label: "Records" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Which 3 sections each page points to in its "Keep exploring" block.
export const exploreFor: Record<string, string[]> = {
  "/": ["certifications", "music", "records"],
  "/music": ["certifications", "records", "about"],
  "/certifications": ["music", "records", "about"],
  "/about": ["music", "certifications", "records"],
  "/faq": ["records", "certifications", "music"],
};
