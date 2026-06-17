import Reveal from "../components/Reveal";
import Discography from "../components/Discography";
import { albums } from "../data/albums";

export const metadata = { title: "Music — Burna Boy Stats" };

// A selection of his best-known songs across the years.
const songs = [
  "Ye", "On the Low", "Anybody", "Gbona", "Kilometre", "Last Last",
  "Common Person", "City Boys", "Sittin' on Top of the World", "Higher",
  "TaTaTa", "Update", "Dai Dai",
];

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
