// Who the live-charts builder can build for.
//
// The pipeline was written for one artist and hardcoded him in four places: the
// kworb source URL, the credit matcher used by the Deezer/YouTube sweeps, the
// feature-credit alias list, and the output path. This registry is those four
// facts per artist; everything else in build-live-charts.mjs is shared.
//
// Burna Boy stays the default, so the hourly job's command line is unchanged
// and his generated file is byte-identical to what it was before.

/**
 * @typedef {object} LiveArtist
 * @property {string} slug        Registry key, also the CLI argument.
 * @property {string} name        Display name, used in the file header.
 * @property {string} source      kworb artist page.
 * @property {RegExp} credit      Matches the CREDITED artist on a country chart.
 *   ALWAYS word-anchored. A bare /rema/i matched "Reman" and "La Suprema
 *   Corte", and put two Burkinabè songs and an Ecuadorian one on Rema's board.
 * @property {{artist: string, title: string, release: string}[]} aliases
 *   Records the artist is FEATURED on. kworb's country charts print the lead
 *   credit only ("Drake - One Dance"), so without these a swept chart never
 *   attaches those rows to the featured artist. Matching is on the exact
 *   (artist, title) pair rather than the title alone, because a bare title
 *   match would sweep in unrelated songs that happen to share a name.
 * @property {Record<string,string>} [titleAliases]
 *   Chart-name → catalogue-name, for records the country charts and the artist
 *   page title differently. Without it the same record lands twice — "Kese" at
 *   Nigeria #57 and "Kese (Dance)" at Nigeria #57, one placement counted as
 *   two. Version suffixes are otherwise significant on purpose (a remix charts
 *   separately), so this is a list, never a rule.
 * @property {string} out         Output file, relative to app/data/.
 * @property {string} [runOut]    Append-only daily run history, if kept.
 * @property {boolean} [covers]   Resolve artwork per release at build time.
 * @property {boolean} [mayChartNowhere]  Exempt from the 25-placement floor.
 *   ONLY for an artist who can genuinely hold no placement on a given day.
 * @property {number} [minPlacements]  A lower "is this file real" floor for an
 *   artist who does chart, but sits near 25 on an ordinary day — so a quiet
 *   hour doesn't fail the build. Use this, not mayChartNowhere, for anyone
 *   who charts.
 * @property {boolean} [staged]   Built, but not on the board yet: its
 *   app/data/liveBoards.ts row waits on the artist's certification verify.
 *   `--artist=board` (the hourly job) skips a staged artist, so the set the job
 *   refreshes stays the set of live pages; name it explicitly to build it.
 *   Delete the flag in the same change that adds its liveBoards.ts row.
 */

/** @type {Record<string, LiveArtist>} */
export const LIVE_ARTISTS = {
  "burna-boy": {
    slug: "burna-boy",
    name: "Burna Boy",
    source: "https://kworb.net/itunes/artist/burnaboy.html",
    credit: /\bburna\s*boy\b/i,
    aliases: [{ artist: "Shakira", title: "Dai Dai", release: "Dai Dai" }],
    out: "liveCharts.ts",
    runOut: "runHistory.ts",
    // His covers come from the site's own catalogue (app/lib/covers.ts), which
    // knows every Burna Boy release. Nothing to resolve at build time.
    covers: false,
  },
  wizkid: {
    slug: "wizkid",
    name: "Wizkid",
    source: "https://kworb.net/itunes/artist/wizkid.html",
    // kworb writes it "WizKid" and "Wizkid" on different pages.
    credit: /\bwiz\s*kid\b/i,
    // The records he is featured on that chart under someone else's name.
    // Read off his own certification and chart sweeps (15-17 Aug 2026).
    aliases: [
      { artist: "Drake", title: "One Dance", release: "One Dance" },
      { artist: "Beyoncé", title: "Brown Skin Girl", release: "Brown Skin Girl" },
      { artist: "Tyla", title: "Dynamite", release: "Dynamite" },
      { artist: "Ayra Starr", title: "Gimme Dat", release: "Gimme Dat" },
      { artist: "Shallipopi", title: "Like That (Bomboclatt)", release: "Like That (Bomboclatt)" },
      { artist: "Asa", title: "IDG", release: "IDG" },
      { artist: "Wande Coal", title: "Ebelebe", release: "Ebelebe" },
      { artist: "Sarz", title: "Happiness", release: "Happiness" },
      { artist: "DJ Tunez", title: "Cool Me Down", release: "Cool Me Down" },
      { artist: "Naira Marley", title: "Wow", release: "Wow" },
    ],
    titleAliases: { "Kese (Dance)": "Kese" },
    out: "liveCharts.wizkid.ts",
    // Collection starts the day this is switched on — a run can only ever be
    // plotted from the first day something was watching. Turned on 17 Aug 2026
    // on Paul's call, so the board's trend data begins accumulating now even
    // though nothing plots it yet.
    runOut: "runHistory.wizkid.ts",
    covers: true,
  },
  "davido": {
    slug: "davido",
    name: "Davido",
    source: "https://kworb.net/itunes/artist/davido.html",
    credit: /\bdavido\b/i,
    aliases: [
      { artist: "Iyanya", title: "Like", release: "Like" },
      { artist: "TxC", title: "Nakupenda", release: "Nakupenda" },
      { artist: "Stonebwoy", title: "Activate", release: "Activate" },
    ],
    out: "liveCharts.davido.ts",
    runOut: "runHistory.davido.ts",
    covers: true,
  },
  "rema": {
    slug: "rema",
    name: "Rema",
    source: "https://kworb.net/itunes/artist/rema.html",
    credit: /\brema\b/i,
    aliases: [
      { artist: "Ayra Starr", title: "Who's Dat Girl", release: "Who's Dat Girl" },
      { artist: "Don Toliver", title: "Secondhand", release: "Secondhand" },
      { artist: "Young Jonn", title: "Lalala", release: "Lalala" },
      { artist: "Victony", title: "Soweto", release: "Soweto" },
    ],
    titleAliases: { "Baby (Is it a Crime)": "Baby" },
    out: "liveCharts.rema.ts",
    runOut: "runHistory.rema.ts",
    covers: true,
  },
  "tems": {
    slug: "tems",
    name: "Tems",
    source: "https://kworb.net/itunes/artist/tems.html",
    credit: /\btems\b/i,
    aliases: [
      { artist: "Dave", title: "Raindance", release: "Raindance" },
      { artist: "Future", title: "WAIT FOR U", release: "WAIT FOR U" },
      { artist: "Wizkid", title: "Essence", release: "Essence" },
      { artist: "Drake", title: "Fountains", release: "Fountains" },
    ],
    out: "liveCharts.tems.ts",
    runOut: "runHistory.tems.ts",
    covers: true,
  },
  "tyla": {
    slug: "tyla",
    name: "Tyla",
    source: "https://kworb.net/itunes/artist/tyla.html",
    credit: /\btyla\b/i,
    aliases: [
      { artist: "Damiano David", title: "Talk to Me", release: "Talk to Me" },
    ],
    out: "liveCharts.tyla.ts",
    runOut: "runHistory.tyla.ts",
    covers: true,
  },
  "ayra-starr": {
    slug: "ayra-starr",
    name: "Ayra Starr",
    source: "https://kworb.net/itunes/artist/ayrastarr.html",
    credit: /\bayra\s*starr\b/i,
    aliases: [
      { artist: "Rvssian", title: "Santa", release: "Santa" },
      { artist: "Ninho", title: "No love", release: "No love" },
      { artist: "Crayon", title: "Ngozi", release: "Ngozi" },
      { artist: "Mavo", title: "Escaladizzy II", release: "Escaladizzy II" },
      { artist: "FOLA", title: "treat u right", release: "treat u right" },
      { artist: "Johnny Drille", title: "Colorado", release: "Colorado" },
    ],
    out: "liveCharts.ayra-starr.ts",
    runOut: "runHistory.ayra-starr.ts",
    covers: true,
  },
  "asake": {
    slug: "asake",
    name: "Asake",
    source: "https://kworb.net/itunes/artist/asake.html",
    credit: /\basake\b/i,
    // Records he is FEATURED on, under the lead credit kworb prints — the
    // country sweeps match on the lead string, so without these his features
    // never reached the board (Chanel, Eja Meja and Jogodo were all on
    // Nigeria's YouTube and Deezer charts on 17 Sep 2026 with the board
    // showing none). Credits verified that day on kworb's ng pages; the
    // 19 Aug 2026 register sweep (docs/sweeps/asake-certifications-v1.md,
    // Featured) is the list to extend from, with each credit spelled exactly
    // as kworb prints it.
    aliases: [
      { artist: "Blaqbonez", title: "Chanel", release: "Chanel" },
      { artist: "BNXN fka Buju", title: "Eja Meja", release: "Eja Meja" },
      { artist: "Wizkid", title: "Jogodo", release: "Jogodo" },
    ],
    // Live cuts of the same song: YouTube charts them under the live name,
    // the artist page under the studio one, and the row landed twice.
    titleAliases: { "Wa (Live)": "Wa", "Ako - Live in London": "Ako" },
    out: "liveCharts.asake.ts",
    runOut: "runHistory.asake.ts",
    covers: true,
  },
  "omah-lay": {
    slug: "omah-lay",
    name: "Omah Lay",
    source: "https://kworb.net/itunes/artist/omahlay.html",
    credit: /\bomah\s*lay\b/i,
    aliases: [

      // No register sweep has run for this artist yet, so there is no verified
      // credit list to build from. Lead credits are caught by the matcher above;
      // records they are FEATURED on are under-reported until the sweep lands.
    ],
    // YouTube names the remix, the artist page names the original, and the
    // three rows are identical — one chart row, two names.
    titleAliases: { "soso (Remix)": "soso" },
    out: "liveCharts.omah-lay.ts",
    runOut: "runHistory.omah-lay.ts",
    covers: true,
  },
  ckay: {
    slug: "ckay",
    name: "CKay",
    source: "https://kworb.net/itunes/artist/ckay.html",
    // Anchored on the whole name: "CKay" is short enough that an unanchored
    // match would also catch "Mackay" and "McKay" credits that are not him.
    credit: /\bckay\b/i,
    // Records where he is FEATURED, so a chart prints someone else's name and
    // the credit matcher never sees him. Read off his own sweep (26 Aug 2026).
    aliases: [
      { artist: "Ayra Starr", title: "Beggie Beggie", release: "Beggie Beggie" },
      { artist: "Davido", title: "La La", release: "La La" },
    ],
    // kworb prints the guest in the title; the board names the record.
    titleAliases: { "BODY (danz) (feat. MAVO)": "BODY (danz)" },
    out: "liveCharts.ckay.ts",
    runOut: "runHistory.ckay.ts",
    covers: true,
    // His breakout is a 2021 record, so on most days he holds no live platform
    // placement anywhere. A clean sweep returning zero is the truth for him,
    // not a failure — see the guard in build-live-charts.mjs.
    mayChartNowhere: true,
  },
  olamide: {
    slug: "olamide",
    name: "Olamide",
    source: "https://kworb.net/itunes/artist/olamide.html",
    // Anchored: an unanchored /olamide/i also matches the several other acts
    // whose names contain it — "Olamide Badoo", "Tijani Olamide", "Yusuf
    // Olamide Olotu" all exist as separate Spotify artists.
    credit: /\bolamide\b/i,
    // Records where he is FEATURED, so a country chart prints the lead credit
    // and the matcher never sees him. Read off his own sweep (28 Aug 2026).
    aliases: [
      { artist: "Asake", title: "Amapiano", release: "Amapiano" },
      { artist: "Asake", title: "Omo Ope", release: "Omo Ope" },
      { artist: "CKay", title: "Trumpet", release: "Trumpet (Olamide & CKay)" },
      { artist: "Wizkid", title: "Kai!", release: "Kai!" },
    ],
    out: "liveCharts.olamide.ts",
    runOut: "runHistory.olamide.ts",
    covers: true,
    // A catalogue that runs back to 2011: most of it is long off the live
    // platform charts, so a sweep returning nothing is the truth, not a fault.
    mayChartNowhere: true,
  },
  "black-sherif": {
    slug: "black-sherif",
    name: "Black Sherif",
    source: "https://kworb.net/itunes/artist/blacksherif.html",
    // "Sherif" alone would catch "I Shot The Sheriff" and the 1980s Canadian
    // band SHERIFF, both of which appear in these registers. Full name only.
    credit: /\bblack sherif\b/i,
    aliases: [
      { artist: "Fireboy DML", title: "So It Goes", release: "So It Goes" },
      { artist: "Burna Boy", title: "Second Sermon", release: "Second Sermon (Remix)" },
    ],
    out: "liveCharts.black-sherif.ts",
    runOut: "runHistory.black-sherif.ts",
    covers: true,
    mayChartNowhere: true,
  },
  bnxn: {
    slug: "bnxn",
    name: "BNXN",
    source: "https://kworb.net/itunes/artist/bnxn.html",
    // He was BUJU until 2022, and his older records are still filed that way at
    // three separate certification registers. But /\bbuju\b/ cannot go here:
    // BUJU BANTON is a different artist who charts in his own right, and this
    // matcher runs against country charts where a bare "Buju" would take his
    // rows. A negative lookahead would exclude Banton but breaks the
    // word-anchor guard every matcher in this file is held to. So the matcher
    // is BNXN only, and any Buju-era credit that appears on a country chart is
    // caught through `aliases` instead, where the (artist, title) pair is
    // exact and cannot collide.
    credit: /\bbnxn\b/i,
    aliases: [
      { artist: "Pheelz", title: "Finesse", release: "Finesse" },
      { artist: "Wizkid", title: "Mood", release: "Mood (Wizkid ft. BNXN)" },
      { artist: "Ruger", title: "POE", release: "POE" },
      { artist: "Rema", title: "Fi Kan We Kan", release: "Fi Kan We Kan" },
      { artist: "Timaya", title: "Cold Outside", release: "Cold Outside" },
      { artist: "JAE5", title: "Propeller", release: "Propeller" },
    ],
    out: "liveCharts.bnxn.ts",
    runOut: "runHistory.bnxn.ts",
    covers: true,
    mayChartNowhere: true,
  },
  victony: {
    slug: "victony",
    name: "Victony",
    source: "https://kworb.net/itunes/artist/victony.html",
    // Distinctive enough to anchor on the whole name; still word-anchored,
    // because that is the rule that stopped a bare /rema/i putting Burkinabè
    // songs on someone else's board.
    credit: /\bvictony\b/i,
    // Records where he is FEATURED, so a country chart prints someone else's
    // name and the credit matcher never sees him. Co-billed records
    // ("Victony & Shallipopi", "ODUMODUBLVCK & Victony") are not listed —
    // his name is in those credits already and an alias would double-count.
    // Read off his own certification and chart sweeps (21 Aug 2026).
    aliases: [
      { artist: "Burna Boy", title: "Different Size", release: "Different Size" },
      { artist: "Mayorkun", title: "Holy Father", release: "Holy Father" },
      { artist: "Davido", title: "Holy Water", release: "Holy Water" },
      { artist: "Patoranking", title: "Babylon", release: "Babylon" },
    ],
    out: "liveCharts.victony.ts",
    runOut: "runHistory.victony.ts",
    covers: true,
  },
  "fireboy-dml": {
    slug: "fireboy-dml",
    name: "Fireboy DML",
    source: "https://kworb.net/itunes/artist/fireboydml.html",
    // Anchored on the full name, not a bare /fireboy/i: the short form is a
    // common enough word in track and artist names to sweep in strangers.
    credit: /\bfireboy\s*dml\b/i,
    // Featured credits only — "Fireboy DML & Asake", "Ayo Maff & Fireboy DML"
    // and the "Fireboy DML & Ed Sheeran" billing of Peru all carry his name
    // already and are matched by `credit`.
    // Read off his own certification and chart sweeps (21 Aug 2026).
    aliases: [
      { artist: "Cheque", title: "History", release: "History" },
      { artist: "Ladipoe", title: "Running", release: "Running" },
      { artist: "ODUMODUBLVCK", title: "FIREGUN", release: "FIREGUN" },
      { artist: "Lil Kesh", title: "Vex For U", release: "Vex For U" },
      { artist: "Peruzzi", title: "Southy Love", release: "Southy Love" },
      { artist: "Mayorkun", title: "Innocent", release: "Innocent" },
    ],
    out: "liveCharts.fireboy-dml.ts",
    runOut: "runHistory.fireboy-dml.ts",
    covers: true,
  },
  "seyi-vibez": {
    slug: "seyi-vibez",
    name: "Seyi Vibez",
    source: "https://kworb.net/itunes/artist/seyivibez.html",
    credit: /\bseyi\s*vibez\b/i,
    aliases: [

      // No register sweep has run for this artist yet, so there is no verified
      // credit list to build from. Lead credits are caught by the matcher above;
      // records they are FEATURED on are under-reported until the sweep lands.
    ],
    out: "liveCharts.seyi-vibez.ts",
    runOut: "runHistory.seyi-vibez.ts",
    covers: true,
  },

  // ── The eight swept for the board (24 Sep 2026) ───────────────────────────
  // Built ahead of their certification verify, so each carried `staged: true`
  // until its app/data/liveBoards.ts row landed. Oxlade, Tiwa Savage, Kizz
  // Daniel and Ruger joined the board on 25 Sep 2026 and are wired; Mr Eazi,
  // Yemi Alade, Stonebwoy and Sarkodie stay staged (owner, 25 Sep 2026). The aliases below were read on
  // 24 Sep 2026 off each artist's kworb page and the certification find rows,
  // and every one was checked against Deezer: the lead is billed exactly as
  // written here and the artist is in the track's contributor list.
  // All eight are thin on the live platform charts today (4 to 43 placements
  // on their kworb pages), so none of them is held to the 25-placement floor.
  oxlade: {
    slug: "oxlade",
    name: "Oxlade",
    source: "https://kworb.net/itunes/artist/oxlade.html",
    credit: /\boxlade\b/i,
    // kworb's artist page trims a title to its first words: "What If" is
    // "Yanga Chief, Oxlade & Thatohatsi - What If (Mgani) [Remix]" on iTunes
    // Zimbabwe, and "ON YOU" is "Timi Dre & Oxlade - ON YOU (iii) [III]" on
    // Shazam Uganda. The release keeps the page's name.
    aliases: [
      { artist: "Sarkodie", title: "Non Living Thing", release: "Non Living Thing" },
      { artist: "Ice Prince", title: "KOLO", release: "Kolo" },
      { artist: "Yanga Chief", title: "What If (Mgani) (Remix)", release: "What If" },
      { artist: "Timi Dre", title: "ON YOU (iii)", release: "ON YOU" },
    ],
    out: "liveCharts.oxlade.ts",
    runOut: "runHistory.oxlade.ts",
    covers: true,
    mayChartNowhere: true,
  },
  "tiwa-savage": {
    slug: "tiwa-savage",
    name: "Tiwa Savage",
    source: "https://kworb.net/itunes/artist/tiwasavage.html",
    // The full name, never a bare "savage": that also matches 21 Savage and
    // Savage Garden, both of whom chart in their own right.
    credit: /\btiwa\s*savage\b/i,
    // She is on the REMIXES of "Who Is Your Guy?" and "No Wahala", not the
    // originals, which are Spyro's and 1da Banton's alone. So those two
    // aliases name the remix title, and a chart row for either original
    // never reaches her board.
    aliases: [
      { artist: "Reekado Banks", title: "Like", release: "Like" },
      { artist: "Mavins", title: "Dorobucci", release: "Dorobucci" },
      { artist: "Spyro", title: "Who Is Your Guy? (Remix)", release: "Who Is Your Guy" },
      { artist: "1da Banton", title: "No Wahala (Remix)", release: "No Wahala" },
      { artist: "Ruger", title: "Toma Toma", release: "Toma Toma" },
      { artist: "ODUMODUBLVCK", title: "100 MILLION", release: "100 Million" },
      { artist: "Majeeed", title: "Gbese", release: "Gbese" },
      { artist: "Bella Shmurda", title: "NSV", release: "NSV" },
      { artist: "Korede Bello", title: "Romantic", release: "Romantic" },
    ],
    out: "liveCharts.tiwa-savage.ts",
    runOut: "runHistory.tiwa-savage.ts",
    covers: true,
    mayChartNowhere: true,
  },
  "kizz-daniel": {
    slug: "kizz-daniel",
    name: "Kizz Daniel",
    source: "https://kworb.net/itunes/artist/kizzdaniel.html",
    // Billed "Kiss Daniel" until 2018, and Deezer still files the early
    // catalogue under that name (Woju, Yeba, Laye), so both spellings.
    credit: /\bki(?:zz|ss)\s*daniel\b/i,
    aliases: [
      { artist: "Iyanya", title: "Like", release: "Like" },
      { artist: "Young Jonn", title: "Big Big Things", release: "Big Big Things" },
      { artist: "BNXN", title: "GWAGWALADA", release: "GWAGWALADA" },
      { artist: "FOLA", title: "lost", release: "lost" },
      { artist: "1da Banton", title: "No Wahala (Remix)", release: "No Wahala" },
      { artist: "Poco Lee", title: "Unleash", release: "Unleash" },
    ],
    // The artist page names it "Buga"; Deezer, and so its country charts, name
    // it "Buga (Lo Lo Lo)". One record.
    titleAliases: { "Buga (Lo Lo Lo)": "Buga" },
    out: "liveCharts.kizz-daniel.ts",
    runOut: "runHistory.kizz-daniel.ts",
    covers: true,
    minPlacements: 10,
  },
  "mr-eazi": {
    slug: "mr-eazi",
    name: "Mr Eazi",
    source: "https://kworb.net/itunes/artist/mreazi.html",
    // "Mr Eazi" and "Mr. Eazi" are both in circulation; Deezer has a profile
    // under each.
    credit: /\bmr\.?\s*eazi\b/i,
    // "Nobody" on his page is Kwesi Arthur's (Apple Music Ghana prints "Kwesi
    // Arthur - Nobody (feat. Mr Eazi)"), NOT DJ Neptune's "Nobody" with
    // Joeboy. Aliasing both would fold two different records into one row.
    aliases: [
      { artist: "Eugy", title: "Dance For Me (Eugy X Mr Eazi)", release: "Dance for Me" },
      { artist: "Kwesi Arthur", title: "Nobody", release: "Nobody" },
      { artist: "Gilli", title: "Can't Lose", release: "Can't Lose" },
      { artist: "J. Balvin", title: "COMO UN BEBÉ", release: "COMO UN BEBÉ" },
      { artist: "J. Balvin", title: "Arcoíris", release: "Arcoíris" },
      { artist: "Rudimental", title: "Let Me Live", release: "Let Me Live" },
    ],
    out: "liveCharts.mr-eazi.ts",
    runOut: "runHistory.mr-eazi.ts",
    covers: true,
    mayChartNowhere: true,
    staged: true,
  },
  "yemi-alade": {
    slug: "yemi-alade",
    name: "Yemi Alade",
    source: "https://kworb.net/itunes/artist/yemialade.html",
    credit: /\byemi\s*alade\b/i,
    // "ALL NIGHT" by Valmar also charts (Deezer and YouTube Hungary); the pair
    // below is Harmonize's record, which is the one she is on.
    aliases: [
      { artist: "Harmonize", title: "All Night", release: "All Night" },
    ],
    out: "liveCharts.yemi-alade.ts",
    runOut: "runHistory.yemi-alade.ts",
    covers: true,
    mayChartNowhere: true,
    staged: true,
  },
  ruger: {
    slug: "ruger",
    name: "Ruger",
    source: "https://kworb.net/itunes/artist/ruger.html",
    // Word-anchored at both ends like every matcher here, with the lookahead
    // at the FRONT so the guard still holds: Ruger Hauer is a Finnish hip-hop
    // group with chart history of its own, and a bare /\bruger\b/ takes it.
    credit: /\b(?!ruger\s+hauer\b)ruger\b/i,
    // POE, Ilashe, Bae Bae and Romeo Must Die are billed to Ruger on Deezer
    // (with BNXN), so the matcher catches them without an alias.
    aliases: [
      { artist: "Patoranking", title: "Shake That", release: "Shake That" },
      { artist: "DJ Neptune", title: "Bienvenue", release: "Bienvenue" },
    ],
    // The artist page trims it; Apple Music Chad prints "Muhammad Ali (Can't
    // Relate)". The remix is a separate record and is not folded.
    titleAliases: { "Muhammad Ali (Can't Relate)": "Muhammad Ali" },
    out: "liveCharts.ruger.ts",
    runOut: "runHistory.ruger.ts",
    covers: true,
    minPlacements: 10,
  },
  stonebwoy: {
    slug: "stonebwoy",
    name: "Stonebwoy",
    source: "https://kworb.net/itunes/artist/stonebwoy.html",
    // "Stone Bwoy" as well, but never "Stone Boy".
    credit: /\bstone\s*bwoy\b/i,
    // "Activate" is his own lead record (Davido's entry carries it as a
    // feature), so the matcher already has it. "Malaika" here is Seyi Vibez's;
    // Nandy's "Malaika", on YouTube Kenya and Tanzania, is a different song.
    aliases: [
      { artist: "Jux", title: "SEXY & BAD", release: "SEXY & BAD" },
      { artist: "Harmonize", title: "Beer", release: "Beer" },
      { artist: "AratheJay", title: "Talisman", release: "Talisman" },
      { artist: "DarkoVibes", title: "Stay Woke", release: "Stay Woke" },
      { artist: "Ogunskele", title: "Yearning for you", release: "Yearning for you" },
      { artist: "Yo Maps", title: "Charley (Bonus)", release: "Charley" },
      { artist: "Seyi Vibez", title: "Malaika", release: "Malaika" },
    ],
    out: "liveCharts.stonebwoy.ts",
    runOut: "runHistory.stonebwoy.ts",
    covers: true,
    minPlacements: 5,
    staged: true,
  },
  sarkodie: {
    slug: "sarkodie",
    name: "Sarkodie",
    source: "https://kworb.net/itunes/artist/sarkodie.html",
    credit: /\bsarkodie\b/i,
    aliases: [
      { artist: "Patoranking", title: "No Kissing Baby", release: "No Kissing Baby" },
      { artist: "KiDi", title: "IDK", release: "IDK" },
      { artist: "Jupitar", title: "Enemies", release: "Enemies" },
      { artist: "Olivetheboy", title: "Bend", release: "Bend" },
      { artist: "Rudeboy", title: "Blessed & Alive", release: "Blessed & Alive" },
    ],
    out: "liveCharts.sarkodie.ts",
    runOut: "runHistory.sarkodie.ts",
    covers: true,
    minPlacements: 10,
    staged: true,
  },
};

export const liveArtist = (slug) => {
  const a = LIVE_ARTISTS[slug];
  if (!a) {
    throw new Error(
      `unknown artist "${slug}" — known: ${Object.keys(LIVE_ARTISTS).join(", ")}`
    );
  }
  return a;
};


/** The registry without its staged artists: Burna Boy and every artist with a
 *  page on the board. Whatever reasons about "the site's artists" reads this,
 *  never LIVE_ARTISTS — the certification watcher above all. A staged artist
 *  has live-chart data but no board page and no plaque on the site, so a
 *  register row naming one is a lead for nothing, and the watcher's own
 *  integrity check (the registry equals the site) would refuse to run. */
export const BOARD_LIVE_ARTISTS = Object.fromEntries(Object.entries(LIVE_ARTISTS).filter(([, a]) => !a.staged));
/** The "is this file real" floor for one artist's build — read by the builder
 *  AND by tests/liveBoards.test.ts, so the two cannot drift. */
export const placementFloor = (artist) =>
  artist.mayChartNowhere ? 0 : artist.minPlacements ?? (artist.slug === "burna-boy" ? 50 : 25);

/** How much of the previous file may vanish before a build is a source failure
 *  rather than a quiet hour. Chart churn moves these files by a few per cent an
 *  hour, so a 40% fall on a big board is a half-scraped page. On a small board
 *  a percentage alone misfires: Yemi Alade going from 4 placements to 2 is a
 *  "50% drop" and ordinary. So a build is refused only when the fall is BOTH
 *  over 40% AND more than 10 placements. Returns the reason to refuse, or null. */
export const MAX_DROP = 0.4;
export const MIN_LOSS = 10;
export const dropRefusal = (before, after) => {
  if (!(before > 0)) return null;
  const drop = (before - after) / before;
  if (drop > MAX_DROP && before - after > MIN_LOSS) {
    return `${after} placements against ${before} last time — a ${Math.round(drop * 100)}% drop (${before - after} placements), over the ${Math.round(MAX_DROP * 100)}% and ${MIN_LOSS}-placement limits`;
  }
  return null;
};
