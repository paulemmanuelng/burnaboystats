import Link from "next/link";
import styles from "./UpdatesList.module.css";
import type { Update } from "../data/updates";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function UpdatesList({ items }: { items: Update[] }) {
  return (
    <ol className={styles.list}>
      {items.map((u, i) => (
        <li key={i} className={styles.row}>
          <div className={styles.meta}>
            <span className={styles.date}>{formatDate(u.date)}</span>
            <span className={styles.category}>{u.category}</span>
          </div>
          <Link href={u.href} className={styles.text}>
            {u.text}
          </Link>
        </li>
      ))}
    </ol>
  );
}
