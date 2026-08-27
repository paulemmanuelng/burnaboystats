export const meta = {
  name: 'cert-sourcing-board',
  description: 'Link every Afrobeats board certification to its certifying body record',
  phases: [
    { title: 'Source', detail: 'one agent per body, all twelve artists at once' },
    { title: 'Audit', detail: 'catch citations posing as body reads' },
  ],
}

const ARTISTS = `Wizkid, Davido, Rema, Tems, Tyla, Ayra Starr, Asake, Omah Lay, Seyi Vibez, Victony,
Fireboy DML, CKay. Capture LEAD credits and FEATURED credits alike — many of these plaques are
features (e.g. Tems on "Essence" and "Wait For U", Ayra Starr on "Rush" remixes, Burna Boy
collaborations). If a row names any of the twelve, capture it.`

const HINTS = {
  NG: `TCSN / TurnTable. Register: https://turntablecharts.com/certification
This is BY FAR the biggest block — the site records 475 board plaques here. The live register caps
at exactly 500 rows total across ALL artists and serves ZERO Silver awards, though Silver is a real
TCSN tier. Certification is request-based and paid, so absence PROVES NOTHING — record missing
titles as "unreadable", never "absent" or "wrong".
Load the register ONCE and capture EVERY row belonging to any of the twelve artists in that single
pass. Do not search artist by artist. Note that every row carries the same "Feb 6, 2026" stamp,
which is a register-wide migration date, NOT a per-award date — do not report it as an award date.`,
  UK: `BPI BRIT Certified. Register: https://certified-awards.bpi.co.uk/  (bpi.co.uk/brit-certified/ is DEAD).
htmx app: request with header "HX-Request: true" to get results, a plain URL returns only the shell.
BPI publishes real PER-TITLE PERMALINKS shaped /format/2/artist/<id>/title/<id> — capture them, they
are the best per-plaque links any body offers. Detail records carry the full escalation history.`,
  CA: `Music Canada: https://musiccanada.com/gold-platinum/?_gp_search=<artist>
Capture Artist | Title | Award | Date | Format. Record multipliers exactly (Double/Triple Platinum).
Do NOT keep "_paged=" offsets in any URL you report — pagination reshuffles on every update.
Note their register contains typos (it spells "Kilometre" as "Killometre"), so match on the artist
and the award, not on exact title spelling.`,
  US: `RIAA: https://www.riaa.com/gold-platinum/?tab_active=default-award&se=<artist>
Rows carry a certification date and format. Distinguish the standard programme from RIAA Latin.`,
  FR: `SNEP: https://snepmusique.com/les-certifications/?interprete=<artist>
JS-rendered. IMPORTANT: SNEP's per-title permalinks are STUBS showing neither tier nor date — do not
cite them as the evidence URL. Cite the filtered register listing that actually renders the row.
SNEP's date field is "Date de constat" (attestation), not release date. Lower tiers stay as separate
rows, so one title can appear at Or, then Platine, then Diamant.`,
  NZ: `Recorded Music NZ. There is NO standalone register — do not report "nothing is published".
Certifications are a FIELD ON A CHART ROW at https://aotearoamusiccharts.co.nz/charts/singles
(also /charts/albums, /charts/hot-singles, and archived weeks via /archive). Each row embeds
"certification":{"nz":<bool>,"type":"<tier>","multiple":<n>}.
A title that never charted in NZ has no row and is therefore UNREADABLE — not absent, and not the
agent's failure. A previous pass returned 29 "absent" for this body; prefer "unreadable" unless you
actually read a chart week that should have contained the title and did not.`,
  ZA: `RiSA: https://risa.org.za/certification/ . Note RiSA renders tiers as award IMAGES
(certified-streaming-awards-platinum.png). If the tier comes from a filename rather than text, say so
explicitly in the note — do not present an inferred tier as a quoted one.`,
  CH: `IFPI Schweiz. hitparade.ch is behind a Cloudflare Turnstile bot-wall — do NOT attempt to pass it.
swisscharts.com is a Hung Medien AGGREGATOR MIRROR, not the body: a previous pass cited it for 11
rows and all 11 were demoted in audit. If you cannot open an IFPI Schweiz publication or hitparade.ch
itself, the correct answer is registerWorks=false and every row "unreadable". Do not repeat that error.`,
  BR: `Pro-Música Brasil: https://pro-musicabr.org.br/certificados/ — searchable.`,
  ES: `Promusicae / El Portal de Música: https://www.elportaldemusica.es/ — weekly certification lists.`,
  PT: `AFP / Audiogest: https://www.audiogest.pt/ — weekly certification PDFs by week number.`,
  AU: `ARIA: https://www.aria.com.au/accreditations — accreditation PDFs. The files are often hosted on
Dropbox but linked from ARIA's own page. Cite aria.com.au as primary and the file as secondary; a
raw Dropbox share-token URL does not read as ARIA and dies when the folder is re-shared.`,
  DK: `IFPI Danmark: http://www.ifpi.dk/certificeringer-0 . Tiers Guld / Platin. Paginated, and the
?page= offset DRIFTS WEEKLY — cite the register root plus the award date, never a page offset.`,
  NL: `NVPI: https://www.nvpi.nl/goud-platina/ . Tiers Goud / Platina. There is an internal JSON API at
goudplatina.nl/api/filter — you may read it, but cite the user-facing page, not the API endpoint.`,
  IT: `FIMI: https://www.fimi.it/certificazioni — filter by artist and year.`,
  PL: `ZPAV: https://zpav.pl/zlote-i-platynowe-plyty and olis.pl. A previous pass reported a Polish row
whose quote carried no tier and no date — make sure the quoted row actually states the award.`,
  GR: `IFPI Greece: https://www.ifpi.gr/ — certification announcements, often hard to read. Say so if so.`,
  DE: `BVMI: https://www.musikindustrie.de/musikindustrie/gold-platin-datenbank — searchable database.`,
  BE: `BEA: https://www.belgianentertainment.be/ . Belgium runs separate Flanders/Wallonia charts but
certifications are national.`,
  AT: `IFPI Austria: https://www.ifpi.at/gold-platin/ — award database.`,
  MX: `AMPROFON: https://amprofon.com.mx/certificaciones/ — Mexican certification register.`,
  NO: `IFPI Norge: https://ifpi.no/ — trofeer lists. A previous pass reported a Norwegian row that
credited only the lead artist and never named the featured artist; if the register does not name one
of the twelve, that is not evidence of their plaque.`,
  SE: `GLF / Grammotex. HTTP ONLY — https times out. Records are public at
http://sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=<id> but the SEARCH is login-walled, so ids
cannot be discovered. Do NOT attempt a login and do NOT brute-force ids. Instead check whether the
title has a Sverigetopplistan chart row carrying a "cert" field (sverigetopplistan.se). Otherwise
report unreadable — that is the honest and expected answer for Sweden.`,
  HU: `MAHASZ: https://mahasz.hu/arany-es-platinalemezek — award database.`,
}

const SCHEMA = {
  type: 'object',
  properties: {
    rows: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          artist: { type: 'string' },
          title: { type: 'string' },
          country: { type: 'string', description: 'ISO-2 code' },
          status: { type: 'string', enum: ['sourced', 'unreadable', 'absent'] },
          bodyTier: { type: 'string' },
          url: { type: 'string' },
          quote: { type: 'string' },
          awardDate: { type: 'string' },
          tierInferred: { type: 'boolean', description: 'true if the tier came from an image filename or layout, not quoted text' },
          note: { type: 'string' },
        },
        required: ['artist', 'title', 'country', 'status'],
      },
    },
    registerUrl: { type: 'string' },
    registerWorks: { type: 'boolean' },
    summary: { type: 'string' },
  },
  required: ['rows', 'registerWorks'],
}

const RULES = `
THE STANDARD — this task exists to satisfy it:
- Confirm at the CERTIFYING BODY'S OWN register. A Wikipedia table, a chart aggregator (including
  swisscharts / Hung Medien sites), a news article or a fan post is NOT a source.
- Unreadable is a CORRECT and expected outcome. Record it plainly. Never downgrade to a citation,
  never guess a tier, never present an inferred tier as a quoted one.
- A DEAD LINK TO A PRIMARY SOURCE IS WORSE THAN NO LINK. Only report a URL you actually loaded.
- Prefer a per-record PERMALINK. If none exists, give the searchable URL that lands closest and SAY
  in the note that it is a search, not a permalink. Never report a URL containing a pagination
  offset, a session id, or a share token as if it were stable.
- Quote the register row VERBATIM.
- The BODY's tier wins over whatever the site records. Report what the body says.

EFFICIENCY:
- Load each register ONCE and capture every row for any of the twelve artists in that pass.
- Budget ~25 tool calls TOTAL. Report what you have when you reach it.
- NEVER download a file over a few MB — a previous run hung permanently on a 39MB JSON.
- Do NOT attempt logins, credentials, or bot-check bypasses anywhere.
`

phase('Source')
const results = await pipeline(
  args,
  (g) => agent(
    `Capture Afrobeats-board certifications from these certifying bodies' own registers.

ARTISTS: ${ARTISTS}

BODIES IN THIS GROUP: ${g.codes.join(', ')}

${g.codes.map((c) => `--- ${c} --- (the site records ${g.counts[c]} board plaque(s) here, as a rough sanity check only — capture whatever the register actually holds)\n${HINTS[c] || 'Find the national certifying body and its own register.'}`).join('\n\n')}

${RULES}

Report every row you find, including ones for artists you did not expect. If a register cannot be
read at all, set registerWorks=false and explain.`,
    { label: `board:${g.codes.join('+')}`, phase: 'Source', schema: SCHEMA },
  ),
)

const ok = results.filter(Boolean)
const rows = ok.flatMap((r) => r.rows || [])
log(`${ok.length}/${args.length} groups · ${rows.length} rows · ${rows.filter((r) => r.status === 'sourced').length} sourced`)

phase('Audit')
const audit = await agent(
  `Audit a certification-sourcing sweep. Standard: confirm at the certifying body's own register;
a cited table is not a source; unreadable beats publish-with-caveat; a dead link is worse than none.

ROWS (may be truncated): ${JSON.stringify(rows.slice(0, 350))}

Report bluntly:
1. Any "sourced" row whose url is NOT on the certifying body's own domain — especially swisscharts,
   Hung Medien sites, Wikipedia, or chart aggregators. This is the top priority; name every one.
2. Any row whose quote does not actually state the tier claimed, or is boilerplate rather than a
   real register row. Include rows where the tier was inferred from an image filename.
3. URLs that will rot: pagination offsets, share tokens, session ids, internal API endpoints, or
   dated upload paths.
4. Any body that returned nothing — genuine wall, or weak attempt?
5. Any row crediting only a lead artist where the board artist is the featured one, which does not
   evidence the board artist's plaque.

Return prose.`,
  { label: 'audit', phase: 'Audit' },
)

return { rows, audit, groups: ok.length }
