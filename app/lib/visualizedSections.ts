/**
 * The Visualized page's jump rail — one chip per chart section, in page order.
 *
 * Lives here rather than in the page because the mobile nav sheet advertises
 * "N charts" on its Visualized row, and that figure has to be derived from the
 * same list the page renders. A layout-level module cannot import a page
 * without dragging that route's CSS into every other route's chunk.
 */
export const JUMP = [
  { href: "#the-climb", label: "The climb" },
  { href: "#cert-pace", label: "Cert pace" },
  { href: "#wins-by-year", label: "Wins by year" },
  { href: "#biggest-songs", label: "Biggest songs" },
  { href: "#live-platforms", label: "Charting now" },
  { href: "#regions", label: "Regions" },
  { href: "#grosses", label: "Grosses" },
  { href: "#tickets-revenue", label: "Tickets vs revenue" },
  { href: "#certifications", label: "Certifications" },
  { href: "#tiers", label: "Tiers" },
  { href: "#chart-peaks", label: "Chart peaks" },
  { href: "#peak-distribution", label: "Peak spread" },
  { href: "#african-artists", label: "Africa’s biggest" },
  { href: "#awards", label: "Awards" },
  { href: "#win-rate", label: "Win rate" },
];
