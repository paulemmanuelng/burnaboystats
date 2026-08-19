# Design docs

Briefs and audits for burnaboystats.com, kept in the repo so they can be linked
and read on GitHub rather than passed around as attachments.

| file | what it is |
|---|---|
| [ui-ux-audit.md](ui-ux-audit.md) | Measured UI/UX audit of the live site — contrast, tier colours, type scale, tap targets, and the one real layout defect. Start here for a general design pass. |
| [design-pass-aug-11-spec.md](design-pass-aug-11-spec.md) | The designer's final implementation spec — the four accepted changes with every computed value. Implemented; see the notes at the top for where the codebase differed from it. |
| [design-pass-review-aug-11.md](design-pass-review-aug-11.md) | Our reply to the designer's first pass — what's accepted, one maths correction, and the codebase details the spec needs before it can be implemented. |
| [car-artwork-process.md](car-artwork-process.md) | **Start here for car artwork.** The standing per-car process: one car = one brief = one deliverable, fixed conventions, and the fidelity gate every drawing must pass. |
| [car-01-chiron.md](car-01-chiron.md) | The first car brief: the Venuum Widebody Chiron — references and the required-features checklist. |
| [afrobeats-board-and-mobile-brief.md](afrobeats-board-and-mobile-brief.md) | **Current brief.** Four jobs: the Afrobeats Board's mobile screens, the full board design (desktop + mobile), Burna Boy's portrait in the `/certifications` header, and the home page's gold density plus the clipped “59”. The board is on a branch and not live — §0 explains how to see it. |
| [car-collection-brief.md](car-collection-brief.md) | Brief for redesigning `/records/cars`: a per-car detail treatment with specs, and a stylised silhouette instead of photos or 3D. |

Note: `/design` in the repo root is a **local-only** drop folder (gitignored) for
incoming design output. Anything a designer needs to *read* belongs here in
`docs/design/` instead, because the ignored folder never reaches GitHub.
