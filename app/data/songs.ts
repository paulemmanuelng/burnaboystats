// Per-song deep-dive pages (/music/[slug]). Each song's charts and certifications
// are pulled live from data/charts.ts and data/certifications.ts by title, so
// those pages never drift from the rest of the site. This file holds only what
// isn't already in those datasets: the editorial hook, the album/cover, the
// verified extra facts, and per-song SEO. Dai Dai is intentionally NOT here — it
// keeps its own bespoke /dai-dai page and is featured on the /music hub instead.
//
// Everything stated here is verifiable from the chart/cert data or from
// well-documented history — no invented figures.

export interface SongFact {
  v: string;
  l: string;
}

export interface Song {
  slug: string;
  title: string; // must match the title used in charts.ts / certifications.ts
  credit?: string; // e.g. "Gunna ft. Burna Boy"; omit when Burna is lead
  year: number;
  album: string;
  cover: string; // Spotify i.scdn.co cover URL
  // Omitted when no track ID could be VERIFIED via oEmbed — never guess one.
  spotify?: string;
  // Official-music-video YouTube views, displayed in whole millions. Auto-updated
  // by the live stats bot from the video's own YouTube page (watched-metrics.json
  // moved the source off kworb's per-video list on 28 Aug 2026). Omit for songs
  // whose video lives on another artist's channel (WGFT, Jerusalema).
  ytViews?: string;
  // Override for the ytViews card label when the counted video is not a
  // single-song visual (Darko's is the joint "Thuggin / Darko" video).
  ytViewsLabel?: string;
  // Total Spotify streams, auto-updated hourly by the live stats bot (kworb).
  spotifyStreams?: string;
  // True when no chart/cert/views figure exists — the page carries the history
  // only. Kept explicit so the data test can tell "thin on purpose" from "typo".
  storyOnly?: boolean;
  tagline: string; // short hook under the title
  blurb: string; // 2–4 sentence story
  extraFacts: SongFact[]; // facts beyond the auto chart/cert counts
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const songs: Song[] = [
  {
    slug: "last-last",
    title: "Last Last",
    year: 2022,
    spotifyStreams: "612M",
    album: "Love, Damini",
    cover: "https://i.scdn.co/image/ab67616d0000b273d98e997eaad5f503b9e1f2f2",
    spotify: "https://open.spotify.com/track/4LPNkxES0zCGn6S2Y1vmJN",
    ytViews: "364M",
    tagline: "The heartbreak anthem — “I need igbo and shayo”",
    blurb:
      "The lead single from Love, Damini (2022), built on a sample of Toni Braxton's “He Wasn't Man Enough.” It became Burna Boy's signature breakup anthem and one of the most-certified African songs ever — topping the South African chart, reaching No. 4 in the UK (his highest-charting solo single there at the time) and going Diamond in France.",
    // Two extras, not four: the page caps "By the numbers" at eight cards and
    // the six derived ones come first, so only two of these ever render. The
    // No. 1 (South Africa) and No. 4 (UK) cards repeated the derived "best
    // peak" card and the chart pills; these two say something the cards do
    // not (17 Sep 2026 — the last two had never rendered on either layout).
    extraFacts: [
      { v: "No. 44", l: "US Billboard Hot 100" },
      { v: "Diamond", l: "certified Diamond in France (SNEP)" },
    ],
    faqs: [
      {
        q: "What is “Last Last” by Burna Boy about?",
        a: "“Last Last” is a heartbreak anthem about coping with a breakup — its hook, “I need igbo and shayo” (weed and alcohol), became one of Burna Boy's most quoted lines. It samples Toni Braxton's 2000 hit “He Wasn't Man Enough.”",
      },
      {
        q: "How high did “Last Last” chart?",
        a: "“Last Last” reached No. 1 in South Africa, No. 4 on the UK Official Singles Chart, and No. 44 on the US Billboard Hot 100, charting in 14 countries in all.",
      },
      {
        q: "Is “Last Last” certified?",
        a: "Yes — it is one of the most-certified African songs ever, with 12 certifications including Diamond in France, 5× Platinum in Nigeria, 4× Platinum in Canada, 2× Platinum in the UK and Platinum in the US.",
      },
    ],
    metaTitle: "Burna Boy “Last Last” — Chart Peaks, Certifications & Facts",
    metaDescription:
      "Burna Boy's “Last Last”: No. 1 in South Africa, No. 4 in the UK, Diamond in France and 12 certifications in all — the samples, story and every chart peak.",
  },
  {
    slug: "ye",
    title: "Ye",
    year: 2018,
    spotifyStreams: "337M",
    album: "Outside",
    cover: "https://i.scdn.co/image/ab67616d0000b2732135956e3ca0a183db8ac395",
    spotify: "https://open.spotify.com/track/2lEl1iNGpz9r2B7R5BqXSD",
    ytViews: "311M",
    tagline: "The defiant life-anthem that became his global signature",
    blurb:
      "From the 2018 album Outside, “Ye” is one of Burna Boy's signature songs — the record that carried a career already six years deep into a worldwide audience. A defiant, celebratory Afro-fusion anthem about the will to live and enjoy every moment — “I no wan die, I wan enjoy” — it became a global streaming staple and went Platinum across the US, UK, France, Canada and beyond without a singles-chart run to speak of — its only chart visit came eight years on, four weeks in Nigeria's Top 100 in July 2026 that peaked at No. 70.",
    extraFacts: [
      { v: "2018", l: "the Outside single that carried him to a worldwide audience" },
      { v: "Platinum", l: "certified in the US, UK, France, Canada, Sweden, NZ & Switzerland" },
      { v: "Anthem", l: "a live-set staple and enduring fan favourite that still defines his early sound" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's “Ye” about?",
        a: "“Ye” is a life-affirming anthem about the will to live and enjoy the moment — Burna Boy sings about refusing to waste his life and making the most of his success against the odds. Its hook, “I no wan die, I wan enjoy,” became one of his most-quoted lines.",
      },
      {
        q: "Why is Burna Boy's “Ye” so important?",
        a: "“Ye” (2018), from the album Outside, is the song that carried Burna Boy to a worldwide audience. He had been releasing music since 2012 — “Like to Party” and the debut album L.I.F.E came years earlier — so “Ye” widened a career already well underway rather than starting one. It became a huge streaming hit and went Platinum in the US, UK, France and several other countries.",
      },
      {
        q: "What album is “Ye” on?",
        a: "“Ye” is from Burna Boy's 2018 album Outside.",
      },
    ],
    metaTitle: "Burna Boy “Ye” — His Global Signature Song (2018)",
    metaDescription:
      "Burna Boy's “Ye” (2018), from the album Outside — the anthem that carried him worldwide, certified Platinum in the US, UK and France. Story, charts and stats.",
  },
  {
    slug: "on-the-low",
    title: "On the Low",
    // 2018, not 2019: released 16 Nov 2018 as a single (BPI "Released 16.11.2018",
    // SNEP "Date de sortie 16/11/2018", the official video uploaded that day)
    // and placed on 2019's African Giant — the kicker dates the album from
    // albums.ts, this field dates the song.
    year: 2018,
    spotifyStreams: "430M",
    album: "African Giant",
    cover: "https://i.scdn.co/image/ab67616d0000b273a9c13c1a5538f87146ac8ca5",
    spotify: "https://open.spotify.com/track/1zIk8RJEKGvoH4FioFnGyJ",
    ytViews: "483M",
    tagline: "The smooth love song that went Diamond in France",
    blurb:
      "A silky Afro-fusion love song from African Giant (2019), “On the Low” became one of Burna Boy's biggest records in Europe. It was certified Diamond in France — among the highest honours any African song has earned there — and picked up ten certifications worldwide.",
    extraFacts: [
      { v: "Diamond", l: "certified Diamond in France (SNEP)" },
      { v: "2× Platinum", l: "in Canada, plus Platinum in the UK, NZ, Switzerland & Sweden" },
      { v: "African Giant", l: "a standout from the 2019 album" },
    ],
    faqs: [
      {
        q: "Is “On the Low” certified Diamond?",
        a: "Yes — “On the Low” is certified Diamond in France by SNEP, one of the highest certifications any African song has achieved there, and holds ten certifications in total.",
      },
      {
        q: "What album is “On the Low” on?",
        a: "“On the Low” is from Burna Boy's 2019 album African Giant.",
      },
    ],
    metaTitle: "Burna Boy “On the Low” — Diamond in France & Every Stat",
    metaDescription:
      "Burna Boy's “On the Low” from African Giant (2019): Diamond in France, 2× Platinum in Canada and ten certifications in all — the story and full stats.",
  },
  {
    slug: "wgft",
    title: "WGFT",
    credit: "Gunna ft. Burna Boy",
    year: 2025,
    album: "The Last Wun",
    cover: "https://i.scdn.co/image/ab67616d0000b27303a253cffd6d9e556ef4eec5",
    spotify: "https://open.spotify.com/track/0WsC4ETIXyiHDMXRaPMvKe",
    spotifyStreams: "312M",
    tagline: "Burna Boy's highest-ever Billboard Hot 100 peak",
    blurb:
      "A feature on Gunna's 2025 album The Last Wun, “WGFT” gave Burna Boy his highest position ever on the US Billboard Hot 100 — No. 16 — blending Gunna's melodic trap with Burna's Afrobeats cadence. It charted in 13 countries and gave him his first US Top 20 single.",
    extraFacts: [
      { v: "No. 16", l: "US Billboard Hot 100 — Burna Boy's highest-ever Hot 100 peak" },
      { v: "2025", l: "a feature on Gunna's album The Last Wun" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's highest Billboard Hot 100 position?",
        a: "Burna Boy's highest Billboard Hot 100 peak is No. 16, achieved with “WGFT,” his 2025 feature on Gunna's album The Last Wun.",
      },
      {
        q: "Who is on “WGFT”?",
        a: "“WGFT” is by American rapper Gunna featuring Burna Boy, from Gunna's 2025 album The Last Wun. A remix with Chris Brown followed in 2026.",
      },
    ],
    metaTitle: "Gunna & Burna Boy “WGFT” — His Best Billboard Hot 100 Peak",
    metaDescription:
      "“WGFT” by Gunna featuring Burna Boy gave Burna his highest-ever Billboard Hot 100 peak at No. 16, charting in 13 countries — the full chart run and story.",
  },
  {
    slug: "city-boys",
    title: "City Boys",
    year: 2023,
    spotifyStreams: "290M",
    album: "I Told Them…",
    cover: "https://i.scdn.co/image/ab67616d0000b273c361f3720bafc0da36f14d96",
    spotify: "https://open.spotify.com/track/4RoKNqyZ9622tcAeNPNv5k",
    ytViews: "119M",
    tagline: "The triumphant I Told Them… anthem",
    blurb:
      "A celebratory highlight from I Told Them… (2023), “City Boys” became one of the album's biggest songs — a swaggering Afrobeats anthem that reached No. 2 in Nigeria, charted in eight countries and went 4× Platinum at home.",
    extraFacts: [
      { v: "No. 2", l: "Nigeria (TurnTable Top 100)" },
      { v: "4× Platinum", l: "in Nigeria, plus Platinum in Canada & France" },
      { v: "I Told Them…", l: "a standout single from the 2023 album" },
    ],
    faqs: [
      {
        q: "What album is “City Boys” on?",
        a: "“City Boys” is from Burna Boy's 2023 album I Told Them…, one of the record's biggest singles.",
      },
      {
        q: "How did “City Boys” chart?",
        a: "“City Boys” reached No. 2 in Nigeria and charted in eight countries, including the UK and the Netherlands. It is certified 4× Platinum in Nigeria, plus Platinum in Canada and France.",
      },
    ],
    metaTitle: "Burna Boy “City Boys” — Chart Peaks, Certifications & Facts",
    metaDescription:
      "Burna Boy's “City Boys” from I Told Them… (2023): No. 2 in Nigeria, 4× Platinum at home and charting in eight countries — the full story and stats.",
  },
  {
    slug: "jerusalema",
    title: "Jerusalema (Remix)",
    credit: "Master KG ft. Nomcebo Zikode & Burna Boy",
    year: 2020,
    album: "Single",
    cover: "https://i.scdn.co/image/ab67616d0000b2739d07e4e641b9ee80b0f713d0",
    spotify: "https://open.spotify.com/track/1dmES1X8l1AnFBy2gR3wYA",
    spotifyStreams: "86M",
    tagline: "The global dance phenomenon",
    blurb:
      "In 2020 Burna Boy joined the remix of Master KG and Nomcebo Zikode's “Jerusalema” — the gospel-house track that swept the world through the #JerusalemaDanceChallenge. His verse helped push it to No. 1 in five countries, including Belgium, Switzerland and the Netherlands, and Diamond certification in France. It remains one of the biggest African songs in history.",
    extraFacts: [
      { v: "Diamond", l: "certified Diamond in France, 4× Platinum in Italy" },
      { v: "2020", l: "the global #JerusalemaDanceChallenge phenomenon" },
    ],
    faqs: [
      {
        q: "Is Burna Boy on “Jerusalema”?",
        a: "Yes — Burna Boy features on the 2020 remix of Master KG and Nomcebo Zikode's “Jerusalema.” His verse helped the song reach No. 1 in five countries during the global #JerusalemaDanceChallenge.",
      },
      {
        q: "How big was “Jerusalema (Remix)”?",
        a: "It was a global phenomenon — No. 1 in Belgium, Switzerland, Hungary, the Netherlands and Suriname, charting in 16 countries and certified Diamond in France and 4× Platinum in Italy.",
      },
    ],
    metaTitle: "“Jerusalema (Remix)” — Master KG, Nomcebo & Burna Boy Stats",
    metaDescription:
      "Burna Boy on the “Jerusalema” remix: No. 1 in five countries, Diamond in France and 17 chart entries during the global #JerusalemaDanceChallenge — full stats.",
  },
  {
    slug: "alone",
    title: "Alone",
    year: 2022,
    spotifyStreams: "215M",
    album: "Black Panther: Wakanda Forever",
    cover: "https://i.scdn.co/image/ab67616d0000b273992a1f56ac5382848277cff2",
    spotify: "https://open.spotify.com/track/0AoBY2Y3qs6dtGgOD6c91N",
    tagline: "His song from Black Panther: Wakanda Forever",
    blurb:
      "Burna Boy's contribution to the Black Panther: Wakanda Forever soundtrack (2022), a Marvel record that put Afrobeats at the centre of one of the biggest films of the year. It became a genuine international hit in its own right — No. 19 in France, No. 28 in the UK and a run across nine official charts — and topped the UK's Afrobeats chart.",
    extraFacts: [
      { v: "No. 19", l: "France (SNEP) — its highest national peak" },
      { v: "No. 28", l: "UK Official Singles Chart" },
      { v: "No. 1", l: "UK Official Afrobeats Chart" },
      { v: "Marvel", l: "from the Black Panther: Wakanda Forever soundtrack" },
    ],
    faqs: [
      {
        q: "What Burna Boy song is in Black Panther: Wakanda Forever?",
        a: "“Alone” is Burna Boy's song from Black Panther: Wakanda Forever, released on the 2022 soundtrack “Music From and Inspired By.” Released on 4 November 2022 with the soundtrack album, a week after Rihanna's lead single “Lift Me Up”, it became a hit in its own right, reaching No. 19 in France and No. 28 in the UK.",
      },
      {
        q: "How did “Alone” chart?",
        a: "“Alone” charted in eight countries plus the Billboard Global 200 — its best peaks were No. 19 in France, No. 28 on the UK Official Singles Chart and No. 45 in Switzerland. It also reached No. 1 on the UK's Official Afrobeats Chart.",
      },
      {
        q: "Is “Alone” certified?",
        a: "Yes — “Alone” is certified Platinum in Nigeria, Gold in the United States, New Zealand and France, and Silver in the United Kingdom.",
      },
    ],
    metaTitle: "Burna Boy “Alone” — the Wakanda Forever Song & Its Chart Run",
    metaDescription:
      "Burna Boy's “Alone” from Black Panther: Wakanda Forever (2022): No. 19 in France, No. 28 in the UK, and certified in five countries.",
  },
  {
    slug: "23",
    title: "23",
    year: 2020,
    spotifyStreams: "73M",
    album: "Twice as Tall",
    cover: "https://i.scdn.co/image/ab67616d0000b2735b069390c128a4b4c3197d80",
    spotify: "https://open.spotify.com/track/7EqoATlXAKNwzv45LAlqRt",
    ytViews: "51M",
    tagline: "The Jordan-numbered highlight of the Grammy album",
    blurb:
      "A standout from Twice as Tall (2020) — the album that won Burna Boy the Grammy for Best Global Music Album. Named for Michael Jordan's jersey number, “23” pairs a boastful, victory-lap energy with one of the record's most-played videos, and is certified Platinum in Nigeria.",
    extraFacts: [
      { v: "Grammy", l: "from Twice as Tall, winner of Best Global Music Album (2021)" },
      { v: "Platinum", l: "certified Platinum in Nigeria" },
      { v: "23", l: "named after Michael Jordan's jersey number" },
    ],
    faqs: [
      {
        q: "What album is “23” by Burna Boy on?",
        a: "“23” is from Twice as Tall (2020), the album that won Burna Boy the Grammy Award for Best Global Music Album in 2021.",
      },
      {
        q: "Why is Burna Boy's song called “23”?",
        a: "The title references Michael Jordan's jersey number — the song leans on that imagery of being the best at what you do, matching the confident tone of the Twice as Tall era.",
      },
    ],
    metaTitle: "Burna Boy “23” — From the Grammy-Winning Twice as Tall",
    metaDescription:
      "Burna Boy's “23” from Twice as Tall (2020), the Grammy-winning album: the Michael Jordan reference, the certification and the numbers behind the song.",
  },
  {
    slug: "tatata",
    title: "TaTaTa",
    credit: "Burna Boy feat. Travis Scott",
    year: 2025,
    spotifyStreams: "68M",
    // The single edition — the recording kworb credits the stream figure to,
    // verified via oEmbed 17 Sep 2026 (the album version is 4OGN4GO4yqtWcj4152jJz9).
    spotify: "https://open.spotify.com/track/7iCvoWlfuJ1y7zibnh1EW9",
    album: "No Sign of Weakness",
    cover: "https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239",
    ytViews: "13M",
    tagline: "The Travis Scott team-up from No Sign of Weakness",
    blurb:
      "The Travis Scott collaboration from No Sign of Weakness (2025), Burna Boy's eighth studio album. It was one of the record's most-anticipated moments — a meeting of Afro-fusion and Houston rap — and charted in the UK on release.",
    extraFacts: [
      { v: "Travis Scott", l: "the album's headline collaboration" },
      { v: "2025", l: "from his eighth studio album, No Sign of Weakness" },
    ],
    faqs: [
      {
        q: "Who is on Burna Boy's “TaTaTa”?",
        a: "“TaTaTa” is Burna Boy featuring American rapper Travis Scott, from his 2025 album No Sign of Weakness.",
      },
      {
        q: "What album is “TaTaTa” on?",
        a: "“TaTaTa” appears on No Sign of Weakness (2025), Burna Boy's eighth studio album, which also features Mick Jagger, Stromae and Shaboozey.",
      },
    ],
    metaTitle: "Burna Boy & Travis Scott “TaTaTa” — No Sign of Weakness",
    metaDescription:
      "“TaTaTa,” Burna Boy's Travis Scott collaboration from No Sign of Weakness (2025) — the story, chart run and stats behind the album's headline team-up.",
  },
  {
    slug: "rizzla",
    title: "Rizzla",
    year: 2015,
    spotifyStreams: "3.8M",
    album: "On a Spaceship",
    cover: "https://i.scdn.co/image/ab67616d0000b2737e09ba6174aec9958461aa44",
    spotify: "https://open.spotify.com/track/0ASsiTKxkcMmGS52fHx3Gn",
    ytViews: "1.8M",
    storyOnly: true,
    tagline: "The On a Spaceship era, before the world caught on",
    blurb:
      "Released as a single on 24 March 2016 from On a Spaceship — the album Burna Boy self-released on 25 November 2015 on his own Spaceship label. The record drew mixed reviews overall; Pulse Nigeria listed “Rizzla” among its good tracks and NotJustOk called it the one J Fem production that earned its place. It's a window into the Afro-fusion sound he was already building at home, three years before “Ye” took it worldwide.",
    extraFacts: [
      { v: "24 Mar 2016", l: "released as the album's third single" },
      { v: "Spaceship", l: "from On a Spaceship (2015), self-released on his own Spaceship label" },
      { v: "Standout", l: "named among the album's good tracks by Pulse Nigeria and NotJustOk" },
    ],
    faqs: [
      {
        q: "What album is “Rizzla” on?",
        a: "“Rizzla” is from On a Spaceship, Burna Boy's second studio album, self-released 25 November 2015 on his own Spaceship label. The song followed as a single on 24 March 2016.",
      },
      {
        q: "What were the singles from On a Spaceship?",
        a: "Five: “Soke” (2015), “Jealousy” (2016), “Rizzla” (2016), “Duro Ni Be” featuring Phyno (2016) and “The Realest” (2016).",
      },
    ],
    metaTitle: "Burna Boy “Rizzla” — the On a Spaceship Era (2015)",
    metaDescription:
      "Burna Boy's “Rizzla” from On a Spaceship (2015): the early Afro-fusion sound he was already building in Nigeria years before “Ye” travelled worldwide.",
  },
  {
    slug: "boshe-nlo",
    title: "Boshe Nlo",
    year: 2016,
    spotifyStreams: "3.7M",
    album: "Redemption (EP)",
    cover: "https://i.scdn.co/image/ab67616d0000b2738f864a796ece5bd24bd45119",
    spotify: "https://open.spotify.com/track/530ZXkK83EFoX2tVdQ9SbG",
    ytViews: "1M",
    storyOnly: true,
    tagline: "Track three of the Redemption EP",
    blurb:
      "From Redemption (2016), the seven-track EP Burna Boy put out on his own Spaceship label between On a Spaceship and Outside. The EP is a compact snapshot of the period just before Outside changed everything.",
    extraFacts: [
      { v: "Track 3", l: "of the seven-track Redemption EP — “We On” closes it" },
      { v: "Pre-Outside", l: "sixteen months before Outside carried him worldwide" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's Redemption EP?",
        a: "Redemption is a seven-track EP Burna Boy released on 23 September 2016 on his own Spaceship label, between On a Spaceship and Outside. “Boshe Nlo” is its third track; “We On” closes it.",
      },
    ],
    metaTitle: "Burna Boy “Boshe Nlo” — from the Redemption EP (2016)",
    metaDescription:
      "Burna Boy's “Boshe Nlo” from the 2016 Redemption EP — the seven-track release from the period just before Outside carried him worldwide.",
  },
  {
    slug: "darko",
    title: "Darko",
    credit: "Burna Boy & DJDS",
    year: 2019,
    spotifyStreams: "989K",
    album: "Steel & Copper (EP)",
    cover: "https://i.scdn.co/image/ab67616d0000b27376cd360b4344922af3685208",
    spotify: "https://open.spotify.com/track/4Ty2eRGfNVhJOgEDRzRsyb",
    ytViews: "1.3M",
    // The only official video is the joint "Thuggin / Darko" visual, so the
    // count is that video's — the generic label would claim a Darko-only one.
    ytViewsLabel: "YouTube views for the Thuggin / Darko official video",
    storyOnly: true,
    tagline: "The four-track experiment with DJDS",
    blurb:
      "From Steel & Copper, the four-track joint EP Burna Boy released with Los Angeles production duo DJDS on 21 March 2019 — four months before African Giant. Pulling on dancehall, reggae, afropop and trap across just four songs (“34”, “Innocent Man”, “Darko” and “Thuggin”), it is widely described as the most experimental project in his catalogue: a producer-led detour taken in the same year that made him a global name.",
    extraFacts: [
      { v: "21 Mar 2019", l: "a joint EP with LA duo DJDS, four months before African Giant" },
      { v: "4 tracks", l: "“34”, “Innocent Man”, “Darko” and “Thuggin”" },
      { v: "Experimental", l: "dancehall, reggae, afropop and trap — his least conventional release" },
    ],
    faqs: [
      {
        q: "What is Steel & Copper?",
        a: "Steel & Copper is a four-track joint EP by Burna Boy and Los Angeles production duo DJDS, released 21 March 2019 through Atlantic, Bad Habit and Spaceship Records — four months before African Giant.",
      },
      {
        q: "Who are DJDS?",
        a: "DJDS (formerly DJ Dodger Stadium) are an American production duo from Los Angeles. Steel & Copper followed their 2018 album Big Wave More Fire and Burna Boy's 2018 album Outside.",
      },
    ],
    metaTitle: "Burna Boy “Darko” — the Steel & Copper EP with DJDS",
    metaDescription:
      "Burna Boy's “Darko” from Steel & Copper (2019), his four-track EP with LA duo DJDS — the most experimental corner of his catalogue.",
  },
  {
    slug: "like-to-party",
    title: "Like to Party",
    year: 2012,
    spotifyStreams: "11M",
    album: "L.I.F.E",
    // The L.I.F.E album art — the track link's own art is a best-of
    // compilation cover, which is not the release this page is about.
    cover: "https://i.scdn.co/image/ab67616d0000b273e3497b75e40ffc5bfffce8cf",
    spotify: "https://open.spotify.com/track/6cgEDo8mFLrvQ0FVqXAKpH",
    storyOnly: true,
    tagline: "The song that started it all",
    blurb:
      "The breakout single that introduced Burna Boy to Nigeria, released on 30 May 2012 and leading his debut album L.I.F.E — Leaving an Impact for Eternity — on 12 August 2013 via Aristokrat Records. Produced entirely by Leriq, L.I.F.E reached No. 7 on Billboard's US Reggae Albums chart, an early sign of reach well beyond Lagos, and was nominated for Album of the Year at both The Headies and the Nigeria Entertainment Awards in 2014. Everything on this site traces back to this record.",
    extraFacts: [
      { v: "No. 7", l: "L.I.F.E on Billboard's US Reggae Albums chart — his first American chart placing" },
      { v: "30 May 2012", l: "released as the album's lead single" },
      { v: "Leriq", l: "L.I.F.E was produced end to end by Leriq" },
      { v: "2× nom", l: "Album of the Year at The Headies and the Nigeria Entertainment Awards, 2014" },
    ],
    faqs: [
      {
        q: "What was Burna Boy's first hit song?",
        a: "“Like to Party” (2012) was Burna Boy's breakout single — the song that introduced him to a Nigerian audience and led his 2013 debut album L.I.F.E (Leaving an Impact for Eternity).",
      },
      {
        q: "What does L.I.F.E stand for?",
        a: "L.I.F.E, Burna Boy's debut album, stands for “Leaving an Impact for Eternity.” It was released on 12 August 2013 through Aristokrat Records and produced in full by Leriq.",
      },
      {
        q: "Did Burna Boy's debut album chart?",
        a: "Yes. L.I.F.E reached No. 7 on Billboard's US Reggae Albums chart in August 2013 — his first American chart placing, six years before African Giant. It was also nominated for Album of the Year at The Headies 2014 and the 2014 Nigeria Entertainment Awards.",
      },
      {
        q: "What were the singles from L.I.F.E?",
        a: "Five: “Like to Party” (2012), “Tonight” (2012), “Always Love You” (2013), “Run My Race” (2013) and “Yawa Dey” (2013).",
      },
    ],
    metaTitle: "Burna Boy “Like to Party” — His Breakout Song (2012)",
    metaDescription:
      "“Like to Party” (2012), Burna Boy's breakout single and the lead from debut album L.I.F.E, which hit No. 7 on Billboard's US Reggae Albums chart.",
  },
  {
    slug: "smoke",
    title: "Smoke",
    credit: "Burna Boy feat. Onosz",
    year: 2011,
    spotifyStreams: "3.7M",
    album: "Best of Burn Series, Vol. 1",
    cover: "https://i.scdn.co/image/ab67616d0000b2739c2cb75c521fe1c48f74a3c1",
    spotify: "https://open.spotify.com/track/2fOpoSqkF5kuiZcDLGyA7B",
    storyOnly: true,
    tagline: "The earliest Burna Boy on this site",
    blurb:
      "From Best of Burn Series, Vol. 1 — the 2011 Aristokrat Records compilation that collected Burna Boy's earliest work, two years before his debut album L.I.F.E and long before anyone outside Nigeria was listening. Nothing here charted or was certified; it exists as the starting point of a catalogue that ends at a World Cup Final.",
    extraFacts: [
      { v: "Aristokrat", l: "from the Aristokrat Records compilation Best of Burn Series, Vol. 1" },
      { v: "Onosz", l: "a guest feature from the Port Harcourt era" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's earliest release?",
        a: "Best of Burn Series, Vol. 1 (2011) on Aristokrat Records is the earliest Burna Boy release documented here — a compilation of his early work, including “Smoke” featuring Onosz. It predates his 2013 debut album L.I.F.E.",
      },
      {
        q: "What album is “Smoke” on?",
        a: "“Smoke” (featuring Onosz) appears on Best of Burn Series, Vol. 1, the 2011 Aristokrat Records compilation.",
      },
    ],
    metaTitle: "Burna Boy “Smoke” (2011) — From His Earliest Release",
    metaDescription:
      "Burna Boy's “Smoke” featuring Onosz, from the 2011 Aristokrat Records compilation Best of Burn Series, Vol. 1 — the earliest release in his catalogue.",
  },
];

export const songBySlug = (slug: string) => songs.find((s) => s.slug === slug);
export const songSlugs = songs.map((s) => s.slug);
