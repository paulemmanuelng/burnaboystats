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
    credit: /burna\s*boy/i,
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
    credit: /wiz\s*kid/i,
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
    // No run history yet: that file is the memory behind Burna Boy's own
    // trend charts, and nothing on the board plots a trend line.
    runOut: null,
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
