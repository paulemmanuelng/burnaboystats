// Static, dependency-free search index of every page on the site. Kept free of
// data imports so it's safe in the client bundle (the palette + /search both
// use it). Each doc carries extra `keywords` so a query like "grammy", "net
// worth" or "ferrari" lands on the right page even when the word isn't in the
// title.

export type SearchDoc = {
  title: string;
  path: string;
  section: string;
  description: string;
  keywords: string[];
};

export const searchIndex: SearchDoc[] = [
  {
    title: "Home",
    path: "/",
    section: "Site",
    description: "The unofficial stats home of Burna Boy — every record in one place.",
    keywords: ["home", "start", "overview", "burna boy stats"],
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
];

// Score a doc against a query. Higher = better. 0 = no match.
function score(doc: SearchDoc, q: string): number {
  const title = doc.title.toLowerCase();
  const desc = doc.description.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (doc.keywords.some((k) => k === q)) return 55;
  if (doc.keywords.some((k) => k.startsWith(q))) return 45;
  if (doc.keywords.some((k) => k.includes(q))) return 35;
  if (desc.includes(q)) return 20;
  return 0;
}

// Rank the index for a query. Empty query returns [] (callers show a default).
export function searchDocs(query: string, limit = 8): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .map((doc) => ({ doc, s: score(doc, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.doc);
}
