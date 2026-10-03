/**
 * The phone board's gross label. The desktop prints every gross in full; the
 * phone has a narrow right-hand column, so it prints a compact figure — and it
 * must still rank. "$X.XXM" did, while every row cleared $1M; once the board
 * took in every verified African show (3 Oct 2026) about forty rows read
 * "$0.xxM" and runs of neighbours collapsed into one label ("$0.05M" three
 * times over). So: millions to three places at $1M and up, thousands to one
 * place below it. tests/revenueGrossLabels.test.ts holds the rule that no two
 * neighbouring rows with different grosses print the same label.
 */
export function compactGross(usd: number): string {
  return usd >= 1e6 ? `$${(usd / 1e6).toFixed(3)}M` : `$${(usd / 1e3).toFixed(1)}K`;
}
