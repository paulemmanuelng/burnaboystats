// Single source of truth for site navigation + cross-page "explore" links.
// Kept free of data imports so it's safe to use in the client Nav bundle.

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/tour", label: "Tour" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Which 3 sections each page points to in its "Keep exploring" block.
export const exploreFor: Record<string, string[]> = {
  "/": ["certifications", "music", "tour"],
  "/music": ["certifications", "tour", "about"],
  "/certifications": ["music", "tour", "about"],
  "/tour": ["music", "certifications", "about"],
  "/about": ["music", "certifications", "tour"],
};
