import Reveal from "../components/Reveal";
import Discography from "../components/Discography";
import { albums, eps, compilations } from "../data/albums";
import KeepExploring from "../components/KeepExploring";
import SpotifyIcon from "../components/SpotifyIcon";
import { siteUrl } from "../site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Discography — Albums, EPs & Songs",
  description:
    "Burna Boy's full discography: 8 studio albums (L.I.F.E to No Sign of Weakness), 2 EPs, tracklists, biggest hits and guest features.",
  path: "/music",
  shareTitle: "Burna Boy Discography",
  shareDescription: "Albums, EPs, tracklists and hits.",
});

// A selection of his best-known songs across the years.
const songs = [
  "Ye", "On the Low", "Anybody", "Gbona", "Kilometre", "Last Last",
  "Common Person", "City Boys", "Sittin' on Top of the World", "Higher",
  "TaTaTa", "Update", "Dai Dai",
];

// A selection of his most notable guest features (he's the featured artist),
// from the discography's "as featured artist" list — not exhaustive.
const topFeatures = [
  { title: "Dai Dai", artist: "Shakira" },
  { title: "Ja Ara E", artist: "Beyoncé" },
  { title: "We Pray", artist: "Coldplay" },
  { title: "Loved by You", artist: "Justin Bieber" },
  { title: "My Oasis", artist: "Sam Smith" },
  { title: "Own It", artist: "Stormzy & Ed Sheeran" },
  { title: "Location", artist: "Dave" },
  { title: "Ginger", artist: "Wizkid" },
  { title: "Just Like Me", artist: "21 Savage & Metro Boomin" },
  { title: "Coming 2 America", artist: "John Legend" },
  { title: "Hey Boy", artist: "Sia" },
  { title: "Jerusalema (Remix)", artist: "Master KG" },
  { title: "Be Honest", artist: "Jorja Smith" },
  { title: "WGFT", artist: "Gunna" },
  { title: "Simmer", artist: "Mahalia" },
  { title: "Play Play", artist: "J Hus" },
  { title: "Good Time", artist: "J Hus" },
  { title: "Siberia", artist: "Headie One" },
  { title: "Donne-moi l'accord", artist: "Dadju" },
  { title: "4 Kampé II", artist: "Joé Dwèt Filé" },
  { title: "Mera Na", artist: "Sidhu Moose Wala" },
  { title: "Teary Eyes", artist: "YoungBoy NBA" },
  { title: "We Must Groove", artist: "2Baba" },
  { title: "Amorawa", artist: "Wande Coal" },
  { title: "All Eyes on Me", artist: "AKA" },
  { title: "Rollin'", artist: "Mist" },
];

const SPOTIFY_ARTIST = "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa";

// Structured data: the album catalogue + breadcrumb trail for rich results.
const musicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      name: "Burna Boy",
      url: `${siteUrl}/music`,
      album: [...albums, ...eps, ...compilations].map((a) => ({
        "@type": "MusicAlbum",
        name: a.title,
        datePublished: String(a.year),
        numTracks: a.tracks.length,
        byArtist: { "@type": "MusicGroup", name: "Burna Boy" },
        ...(a.cover ? { image: a.cover } : {}),
        ...(a.spotify ? { sameAs: a.spotify } : {}),
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Music", item: `${siteUrl}/music` },
      ],
    },
  ],
};

export default function MusicPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(musicJsonLd) }} />
      <header className="pageHeader container">
        <h1>
          The <span className="accent">Music</span>
        </h1>
        <p>Eight studio albums and a catalogue of global hits</p>
      </header>

      <div className="container">
        {/* LATEST ALBUM */}
        <Reveal>
          <div className="panel block">
            <p className="eyebrow" style={{ marginBottom: 8 }}>Latest Album</p>
            <h2 className="secTitle">
              No Sign of Weakness{" "}
              <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "1rem" }}>
                (2025)
              </span>
            </h2>
            <p className="lead" style={{ marginTop: 12 }}>
              His eighth studio album — 16 tracks featuring Travis Scott,
              Shaboozey, Mick Jagger and Stromae. In 2026 he followed it with
              “Dai Dai” alongside Shakira, the official FIFA World Cup 2026 song.
            </p>
          </div>
        </Reveal>

        {/* DISCOGRAPHY */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Discography</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              Studio <span className="goldText">albums</span>
            </h2>
          </Reveal>
          <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
            Tap an album to see its full tracklist.
          </p>
          <Discography albums={albums} />
          <p className="cardMeta" style={{ marginTop: 18, opacity: 0.7 }}>
            Album &amp; EP artwork via Spotify. Tap any cover for the tracklist and a link to listen.
          </p>
        </div>

        {/* EPs + FEATURES */}
        <div className="block">
          <div className="epsFeaturesGrid">
            {/* EPs (left) */}
            <div>
              <Reveal>
                <p className="eyebrow">Also Released</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="secTitle">
                  <span className="goldText">EPs</span>
                </h2>
              </Reveal>
              <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
                Tap an EP to see its tracklist.
              </p>
              <Discography albums={eps} indexOffset={4} />
            </div>

            {/* Features folder (right) */}
            <Reveal delay={120}>
              <div className="featuresFolder">
                <h3 className="folderTitle" style={{ marginBottom: 4 }}>Featured On</h3>
                <p className="cardMeta" style={{ marginBottom: 12 }}>
                  A selection — he&apos;s featured on dozens more.
                </p>
                <ol className="featureList">
                  {topFeatures.map((f, i) => (
                    <li className="featureRow" key={f.title}>
                      <span className="fNum">{i + 1}</span>
                      <span className="fTitle">{f.title}</span>
                      <span className="fArtist">{f.artist}</span>
                    </li>
                  ))}
                </ol>
                <a
                  className="spotifyBtn folderSpotify"
                  href={SPOTIFY_ARTIST}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpotifyIcon />
                  Listen to more on Spotify
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* COMPILATION */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">From the Vault</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              <span className="goldText">Compilation</span>
            </h2>
          </Reveal>
          <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
            An early Aristokrat-era collection — tap for the full tracklist.
          </p>
          <Discography albums={compilations} indexOffset={6} />
        </div>

        {/* SIGNATURE SONGS */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Signature Songs</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              Some of his <span className="goldText">biggest hits</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="chips">
              {songs.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="lead" style={{ marginTop: 20, fontSize: "0.92rem" }}>
              A selection, not the full catalogue. See the{" "}
              <a href="/certifications" style={{ color: "var(--gold)" }}>
                Certifications
              </a>{" "}
              page for his certified tracks across the world.
            </p>
          </Reveal>
        </div>
      </div>

      <KeepExploring current="/music" />
    </main>
  );
}
