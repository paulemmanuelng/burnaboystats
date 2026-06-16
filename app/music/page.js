import Reveal from "../components/Reveal";
import AlbumCover from "../components/AlbumCover";

export const metadata = { title: "Music — Burna Boy Stats" };

// Verified studio-album discography (sources: Wikipedia, Apple Music, Billboard).
const albums = [
  { title: "L.I.F.E", year: 2013, label: "Aristokrat Records" },
  { title: "On a Spaceship", year: 2015, label: "Spaceship" },
  { title: "Outside", year: 2018, label: "Atlantic · Spaceship" },
  { title: "African Giant", year: 2019, label: "Atlantic · Spaceship" },
  { title: "Twice as Tall", year: 2020, label: "Atlantic · Spaceship" },
  { title: "Love, Damini", year: 2022, label: "Atlantic · Spaceship" },
  { title: "I Told Them…", year: 2023, label: "Atlantic · Spaceship" },
  { title: "No Sign of Weakness", year: 2025, label: "Atlantic · Spaceship · Bad Habit" },
];

// A selection of his best-known songs across the years.
const songs = [
  "Ye", "On the Low", "Anybody", "Gbona", "Kilometre", "Last Last",
  "Common Person", "City Boys", "Sittin’ on Top of the World", "Higher",
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
          <Reveal delay={140}>
            <div className="coverGrid">
              {albums.map((a, i) => (
                <div key={a.title}>
                  <AlbumCover title={a.title} year={a.year} index={i} />
                  <p className="cardMeta" style={{ marginTop: 10 }}>{a.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
