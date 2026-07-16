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
}

type SceneKey = "hero" | "global1" | "no1s" | "streaming" | "certs" | "finale";

// The narrative. Each step scrolls past; the sticky panel renders the matching
// scene. Numbers are injected from live data so the story never goes stale.
function buildSteps(p: Props): { scene: SceneKey; kicker: string; title: string; body: string }[] {
  return [
    {
      scene: "hero",
      kicker: "15 May 2026",
      title: "The world got a new anthem",
      body: "The 2026 FIFA World Cup unveiled its official song — “Dai Dai”, Shakira × Burna Boy. An Afrobeats hook on the planet's biggest stage.",
    },
    {
      scene: "global1",
      kicker: "The record",
      title: "No. 1 on the Billboard Global 200",
      body: "Within weeks it topped Billboard's flagship, US-inclusive worldwide chart — the first time in history an African artist has ever led it.",
    },
    {
      scene: "no1s",
      kicker: "Worldwide",
      title: "No. 1 in country after country",
      body: `From France and Germany to the Netherlands and the UAE, “Dai Dai” hit the top spot around the world — part of ${p.numberOnes} No. 1 chart placements in Burna Boy's career.`,
    },
    {
      scene: "streaming",
      kicker: "On Spotify",
      title: "The listeners poured in",
      body: `Burna Boy's monthly listeners climbed to ${p.listenersPeak} — a fresh all-time high, and the most of any African artist on the platform.`,
    },
    {
      scene: "certs",
      kicker: "Certified worldwide",
      title: "The plaques rolled in",
      body: `Gold and Platinum from France, Hungary, Slovakia, the US and beyond — part of ${p.certs2026} certifications in 2026, a record for an African artist in a single calendar year.`,
    },
    {
      scene: "finale",
      kicker: "July 2026",
      title: "The biggest song in the world",
      body: "“Dai Dai” reached No. 1 on Spotify's Global chart — the single most-streamed song on Earth. An African artist, leading the world.",
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
          <span className={styles.bigWord}>DAI DAI</span>
          <span className={styles.sceneSub}>Shakira × Burna Boy · FIFA World Cup 2026</span>
        </>
      )}
      {scene === "global1" && (
        <>
          <span className={styles.hash}>№1</span>
          <span className={styles.sceneLabel}>Billboard Global 200</span>
          <span className={styles.sceneNote}>First African artist ever</span>
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
          <span className={styles.bigNum}>{props.listenersPeak}</span>
          <span className={styles.sceneLabel}>Spotify monthly listeners</span>
          <Sparkline data={props.listenersSeries} width={240} height={70} strokeWidth={2.5} ariaLabel="Monthly listeners climbing" />
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
      {scene === "finale" && (
        <>
          <span className={styles.finaleWord}>THE BIGGEST<br />SONG IN<br />THE WORLD</span>
          <span className={styles.sceneLabel}>№1 · Spotify Global Top Songs</span>
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
