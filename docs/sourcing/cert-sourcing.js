export const meta = {
  name: 'cert-sourcing-burna',
  description: 'Link every Burna Boy certification to the certifying body own record',
  phases: [
    { title: 'Source', detail: 'one agent per body group' },
    { title: 'Audit', detail: 'catch citations masquerading as body reads' },
  ],
}

const BODY_HINTS = {
  NG: `TCSN / TurnTable. Register: https://turntablecharts.com/certification
CRITICAL: TCSN certification is REQUEST-based and PAID, the live register caps at 500 rows and
currently serves ZERO Silver awards even though Silver is a real TCSN tier. So absence from the
register PROVES NOTHING and must be recorded as "unreadable", never as "absent" or "wrong".
With 63 plaques to check, do NOT try to verify each individually — load the register ONCE, capture
every Burna Boy row it contains, and report those as sourced. Everything not in it is "unreadable".`,
  UK: `BPI BRIT Certified. Register: https://certified-awards.bpi.co.uk/  (bpi.co.uk/brit-certified/ is DEAD, 404).
It is an htmx app: a plain URL returns only the search shell. Request with header "HX-Request: true"
to get the results fragment. Search "Burna Boy" ONCE and capture all rows.
BPI DOES publish per-title permalinks shaped like
  https://certified-awards.bpi.co.uk/format/2/artist/4398/title/12242
Capture the permalink for each title — this is the single best per-plaque link available anywhere.
Rows carry Artist | Title | Award | Format | Label | Latest Certification date | Released, and the
detail record carries the FULL escalation history (Silver -> Gold -> Platinum) with dates.`,
  CA: `Music Canada. Register: https://musiccanada.com/gold-platinum/?_gp_search=Burna+Boy
Search once, capture all rows: Artist | Title | Award | Date | Format. Note multipliers
(Double Platinum, Triple Platinum) exactly as stated — the tier vocabulary matters.
Music Canada bulk-reprocessed its catalogue in Jan 2026, so dates may be recent for old songs.`,
  FR: `SNEP. Register: https://snepmusique.com/les-certifications/?interprete=Burna+Boy
JS-rendered, so fetch may return an empty shell — render it or use the filtered listing.
SNEP publishes PERMALINKS shaped https://snepmusique.com/certifications_du_sn/<artist>-<title>/
Capture them. Note SNEP's date field is "Date de constat" (attestation date), NOT release date.
SNEP retains lower tiers as separate rows, so one title can appear at Or then Platine then Diamant.
SNEP publishes NO unit count on the row — never attach a sales figure.
The filtered view offers "TÉLÉCHARGER EN CSV" / "EN PDF" export — a CSV export URL would be an
excellent durable source link if you can capture it.`,
  NZ: `Recorded Music NZ. There is NO standalone certification register — do not conclude "nothing is
published", that is wrong. RMNZ publishes certifications as a FIELD ON A CHART ROW at
https://aotearoamusiccharts.co.nz/charts/singles (and /charts/albums, /charts/hot-singles).
The page embeds JSON per row: "certification":{"nz":<bool>,"type":"<tier>","multiple":<n>}
A title that CHARTED in NZ can be confirmed from its chart row, including archived weeks via
https://aotearoamusiccharts.co.nz/archive . A title that NEVER charted in NZ has no row for the
marker to attach to and is therefore "unreadable" — structurally, not because you failed.
Report honestly which of the 19 have a readable chart row and which do not.`,
  AU: `ARIA. Accreditations at https://www.aria.com.au/charts/accreditations and aria.com.au/accreditations
ARIA publishes accreditation listings, often as PDFs (Dropbox-hosted but linked from ARIA's own
pages — that is acceptable as the body's own publication). Capture the specific listing URL.`,
  US: `RIAA. Register: https://www.riaa.com/gold-platinum/?tab_active=default-award&se=Burna+Boy
Search once, capture all rows. Each row has a certification date and format (DIGITAL SINGLE / ALBUM).
Distinguish the standard programme from RIAA Latin (Premios de Oro y Platino) — thresholds differ
enormously and the site marks Latin awards separately.`,
  CH: `IFPI Schweiz, published via hitparade.ch. hitparade.ch is behind a Cloudflare Turnstile bot-wall —
completing a bot check is OUT OF BOUNDS. Use the swisscharts.com mirror instead:
https://swisscharts.com/edelmetall/<year> and https://swisscharts.com/search.asp?search=Burna+Boy
IFPI Schweiz calls its own award register NON-EXHAUSTIVE and label-issued, and publishes a YEAR
only, no exact date. Record that caveat on every Swiss row.`,
  DK: `IFPI Danmark. Register: http://www.ifpi.dk/certificeringer-0 (and ifpi.dk/certificeringer).
Danish tiers are Guld / Platin. Rows are paginated and the ?page= offset DRIFTS WEEKLY — so cite
the register ROOT plus the award date, never a page-offset URL, which will rot.`,
  SE: `GLF / Grammotex. ALREADY LARGELY DONE — do not re-derive. Known: the database is HTTP ONLY
(https times out). Public per-record URL: http://sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=<id>
Confirmed: Gbona sart=9225432, Guld cert.nr 10453, 2023-08-16. Also known from the same run:
On the Low Platinum cert. 10448; Ye ("Yeh") Platinum cert. 10450; African Giant Guld cert. 10452.
The SEARCH is login-walled so sart ids cannot be discovered — do NOT attempt a login and do NOT
brute-force ids. For the other Swedish titles, check whether the title has a Sverigetopplistan chart
row carrying a "cert" field (sverigetopplistan.se); otherwise mark unreadable.`,
  PT: `AFP (Associação Fonográfica Portuguesa). Register: https://www.audiogest.pt/ and afp.org.pt —
AFP publishes weekly certification PDFs by week number. Capture the specific week PDF URL.`,
  ZA: `RiSA (Recording Industry of South Africa). https://risa.org.za/certification/ — RiSA publishes
certification lists. Note RiSA's register has been patchy; if unreadable, say so.`,
  NL: `NVPI. https://www.nvpi.nl/goud-platina/ — Dutch tiers Goud / Platina.`,
  AT: `IFPI Austria. https://www.ifpi.at/gold-platin/ — publishes an award database.`,
  BR: `Pro-Música Brasil. https://pro-musicabr.org.br/certificados/ — searchable certification list.`,
  ES: `Promusicae. https://www.promusicae.es/certificaciones — publishes weekly certification lists (PDF).`,
  IT: `FIMI. https://www.fimi.it/certificazioni — searchable, filter by artist and year.`,
  DE: `BVMI. https://www.musikindustrie.de/musikindustrie/gold-platin-datenbank — searchable award database.`,
  CO: `Colombia. There is no independent national certifying body operating publicly; the site records
this as a label-issued (Sony Music Colombia) award. Very likely UNREADABLE at a body — say so plainly.`,
  HU: `MAHASZ. https://mahasz.hu/arany-es-platinalemezek — Hungarian award database.`,
  SK: `ČNS IFPI (Slovakia). https://ifpicr.cz/ — the Czech/Slovak body publishes award lists.`,
  GR: `IFPI Greece. https://www.ifpi.gr/ — publishes certification announcements; often hard to read.`,
  CZ: `ČNS IFPI (Czechia). https://ifpicr.cz/ — award lists by year.`,
  NO: `IFPI Norge. https://ifpi.no/ — publishes trofeer/certification lists.`,
  PL: `ZPAV. https://zpav.pl/zlote-i-platynowe-plyty — Polish award database, searchable.`,
  BE: `BEA (Belgian Entertainment Association). https://www.belgianentertainment.be/ — note Belgium runs
separate Flanders/Wallonia charts but certifications are national.`,
}

const SCHEMA = {
  type: 'object',
  properties: {
    rows: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          country: { type: 'string' },
          status: { type: 'string', enum: ['sourced', 'unreadable', 'tier-differs', 'absent'] },
          bodyTier: { type: 'string', description: 'tier exactly as the body states it; empty if unreadable' },
          url: { type: 'string', description: 'deep link to the record, or the closest URL that actually lands on it' },
          quote: { type: 'string', description: 'the register row, verbatim' },
          awardDate: { type: 'string' },
          note: { type: 'string', description: 'caveats: mirror used, non-exhaustive register, page-offset rot, etc.' },
        },
        required: ['title', 'country', 'status'],
      },
    },
    registerUrl: { type: 'string', description: 'the register root you actually used' },
    registerWorks: { type: 'boolean', description: 'did the body register load and return data at all' },
    summary: { type: 'string' },
  },
  required: ['rows', 'registerWorks'],
}

const RULES = `
ARTIST: Burna Boy (Damini Ebunoluwa Ogulu), Nigerian. Also credited on features — the work list
below marks those with the full credit in parentheses, e.g. "Location (Dave ft. Burna Boy)".

THE STANDARD, which is the entire point of this task:
- Confirm at the CERTIFYING BODY'S OWN register. A Wikipedia table, a chart aggregator, a news
  article or a fan post is NOT a source. It is at best a pointer.
- If the register cannot be read, status="unreadable" with the reason. NEVER downgrade to a
  citation, and never guess. Unreadable is a correct, expected outcome — say it plainly.
- A DEAD LINK TO A PRIMARY SOURCE IS WORSE THAN NO LINK. Only give a url you actually loaded.
- Prefer a per-record PERMALINK. If the body has none, give the searchable URL that lands closest,
  and say in "note" that it is a search rather than a permalink.
- Quote the register row VERBATIM in "quote".
- If the body states a DIFFERENT tier than the work list says, use status "tier-differs" and put the
  body's tier in bodyTier. The body wins. This has already caught one real error, so look carefully.

EFFICIENCY, this matters:
- Load the register ONCE per body and capture ALL matching rows in that single pass. Do not run one
  search per title.
- Budget ~20-25 tool calls TOTAL. Report what you have when you reach it, with the rest "unreadable".
- NEVER download a file larger than a few MB. A previous run hung permanently on a 39MB JSON.
- Do NOT attempt logins, credentials, or bot-check bypasses anywhere.
`

phase('Source')
const groups = args
const results = await pipeline(
  groups,
  (g) => agent(
    `Capture EVERY Burna Boy certification held by these certifying bodies, from the bodies' own registers.

BODIES IN THIS GROUP: ${g.codes.join(', ')}

${g.codes.map((c) => `--- ${c} --- (the site currently records ${g.counts[c]} plaque(s) here, as a sanity check only — capture whatever the register actually holds, more or fewer)\n${BODY_HINTS[c] || 'Find the national certifying body and its own register.'}`).join('\n\n')}

${RULES}

DO NOT search title by title. Load each register ONCE, search the ARTIST, and capture every row it
returns for Burna Boy — as lead artist AND as a featured credit (Location / Dave; Own It / Stormzy;
Jerusalema Remix / Master KG; Be Honest / Jorja Smith; WGFT / Gunna; Enjoy Yourself / Pop Smoke, and
any others the register shows). Report every row you see, even ones you do not expect.

If a register genuinely cannot be read, set registerWorks=false and explain — that is a valid result.`,
    { label: `src:${g.codes.join('+')}`, phase: 'Source', schema: SCHEMA },
  ),
)

const ok = results.filter(Boolean)
const rows = ok.flatMap((r) => r.rows || [])
const sourced = rows.filter((r) => r.status === 'sourced' || r.status === 'tier-differs')
log(`${ok.length}/${groups.length} groups · ${rows.length} rows · ${sourced.length} sourced`)

phase('Audit')
const audit = await agent(
  `Audit a certification-sourcing sweep whose standard is: confirm at the certifying body's own
register; a cited table is not a source; unreadable means say so rather than publish-with-caveat.

ROWS: ${JSON.stringify(rows.slice(0, 400))}

Report, bluntly:
1. Any row marked "sourced" whose url is NOT the certifying body's own domain — i.e. a Wikipedia,
   aggregator, news or fan URL smuggled in as a body read. Name every one. This is the top priority.
2. Any row whose "quote" does not actually support the tier claimed, or is obviously boilerplate
   rather than a real register row.
3. Any url that looks like it will rot: page-offset URLs, session URLs, search URLs presented as
   permalinks without saying so.
4. Any "tier-differs" rows — list them, since each is a potential correction to the site.
5. Which bodies returned nothing at all, and whether that looks like a genuine wall or a weak attempt.

Return prose.`,
  { label: 'audit', phase: 'Audit' },
)

return { rows, audit, groupsReported: ok.length, sourcedCount: sourced.length }
