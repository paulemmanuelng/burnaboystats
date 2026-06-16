import Reveal from "../components/Reveal";
import Waveform from "../components/Waveform";

export const metadata = { title: "Tour — Burna Boy Stats" };

// Verified, historic live milestones (sources: OkayAfrica, Pulse, Billboard).
const moments = [
  { year: "2019", title: "SSE Arena, Wembley", text: "First Afrobeats artist to sell out the iconic London arena." },
  { year: "2023", title: "London Stadium", text: "First African artist to sell out the 80,000-capacity stadium (3 June 2023), during the Love, Damini tour." },
  { year: "2023", title: "Citi Field, New York", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
];

export default function TourPage() {
  return (
    <main>
      <header className="pageHeader container">
        <h1>
          Live &amp; <span className="accent">On Tour</span>
        </h1>
        <p>Where the African Giant has made history — and where he’s headed</p>
      </header>

      <div className="container">
        {/* CURRENT TOUR — link out to official sources (dates change often) */}
        <Reveal>
          <div className="panel block" style={{ padding: 34 }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>Current Tour</p>
            <h2 className="secTitle">No Sign of Weakness Tour</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Burna Boy is touring his eighth album across the world. Tour dates
              change often, so we don’t list them here — always confirm the
              latest dates and tickets on his official channels before booking.
            </p>
            <div className="panelActions">
              <a
                className="btn btnPrimary"
                href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Tickets ↗
              </a>
              <a
                className="btn btnSecondary"
                href="https://www.onaspaceship.com/tour"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Tour Page ↗
              </a>
            </div>
          </div>
        </Reveal>

        {/* HISTORIC LIVE MOMENTS */}
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
          <div style={{ opacity: 0.5, padding: "8px 0 40px" }}>
            <Waveform bars={56} />
          </div>
        </Reveal>

        <p className="lead" style={{ fontSize: "0.85rem", paddingBottom: 40 }}>
          Live information correct as of June 2026. Always verify dates on
          official ticketing before making travel plans.
        </p>
      </div>
    </main>
  );
}
