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

/**
 * Monthly listeners in millions, TWO decimals — both layouts' listener chart,
 * spelled as /records/africas-biggest spells the same readings (47.38M, 60.13M).
 *
 * The series is logged to two decimals, so this prints each reading exactly as
 * logged, and a reading can never be labelled past a threshold it had not
 * crossed: the 6 August 59.99M prints "59.99M", where a one-decimal toFixed
 * printed "60.0M" two days before the series' own 60M marker. The one-decimal
 * floor that replaced it kept that promise but broke the caption beside the
 * chart, which quotes the rise to two decimals — "+12.75M" under "47.3M" and
 * "60.1M", a sum that comes to 12.8 (Spotify audit, 27 Sep 2026).
 */
export const listenersLabel = (v: number) => `${v.toFixed(2)}M`;
