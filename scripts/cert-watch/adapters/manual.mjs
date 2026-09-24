// The registers a machine may not read — rendered as weekly human checks.
// Spec: docs/cert-watcher/SPEC.md §3 rows 23–28 and §5.2.
//
// These are never fetched:
//   * RiSA and FIMI are PERMANENTLY manual — owner ruling, Paul, 24 Sep 2026
//     (SPEC §0.4): both ask not to be read by AI tools. RiSA's robots.txt
//     declares `Content-Usage: ai=n` and `DisallowAITraining: /` for every
//     agent (and names ClaudeBot and Claude-User); FIMI's footer forbids
//     crawling for AI training. No adapter is built for either, and config
//     refuses to enable them (config.adapters.<id>.permanent) — a permission
//     record included.
//   * Pro Música Colombia: Hostinger's "Checking your browser" 403 on the page,
//     the WP media API and the PDF, to both User-Agents (24 Sep 11:19 UTC).
//   * Ultratop answers every request with a Cloudflare challenge.
//   * ARIA's list is a Dropbox `/sh/` zip that robots.txt disallows.
//   * AFP's PDFs sit under audiogest.pt's disallowed `/uploads`.
// The checklist text itself lives in config.manualChecks, so the wording a
// human follows can change without a code change.

export const MANUAL = [
  {
    id: "risa",
    country: "ZA",
    body: "RiSA",
    class: "MANUAL",
    step: null,
    hosts: ["risa.org.za"],
    registerUrl: "https://risa.org.za/certification-levels/certifications/",
    manualCheck: "za",
    note: "permanently manual (owner ruling, 24 Sep 2026): RiSA asks AI tools not to read it — robots.txt Content-Usage: ai=n",
  },
  {
    id: "fimi",
    country: "IT",
    body: "FIMI",
    class: "MANUAL",
    step: null,
    hosts: ["www.fimi.it"],
    registerUrl: "https://www.fimi.it/top-of-the-music/certificazioni/",
    manualCheck: "it",
    note: "permanently manual (owner ruling, 24 Sep 2026): FIMI asks AI tools not to read it — its footer bars crawling for AI training",
  },
  {
    id: "promusica-co",
    country: "CO",
    body: "Pro Música Colombia",
    class: "MANUAL",
    step: null,
    hosts: ["pro-musica.co"],
    registerUrl: "https://pro-musica.co/certificaciones-2/",
    manualCheck: "co",
    note: "Hostinger bot check (403 \"Checking your browser\") since 24 Sep 2026 · register frozen since 21/02/2025",
  },
  {
    id: "ultratop",
    country: "BE",
    body: "Ultratop (BRMA)",
    class: "MANUAL",
    step: null,
    hosts: ["www.ultratop.be"],
    registerUrl: "https://www.ultratop.be/nl/goud-platina/2026/singles",
    manualCheck: "be",
    note: "Cloudflare challenge (403) on every request — never automated",
  },
  {
    id: "aria",
    country: "AU",
    body: "ARIA",
    class: "MANUAL",
    step: null,
    hosts: ["www.aria.com.au", "www.dropbox.com"],
    registerUrl: "https://www.aria.com.au/accreditations",
    manualCheck: "au",
    note: "list is a Dropbox /sh/ zip that robots.txt disallows",
  },
  {
    id: "afp",
    country: "PT",
    body: "AFP (Audiogest)",
    class: "MANUAL",
    step: null,
    hosts: ["www.audiogest.pt"],
    registerUrl: "https://www.audiogest.pt/tops-semanais-2026",
    manualCheck: "pt",
    note: "robots.txt disallows /uploads (the weekly and annual PDFs)",
  },
];
