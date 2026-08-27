# Progress log

## 2026-08-27

### Done
- Branch `cert-sourcing` created. **Nothing pushed to main.**
- Worklist generated: **231 plaques, 26 countries, 85 releases** (`burna-boy.worklist.json`).
- Audited the site's existing country-level body links.

### Finding 1 — only 10 of 26 bodies are linked at all

All ten that exist return HTTP 200, so nothing is rotten. But **16 countries
covering 75 plaques have no link to their certifying body at any level**:

| | Plaques | Body |
|---|---|---|
| NZ | 19 | RMNZ |
| AU | 10 | ARIA |
| CH | 9 | IFPI Schweiz |
| DK | 9 | IFPI Danmark |
| SE | 8 | GLF |
| PT | 6 | AFP |
| AT, BR | 3 each | IFPI Austria, Pro-Música Brasil |
| CO, HU, SK, GR, CZ, NO, PL, BE | 1 each | — |

### Finding 2 — the UK link works but points one level too high

`https://www.bpi.co.uk/award/` 302s to `bpi.co.uk/page/certified-awards`, which
is a real BPI page but not the searchable register. The register itself is at
`https://certified-awards.bpi.co.uk/` and offers genuine **per-title permalinks**
(`/format/2/artist/<id>/title/<id>`) — the best per-plaque link available from
any body so far. The UK entry should point there.

### Running
- Workflow `wf_f7108028-7f7` — 12 agents, one per body group, capturing every
  Burna Boy row each register holds. Artist-level capture, not title-by-title, so
  one register load covers all its plaques.

### Next
1. Match workflow output against the 231-row worklist; mark each `sourced` /
   `unreadable` / `tier-differs`.
2. Add per-plaque `src` links + a `certSources` provenance table.
3. Fill the 16 missing country-level body URLs.
4. Repeat for the 11 other board artists.

## 2026-08-27, later

### Burna Boy — pass 1 complete
- **157 of 231 sourced** at the certifying body, with verbatim quotes.
- **Zero aggregator URLs smuggled in** as body reads.
- Six audit corrections applied — see `BURNA-FINDINGS.md`. The big ones:
  Switzerland's 11 rows demoted (swisscharts is an aggregator, not IFPI Schweiz),
  Nigeria's 34 award dates blanked (register-wide stamp, not award dates), and
  France's 20 URLs swapped off title-only stubs onto the listing that shows the row.
- **One genuinely missing plaque found:** "No Stress" (Wizkid feat. Burna Boy),
  RiSA Platinum, South Africa.
- **One conflict:** the site records Be Honest CA Gold; Music Canada returned absent.
- **New Zealand needs its own pass** — 29 of 19+ rows came back absent, only 1 confirmed.

### Board — pass 1 running
Workflow `wf_110ab5eb-efd`, 11 agents. Organised **body-first, not artist-first**:
Nigeria alone is 475 of the board's 830 plaques across all twelve artists, so one
TCSN read covers 57% of the work. Every hard-won register quirk from the Burna pass
is baked into the prompts, including the explicit instruction NOT to cite swisscharts
for Switzerland, which is where the last pass failed.

### Scripts
`cert-sourcing.js` (Burna) and `board-sourcing.js` (board) are copied into this
directory so the exact prompts are reproducible.

### Still not written to app/data — by instruction. Nothing pushed to main.
