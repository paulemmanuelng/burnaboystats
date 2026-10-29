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
  export const liveChartsUpdated = "2026-10-29";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-29T13:06Z";
  
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
            "movement": -4
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
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 28,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 33,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 42,
            "movement": 55
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 48,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 52,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 58,
            "movement": 8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 63,
            "movement": 108
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 76,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 77,
            "movement": 20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 91,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 94,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 96,
            "movement": 28
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 101,
            "movement": -46
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 106,
            "movement": 9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 107,
            "movement": 18
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 129,
            "movement": -70
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 132,
            "movement": -7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 148,
            "movement": -22
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 154,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 161,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 166,
            "movement": 19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": 11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 36
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 15,
            "movement": 10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 16,
            "movement": 20
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 17,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": 5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 22,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 29,
            "movement": 30
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 34,
            "movement": -19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": 11
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 50,
            "movement": -13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 69,
            "movement": 24
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": 11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 78,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": -4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 98,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 52,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 54,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 57,
            "movement": 11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 59,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 79,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": -21
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 82,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 93,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 113,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 113,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 119,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 122,
            "movement": -10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 154,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 155,
            "movement": -21
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 30,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 43,
            "movement": -16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 48,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 55,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 56,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 57,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 72,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 76,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": 7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 90,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 110,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 115,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 119,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 121,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 123,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 123,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 129,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 133,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 144,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 170,
            "movement": -24
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 26,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 31,
            "movement": 18
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 41,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 47,
            "movement": -19
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 72,
            "movement": -44
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 88,
            "movement": -77
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 96,
            "movement": -39
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 105,
            "movement": -97
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 120,
            "movement": 41
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 159,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 178,
            "movement": -73
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
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": 65
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -107
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 164,
            "movement": -117
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 196,
            "movement": -36
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 200,
            "movement": -6
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -2
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 33,
            "movement": 67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 61,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": -62
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -72
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -35
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": 21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -18
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
            "movement": -86
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
            "position": 35,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
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
            "position": 25,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 100,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": 48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -41
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 129,
            "movement": 60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
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
            "position": 13,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 11
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": 156
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 57,
            "movement": 128
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -35
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 108,
            "movement": -76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
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
            "position": 29,
            "movement": 2
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 56
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
            "movement": 1
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
            "position": 117,
            "movement": 9
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
            "position": 4,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -16
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": -52
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -62
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -12
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 99,
            "movement": 44
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -109
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 198,
            "movement": -97
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": 1
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
            "position": 191,
            "movement": null,
            "status": "new"
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
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 95
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -41
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -23
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 2
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 29
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 180,
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
            "position": 152,
            "movement": 17
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 12
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
            "position": 61,
            "movement": 31
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": 43
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
            "position": 168,
            "movement": 11
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
            "position": 57,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 6
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
            "position": 44,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": null,
            "status": "new"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": 39
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
            "position": 77,
            "movement": 7
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
            "position": 168,
            "movement": 9
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 4
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
            "position": 192,
            "movement": 6
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -65
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
            "country": "BT",
            "name": "Bhutan",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -34
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
            "position": 121,
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
            "position": 55,
            "movement": 9
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
            "position": 8,
            "movement": -1
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
            "position": 116,
            "movement": 26
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
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": 1
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
            "position": 113,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All Eyes on Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": 17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
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
            "position": 112,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": null,
            "status": "new"
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
            "position": 96,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": null,
            "status": "new"
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
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Want It All",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": null,
            "status": "new"
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
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
            "position": 148,
            "movement": 38
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
            "position": 79,
            "movement": -8
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
            "position": 163,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Second Sermon",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outro: Remember Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
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
            "position": 66,
            "movement": 1
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
            "position": 175,
            "movement": -31
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
            "position": 159,
            "movement": -83
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
            "position": 173,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song"
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
  