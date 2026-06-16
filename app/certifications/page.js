import styles from "./certifications.module.css";
import Reveal from "../components/Reveal";
import Equalizer from "../components/Equalizer";

// ============================================================
//  THE DATA
//  All UK (BPI) certifications, verified June 2026.
//  This is just a list (an "array") of objects. To add or edit
//  a certification later, you only touch this data — not the
//  layout code below. That separation is a core skill.
// ============================================================

const albums = [
  { title: "African Giant", year: 2019, cert: "Gold" },
  { title: "Twice as Tall", year: 2020, cert: "Gold" },
  { title: "Love, Damini", year: 2022, cert: "Gold" },
  { title: "I Told Them...", year: 2023, cert: "Gold" },
];

// "tier" decides the badge colour; "cert" is the text we show.
// The list is ordered from highest certification to lowest.
const singles = [
  { title: "Location", credit: "Dave ft. Burna Boy", role: "Featured", year: 2019, cert: "5× Platinum", tier: "platinum" },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", role: "Featured", year: 2019, cert: "3× Platinum", tier: "platinum" },
  { title: "Last Last", role: "Lead", year: 2022, cert: "2× Platinum", tier: "platinum" },
  { title: "Ye", role: "Lead", year: 2018, cert: "Platinum", tier: "platinum" },
  { title: "For My Hand", credit: "ft. Ed Sheeran", role: "Lead", year: 2022, cert: "Platinum", tier: "platinum" },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", role: "Featured", year: 2019, cert: "Platinum", tier: "platinum" },
  { title: "Play Play", credit: "J Hus ft. Burna Boy", role: "Featured", year: 2020, cert: "Platinum", tier: "platinum" },
  { title: "On the Low", role: "Lead", year: 2018, cert: "Gold", tier: "gold" },
  { title: "City Boys", role: "Lead", year: 2023, cert: "Gold", tier: "gold" },
  { title: "Gbona", role: "Lead", year: 2018, cert: "Silver", tier: "silver" },
  { title: "Anybody", role: "Lead", year: 2019, cert: "Silver", tier: "silver" },
  { title: "Gum Body", credit: "ft. Jorja Smith", role: "Lead", year: 2019, cert: "Silver", tier: "silver" },
  { title: "Secret", credit: "ft. Jeremih & Serani", role: "Lead", year: 2018, cert: "Silver", tier: "silver" },
  { title: "Sittin' on Top of the World", credit: "ft. 21 Savage", role: "Lead", year: 2023, cert: "Silver", tier: "silver" },
  { title: "Cheat on Me", credit: "ft. Dave", role: "Lead", year: 2023, cert: "Silver", tier: "silver" },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", role: "Featured", year: 2020, cert: "Silver", tier: "silver" },
  { title: "Real Life", credit: "Stormzy ft. Burna Boy", role: "Featured", year: 2020, cert: "Silver", tier: "silver" },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", role: "Featured", year: 2020, cert: "Silver", tier: "silver" },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", role: "Featured", year: 2024, cert: "Silver", tier: "silver" },
];

export default function CertificationsPage() {
  return (
    <main>
      {/* Page heading with an animated equalizer accent */}
      <header className="pageHeader container">
        <h1>
          Certified <span className="accent">Songs</span>
        </h1>
        <p>Every Burna Boy track &amp; album certified by the UK&apos;s BPI</p>
        <div className={styles.headerEq}>
          <Equalizer bars={11} />
        </div>
      </header>

      <div className="container">
        {/* -------------------- ALBUMS -------------------- */}
        <h2 className={styles.sectionTitle}>Albums</h2>
        <Reveal>
          <div className={styles.albumGrid}>
            {albums.map((album) => (
              <div key={album.title} className={styles.albumCard}>
                <span className={`${styles.badge} ${styles.gold}`}>
                  {album.cert}
                </span>
                <h3>{album.title}</h3>
                <p>{album.year}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* -------------------- SINGLES -------------------- */}
        <h2 className={styles.sectionTitle}>
          Singles <span className={styles.count}>({singles.length})</span>
        </h2>

        {/* The wrapper lets the table scroll sideways on small phones */}
        <Reveal>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Role</th>
                  <th className={styles.center}>Year</th>
                  <th className={styles.right}>Certification</th>
                </tr>
              </thead>
              <tbody>
                {singles.map((song) => (
                  <tr key={song.title}>
                    <td>
                      <span className={styles.songTitle}>{song.title}</span>
                      {song.credit && (
                        <span className={styles.credit}>{song.credit}</span>
                      )}
                    </td>
                    <td>
                      <span className={styles.role}>{song.role}</span>
                    </td>
                    <td className={styles.center}>{song.year}</td>
                    <td className={styles.right}>
                      <span className={`${styles.badge} ${styles[song.tier]}`}>
                        {song.cert}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Source note — good practice for any data you present */}
        <p className={styles.source}>
          Data: British Phonographic Industry (BPI) certifications, verified
          June 2026. Silver = 200,000 units · Gold = 400,000 · Platinum =
          600,000. Burna Boy is also certified in the US, Canada, France,
          Australia and beyond.
        </p>
      </div>
    </main>
  );
}
