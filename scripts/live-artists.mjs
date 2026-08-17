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
    aliases: [

      // No register sweep has run for this artist yet, so there is no verified
      // credit list to build from. Lead credits are caught by the matcher above;
      // records they are FEATURED on are under-reported until the sweep lands.
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
