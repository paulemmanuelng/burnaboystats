import Link from "next/link";
import styles from "./dai-dai.module.css";

/**
 * The hero's EN/ES switch — a small radiogroup rather than a third full-size
 * pill beside the primary action (design response §5, item 1: "Leer en
 * español becomes the EN/ES switch").
 *
 * The edition you are on is the checked radio; the other is a real link with
 * its hreflang, so it works before hydration and stays crawlable.
 */
export default function LangSwitch({ current, label }: { current: "en" | "es"; label: string }) {
  const item = (lang: "en" | "es", text: string, name: string, href: string) =>
    current === lang ? (
      <span role="radio" aria-checked="true" aria-label={name} lang={lang} className={`${styles.langItem} ${styles.langOn}`}>
        {text}
      </span>
    ) : (
      <Link role="radio" aria-checked="false" aria-label={name} href={href} hrefLang={lang} lang={lang} className={styles.langItem}>
        {text}
      </Link>
    );
  return (
    <span role="radiogroup" aria-label={label} className={styles.lang}>
      {item("en", "EN", "English", "/dai-dai")}
      {item("es", "ES", "Español", "/dai-dai/es")}
    </span>
  );
}
