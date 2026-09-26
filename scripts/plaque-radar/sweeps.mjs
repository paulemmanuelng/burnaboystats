// Dated plaques in the board's sweep documents (docs/sweeps/<slug>-certifications-v1.md).
//
// The data files carry each plaque's CURRENT tier and no date; the sweep
// documents often print the date the body awarded it, in one of two shapes:
//
//   | 🇬🇧 UK | BPI | Finesse | Gold | 14.11.2025 | `PHEELZ & BNXN` |
//   | Lonely At The Top | 🇳🇬 **8× Platinum** ✓ · 🇬🇧 Silver ✓ (21.03.2025) | **2** |
//
// Only the four markets the radar serves are read. Pure: text in, rows out.

const FLAG = { "🇬🇧": "UK", "🇿🇦": "ZA", "🇦🇺": "AU", "🇵🇹": "PT" };
const WORD = {
  platinum: "Platinum", platina: "Platinum", gold: "Gold", ouro: "Gold", silver: "Silver", diamond: "Diamond", diamante: "Diamond",
};
const TIER = "(?:(\\d+)\\s*[×x]\\s*)?(Platinum|Platina|Gold|Ouro|Silver|Diamond|Diamante)";

const toIso = (d) => d.replace(/^(\d{2})\.(\d{2})\.(\d{4})$/, "$3-$2-$1");

/** Strip a sweep row's title cell to the title: bold, backticks, years and
 *  credit parentheticals go; the matcher does the rest. */
export const sweepTitle = (cell) =>
  String(cell)
    .replace(/[*`]/g, "")
    .replace(/\s*\((?:19|20)\d{2}\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function parseSweepDoc(text, slug) {
  const rows = [];
  const lines = String(text).split(/\r?\n/);
  const direct = new RegExp(`^\\|\\s*(🇬🇧|🇿🇦|🇦🇺|🇵🇹)\\s*(?:UK|ZA|AU|PT)\\s*\\|[^|]*\\|\\s*([^|]+?)\\s*\\|\\s*\\**${TIER}\\**\\s*\\|\\s*(\\d{2}\\.\\d{2}\\.\\d{4})\\s*\\|`, "i");
  const inline = new RegExp(`(🇬🇧|🇿🇦|🇦🇺|🇵🇹)\\s*\\**\\s*${TIER}\\**\\s*✓\\S*\\s*\\*?\\((?:cert\\.\\s*|upgraded\\s*)?(\\d{2}\\.\\d{2}\\.\\d{4})\\)`, "gi");
  lines.forEach((line, i) => {
    if (!line.startsWith("|")) return;
    const d = line.match(direct);
    if (d) {
      rows.push({ slug, market: FLAG[d[1]], title: sweepTitle(d[2]), level: WORD[d[4].toLowerCase()], x: Number(d[3] ?? 1), date: toIso(d[5]), line: i + 1 });
      return;
    }
    const title = sweepTitle(line.split("|")[1] ?? "");
    if (!title || /[🇦-🇿]{2}/u.test(title)) return;
    for (const m of line.matchAll(inline)) {
      rows.push({ slug, market: FLAG[m[1]], title, level: WORD[m[3].toLowerCase()], x: Number(m[2] ?? 1), date: toIso(m[4]), line: i + 1 });
    }
  });
  return rows;
}
