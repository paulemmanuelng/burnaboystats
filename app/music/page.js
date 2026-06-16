import Reveal from "../components/Reveal";
import Vinyl from "../components/Vinyl";

export const metadata = { title: "Music — Burna Boy Stats" };

// Verified studio-album discography (sources: Wikipedia, Apple Music, Billboard).
const albums = [
  { n: 1, title: "L.I.F.E", year: 2013, label: "Aristokrat Records" },
  { n: 2, title: "On a Spaceship", year: 2015, label: "Spaceship" },
  { n: 3, title: "Outside", year: 2018, label: "Atlantic · Spaceship" },
  { n: 4, title: "African Giant", year: 2019, label: "Atlantic · Spaceship" },
  { n: 5, title: "Twice as Tall", year: 2020, label: "Atlantic · Spaceship" },
  { n: 6, title: "Love, Damini", year: 2022, label: "Atlantic · Spaceship" },
  { n: 7, title: "I Told Them…", year: 2023, label: "Atlantic · Spaceship" },
  { n: 8, title: "No Sign of Weakness", year: 2025, label: "Atlantic · Spaceship · Bad Habit" },
];

// A selection of his best-known singles across the years.
const songs = [
  "Ye", "On the Low", "Anybody", "Gbona", "Kilometre", "Last Last",
  "Common Person", "City Boys", "Sittin’ on Top of the World", "Higher",
  "TaTaTa", "Update",
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
        {/* SPINNING VINYL FEATURE */}
        <Reveal>
          <div className="centerCol block">
            <Vinyl size={190} />
            <p className="lead" style={{ maxWidth: 460 }}>
              From a Port Harcourt debut to chart-topping global records — explore
              the discography of the African Giant.
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
            <div className="cardGrid">
              {albums.map((a) => (
                <div className="card" key={a.title}>
                  <span className="cardNum">{String(a.n).padStart(2, "0")}</span>
                  <h3 style={{ marginTop: 6 }}>{a.title}</h3>
                  <p className="cardMeta">
                    {a.year} · {a.label}
                  </p>
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
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="lead" style={{ marginTop: 20, fontSize: "0.92rem" }}>
              A selection, not the full catalogue. See the{" "}
              <a href="/certifications" style={{ color: "var(--gold)" }}>
                Certifications
              </a>{" "}
              page for his officially certified tracks.
            </p>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
