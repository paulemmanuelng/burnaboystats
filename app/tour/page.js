import Reveal from "../components/Reveal";
import Waveform from "../components/Waveform";
import KeepExploring from "../components/KeepExploring";

export const metadata = {
  title: "Burna Boy Live — Tour & Historic Performances",
  description:
    "Burna Boy's biggest live moments: sold-out stadiums (London Stadium, Citi Field, Stade de France), the Grammys, and the 2026 FIFA World Cup opening ceremony.",
  alternates: { canonical: "/tour" },
  openGraph: { title: "Burna Boy Live", description: "Stadiums, Grammys and the World Cup." },
};

// Verified live milestones (sources: Billboard, Rolling Stone, OkayAfrica, Pulse).
const moments = [
  { year: "2023", title: "London Stadium (sold out)", text: "First African artist to sell out the 80,000-capacity stadium (3 June 2023), on the Love, Damini tour." },
  { year: "2023", title: "Citi Field, New York (sold out)", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
  { year: "2024", title: "Grammy Awards Stage", text: "First African artist to perform on the Grammy Awards stage — a medley from I Told Them… with Brandy and 21 Savage." },
  { year: "2025", title: "Stade de France, Paris (sold out)", text: "First African artist to headline and sell out the 80,000-capacity Stade de France (18 April 2025)." },
  { year: "2026", title: "FIFA World Cup Opening Ceremony", text: "Headlined the opener in Mexico City with Shakira, performing the official tournament song “Dai Dai.”" },
];

export default function TourPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Live &amp; <span className="accent">On Stage</span>
        </h1>
        <p>From sold-out stadiums to the World Cup — the African Giant live</p>
      </header>

      <div className="container">
        {/* MOST RECENT — WORLD CUP */}
        <Reveal>
          <div className="panel block">
            <p className="eyebrow" style={{ marginBottom: 8 }}>Most Recent</p>
            <h2 className="secTitle">2026 FIFA World Cup Opening Ceremony</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              On 11 June 2026, Burna Boy headlined the World Cup opening ceremony
              in Mexico City alongside Shakira, performing “Dai Dai” — the
              official song of the tournament, on one of the biggest stages in
              the world.
            </p>
          </div>
        </Reveal>

        {/* TOUR STATUS */}
        <Reveal>
          <div className="block">
            <p className="eyebrow">Touring</p>
            <h2 className="secTitle">
              The <span className="goldText">No Sign of Weakness</span> Tour
            </h2>
            <p className="lead" style={{ marginTop: 12 }}>
              His most recent tour, supporting the 2025 album of the same name,
              has wrapped. It was his biggest North American run to date — he
              became the first Nigerian artist to headline Red Rocks Amphitheatre
              and sold out arenas including back-to-back nights in Toronto,
              finishing in December 2025.
            </p>
            <div className="panelActions">
              <a className="btn btnPrimary" href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272" target="_blank" rel="noopener noreferrer">
                Future Dates ↗
              </a>
              <a className="btn btnSecondary" href="https://www.onaspaceship.com/tour" target="_blank" rel="noopener noreferrer">
                Official Site ↗
              </a>
            </div>
          </div>
        </Reveal>

        {/* HISTORIC MOMENTS */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Legendary Live Moments</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              History made <span className="goldText">on stage</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="timeline">
              {moments.map((m) => (
                <div className="tRow" key={m.title}>
                  <span className="tYear">{m.year}</span>
                  <div className="tContent">
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ opacity: 0.5, padding: "8px 0 24px" }}>
            <Waveform bars={56} />
          </div>
        </Reveal>
        <p className="lead" style={{ fontSize: "0.85rem", paddingBottom: 40 }}>
          Live information correct as of June 2026. Always verify any future
          dates on official ticketing before making travel plans.
        </p>
      </div>

      <KeepExploring current="/tour" />
    </main>
  );
}
