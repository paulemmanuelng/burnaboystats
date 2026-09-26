/**
 * Every string the replay prints, in both editions. Templates, not functions:
 * the replay is a client component and a function cannot cross the server
 * boundary. Placeholders are named in braces; the player fills them.
 *
 * Nothing here states a figure. Counts, dates and positions all arrive as data
 * (app/components/daiDaiReplayData.ts) and fill the braces.
 */
export interface ReplayLabels {
  kicker: string;
  title: string;
  intro: string;
  /** The readout at the end frame, and on the poster. */
  peakPicture: string;
  /** "Week of {date}" */
  weekOf: string;
  /** "No. 1 in {n} {countries} this week · {m} not read" */
  counter: string;
  /** The counter at the end frame: "No. 1 in {n} {countries} at their peak" */
  counterEnd: string;
  country: string;
  countries: string;
  /** "No. {p}" */
  pos: string;
  /** Short forms for the tiles and the card. */
  posUnread: string;
  posOff: string;
  posNoChart: string;
  /** Tile sub-lines. "{n} wk at No. 1 so far" */
  tileSoFar: string;
  tileUnread: string;
  tileOff: string;
  tileNoChart: string;
  /** The five bands. */
  bands: [string, string, string, string, string];
  /** A band heading at the end frame: "{band} · peak" */
  bandPeak: string;
  /** A ranking chip's cue: "{n} wk" */
  cueWeeks: string;
  trayUnread: string;
  trayNotRecorded: string;
  /** "No chart published this week: {list}." */
  trayNoChart: string;
  /** "+ {k} countries whose run is not recorded (dotted on the map). They fill with their peak at the end." */
  trayPeakOnly: string;
  /** At the end: "{k} countries show only their peak (●). The peak picture equals the takeover grid above: {ones} of {total} at No. 1." */
  trayEnd: string;
  /** "Map of Dai Dai's chart positions, {readout}" */
  mapAria: string;
  mapView: string;
  europe: string;
  world: string;
  /** The card. "{nth} week at No. 1" with {nth} an ordinal numeral. */
  cardNthAtNo1: string;
  cardThisWeek: string;
  cardUnread: string;
  cardNoChart: string;
  cardOff: string;
  cardNotRecorded: string;
  /** At the end frame: "peak · {n} weeks at the peak" and plain "peak". */
  cardPeakWeeks: string;
  cardPeak: string;
  /** "Chart dated {date}" — for a body that dates its issues. */
  cardDated: string;
  /** "Source: {src}" */
  cardSource: string;
  close: string;
  play: string;
  pause: string;
  replay: string;
  prev: string;
  next: string;
  slider: string;
  /** "Week of {date}: No. 1 in {n} {countries}, {m} not read" */
  valuetext: string;
  /** "The peak picture: No. 1 in {n} {countries}" */
  valuetextEnd: string;
  release: string;
  halftime: string;
  legendOff: string;
  legendUnread: string;
  legendNoChart: string;
  legendNotRecorded: string;
  legendPeakMark: string;
  /** "Official national charts, as read by burnaboystats.com. … {k} of {total} countries show only their peak." */
  footnote: string;
  multiplesTitle: string;
  /** "{rows} charts · rows without a recorded run show their peak" */
  multiplesNote: string;
  openPlayer: string;
  /** The table's caption: "…from the week of {first} to the week of {last}." */
  multiplesCaption: string;
  multiplesChart: string;
  /** "peak No. {p} · run not recorded" */
  multiplesPeakOnly: string;
  /** A cell for a screen reader: "{date}: No. {p}" etc. */
  cellOn: string;
  cellUnread: string;
  cellNoChart: string;
  cellOff: string;
  /** The ordinal numeral: "{n}th" pattern handled in code for EN; ES "{n}.ª". */
  lang: "en" | "es";
}

export const EN_REPLAY_LABELS: ReplayLabels = {
  kicker: "The chart run · week by week",
  title: "How it got there",
  intro:
    "Official national charts, one frame a week from release. A hatched country is a week nobody has read yet: it is never filled in from the weeks around it.",
  peakPicture: "The peak picture",
  weekOf: "Week of {date}",
  counter: "No. 1 in {n} {countries} this week · {m} not read",
  counterEnd: "No. 1 in {n} {countries} at their peak",
  country: "country",
  countries: "countries",
  pos: "No. {p}",
  posUnread: "—",
  posOff: "Off",
  posNoChart: "×",
  tileSoFar: "{n} wk at No. 1 so far",
  tileUnread: "not read this week",
  tileOff: "not on the chart",
  tileNoChart: "no chart this week",
  bands: ["No. 1", "Top 5", "Top 10", "Top 40", "41+"],
  bandPeak: "{band} · peak",
  cueWeeks: "{n} wk",
  trayUnread: "Not read this week",
  trayNotRecorded: "Run not recorded",
  trayNoChart: "No chart published this week: {list}.",
  trayPeakOnly: "+ {k} countries whose run is not recorded (dotted on the map). They fill with their peak at the end.",
  trayEnd: "{k} countries show only their peak (●). The peak picture equals the takeover grid above: {ones} of {total} at No. 1.",
  mapAria: "Map of Dai Dai's chart positions, {readout}",
  mapView: "Map view",
  europe: "Europe",
  world: "World",
  cardNthAtNo1: "{nth} week at No. 1",
  cardThisWeek: "this week",
  cardUnread: "no reading this week",
  cardNoChart: "no chart published",
  cardOff: "not on the chart",
  cardNotRecorded: "run not recorded",
  cardPeakWeeks: "peak · {n} weeks at the peak",
  cardPeak: "peak",
  cardDated: "Chart dated {date}",
  cardSource: "Source: {src}",
  close: "Close",
  play: "Play",
  pause: "Pause",
  replay: "Replay",
  prev: "Previous week",
  next: "Next week",
  slider: "Week",
  valuetext: "Week of {date}: No. 1 in {n} {countries}, {m} not read",
  valuetextEnd: "The peak picture: No. 1 in {n} {countries}",
  release: "release",
  halftime: "halftime",
  legendOff: "Off chart",
  legendUnread: "No reading",
  legendNoChart: "No chart that week",
  legendNotRecorded: "Run not recorded",
  legendPeakMark: "● Peak (end frame)",
  footnote:
    "Official national charts, as read by burnaboystats.com. Frames are calendar weeks; each chart dates its own week, and the card shows that date. {k} of {total} countries show only their peak.",
  multiplesTitle: "Every chart, every week",
  multiplesNote: "{rows} charts · rows without a recorded run show their peak",
  openPlayer: "Open the player (steps, no animation)",
  multiplesCaption: "“Dai Dai” on every chart, week by week, from the week of {first} to the week of {last}.",
  multiplesChart: "Chart",
  multiplesPeakOnly: "peak No. {p} · run not recorded",
  cellOn: "{date}: No. {p}",
  cellUnread: "{date}: no reading",
  cellNoChart: "{date}: no chart published",
  cellOff: "{date}: off chart",
  lang: "en",
};

export const ES_REPLAY_LABELS: ReplayLabels = {
  kicker: "La carrera en listas · semana a semana",
  title: "Cómo llegó ahí",
  intro:
    "Listas nacionales oficiales, un fotograma por semana desde el lanzamiento. Un país rayado es una semana que nadie ha leído todavía: nunca se rellena con las semanas de alrededor.",
  peakPicture: "La foto de los picos",
  weekOf: "Semana del {date}",
  counter: "N.º 1 en {n} {countries} esta semana · {m} sin leer",
  counterEnd: "N.º 1 en {n} {countries} en su pico",
  country: "país",
  countries: "países",
  pos: "N.º {p}",
  posUnread: "—",
  posOff: "Fuera",
  posNoChart: "×",
  tileSoFar: "{n} sem. en el n.º 1 hasta ahora",
  tileUnread: "sin lectura esta semana",
  tileOff: "fuera de la lista",
  tileNoChart: "sin lista esta semana",
  bands: ["N.º 1", "Top 5", "Top 10", "Top 40", "41+"],
  bandPeak: "{band} · pico",
  cueWeeks: "{n} sem.",
  trayUnread: "Sin leer esta semana",
  trayNotRecorded: "Carrera sin registrar",
  trayNoChart: "Sin lista publicada esta semana: {list}.",
  trayPeakOnly: "+ {k} países cuya carrera no está registrada (punteados en el mapa). Se rellenan con su pico al final.",
  trayEnd: "{k} países muestran solo su pico (●). La foto de los picos es la misma cuadrícula de arriba: {ones} de {total} en el n.º 1.",
  mapAria: "Mapa de los puestos de Dai Dai en listas, {readout}",
  mapView: "Vista del mapa",
  europe: "Europa",
  world: "Mundo",
  cardNthAtNo1: "{nth} semana en el n.º 1",
  cardThisWeek: "esta semana",
  cardUnread: "sin lectura esta semana",
  cardNoChart: "sin lista publicada",
  cardOff: "fuera de la lista",
  cardNotRecorded: "carrera sin registrar",
  cardPeakWeeks: "pico · {n} semanas en el pico",
  cardPeak: "pico",
  cardDated: "Lista del {date}",
  cardSource: "Fuente: {src}",
  close: "Cerrar",
  play: "Reproducir",
  pause: "Pausa",
  replay: "Repetir",
  prev: "Semana anterior",
  next: "Semana siguiente",
  slider: "Semana",
  valuetext: "Semana del {date}: n.º 1 en {n} {countries}, {m} sin leer",
  valuetextEnd: "La foto de los picos: n.º 1 en {n} {countries}",
  release: "lanzamiento",
  halftime: "medio tiempo",
  legendOff: "Fuera de la lista",
  legendUnread: "Sin lectura",
  legendNoChart: "Sin lista esa semana",
  legendNotRecorded: "Carrera sin registrar",
  legendPeakMark: "● Pico (fotograma final)",
  footnote:
    "Listas nacionales oficiales, según las lee burnaboystats.com. Los fotogramas son semanas de calendario; cada lista fecha su propia semana, y la ficha muestra esa fecha. {k} de {total} países muestran solo su pico.",
  multiplesTitle: "Todas las listas, todas las semanas",
  multiplesNote: "{rows} listas · las filas sin carrera registrada muestran su pico",
  openPlayer: "Abrir el reproductor (por pasos, sin animación)",
  multiplesCaption: "“Dai Dai” en todas las listas, semana a semana, de la semana del {first} a la semana del {last}.",
  multiplesChart: "Lista",
  multiplesPeakOnly: "pico n.º {p} · carrera sin registrar",
  cellOn: "{date}: n.º {p}",
  cellUnread: "{date}: sin lectura",
  cellNoChart: "{date}: sin lista publicada",
  cellOff: "{date}: fuera de la lista",
  lang: "es",
};
