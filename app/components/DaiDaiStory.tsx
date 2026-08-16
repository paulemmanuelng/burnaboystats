"use client"; // scroll-driven: a sticky "scene" that changes as narrative steps pass

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CountUp from "./CountUp";
import styles from "./DaiDaiStory.module.css";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { BURNA_PORTRAIT, SHAKIRA_PORTRAIT } from "../lib/artistImages";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

// Every figure here is "Dai Dai"'s OWN — never Burna Boy's artist-wide totals
// (monthly listeners, YouTube audience, career certs). Burna had a huge
// catalogue and was already climbing before this song; the page credits the
// song for what the song did, and keeps Shakira in frame as the co-lead.
interface Props {
  daiDaiNo1s: number; // Dai Dai's No. 1 countries
  daiDaiCerts: number; // certifications for Dai Dai specifically
  /** Override the narrative — the Spanish edition passes its own. Scene keys
   *  stay the same, so the artwork and layout are shared and only the words
   *  change. Omitted everywhere else, which keeps the English page untouched. */
  steps?: Step[];
  /** Override the words inside the artwork panels. Partial: anything omitted
   *  falls back to the English copy. */
  sceneCopy?: Partial<SceneCopy>;
}

export type SceneKey =
  | "hero"
  | "global1"
  | "no1s"
  | "streaming"
  | "certs"
  | "worldsong"
  | "halftime";

export interface Step {
  scene: SceneKey;
  kicker: string;
  title: string;
  body: string;
}

/** The words baked into the artwork panels. Chart names stay as they are —
 *  "Billboard Global 200" is the chart's name in any language — but the
 *  sentences around them are translatable. */
export interface SceneCopy {
  heroLabel: string;
  global1Note: string;
  no1sLabel: string;
  no1sLink: string;
  streamingNote: string;
  certsLabel: string;
  certsNote: string;
  certsLink: string;
  worldsongWord: string;
  worldsongLabel: string;
  halftimeLabel: string;
  halftimeNote: string;
}

const EN_SCENE: SceneCopy = {
  heroLabel: "Dai Dai · Shakira × Burna Boy",
  global1Note: "First African artist ever · Shakira's 2nd",
  no1sLabel: "countries at No. 1",
  no1sLink: "See every Dai Dai chart position →",
  streamingNote: "Daily & Weekly · 33 days as Earth's most-streamed song",
  certsLabel: "certifications for Dai Dai",
  certsNote: "2× Platinum (Latin) US · Gold in 5 more",
  certsLink: "See the Dai Dai certifications →",
  worldsongWord: "BIGGEST\nWORLD CUP\nANTHEM EVER",
  worldsongLabel: "Highest-peaking on Spotify Global",
  halftimeLabel: "World Cup Final · Halftime show",
  halftimeNote: "Shakira & Burna Boy · halftime show, 19 July",
};

// Official artwork + artist images, served from Spotify's CDN (the same source
// the discography uses). The Dai Dai cover carries both artists' branding, so it
// doubles as the collaboration visual.
const COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";
const BURNA = BURNA_PORTRAIT;
const SHAKIRA = SHAKIRA_PORTRAIT;


// The narrative — framed as the Shakira × Burna Boy collaboration it is, not one
// artist's star power. Numbers are injected from live data so it never goes stale.
function buildSteps(p: Props): Step[] {
  return [
    {
      scene: "hero",
      kicker: "15 May 2026",
      title: "A World Cup anthem, together",
      body: "The 2026 FIFA World Cup unveiled its official song — “Dai Dai”, a collaboration between two global superstars: Shakira and Burna Boy. Latin pop meets Afrobeats on the planet's biggest stage.",
    },
    {
      scene: "global1",
      kicker: "The record",
      title: "No. 1 on the Billboard Global 200",
      body: "Within weeks their song topped Billboard's flagship, US-inclusive worldwide chart — Shakira's second-ever Global 200 No. 1, and the first time in history an African artist has helped lead it. Its Global 200 run closed at four straight weeks, and it still leads the Global 200 Excl. US — a seventh consecutive week and counting.",
    },
    {
      scene: "no1s",
      kicker: "Worldwide",
      title: "No. 1 in country after country",
      body: `“Dai Dai” hit No. 1 in ${p.daiDaiNo1s} countries — from France and Germany to the Netherlands and the UAE — and topped both of Billboard's global charts. The reach of a true worldwide collaboration.`,
    },
    {
      scene: "streaming",
      kicker: "On streaming",
      title: "The most-streamed song on Earth",
      body: "“Dai Dai” topped Spotify's Global Top Songs chart on both the Daily and Weekly lists — 33 days as the single most-streamed song on the planet, a run reclaimed in August, and the first time an African artist has ever led it.",
    },
    {
      scene: "certs",
      kicker: "Certified worldwide",
      title: "The plaques rolled in",
      body: `The song earned its own plaques — 2× Platinum (Latin) in the US, Platinum in Spain, France, Slovakia and Portugal, Gold in Colombia, Hungary, Greece and the Czech Republic, and Silver in the UK. ${p.daiDaiCerts} certifications for Shakira and Burna Boy's collaboration, and counting.`,
    },
    {
      scene: "worldsong",
      kicker: "The record",
      title: "The biggest World Cup anthem ever",
      body: "No FIFA World Cup song has ever charted this high: “Dai Dai” is the highest-peaking World Cup anthem in Spotify Global history — Shakira's Latin pop and Burna Boy's Afrobeats meeting at the very top.",
    },
    {
      scene: "halftime",
      kicker: "History made · 19 July",
      title: "History on the World Cup Final stage",
      body: "Shakira and Burna Boy took “Dai Dai” to the first-ever FIFA World Cup Final halftime show at MetLife Stadium on 19 July — before a global audience of billions, alongside Madonna, BTS and Justin Bieber.",
    },
  ];
}

function Scene({ scene, props }: { scene: SceneKey; props: Props }) {
  const c: SceneCopy = { ...EN_SCENE, ...props.sceneCopy };
  // key={scene} on the wrapper remounts each scene, replaying the entrance
  // animation (and re-running CountUp) as you scroll from one step to the next.
  return (
    <div key={scene} className={styles.scene}>
      {scene === "hero" && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.cover} src={COVER} alt="Dai Dai single cover — Shakira × Burna Boy, 2026 FIFA World Cup" width={220} height={220} loading="eager" />
          <span className={styles.sceneLabel}>{c.heroLabel}</span>
        </>
      )}
      {scene === "global1" && (
        <>
          <span className={styles.hash}>№1</span>
          <span className={styles.sceneLabel}>Billboard Global 200</span>
          <span className={styles.sceneNote}>{c.global1Note}</span>
        </>
      )}
      {scene === "no1s" && (
        <>
          <span className={styles.bigNum}><CountUp end={props.daiDaiNo1s} /></span>
          <span className={styles.sceneLabel}>{c.no1sLabel}</span>
          <span className={styles.flags}>🇫🇷 🇩🇪 🇳🇱 🇨🇭 🇦🇷 🇨🇴 🇦🇪 🇬🇷 🇱🇺 🇸🇰</span>
          <Link href="/records/charts?song=Dai%20Dai" className={styles.sceneLink}>
            {c.no1sLink}
          </Link>
        </>
      )}
      {scene === "streaming" && (
        <>
          <span className={styles.hash}>№1</span>
          <span className={styles.sceneLabel}>Spotify Global Top Songs</span>
          <span className={styles.sceneNote}>{c.streamingNote}</span>
        </>
      )}
      {scene === "certs" && (
        <>
          <span className={styles.bigNum}><CountUp end={props.daiDaiCerts} /></span>
          <span className={styles.sceneLabel}>{c.certsLabel}</span>
          <span className={styles.sceneNote}>{c.certsNote}</span>
          <span className={styles.tierDots}>
            <i style={{ background: "#dfe2e8" }} /> <i style={{ background: "var(--gold)" }} />
          </span>
          <Link href="/certifications?release=Dai%20Dai" className={styles.sceneLink}>
            {c.certsLink}
          </Link>
        </>
      )}
      {scene === "worldsong" && (
        <>
          <span className={styles.finaleWord}>
            {c.worldsongWord.split("\n").map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </span>
          <span className={styles.sceneLabel}>{c.worldsongLabel}</span>
        </>
      )}
      {scene === "halftime" && (
        <>
          <div className={styles.duo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.duoImg} src={spotifyImage(SHAKIRA, 320)} srcSet={spotifySrcSet(SHAKIRA)} sizes="128px" alt="Shakira" width={128} height={128} loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.duoImg} src={spotifyImage(BURNA, 320)} srcSet={spotifySrcSet(BURNA)} sizes="128px" alt="Burna Boy" width={128} height={128} loading="lazy" />
          </div>
          <span className={styles.sceneLabel}>{c.halftimeLabel}</span>
          <span className={styles.sceneNote}>{c.halftimeNote}</span>
        </>
      )}
    </div>
  );
}

export default function DaiDaiStory(props: Props) {
  const steps = props.steps ?? buildSteps(props);
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        });
      },
      // A thin band at the vertical centre: a step activates as it crosses it.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Screen 25's back bar. It lives here rather than in the page because the
          step counter is this component's state; a bar in the page would need
          that lifted for no other reason. Mobile only — the desktop layout
          keeps the site nav. */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Dai Dai</span>
        <span className={styles.backStep}>
          {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
        <MobileMenuButton />
      </div>

    <div className={styles.scrolly}>
      <div className={styles.stickyCol}>
        <div className={styles.sticky}>
          {/* A blurred cover fills the stage behind every scene so it never feels empty. */}
          <div className={styles.backdrop} style={{ backgroundImage: `url(${COVER})` }} aria-hidden="true" />
          <Scene scene={steps[active].scene} props={props} />
          <div className={styles.progressBar} aria-hidden="true">
            {steps.map((_, i) => (
              <span key={i} className={`${styles.tick} ${i === active ? styles.tickOn : ""}`} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.steps}>
        {steps.map((s, i) => (
          <div
            key={i}
            data-step={i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`${styles.step} ${active === i ? styles.stepOn : ""}`}
          >
            <div className={styles.stepInner}>
              {/* Archetype 5, RESPONSIVE-AND-STATES.md: between 900 and 1239 the
                  stage unsticks and each scene renders inline above its own step
                  text. A sticky scroll narrative needs two full columns to read;
                  below that it fights the scroll. Hidden at every other width,
                  where the single shared stage is the one on screen. */}
              {/* No aria-hidden: display:none already keeps these out of the
                  accessibility tree at every other width, and at tablet this is
                  the only scene on screen — hiding it would drop the figure. */}
              <div className={styles.inlineScene}>
                <div className={styles.inlineSceneCard}>
                  <div
                    className={styles.backdrop}
                    style={{ backgroundImage: `url(${COVER})` }}
                    aria-hidden="true"
                  />
                  <Scene scene={s.scene} props={props} />
                </div>
              </div>
              <span className={styles.stepIndex} aria-hidden="true">
                {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <span className={styles.stepKicker}>{s.kicker}</span>
              <h2 className={styles.stepTitle}>{s.title}</h2>
              <p className={styles.stepBody}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
