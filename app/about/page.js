import Reveal from "../components/Reveal";
import Equalizer from "../components/Equalizer";

export const metadata = { title: "About — Burna Boy Stats" };

// Verified quick facts (sources: Wikipedia, Grammy.com, Billboard).
const facts = [
  { label: "Real name", value: "Damini Ebunoluwa Ogulu" },
  { label: "Born", value: "2 July 1991" },
  { label: "Birthplace", value: "Port Harcourt, Nigeria" },
  { label: "Genre", value: "Afro-fusion" },
  { label: "Labels", value: "Spaceship · Atlantic" },
  { label: "Grammy", value: "Winner, 2021" },
];

// Verified career milestones.
const timeline = [
  { year: "1991", title: "Born in Port Harcourt", text: "Damini Ebunoluwa Ogulu is born on 2 July 1991 in Rivers State, Nigeria." },
  { year: "2013", title: "Debut album — L.I.F.E", text: "Releases his first studio album on Aristokrat Records." },
  { year: "2018", title: "Goes global with Outside", text: "Signs to Atlantic Records and releases his third album, Outside." },
  { year: "2019", title: "African Giant", text: "His breakthrough album. Becomes the first Afrobeats artist to sell out the SSE Arena, Wembley, and wins the BET Award for Best International Act." },
  { year: "2020", title: "Twice as Tall", text: "His fifth studio album arrives to worldwide acclaim." },
  { year: "2021", title: "Grammy winner", text: "Wins Best Global Music Album for Twice as Tall at the 63rd Grammy Awards." },
  { year: "2022", title: "Love, Damini", text: "Becomes the highest-debuting Nigerian album on the US Billboard 200." },
  { year: "2023", title: "Stadium history", text: "First African artist to sell out London Stadium (80,000) and to headline & sell out a stadium in the US (Citi Field). Also releases I Told Them…" },
  { year: "2025", title: "No Sign of Weakness", text: "Releases his eighth studio album and becomes the first Nigerian artist to headline the legendary Red Rocks Amphitheatre, on his biggest North American tour to date." },
  { year: "2026", title: "FIFA World Cup opener", text: "Headlines the 2026 FIFA World Cup Opening Ceremony in Mexico City alongside Shakira, performing the official tournament song, “Dai Dai.”" },
];

export default function AboutPage() {
  return (
    <main>
      <header className="pageHeader container">
        <h1>
          About the <span className="accent">Giant</span>
        </h1>
        <p>The story of Damini Ogulu — Afrobeats’ African Giant</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 22, height: 24 }}>
          <Equalizer bars={9} />
        </div>
      </header>

      <div className="container">
        {/* BIO + FAST FACTS */}
        <div className="split block">
          <Reveal>
            <div>
              <p className="eyebrow">Biography</p>
              <p className="lead">
                Burna Boy — born Damini Ebunoluwa Ogulu on 2 July 1991 in Port
                Harcourt — is one of the most successful African artists of all
                time, rising from Nigeria’s music scene to become a global
                headliner and Grammy winner.
              </p>
              <p className="lead" style={{ marginTop: 16 }}>
                Music runs in the family: his maternal grandfather, Benson
                Idonije, was a veteran broadcaster and critic who once managed
                the legendary Fela Kuti. Burna Boy blends Afrobeat, dancehall,
                reggae, hip-hop, R&amp;B and pop into a sound he calls
                “Afro-fusion.” His mother, Bose Ogulu, is also his manager.
              </p>
              <p className="lead" style={{ marginTop: 16 }}>
                Since his 2013 debut L.I.F.E, he has released eight studio
                albums, won a Grammy, and made history as the first African
                artist to sell out stadiums in both the UK and the US — cementing
                his status as the self-styled “African Giant.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Fast Facts</p>
              <div className="facts">
                {facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <span className="factLabel">{f.label}</span>
                    <span className="factValue">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* TIMELINE */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Career Timeline</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              Milestones of a <span className="goldText">global icon</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="tRow" key={t.year + t.title}>
                  <span className="tYear">{t.year}</span>
                  <div className="tContent">
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
