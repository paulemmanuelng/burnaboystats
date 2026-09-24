// The registers a machine may not read — rendered as weekly human checks.
// Spec: docs/cert-watcher/SPEC.md §3 rows 25–28 and §5.2.
//
// These are never fetched. Ultratop answers every request with a Cloudflare
// challenge; ARIA's list is a Dropbox `/sh/` zip that robots.txt disallows;
// AFP's PDFs sit under audiogest.pt's disallowed `/uploads`; RiSA waits on
// Paul's ruling (§11). The checklist text itself lives in config.manualChecks,
// so the wording a human follows can change without a code change.

export const MANUAL = [
  {
    id: "ultratop",
    country: "BE",
    body: "Ultratop (BRMA)",
    class: "MANUAL",
    step: 1,
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
    step: 1,
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
    step: 1,
    hosts: ["www.audiogest.pt"],
    registerUrl: "https://www.audiogest.pt/tops-semanais-2026",
    manualCheck: "pt",
    note: "robots.txt disallows /uploads (the weekly and annual PDFs)",
  },
  {
    id: "risa",
    country: "ZA",
    body: "RiSA",
    class: "MANUAL",
    step: 1,
    hosts: ["risa.org.za"],
    registerUrl: "https://risa.org.za/",
    manualCheck: "za",
    note: "awaiting Paul's ruling (SPEC §11.2)",
  },
];
