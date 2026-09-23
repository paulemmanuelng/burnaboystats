import { sameTitle } from "../lib/titleKey";

// Studio albums + verified tracklists (sources: Wikipedia, per album).
// Each album: title, year, label, and the STANDARD-EDITION tracklist — the
// rule, decided 17 Sep 2026: counts are the album as released, not the
// edition Spotify happens to link, so every album on the page is counted the
// same way. Where the linked Spotify edition differs, `editionNote` says so
// beside the count (both layouts and the tracklist dialog) rather than
// changing the count.
// `label` is the ℗ credit as the linked release prints it, in its order — Bad
// Habit is on the four Atlantic-era albums from Twice as Tall on; Outside's
// linked edition credits Spaceship Entertainment and Atlantic only.
// `cover` = official album artwork served by Spotify (displayed unmodified,
// attributed, and linked back to Spotify — see the Music page).
export interface AlbumEntry {
  title: string;
  spotify?: string;
  cover?: string;
  year: number;
  /**
   * The day the STANDARD edition first came out, ISO "YYYY-MM-DD" — the
   * original release, not a listening party, a deluxe or a re-upload (the
   * linked Spotify edition can carry a later date; `editionNote` flags those).
   * Set on every studio album, each read off at least two sources of
   * different kinds; the album page prints it. `year` must agree with it.
   */
  released?: string;
  label: string;
  tracks: string[];
  /** When the Spotify release the card links to is not the standard edition. */
  editionNote?: string;
}

// Release dates: every Atlantic-era album dropped at midnight in Lagos and
// London, which is still Thursday evening in the Americas — so Spotify, and
// Atlantic's US-keyed listings, print the day BEFORE the release for Twice as
// Tall, Love, Damini, I Told Them… and No Sign of Weakness. The dates here are
// the release day itself, each read off 7+ sources (platform, label or artist,
// chart body, press) and checked independently on 23 Sep 2026. Don't "correct"
// one from a Spotify page.
export const albums: AlbumEntry[] = [
  {
    title: "L.I.F.E",
    spotify: "https://open.spotify.com/album/7pqUKMWH6P7AJPIjUiphTS",
    cover: "https://i.scdn.co/image/ab67616d0000b273e3497b75e40ffc5bfffce8cf",
    year: 2013,
    // 12 Aug 2013: the original Aristokrat iTunes listing ("Released: Aug 12,
    // 2013"), the label's own date via BellaNaija, MTV Base that day. Deezer's
    // 17 Sep is a re-delivery; mid-September was the Accra launch shows.
    released: "2013-08-12",
    label: "Aristokrat Records",
    editionNote: "standard edition — the Spotify release is the 19-track deluxe edition",
    tracks: [
      "Intro: My Life", "No No No", "Say So",
      "Abeg Abeg (feat. 2face Idibia & Timaya)", "Na So E Suppose Be",
      "Run My Race", "Boom Boom Boom", "#Yawadey", "Ma Loda Ma Motto",
      "Tonight", "Like to Party", "Smooth Sailing",
      "Don't Run (feat. Reminisce & Olamide)", "Jah's Love Is True (feat. Wizkid)",
      "Outro: Remember Me",
    ],
  },
  {
    title: "On a Spaceship",
    spotify: "https://open.spotify.com/album/6NW4thIIMVcb6Wedxqu6ev",
    cover: "https://i.scdn.co/image/ab67616d0000b2737e09ba6174aec9958461aa44",
    year: 2015,
    // 25 Nov 2015: announced for that day (NotJustOk, 7 Nov), UK iTunes
    // (captured Apr 2016) "Released: 25 November 2015", The FADER that day.
    // The linked Spotify page says 13 Mar 2015 — a re-delivery's metadata.
    released: "2015-11-25",
    label: "Spaceship",
    editionNote: "standard edition — the Spotify release adds “Soke” as a bonus track",
    tracks: [
      "Intro", "Oluwa Burna", "The Realest", "Mine Tonight (feat. Nyanda)",
      "Ring Ring", "Single (feat. Wizkid)", "Sampudi", "As E Be (skit)",
      "Rizzla", "Jealousy", "Duro Ni Be (feat. Phyno)", "Another One",
      "Before (feat. Flavour)", "Trance", "On a Very Good Day (feat. Wande Coal)",
      "Birthday (feat. AKA, Kid X & Da L.E.S)", "Gone", "Mi O Ni Gba",
      "If People Must Die",
    ],
  },
  {
    title: "Outside",
    spotify: "https://open.spotify.com/album/5SCK5p3Rqgg0FwTmAurrcp",
    cover: "https://i.scdn.co/image/ab67616d0000b2732135956e3ca0a183db8ac395",
    year: 2018,
    released: "2018-01-26",
    label: "Atlantic · Spaceship",
    tracks: [
      "More Life", "Ph City Vibration", "Koni Baje", "Sekkle Down (feat. J Hus)",
      "Where I'm From", "Heaven's Gate (feat. Lily Allen)", "Ye", "Giddem",
      "Streets of Africa", "Rock Your Body", "Devil in California", "Calm Down",
      "Outside (feat. Mabel)",
    ],
  },
  {
    title: "African Giant",
    spotify: "https://open.spotify.com/album/79lrrUvUyIuOD12b5taQVP",
    cover: "https://i.scdn.co/image/ab67616d0000b273a9c13c1a5538f87146ac8ca5",
    year: 2019,
    // Friday 26 Jul 2019, Atlantic's own release. The linked Spotify page says
    // the 24th, when the album was still in pre-order.
    released: "2019-07-26",
    // Spotify's © block (read 18 Sep 2026): Atlantic / Spaceship / Bad Habit.
    label: "Atlantic · Bad Habit · Spaceship",
    tracks: [
      "African Giant", "Anybody", "Wetin Man Go Do", "Dangote",
      "Gum Body (feat. Jorja Smith)", "Killin Dem (with Zlatan)", "Omo",
      "Secret (feat. Jeremih & Serani)", "Collateral Damage",
      "Another Story (feat. M.anifest)", "Pull Up", "Blak Ryno (skit)", "Destiny",
      "Different (feat. Damian Marley & Angélique Kidjo)", "Gbona", "On the Low",
      "Show & Tell (feat. Future)", "This Side (feat. YG)", "Spiritual",
    ],
  },
  {
    title: "Twice as Tall",
    spotify: "https://open.spotify.com/album/218CJKDCszsQQj7Amk7vIu",
    cover: "https://i.scdn.co/image/ab67616d0000b2733478524ed62d216a705c2424",
    year: 2020,
    released: "2020-08-14",
    label: "Atlantic · Bad Habit · Spaceship",
    tracks: [
      "Level Up (feat. Youssou N'Dour)", "Alarm Clock", "Way Too Big", "Bebo",
      "Wonderful", "Onyeka", "Naughty by Nature (feat. Naughty by Nature)",
      "Comma", "No Fit Vex", "23", "Time Flies (feat. Sauti Sol)",
      "Monsters You Made (feat. Chris Martin)", "Wetin Dey Sup",
      "Real Life (feat. Stormzy)", "Bank On It",
    ],
  },
  {
    title: "Love, Damini",
    spotify: "https://open.spotify.com/album/6kgDkAupBVRSqbJPUaTJwQ",
    cover: "https://i.scdn.co/image/ab67616d0000b273d98e997eaad5f503b9e1f2f2",
    year: 2022,
    released: "2022-07-08",
    label: "Atlantic · Bad Habit · Spaceship",
    tracks: [
      "Glory (feat. Ladysmith Black Mambazo)", "Science", "Cloak & Dagger (feat. J Hus)",
      // Order read at Spotify (embed 6kgDkAupBVRSqbJPUaTJwQ), Apple (1749165462)
      // and Deezer (333197317) on 18 Sep 2026 — Wikipedia's listing puts Dirty
      // Secrets at 6 and is the outlier. Victony is spelled as he spells it.
      "Kilometre", "Jagele", "Whiskey", "Last Last", "Different Size (feat. Victony)",
      "It's Plenty", "Dirty Secrets", "Toni-Ann Singh (feat. Popcaan)",
      "Solid (feat. Blxst & Kehlani)", "For My Hand (feat. Ed Sheeran)",
      "Rollercoaster (feat. J Balvin)", "Vanilla", "Common Person",
      "Wild Dreams (feat. Khalid)", "How Bad Could It Be",
      "Love, Damini (feat. Ladysmith Black Mambazo)",
    ],
  },
  {
    title: "I Told Them…",
    spotify: "https://open.spotify.com/album/1JzjwUKkPsdHg1SQ7qa5hc",
    cover: "https://i.scdn.co/image/ab67616d0000b273c361f3720bafc0da36f14d96",
    year: 2023,
    released: "2023-08-25",
    // Spotify's © block (read 18 Sep 2026): Atlantic / Spaceship / Bad Habit.
    label: "Atlantic · Bad Habit · Spaceship",
    tracks: [
      "I Told Them (feat. GZA)", "Normal", "On Form",
      "Sittin' on Top of the World (feat. 21 Savage)", "Tested, Approved & Trusted",
      "Cheat on Me (feat. Dave)", "Virgil", "Big 7", "Dey Play", "City Boys",
      "Giza (feat. Seyi Vibez)", "12 Jewels (feat. RZA)", "If I'm Lying",
      "Thanks (feat. J. Cole)", "Talibans II (with Byron Messia)",
    ],
  },
  {
    title: "No Sign of Weakness",
    spotify: "https://open.spotify.com/album/35EMM8QwKJ2qXmoUJnUSNf",
    cover: "https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239",
    year: 2025,
    // Friday 11 Jul 2025: Atlantic's release is datelined that day ("today's
    // release"); the UK and US charts count its first week from it.
    released: "2025-07-11",
    label: "Atlantic · Bad Habit · Spaceship",
    tracks: [
      "No Panic", "No Sign of Weakness", "Buy You Life", "Love",
      "TaTaTa (feat. Travis Scott)", "Come Gimme", "Dem Dey", "Sweet Love",
      "28 Grams", "Kabiyesi", "Empty Chairs (feat. Mick Jagger)", "Update",
      "Pardon (with Stromae)", "Bundle by Bundle", "Change Your Mind (feat. Shaboozey)",
      "Born Winner",
    ],
  },
];

// Extended plays (EPs), with verified tracklists.
export const eps: AlbumEntry[] = [
  {
    title: "Redemption",
    spotify: "https://open.spotify.com/album/50qNx4v7MKypMx5wGynQ8j",
    cover: "https://i.scdn.co/image/ab67616d0000b2739c6526408de3ed6a97d0f0db",
    year: 2016,
    label: "Spaceship",
    // Release order, as Spotify's own tracklist prints it (re-read 17 Sep 2026):
    // the file carried these seven in a scrambled order for months, which is how
    // /music/boshe-nlo came to call track three "the closer".
    tracks: [
      "Pree Me", "Fa So La Ti Do", "Boshe Nlo", "Mary Jane",
      "Body to Body", "Plenty Song", "We On",
    ],
  },
  {
    title: "Steel & Copper",
    spotify: "https://open.spotify.com/album/7z1KSudQMWVOFpSjhxL6Qm",
    cover: "https://i.scdn.co/image/ab67616d0000b27376cd360b4344922af3685208",
    year: 2019,
    label: "with DJDS · Spaceship",
    tracks: ["34", "Innocent Man", "Darko", "Thuggin"],
  },
];

// Compilations — early-era collections released before the studio catalogue.
export const compilations: AlbumEntry[] = [
  {
    title: "Best of Burn Series, Vol. 1",
    spotify: "https://open.spotify.com/album/1KO52a7CF7exVydwrwzNPN",
    cover: "https://i.scdn.co/image/ab67616d0000b2739c2cb75c521fe1c48f74a3c1",
    year: 2011,
    label: "Aristokrat Records",
    tracks: [
      "Don't Cross That Line", "I Don't Care", "Freedom Freestyle",
      "Smoke (feat. Onosz)", "Firewood", "Afrobeat Freestyle", "Kung Fu Loving",
      "Ice Cream Man", "Ph - Lagos - London - Paris (feat. P.R.E.)",
      "Trumpet (feat. Davido)", "Summer Time", "Friend Like Me (feat. Shank)",
      "U Madt", "Bad Boy (feat. Korkormikor)", "Wickedest Luv (feat. LOS)",
      "Fulfilling All Righteousness (feat. Sauce Kid)", "Cowboy Music",
    ],
  },
];

/**
 * Whether a release title names one of the EPs. The live-charts feed only
 * distinguishes "song" from "album", so anything album-shaped checks here to
 * be labelled EP rather than Album — Redemption and Steel & Copper are EPs.
 */
export const isEp = (title: string) =>
  eps.some((e) => e.title.toLowerCase() === title.trim().toLowerCase());

/**
 * The release year of an album, EP or compilation, looked up by title.
 *
 * A song page's kicker names the parent release and has to date THAT, not the
 * single: "On the Low" is a 16 Nov 2018 single on 2019's African Giant, and
 * until 17 Sep 2026 the kicker printed "African Giant · " + the song's year.
 * songs.ts writes EPs as "Redemption (EP)"; the suffix is dropped for the match.
 * Undefined for a release this file does not hold ("Single", a soundtrack).
 */
export const albumYearByTitle = (title: string): number | undefined => {
  const key = title.replace(/\s*\(EP\)\s*$/i, "");
  return [...albums, ...eps, ...compilations].find((a) => sameTitle(a.title, key))?.year;
};

/** "2019-07-26" → "26 July 2019", the site's date style. Noon UTC, so no
 *  viewer's timezone can move it a day. */
export const releaseDateLabel = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
