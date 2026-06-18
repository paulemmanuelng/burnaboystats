import Reveal from "../components/Reveal";
import Discography from "../components/Discography";
import { albums, eps } from "../data/albums";

export const metadata = {
  title: "Burna Boy Discography — Albums, EPs & Songs",
  description:
    "Burna Boy's full discography: 8 studio albums (L.I.F.E to No Sign of Weakness), 2 EPs, tracklists, biggest hits and guest features.",
  alternates: { canonical: "/music" },
  openGraph: { title: "Burna Boy Discography", description: "Albums, EPs, tracklists and hits." },
};

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

export default function MusicPage() {
  return (
    <main>
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
                  <svg className="spotifyIcon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.59 14.43a.62.62 0 01-.86.21c-2.35-1.44-5.3-1.76-8.79-.97a.62.62 0 11-.27-1.22c3.8-.86 7.07-.49 9.71 1.12.3.18.39.57.21.86zm1.23-2.74a.78.78 0 01-1.07.26c-2.69-1.66-6.79-2.14-9.97-1.17a.78.78 0 11-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.36.22.48.71.25 1.07zm.1-2.85C14.8 8.9 9.5 8.72 6.47 9.64a.94.94 0 11-.54-1.8c3.47-1.05 9.32-.85 13.02 1.35a.94.94 0 01-.96 1.61z" />
                  </svg>
                  Listen to more on Spotify
                </a>
              </div>
            </Reveal>
          </div>
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
    </main>
  );
}
