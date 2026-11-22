// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T06:54Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 11,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 14,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 22,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 25,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 31,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 36,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 48,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 49,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 25,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": 84
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 32,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 34,
            "movement": 21
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 34,
            "movement": 14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": 10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 49,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 55,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 56,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 60,
            "movement": 24
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 65,
            "movement": 27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 66,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": -30
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 68,
            "movement": 45
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 69,
            "movement": 8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 72,
            "movement": 63
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": 20
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 77,
            "movement": -30
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 84,
            "movement": 65
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 88,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 91,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 110,
            "movement": 19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": 6
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 126,
            "movement": -27
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 144,
            "movement": -27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 151,
            "movement": 5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 200,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 40
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 33
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": 4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": 54
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": 21
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": 13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 40
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": 26
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": 28
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": 30
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 52,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 52,
            "movement": -21
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 62,
            "movement": -47
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 11,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 27,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 32,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 38,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 39,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 48,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 56,
            "movement": -22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 68,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 70,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 90,
            "movement": 28
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 109,
            "movement": 12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 117,
            "movement": 8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 118,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 123,
            "movement": 13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 130,
            "movement": -25
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 163,
            "movement": 36
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 173,
            "movement": -9
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 184,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 186,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 200,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 19,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 40,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 54,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 62,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 66,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 76,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 81,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 88,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 97,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 103,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 109,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 112,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 116,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 121,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 136,
            "movement": -19
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 137,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 148,
            "movement": -33
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 159,
            "movement": -22
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 165,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 165,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 187,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 35,
            "movement": 118
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 71,
            "movement": -62
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 113,
            "movement": -62
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 143,
            "movement": -48
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 162,
            "movement": -120
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 80
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 74
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 130,
            "movement": 61
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 145,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 34,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 187,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 49,
            "movement": 109
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 55,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 30
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 145,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -23
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 54,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -32
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Bigger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 105
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 53
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 76,
            "movement": 90
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 111,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 57
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -42
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 37
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 128,
            "movement": -48
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": -59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -133
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 146
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 96,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": -2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 19,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 4
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -84
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 36,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": 37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 70
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 111,
            "movement": -87
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 70,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 147,
            "movement": 22
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -6
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 117,
            "movement": -42
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "#Yawadey",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 114,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 76,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 69,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Oluwa Burna",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -149
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  