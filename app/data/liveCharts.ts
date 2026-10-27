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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T18:06Z";
  
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
            "movement": 0
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -2
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
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "US",
            "name": "United States",
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
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 6,
            "movement": -4
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
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": -2
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
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
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
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 12,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": -3
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 21,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 22,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 27,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 37,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 81,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 18,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 19,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 23,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 24,
            "movement": 29
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 33,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 39,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 45,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 46,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 60,
            "movement": 11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 72,
            "movement": -29
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 72,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 75,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 84,
            "movement": -12
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 96,
            "movement": -26
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": -41
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 100,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 109,
            "movement": -58
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 115,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 121,
            "movement": -28
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 122,
            "movement": -46
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 128,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 131,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 137,
            "movement": -23
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 146,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 162,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 176,
            "movement": -63
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 191,
            "movement": -69
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 197,
            "movement": 0
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
            "position": 2,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": 64
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 21,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": -6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 23,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 25,
            "movement": -16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 29,
            "movement": -6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 36,
            "movement": -17
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 43,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": -36
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": 9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 59,
            "movement": -28
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": -51
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 84,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 85,
            "movement": -40
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 27,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 40,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 49,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 62,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 66,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 67,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 68,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 74,
            "movement": -13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 82,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 94,
            "movement": -23
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 103,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 104,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 120,
            "movement": -15
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 132,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 134,
            "movement": -6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 147,
            "movement": 18
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 161,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 161,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": -20
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 187,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 43,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 43,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 59,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 63,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 85,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 113,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 118,
            "movement": 5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 120,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 125,
            "movement": 27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 143,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 147,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 154,
            "movement": 12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": 15
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 16,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 18,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 31,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 34,
            "movement": -15
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 41,
            "movement": -18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 41,
            "movement": -38
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 54,
            "movement": -53
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": -44
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 130,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 64,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 87,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": 33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -71
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": 48
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 138,
            "movement": -23
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": -65
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 176,
            "movement": -103
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
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
            "position": 6,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
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
            "position": 25,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 119,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 129,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -110
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
            "position": 38,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -7
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
            "movement": -6
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
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 56
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 115,
            "movement": 80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -15
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 128,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 162,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 60,
            "movement": -2
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
            "movement": 12
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 80,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 127,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 193,
            "movement": 2
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 33
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": -94
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": -82
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 152,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": -52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": 0
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
            "position": 29,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -99
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 99,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 159,
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
            "position": 28,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 17
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 46
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 128,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 158,
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 0
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
            "movement": -1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 13,
            "movement": 62
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": 58
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": 52
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 136,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 184,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": 0
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
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
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
            "position": 166,
            "movement": 14
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
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 76,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 94,
            "movement": 92
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -26
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 161,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 199,
            "movement": -13
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
            "position": 162,
            "movement": -3
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
            "position": 51,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": -64
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -20
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 96,
            "movement": -82
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 188,
            "movement": -18
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
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 96,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 2
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
            "position": 32,
            "movement": null,
            "status": "re"
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 76,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": 0
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
            "position": 184,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 11
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 170,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 184,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": null,
            "status": "new"
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
            "position": 184,
            "movement": 3
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
            "position": 52,
            "movement": null,
            "status": "re"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -3
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
            "position": 8,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 8
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
            "position": 87,
            "movement": 9
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
            "position": 27,
            "movement": 81
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 123,
            "movement": 18
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 74
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 60,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Killin Dem",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Soke",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -59
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 59,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -21
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": null,
            "status": "new"
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
            "position": 65,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -22
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
            "position": 196,
            "movement": -7
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
  