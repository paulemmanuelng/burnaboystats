"use client"; // scroll-driven: a sticky "scene" that changes as narrative steps pass

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CountUp from "./CountUp";
import styles from "./DaiDaiStory.module.css";

// Every figure here is "Dai Dai"'s OWN — never Burna Boy's artist-wide totals
// (monthly listeners, YouTube audience, career certs). Burna had a huge
// catalogue and was already climbing before this song; the page credits the
// song for what the song did, and keeps Shakira in frame as the co-lead.
interface Props {
  daiDaiNo1s: number; // Dai Dai's No. 1 countries
  daiDaiCerts: number; // certifications for Dai Dai specifically
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
      body: `“Dai Dai” hit No. 1 in ${p.daiDaiNo1s} countries — from France and Germany to the Netherlands and the UAE — and topped both of Billboard's global charts. The reach of a true worldwide collaboration.`,
    },
    {
      scene: "streaming",
      kicker: "On streaming",
      title: "The most-streamed song on Earth",
      body: "“Dai Dai” topped Spotify's Global Top Songs chart on both the Daily and Weekly lists — the single most-streamed song on the planet, and the first time an African artist has ever led it. Shakira and Burna Boy, No. 1 worldwide.",
    },
    {
      scene: "certs",
      kicker: "Certified worldwide",
      title: "The plaques rolled in",
      body: `The song earned its own plaques — 2× Platinum (Latin) in the US and Gold in France, Spain, Colombia, Hungary and Slovakia. ${p.daiDaiCerts} certifications for Shakira and Burna Boy's collaboration, and counting.`,
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
          <span className={styles.bigNum}><CountUp end={props.daiDaiNo1s} /></span>
          <span className={styles.sceneLabel}>countries at No. 1</span>
          <span className={styles.flags}>🇫🇷 🇩🇪 🇳🇱 🇨🇭 🇦🇷 🇨🇴 🇦🇪 🇬🇷 🇱🇺 🇸🇰</span>
          <Link href="/records/charts?song=Dai%20Dai" className={styles.sceneLink}>
            See every Dai&nbsp;Dai chart position →
          </Link>
        </>
      )}
      {scene === "streaming" && (
        <>
          <span className={styles.hash}>№1</span>
          <span className={styles.sceneLabel}>Spotify Global Top Songs</span>
          <span className={styles.sceneNote}>Daily &amp; Weekly · most-streamed song on Earth</span>
        </>
      )}
      {scene === "certs" && (
        <>
          <span className={styles.bigNum}><CountUp end={props.daiDaiCerts} /></span>
          <span className={styles.sceneLabel}>certifications for Dai Dai</span>
          <span className={styles.sceneNote}>2× Platinum (Latin) US · Gold in 5 more</span>
          <span className={styles.tierDots}>
            <i style={{ background: "#dfe2e8" }} /> <i style={{ background: "var(--gold)" }} />
          </span>
          <Link href="/certifications?release=Dai%20Dai" className={styles.sceneLink}>
            See the Dai&nbsp;Dai certifications →
          </Link>
        </>
      )}
      {scene === "worldsong" && (
        <>
          <span className={styles.finaleWord}>BIGGEST<br />WORLD CUP<br />ANTHEM EVER</span>
          <span className={styles.sceneLabel}>Highest-peaking on Spotify Global</span>
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
          <span className={styles.sceneNote}>Shakira &amp; Burna Boy · halftime show, 19 July</span>
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
