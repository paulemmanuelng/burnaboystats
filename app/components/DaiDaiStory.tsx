"use client"; // scroll-driven: a sticky "scene" that changes as narrative steps pass

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import Sparkline from "./Sparkline";
import styles from "./DaiDaiStory.module.css";

interface Props {
  numberOnes: number;
  listenersPeak: string; // e.g. "52.74M"
  listenersSeries: number[];
  certs2026: number;
  youtubeAudience: string; // e.g. "714M"
}

// Official artwork + artist images, served from Spotify's CDN (the same source
// the discography uses). The Dai Dai cover carries both artists' branding, so it
// doubles as the collaboration visual.
const COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";
const BURNA = "https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f";
const SHAKIRA = "https://i.scdn.co/image/ab6761610000e5eb17f15f351cba70561ad8bcac";

type SceneKey = "hero" | "global1" | "no1s" | "streaming" | "certs" | "worldsong" | "halftime";

// The narrative — framed as the Shakira × Burna Boy collaboration it is, not one
// artist's star power. Numbers are injected from live data so it never goes stale.
function buildSteps(p: Props): { scene: SceneKey; kicker: string; title: string; body: string }[] {
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
      body: "Within weeks their song topped Billboard's flagship, US-inclusive worldwide chart — Shakira's second-ever Global 200 No. 1, and the first time in history an African artist has helped lead it.",
    },
    {
      scene: "no1s",
      kicker: "Worldwide",
      title: "No. 1 in country after country",
      body: `From France and Germany to the Netherlands and the UAE, “Dai Dai” hit the top spot around the world — part of ${p.numberOnes} No. 1 chart placements, the reach of a true global collaboration.`,
    },
    {
      scene: "streaming",
      kicker: "On streaming",
      title: "The whole world pressed play",
      body: `Powered by the song, Burna Boy's Spotify monthly listeners climbed to ${p.listenersPeak} and his YouTube Music audience passed ${p.youtubeAudience} — the first African artist ever beyond 700 million there.`,
    },
    {
      scene: "certs",
      kicker: "Certified worldwide",
      title: "The plaques rolled in",
      body: `Gold and Platinum for Shakira and Burna Boy from France, Hungary, Slovakia, the US and beyond — part of ${p.certs2026} certifications in 2026, a record year for an African artist.`,
    },
    {
      scene: "worldsong",
      kicker: "July 2026",
      title: "The biggest song in the world",
      body: "“Dai Dai” reached No. 1 on Spotify's Global chart — the single most-streamed song on Earth, and the most-watched video of the year.",
    },
    {
      scene: "halftime",
      kicker: "This weekend · 19 July",
      title: "Live on the World Cup Final stage",
      body: "Shakira and Burna Boy take “Dai Dai” to the 2026 FIFA World Cup Final halftime show — performing to a global audience of billions, on a bill alongside Madonna, BTS, Justin Bieber and Coldplay.",
    },
  ];
}

function Scene({ scene, props }: { scene: SceneKey; props: Props }) {
  // key={scene} on the wrapper remounts each scene, replaying the entrance
  // animation (and re-running CountUp) as you scroll from one step to the next.
  return (
    <div key={scene} className={styles.scene}>
      {scene === "hero" && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.cover} src={COVER} alt="Dai Dai single cover — Shakira × Burna Boy, 2026 FIFA World Cup" width={220} height={220} loading="eager" />
          <span className={styles.sceneLabel}>Dai Dai · Shakira × Burna Boy</span>
        </>
      )}
      {scene === "global1" && (
        <>
          <span className={styles.hash}>№1</span>
          <span className={styles.sceneLabel}>Billboard Global 200</span>
          <span className={styles.sceneNote}>First African artist ever · Shakira&apos;s 2nd</span>
        </>
      )}
      {scene === "no1s" && (
        <>
          <span className={styles.bigNum}><CountUp end={props.numberOnes} /></span>
          <span className={styles.sceneLabel}>No. 1s worldwide</span>
          <span className={styles.flags}>🇫🇷 🇩🇪 🇳🇱 🇨🇭 🇦🇷 🇨🇴 🇦🇪 🇬🇷 🇱🇺 🇸🇰</span>
        </>
      )}
      {scene === "streaming" && (
        <>
          <div className={styles.twoStat}>
            <span className={styles.midNum}>{props.listenersPeak}</span>
            <span className={styles.midLabel}>Spotify listeners</span>
          </div>
          <div className={styles.twoStat}>
            <span className={styles.midNum}>{props.youtubeAudience}</span>
            <span className={styles.midLabel}>YouTube audience</span>
          </div>
          <Sparkline data={props.listenersSeries} width={220} height={56} strokeWidth={2.5} ariaLabel="Streaming climbing" />
        </>
      )}
      {scene === "certs" && (
        <>
          <span className={styles.bigNum}><CountUp end={props.certs2026} /></span>
          <span className={styles.sceneLabel}>certifications in 2026</span>
          <span className={styles.tierDots}>
            <i style={{ background: "#8fe3f0" }} /> <i style={{ background: "#dfe2e8" }} /> <i style={{ background: "var(--gold)" }} /> <i style={{ background: "#b8bcc4" }} />
          </span>
        </>
      )}
      {scene === "worldsong" && (
        <>
          <span className={styles.finaleWord}>THE BIGGEST<br />SONG IN<br />THE WORLD</span>
          <span className={styles.sceneLabel}>№1 · Spotify Global Top Songs</span>
        </>
      )}
      {scene === "halftime" && (
        <>
          <div className={styles.duo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.duoImg} src={SHAKIRA} alt="Shakira" width={128} height={128} loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.duoImg} src={BURNA} alt="Burna Boy" width={128} height={128} loading="lazy" />
          </div>
          <span className={styles.sceneLabel}>World Cup Final · Halftime show</span>
          <span className={styles.sceneNote}>Shakira &amp; Burna Boy · live, 19 July</span>
        </>
      )}
    </div>
  );
}

export default function DaiDaiStory(props: Props) {
  const steps = buildSteps(props);
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
  );
}
