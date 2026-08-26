// Search index for the site. Two halves: the hand-written page docs below, and
// searchIndex.generated.ts, which carries the site's own RECORDS — releases,
// award bodies, countries.
//
// This file still imports no datasets. That rule was about bundle size, and it
// holds: the generated half is names, paths and keywords, no figures, 5KB
// gzipped and cached once for the whole site — where importing the datasets
// would ship megabytes and passing them as props would bill every page, since
// the palette is in the header everywhere.
//
// It exists because this file alone could find pages and never records. Against
// the real data, 63 of 85 certified titles returned nothing, "Location" among
// them, as did all 46 award bodies and every charting country — the exact four
// categories the search box's own placeholder invites.
//
// Each doc carries extra `keywords` so a query like "grammy", "net worth" or
// "ferrari" lands on the right page even when the word isn't in the title.

export type SearchDoc = {
  title: string;
  path: string;
  section: string;
  description: string;
  keywords: string[];
  /** Set on docs built from the datasets (searchIndex.generated.ts). They rank
   *  below the hand-written page docs on anything short of an exact title
   *  match — a curated keyword is somebody deliberately mapping a word to a
   *  page, and that should beat a record whose title merely starts with it.
   *  Without this, "billboard" returned the Billboard Music Awards instead of
   *  the chart records page. */
  generated?: true;
};

import { generatedDocs } from "./searchIndex.generated";

export const searchIndex: SearchDoc[] = [
  {
    title: "Home",
    path: "/",
    section: "Site",
    description: "The unofficial stats home of Burna Boy — every record in one place.",
    keywords: ["home", "start", "overview", "burna boy stats"],
  },
  {
    title: "The Spotify Correction",
    path: "/analysis/spotify-unmerge",
    section: "Analysis",
    description:
      "Did Burna Boy lose Spotify streams to bots? No — two remixes were un-merged and ~309M streams moved to the original recordings.",
    keywords: [
      "bot streams", "bots", "fake streams", "stream farming", "fraud",
      "spotify deduction", "streams removed", "streams deducted", "lost streams",
      "unmerge", "un-merge", "merged streams", "february 2026", "enjoy yourself",
      "finders keepers", "pop smoke", "chartmasters", "9.2 billion", "309 million",
    ],
  },
  {
    title: "Career Timeline",
    path: "/timeline",
    section: "Site",
    description: "Burna Boy's career year by year — from Port Harcourt to the World Cup Final, every milestone dated.",
    keywords: ["timeline", "career", "history", "biography", "story", "milestones", "year by year", "journey"],
  },
  {
    title: "L.I.F.E",
    path: "/music/albums/life",
    section: "Album",
    description: "Burna Boy's 2013 debut album — “Like to Party”, “Tonight”, and Album of the Year at the 2015 NEA.",
    keywords: ["life", "l.i.f.e", "album", "debut", "2013", "like to party", "tonight", "run my race", "aristokrat", "leaving an impact for eternity"],
  },
  {
    title: "On a Spaceship",
    path: "/music/albums/on-a-spaceship",
    section: "Album",
    description: "Burna Boy's self-released 2015 album — 19 tracks with Wizkid, Phyno and AKA, home of “Rizzla”.",
    keywords: ["on a spaceship", "album", "2015", "rizzla", "spaceship", "wizkid", "phyno"],
  },
  {
    title: "Outside",
    path: "/music/albums/outside",
    section: "Album",
    description: "Home of “Ye” — the 2018 album, his first under Atlantic, with J Hus, Lily Allen and Mabel.",
    keywords: ["outside", "album", "2018", "ye", "j hus", "lily allen", "mabel", "atlantic"],
  },
  {
    title: "African Giant",
    path: "/music/albums/african-giant",
    section: "Album",
    description: "The Grammy-nominated 2019 statement — Platinum in France, Gold in six more countries.",
    keywords: ["african giant", "album", "2019", "coachella", "damian marley", "angelique kidjo", "future", "jorja smith", "anybody", "on the low"],
  },
  {
    title: "Love, Damini",
    path: "/music/albums/love-damini",
    section: "Album",
    description: "The 2022 album — UK and Dutch No. 2, 5× Platinum in Nigeria, home of “Last Last”.",
    keywords: ["love damini", "album", "2022", "last last", "for my hand", "ed sheeran", "j balvin", "khalid", "damini"],
  },
  {
    title: "I Told Them…",
    path: "/music/albums/i-told-them",
    section: "Album",
    description: "The 2023 UK No. 1 — the first Afrobeats album to top the British chart, with the record $30.46M tour.",
    keywords: ["i told them", "album", "2023", "uk no 1", "city boys", "sittin on top of the world", "21 savage", "j cole", "dave", "gza", "rza"],
  },
  {
    title: "No Sign of Weakness",
    path: "/music/albums/no-sign-of-weakness",
    section: "Album",
    description: "The 2025 album — No. 1 in Nigeria, with Travis Scott, Mick Jagger and Shaboozey; the springboard for “Dai Dai”.",
    keywords: ["no sign of weakness", "nsow", "album", "2025", "tatata", "travis scott", "mick jagger", "shaboozey", "empty chairs"],
  },
  {
    title: "Twice as Tall",
    path: "/music/albums/twice-as-tall",
    section: "Album",
    description: "Burna Boy's Grammy-winning 2020 album — charts in 12 countries, features from Stormzy, Chris Martin and Youssou N'Dour.",
    keywords: ["twice as tall", "album", "best global music album", "2020", "level up", "monsters you made", "real life", "wonderful", "23"],
  },
  {
    title: "Last Last",
    path: "/music/last-last",
    section: "Song",
    description: "Burna Boy's “Last Last” — No. 1 in South Africa, Diamond in France, 12 certifications.",
    keywords: ["last last", "song", "love damini", "toni braxton", "he wasn't man enough", "igbo and shayo", "heartbreak", "certifications", "charts"],
  },
  {
    title: "Ye",
    path: "/music/ye",
    section: "Song",
    description: "Burna Boy's “Ye” — the 2018 Outside anthem that carried him worldwide, certified Platinum across seven countries.",
    keywords: ["ye", "song", "outside", "platinum", "2018", "i no wan die", "afro fusion anthem"],
  },
  {
    title: "On the Low",
    path: "/music/on-the-low",
    section: "Song",
    description: "Burna Boy's “On the Low” — certified Diamond in France, from African Giant.",
    keywords: ["on the low", "song", "african giant", "diamond", "france", "snep", "love song"],
  },
  {
    title: "WGFT",
    path: "/music/wgft",
    section: "Song",
    description: "Gunna ft. Burna Boy “WGFT” — Burna's highest-ever Billboard Hot 100 peak at No. 16.",
    keywords: ["wgft", "gunna", "song", "billboard hot 100", "the last wun", "no 16", "highest us peak"],
  },
  {
    title: "City Boys",
    path: "/music/city-boys",
    section: "Song",
    description: "Burna Boy's “City Boys” from I Told Them… — No. 2 in Nigeria and 4× Platinum at home.",
    keywords: ["city boys", "song", "i told them", "2023", "nigeria", "platinum", "anthem"],
  },
  {
    title: "Jerusalema (Remix)",
    path: "/music/jerusalema",
    section: "Song",
    description: "Master KG, Nomcebo & Burna Boy “Jerusalema” remix — No. 1 in six countries, Diamond in France.",
    keywords: ["jerusalema", "remix", "master kg", "nomcebo", "song", "dance challenge", "diamond", "2020", "south africa"],
  },
  {
    title: "Alone",
    path: "/music/alone",
    section: "Song",
    description: "Burna Boy's “Alone” from Black Panther: Wakanda Forever — No. 19 France, No. 28 UK, No. 1 UK Afrobeats.",
    keywords: ["alone", "wakanda forever", "black panther", "marvel", "soundtrack", "2022", "song", "afrobeats chart"],
  },
  {
    title: "23",
    path: "/music/23",
    section: "Song",
    description: "Burna Boy's “23” from the Grammy-winning Twice as Tall — named for Michael Jordan's number.",
    keywords: ["23", "twice as tall", "michael jordan", "2020", "song", "platinum"],
  },
  {
    title: "TaTaTa",
    path: "/music/tatata",
    section: "Song",
    description: "Burna Boy & Travis Scott “TaTaTa” from No Sign of Weakness (2025).",
    keywords: ["tatata", "travis scott", "no sign of weakness", "2025", "song", "collaboration"],
  },
  {
    title: "Rizzla",
    path: "/music/rizzla",
    section: "Song",
    description: "Burna Boy's “Rizzla” from On a Spaceship (2015) — the early Nigerian era.",
    keywords: ["rizzla", "on a spaceship", "2015", "song", "early", "pre-outside"],
  },
  {
    title: "Boshe Nlo",
    path: "/music/boshe-nlo",
    section: "Song",
    description: "Burna Boy's “Boshe Nlo” from the 2016 Redemption EP.",
    keywords: ["boshe nlo", "redemption", "ep", "2016", "song"],
  },
  {
    title: "Darko",
    path: "/music/darko",
    section: "Song",
    description: "Burna Boy & DJDS “Darko” from the Steel & Copper EP (2019).",
    keywords: ["darko", "steel and copper", "djds", "ep", "2019", "song"],
  },
  {
    title: "Like to Party",
    path: "/music/like-to-party",
    section: "Song",
    description: "Burna Boy's breakout single (2012) and the lead from his debut album L.I.F.E.",
    keywords: ["like to party", "l.i.f.e", "life", "debut", "2012", "first hit", "breakout", "song"],
  },
  {
    title: "Smoke",
    path: "/music/smoke",
    section: "Song",
    description: "Burna Boy's “Smoke” (feat. Onosz) from the 2011 Aristokrat compilation — his earliest release.",
    keywords: ["smoke", "onosz", "aristokrat", "best of burn series", "2011", "earliest", "first release", "song"],
  },
  {
    title: "Discography",
    path: "/music",
    section: "Music",
    description: "Every album, EP and single — the full Burna Boy discography.",
    keywords: ["music", "albums", "eps", "singles", "songs", "tracklist", "african giant", "twice as tall", "love damini", "i told them", "no sign of weakness"],
  },
  {
    title: "Certifications",
    path: "/certifications",
    section: "Music",
    description: "Every gold, platinum and diamond certification across the world.",
    keywords: ["certifications", "riaa", "bpi", "gold", "platinum", "diamond", "silver", "plaques"],
  },
  {
    title: "Career Records",
    path: "/records",
    section: "Records",
    description: "Charts, awards, tours and firsts — the record hub.",
    keywords: ["records", "career", "milestones", "achievements"],
  },
  {
    title: "Chart Records",
    path: "/records/charts",
    section: "Records",
    description: "Billboard Hot 100, Global 200 and worldwide chart peaks and No. 1s.",
    keywords: ["charts", "billboard", "hot 100", "global 200", "peak", "number one", "no 1", "official charts", "snep", "dai dai"],
  },
  {
    title: "Awards & Nominations",
    path: "/records/awards",
    section: "Records",
    description: "Every Grammy, BET, BRIT, MOBO and MTV win and nomination.",
    keywords: ["awards", "grammy", "grammys", "bet", "brit", "mobo", "mtv", "naacp", "soul train", "nominations", "wins", "honours"],
  },
  {
    title: "Tours & Live",
    path: "/records/tours",
    section: "Records",
    description: "World tours, sold-out arenas and the biggest African touring runs.",
    keywords: ["tours", "concerts", "live", "shows", "arena", "stadium", "world tour"],
  },
  {
    title: "Festivals & Shows",
    path: "/records/tours/festivals",
    section: "Records",
    description: "Afro Nation, Coachella and every big-stage festival billing.",
    keywords: ["festivals", "afro nation", "coachella", "glastonbury", "north sea jazz", "headline"],
  },
  {
    title: "Highest Revenue Per Show",
    path: "/records/tours/revenue",
    section: "Records",
    description: "Box-office and highest-grossing concert figures.",
    keywords: ["revenue", "box office", "grossing", "highest grossing", "boxscore", "earnings", "tour money"],
  },
  {
    title: "Where He's Performed",
    path: "/records/tours/map",
    section: "Records",
    description: "An interactive world map of every country Burna Boy has performed in.",
    keywords: ["map", "world map", "countries", "performed", "cities", "where"],
  },
  {
    title: "Car Collection",
    path: "/records/cars",
    section: "Records",
    description: "Every car in Burna Boy's collection and what it's worth.",
    keywords: ["cars", "car collection", "ferrari", "lamborghini", "rolls royce", "cullinan", "bentley", "mclaren", "garage", "net worth", "wealth", "lifestyle"],
  },
  {
    title: "Firsts & Records",
    path: "/records/firsts",
    section: "Records",
    description: "Historic firsts — the milestones no African artist reached before.",
    keywords: ["firsts", "first african artist", "history", "milestone", "record breaking"],
  },
  {
    title: "Africa's Biggest",
    path: "/records/africas-biggest",
    section: "Records",
    description: "Africa's biggest artists by Billboard and Spotify — Burna Boy in context.",
    keywords: ["africas biggest", "wizkid", "tems", "rema", "tyla", "asake", "davido", "afrobeats", "most streamed african artist", "compare"],
  },
  {
    title: "By the Numbers",
    path: "/records/by-the-numbers",
    section: "Records",
    description: "The whole career distilled into headline stats.",
    keywords: ["by the numbers", "stats", "statistics", "totals", "at a glance"],
  },
  {
    title: "Stat Cards",
    path: "/share",
    section: "Records",
    description: "Pick a Burna Boy record and download a shareable 1080×1080 card.",
    keywords: ["stat card", "share", "download", "image", "instagram", "story", "wallpaper", "receiptify", "generator", "poster", "card maker"],
  },
  {
    title: "Visualized",
    path: "/records/visualized",
    section: "Records",
    description: "Charts and graphs of the data behind the records.",
    keywords: ["visualized", "visualised", "data", "charts", "graphs", "infographic", "visualization"],
  },
  {
    title: "Dai Dai — the World Cup Anthem",
    path: "/dai-dai",
    section: "Records",
    description: "Shakira & Burna Boy's World Cup anthem — No.1 worldwide, and live at the 2026 Final halftime show.",
    keywords: ["dai dai", "dai dai story", "world cup song", "world cup halftime show", "world cup halftime 2026", "who is performing at the world cup halftime", "shakira burna boy halftime", "world cup final performers", "shakira burna boy", "fifa world cup 2026", "biggest song in the world", "global 200"],
  },
  {
    title: "Latest Updates",
    path: "/updates",
    section: "Site",
    description: "A running log of real Burna Boy news as it happens.",
    keywords: ["updates", "news", "latest", "new", "changelog", "recent"],
  },
  {
    title: "FAQ",
    path: "/faq",
    section: "Site",
    description: "Burna Boy's real name, net worth, Grammys and more — answered.",
    keywords: ["faq", "questions", "real name", "damini ogulu", "net worth", "how many grammys", "age", "born"],
  },
  {
    title: "Live Charts",
    path: "/live-charts",
    section: "Records",
    description: "Where every Burna Boy release is charting right now on Spotify, Apple Music, iTunes, Deezer and Shazam.",
    keywords: ["live charts", "charting now", "right now", "apple music", "itunes", "shazam", "deezer", "how many countries", "currently charting"],
  },
  {
    title: "Chart Analysis",
    path: "/analysis",
    section: "Site",
    description: "What Burna Boy's chart and certification record actually shows — four data-led findings.",
    keywords: ["analysis", "what the numbers say", "insights", "findings", "uk vs us", "diamond france", "breakdown", "interpretation"],
  },
  {
    title: "Open Data API",
    path: "/api",
    section: "Site",
    description: "Free JSON access to every verified chart entry, certification and streaming figure.",
    keywords: ["api", "json", "open data", "dataset", "developers", "download data", "raw data", "csv"],
  },
  {
    title: "Methodology & Sources",
    path: "/methodology",
    section: "Site",
    description: "How every figure is sourced, verified and kept current.",
    keywords: ["methodology", "sources", "how verified", "accuracy", "corrections", "trust"],
  },
  {
    title: "Dai Dai — en español",
    path: "/dai-dai/es",
    section: "Site",
    description: "La historia de “Dai Dai”, el himno del Mundial 2026, en español.",
    keywords: ["dai dai español", "espanol", "spanish", "mundial", "cancion del mundial", "himno"],
  },
  {
    title: "About the Curator",
    path: "/curator",
    section: "Site",
    description: "Who researches, verifies and maintains Burna Boy Stats.",
    keywords: ["curator", "about", "who runs", "ukpaka emmanuel", "paul emmanuel", "owner"],
  },
  {
    title: "Press & Data Kit",
    path: "/press",
    section: "Site",
    description: "Verified figures free to use with attribution — citations, API, stat cards.",
    keywords: ["press", "data kit", "cite", "citation", "attribution", "media", "journalists"],
  },
  {
    title: "About Burna Boy",
    path: "/about",
    section: "Site",
    description: "Biography and career timeline of the African Giant.",
    keywords: ["about", "biography", "bio", "damini ebunoluwa ogulu", "port harcourt", "timeline", "born"],
  },
  {
    title: "Contact",
    path: "/contact",
    section: "Site",
    description: "Report a correction or get in touch.",
    keywords: ["contact", "email", "correction", "report", "get in touch"],
  },
  // ── The Afrobeats Board ───────────────────────────────────────────────
  // Appended, not prepended: score() ties break on array order, so a generic
  // query like "billboard" or "certifications" must keep landing on Burna Boy's
  // own pages. These docs earn their traffic on artist-qualified terms instead.
  {
    title: "The Afrobeats Board",
    path: "/afrobeats",
    section: "Afrobeats",
    description: "Wizkid, Davido, Rema, Tems, Tyla and Ayra Starr counted by the same rules as Burna Boy — every plaque read at source.",
    keywords: ["afrobeats board", "afrobeats artists", "compare afrobeats", "wizkid", "davido", "rema", "tems", "tyla", "ayra starr", "asake", "omah lay", "seyi vibez", "most certified afrobeats artist", "who has more certifications"],
  },
  {
    title: "Wizkid",
    path: "/afrobeats/wizkid",
    section: "Afrobeats",
    description: "Wizkid's 155 certifications across 21 countries and his official chart peaks, verified at source.",
    keywords: ["wizkid", "wizzy", "star boy", "starboy", "ayodeji balogun", "big wiz", "made in lagos", "wizkid certifications", "wizkid plaques", "wizkid awards"],
  },
  {
    title: "Wizkid — Chart History",
    path: "/afrobeats/wizkid/charts",
    section: "Afrobeats",
    description: "Every Wizkid official chart entry and peak — 154 entries and 24 No. 1 placements, country by country.",
    keywords: ["wizkid", "wizzy", "star boy", "wizkid charts", "wizkid chart history", "wizkid chart peaks", "wizkid number ones"],
  },
  {
    title: "Davido",
    path: "/afrobeats/davido",
    section: "Afrobeats",
    description: "Davido's 91 certifications across 9 countries and his official chart peaks, verified at source.",
    keywords: ["davido", "obo", "david adeleke", "30bg", "timeless", "davido certifications", "davido plaques", "davido awards"],
  },
  {
    title: "Davido — Chart History",
    path: "/afrobeats/davido/charts",
    section: "Afrobeats",
    description: "Every Davido official chart entry and peak — 66 entries and 17 No. 1 placements, country by country.",
    keywords: ["davido", "obo", "david adeleke", "davido charts", "davido chart history", "davido chart peaks", "davido number ones"],
  },
  {
    title: "Rema",
    path: "/afrobeats/rema",
    section: "Afrobeats",
    description: "Rema's 80 certifications across 20 countries and his official chart peaks, verified at source.",
    keywords: ["rema", "calm down", "divine ikubor", "heis", "ravage", "rema certifications", "rema plaques", "rema awards"],
  },
  {
    title: "Rema — Chart History",
    path: "/afrobeats/rema/charts",
    section: "Afrobeats",
    description: "Every Rema official chart entry and peak — 118 entries and 17 No. 1 placements, country by country.",
    keywords: ["rema", "calm down", "divine ikubor", "rema charts", "rema chart history", "rema chart peaks", "rema number ones"],
  },
  {
    title: "Tems",
    path: "/afrobeats/tems",
    section: "Afrobeats",
    description: "Tems's 70 certifications across 19 countries and her official chart peaks, verified at source.",
    keywords: ["tems", "temilade openiyi", "born in the wild", "free mind", "tems certifications", "tems plaques", "tems awards"],
  },
  {
    title: "Tems — Chart History",
    path: "/afrobeats/tems/charts",
    section: "Afrobeats",
    description: "Every Tems official chart entry and peak — 124 entries and 7 No. 1 placements, country by country.",
    keywords: ["tems", "temilade openiyi", "born in the wild", "tems charts", "tems chart history", "tems chart peaks", "tems number ones"],
  },
  {
    title: "Tyla",
    path: "/afrobeats/tyla",
    section: "Afrobeats",
    description: "Tyla's 62 certifications across 23 countries and her official chart peaks, verified at source.",
    keywords: ["tyla", "water", "amapiano", "tyla seethal", "push 2 start", "tyla certifications", "tyla plaques", "tyla awards"],
  },
  {
    title: "Tyla — Chart History",
    path: "/afrobeats/tyla/charts",
    section: "Afrobeats",
    description: "Every Tyla official chart entry and peak — 174 entries and 3 No. 1 placements, country by country.",
    keywords: ["tyla", "water", "amapiano", "tyla charts", "tyla chart history", "tyla chart peaks", "tyla number ones"],
  },
  {
    title: "Ayra Starr",
    path: "/afrobeats/ayra-starr",
    section: "Afrobeats",
    description: "Ayra Starr's 41 certifications across 12 countries and her official chart peaks, verified at source.",
    keywords: ["ayra starr", "rush", "sability", "commas", "oyinkansola", "ayra starr certifications", "ayra starr plaques", "ayra starr awards"],
  },
  {
    title: "Ayra Starr — Chart History",
    path: "/afrobeats/ayra-starr/charts",
    section: "Afrobeats",
    description: "Every Ayra Starr official chart entry and peak — 78 entries and 10 No. 1 placements, country by country.",
    keywords: ["ayra starr", "rush", "sability", "ayra starr charts", "ayra starr chart history", "ayra starr chart peaks", "ayra starr number ones"],
  },
  {
    title: "Asake",
    path: "/afrobeats/asake",
    section: "Afrobeats",
    description: "Asake's 79 certifications across 3 countries and 123 official chart entries, verified at source.",
    keywords: ["asake", "ahmed ololade", "mr money", "lonely at the top", "asake certifications"],
  },
  {
    title: "Omah Lay",
    path: "/afrobeats/omah-lay",
    section: "Afrobeats",
    description: "Omah Lay's 61 certifications across 9 countries and 70 official chart entries, verified at source.",
    keywords: ["omah lay", "understand", "soso", "boy alone", "omah lay certifications"],
  },
  {
    title: "Seyi Vibez",
    path: "/afrobeats/seyi-vibez",
    section: "Afrobeats",
    description: "Seyi Vibez's 103 certifications across 1 country and 114 official chart entries, verified at source.",
    keywords: ["seyi vibez", "loseyi professor", "memory card", "seyi vibez certifications"],
  },
  {
    title: "Wizkid — Live Charts",
    path: "/afrobeats/wizkid/live",
    section: "Afrobeats",
    description: "Where every Wizkid release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["wizkid live charts", "wizkid charting now", "wizkid today"],
  },
  {
    title: "Davido — Live Charts",
    path: "/afrobeats/davido/live",
    section: "Afrobeats",
    description: "Where every Davido release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["davido live charts", "davido charting now", "davido today"],
  },
  {
    title: "Rema — Live Charts",
    path: "/afrobeats/rema/live",
    section: "Afrobeats",
    description: "Where every Rema release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["rema live charts", "rema charting now", "rema today"],
  },
  {
    title: "Tems — Live Charts",
    path: "/afrobeats/tems/live",
    section: "Afrobeats",
    description: "Where every Tems release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["tems live charts", "tems charting now", "tems today"],
  },
  {
    title: "Tyla — Live Charts",
    path: "/afrobeats/tyla/live",
    section: "Afrobeats",
    description: "Where every Tyla release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["tyla live charts", "tyla charting now", "tyla today"],
  },
  {
    title: "Ayra Starr — Live Charts",
    path: "/afrobeats/ayra-starr/live",
    section: "Afrobeats",
    description: "Where every Ayra Starr release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["ayra starr live charts", "ayra starr charting now", "ayra starr today"],
  },
  {
    title: "Asake — Chart History",
    path: "/afrobeats/asake/charts",
    section: "Afrobeats",
    description: "Every Asake official chart entry and peak — 123 entries and 24 No. 1 placements, country by country.",
    keywords: ["asake", "ahmed ololade", "mr money", "asake charts", "asake chart history", "asake number ones"],
  },
  {
    title: "Asake — Live Charts",
    path: "/afrobeats/asake/live",
    section: "Afrobeats",
    description: "Where every Asake release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["asake live charts", "asake charting now", "asake today"],
  },
  {
    title: "Omah Lay — Chart History",
    path: "/afrobeats/omah-lay/charts",
    section: "Afrobeats",
    description: "Every Omah Lay official chart entry and peak — 70 entries and 6 No. 1 placements, country by country.",
    keywords: ["omah lay", "understand", "soso", "omah lay charts", "omah lay chart history", "omah lay number ones"],
  },
  {
    title: "Omah Lay — Live Charts",
    path: "/afrobeats/omah-lay/live",
    section: "Afrobeats",
    description: "Where every Omah Lay release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["omah lay live charts", "omah lay charting now", "omah lay today"],
  },
  {
    title: "Seyi Vibez — Chart History",
    path: "/afrobeats/seyi-vibez/charts",
    section: "Afrobeats",
    description: "Every Seyi Vibez official chart entry and peak — 114 entries and 11 No. 1 placements, country by country.",
    keywords: ["seyi vibez", "loseyi professor", "memory card", "seyi vibez charts", "seyi vibez chart history", "seyi vibez number ones"],
  },
  {
    title: "Seyi Vibez — Live Charts",
    path: "/afrobeats/seyi-vibez/live",
    section: "Afrobeats",
    description: "Where every Seyi Vibez release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["seyi vibez live charts", "seyi vibez charting now", "seyi vibez today"],
  },
  {
    title: "CKay — Certifications & Chart Records",
    path: "/afrobeats/ckay",
    section: "Afrobeats",
    description: "CKay's 27 certifications across 14 countries and 22 official chart entries, verified at source.",
    keywords: ["ckay", "chukwuka ekweani", "love nwantiti", "emiliana", "sad romance", "ckay certifications"],
  },
  {
    title: "CKay — Official Chart Peaks",
    path: "/afrobeats/ckay/charts",
    section: "Afrobeats",
    description: "Every official national chart peak for CKay — 22 entries across 16 territories, 5 of them No. 1.",
    keywords: ["ckay charts", "love nwantiti chart", "ckay peak", "ckay number one"],
  },
  {
    title: "CKay — Live Platform Charts",
    path: "/afrobeats/ckay/live",
    section: "Afrobeats",
    description: "Where CKay is charting right now across Spotify, Apple Music, Deezer and YouTube.",
    keywords: ["ckay live charts", "ckay today", "ckay streaming"],
  },
  {
    title: "Victony — Certifications & Chart Records",
    path: "/afrobeats/victony",
    section: "Afrobeats",
    description: "Victony's 22 certifications across 4 countries and 40 official chart entries, verified at source.",
    keywords: ["victony", "anthony victor", "outlaw", "stubborn", "soweto", "victony certifications"],
  },
  {
    title: "Victony — Official Chart Peaks",
    path: "/afrobeats/victony/charts",
    section: "Afrobeats",
    description: "Every official chart peak Victony has reached, country by country, read from each chart body's own run.",
    keywords: ["victony charts", "victony chart peaks", "victony soweto chart", "victony highest chart position"],
  },
  {
    title: "Victony — Live Charts",
    path: "/afrobeats/victony/live",
    section: "Afrobeats",
    description: "Where every Victony release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["victony live charts", "victony charting now", "victony today"],
  },
  {
    title: "Fireboy DML — Certifications & Chart Records",
    path: "/afrobeats/fireboy-dml",
    section: "Afrobeats",
    description: "Fireboy DML's 36 certifications across 6 countries and 67 official chart entries, verified at source.",
    keywords: ["fireboy dml", "adedamola adefolahan", "peru", "bandana", "playboy", "fireboy dml certifications"],
  },
  {
    title: "Fireboy DML — Official Chart Peaks",
    path: "/afrobeats/fireboy-dml/charts",
    section: "Afrobeats",
    description: "Every official chart peak Fireboy DML has reached, country by country, read from each chart body's own run.",
    keywords: ["fireboy dml charts", "peru chart position", "fireboy dml uk chart", "fireboy dml chart peaks"],
  },
  {
    title: "Fireboy DML — Live Charts",
    path: "/afrobeats/fireboy-dml/live",
    section: "Afrobeats",
    description: "Where every Fireboy DML release is charting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube — refreshed hourly.",
    keywords: ["fireboy dml live charts", "fireboy dml charting now", "fireboy dml today"],
  },
];

// Score a doc against a query. Higher = better. 0 = no match.
// This site is about Burna Boy. The Afrobeats Board's 25 docs are about other
// artists, and their titles contain the same generic words his pages compete
// for — ten of them are literally "<Artist> — Live Charts", so a search for
// "charts" scored them all above his own Chart Records page and filled the
// palette's eight slots. They are damped so a board page can only outrank his
// when it genuinely matches better: an artist's name still wins outright,
// because that scores on an exact title or keyword rather than a substring.
const SECTION_WEIGHT: Record<string, number> = { Afrobeats: 0.7 };

function score(doc: SearchDoc, q: string): number {
  return raw(doc, q) * (SECTION_WEIGHT[doc.section] ?? 1);
}

/**
 * Fold a string the way titles are folded elsewhere, so "I Told Them..." and
 * "I Told Them…" are the same query. app/lib/titleKey.ts does this for data
 * joins; search needs it for the same reason and did not have it — three dots
 * returned nothing while the ellipsis character worked.
 */
const fold = (s: string) =>
  s
    .replace(/…/g, "...")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

/** Score one field against one word. */
function wordScore(doc: SearchDoc, w: string): number {
  const title = fold(doc.title);
  const desc = fold(doc.description);
  // An exact title is an exact title wherever it came from — typing "Location"
  // should reach the record, not a page that merely mentions it.
  if (title === w) return 100;
  const g = doc.generated === true;
  if (title.startsWith(w)) return g ? 50 : 80;
  if (title.includes(w)) return g ? 30 : 60;
  if (doc.keywords.some((k) => fold(k) === w)) return g ? 40 : 55;
  if (doc.keywords.some((k) => fold(k).startsWith(w))) return g ? 25 : 45;
  if (doc.keywords.some((k) => fold(k).includes(w))) return g ? 18 : 35;
  if (desc.includes(w)) return g ? 10 : 20;
  return 0;
}

/**
 * Score a whole query.
 *
 * The old scorer matched the entire query as one string, so any multi-word
 * question — "burna boy grammy", "how old", "no 1 songs" — scored zero against
 * everything. Words are scored separately and summed, and a doc must match
 * EVERY word to place at all, which keeps two-word queries precise rather than
 * returning anything that matched "boy".
 */
function raw(doc: SearchDoc, q: string): number {
  const whole = wordScore(doc, q);
  const words = q.split(" ").filter(Boolean);
  if (words.length < 2) return whole;
  let sum = 0;
  for (const w of words) {
    const s = wordScore(doc, w);
    if (s === 0) return whole; // not every word matched — fall back to the phrase
    sum += s;
  }
  // The phrase matching outright still beats a bag of words.
  return Math.max(whole, Math.round(sum / words.length) + 5);
}

// Rank the index for a query. Empty query returns [] (callers show a default).
export function searchDocs(query: string, limit = 8): SearchDoc[] {
  const q = fold(query);
  if (!q) return [];
  return [...searchIndex, ...generatedDocs]
    .map((doc) => ({ doc, s: score(doc, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.doc);
}
