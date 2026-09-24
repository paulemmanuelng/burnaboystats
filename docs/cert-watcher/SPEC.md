# Cert watcher — build spec

File: `docs/cert-watcher/SPEC.md` (worktree `~/burnaboy-sweep`, branch `feat/cert-watcher`).
Written 24 Sep 2026; revised the same afternoon (§0.1). Paul picked this as "what to build next" #1 on 24 Sep 2026.

**Status.** Steps 1 and 2 are built and committed: `7a66350f` (step 1) and `74795248` (step 2), where `origin/feat/cert-watcher` stands. Steps 3a, 3b and 3c, the docs of the first full live run, the review fixes (§0.3), the owner rulings and clean-up (§0.4) and the rulings and privacy clean-up that followed them (§0.5) are **one local merge commit** on top of `74795248`, whose second parent is `origin/main` at `81ab9c91`. It replaces every local commit made after `74795248`, because their history carried personal data (§0.4.8, §0.5.10); none of them was pushed, and none is reachable from any branch. Nothing after `74795248` is pushed. There is no step 3d: RiSA and FIMI are permanently manual (§0.4.1). What step 3 found that differs from this spec is in §0.2; what the review changed is in §0.3; the rulings and the clean-up are in §0.4 and §0.5.

This spec draws on five things: the monitor code in this repo, the 23 Sep sweep's saved register responses (`$SWEEP`), the 24 Sep morning endpoint re-test (`$RETEST`), the 24 Sep afternoon recipe re-test of all 27 bodies (`$RECIPES`), and the memory notes.

```
SCRATCH=/private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/67f048ed-be83-4572-8a31-55a59d5d7dc5/scratchpad
SWEEP=$SCRATCH/sweep-2026-09-23
RETEST=$SCRATCH/certwatch-retest            # 06:49–06:54 UTC, bodies in body/, headers in hdr/
RECIPES=$SCRATCH/cert-watch-recipes/out     # 11:15–11:29 UTC, <name>.s.* = site UA, <name>.b.* = browser UA
```

All three are scratch directories and will not last. **Step 3a copies what step 3 needs into `tests/fixtures/cert-watch/` before anything else** (§9.1).

---

## 0. What it is, and what it must never do

Once a day, a GitHub Action does the following:

- reads every certification register a machine may read, for the 16 artists (Burna Boy plus the 15 on the board);
- compares each row that names one of them with the site's own plaque data (`app/data/certifications.ts`, `app/data/afrobeats.ts`);
- keeps **one** GitHub issue up to date. That issue lists every plaque the site lacks, every tier or multiple higher than the site holds, the watchlist, each register's reachability, and the week's manual checks.

It must never:

- **Edit site data, commit, push or open a PR.** The job has `contents: read`. Every plaque is added by hand after a human confirms it at the body ([[feedback-certs-confirm-at-body]]).
- **Treat a register row as a verified plaque.** Every line in the issue is a lead.
- **Say "no new certifications" for a register it did not read cleanly.** Unreachable, format changed, shrank, held and not-yet-built are each their own status. A register that was read but whose newest date has not moved in its usual cadence is **stale**, which is also not "no new".
- **Infer absence, downgrade or removal.** A register row the site is *ahead* of is never reported as a candidate. This covers overwritten SNEP rows, NVPI lag, TCSN's 500-row cap, CZ/SK and GR chart-bound badges, the frozen CO register, RIAA Latin's lag behind RIAA's own post on Dai Dai (§5.4), and the kept plaques in [[feedback-kept-plaques-paul-ruled]].
- **Solve, evade or retry around a bot challenge, log in, or spoof a browser.** The User-Agent is always `burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)`. On risa.org.za honesty is also what works: a Chrome User-Agent gets a 1,099-byte decoy, and the honest one gets the real page.
- **Reach a register through a back-end or origin host, or a mirror, to get round its public front.** For example, `risa-prod.trafficmanager.net` is never used for RiSA, and `hitparade.ch` is never swapped for another host when it challenges. swisscharts.com is used because it is a public site in its own right that publishes the IFPI Schweiz awards, not as a way round hitparade.ch.
- **Put Paul's email or any personal data in a request, header, file, fixture or issue.** This is enforced by a test (§9).
- **Read a path that robots.txt disallows for this User-Agent or `*`.** That rule is why BPI, ARIA's Dropbox zip and audiogest's PDFs are manual.
- **Keep cookies beyond one run.** If a host needs a session cookie between two requests in the same run (RadioScope may), the cookie lives only in memory for that run. It is never written to disk, the cache or a fixture.

### House rules for the build

- Commit only after `npx tsc --noEmit`, `npx eslint`, `npx vitest run --testTimeout=60000` and `npx next build` **all exit 0**. Capture `$?` for each. Never pipe a check into grep, and never chain a commit with `;` ([[feedback-gate-commits-on-exit-code]]).
- Commit messages are plain, with no `Co-Authored-By` and no AI lines ([[feedback-no-coauthor-trailer]]).
- Do not push, open PRs or merge. Do not use ports 3000, 3100 or 3102.
- A figure the report prints is **derived** from data, never typed ([[feedback-derive-figures-from-data]]).
- Every guard is proved with a **real** string: the literal row a register served or the line the site shipped ([[feedback-negative-controls-use-real-strings]]).

### 0.1 Changes in this revision (24 Sep, afternoon)

1. **The site moved ahead of the register on Dai Dai.** PR #320 (`dd48b544`, merged before #319 and #321) changed Dai Dai US to `{ c: "US", level: "Platinum", x: 6, body: "RIAA Latin" }`. The source is RIAA's verified @riaa_awards post of 23 Sep, and Paul approved it on 24 Sep. RIAA's database still read `2X PLATINO` / `badge LA level 2` at 11:15 UTC on 24 Sep (award `default_451299`, July 9, 2026).
   - The watchlist item is re-framed. It now lands when **the register catches up with the site** (§5.4); it no longer waits for "above 2X".
   - Once the branch is synced, `tests/certWatchSite.test.ts:27` (which asserts `x: 2`) goes red. Step 3a fixes it by deriving the multiple from `certifications.ts`.
   - Tests that use the frozen `site-index.2026-09-24.json` (`certWatchReport.test.ts:61,87`) are unaffected and stay as they are.
   - (The task text said #319. #319 is the UK streams-firsts PR; the 6× is #320.)
2. **The branch was pushed.** `origin/feat/cert-watcher` has been at `74795248` since a push at 2026-09-24 10:35 +0100, according to the reflog. Nothing records who pushed. The build must push nothing further. Whether to keep or delete the remote branch is Paul's call (§11.8). Because the branch is public, step 3a **merges** `origin/main` instead of rebasing, so the published commits are never rewritten.
3. **Classification now follows the afternoon re-test** (§3). ZPAV moves to AUTOMATE. ČNS IFPI, BVMI and IFPI Greece move to WITH-CARE. There are two holds:
   - **Pro Música Colombia → MANUAL.** Hostinger served its "Checking your browser before accessing" 403 on the page, the WP media API and the PDF, to both User-Agents, at 11:19 UTC. The same PDF answered a HEAD with 200 at 06:54 UTC, so the challenge comes and goes. The register itself has been frozen since 21/02/2025.
   - **FIMI → MANUAL (policy hold)** until Paul rules. Its footer forbids crawling for AI training, and the re-test did not touch it. (Ruled 24 Sep: permanently manual, §0.4.1.)

   **RiSA** has a working recipe now: the honest User-Agent gets the real page and a 766-row JSON. It stays held until Paul rules on its `Content-Usage: ai=n` (§11.2). (Ruled 24 Sep: permanently manual, §0.4.1.)

   Automated registers go from 23 to **21**, and manual or held ones from 5 to **7**.
4. **Health checks gain four rules** (§7), from the re-test:
   - a decoy title (`<title>ai/…`) means `challenge`;
   - a register total below the floor learned on earlier runs means `shrank`;
   - a positive control is checked **daily** wherever the daily read covers a stable row;
   - a register whose newest date has not moved within its cadence is `stale`.
5. **Recipe corrections.**
   - **BVMI.** Every variant of the artist-name query (`strInterpret`) returned an empty result, so the name search is dropped. The daily read is the current-year walk: about 40 pages, 784 rows.
   - **IFPI Austria.** The default page is a stale cache (`total_rows 5982`), while `?fwp_per_page=100` gives `5994`. A served page size other than 100 means `mismatch`.
   - **TCSN.** Three build ids were seen in about 24 hours (`34rN-IwkSfDR60dD2OaG2`, `ZrJg_IrMVvhD5CaQgm2Ai`, `9FLVyEQ3OX_KP6OGJD8nk`), but the 500 rows were identical. The daily read is now the page HTML (`__NEXT_DATA__`, with an ETag), and the build-id cursor is gone.
   - **ZPAV.** It works with the honest User-Agent as long as the request sends `X-Requested-With` and the Referer. The memory note that says a browser User-Agent is needed is wrong (§11.11).
   - **AMPROFON.** It serves no ETag or Last-Modified (`server: hcdn`), so conditional GET is impossible there. The body is 4.56 MB raw, 265 KB with gzip.
6. **The first Actions run** (a `workflow_dispatch` dry run, after Paul merges) records each host's first status, `server` header and content marker in the run details. That is how datacenter-IP behaviour gets seen before any issue is written (§3.4, the risk column).

### 0.2 Step 3 as built (24 Sep, evening)

What the build found against the live registers, where it differs from the text below. The text below is otherwise unchanged.

1. **BVMI.** The 2026 year read is **22 pages, 434 rows** (429 in the 23 Sep sweep's own walk), not "about 40 pages, 784 rows". `$RECIPES/bvmi_p40.s.body` is not the end of that walk, so it is not used as the past-the-end fixture; the repeat rule is tested on the live pages with a labelled edit.
2. **PROMUSICAE** served **English** to a request with no Accept-Language ("Showing 1-10 of 19 items.", "Gold award", Year / Week). The adapter sends `Accept-Language: es-ES` (as the register's page does in a Spanish browser) and reads either locale; both are proved on real pages. The allowed-header list in §2.4 gains es-ES for PROMUSICAE and `Accept: application/json` for RadioScope's SSP call.
3. **RMNZ.** The pages are read at their canonical `/2024/04/06/single-cert-search/` and `/album-cert-search/`. The SSP call worked with the token alone: **no cookie jar** for radioscope.co.nz.
4. **Pro-Música Brasil.** `?paged=N` 301-redirects to `/page/N/?…`, so later pages are asked for at that canonical URL. The 2026 year view was 32 pages (1,274 certificates); the deep cap is 40 and its budget 300 s.
5. **IFPI Greece** staleness counts from the file's Last-Modified (week 37's chart was published 23 Sep), not the chart week.
6. **TCSN.** Ten titles TCSN prints differently from the site's reconciled ones (Sungba → Sungba (Remix), Kese (Dance) → Kese, …) are `titleAliases` **scoped to TCSN** (`register: "tcsn"`), each with the 23 Sep sweep's reconciliation as its why and marked for Paul to confirm (he confirmed all ten the same day, §0.4.2). An owner-tagged TCSN title also locates a site release filed with its tag ("Stubborn (Victony)"). The Wayback CDX lead did not read from Paul's Mac (Node's TLS check on web.archive.org, `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`); it is a note, never a failed register.
7. **Personal data in real pages.** PROMUSICAE prints the visitor's IP in its footer (`EX-IP`) and BVMI echoes it in `X-Remote-Addr`; RadioScope's footer carries a person's `mailto:`. `--save-raw` redacts the first and drops the second; the fixtures are redacted and say so in PROVENANCE; a config test scans every fixture for email and machine addresses. (BVMI's contact addresses, printed obfuscated, got past both until §0.4.4.)
8. **AMPROFON** had 8,685 rows on 24 Sep. Its entities (`JULI&Oacute;N`, all-caps `&EACUTE;`) are decoded by the shared decoder, which now knows the Latin-1 names.
9. **The first full live run** (`--dry-run --deep`, fresh cache, 13:03 UTC): 21 of 21 automated registers read cleanly in 2 m 14 s, 351 requests, smallest gaps 1.1 s (10 s swisscharts.com, 30 s musiccanada.com), every daily control found, floors learned. It listed seven candidates, and the review (§0.3) showed five were not leads: TCSN's `Sarz, Asake & Gunna | Happiness (Sarz)` for Wizkid and Rema's Soweto (Victony & Tempoe) in the US, FR and ES came through chart aliases, and Pro-Música Brasil's `Rema | Fame - A COLORS ENCORE` is a plaque the site holds, printed with a hyphen. The two leads for Paul: TCSN `Asake | 02:30` (Platinum_4) and PROMUSICAE `CKAY / AXEL / DJ YO | LOVE NWANTITI (REMIX)` (Platino) — both ruled on 24 Sep (§0.5.1–2), and neither is a lead any more. The re-run after the fixes is `docs/cert-watcher/sample-report.md` (as rendered then, with a note on the rulings).

### 0.3 Review fixes (24 Sep, night)

An independent review said "don't ship as-is". Its seven findings, all fixed in one commit:

1. **Dashes.** `normalise` folds U+2010–U+2015 and U+2212 to `-`. Pro-Música Brasil prints `Fame - A COLORS ENCORE`; the site ships `Fame – A COLORS ENCORE` (BR Gold). A hydrated index recomputes its keys from the verbatim titles, so an index dumped before the change gets the new key too.
2. **Certification aliases.** `LIVE_ARTISTS` aliases were read off the chart sweeps. They now match certification rows only through `certAliases` (§4.1): a chart alias passes only when the site holds a plaque on its release for that artist, its title keeps the release's version words, and `config.chartOnlyAliases` does not rule it out. Nine chart aliases fail the derived checks (Sarz / Happiness for Wizkid, whose page has no Happiness; Burna Boy / Second Sermon for Black Sherif, whose release is the Remix; seven more with no plaque behind them), and one ruling adds Victony / Soweto for Rema (the original is not his). Burna Boy's feature credits and `config.leadAliases` are never gated. The ten TCSN-scoped title aliases are untouched here (Paul confirmed them later that day, §0.4.2). Lead acts for searches still come from every alias: a search term only widens the read.
3. **Live controls and matched rows.** TCSN's control is daily (the whole live list is the daily read). Newest-first windows get a `window` test: IFPI Norge, ZPAV, RMNZ, Music Canada and IFPI Danmark check their control on every run that reaches back past the row, and say so when it does not; IFPI Austria's is checked on deep runs (the full register). A new `unmatched` status (§7) holds a read whose rows naming the sixteen fall under half the last clean count of the same kind; a field check marks a read `format` when more than 5% of rows have an empty, date-like or markup credit or title. **IFPI Danmark's 0 of 152 on 24 Sep is real**: pages 0–2 run 11.08–16.09.2026, all 152 rows parse into six fields (50 per `<tr class="certpagetable">`), the raw HTML names none of the sixteen (its Shakira, Drake and Dave rows are She Wolf, NOKIA and Verdansk), and the same parser on the live page 6 finds and matches `Dave feat. Tems | Raindance` (07.07.2026, in sync). (Two gaps stayed open: Music Canada's and IFPI Danmark's windows could never reach their control rows again, and the matched floor could decay to 0. Both are closed in §0.4.5–6.)
4. **`--save-raw` redacts `mailto:` addresses** (RadioScope's footer carries a person's), as it redacts PROMUSICAE's `EX-IP`.
5. **Namesakes in the lead-alias step.** A lead that is one of the sixteen is tested with that artist's namesakes subtracted, so `TYLA YAWEH` never fires Wizkid's (Tyla, Dynamite) alias. `Rema Namakula` (Deezer artist 5942680, the Ugandan singer) is Rema's namesake.
6. **Co-credit suffixes.** A site title's trailing co-credit (`Dynamite — Tyla & Wizkid`, `Time N Affection (w/ Chris Brown)`, `Mood (Wizkid ft. BNXN)`, `Holy Water (Davido)`) is an alternate key for matching only; the displayed title is unchanged. A suffix is a co-credit when it opens with a feature word or names one of the sixteen, and carries no version word (`Drift (Remix) (Teejay & Davido)` keeps `(Remix)`). `On God (Vibez Inc, ODUMODUBLVCK & Tml Vibez)` is left alone: it names none of the sixteen, and Seyi Vibez has a second "On God".
7. **Ambiguous format.** A row with no format that fits an album and a single alike (`I Told Them...` / `I Told Them`) is compared with both. In sync with both, it says nothing; otherwise it is an `AMBIGUOUS` lead that names each release and what the site holds on it. It clears only when every release holds the reading.

The live `--dry-run --deep` after the fixes (fresh cache, 14:12 UTC): 21 of 21 read cleanly in 2 m 5 s, 350 requests, the same smallest gaps, every due control found, and two leads — TCSN `Asake | 02:30` (Platinum_4) and PROMUSICAE `CKAY / AXEL / DJ YO | LOVE NWANTITI (REMIX)` (Platino). Paul ruled on both later that night (§0.5.1–2): the first reads in sync, the second is a known divergence.

Two of the review's findings were not fully closed by that commit (the window controls of Music Canada and IFPI Danmark, and the matched-rows floor), and one was new (leads from an untrusted read); §0.4 closes them.

### 0.4 Owner rulings and clean-up (24 Sep, late)

Paul's rulings of 24 Sep 2026 ("yes to all"), and the clean-up done before anything after `74795248` can be pushed:

1. **RiSA and FIMI are permanently manual.** Both ask not to be read by AI tools: RiSA's robots.txt declares `Content-Usage: ai=n` and `DisallowAITraining: /` for every agent and disallows ClaudeBot and Claude-User by name; FIMI's footer forbids crawling for AI training. No adapter is built for either (step 3d is cancelled). Their registry rows are plain MANUAL rows (`📋 human check`, with the ruling as the note), and `config.adapters.<id>` records it: `enabled: false`, `permanent: true`, `ruledBy: "Paul"`, `on: "2026-09-24"` and the reason. Config validation refuses to enable either, with or without a permission record. ZA and IT stay weekly human checks. The recipes in §3.3 are kept for the record only.
2. **The ten TCSN-scoped title aliases are confirmed** (§0.2.6). Each `why` now ends "confirmed by Paul 24 Sep 2026" and carries `ruledBy: "Paul"`. The two step-2 aliases (SNEP `JERUSALEMA`, `love nwantiti`; §11.10) were not part of that ruling; Paul confirmed them later that night (§0.5.3).
3. **Pro-Música Brasil prints Tems as "Teams"** on `Beyoncé feat.Grace Jones and Teams | MOVE` (2024, SINGLE, Platina, `disco_platina.png`); its 2023 Ouro row reads `Beyoncé feat. Grace Jones and Tems`. A `creditTypos` entry scoped to `promusica-br` (`Teams` → tems) matches the card to Tems's "Move", where the site's BR Platinum is correct, so it reads in sync (flagged ⚠ `register misspells the credit ("Teams")` if it ever becomes a lead). A name search for "Tems" never returns that card, so a register-scoped typo's printed credit is also one of that register's name searches (`searchTermsFor`): Pro-Música Brasil now makes 20 searches, and no other register's searches change. The real card was saved by the watcher itself (`promusica-br/run-2026-09-24/artist__teams-p1.html.gz`, 16:35 UTC).
4. **Personal data in saved pages.** BVMI's contact block prints a staff member's address and a role address twice over: as `<name>[at]<domain>` display text, and as a TYPO3 `data-mailto-token` / `data-mailto-vector` pair (the same address, encrypted). Both were in 23 committed fixtures (the empty name search and the 22 pages of the 2026 walk). `redactSaved` (what `--save-raw` writes) now redacts, besides `mailto:` and `EX-IP`:
   - an address written another way — `[at]`, `(at)`, `{at}`, the bare word ` at ` (not after prose words, never before a URL path), `&#64;`, `&#x40;`, `%40`, a JSON `\u0040`, with plain or obfuscated (`[dot]`) dots — and a plain `<name>@<domain>` (not an image's `@2x` variant or a pinned package);
   - both TYPO3 values, which are blanked;
   - a machine address after a label that says so: PROMUSICAE's footer prints `IP:` (its proxy) as well as `EX-IP:` (the visitor), a JSON `ip` field, "Your IP", `REMOTE_ADDR`, Cloudflare's footer.

   Saved headers also drop `cf-connecting-ip`, `true-client-ip`, `forwarded`, `x-original-forwarded-for` and `x-envoy-external-address`. Every committed fixture was re-redacted with it: 43 changed (the 23 BVMI pages, and the `IP:` line of PROMUSICAE's 20 footers); `.gz` files were recompressed the way they were made (level 9, mtime 0, the member's own file name), and a second pass changes nothing. Five organisations' own addresses (Grammotex ×2, Sverigetopplistan, IFPI Danmark, ČNS IFPI) were left as they were, pending Paul's ruling (§11.12); he ruled to remove them, and they are gone from every fixture, test and doc (§0.5.4). `certWatchConfig.test.ts` scans every file under `scripts/cert-watch`, the fixtures (`.gz` decompressed), `docs/cert-watcher` and the workflow for each of these shapes, written independently of `redactSaved`; it goes red on the tree before this clean-up (92 TYPO3 values, 46 obfuscated addresses, 20 labelled machine addresses). Both redactions are proved on the real BVMI and PROMUSICAE pages with placeholders put back (labelled edits), and give back the committed fixture byte for byte.
5. **Live checks for newest-first windows** (review finding, §0.3.3). Music Canada's and IFPI Danmark's fixed control rows (id 89702; the 07.07.2026 Raindance row) had already scrolled out of their daily reads, and a newest-first window only moves forward, so their `window` tests could never fire live. Each now carries a **rolling control** (`rollingControl: true`): the last clean read's newest rows — Music Canada's three newest ids, and one row from each of IFPI Danmark's three newest dates — as `(id or date, 16-hex digest of the fields that must not change)` in the cursor, never the row itself (§6.1). Today's read must hold, digest for digest, at least one of those it reaches back to; none is a changed format ("rolling control missing"), and one withdrawn row is only a note. IFPI Danmark certifies in dated batches (every date in pages 0–2 was shared on 24 Sep), so a carried row whose date others share is due only once the read goes past that date. The fixed rows stay test controls, and the comments say so.
6. **The matched-rows floor** (review finding, §0.3.3). It was the last clean count, so a slide of small steps took it down with it (170 → 136 → … → 1, each above half of the day before) and three runs at 0 made 0 the floor — after which the check could never fire again (0 is half of 0). The floor is now the **peak** of the clean reads of the same kind: a count above half the peak passes with a note ("N rows naming the 16 on the daily read (peak P)"), a count under half is `unmatched`, and three identical lower reads still lower it with a notify — but **0 is never a floor**: not learned from a first read, not kept from an older state, and not accepted after three runs, so a register that names none of the sixteen stays `unmatched` until someone looks. Proved on a scratch copy of the old `health.mjs`: the old code let the slide and the 0 through; the new one trips at the first count under half the peak.
7. **Untrusted reads post no leads** (review finding). A read that came back but is not clean — `format` (a missing control, the rolling control, the field check), `shrank`, `unmatched` — still had its rows posted as candidates. Now only an `ok` or `stale` read's candidates are leads. Any other read's would-be candidates are **held back**: listed under "Held back — rows from reads not trusted today" as plain text (a count and up to three rows, with no box to tick and no fingerprint), never written to state and never notified, and the headline says how many. They come back as leads on the register's next clean read. §2.2, §5.1, §6.2 and §7 say so.
8. **One clean commit.** The local commits after `74795248` carried BVMI's addresses in their history, so they must never be pushed. They are replaced by one merge commit whose tree is the redacted tree and whose parents are `74795248` and `81ab9c91` (`origin/main`, which step 3a had merged), built with `git commit-tree`; the branch was moved to it with `git reset --soft`. The old commits are no longer reachable from the branch. Nothing was pushed. (§0.5.10 does the same again, after the clean-up below.)
9. **A timer that wakes early.** The live `--dry-run --deep` after this clean-up (fresh cache, 16:56 UTC) measured 1,099 ms between two requests on three hosts: Node's timer can wake a millisecond before the gap it was set for. `waitGap` now sleeps a millisecond past the gap, and again while the clock says the gap is short; a test whose clock wakes 1 ms early keeps every gap at 1,100 ms or more (the old code gives 1,099).

### 0.5 Owner rulings and the privacy clean-up (24 Sep, night)

An independent re-review of the §0.4 commit said "fix first". Paul ruled on its open questions on 24 Sep 2026; each ruling is in `config.json` with `ruledBy: "Paul"` and its why.

1. **Asake "02:30" is Asake "2:30"** (confirmed by Paul 24 Sep 2026). TCSN prints `Asake | 02:30` (Platinum_4); it is the same record as the site's "2:30", which already holds NG Platinum ×4 (`app/data/afrobeats.ts`, Asake's releases; `docs/sweeps/asake-certifications-v1.md`: "`02:30` and `2:30` both appear — one title"; `docs/sourcing/BOARD-FINDINGS.md`). An eleventh TCSN-scoped title alias, `{register: "tcsn", artist: "asake", printed: "02:30", release: "2:30"}`, reads it in sync. The alias is the release hint `locate` tries first, so the row always lands on the certified "2:30": the "02:30" in Asake's `charts` list is a chart entry with no plaque, not a release, and even if it were ever indexed as one (a labelled edit in `certWatchTcsn.test.ts`) the row still lands on "2:30" — a second NG ×4 is never proposed. A real change still fires, on "2:30": the site edited to ×3 gives an UPGRADE, without its NG plaque a NEW PLAQUE. Without the alias the real row is the first live run's lead again (the test proves both).
2. **CKay's remix is not added** (ruled by Paul 24 Sep 2026). PROMUSICAE lists `CKAY / AXEL / DJ YO | LOVE NWANTITI (REMIX)` (cards 15859, Oro, 2021 week 46, and 23765, Platino, 2024 week 11). The site counts a song and its remixes as **one record per country** (`docs/sweeps/ckay-certifications-v1.md`, "The shape of it"), and ES Platinum is held on the original, "love nwantiti (ah ah ah)", whose cards (15843, 21393) the same deep read matches in sync. It is a `knownDivergence` — the watcher's existing mechanism for a reading the site deliberately does not follow — which now takes two optional fields for a row that locates no site release: `printed` (the register's own title, which it is matched on) and `credit` (which must be the credit of **every** row in the group, so another act's remix of the same title is never swept up with it); `title` stays the site release it counts as, and config validation requires both fields together. As with One Dance and Wait For U, it holds for the exact reading only (`1 × Discos de Platino`): a changed tier — `2 × Discos de Platino`, or the Platino card withdrawn and the Oro left — is a lead again, and so is the same row on another register. The report's "Suppressed" line names it. Proved on the real cards (`certWatchPromusicae.test.ts`), with the original's cards as the negative control: still matched, in sync, and a NEW PLAQUE the moment the site lacks its ES plaque (a labelled edit).
3. **The two step-2 title aliases are confirmed** (Paul, 24 Sep 2026): SNEP `JERUSALEMA` → "Jerusalema (Remix)" and `love nwantiti` → "love nwantiti (ah ah ah)". Their "Paul to confirm" markers are gone; each `why` says "confirmed by Paul 24 Sep 2026" and carries `ruledBy: "Paul"`. Every title alias now names who ruled it, and a test says so.
4. **The five organisational addresses are removed** (ruled by Paul 24 Sep 2026): Grammotex's two, Sverigetopplistan's, IFPI Danmark's and ČNS IFPI's are redacted in every fixture, and the test's allowlist is gone: `certWatchConfig.test.ts` now allows **no** address of any kind anywhere it scans — `scripts/cert-watch`, the fixtures (`.gz` decompressed), `docs/cert-watcher`, the workflow and the `certWatch*` tests themselves — apart from placeholders a test builds at run time from parts, on a reserved domain. The spec no longer quotes any of them. **Copies remain in the already-pushed history at `74795248`, by owner decision**: they are public office addresses, and that commit is not rewritten.
5. **BVMI's named contacts, and phone numbers** (ruled by Paul 24 Sep 2026). The 23 BVMI fixtures printed two staff members' names, job titles and direct lines in the contact block (§11.13); all are blanked. `redactSaved` now also blanks, besides §0.4.4's shapes:
   - a phone number after a label (Tel, Telefon, Telephone, Phone, Fax, Telefax, Tlf, Mobil, Mobile, Handy), in a `tel:` link and that link's text, or in an hCard `tel` element — only where it has at least six digits, so a year, a chart position or Ifpi Sverige's record label "FAX RECORDS/EPIC" is never touched;
   - the person a contact block names (BVMI's `kontakt` block, an hCard `vcard` / `h-card`): the name, job-title and photo-caption fields, inside the block only, from its opening tag to the tag that closes it.

   That also blanks the office numbers in Sverigetopplistan's and ČNS IFPI's footers. Proved on the real BVMI, Sverigetopplistan, Ifpi Sverige, ČNS IFPI and IFPI Danmark pages with placeholders put back (labelled edits): `redactSaved` gives back the committed fixture byte for byte, and each register's parser reads the page as served and the page as saved to the same rows.
6. **Encoding gaps** (the re-review's, found with placeholders on `example.invalid`). `redactSaved` now also redacts an address written wholly or partly in HTML entities (decimal and hex mixed, as WordPress's antispambot writes it), `&commat;` / `&period;`, a JS or JSON escape (`\x40`, `\u0040`), URL-encoding, a full-width or small commercial at (U+FF20, U+FE6B) or dot (U+FF0E), and "(a)"; and Cloudflare's obfuscated address (the hex in a `data-cfemail` attribute or after `/cdn-cgi/l/email-protection#`), which it decodes (XOR with the first byte) to check it is an address before blanking it. Each is proved on a placeholder, and the scan test looks for each shape too, written independently: it decodes entities, escapes and full-width forms before it searches, and counts any Cloudflare or TYPO3 value at all.
7. **The caches hold no personal data.** The conditional-GET cache (ifpi.gr, turntablecharts.com) kept each body as served, and the Actions cache keeps that folder. The kept body is only ever parsed again, on a 304, so it is now kept as `--save-raw` writes it, redacted; the cached robots.txt copy likewise (a comment can name a webmaster; the rules hold no address), and the headers `--save-raw` saves. Proved on the real TCSN and IFPI Greece pages with a placeholder footer (a labelled edit): the kept body holds none of it, and the 304's body parses to exactly what the 200's did (TCSN: the same rows hash and rows; IFPI Greece: the same chart).
8. **Every committed fixture re-redacted.** 126 fixtures changed — Ifpi Sverige 85, BVMI 23, IFPI Danmark 12, ČNS IFPI 6 — each with a PROVENANCE note of what was redacted; `.gz` files recompressed as before (level 9, mtime 0, the member's own file name), and a second pass changes nothing (a test says so). Every one of them parses to the same rows as before: every `parse` function of its adapter gives the same result on the old and the new bytes (948 calls, 1,034 rows), and the offline dry run over the old and the new fixtures gives the same `results.json` apart from timings.
9. **The gap the log reports.** The live `--dry-run --deep` on the folded commit (fresh cache, 18:38 UTC) read 21 of 21 registers cleanly with no lead, but its run details printed a smallest gap of 1,099 ms for sverigetopplistan.se, as §0.4.9's run had for three hosts. The queue did keep 1,100 ms: `http.mjs` read the clock twice after each response — once for the queue's end, once for the log's duration — and when a millisecond passed between the two reads, the log's end was a millisecond late, so the gap it reported was a millisecond short (§0.4.9's early timer only made it visible). Both paths now read the clock once. A test with a clock that ticks between two reads and a sleep that wakes 1 ms early gets 1,099 from the old code and 1,100 from the new.
10. **One commit again.** The work above was committed locally, gate green, and then folded with the §0.4 commit into one replacement merge commit, parents `74795248` and `81ab9c91`, built with `git commit-tree`; the branch was moved to it with `git reset --soft`. No earlier local commit after `74795248` is reachable from any ref. Nothing was pushed.

---

## 1. What already exists, and what to reuse

| Piece | Where | Reuse |
|---|---|---|
| Issue open/update | `.github/workflows/stats-monitor.yml` | The pattern: cron plus `workflow_dispatch`, `contents: read` / `issues: write`, `gh` with `GH_TOKEN`. **Fix two bugs:** `gh issue list` without `--limit` sees only 30 issues, so a tracker past that point gets duplicated; and one comment per run would be spam on a daily schedule. |
| Report shape and badges | `scripts/check-stats.mjs` | Headline form ("**N item(s) need a look.**"), the report written to stdout, `$GITHUB_STEP_SUMMARY` and a gitignored file, and `has_drift`-style outputs. Badges: `🏅 in the register — verify & add`, `⏭️ register unavailable`, `✅ not listed yet`. |
| Run report and annotations | `.github/workflows/stats-refresh.yml:79` | `if: always()`, and the step says so when there is no report. `::notice::` / `::warning::` when an item needs a human. |
| Exit-code contract | `tests/statsPipelineHealth.test.ts` | A bad config means "REFUSING TO CONTINUE" and exit 1. An unreachable source is reported per item, with exit 0. An unknown id exits 1 before any fetch. |
| Pure lib / I/O runner split | `scripts/stats-lib.mjs` vs `check-stats.mjs` | Every parser, matcher and renderer is pure and tested by vitest. Only `index.mjs` and `http.mjs` do I/O. |
| `main()` only when called directly | `scripts/apply-stat-updates.mjs:602` | The same guard, so tests can import `index.mjs`. |
| One in-flight fetch per URL | `apply-stat-updates.mjs:129–130` | `http.mjs` memo cache. |
| Typed fetch results, 900 ms gap, served-is-requested check | `scripts/turntable-walk.mjs` (`getOnce`, `throttle`, `MIN_GAP_MS`) | `http.mjs` returns `{ok:false, kind}` and never an empty value on failure ([[feedback-curl-not-urllib-on-this-mac]]). |
| Word-anchored credit regex and featured-on aliases for all 16 artists | `scripts/live-artists.mjs` (`LIVE_ARTISTS`) | Imported directly: one source of truth for who is who. |
| Existing cert-watch hook | `check-stats.mjs:198–223`, `stats-lib.mjs:831 certWatchStatus`, `watched-metrics.json certWatches[]` | **Not reused; left untouched.** It matches on title alone (`pattern: "Dai Dai"`), hardcodes FIMI's `"Nessuna certificazione"` in a generic helper, and returns `"not-found"` for any non-empty body without the pattern, so **a 200 decoy or challenge page would read as "not listed yet"**. It still sends the old UA `burnaboystats-monitor/1.0`. Its only entry was resolved on 2026-08-17, so it checks nothing. Two ideas carry over: the `resolved` flag and the found / not-found / unavailable split. Retiring it is Paul's call (§11.6). |
| Register know-how | `docs/sourcing/cert-sourcing.js` `BODY_HINTS`, memory notes (Grammotex, RMNZ, ZPAV, RiSA, AFP, TCSN), the 24 Sep re-tests | Encoded as adapter recipes (§3). |

The watcher needs no secret beyond `GITHUB_TOKEN`. It copies neither `stats-live.yml`'s `contents: write` push nor `stats-refresh.yml`'s PR permissions, nor the browser User-Agent the refresh job sends to YouTube.

---

## 2. Architecture

### 2.1 Files

```
scripts/cert-watch/
  index.mjs          runner: CLI, load config + site, run adapters, diff, state, write outputs (the only I/O besides http.mjs)
  http.mjs           fetch wrapper: honest UA, per-host throttle, robots gate, memo, conditional GET, retries, typed results, run deadline, per-run cookie jar (opt-in)
  robots.mjs         pure robots.txt parser (group match for our UA then *, longest-match Allow/Disallow, Crawl-delay)
  site.mjs           pure: buildSiteIndex(certModule, afroModule, liveArtists, config) → holdings + release index
  load-site.mjs      Node-24 loader: module.registerHooks + import() of app/data/*.ts (used by index.mjs only, never by vitest)
  match.mjs          pure: normalise, identify artist(s), fold, locate release, ladders/rank, compare, suppress, fingerprint
  health.mjs         pure (step 3a): per-register verdict — structure, daily control, floor, staleness, served-is-requested
  state.mjs          pure: read/write the hidden state block, ticks, merge, cursors, floors, health streaks, watchlist landing
  report.mjs         pure: issue body, notify comment, run report, GITHUB_OUTPUT values
  config.json        watchlist, divergences, held rows, aliases, typos, namesakes, manual checks, host politeness, adapter switches, stale cadences
  adapters/
    index.mjs        registry of ALL 28 register rows (built, held, manual, not-yet-built), so the report is complete from step 1
    base.mjs         AdapterError, entity decoding, shared helpers
    riaa.mjs         exports two adapters: riaa (standard) and riaa-latin (programme "RIAA Latin")        ✅ step 1
    musiccanada.mjs                                                                                         ✅ step 1
    bpi.mjs  snep.mjs  zpav.mjs  ifpi-sverige.mjs  ifpi-danmark.mjs  nvpi.mjs                               ✅ step 2
    cns-ifpi.mjs     exports two adapters: cns-ifpi-cz (chart 30) and cns-ifpi-sk (chart 43)               ✅ step 2
    ifpi-austria.mjs  mahasz.mjs  ifpi-norge.mjs  promusicae.mjs                                            step 3b
    bvmi.mjs  ifpi-greece.mjs  swisscharts.mjs  rmnz.mjs  amprofon.mjs  tcsn.mjs  promusica-br.mjs          step 3c
    (no risa.mjs, no fimi.mjs: RiSA and FIMI are permanently manual, §0.4.1)
    manual.mjs       BE / AU / PT / CO, plus UK, ZA and IT while held: register URL + one-line human check
tests/certWatch*.test.ts
tests/fixtures/cert-watch/**   (+ PROVENANCE.json)
.github/workflows/cert-watch.yml
```

`.gitignore` has `cert-watch-out/`, `.cert-watch-cache/`, `prev-body.md` and `latest-body.md`. `package.json` has `"check:certs": "node --no-warnings scripts/cert-watch/index.mjs --dry-run"`.

### 2.2 Run flow

1. **Validate `config.json`.** A problem here means REFUSING TO CONTINUE and exit 1. Problems include unknown keys, a missing `why` or `on` on a ruling, an unknown adapter id in `--only`, a watchlist or divergence naming a release that doesn't exist, and a watchlist `until` of an unknown shape.
2. **Load site data** (`load-site.mjs`, or `--site-json` in tests), then `buildSiteIndex`. Failure means REFUSING TO CONTINUE and exit 1.
3. **Read the previous state** from `--prev-body`, the hidden block in the issue body (§6). If that is empty, use `.cert-watch-cache/state.json`. If both are missing or corrupt, start fresh: the state is marked `reset`, and the report says so.
4. **Run adapters.** Each host has its own queue. Up to 6 hosts run at once; within a host, requests are serial with the host's minimum gap. Each adapter returns `{status, rows, total?, newest, notes, cursor}` or a typed failure. An adapter's cursor advances only when its read completes cleanly.
5. **Health verdict per register** (`health.mjs`, §7):
   - the page is the one requested and passes its structural check;
   - the daily control row is present, when there is one;
   - the total is at or above the floor;
   - the newest date is within the register's cadence.

   Only an `ok` or `stale` read's rows become leads in step 6. Any other read that came back is still evaluated, but its would-be candidates are **held back** (§0.4.7, §7): shown as plain text, never leads, never in state.
6. **Identify → fold → locate → compare → suppress → fingerprint** (§4).
7. **Merge with state:**
   - new vs already open vs dismissed (ticked) vs changed;
   - re-check open candidates against today's site, since the site may have caught up;
   - watchlist readings and landings (§5.4);
   - health streaks, floors and staleness.
8. **Render** `issue-body.md`, `comment.md` (only if notify), `report.md` and `results.json`, and write to `$GITHUB_OUTPUT` (§2.6). Print `::warning::` for each automated register not read cleanly and `::notice::` for new leads.
9. **Exit 0.** The exceptions are listed in §7.

### 2.3 Loading the plaque data in Actions

Decision: **Node 24's built-in TypeScript support, plus a resolve hook.** There is no `tsx` and no `npm ci`. This is built (`load-site.mjs`).

`tsx` is in neither `package.json` nor the lockfile, so `npx tsx` downloads whatever version is current on every run. The workflow pins `node-version: 24`.

```js
// load-site.mjs
import { registerHooks } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
const [maj, min] = process.versions.node.split(".").map(Number);
if (maj < 22 || (maj === 22 && min < 18)) throw new ConfigError(`Node ${process.versions.node}: TypeScript loading needs ≥ 22.18 (the workflow pins 24)`);
registerHooks({
  resolve(s, c, n) {
    try { return n(s, c); }
    catch (e) { if (e.code === "ERR_MODULE_NOT_FOUND" && /^\.\.?\//.test(s)) return n(s + ".ts", c); throw e; }
  },
});
export async function loadSite(repo) {
  const certs = await import(pathToFileURL(path.join(repo, "app/data/certifications.ts")).href);
  const afro  = await import(pathToFileURL(path.join(repo, "app/data/afrobeats.ts")).href);
  return { certs, afro };
}
```

The retry with `.ts` is needed because `afrobeats.ts` imports `./certifications`, `./charts` and `../lib/awardName` without extensions. `--no-warnings` silences `MODULE_TYPELESS_PACKAGE_JSON`.

`--self-test` prints its counts, **computed from the modules and not typed**, and exits 0. Every workflow run does this first. On 24 Sep, on Node 24.16, it printed:

- 4 albums, 65 singles, 24 features, 248 plaques;
- 15 artists, 664 releases, 990 plaques;
- 1,238 indexed, 78 lead aliases, 28 registers (23 automated; 21 after step 3a's reclassification).

**Vitest never loads `load-site.mjs`.** CI's `ci.yml` runs on Node 20, which cannot strip types. Tests import the TS modules through vitest, then call `buildSiteIndex` or pass a JSON dump through `--site-json`.

### 2.4 HTTP layer (`http.mjs`)

- **Headers.** Always `User-Agent: burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)` and `Accept-Encoding: gzip, br`. An adapter may add only the headers the register's own page sends for its XHR, from an allowed list that `http.mjs` enforces:
  - `Referer` for RIAA admin-ajax, olis.pl, RadioScope, RiSA's admin-ajax and FIMI;
  - `X-Requested-With: XMLHttpRequest` for RIAA load-more, olis.pl and RadioScope;
  - `Content-Type: application/json` for olis.pl;
  - `HX-Request: true` for BPI, only if Paul ever enables it;
  - `Accept-Language: es-MX` for AMPROFON, `pt-BR` for Pro-Música Brasil and `es-ES` for PROMUSICAE (§0.2);
  - `Accept: application/json` for RadioScope's SSP call;
  - `If-None-Match` / `If-Modified-Since`, set by the conditional-GET layer;
  - `Cookie`, set only by the per-run jar for a host that opts in.

  Never a browser User-Agent.
- **Politeness.** At least **1,100 ms** between requests to the same host (a margin over 1 req/s). `config.hosts` overrides this from each host's robots.txt `Crawl-delay`: musiccanada.com waits 30 s and swisscharts.com 10 s.
- **Robots gate.** Fetch `/robots.txt` once per host per run. Cache it for 24 h in `.cert-watch-cache/robots/`, and fall back to a copy up to 7 days old if a refresh fails. Then:

  | robots.txt response | Treatment |
  |---|---|
  | 404 or other 4xx | allow everything |
  | 5xx or network failure, no cached copy | host counts as `unreachable (robots.txt unreadable)` |
  | path disallowed for our UA or `*` | adapter status `held-robots`; nothing is fetched |

  The saved robots files hold real rules:
  - BPI: `User-agent: *` / `Disallow: /`
  - Dropbox: `/sh/`, `/scl/` and `/s/` disallowed (ARIA's link 302s from `/sh/` to `/scl/fo/…`)
  - audiogest.pt: `/uploads` disallowed
  - SNEP and MAHASZ: only `ClaudeBot` is blocked, so our User-Agent passes
  - RiSA: 50 named AI agents (ClaudeBot and Claude-User among them) get `Disallow: /`; `*` gets `Allow: /` plus `DisallowAITraining: /` and `Content-Usage: ai=n`
- **Typed result.** A request returns `{ok:true, status, headers, body, url, fromCache}` or `{ok:false, kind, status?, detail}`, where `kind` is one of:
  - `network`, `timeout`, `http`;
  - `challenge`: any of
    - a 403 or 503 carrying `cf-mitigated: challenge`;
    - "Just a moment";
    - "Checking your browser" (Hostinger, `server: hcdn`);
    - a Cloudflare challenge form **without** the adapter's success marker;
    - **a decoy**: a `<title>` that starts with `ai/`, which is RiSA's tarpit and is served with HTTP 200;
  - `robots`, `budget`.

  Adapters check their own success marker **before** looking for challenge markers. RIAA pages always contain a `challenge-platform` script even when they work (the `US_RIAA_Latin_site` re-test body has both the script and the Dai Dai row), so RIAA tests for `table_award_row`.
- **Retries.** Two, on `network`, `timeout`, 5xx and 429. Back off 5 s × attempt, and honour `Retry-After` up to 60 s. **Never retry** a challenge, a 403 or a robots refusal, and never change headers to get round one.
- **Memo.** One in-flight promise per `(method, url, body)` per run.
- **Conditional GET.** Store validators (`ETag` / `Last-Modified`) in `.cert-watch-cache/validators.json` for hosts that send them: ifpi.gr (Last-Modified) and turntablecharts.com (ETag, `s-maxage=1800`). A 304 reuses the cached body, if the adapter opted in to caching it. AMPROFON sends neither validator, so it is a full GET every day (265 KB gzip).
- **Cookie jar (opt-in, per run).** For a host listed in `config.hosts[host].cookies: "run"`, `Set-Cookie` values from one response are sent back on later requests to that host **in the same run only**. The jar is never persisted, and saved headers in fixtures have `set-cookie` removed. RadioScope opts in only if step 3c's fixture test shows the SSP token fails without it.
- **Deadline.** The run budget is 540 s from start. Each adapter has a soft budget: 90 s by default; 150 s for musiccanada and zpav, 180 s for bvmi and 240 s for ifpi-sverige. An adapter that has not started when the deadline passes reports `not-reached`.
- **Timeouts.** 30 s per request; 90 s for AMPROFON's page and the TCSN HTML.
- **Request log.** For each host, the run details record the first response's status, `server` header, whether `cf-ray` was present, and whether the adapter's marker was found. This is how the first Actions run shows datacenter-IP treatment host by host.

### 2.5 Adapter contract

```js
export default {
  id: "riaa-latin", country: "US", body: "RIAA", programme: "RIAA Latin",   // programme null = standard
  class: "AUTOMATE",                                    // AUTOMATE | WITH-CARE | MANUAL
  step: 1,                                              // build step that delivers it
  hosts: ["www.riaa.com"],
  registerUrl: "https://www.riaa.com/gold-platinum/?tab_active=platinum-latin",  // what a human opens
  ladder: "riaa",                                       // see §4.4
  dateKind: "award",                                    // award | publication | chart-week | year
  humanCheck: "Open the RIAA Gold & Platinum page, Latin tab, search the title; read the badge.",
  async read(ctx) { /* uses ctx.http, ctx.cursor, ctx.deep, ctx.searchTerms; returns {rows, total?, newest, notes, cursor} or throws AdapterError */ },
  parse: { /* pure functions over raw bodies — what the fixture tests call */ },
  minRows: 1,                                           // fewer parsed rows than this on a 200 = changed format
  control: { when: "daily", rowId: "default_451299", find: (r) => r.rowId === "default_451299" },  // "daily" | "deep" | "tests"
  total: "register",                                    // what `total` counts: "register" | "year" | "page" | null (no floor)
};
```

`control.when` replaces step 1–2's boolean `control.deep`: `deep: true` becomes `"deep"`, and `deep: false` becomes `"tests"`. Tests **always** check the control against the fixture. Live runs check it daily or on deep runs, as set.

A **row**:

```
{ credit, title, format: "single"|"album"|"unknown", formatRaw,
  tierRaw, reading: {tier, x, floor?, level?} | null,
  dateRaw, rowId?, url, raw (verbatim, ≤ 300 chars), extra: {isrc?, certNo?, week?, ownerTag?, featured?} }
```

All of `credit`, `title`, `formatRaw`, `tierRaw`, `dateRaw` and `raw` are **exactly as the register printed them**. HTML entities are decoded (RiSA prints `Dave &amp; Burna Boy`), and nothing else is changed.

`AdapterError.kind` is one of `unreachable`, `challenge`, `format`, `mismatch` (the page served is not the page requested), `robots` or `budget`.

### 2.6 CLI and outputs

```
node --no-warnings scripts/cert-watch/index.mjs [flags]
  --dry-run            read live, print report.md to stdout, write cert-watch-out/, set write_issue=false (never touches an issue)
  --offline            no network: adapters read tests/fixtures/cert-watch/<adapter>/ (fixture map in each adapter)
  --only=a,b           run these adapters only (validated against the registry: ^[a-z0-9-]+(,[a-z0-9-]+)*$)
  --deep               weekly deep reads (the workflow passes it on Mondays UTC)
  --prev-body FILE     previous issue body (state + ticks)
  --render-only        no reads: re-render from --results with ticks from --prev-body
  --results FILE       results.json from a previous invocation (with --render-only)
  --site-json FILE     use a pre-built site index (tests on Node 20)
  --dump-site-index F  write the site index and exit (used once to freeze tests/fixtures/cert-watch/site-index.2026-09-24.json)
  --save-raw DIR       also write every raw response body + headers (minus set-cookie) to DIR (how new fixtures are captured — real responses only)
  --cache DIR          on-disk cache (robots, validators, heavy bodies, matched-row snapshots, state backup); default .cert-watch-cache
  --out DIR            default cert-watch-out
  --self-test          load site data, print derived counts, exit
```

**Outputs in `--out`:**

- `issue-body.md`, which includes the hidden state block;
- `comment.md`, written only when notify is true;
- `report.md`, the issue body without the state block plus run details, for the step summary and stdout;
- `results.json`, holding the candidates, health, watchlist, next state and the notify reasons.

**`$GITHUB_OUTPUT`:**

| Output | Value |
|---|---|
| `write_issue` | true unless `--dry-run` |
| `notify` | true when there is something to notify (§6.4) |
| `open` | open candidates |
| `new` | new since the last run |
| `not_read` | automated registers not read cleanly |
| `stale` | automated registers read but stale |
| `has_drift` | alias of `notify`, kept for parity with the stats monitor |

**Matched-row snapshots.** Every row that names one of the 16, not only candidates, is written to `.cert-watch-cache/snapshots/<adapter>/<date>.json.gz` and kept for 14 days. They are evidence only: they preserve a SNEP row from before SNEP overwrote it on an upgrade. They are never used to infer removal.

**Local dry runs.** Paul's Mac is on Node 24.16.

```
node --no-warnings scripts/cert-watch/index.mjs --dry-run                       # everything live, no issue
node --no-warnings scripts/cert-watch/index.mjs --dry-run --only=riaa-latin     # one register
node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run             # fixtures only, no network
node --no-warnings scripts/cert-watch/index.mjs --dry-run --prev-body body.md   # see what dedupe would suppress
```

---

## 3. Adapters: recipe and classification

The 24 Sep re-tests ran each endpoint from Paul's home connection, once with a browser User-Agent and once with the site's. The site's User-Agent worked everywhere it was tested, and on risa.org.za *only* it worked. Node `fetch` with the site User-Agent also got 200 plus the content marker from all ten Cloudflare- or WAF-fronted hosts. **How GitHub's datacenter addresses will be treated is a prediction, not a test** (§3.4).

The classes are the 24 Sep afternoon re-test's, with three overrides by this spec:

- a robots.txt disallow makes a body MANUAL (BPI, ARIA, AFP);
- an owner ruling makes it MANUAL for good (FIMI, RiSA: both ask not to be read by AI tools, §0.4.1);
- a standing bot challenge makes it MANUAL (Ultratop, Colombia).

**21 automated (10 AUTOMATE + 11 WITH-CARE), 7 manual.** The headline's "automated" count is derived from the registry, never typed.

| # | Adapter id | Country · body / programme | Class | Step | Daily read (requests) | Deep read (Mondays) | Tier semantics | Award date |
|---|---|---|---|---|---|---|---|---|
| 1 | `riaa` | 🇺🇸 RIAA (standard) | AUTOMATE | ✅ 1 | Newest list `?tab_active=default-award&col=certification_date&ord=desc` (30 rows), then load-more back to the cursor minus 3 days (cap 20); award history for each matched row (cap 20) | Artist search `se=` for each search term, plus load-more | badge `DI/ST level N`: 0 = Gold, N = N× Platinum; title reads Diamond at ≥ 10 but **the level keeps the count** | certification date |
| 2 | `riaa-latin` | 🇺🇸 RIAA · **RIAA Latin** | AUTOMATE | ✅ 1 | Latin tab artist search for the 16 terms (16) | Newest list on the Latin tab (`tab_active=platinum-latin`, 30 `LA` rows, newest first, checked 24 Sep) | badge `LA level N`, Oro / Platino / Diamante | certification date |
| 3 | `musiccanada` | 🇨🇦 Music Canada | AUTOMATE | ✅ 1 | wp-json awards, newest id first, 100 per page, down to the last id seen (normally 1; max 3, 30 s apart) | none needed (id cursor) | `class_list` `award_cert-<word>-<format>`; **each step is its own id** | post date (publication) |
| 4 | `bpi` | 🇬🇧 BPI | MANUAL (robots) | ✅ 2 | **Not fetched.** Parser built and tested; live fetch off, because robots.txt says `Disallow: /` | — | `Silver`…`Nx Platinum`; "Most Recent Certification" | certification date |
| 5 | `snep` | 🇫🇷 SNEP | AUTOMATE | ✅ 2 | `/les-certifications/` page 1, plus `/page/2/` while the newest date ≥ cursor (1–2) | `?interprete=` for each term | Or, Platine, Double/Triple Platine, Diamant; **overwrites the old row on upgrade** | date de constat |
| 6 | `zpav` | 🇵🇱 ZPAV (olis.pl) | AUTOMATE | ✅ 2 | POST `/api/search` with `category_id:3`, subcategory 6, 7 and 8, `limit:100`, newest first (3) | Same with `search_in:"contractor"` for each term (≤ 48) | subcategory 6/7/8 = Złota/Platynowa/Diamentowa; **step = the filled `date_N` index**, never a row count | the `date_N` value |
| 7 | `ifpi-sverige` | 🇸🇪 Ifpi Sverige | WITH-CARE | ✅ 2 | Sverigetopplistan `search/?query=` for each term and a seventh of the lead acts (≈ 27), then a record page for each `data-sart` whose badge changed (≤ 15) | Every lead act; a record page for every matched sart (≤ 60) | Record page: `Guld/Platina: <tier> - cert.nr N - YYYY-MM-DD` (**latin-1**); the badge (`SWE,Platina x7`) is only a pointer | cert date |
| 8 | `ifpi-danmark` | 🇩🇰 IFPI Danmark | WITH-CARE | ✅ 2 | `http://ifpi.dk/certificeringer-0?page=0..2`: default order, date-descending, default again; stop after a round that adds nothing (≤ 9) | none (§3.2) | Guld, Platin, `NxPlatin`; **credit cut at about 40 characters with "..."** | dd.mm.yyyy |
| 9 | `nvpi` | 🇳🇱 NVPI | AUTOMATE | ✅ 2 | `/api/filter?skip=0&take=500` (1) | same | `status` Goud/Platina/Diamant/Zilver (any case), `amount` = multiple; **each step its own uid** | d-m-yyyy (lags about 2 months) |
| 10 | `cns-ifpi-cz` | 🇨🇿 ČNS IFPI (chart 30) | WITH-CARE | ✅ 2 | `/hitparada/30` (1) | previous week via `?weekId=` (1) | badge `Zlatý singl` / `Platinový singl`; no multiples, no albums, only titles released 2022 or later, only while charting | chart week |
| 11 | `cns-ifpi-sk` | 🇸🇰 ČNS IFPI (chart 43) | WITH-CARE | ✅ 2 | `/hitparada/43` (1) | previous week (1) | same | chart week |
| 12 | `ifpi-austria` | 🇦🇹 IFPI Austria | AUTOMATE | 3b | `/auszeichnungen/?fwp_per_page=100`: **always send `fwp_per_page`**, because the default page is a stale cache (1) | `fwp_per_page=7000` (the full 1.5 MB read, 1) | GOLD, PLATIN, `N-fach PLATIN` | dd.mm.yyyy (order is newest-added, not by date) |
| 13 | `mahasz` | 🇭🇺 MAHASZ | AUTOMATE | 3b | `/arany-es-platinalemezek/adatbazis/YYYY` (1); in January, also the previous year | POST `/kereso` with `eloado=` for each term | icon `fa-circle` = Arany (Gold); `fa-play` plus `arany_platina_db` N = Platina ×N | year only |
| 14 | `ifpi-norge` | 🇳🇴 IFPI Norge | AUTOMATE | 3b | `/trofe/trofeoversikt/?pg=1` (100 rows, newest first) (1) | `?aar=YYYY` | Trophy image `Trofe_GULL_…` / `Trofe_PLATINA_…`; **Nivå is free text** ("1X", "x1", "X2", blank, "Gull"), so take the digits; an image that matches neither leaves the row unparsed | dd.mm.yyyy |
| 15 | `promusicae` | 🇪🇸 PROMUSICAE | AUTOMATE | 3b | `awards/index?AwardsSearch[year]=Y&AwardsSearch[week]=W` for this ISO week and last, 10 rows a page (≈ 4–6; week 38 had 19 awards, week 37 had 27) | `AwardsSearch[artist]=<exact dropdown string>` for each term | "Discos de Oro" / "Discos de Platino", with the multiple as `N ×` | week |
| 16 | `bvmi` | 🇩🇪 BVMI | WITH-CARE | 3c | Current-year walk `?action=suche&strJahr=YYYY&intseite=N`, 20 rows a page, **alphabetical by artist**, about 40 pages (784 rows in 2026); stop when a page repeats the previous one or has fewer than 20 rows; cap 60. In January, the previous year too | none (**no name search**: `strInterpret` returned empty in every variant on 24 Sep) | `1x Gold`, `3x Gold` (a Gold multiple, not Platinum), `2x Platin`, `1x Diamond` | year only |
| 17 | `ifpi-greece` | 🇬🇷 IFPI Greece | WITH-CARE | 3c | `digital_ien.html` and `digital_en.html`, conditional on Last-Modified (2) | — | Award column G / P / 2P / 3P / D; key on ISRC; only titles charting that week | chart week |
| 18 | `swisscharts` | 🇨🇭 IFPI Schweiz, via swisscharts.com | WITH-CARE | 3c | `swisscharts.com/edelmetall/YYYY`, decoded as **ISO-8859-1**, identity `Gewinner YYYY` (1, crawl-delay 10). **Never hitparade.ch**, which serves a 403 challenge | — | `div.award_item`: `<b>Artist</b><br>Title`, Kategorie, Jahr, Label, `Edelmetall:` tier; multiple from the image name, `award_platin_1.svg`; the page says "keine abschliessende Liste" (not a complete list) | year |
| 19 | `rmnz` | 🇳🇿 RMNZ via RadioScope | WITH-CARE | 3c | Singles page (scrape the per-pageload `DT_TP['2052']` ajax URL/token), then the SSP call `order[0][column]=4&order[0][dir]=desc&length=100` (2); albums table 2051 the same way (2) | `search[value]=` for the control title, and `length=500` | `Gold`, `Plat xN` (plain Platinum is `Plat x1`); **rows are cumulative, so the latest row for a credit and title is the current tier** | date certified |
| 20 | `amprofon` | 🇲🇽 AMPROFON | WITH-CARE | 3c | GET `certificaciones.php` with `Accept-Language: es-MX` (1; 4.56 MB raw, 265 KB gzip; no validators) | — | one table `#filtertable`, 8,681 rows keyed by `idenCertificacion`; CERTIFICACIÓN `PLATINO & ORO` with NIVEL `3 & 1`: **the first number goes with the first tier** | ÚLTIMA CERTIFICACIÓN |
| 21 | `tcsn` | 🇳🇬 TurnTable (TCSN) | WITH-CARE | 3c | GET `https://turntablecharts.com/certification` with the ETag; parse `__NEXT_DATA__` (1; 10 MB raw, 535 KB gzip). **Hash the rows; the build id is only printed** | Wayback CDX for new captures of `turntablecharts.com/certification` (a lead only) | `milestone` `Gold_1`, `Platinum_N` (Silver would be `Silver_1`); the live list caps at **500 rows** and shows no Silver | `certifiedDate` |
| 22 | `promusica-br` | 🇧🇷 Pro-Música Brasil | WITH-CARE | 3c | GET `/home-2/certificados/?busca_artista=<term>` with `Accept-Language: pt-BR` for each term (≈ 16) | by year for the current year | card `pmblc-img-classificacao` alt text (tier); `pmblc-ano` year | year |
| 23 | `risa` | 🇿🇦 RiSA | MANUAL, permanently (owner ruling, §0.4.1) | — | *Never built.* The recipe was: the certifications page (table id + public nonce), then the Ninja Tables JSON (2) | — | award image `certified-streaming-awards-{gold,platinum,dbl-plat,multi-plat}.png`; **Multi-Platinum = at least 3×, with no multiple** | `date` (YYYY-MM-DD) |
| 24 | `fimi` | 🇮🇹 FIMI | MANUAL, permanently (owner ruling, §0.4.1) | — | *Never built.* The recipe was: POST `/ajax/filter-certificazioni.php` with `formato=1` and `formato=2`, `year=Y`, `numweek=0` (2) | previous year | Oro / Platino / N× Platino / Diamante, from both cert columns; `Nessuna certificazione` means an **explicit empty** here, and only here | week/year |
| 25 | — | 🇨🇴 Pro Música Colombia | MANUAL (challenge) | — | Hostinger's "Checking your browser" 403 on the page, `wp-json` media and the PDF, for both User-Agents (11:19 UTC 24 Sep; the PDF HEAD was 200 at 06:54 UTC) | | register PDF frozen since 21/02/2025 | |
| 26 | — | 🇧🇪 Ultratop (BRMA) | MANUAL | — | Cloudflare 403 "Just a moment…" on every request; Wayback captures after April 2026 are 403s or empty | | | |
| 27 | — | 🇦🇺 ARIA | MANUAL (robots) | — | The accreditations page is fine, but the list is a Dropbox zip (69 PDFs, 15.8 MB; newest list covers to 31 Aug) behind `/sh/` → `/scl/`, which robots.txt disallows | | | |
| 28 | — | 🇵🇹 AFP (Audiogest) | MANUAL (robots) | — | The weekly index page is fine, but the weekly and annual PDFs sit under `/uploads`, which robots.txt disallows; monthly award cards are on social media | | | |

Rows 23–28 and `bpi` render as human checks (§5.2). The registry lists all 28 from step 1. An adapter not yet built shows `🧱 not built yet (step N)` together with its human check, so nothing is silently missing between steps.

**Search terms**, for query-based adapters: `LIVE_ARTISTS[*].name` plus the `config.searchTerms` extras: "Wiz Kid", "Buju" (BNXN's former name) and "Burna".

**Lead acts**, for adapters that search by artist and index featured credits poorly:

- the distinct `artist` values in `LIVE_ARTISTS[*].aliases`;
- the lead in each Burna `features[].credit` (e.g. "Dave ft. Burna Boy" gives "Dave");
- `config.leadAliases`.

Queries fold diacritics: Sverigetopplistan finds "Beyonce" but not "Beyoncé".

**A search that returns nothing is evidence about the query, not the register** ([[feedback-search-case-insensitive]]). BVMI's name search returning empty is why that read was dropped. It is never taken as "not certified".

### 3.1 Step 1 notes (built)

- **RIAA.**
  - A row is `tr.table_award_row` with `id="default_<awardId>"`; Latin rows also use the `default_` prefix.
  - The badge is `img alt="badge <DI|ST|LA> level N"` with `title` "Gold" / "4X Platinum" / "1X Diamond". Cells: artist, title, label, format, date.
  - Load-more is `POST /wp-admin/admin-ajax.php?<window.queryParams>` with body `action=load_more_search_default&page=N`, `X-Requested-With` and `Referer: https://www.riaa.com/gold-platinum/`. It returns `{data, has_more, next_page, total_pages, total}`: 1,006 pages and `"30179"` awards on 24 Sep.
  - Award history is `action=load_detail_from_recent_timeline&id=<awardId>`. The 24 Sep read of 451299 was `DAI DAI` / `SHAKIRA & BURNA BOY` / `SONY LATIN` / `SINGLE` / `2X PLATINO`.
  - **The artist cell names the lead only.** Featured artists appear in the title: `DRAKE | ONE DANCE (FEAT. WIZKID & KYLA)` and `FUTURE | WAIT FOR U (FEAT. DRAKE & TEMS)`. See §4.2.
  - Search results drop older duplicate rows of a title, so the current tier comes from award history when a matched row is a candidate.
  - **The programme comes from the badge on each row, never from the tab.** A standard-tab search for "burna" also returns the Latin Dai Dai row.
  - Positive controls: `SHAKIRA & BURNA BOY | DAI DAI | badge LA level 2 | 2X Platino`, award 451299 (Latin); `default_424119 badge DI level 11`, One Dance (standard).
  - "TYLA YAWEH" is a namesake of Tyla (found by the first live dry run).
- **Music Canada.**
  - GET `https://musiccanada.com/wp-json/wp/v2/award?per_page=100&orderby=id&order=desc&_fields=id,date,title,content,class_list,link`. `title.rendered` is the credit; `content.rendered` (strip `<p>`) is the title.
  - `X-WP-Total` gives the register total (31,858 on 24 Sep). That total is the floor source.
  - **Never** use `?_gp_search`, which is fuzzy and caps at 200. **Never** request ACF fields, which hold label contact names (personal data).
  - Tier words (built): `gold`, `platinum`, `double-platinum`, `triple-platinum`, `<n>-times-platinum` (e.g. `seven-times-platinum`, as served 22 Sep), `diamond`. Any other word leaves the row unparsed. The 24 Sep re-test also lists `double-diamond` in Music Canada's class vocabulary. Step 3a adds it as Diamond ×2; until then a matched row with it shows as UNREADABLE TIER.
  - Positive control: id 89702, `Shakira, Burna Boy` / `<p>Dai Dai</p>` / `award_cert-double-platinum-single`.

### 3.2 Step 2 notes (built)

- **BPI.** `parse.list` (list view, `?certified_date_from=`, `HX-Request: true`) and `parse.detail` ("Most Recent Certification", "Certification history") are built and tested on the saved pages. `read()` asks `ctx.robotsCheck` before any request, so with today's robots.txt it returns `held-robots` without a request. Enabling it takes `adapters.bpi.permission {from, on, scope}` in config (validated), never a code change. Even then, the robots gate holds it while robots.txt says Disallow.
- **SNEP.** Parse `div.certification`: categorie, titre, artiste, éditeur, certif, sortie, constat.
  - An upgrade **replaces** the earlier row and can change its credit. A row that disappears was superseded, never revoked.
  - The CSV export is partial; do not use it.
  - Positive control: `DAI DAI | SHAKIRA & BURNA BOY | Diamant | 27/08/2026`.
- **ZPAV.**
  - Headers: `Content-Type: application/json`, `X-Requested-With: XMLHttpRequest`, `Referer: https://www.olis.pl/charts/oficjalna-lista-wyroznien/zlote-plyty`. Without the last two, Cloudflare answers 302 to **both** User-Agents; the real 143-byte response is saved as a fixture. With them, the honest User-Agent gets 200 JSON.
  - The minimal body `{"category_id":3,"subcategory_id":N,"limit":100}` returns the newest 100. The artist search adds `search_in: "contractor"` and `keyword`.
  - Each row carries `date_1`…`date_7`, and **the filled index is the multiple**. One Dance is a single Platinum row with `date_3`, which means 3× Platinum. Every one of the 900 saved rows has exactly one `date_N` filled and its own subcategory. A row that breaks this is unparsed, and a served subcategory that differs from the requested one is `mismatch`.
  - Positive control: Dai Dai, subcategory 6, `date_1: 2026-08-26`. The newest batch on 24 Sep was dated 2026-09-23 and had no rows for the 16.
- **Ifpi Sverige.**
  - The register is Ifpi Sverige's record page, `https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=<id>`, which Ifpi Sverige links from its Guld och Platina page. It is served in **ISO-8859-1**, so decode it as latin1.
  - Grammotex (the GLF copy) is **not** used.
  - Titles that never charted have no Sverigetopplistan id. That is a coverage gap, listed in §5.2.
  - Lead acts (53 on 24 Sep) rotate: a seventh a day, all of them on deep runs. Records open only for matched items whose badge changed since the cursor. A quiet day reads no record and is still a clean read (`minRows: 0`). The list id gives the format (41 is singles, 54 albums).
  - Positive controls: Dai Dai sart 15311162, `Guld/Platina: Platina - cert.nr 11317 - 2026-09-18`; Tyla "WATER" sart 12096186, `Platina - cert.nr 11312 - 2026-09-18`.
- **IFPI Danmark.**
  - Over **http only**: https fails the certificate name check (curl rc 60, re-confirmed 24 Sep).
  - The pager prints tied rows at a page boundary on both pages. Pages 0–2 gave 150 rows but only 140 distinct, twice over. The explicit date-descending order (`?order=field_certdato&sort=desc&page=N`) breaks the ties differently: 134 distinct, 12 of them new, 152 together. So there are three rounds: default order, date-descending, default again (via `request({repeat})`). The read stops after a round that adds nothing; that is 9 requests. The notes say how many rows printed twice.
  - Real truncation: `Major Lazer Feat. Moti Ty Dolla $ign...	Boom	Warner Music	Track	Platin` (01.08.2017).
  - **No deep read.** A full union of all 7 sort orders (13,508 rows) would break the 10-minute budget, and new awards appear at the top by date.
- **NVPI.** `{count, items[]}`, newest-created first. `metadata.artists[]` lists Spotify credits, including features. It is read as `extra.featured` beside the verbatim credit (`match.mjs` adds it to the credit field), so `DAVE | Location` matches Burna Boy without rewriting the credit. Superseded Goud rows stay in the register. On 24 Sep `count` was 6,493 and the newest award was dated 16-7-2026.
- **ČNS IFPI.** Parse `div.chart-full-row`. The badge is the `<strong>` inside `chart-full-row__details`, and the credit reads `ARTIST - LABEL`. Check that the page's week id is the one requested (week 38/2026 is `weekId 3036`). **A missing badge is not evidence of no award.**
- **Title aliases found by the step-2 live run**, confirmed by Paul on 24 Sep 2026 (§11.10, §0.5.3): SNEP's `JERUSALEMA` (the remix, the only version crediting Burna Boy) and `love nwantiti` (CKay's title without "(ah ah ah)"). Aliases apply when the index is hydrated as well as when it is built, so they reach a `--site-json` index dumped before them.
- **Offline replay** matches a re-read URL by `request.nth`. `--save-raw` keeps the bytes as served, so the Swedish records stay latin-1.

The step-2 live dry run took 1 m 48 s and 168 requests, and all seven registers read cleanly.

### 3.3 Step 3 notes

These come from the 24 Sep afternoon re-test (`$RECIPES`), the sweep scripts and the memory notes. **Verify each against its fixture before relying on it.**

- **IFPI Austria.**
  - Identity: the served `per_page` equals 100. The default URL serves `per_page 4` and `total_rows 5982` from a stale cache; that is `mismatch`, and the saved default page is the negative control.
  - `total_rows` is the floor source (5,994 on 24 Sep).
  - Rows: Interpret / Titel / Format / Status / Firma / Datum.
  - Positive control: `Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026`.
- **MAHASZ.** The 2026 page had 269 rows. The year's row count is the floor, and it resets when the URL's year changes. Pick the control from the fixture: a 2026 row for one of the 16.
- **IFPI Norge.** Newest trophy 25/08/2026. Page 1 is slow (2–4 s). Allow for that in the budget, but never shorten the gap.
- **PROMUSICAE.** The week filter works (week 38: 19 awards, week 37: 27). Across a year boundary, "last week" is the previous ISO year's last week. The deep read's artist dropdown needs the register's exact string, taken from the dropdown and never typed.
- **BVMI.**
  - Asking for a page past the end returns the last page again, so stop when a page repeats (the `mismatch` check doubles as the stop rule).
  - Do not trust the pager's `value="N" name="submit"`. It is a window of page numbers, not the total.
  - The year's row count is the floor.
  - Positive control, daily while it is in the year being read: `Shakira & Burna Boy | Dai Dai | 2026 | Single | 1x Gold`. Also check `Dave feat. Burna Boy | Location | 2026 | Single | 1x Gold`.
  - Because the list is alphabetical, a new award can appear on any page. The whole year is read every day, and the diff is against the site, not against yesterday's page positions.
- **IFPI Greece.** Week 37, file Last-Modified Wed 23 Sep 05:48 GMT. A 304 means "unchanged since the last read". That is a clean read with no new rows, and it counts toward staleness by the file date. Positive control: `Tems, Dave | Raindance (feat. Tems) | GBUM72506029 | 2P` (tests only; it is chart-bound).
- **swisscharts.com.** Decode as ISO-8859-1. Identity is `Gewinner <YYYY>` on the page. The 2026 page had 29 cards, and the card count is the floor, which resets with the year.
- **RMNZ.**
  - Build the DataTables SSP query with `URLSearchParams`; hand-built strings break on `[` `]`.
  - The ajax URL and its token come from the page's `DT_TP['2052']` block on each page load.
  - The server is `BitNinja-WafPro`: a block means `challenge`, and the adapter stops.
  - `recordsTotal` is the floor (24,435 on 24 Sep; newest `Toto | Africa | Plat x11 | 2026-09-17`).
  - The cumulative rows for Raindance are the test: Gold 2026-02-05, Plat x1 2026-03-19, Plat x2 2026-08-27.
  - The re-test script carried the page's cookies to the SSP call. The fixture test decides whether the token alone is enough; only if it is not does the host opt in to the per-run jar.
- **AMPROFON.**
  - It is on Hostinger's CDN (`server: hcdn`), which served "Checking your browser" on 6 Sep and a clean page on 24 Sep. A challenge is `challenge`, and the adapter stops.
  - The table's row count is the floor (8,681).
  - Positive control (daily; the read is the whole table): `idenCertificacion` 5987, `TYLA | WATER | ORO | 1`.
- **TCSN.**
  - Parse `<script id="__NEXT_DATA__">`, then `props.pageProps` … the certification entries (`certEntries`).
  - The floor is 500, which is the cap. A read with fewer rows is `shrank`.
  - The change detector is `sha256` of the normalised rows. The build id (`9FLVyEQ3OX_KP6OGJD8nk` at 11:2x UTC 24 Sep) is printed and never compared.
  - A title's trailing parenthesis can be an **owner tag**: `Reason (Omah Lay)` vs Asake's `Reason` (§4.2).
  - The live cards read "Claim plaque" (`isClaimed:false`) under "Eligible Songs". The report carries TCSN's standing caveat on every NG line.
  - The register is request-based and paid, and Silver is a real tier (see the `NG` comment in `certifications.ts`).
- **Pro-Música Brasil.** 1.6–3.4 s per search. At 16 searches that is about 45 s including gaps.
- **RiSA** — **permanently manual** (owner ruling, 24 Sep 2026, §0.4.1): never built. The recipe, for the record only:
  1. GET `https://risa.org.za/certification-levels/certifications/` with the honest User-Agent.
     - Identity: `<title>Certifications - RiSA`, plus a `data-footable_id="<id>"` Ninja table.
     - **Read the table id and the `ninja_table_public_nonce` from the page every run.** The id was 15219 in the memory note and is 15622 now; the nonce was `4678edb3cc`.
  2. GET `https://risa.org.za/wp-admin/admin-ajax.php?action=wp_ajax_ninja_tables_public_action&table_id=<id>&target_action=get-all-data&default_sorting=old_first&skip_rows=0&limit_rows=0&ninja_table_public_nonce=<nonce>`, with the page as Referer.
     - It returns a JSON array of `{options:{classes}, value:{award, artist, title, label, format, date, ___id___}}`: 766 rows, 250 KB, newest `date` 2026-09-03.
     - Award images: gold 385, platinum 207, multi-plat 88, dbl-plat 78, and 8 with no image (unparsed). `format` needs trimming (`"\t\nSingle"`, `"Single "`); `date` can be empty.
  - Floor: the row count.
  - Positive controls (daily): id 14362 `Dave &amp; Burna Boy | Location | dbl-plat | 2026-05-26`; id 14365 `Dave &amp; Tems | Raindance | platinum | 2026-05-29`. Both are already on the site.
  - The browser-UA page (1,099 B, `<title>ai/certification-levels/certifications/`) and the browser-UA JSON (1,311 B, `<title>ai/wp-admin/admin-ajax.php…`) are the decoy fixtures.
- **FIMI** — **permanently manual** (owner ruling, 24 Sep 2026, §0.4.1): never built, so `Nessuna certificazione` stays out of the watcher altogether. The site footer forbids crawling "ai fini dell'addestramento AI" (for AI training). The 24 Sep re-test did not touch FIMI, so the fixtures come from the 23 Sep sweep.
- **Pro Música Colombia** (manual). The change-watch recipe is kept here in case Paul wants it back once a browser check shows the challenge gone: HEAD the register PDF (Last-Modified `Wed, 05 Mar 2025 23:28:13 GMT`) and GET `/certificaciones-2/` to see whether a new PDF is linked. Never `wp-json`.

### 3.4 Health checks per register

The table below uses these terms:

- **Identity.** The page is the one requested. A failure here is `mismatch`.
- **Success.** The page has rows, or the register's own words for none. A failure here is `format`.
- **Control.** Where the positive control is checked live. Tests always check it.
- **Floor.** What `total` counts. The value itself is learned from earlier clean reads and is never typed (§6.1).
- **Stale after.** `config.staleAfterDays`. These values are first guesses from the 24 Sep newest dates, to be tuned after four weeks of runs. `—` means the register has no usable date.
- **DC risk.** How likely GitHub's datacenter IPs are to be challenged, from each host's front:
  - high: Cloudflare, Hostinger, BitNinja, or an AI tarpit;
  - medium: Vercel, Dropbox, Wayback;
  - low: plain Apache, nginx or LiteSpeed.

| Adapter | Identity / success | Control | Floor | Stale after | DC risk |
|---|---|---|---|---|---|
| riaa | `simple_search_field` / `table_award_row` or "No matching results" | deep (`default_424119`) | RIAA `total` | 7 d | high (Cloudflare) |
| riaa-latin | same | **daily** (`default_451299` is in the "burna boy" search) | — | 90 d | high |
| musiccanada | JSON array + `X-WP-Total` | **rolling** (the last clean read's 3 newest ids, digest for digest); 89702 in the tests | `X-WP-Total` | 10 d | low (Apache) |
| snep | `div.certification` | deep (`?interprete=burna`) | — | 21 d | low |
| zpav | `"success": true` + requested subcategory | deep (`6:31629`), and window (while the newest 100 Gold reach past 2026-08-26) | rows per subcategory | 30 d | high (Cloudflare) |
| ifpi-sverige | search form / record `Guld/Platina:` | deep (sart 15311162) | — | — | low |
| ifpi-danmark | cert table | **rolling** (one row from each of the last clean read's 3 newest dates); 07.07.2026 in the tests (pages 0–2 ended 11.08.2026 on 24 Sep and only move forward) | — | 21 d | low (LiteSpeed) |
| nvpi | `{count, items}` | tests | `count` | 90 d | medium (Vercel) |
| cns-ifpi-cz / -sk | requested `weekId` + `chart-full-row` | tests | 100 rows | 14 d (chart week) | low (nginx) |
| ifpi-austria | `per_page` = 100 / rows | deep (the full register) | `total_rows` | 30 d | low |
| mahasz | year heading / rows | daily (a 2026 row, from the fixture) | year rows | — | low |
| ifpi-norge | trophy table | window (19/05/2026: page 1 reached 01/12/2025 on 24 Sep), and deep while the year read is 2026 | — | 45 d | low |
| promusicae | awards grid + requested week | deep (artist search) | — | 14 d | low |
| bvmi | requested `strJahr` / rows | **daily** (Dai Dai 2026 row) | year rows | — | low (own server) |
| ifpi-greece | week header / Award column | tests | — | 14 d (file date) | low |
| swisscharts | `Gewinner YYYY` / `award_item` | daily (a 2026 card, from the fixture) | year cards | — | high (Cloudflare) |
| rmnz | `recordsTotal` JSON | deep (`search[value]=Raindance`), and window (while the newest singles reach past 2026-08-27) | `recordsTotal` | 21 d | high (BitNinja) |
| amprofon | `#filtertable` | **daily** (5987) | table rows | 45 d | high (Hostinger) |
| tcsn | `__NEXT_DATA__` / entries | **daily** (Asake, Lonely At The Top, Platinum_8) | 500 (the cap) | — (row hash) | medium (Vercel) |
| promusica-br | results list | daily (a Burna card from `q-burna`) | — | — | low (LiteSpeed) |
| risa | — (permanently manual, §0.4.1) | — | — | — | high (tarpit) |
| fimi | — (permanently manual, §0.4.1) | — | — | — | unknown (not re-tested) |

**Window controls** (review, §0.3). A newest-first read carries its reach (`got.window`: the oldest date or smallest id it read). A control with a `window` test is checked on every run whose read reaches past the row, whatever `when` says, and the health line says "control row older than today's read reaches" when it does not. A window only moves forward, so a fixed row it has passed is never read again: a `window` test alone is not a live check.

**Rolling controls** (§0.4.5). Music Canada and IFPI Danmark carry their last clean read's newest rows in the cursor as `(id or date, digest)`. Today's read must hold at least one of the carried rows it reaches back to, digest for digest, or the read is a changed format ("rolling control missing — none of the last clean read's N newest rows is in today's read"); a row not found among others is a note. A first read, or one after a state reset, has none and says so. `rollingControl: true` marks such an adapter.

**Matched rows** (review, §0.3). Every clean read counts the rows naming one of the sixteen. An adapter declares in `matchedFloor` the read kinds whose matched rows persist between runs; for those, the floor is the **peak** — the highest clean count of the same kind — and a read under half of it (none included) is `unmatched` (§7). A count above half passes with a note, and the floor does not follow it down, so a slide is measured from the peak; three identical lower reads lower the floor (with a notify), but 0 is never a floor (§0.4.6). Declared: TCSN, AMPROFON, BVMI, swisscharts, MAHASZ, RIAA Latin, Pro-Música Brasil and NVPI on every read; RIAA, SNEP, ZPAV, Ifpi Sverige, IFPI Austria, IFPI Norge and PROMUSICAE on deep reads (their daily read is a newest-first window). Not declared: Music Canada, IFPI Danmark and RMNZ (fast windows, covered by their rolling or window and deep controls) and the three chart-bound registers, ČNS IFPI CZ/SK and IFPI Greece, where every title of the sixteen leaving the chart is the chart, not a fault. Every register also gets the field check.

**Year rollover.** A control that lives in "this year's" page is checked only while that year is read. That covers January, when the previous year is read too. After that the report says "no live control this year" until `config.controls.<id>` names a new row. That row must come from a saved fixture, never from memory.

---

## 4. Matching and diff rules (`match.mjs`)

### 4.1 Site index (`site.mjs`)

For each of the 16 artists (`LIVE_ARTISTS` keys, which must equal `afrobeatsSlugs` plus `burna-boy`; a test checks the two sets are equal):

- **Releases.**
  - Burna: `albums` are `format: "album"`; `singles` and `features` are `single`. Keep `credit` verbatim.
  - Board: `kind: "Albums"` is `album`; the other kinds are `single`.
- **Holdings.** For each release, `(country, programme) → {tier: level, x: x ?? 1, raw: cert}`, where `programme = cert.body ?? null`.
  - So Dai Dai US is `(US, "RIAA Latin")`, and on `origin/main` it holds Platinum ×6.
  - Dai Dai CO is `(CO, "Sony Music Colombia")`. The Colombian plaque is label-issued, so it is never compared with Pro Música Colombia rows, whose programme is `null`.
- **Lead aliases per release**, used to match rows whose credit omits the artist:
  - `LIVE_ARTISTS[slug].aliases` (`{artist, title, release}`) — **chart** aliases, read off the chart sweeps;
  - the lead parsed from each Burna `features[].credit` ("Dave ft. Burna Boy" gives lead "Dave", title "Location");
  - `config.leadAliases`, where each entry needs `why` and `on`.

  The index keeps all of them (`leadAliases`, which the searches' lead acts come from). Certification rows are matched only through **`certAliases`** (review, §0.3): the feature leads and `config.leadAliases`, plus each chart alias that (1) names a release the site holds a plaque on for that artist, (2) keeps the release's version words, and (3) is not in `config.chartOnlyAliases` (a ruling with `why`, `ruledBy`, `on`). The rest are `chartOnlyAliases`, each with its reason. Both are decided when the index is hydrated, so an index dumped before the rule gets it too.
- **Co-credit titles** (review, §0.3). A release whose title ends in a co-credit — a parenthesis, bracket or dash suffix that opens with a feature word (`ft.`, `with`, `w/`…) or names one of the sixteen, with no version word — also answers to the title without it, for matching only.
- **Integrity checks, part of the index build:**
  - every plaque is indexed exactly once, so the index total equals `totalAwards()` plus the sum of `certCount` over the board (derived in the test, never typed);
  - no two releases of one artist share a normalised title and format, unless `config.titleAliases` explains it.

### 4.2 Identify: which of the 16 does a register row belong to?

Run in this order and keep every reason. The reasons become the ⚠ flags in the issue.

1. **Reject tribute and karaoke acts.** If the credit or title matches `/\b(8[- ]?bit|karaoke|tribute|made popular by|in the style of|backing track|emulation|lullaby renditions?)\b/i`, drop the row and count it in the run details. The guard is proved with the real Deezer string recorded in memory: `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` by 8-Bit Arcade.
2. **Build the credit field.** Take the register credit, plus `extra.featured` (NVPI), plus any **feature qualifier lifted from the title**: a parenthesis or bracket, or a ` - ` suffix, that starts with `feat.`, `ft.`, `featuring`, `with`, `con`, `avec` or `mit`. Examples: RIAA `ONE DANCE (FEAT. WIZKID & KYLA)` and GR `Raindance (feat. Tems)`. The tribute string in step 1 has no such prefix, which is why it can't come in this way.
3. **Direct match.** Test `LIVE_ARTISTS[slug].credit` against the credit field. These regexes are word-anchored; a bare `/rema/` matched "Reman" and "La Suprema Corte". Then subtract `config.namesakes`:
   - "Olamide Badoo", "Tijani Olamide", "Yusuf Olamide Olotu" for olamide;
   - "Buju Banton" for bnxn;
   - "I Shot The Sheriff" and "SHERIFF" for black-sherif;
   - "Tyla Yaweh" for tyla (RIAA: `TYLA YAWEH`);
   - "Rema Namakula" for rema (Deezer artist 5942680, the Ugandan singer).
4. **Buju-era credit.** If the credit matches `/\bbuju\b/i` but not `/\bbuju\s+banton\b/i`, match bnxn and flag ⚠ `Buju-era credit — confirm it is BNXN`. The real negative control is RIAA's `BUJU BANTON | TIL SHILOH` row (`default_36107`, `badge ST level 0`).
5. **Register typos.** `config.creditTypos` covers TCSN's "Ayra Staar" (ayra-starr). It also documents "Centra Cee", which is not one of ours, so that nobody adds it. Flag ⚠ `register misspells the credit`.
6. **Owner tag (TCSN).** A trailing parenthesis equal to an artist's display name, whether or not one of the 16, moves to `extra.ownerTag`, and the title is compared without it. If there is an owner tag, **it must name the artist**. `Reason (Omah Lay)` belongs to Omah Lay and never to Asake's `Reason`, and vice versa.
7. **Lead alias** (from `certAliases`, §4.1). If the credit field names a known lead (word-anchored, with the namesakes of any of the sixteen the lead names subtracted, as in step 3: `TYLA YAWEH` never fires the "Tyla" lead) **and** the title matches that alias pair, match the featured artist and flag ⚠ `credit does not name <artist> — matched on lead + title; confirm the featured credit before adding`. This is the Boom DK precedent. The flag reads ⚠ `credit truncated by the register` when the credit ends in `...` or `…`.
8. **Held rows.** `config.heldRows` holds exact `(adapter, credit, title)` triples that must never become candidates. Example: TCSN's `Asake | Bad Influence`. It is Omah Lay's song (*Get Layd*, track 4); TCSN's `artiste` field is wrong, and the plaque is HELD and published for neither ([[feedback-match-artist-with-title]]).

A row can match **more than one** artist ("Wizkid feat. Tems — Essence"). Each artist gets its own comparison, and the report groups them under one register row.

### 4.3 Fold, locate, compare

- **Normalise, for comparison only.** Decode HTML entities; apply NFKD and strip diacritics; fold every dash U+2010–U+2015 and U+2212 to `-`; lowercase; fold `’‘´\`` to `'`; treat `&` as "and" in titles; collapse whitespace (tabs and newlines included); trim edge punctuation. **Verbatim strings are always kept alongside and are what the report prints.**
- **Formats.** Map the register's format to `single`, `album` or `unknown`:
  - Single, Digital Single, Track, Singiel, `Zlatý singl` → `single`;
  - Album, CD, LP, Albumy → `album`;
  - EP, DVD, Multi-box, blank → `unknown`.

  An `unknown` format locates by artist **and** title only.
- **Title qualifiers.** Feature qualifiers are dropped on both sides. **Version qualifiers are significant:** remix, rmx, live, acoustic, sped up, slowed, edit, version, mix, instrumental, a cappella, remaster. So `Sungba` ≠ `Sungba (Remix)`. `config.titleAliases` is a list, never a rule (e.g. SNEP `JERUSALEMA` → "Jerusalema (Remix)"); each entry needs `why`.
- **Fold.** Group by `(artist, adapter, country, programme, normTitle, format)` and keep the **highest** reading, holding up to 3 verbatim rows. This covers TCSN's "Gwagwalada" filed under two credit spellings, "Bad Vibes" listed twice, RMNZ's cumulative ladder, and NVPI's and MC's per-step rows. "On God" by two different credits stays as two records, because the credits map to different artists or releases.
- **Locate** the site release for the artist by normTitle **and** format. A known register format that disagrees (album vs single) means no match. If nothing matches, the kind is **NEW RELEASE**. If more than one release fits — no format, and an album and a single titled alike — the row is compared with each: in sync with all, nothing; otherwise **AMBIGUOUS**, listing each release and its holding (review, §0.3).
- **Compare** with the holding at `(country, programme)`:

  | Site holds | Candidate kind |
  |---|---|
  | nothing | **NEW PLAQUE** |
  | a lower rank on the adapter's ladder | **UPGRADE** |
  | an equal or higher rank | none. Never reported; "site ahead" is not evidence of anything |

  A matched row whose tier did not parse is **UNREADABLE TIER**: listed individually, never skipped.

### 4.4 Ladders: multiples read in the register's own steps

- `standard`: rank is `[tierIndex(Silver < Gold < Platinum < Diamond), x]`, compared in that order. A German `3x Gold` ranks below `1x Platin`. AMPROFON `PLATINO & ORO` / `3 & 1` is `[Platinum, 3]`, with the Oro half-step kept verbatim.
- `riaa`: compared in units. Gold (level 0) = 0.5; level N = N; the site's `Diamond` = 10 × (x ?? 1); site `Platinum ×N` = N. The same scale serves both programmes: a Latin `LA level 2` is compared only with the `(US, "RIAA Latin")` holding, never with a standard one.
  - The site holds US **Diamond** for One Dance and Wait For U by an explicit modelling choice, a floor recorded in the comment above the board data in `afrobeats.ts`. The register reads level 11 for both (One Dance `default_424119`, Wait For U `default_451587`).
  - Both readings are in `config.knownDivergences` **with the exact reading**. Level 12 would reappear as a candidate for Paul.
- `risa`: `gold` = Gold; `platinum` = Platinum ×1; `dbl-plat` = Platinum ×2; `multi-plat` = `{tier: Platinum, x: 3, floor: true}`, which reads "at least 3×". A site holding of Platinum ×3 or more is equal or ahead. A site ×2 against `multi-plat` is an UPGRADE to "at least 3×", never to a guessed multiple.
- Per-adapter tier parsers turn `tierRaw` into `{tier, x}` and return `null` for anything unseen. That includes, for example, a Czech "Diamantový" badge that has never been observed, and RiSA's 8 rows with no image: neither is guessed.

### 4.5 Suppress and fingerprint

- `config.knownDivergences` holds exact `(adapter, artist, title, readingRaw)` entries, each with `why`, `ruledBy` and `on`. A suppressed row is counted in the run details, never listed as a lead. For a row that locates no site release (a remix the site counts as its original), `printed` names the register's own title and `credit` its credit, which every row of the group must carry; `title` stays the site release it counts as (§0.5.2).
- The three kept plaques (AU Loved by You, AU Enjoy Yourself (Remix), UK Sungba (Remix)) cannot surface under §4.3, because the site is ahead of every register reading for them. The tests prove it with BPI's real `ASAKE | SUNGBA` detail page ("Most Recent Certification Silver", 17 January 2025).
- `key = adapter|country|programme|artist|normTitle|format`.
- `fp = sha256(key + "|" + reading.tier + "×" + reading.x + (reading.floor ? "+" : "") (or tierRaw when unparsed)).slice(0, 16)`.

  Dates, labels and chart positions are **not** in the fingerprint, so a row reprinted with a new chart position is not new.

### 4.6 Trap register: each trap, where it is encoded, and its test

| Trap (source) | Rule | Test (real string) |
|---|---|---|
| Title-only matching gave 5 phantom upgrades on 27 Aug | artist **and** title (§4.2–4.3) | TCSN `Reason (Omah Lay)` vs `Reason`/Asake |
| TCSN owner tag in the title | §4.2.6 | same |
| TCSN `artiste` errors: Bad Influence, "Ayra Staar", Smooth Criminal repeating the title | heldRows / creditTypos / ⚠ | rows from the saved TCSN capture |
| Variant credits for one record (Gwagwalada, Bad Vibes) | fold, highest reading | saved TCSN rows |
| Tribute and karaoke acts | §4.2.1 | `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` |
| Unanchored names (Rema / "Reman", Olamide namesakes, Sheriff, Mackay / McKay, Tyla Yaweh) | `LIVE_ARTISTS` regex plus namesakes | strings from `live-artists.mjs` comments (shipped) and RIAA `TYLA YAWEH` |
| BNXN ≠ Buju Banton; Buju-era filings | §4.2.4 | RIAA `BUJU BANTON` row |
| Featured artist only in the title (RIAA) | §4.2.2 | `ONE DANCE (FEAT. WIZKID & KYLA)` |
| Lead-act filing and truncated credits (BPI Sungba, DK Boom) | §4.2.7 ⚠ | DK `Major Lazer Feat. Moti Ty Dolla $ign...` |
| Case: registers print upper case, the repo sentence case | normalised compare | `DAI DAI` vs "Dai Dai" |
| HTML entities in credits (RiSA) | decode before compare, keep verbatim | `Dave &amp; Burna Boy` |
| Programme ≠ country (RIAA Latin; Colombia label-issued) | programme in the key | Latin `badge LA level 2` must not match a standard-programme holding |
| Multiples by step (PL `date_N`, NZ cumulative, RIAA level, MC and NVPI per-step ids, SNEP overwrite, DE `3x Gold`, NO free text, AT `N-fach`, MX "3 & 1", HU `arany_platina_db`, ZA `multi-plat` floor, CZ/SK no multiples) | per-adapter parser plus ladder | one real row per form |
| RIAA Diamond held as a floor on the site | knownDivergences with the exact level | One Dance `DI level 11` suppressed; any other level surfaces |
| A remix the site counts as its original (CKay ES, Paul 24 Sep) | knownDivergences with `printed`, `credit` and the exact tier | PROMUSICAE `CKAY / AXEL / DJ YO` cards suppressed; `2 × Discos de Platino`, another credit or another register surfaces; the original's cards still match |
| One record printed two ways, with a certless chart entry under the other title (TCSN `02:30` vs the site's `2:30`) | TCSN-scoped title alias, tried before the printed title | the real `Asake | 02:30` row lands on "2:30", even with a certless "02:30" release added |
| Site ahead of the register (Dai Dai RIAA Latin ×6 vs `2X PLATINO`) | never a candidate; watchlist `until: register ≥ site` | the real 24 Sep row against the `origin/main` holding |
| Absence ≠ uncertified (TCSN cap, CH incomplete, CZ/SK/GR chart-bound, NVPI lag, CO frozen) | never report site-ahead or missing rows | a row missing from the fixture produces no candidate |
| An empty search ≠ no rows (BVMI `strInterpret`) | name search not used; an empty search is never "not certified" | the saved empty BVMI search body |
| Kept plaques | never re-flagged | BPI `ASAKE SUNGBA` |
| Served page ≠ requested (BVMI past-the-end, AT cached default, CZ/SK week id, ZPAV subcategory) | `mismatch` status | BVMI repeat page; AT default page with `total_rows 5982` |
| Encoding (sys2.ifpi.se, swisscharts.com: latin-1) | decode as latin1 | `Ljudbärare`, `Märke` read correctly from the saved record |
| http-only host (ifpi.dk) | the URL is http | the adapter test asserts the scheme |
| RIAA's harmless `challenge-platform` script | marker first, then challenge | the re-test `US_RIAA_Latin_site` body reads OK |
| Real challenges and decoys | `challenge` / `mismatch` | re-test bodies `BE_Ultratop_site`, `CO_media_API_site` (hcdn), `co_page.s` (Hostinger, 24 Sep 11:19 UTC), `CH_hitparade_site`, `ZA_risa_org_za_browser` (1,099 B decoy), `risa_ajax.b` (1,311 B decoy), `PL_olis_bare_site` (302) |
| A register shrinking or going quiet | floor → `shrank`; cadence → `stale` | a real total with one row removed (the edit labelled in the test) |
| A register-specific string in a generic helper (`Nessuna certificazione`) | kept in `fimi.mjs` only | a grep test over `match.mjs`, `health.mjs` and `report.mjs` |
| A fetch that returns "nothing" on error | typed results; unreachable never counts as read | a rejected fetch appears under "not read" |

---

## 5. Issue format

**Title (exact):** `🏅 New certifications found — verify & add`.

The **body is rewritten every run**, as a complete current picture; editing a body sends no notification. A **comment is posted only for something new or changed** (§6.4), and that comment is what notifies. When there is no issue, one is created only if the run has something to notify, or it is Monday (the weekly to-do).

### 5.1 Body structure

1. **Headline.** Candidates open, how many are new since the last run, clean reads out of the automated registers, manual checks due, and watchlist size.
   - If any automated register was not read cleanly, the headline always names it: "Not read today: … — those registers say nothing about today."
   - If any is stale, the headline names it too: "Stale: … — read, but nothing newer than <date>."
2. **Lead disclaimer.** One line: every line is a lead; confirm at the body, then add by hand. The hand-edit checklist: certifications.ts / afrobeats.ts, `/compare` pricing ([[feedback-every-plaque-on-compare]]), register link ([[feedback-link-new-certs]]), updates feed.
3. **Candidates.** One task-list item per `(artist, release, country, programme)`, newest first, 🆕 for new. Only a clean read's rows are here: a read that came back but was not clean has its would-be candidates listed right after, under **Held back — rows from reads not trusted today**, as plain text with no box and no fingerprint (§7). Sub-bullets:
   - register reading, verbatim;
   - award date, with its kind;
   - row, verbatim, in a code span;
   - site holding now (derived);
   - check URL (human) and read URL/endpoint (bot);
   - flags;
   - first seen.

   **Ticking the box dismisses the candidate** until its reading changes.
4. **Watchlist.** Every item, every run, until it lands (§5.4).
5. **Register health.** All 28 rows: class, today's status, rows parsed, newest award seen, note.
6. **Manual checks this week.** Task list; ticks reset on the next ISO week.
7. `<details>` **Run details:**
   - run link, duration, and requests per host with each host's first status, `server` and marker;
   - suppressed counts (divergences, held rows, tribute rejects, dismissed);
   - floors learned or lowered;
   - candidates cleared since the last notify, because the site caught up.
8. **Hidden state block** (§6.1).

**Hygiene for untrusted text.** Register strings go into inline code, with backticks escaped, control characters stripped and a 300-character cap. `@` mentions and HTML are therefore inert, and a stray `-->` cannot close the state comment. The state block itself is base64.

**Size.** Show at most 40 candidates in full; summarise the rest with counts. The whole body must stay under 60,000 characters (GitHub's limit is 65,536).

### 5.2 Rendered example: 24 Sep 2026

What this example is built from:

- **Real and current:** the watchlist and register-health lines. They come from the 24 Sep re-tests (06:49–06:54 and 11:15–11:29 UTC) and from `origin/main` (`ad00a203`), where Dai Dai US is Platinum ×6 (RIAA Latin).
- **Unknown:** today's own candidate list, because no watcher has run with all 21 adapters yet, and how GitHub's addresses will be treated.
- **Replays:** the two candidate entries are real register rows shown **against the site as it stood before it caught up**:
  - Music Canada's Dai Dai row, added to the site in `2c7c709f` on 22 Sep;
  - Ifpi Sverige's Tyla "Water" record, added in PR #317 on 23 Sep.

They show the format; the live issue would not list them today.

````markdown
## 🏅 Certification watch — Thursday 24 September 2026

**2 candidates to verify** (2 new since the last run) · 21 of 21 automated registers read cleanly · 0 stale · 7 manual checks this week · 2 on the watchlist

> Every line is a **lead**, not a fact. Confirm it in the body's own register, then add it by hand: `certifications.ts` / `afrobeats.ts`, its `/compare` pricing, the country's register link, the updates feed. This bot never edits site data.

### Candidates

- [ ] 🆕 **Burna Boy — "Dai Dai"** · 🇨🇦 Canada · Music Canada · **NEW PLAQUE** — _REPLAY: site as before 2c7c709f_ <!-- fp:… -->
  - Register reads: `award_cert-double-platinum-single` (database label "Double Platinum Single")
  - Award date: `2026-09-21T15:53:40` (publication date)
  - Row: `id 89702 · title.rendered "Shakira, Burna Boy" · content.rendered "<p>Dai Dai</p>\n" · award_cert-double-platinum-single · award_type-single · https://musiccanada.com/award/shakira-burna-boy/`
  - Site holds now: nothing in CA for this release
  - Check: https://musiccanada.com/gold-platinum/ · Read via: `GET https://musiccanada.com/wp-json/wp/v2/award?per_page=100&orderby=id&order=desc&_fields=id,date,title,content,class_list,link`
  - First seen: 2026-09-21

- [ ] 🆕 **Tyla — "Water"** · 🇸🇪 Sweden · Ifpi Sverige · **UPGRADE** Gold → Platinum — _REPLAY: site as before PR #317_ <!-- fp:… -->
  - Register reads: `Guld/Platina: Platina - cert.nr 11312 - 2026-09-18`
  - Award date: `2026-09-18`
  - Row: `Artist: TYLA · Titel: WATER · Prefix/Suffix: USSM12305126 · Märke: FAX RECORDS/EPIC · Guld/Platina: Platina - cert.nr 11312 - 2026-09-18`
  - Site holds now: Gold
  - Check: https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=12096186 · Found via: `https://sverigetopplistan.se/search/?query=tyla` (badge `SWE,Platina`)
  - First seen: 2026-09-19

### Watchlist — reported every run until it lands

- ⏳ **Dai Dai (Shakira & Burna Boy) — 🇺🇸 RIAA Latin** · register: `2X PLATINO` (`badge LA level 2`, award `default_451299`, certification date July 9, 2026) · site: Platinum ×6 (RIAA Latin) — **the site is ahead of the register**, from RIAA's own @riaa_awards post of 23 Sep 2026 (added 24 Sep, PR #320) · lands when: the register reads level 6 or more · read ✅ today, unchanged since 2026-09-23
- ⏸️ **Dai Dai (Shakira & Burna Boy) — 🇬🇧 BPI** · not machine-read: BPI's robots.txt says `Disallow: /` · last reading (23 Sep sweep, BPI detail page): `Most Recent Certification Silver`, `Most Recent Certification Date 07 August 2026`; the public list's newest batch was still 04.09.2026 on 24 Sep · site: Silver · lands when: the site holds Gold (added by hand after a human confirms it at the BPI) · lead: fan report · human check: open https://certified-awards.bpi.co.uk/, search "Dai Dai", read "Most Recent Certification"

### Register health

| Register | Class | Today | Newest seen / note |
|---|---|---|---|
| 🇺🇸 RIAA | AUTOMATE | ✅ read | newest award September 23, 2026 · 30,179 awards |
| 🇺🇸 RIAA Latin | AUTOMATE | ✅ read | control `default_451299` present (`badge LA level 2`) |
| 🇨🇦 Music Canada | AUTOMATE | ✅ read | newest id 89710 (2026-09-23) · 31,858 awards |
| 🇫🇷 SNEP | AUTOMATE | ✅ read | newest date de constat 17/09/2026 |
| 🇵🇱 ZPAV | AUTOMATE | ✅ read | newest batch 2026-09-23 (no rows for the 16) |
| 🇸🇪 Ifpi Sverige | WITH-CARE | ✅ read | uncharted titles have no record id |
| 🇩🇰 IFPI Danmark | WITH-CARE | ✅ read | newest 16.09.2026 · credits cut at about 40 characters |
| 🇳🇱 NVPI | AUTOMATE | ✅ read | 6,493 awards; newest 16-7-2026 (NVPI publishes about 2 months late) |
| 🇨🇿 ČNS IFPI | WITH-CARE | ✅ read | week 38/2026 · badges show only while a title charts |
| 🇸🇰 ČNS IFPI | WITH-CARE | ✅ read | week 38/2026 · badges show only while a title charts |
| 🇦🇹 IFPI Austria | AUTOMATE | ✅ read | 5,994 awards (read with `fwp_per_page`; the default page is a stale cache) |
| 🇭🇺 MAHASZ | AUTOMATE | ✅ read | 269 rows (2026) · year only |
| 🇳🇴 IFPI Norge | AUTOMATE | ✅ read | newest 25/08/2026 |
| 🇪🇸 PROMUSICAE | AUTOMATE | ✅ read | week 38: 19 awards · week 37: 27 |
| 🇩🇪 BVMI | WITH-CARE | ✅ read | 2026: 784 rows on 40 pages · year only |
| 🇬🇷 IFPI Greece | WITH-CARE | ✅ read | week 37 · file Last-Modified 23 Sep 2026 05:48 GMT · charting titles only |
| 🇨🇭 IFPI via swisscharts.com | WITH-CARE | ✅ read | 29 cards for 2026 · not a complete list |
| 🇳🇿 RMNZ (RadioScope) | WITH-CARE | ✅ read | 24,435 rows; newest 2026-09-17 |
| 🇲🇽 AMPROFON | WITH-CARE | ✅ read | 8,681 rows, no challenge |
| 🇳🇬 TurnTable (TCSN) | WITH-CARE | ✅ read | 500 rows (the live cap; no Silver shown) · rows unchanged since 23 Sep (new build id; rows are what is compared) |
| 🇧🇷 Pro-Música Brasil | WITH-CARE | ✅ read | |
| 🇬🇧 BPI | MANUAL | ⏸️ held — robots.txt | human check below |
| 🇿🇦 RiSA | MANUAL | 📋 human check | permanently manual (owner ruling, 24 Sep 2026): RiSA asks AI tools not to read it — robots.txt Content-Usage: ai=n |
| 🇮🇹 FIMI | MANUAL | 📋 human check | permanently manual (owner ruling, 24 Sep 2026): FIMI asks AI tools not to read it — its footer bars crawling for AI training |
| 🇨🇴 Pro Música Colombia | MANUAL | 📋 human check | Hostinger bot check since 24 Sep · register frozen since 21/02/2025 |
| 🇧🇪 Ultratop | MANUAL | 📋 human check | Cloudflare challenge (403) |
| 🇦🇺 ARIA | MANUAL | 📋 human check | list is a Dropbox zip that robots.txt disallows · newest list covers to 31 Aug |
| 🇵🇹 AFP | MANUAL | 📋 human check | robots.txt disallows `/uploads` (PDFs) |

### Manual checks this week (ticks reset Monday)

- [ ] 🇬🇧 **BPI** — open https://certified-awards.bpi.co.uk/, set "certified date from" to last Monday, search each of the 16 names plus "Buju"; for Dai Dai, open its detail page and read "Most Recent Certification".
- [ ] 🇧🇪 **Ultratop** — in a browser, open https://www.ultratop.be/nl/goud-platina/2026/singles and `/albums`, Ctrl-F the 16 names, and screenshot any row with the URL in frame. (Dai Dai and Chanel BE Gold rest on Paul's 19 Sep read.)
- [ ] 🇦🇺 **ARIA** — open https://www.aria.com.au/accreditations, download the current list, and search credit **and** title. "Loved by You" and "Enjoy Yourself (Remix)" are kept plaques; don't re-flag them.
- [ ] 🇵🇹 **AFP** — open https://www.audiogest.pt/tops-semanais-2026, read the newest weekly PDF's `Gal.` column for the 16 names, then this month's award cards at instagram.com/audiogest (a frame proves only its own rows).
- [ ] 🇿🇦 **RiSA** — open https://risa.org.za/certification-levels/certifications/ in a browser and search the 16 names; the badge image is the tier (Multi-Platinum = at least 3×).
- [ ] 🇮🇹 **FIMI** — open https://www.fimi.it/top-of-the-music/certificazioni/, filter singles then albums for 2026, and search each of the 16 names.
- [ ] 🇨🇴 **Pro Música Colombia** — open https://pro-musica.co/certificaciones-2/ in a browser: is a register PDF newer than 21/02/2025 linked?
- Coverage the bot cannot close: 🇳🇬 TCSN shows only 500 rows and no Silver (check for a new Wayback capture) · 🇨🇿🇸🇰 albums and off-chart titles carry no badge · 🇬🇷 non-charting titles carry no award · 🇸🇪 never-charted titles have no record id · 🇳🇱 NVPI runs about 2 months behind · 🇨🇭 the page is not a complete list.

<details><summary>Run details</summary>

Run 2026-09-24 06:17 UTC · 5 m 40 s · 214 requests across 24 hosts · first responses: www.riaa.com 200 cloudflare marker ✓ · … · suppressed: 2 known divergences (One Dance, Wait For U: RIAA level 11 vs site Diamond), 1 held row (TCSN Asake | Bad Influence), 0 tribute rejects, 0 dismissed · floors: none lowered · cleared since the last notify: none
</details>

<!-- cert-watch:state:v1
eyJ2IjoxLCJ1cGRhdGVkIjoi…
-->
````

The run-details figures (duration, request and host counts) illustrate the shape only; the run supplies them.

An **unreachable register** renders like this. It is shown with AMPROFON's real 6 Sep failure, when Hostinger's CDN served "Checking your browser":

```markdown
**0 candidates** · 20 of 21 automated registers read cleanly · **Not read today: 🇲🇽 AMPROFON (bot challenge — "Checking your browser") — AMPROFON says nothing about today.**
| 🇲🇽 AMPROFON | WITH-CARE | ⏭️ not read — bot challenge (HTTP 403, server: hcdn) · 1st day | human check: open https://amprofon.com.mx/es/pages/certificaciones.php in a browser |
```

A **stale register** renders like this. The example is real data on a hypothetical date: NVPI's newest award is 16-7-2026, and `staleAfterDays.nvpi` is 90, so if nothing newer appears it goes stale on 14 Oct 2026.

```markdown
**0 candidates** · 21 of 21 automated registers read · **Stale: 🇳🇱 NVPI — read, but nothing newer than 16-7-2026 (usual gap ≤ 90 days); NVPI says nothing about the weeks since.**
| 🇳🇱 NVPI | AUTOMATE | ⌛ read — source stale since 2026-10-14 | 6,493 awards; newest 16-7-2026 |
```

The phrase "No new certifications" may appear **only** as "No new certification leads in the N registers read cleanly", and only when the not-read and stale lists are empty or printed right next to it.

### 5.3 Notify comment

```markdown
### 🏅 2 new certification leads — 24 Sep 2026
- 🆕 Burna Boy — "Dai Dai" · 🇨🇦 Music Canada · `award_cert-double-platinum-single` (2026-09-21) · site: none
- 🆕 Tyla — "Water" · 🇸🇪 Ifpi Sverige · `Platina - cert.nr 11312` (2026-09-18) · site: Gold
Full detail in the issue body. Cleared since last time (the site caught up): none.
```

A watchlist change or landing adds a line such as:

```markdown
- 👀 Watchlist: Dai Dai — 🇺🇸 RIAA Latin · register `badge LA level 2` → `badge LA level 6` · **landed**: the register now matches the site (Platinum ×6). Remove `dai-dai-riaa-latin` from config.json.
```

That line is an illustration of a future reading, not a real one; the register read `level 2` on 24 Sep.

### 5.4 Watchlist semantics

Each watchlist entry says **when it lands**, with `until`. Both kinds of target are derived at run time and never typed as a figure:

| `until` | Meaning | Lands when | Example |
|---|---|---|---|
| `{ "register": "atLeastSite" }` | The site published ahead of the register, on the body's own statement | the register's reading ranks at or above the site's current holding at `(country, programme)` | Dai Dai RIAA Latin: site ×6 from RIAA's post; the database reads 2X |
| `{ "site": { "tier": "Gold", "x": 1 } }` | A lead the site hasn't confirmed yet | the site's holding ranks at or above the target (a human verified it and added it) | Dai Dai BPI Gold: fan lead; site Silver |

Rules:

- The register reading is shown every run, with the date it last changed.
- A change in the reading notifies, whether or not the item lands. A register reading **above** the site also produces an ordinary UPGRADE candidate.
- A landed item notifies once and renders as `✅ landed <date> — remove <id> from config.json` until someone removes it; the watcher never edits config.
- A watched register that was not read cleanly shows as `⏭️`, with the last reading and its date, never as "unchanged".

---

## 6. Dedupe with no repo writes

### 6.1 Where state lives

State lives in a hidden block at the end of the issue body:

```
<!-- cert-watch:state:v1
<base64(JSON)>
-->
```

It is base64 so that register text cannot close the comment. Its shape:

```json
{ "v": 1, "updated": "2026-09-24T06:21:30Z", "run": "<run id>", "reset": false,
  "open":      { "<key>": { "fp": "…", "kind": "UPGRADE", "firstSeen": "2026-09-19", "reading": {"tier":"Platinum","x":1,"raw":"Platina - cert.nr 11312 - 2026-09-18"}, "adapter": "ifpi-sverige" } },
  "dismissed": { "<fp>": "2026-09-22" },
  "watch":     { "dai-dai-riaa-latin": { "raw": "badge LA level 2", "since": "2026-09-23", "landed": null } },
  "health":    { "amprofon": { "status": "challenge", "since": "2026-09-06", "fails": 1 },
                 "nvpi": { "status": "ok", "floor": 6493, "low": null, "newest": "2026-07-16", "staleSince": null },
                 "mahasz": { "status": "ok", "floor": 269, "floorYear": 2026 } },
  "cursors":   { "musiccanada": { "lastId": 89710, "rolling": [{ "id": 89710, "h": "…" }, { "id": 89707, "h": "…" }, { "id": 89706, "h": "…" }] }, "riaa": { "lastDate": "2026-09-23" },
                 "tcsn": { "rowsHash": "…" },
                 "ifpi-greece": { "lastModified": "Wed, 23 Sep 2026 05:48:30 GMT" },
                 "ifpi-sverige": { "badges": { "15311162": "SWE,Platina" } } },
  "manualWeek": "2026-W39", "manualTicks": ["uk", "be"] }
```

- **Floors.** A floor is set by the first clean read, and it rises with every clean read above it. A read below the floor is `shrank` (§7). The floor is lowered only after **three consecutive** runs read the same lower total, recorded in `low: {n, runs}`. That lowering sends a notify ("NVPI shrank from 6,493 to 6,490 and stayed there — floor lowered"). A year-bound floor resets when the year being read changes.
- **Matched rows.** `matched: {daily, deep}` is the peak count per read kind, never 0; `matchedLow` is the streak of identical lower reads (§3.4, §0.4.6).
- **Rolling controls.** A newest-first adapter's cursor carries its newest rows as `(id or date, digest)` — never the verbatim row (§0.4.5).
- **Cap.** 30,000 characters of base64. Verbatim rows live only in the rendered body, never in state. If the cap is exceeded, the run posts a comment saying so, emits `::error::` and keeps the previous state. It never writes a truncated state.
- **Backup.** A copy goes to `.cert-watch-cache/state.json` through `actions/cache`, restored from the newest key. The issue body wins when both exist. The backup is what survives if the issue is deleted.
- **Recovery.** With no open issue, the workflow reads the newest **closed** issue with the exact title, so dismissals survive Paul closing it.

### 6.2 Fingerprints and life cycle

- A **new** candidate has a fingerprint (§4.5) that is not in `open` or `dismissed`. It is marked 🆕 and triggers a notify.
- If the **same key** comes back with a **different fingerprint** (a tier or multiple change), it is treated as new: the old fingerprint is replaced and a notify is sent. *A candidate reappears only if it changes.*
- If it comes back with the **same fingerprint**, it stays listed in the body, with no notify.
- **Dismissed.** When Paul ticks `- [x]` on a line carrying `<!-- fp:… -->`, that fingerprint moves to `dismissed`. It is hidden from then on, and only the count appears in the run details.
- **Resolved.** When the current site index holds at least the stored reading, the candidate is dropped and listed once as "cleared" in the next notify comment and in the run details. This is checked on **every** run, including when the adapter did not re-read the row, since cursor-based adapters only read new rows.
- **Not re-read today.** If the adapter read cleanly but the row fell outside today's window, the candidate stays open. If the adapter did not read cleanly, the candidate stays open with the note "register not read today".
- **Held back.** A read that came back but was not clean opens nothing, changes nothing and notifies nothing: its would-be candidates are shown under "Held back" only (§7). A candidate already open from that register stays open with "register not read today".

### 6.3 Ticks and races

- Ticks are read from `--prev-body`. Manual-check ticks are keyed `<!-- manual:<id>:<ISO week> -->` and reset when the ISO week changes.
- The workflow **re-fetches the body just before editing** (`latest-body.md`) and re-renders offline with `--render-only`. A tick made during the run is therefore not lost.

### 6.4 When to notify (comment), and when not

**Notify when:**

- a new or changed candidate appears;
- a watchlist reading changes or lands;
- an automated register reaches **3 consecutive** runs not read cleanly, or recovers after 3 or more;
- a register's first `format`, `mismatch` or `shrank` status appears, or a floor is lowered;
- a register first goes stale, or recovers from stale;
- the first run after a state reset happens, with one comment explaining the reset.

**Do not notify for:**

- unchanged open candidates;
- a change in the site holding while the candidate is still open;
- resolved candidates alone (they are listed in the next notify comment);
- a manual checklist that is due.

The Monday body refresh carries the manual checklist, and a Monday run creates the issue if none is open.

---

## 7. Failure handling

| Situation | Register status in the report | Effect |
|---|---|---|
| Network error or timeout, after retries | `⏭️ not read — network` | Named in the headline's "not read" list; its open candidates stay open; streak +1 |
| HTTP 4xx/5xx (not a challenge) | `⏭️ not read — HTTP 5xx` | same |
| Bot challenge, or a decoy (`<title>ai/…`) | `⏭️ not read — bot challenge` / `— decoy page` | same; **never retried or worked around**; human check printed |
| 200 without the success marker, fewer rows than `minRows`, JSON that will not parse, an empty body, or more than 5% of rows unparsed | `⚠️ format changed` | same, plus a notify on first occurrence; the read's would-be candidates, UNREADABLE TIER rows included, are **held back** — listed as plain text, never as leads (§0.4.7) |
| Page served ≠ page requested (BVMI repeat, AT `per_page`, week id, subcategory) | `⚠️ served a different page` | same |
| Positive control missing (daily, or on a deep run) | `⚠️ format changed (control row missing)` | same |
| Total below the floor | `⚠️ register shrank (6,493 → 6,120)` | same; notify on the first occurrence; the floor is lowered only after three identical lower reads (§6.1); rows held back |
| Rows naming the sixteen under half the peak clean count of the same read kind, where the adapter declares that kind (`matchedFloor`) | `⚠️ matched rows dropped — rows naming the 16 dropped from 291 to 0 on the daily read …` (`unmatched`) | same; notify on the first occurrence; three identical lower reads accept the new level, with a notify — never a level of 0 (§0.4.6); rows held back |
| A newest-first read reaches the last clean read's carried rows and holds none of them (rolling control, §0.4.5) | `⚠️ format changed — rolling control missing — …` | same as a changed format |
| More than 5% of rows with an empty, date-like or markup credit or title | `⚠️ format changed — N of M rows have an empty, date-like or markup credit or title` | same as a changed format |
| Clean read, newest date older than `staleAfterDays` | `⌛ read — source stale` | rows are still diffed and reported; the headline's "Stale" list names it; not counted as "not read"; notify on first occurrence and on recovery |
| robots.txt disallows | `⏸️ held — robots.txt` | not counted in "automated"; human check printed |
| Policy hold (config `enabled: false` awaiting a ruling; none since 24 Sep 2026) | `⏸️ held — awaiting Paul's ruling` | not counted in "automated"; human check printed |
| Permanently manual by owner ruling (RiSA, FIMI: `config.adapters.<id>.permanent`) | `📋 human check` | not counted in "automated"; human check printed; config validation refuses to enable it |
| Adapter threw (a bug) | `⚠️ adapter error: <message>` | same as not read; stack trace in the run details |
| Run budget exhausted | `⏭️ not reached (run budget)` | same |
| All automated registers not read cleanly | headline "No register was read today — this run says nothing" | `::error::` annotation, a notify comment; exit 0 |
| `config.json` invalid, unknown `--only` id, site data won't load, Node too old | — | `REFUSING TO CONTINUE: …`, **exit 1**. The job goes red and GitHub's failed-workflow email fires |
| A bug in match, report, health or state (not inside an adapter) | — | exit 1, and no issue write |
| State block corrupt | "State could not be read — every open candidate is listed as new" | reset plus one notify |
| `gh` fails | — | the step goes red (`set -euo pipefail`) |

**Invariant, enforced by tests:** an adapter whose status is not `ok` or `stale` contributes **zero** to "registers read cleanly", and its name appears in the headline's not-read list. It contributes no leads either: its would-be candidates are held back (§0.4.7). A `stale` adapter appears in the stale list. The "no new certification leads" sentence cannot render without both lists.

---

## 8. Workflow: `.github/workflows/cert-watch.yml`

Built in step 1, and modelled on `stats-monitor.yml`: the same permissions, `gh` with `GITHUB_TOKEN`, and no other secrets.

```yaml
name: Cert watch

# Reads the certification registers a machine may read, compares them with the
# site's own plaque data, and keeps ONE issue current with anything the site
# lacks. It never edits site data: every plaque is added by hand after a human
# confirms it at the certifying body. Spec: docs/cert-watcher/SPEC.md

on:
  schedule:
    - cron: "17 6 * * *" # daily 06:17 UTC; Mondays (UTC) also run the deep reads
  workflow_dispatch:
    inputs:
      dry_run:
        description: "Print the report only; do not touch the issue"
        type: boolean
        default: false
      deep:
        description: "Also run the weekly deep reads"
        type: boolean
        default: false
      only:
        description: "Comma-separated adapter ids (blank = all)"
        type: string
        default: ""
  pull_request:
    paths:
      - "scripts/cert-watch/**"
      - "scripts/live-artists.mjs"
      - "tests/fixtures/cert-watch/**"
      - "app/data/certifications.ts"
      - "app/data/afrobeats.ts"
      - "app/data/charts.ts"
      - "app/lib/awardName.ts"
      - ".github/workflows/cert-watch.yml"

permissions:
  contents: read
  issues: write

concurrency:
  group: cert-watch-${{ github.event_name == 'pull_request' && github.ref || 'live' }}
  cancel-in-progress: false

jobs:
  watch:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      ISSUE_TITLE: "🏅 New certifications found — verify & add"
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false

      - uses: actions/setup-node@v4
        with:
          node-version: 24 # built-in TypeScript loading; no npm ci, no tsx

      - name: Load the site's plaque data
        run: node --no-warnings scripts/cert-watch/index.mjs --self-test

      - name: Offline run against the saved register responses
        if: github.event_name == 'pull_request'
        run: node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run --out cert-watch-out

      - name: Restore the HTTP cache and state backup
        if: github.event_name != 'pull_request'
        uses: actions/cache/restore@v4
        with:
          path: .cert-watch-cache
          key: cert-watch-${{ github.run_id }}
          restore-keys: cert-watch-

      - name: Find the tracking issue
        id: find
        if: github.event_name != 'pull_request'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          set -euo pipefail
          pick='[.[] | select(.title == env.ISSUE_TITLE) | .number] | sort'
          open=$(gh issue list --state open --limit 1000 --json number,title --jq "$pick | .[0] // empty")
          echo "number=$open" >> "$GITHUB_OUTPUT"
          src="$open"
          if [ -z "$src" ]; then
            src=$(gh issue list --state closed --limit 1000 --json number,title --jq "$pick | .[-1] // empty")
          fi
          if [ -n "$src" ]; then gh issue view "$src" --json body --jq .body > prev-body.md; else : > prev-body.md; fi

      - name: Read the registers
        id: watch
        if: github.event_name != 'pull_request'
        env:
          DRY_RUN: ${{ inputs.dry_run }}
          DEEP: ${{ inputs.deep }}
          ONLY: ${{ inputs.only }}
        run: |
          set -euo pipefail
          args=(--prev-body prev-body.md --out cert-watch-out --cache .cert-watch-cache)
          if [ "$(date -u +%u)" = "1" ] || [ "${DEEP:-false}" = "true" ]; then args+=(--deep); fi
          if [ "${DRY_RUN:-false}" = "true" ]; then args+=(--dry-run); fi
          if [ -n "${ONLY:-}" ]; then args+=("--only=$ONLY"); fi
          node --no-warnings scripts/cert-watch/index.mjs "${args[@]}"

      - name: Publish the run report
        if: always() && github.event_name != 'pull_request'
        run: |
          if [ -f cert-watch-out/report.md ]; then
            cat cert-watch-out/report.md >> "$GITHUB_STEP_SUMMARY"
          else
            echo "The watcher produced no report — it failed before writing one." >> "$GITHUB_STEP_SUMMARY"
          fi

      - name: Open or update the issue
        if: steps.watch.outcome == 'success' && steps.watch.outputs.write_issue == 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NUMBER: ${{ steps.find.outputs.number }}
          NOTIFY: ${{ steps.watch.outputs.notify }}
        run: |
          set -euo pipefail
          if [ -n "$NUMBER" ]; then
            gh issue view "$NUMBER" --json body --jq .body > latest-body.md
            node --no-warnings scripts/cert-watch/index.mjs --render-only \
              --results cert-watch-out/results.json --prev-body latest-body.md --out cert-watch-out
            gh issue edit "$NUMBER" --body-file cert-watch-out/issue-body.md
            if [ "$NOTIFY" = "true" ]; then
              gh issue comment "$NUMBER" --body-file cert-watch-out/comment.md
            fi
          else
            gh issue create --title "$ISSUE_TITLE" --body-file cert-watch-out/issue-body.md
          fi

      - name: Save the HTTP cache and state backup
        if: always() && github.event_name != 'pull_request'
        uses: actions/cache/save@v4
        with:
          path: .cert-watch-cache
          key: cert-watch-${{ github.run_id }}
```

Notes:

- Inputs reach the shell only through `env`, never `${{ }}` inside `run:`, and `--only` is validated against the registry.
- `write_issue` is false on `--dry-run`. With no open issue, `index.mjs` sets it only when notify is true or the run is Monday's.
- The 30-issue `gh issue list` default is fixed with `--limit 1000`.
- If there are two open issues with the title, the lowest number wins and the report says so.
- No `git` write command appears anywhere; a test checks this.
- **First run.** After Paul merges, the first run is a `workflow_dispatch` with `dry_run: true` and `deep: true`. Its run details give each host's first status, `server` header and marker, so a datacenter-IP challenge is seen before any issue is written. A host that challenges GitHub but not Paul's Mac stays WITH-CARE and shows `⏭️ not read — bot challenge` daily, with its human check. It is never routed round.

---

## 9. Test plan

Run with `npx vitest run --testTimeout=60000`. All files are `tests/certWatch*.test.ts`. Import `.mjs` the way `tests/statsMonitor.test.ts` does. Twenty-one files exist after step 2. Step 3 adds the files marked **(3)** and extends others.

| File | What it proves |
|---|---|
| `certWatchSite.test.ts` | `buildSiteIndex` over the **real** `app/data`. Every plaque is indexed once, and the total equals `totalAwards()` plus Σ `certCount(board)` (derived). Dai Dai US is keyed by programme "RIAA Latin", and CO by "Sony Music Colombia". **3a:** the holding's `x` is read from `certifications.ts` in the test, not typed. The `x: 2` at line 27 goes red once #320 is merged in. The `LIVE_ARTISTS` keys equal `afrobeatsSlugs` plus `burna-boy`. Lead aliases include (Dave, Location) from Burna's features and (Major Lazer, Boom) from config. The frozen `site-index.2026-09-24.json` has the same shape as a fresh build. |
| `certWatchMatch.test.ts` | §4.2–4.3 with real strings. These match: `SHAKIRA & BURNA BOY`, `Shakira, Burna Boy`, `Dave feat. Tems`, `Tems, Dave` + `Raindance (feat. Tems)`, and **(3)** `Dave &amp; Burna Boy` (RiSA). `DRAKE` + `ONE DANCE (FEAT. WIZKID & KYLA)` matches wizkid through the title. `BUJU BANTON` never matches bnxn, and `TYLA YAWEH` never matches tyla. `Reason (Omah Lay)` goes to Omah Lay only, and `Reason`/Asake to Asake only. The DK `Major Lazer Feat. Moti Ty Dolla $ign...` / `Boom` row matches wizkid through the alias, flagged ⚠ truncated. `Sungba` ≠ `Sungba (Remix)`. The tribute string is rejected, and so are the namesakes from the `live-artists.mjs` comments. |
| `certWatchLadders.test.ts` | Every tier form from a real row: `badge LA level 2`, `badge DI level 11`, `badge ST level 0`; `award_cert-double-platinum-single`, `award_cert-seven-times-platinum-single`; `Guld`, `Platin`, `2xPlatin`; `Platina - cert.nr 11317 - 2026-09-18`; ZPAV `date_1` / `date_3`; `Zlatý singl`, `Platinový singl`; `Diamant`. **(3)** adds `Platinum_8`, `Gold_1`; `Plat x2`; `1x Gold`, `3x Gold`, `2x Platin`; `2-fach PLATIN`; `PLATINO & ORO` / `3 & 1`; `certified-streaming-awards-multi-plat.png` (floor 3); NO `x1` / `X2` / blank. An unseen string gives `null`. Rank order is right in `standard`, `riaa` and `risa`. |
| `certWatch<Adapter>.test.ts` (one per adapter) | `parse.*` on its fixtures: row count, **positive control present verbatim**, dates and credits verbatim. The page-level checks (`format`, `mismatch`, `challenge`) use the real challenge and decoy bodies. The host is http for ifpi.dk. latin-1 decoding for sys2.ifpi.se and **(3)** swisscharts.com. The BPI adapter returns `held-robots` given the real BPI robots.txt, **with zero requests** (a spy on `http`). **(3)** AT: the saved default page (`per_page 4`, `total_rows 5982`) is `mismatch`. BVMI: the saved past-the-end page stops the walk, and the empty name-search body is never read as "no rows". TCSN: the 23 Sep JSON and 24 Sep HTML have different build ids and the **same** rows hash. |
| `certWatchHealth.test.ts` **(3)** | `health.mjs`: the `ai/` decoy title → `challenge` (both RiSA decoy bodies, 1,099 B and 1,311 B); the Hostinger 24 Sep page → `challenge`. A total one below the floor → `shrank`; three identical lower reads → floor lowered with a notify reason. Year-bound floors reset on a new year. The newest date past `staleAfterDays` → `stale`, and a stale adapter still yields its rows' candidates. A daily control missing → `format`. Every edited input is labelled in the test as an edit of a named real body. |
| `certWatchWatchlist.test.ts` **(3)** | The real 24 Sep Latin row (`badge LA level 2`) against the real site holding (×6): pending, and "site ahead" is printed. The same row with the level edited to 6 (labelled): landed, notify once. The BPI entry with the site at Silver: pending; with the site edited to Gold: landed. A changed reading notifies without landing. A watched register not read → `⏭️` with the last reading, never "unchanged". |
| `certWatchDiff.test.ts` | Replays against the frozen site index. The MC Dai Dai row against the site without CA gives NEW PLAQUE, and against the real site, in sync. The Tyla Water SE record against the site at Gold gives UPGRADE, and against the real site, in sync. The Latin Dai Dai row never compares with a standard-programme holding. One Dance and Wait For U `DI level 11` are suppressed (knownDivergences), while the same row with the level edited to 12 surfaces (the edit is labelled in the test). BPI `ASAKE SUNGBA` yields no Burna candidate. TCSN `Asake | Bad Influence` is held. A site-ahead row yields nothing, including **(3)** the Latin 2X row against site ×6. |
| `certWatchState.test.ts` | State round-trips through the issue body, and a verbatim row containing `-->` cannot break the block. A tick means dismissed; the same fingerprint next run means no notify; a changed reading means a new fingerprint and a notify; the site catching up means resolved; a corrupt block means a reset notice; oversize state means refusing to truncate; manual ticks reset on a new ISO week. **(3)** Floors and `low` streaks round-trip. |
| `certWatchReport.test.ts` | A golden render of an offline run (fixtures plus the frozen site index) against `tests/fixtures/cert-watch/expected-issue-body.md`. **(3)** Step 3 regenerates the golden deliberately, and the diff is reviewed line by line. The health table has exactly one row per registry entry (derived from the registry). Every MANUAL entry has a human check. Watchlist site holdings change when the site index changes (derived, not typed). The not-read and stale invariant (§7). Untrusted strings are escaped (`@mention`, HTML, backticks). The body stays under 60,000 characters with 100 synthetic candidates. |
| `certWatchRobots.test.ts` | The parser on the real saved robots files: BPI disallows us; Dropbox disallows `/sh/` and `/scl/`; audiogest disallows `/uploads/…pdf`; musiccanada has Crawl-delay 30 and swisscharts 10; SNEP and MAHASZ allow our User-Agent but not `ClaudeBot`; RiSA's named AI groups do not match our User-Agent, and `*` allows `/`. |
| `certWatchHttp.test.ts` | Allowed headers only; no browser User-Agent can be set; retries never on a challenge; the memo; **(3)** the cookie jar is per run and never written; `--save-raw` strips `set-cookie`. |
| `certWatchPipeline.test.ts` | Spawns `node scripts/cert-watch/index.mjs`, using `--site-json` so it runs on Node 20 too. A trailing comma in the config gives exit 1 and `REFUSING TO CONTINUE`. An unknown `--only` gives exit 1. A full offline dry run gives exit 0 and writes `issue-body.md`, `report.md` and `results.json`, with `write_issue=false` in a temp `GITHUB_OUTPUT`. An adapter whose fixture fetch rejects gives exit 0 with that register under "not read". |
| `certWatchLoader.test.ts` | Runs only when `process.versions.node` ≥ 22.18, and says so in the test name. `--self-test` counts equal the counts computed from the modules. The workflow's self-test step is the gate that always runs. |
| `certWatchConfig.test.ts` | Every watchlist, divergence, held-row, alias and typo entry names an existing artist and release, and carries `why` and `on` (`ruledBy` for rulings). Every watchlist `until` has a known shape. Every adapter host has politeness settings. Every `staleAfterDays` key is a registry id. **No personal data:** the User-Agent and every file under `scripts/cert-watch/` and `tests/fixtures/cert-watch/` fail `/[\w.+-]+@[\w-]+\.[\w.]+/` (an email pattern). Nothing is allowlisted (§0.5.4): not a person's address, not an organisation's. |
| `certWatchWorkflow.test.ts` | The text of `cert-watch.yml`: `permissions` is exactly `contents: read` / `issues: write`; `node-version: 24`; `--limit` appears on every `gh issue list`; a concurrency group and `timeout-minutes` are set; there is no `git commit` / `git push`; there is no `${{ inputs.` inside a `run:` block. |

**Rulings and the privacy clean-up (§0.5)** extend: `certWatchTcsn` (the real `Asake | 02:30` row: a lead without the alias, in sync on "2:30" with it, on "2:30" even with a certless "02:30" release added, an UPGRADE or NEW PLAQUE on "2:30" when the site changes; the site's own data: "2:30" NG ×4 among the releases, "02:30" a chart entry only); `certWatchPromusicae` (the real CKay remix cards: a lead without the ruling, suppressed with it, a lead again on a changed tier, another credit or another register; the original's cards still matched); `certWatchMatch` (all thirteen title aliases ruled by Paul); `certWatchConfig` (the divergence fields validated; the scan over scripts, fixtures, docs, the workflow and the `certWatch*` tests with nothing allowlisted — addresses in every encoding, Cloudflare and TYPO3 values, labelled phone numbers, `tel:` links, hCard tel, a contact block's person; each shape fires on a placeholder; `redactSaved` on each encoding, and on the real BVMI, Sverigetopplistan, Ifpi Sverige, ČNS IFPI, IFPI Danmark and PROMUSICAE pages with placeholders put back, byte for byte, the parsers reading the same rows; a second pass over every fixture changes nothing); `certWatchHttp` (the conditional-GET body and the robots.txt copy kept redacted, the 304 parsing as the 200 did on the real TCSN and IFPI Greece pages; saved headers redacted; the request log's gap is the queue's, 1,100 ms, under a clock that ticks between reads); `certWatchReport` and `certWatchPipeline` (the regenerated golden, with no candidate; the held-back and render-only tests run on the config as it stood before the rulings, a labelled edit, to have a real lead to hold back).

**Owner rulings and clean-up (§0.4)** extend: `certWatchConfig` (the widened address scan over scripts, fixtures with `.gz` decompressed, `docs/cert-watcher` and the workflow; `redactSaved` on the real BVMI and PROMUSICAE pages with placeholders put back, and on every other shape; RiSA and FIMI permanently manual and impossible to enable); `certWatchHttp` (plain addresses and labelled machine addresses never reach a saved body or header; a timer that wakes 1 ms early still leaves 1,100 ms between two requests); `certWatchPromusicaBr` (the real "Teams" card: no match without the typo, Tems's with it, on this register only; in sync against the real site, a NEW PLAQUE without its BR plaque; "Teams" among this register's searches only); `certWatchMatch` and `certWatchTcsn` (the ten TCSN aliases confirmed); `certWatchMusicCanada` and `certWatchDanmark` (the rolling control on the real 24 Sep reads: none on a first read, present on the next, missing or mangled = format, one withdrawn = a note; the tie rule; every automated register has a live check, a window alone not counting); `certWatchHealth` (the peak floor, 0 never a floor, a slide trips at half the peak); `certWatchReport` (an `unmatched` TCSN read holds back its real `Asake | 02:30` lead: no candidate, no state, no notify, a "Held back" line; the regenerated golden).

**Review fixes (§0.3)** extend: `certWatchMatch` (the dash fold on the real Pro-Música Brasil and site strings; the real TCSN Happiness row and RIAA Soweto row against `certAliases`, each first shown to fire with every alias; `TYLA YAWEH` and `Rema Namakula`; co-credit titles and the no-format `I Told Them` row, from TCSN's archived register); `certWatchHealth` (`matchedVerdict`: the floor, half, three-run acceptance, year reset, kinds; which registers are guarded); `certWatchTcsn` (the daily control; columns read the wrong way round go `unmatched`); `certWatchDanmark` (the 24 Sep zero is real; the window control; a shifted column fails the field check); the window controls in `certWatchNorge`, `certWatchZpav`, `certWatchRmnz` and `certWatchMusicCanada`; `certWatchConfig` (`mailto:` redaction on the real RadioScope page; `chartOnlyAliases` validation); `certWatchSite` (a fresh build and the frozen dump gate aliases alike); `certWatchReport` (the regenerated golden; `AMBIGUOUS` and `unmatched` rendering).

### 9.1 Fixtures: copy map (real responses only)

The rules:

- Keep bytes as served. Strip `set-cookie` from saved headers.
- Gzip anything over 300 KB as `.gz`; tests read it with `zlib`.
- Every file gets an entry in `tests/fixtures/cert-watch/PROVENANCE.json` (`{file, source, fetched, url, note}`), and a test fails on any fixture without one.
- `$RECIPES` has no log of the exact URLs. Where a body does not show its own URL (a canonical link, a pager link, the requested week), PROVENANCE says "URL from the §3 recipe; body as served 24 Sep 11:15–11:29 UTC".
- If a needed shape isn't saved anywhere, capture it with `--save-raw` in a one-off local dry run. That is a real response, with a few polite requests, and it must be recorded as such.

Steps 1 and 2 are copied and committed (see `PROVENANCE.json`). Step 3a copies the rest:

| Step | Fixture (under `tests/fixtures/cert-watch/`) | Source |
|---|---|---|
| 3a | `challenge/co-hostinger-2026-09-24.html` | `$RECIPES/co_page.s.body` (+ `.hdr`): 403 "Checking your browser before accessing" |
| 3a | `decoy/za-risa-ajax-browser.html` | `$RECIPES/risa_ajax.b.body` (1,311 B, `<title>ai/wp-admin/admin-ajax.php…`) |
| 3b | `austria/pp100-2026-09-24.html`, `austria/default-stale-2026-09-24.html` | `$RECIPES/ifpiat_pp100.s.body` (`total_rows 5994`), `ifpiat_default.s.body` (`total_rows 5982`); control row from `$SWEEP/de-at-ch-cz-sk-hu/at/pp100.html` if not in the 24 Sep page |
| 3b | `mahasz/adatbazis-2026.html.gz`, `mahasz/kereso-tyla.html` | `$RECIPES/mahasz.s.body` (269 rows); `$SWEEP/de-at-ch-cz-sk-hu/hu/…` |
| 3b | `norge/pg1-2026-09-24.html` | `$RECIPES/no_p1.s.body` (newest 25/08/2026) |
| 3b | `promusicae/2026-w38.html.gz`, `promusicae/2026-w37.html.gz`, `promusicae/q-shakira-burna.html` | `$RECIPES/es_w38.s.body`, `es_w37.s.body`; `$SWEEP/it-es-pt-br/es/…` |
| 3c | `bvmi/2026-p1.html`, `bvmi/2026-last.html`, `bvmi/name-search-empty.html`, `bvmi/q-daidai.html` | `$RECIPES/bvmi_2026.s.body`, `bvmi_p40.s.body` (confirm it is the last or a repeat page), `bvmi_artist.s.body`; `$SWEEP/de-at-ch-cz-sk-hu/de/…` (the Dai Dai row, from 23 Sep when the name search still answered) |
| 3c | `greece/digital_ien-w37.html.gz` + headers | `$RECIPES/ifpigr.s.body`, `ifpigr.s.hdr` (Last-Modified) |
| 3c | `swisscharts/edelmetall-2026.html` | `$RECIPES/swisscharts.s.body` (ISO-8859-1, `Gewinner 2026`, 29 cards) |
| 3c | `rmnz/singles-page.html`, `rmnz/singles-0.json.gz` | `$RECIPES/rmnz_page.s.body`; SSP JSON from `$SWEEP/au-nz-za-gr-co/nz/…` (the 24 Sep SSP body was not saved; capture one with `--save-raw` if the sweep's lacks the Raindance rows) |
| 3c | `amprofon/cert-2026-09-24.html.gz` | `$RECIPES/amprofon.s.body` (4.56 MB, contains `idenCertificacion` 5987) |
| 3c | `tcsn/live-2026-09-24.html.gz`, `tcsn/nextdata-2026-09-23.json` | `$RECIPES/tcsn.s.body` (10 MB, build `9FLVyEQ3OX_KP6OGJD8nk`); `$SWEEP/ng/live-certification.json` (build from 23 Sep) — the rows-hash test uses both |
| 3c | `promusica-br/q-burna-2026-09-24.html` | `$RECIPES/br_search.s.body` |
| — | ~~`risa/page-2026-09-24.html.gz`, `risa/table-15622.json.gz`~~ | never copied: RiSA is permanently manual (§0.4.1) |
| — | ~~`fimi/ajax-2026.json`~~ | never copied: FIMI is permanently manual (§0.4.1) |

### 9.2 Negative controls: the real strings, in one place

- `BUJU BANTON | TIL SHILOH` (RIAA `default_36107`)
- `TYLA YAWEH` (RIAA)
- `Reason (Omah Lay)` / `Reason` + `Asake` (TCSN)
- `Major Lazer Feat. Moti Ty Dolla $ign...` / `Boom` (IFPI Danmark)
- `ASAKE | SUNGBA` "Most Recent Certification Silver" (BPI detail)
- `Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)` (Deezer, via memory; no register carries a tribute act)
- `"Nessuna certificazione"`, which lives in `scripts/stats-lib.mjs:833` today (the generic-helper regression)
- the IFPI Austria default page with `total_rows 5982` (the stale cache)
- the empty BVMI name search
- `Märke: FAX RECORDS/EPIC` and `Titel:` (Ifpi Sverige's record fields), which the phone-number redaction must never touch
- PROMUSICAE's `CKAY | LOVE NWANTITI (AH AH AH)` cards (15843, 21393), which the CKay remix divergence must never suppress
- the Dai Dai RIAA Latin `badge LA level 2` row against the site's ×6 (site ahead, never a candidate)
- the challenge and decoy bodies: `$RETEST/body/BE_Ultratop_site`, `CO_media_API_site`, `CH_hitparade_site`, `ZA_risa_org_za_browser`, `PL_olis_bare_site`, plus `$RECIPES/co_page.s.body` and `risa_ajax.b.body`

Each test first proves it **fires** on the real string, then that the fix **passes**. Then revert the fix in the working tree and watch the suite go red, before restoring.

---

## 10. Build steps (sequential; each ends green and in one local commit, not pushed)

Every step ends with the gate below. Nothing is committed unless all four exit 0.

```
npx tsc --noEmit;                    RC1=$?
npx eslint;                          RC2=$?
npx vitest run --testTimeout=60000;  RC3=$?
npx next build;                      RC4=$?
[ $RC1 -eq 0 ] && [ $RC2 -eq 0 ] && [ $RC3 -eq 0 ] && [ $RC4 -eq 0 ] || { echo "NOT COMMITTING"; exit 1; }
```

### Step 1 — core, matching, report, workflow, RIAA and Music Canada: ✅ built (`7a66350f`)

What it delivered:

- all core files, `config.json`, the registry of 28 rows, `riaa.mjs` (both programmes), `musiccanada.mjs` and `manual.mjs`;
- the workflow, the `.gitignore` lines and `check:certs`;
- the step-1 tests and fixtures.

`--offline --dry-run` renders the Dai Dai RIAA Latin watchlist line (`2X PLATINO`, `badge LA level 2`, `default_451299`, site derived), shows BPI as `⏸️ held — robots.txt`, and suppresses One Dance. The live dry run finished in under 2 minutes and left the issue untouched. It found the Tyla Yaweh namesake.

**Still open:** the first Actions run, a `workflow_dispatch` with `dry_run: true` after Paul merges. The build agent does not do it.

### Step 2 — BPI, SNEP, ZPAV, Ifpi Sverige, IFPI Danmark, NVPI, ČNS IFPI: ✅ built (`74795248`)

It delivered those adapters, their tests and fixtures, the ladder forms, and the diff replays (Tyla Water SE UPGRADE, Boom DK through the alias, SNEP overwrite). The BPI adapter makes zero requests. The live run took 1 m 48 s and 168 requests, and all seven registers read cleanly (§3.2).

### Step 3 — the rest, as four commits

**3a — sync and hardening (one commit).**

- **Sync.** `git merge origin/main` (**merge, not rebase**: the branch is on the remote, and a rebase would rewrite published commits). Then run the gate on the merged tree. The expected red is `certWatchSite.test.ts:27`, which asserts `x: 2` while #320 made it 6.
- **Fixes:**
  - `certWatchSite.test.ts` derives `x` from `certifications.ts`;
  - the `dai-dai-riaa-latin` watchlist entry becomes `until: {"register": "atLeastSite"}`, with its lead updated to PR #320;
  - `dai-dai-bpi-gold` becomes `until: {"site": {"tier": "Gold", "x": 1}}`;
  - config validation learns `until`, `staleAfterDays`, `controls` and `hosts[*].cookies`.
- **New:**
  - `health.mjs`: decoy title, floors, `shrank`, `stale`, daily controls;
  - watchlist landing (§5.4);
  - the per-host first-response record in the run details;
  - `control.deep` becomes `control.when` in the eleven built adapters, with RIAA Latin's control made daily;
  - Music Canada's `double-diamond` tier word (Diamond ×2);
  - the stale and shrank rendering, and the `stale` output.
- **Registry:** zpav moves to AUTOMATE; cns-ifpi-cz/sk, bvmi and ifpi-greece move to WITH-CARE; promusica-co moves to manual (challenge); fimi and risa become held awaiting a ruling. The count becomes **21 automated**, derived from the registry.
- **Fixtures:** step 3's fixtures (§9.1), with their PROVENANCE entries.
- **Tests:** `certWatchHealth`, `certWatchWatchlist`, and the extended Site, Diff, State, Http and Config tests.
- **Acceptance:**
  - `--offline --dry-run` renders the Latin watchlist line with site **Platinum ×6 (RIAA Latin)** derived from the merged `app/data`, "the site is ahead of the register", and "lands when: the register reads level 6 or more";
  - no Dai Dai US candidate appears;
  - both RiSA decoy bodies classify as `challenge`.

**3b — the AUTOMATE adapters:** `ifpi-austria`, `mahasz`, `ifpi-norge`, `promusicae`, each with its test and fixtures.

**3c — the WITH-CARE adapters:** `bvmi`, `ifpi-greece`, `swisscharts`, `rmnz`, `amprofon`, `tcsn`, `promusica-br`, each with its test and fixtures. This commit also brings:

- conditional GET for ifpi.gr and the TCSN ETag;
- the heavy-body cache (AMPROFON, TCSN);
- the TCSN rows hash, the Wayback CDX lead (deep) and the NG caveat;
- swisscharts' Crawl-delay 10;
- the bvmi 180 s budget.

This may be two gated commits.

**3d — cancelled.** Paul ruled on 24 Sep 2026 that RiSA and FIMI stay manual for good: both ask not to be read by AI tools (§0.4.1). `config.adapters.<id>.permanent` records it, and config validation refuses to enable either.

**Acceptance for 3b–3c:**

- A full live `--dry-run --deep` on Paul's Mac finishes in **under 9 minutes**, with per-host gaps of at least 1.1 s (and 10 s for swisscharts, 30 s for musiccanada), checked from `http.mjs`'s request log in the run details.
- All **21** automated rows report a status, and every one of the 28 registry rows renders.
- Every daily control named in §3.4 is found live.
- Floors are learned on the first run and appear in the state.
- The report matches §5.2's structure.
- Every live candidate is either a real lead or explained by a `titleAliases`/`leadAliases` entry with its `why`. List the ones found for Paul; don't decide them.
- `check-stats.mjs` and `watched-metrics.json` are **untouched**.

---

## 11. Decisions for Paul (none block step 3a–3c)

1. **BPI.** robots.txt disallows every bot. This spec keeps UK as a weekly human check and the BPI adapter off. The alternative is to ask BPI for permission, which would take a written record (`config.adapters.bpi.permission = {from, on, scope}`). Dai Dai UK Gold stays a human check until then.
2. **RiSA — decided 24 Sep 2026: permanently manual** (Paul; §0.4.1). The recipe worked, with the honest User-Agent only: Ninja Table 15622, a public nonce, and 766 rows whose newest was dated 2026-09-03; the rows crediting our artists (Location, Raindance) are already on the site. But robots.txt declares `DisallowAITraining: /` and `Content-Usage: ai=n` for every agent and blocks 50 named AI crawlers, ClaudeBot and Claude-User among them: RiSA asks AI tools not to read it. ZA stays a weekly human check, and no adapter is built.
3. **FIMI — decided 24 Sep 2026: permanently manual** (Paul; §0.4.1). The footer forbids crawling "ai fini dell'addestramento AI": FIMI asks AI tools not to read it. (The old `fimi-dai-dai` watch did read FIMI's search endpoint for fact-checking; it went with the old hook, §11.6.) IT stays a weekly human check, and no adapter is built.
4. **ARIA's Dropbox zip and AFP's `/uploads` PDFs** stay manual by robots.txt.
5. **Classification.** 10 AUTOMATE, 11 WITH-CARE, 7 MANUAL: BPI (robots.txt; a written permission record could enable it), RiSA and FIMI (permanently, by owner ruling), Colombia and Ultratop (bot challenges), ARIA and AFP (robots.txt).
6. **Retire the old pieces.** Once cert-watch has run green for a week, retire the local scheduled task `riaa-dai-dai-6x-watch` and the inert `certWatches` / `certWatchStatus` hook in the stats monitor (a separate cleanup PR). That hook would report a decoy or challenge page as "not listed yet", and it sends the old User-Agent.
7. **Monday recreation.** The issue is recreated each Monday if it has been closed, as the weekly to-do. Say if a closed issue should instead stay closed until something new appears; that is one config switch, `weeklyTodo`.
8. **The pushed branch.** `origin/feat/cert-watcher` (at `74795248`) was pushed at 10:35 on 24 Sep, contrary to the build's no-push rule, and nothing records by whom. Keep it (step 3 merges `origin/main` rather than rebasing, so the branch stays fast-forwardable), or delete it. Nothing further will be pushed by the build.
9. **Colombia.** It is MANUAL while Hostinger challenges it, and its register has been frozen since 21/02/2025. The challenge came and went within 24 Sep, so if a browser check shows it gone for a week, it can come back as a WITH-CARE change-watch (recipe in §3.3).
10. **Title aliases from the step-2 run — decided 24 Sep 2026: confirmed** (Paul; §0.5.3): SNEP `JERUSALEMA` → "Jerusalema (Remix)"; `love nwantiti` → "love nwantiti (ah ah ah)".
11. **Memory notes to correct.** The build does not edit memory; this is for whoever maintains it.
    - `reference-zpav-olis-api.md`: the honest User-Agent works; the 302 comes from missing `X-Requested-With` and Referer, not from the User-Agent.
    - `reference-risa-register-origin-host.md`: risa.org.za now serves the real page and JSON to the honest User-Agent (table 15622), and the decoy only to a browser User-Agent. The origin host must not be used to get round the front.
    - `project-tcsn-register-provenance.md` / the TCSN notes: the build id changes on redeploys; compare the rows.
12. **Organisational addresses in fixtures — decided 24 Sep 2026: removed** (Paul; §0.5.4). The five organisations' addresses printed on real register pages (Grammotex's two, Sverigetopplistan's, IFPI Danmark's and ČNS IFPI's) are redacted in every fixture, the test's allowlist is gone, and the scan allows no address of any kind. Copies remain in the already-pushed `74795248`, by owner decision: they are public office addresses.
13. **BVMI's named contact — decided 24 Sep 2026: blanked** (Paul; §0.5.5). The staff members' names, job titles and direct lines are blanked in the 23 BVMI fixtures, and `redactSaved` blanks them (and any labelled phone number, `tel:` link or hCard tel) on every future capture.
14. **Asake "02:30" — decided 24 Sep 2026: the same record as "2:30"** (Paul; §0.5.1), read in sync by a TCSN-scoped title alias.
15. **CKay's PROMUSICAE remix — decided 24 Sep 2026: not added** (Paul; §0.5.2), a known divergence at its exact tier.

---

## Appendix A — `config.json` skeleton (after 3a)

```json
{
  "version": 1,
  "issueTitle": "🏅 New certifications found — verify & add",
  "userAgent": "burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)",
  "weeklyTodo": true,
  "budget": { "runSeconds": 540, "adapterSeconds": 90, "overrides": { "musiccanada": 150, "zpav": 150, "bvmi": 180, "ifpi-sverige": 240 } },
  "hosts": {
    "*": { "minGapMs": 1100 },
    "musiccanada.com": { "minGapMs": 30000, "why": "robots.txt Crawl-delay: 30 (read 24 Sep 2026)" },
    "swisscharts.com": { "minGapMs": 10000, "why": "robots.txt Crawl-delay: 10 (read 24 Sep 2026)" }
  },
  "adapters": {
    "bpi":  { "enabled": false, "why": "robots.txt User-agent: * / Disallow: / (read 24 Sep 2026); Paul to rule" },
    "risa": { "enabled": false, "permanent": true, "why": "PERMANENTLY MANUAL: RiSA asks not to be read by AI tools — robots.txt Content-Usage: ai=n …", "ruledBy": "Paul", "on": "2026-09-24" },
    "fimi": { "enabled": false, "permanent": true, "why": "PERMANENTLY MANUAL: FIMI asks not to be read by AI tools — its footer forbids crawling for AI training …", "ruledBy": "Paul", "on": "2026-09-24" }
  },
  "staleAfterDays": {
    "riaa": 7, "riaa-latin": 90, "musiccanada": 10, "snep": 21, "zpav": 30, "ifpi-danmark": 21, "nvpi": 90,
    "cns-ifpi-cz": 14, "cns-ifpi-sk": 14, "ifpi-austria": 30, "ifpi-norge": 45, "promusicae": 14,
    "ifpi-greece": 14, "rmnz": 21, "amprofon": 45,
    "why": "first guesses from the newest dates read on 24 Sep 2026; tune after four weeks of runs"
  },
  "controls": {},
  "searchTerms": ["Wiz Kid", "Buju", "Burna"],
  "watchlist": [
    { "id": "dai-dai-riaa-latin", "artist": "burna-boy", "title": "Dai Dai", "country": "US", "programme": "RIAA Latin",
      "adapter": "riaa-latin", "rowId": "default_451299", "until": { "register": "atLeastSite" },
      "lead": "the site holds 6X from RIAA's verified @riaa_awards post of 23 Sep 2026 (PR #320, Paul 24 Sep); the database read 2X Platino (9 Jul 2026) on 24 Sep",
      "on": "2026-09-24" },
    { "id": "dai-dai-bpi-gold", "artist": "burna-boy", "title": "Dai Dai", "country": "UK", "programme": null,
      "adapter": "bpi", "until": { "site": { "tier": "Gold", "x": 1 } },
      "lastHumanReading": { "raw": "Most Recent Certification Silver · Most Recent Certification Date 07 August 2026", "on": "2026-09-23", "source": "23 Sep sweep, BPI detail page" },
      "lead": "fan lead; the BPI's public list stopped at the 04.09.2026 batch", "on": "2026-09-23" }
  ],
  "knownDivergences": [
    { "adapter": "riaa", "artist": "wizkid", "title": "One Dance", "readingRaw": "badge DI level 11",
      "why": "site holds US Diamond as a floor by design (afrobeats.ts note, 10 Sep 2026); RIAA prints 11X", "ruledBy": "site modelling note", "on": "2026-09-10" },
    { "adapter": "riaa", "artist": "tems", "title": "Wait For U", "readingRaw": "badge DI level 11",
      "why": "same modelling note", "ruledBy": "site modelling note", "on": "2026-09-10" },
    { "adapter": "promusicae", "artist": "ckay", "title": "love nwantiti (ah ah ah)", "printed": "LOVE NWANTITI (REMIX)", "credit": "CKAY / AXEL / DJ YO",
      "readingRaw": "1 × Discos de Platino", "why": "the site counts a song and its remixes as one record per country; ES Platinum is held on the original … ruled by Paul 24 Sep 2026", "ruledBy": "Paul", "on": "2026-09-24" }
  ],
  "heldRows": [
    { "adapter": "tcsn", "credit": "Asake", "title": "Bad Influence",
      "why": "Omah Lay's song (Get Layd, track 4); TCSN's artiste field is wrong; plaque HELD, published for neither", "ruledBy": "Paul", "on": "2026-08" }
  ],
  "leadAliases": [
    { "artist": "wizkid", "lead": "Major Lazer", "title": "Boom",
      "why": "IFPI Danmark truncates the credit; Spotify and Ifpi Sverige sart 6775561 confirm Wizkid", "ruledBy": "Paul", "on": "2026-09-23" }
  ],
  "creditTypos": [
    { "register": "tcsn", "printed": "Ayra Staar", "artist": "ayra-starr", "why": "TCSN typo; Many Roads added on Paul's call", "on": "2026-09-23" },
    { "register": "promusica-br", "printed": "Teams", "artist": "tems", "why": "Pro-Música Brasil prints Tems as \"Teams\" on Beyoncé's MOVE (2024 Platina) …", "ruledBy": "Paul", "on": "2026-09-24" }
  ],
  "namesakes": [
    { "artist": "olamide", "names": ["Olamide Badoo", "Tijani Olamide", "Yusuf Olamide Olotu"], "why": "live-artists.mjs note" },
    { "artist": "bnxn", "names": ["Buju Banton"], "why": "a different artist" },
    { "artist": "black-sherif", "names": ["I Shot The Sheriff", "SHERIFF"], "why": "live-artists.mjs note" },
    { "artist": "tyla", "names": ["Tyla Yaweh"], "why": "a different artist (the American rapper); RIAA files him as TYLA YAWEH (first live dry run, 24 Sep 2026)" },
    { "artist": "rema", "names": ["Rema Namakula"], "why": "a different artist (the Ugandan singer); Deezer artist 5942680 (review, 24 Sep 2026)" }
  ],
  "chartOnlyAliases": [
    { "artist": "rema", "lead": "Victony", "title": "Soweto",
      "why": "the registers crediting SOWETO to Victony & Tempoe alone certify the 2022 original, which Rema is not on", "ruledBy": "Rema sweep", "on": "2026-09-24" }
  ],
  "titleAliases": [
    { "artist": "burna-boy", "printed": "JERUSALEMA", "release": "Jerusalema (Remix)", "why": "SNEP prints the remix — the only version crediting Burna Boy — as JERUSALEMA; confirmed by Paul 24 Sep 2026", "ruledBy": "Paul", "on": "2026-09-24" },
    { "artist": "ckay", "printed": "love nwantiti", "release": "love nwantiti (ah ah ah)", "why": "registers print the title without \"(ah ah ah)\"; confirmed by Paul 24 Sep 2026", "ruledBy": "Paul", "on": "2026-09-24" },
    { "register": "tcsn", "artist": "asake", "printed": "02:30", "release": "2:30", "why": "TCSN prints \"Asake | 02:30\" (Platinum_4): the site's \"2:30\", NG Platinum ×4 … confirmed by Paul 24 Sep 2026", "ruledBy": "Paul", "on": "2026-09-24" }
  ],
  "manualChecks": [
    { "id": "uk", "flag": "🇬🇧", "body": "BPI", "url": "https://certified-awards.bpi.co.uk/", "check": "set \"certified date from\" to last Monday; search the 16 names plus \"Buju\"; for Dai Dai read \"Most Recent Certification\"" }
  ]
}
```

(`manualChecks` continues with be, au, pt, za, it and co, and the coverage notes, exactly as rendered in §5.2. Where the committed `config.json` holds longer `why` texts, it wins over this skeleton.)
