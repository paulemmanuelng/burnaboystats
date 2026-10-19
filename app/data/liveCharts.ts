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
  export const liveChartsUpdated = "2026-10-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-19T04:45Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "country": "EE",
            "name": "Estonia",
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
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "country": "PL",
            "name": "Poland",
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
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
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
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
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
            "country": "EC",
            "name": "Ecuador",
            "position": 10,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
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
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 6
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
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": -4
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 14,
            "movement": -5
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -3
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
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -4
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
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 68,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 5,
            "movement": 20
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 27,
            "movement": -16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 28,
            "movement": 4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 29,
            "movement": 27
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 29,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 33,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 35,
            "movement": -24
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 38,
            "movement": 4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -31
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 42,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 53,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 62,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 65,
            "movement": -5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 67,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 79,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 82,
            "movement": 5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 84,
            "movement": 83
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": 83
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 90,
            "movement": 1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 92,
            "movement": 95
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 92,
            "movement": -7
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 104,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 106,
            "movement": 8
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 107,
            "movement": 39
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 115,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 118,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 119,
            "movement": 67
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 122,
            "movement": 76
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 147,
            "movement": -75
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 147,
            "movement": -59
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 152,
            "movement": -13
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 168,
            "movement": 15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
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
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 26
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 24
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 23
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 21
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 16,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 51
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 19
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 21,
            "movement": 51
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 24,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 25,
            "movement": -9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 26,
            "movement": 29
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 27,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 24
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 50,
            "movement": 31
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 81,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 97,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 21,
            "movement": 15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 26,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 35,
            "movement": 11
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 39,
            "movement": 32
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 46,
            "movement": 23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 38
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 58,
            "movement": 25
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": 35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 62,
            "movement": 33
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 64,
            "movement": 25
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 65,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 70,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 74,
            "movement": 25
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 78,
            "movement": 60
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": 29
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 96,
            "movement": 103
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 96,
            "movement": 30
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 121,
            "movement": 31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 132,
            "movement": 43
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 186,
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
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 47,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 48,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 49,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 53,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 55,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 63,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 70,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 75,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 79,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 87,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 101,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 103,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 132,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 138,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 178,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 1,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -9
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 22,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 24,
            "movement": -22
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 24,
            "movement": -23
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 26,
            "movement": -20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": 10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 44,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 11
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 49,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": 132
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 61,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": 66
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 142,
            "movement": 22
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 175,
            "movement": -74
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 189,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 35
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 112
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 93,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -28
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 146,
            "movement": -78
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 151,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 165,
            "movement": -85
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 191,
            "movement": -44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -44
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
            "movement": 3
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
            "position": 60,
            "movement": 0
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 133,
            "movement": 46
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -49
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -64
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 189,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 3
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
            "position": 27,
            "movement": 1
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
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 112,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -43
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
            "position": 20,
            "movement": 7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 3
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
            "position": 174,
            "movement": 22
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
            "position": 25,
            "movement": 54
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 56,
            "movement": 100
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 99,
            "movement": 84
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 81
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": 27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
            "movement": -87
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
            "position": 31,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": -32
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 11
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
            "position": 22,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": 56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 98,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -41
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
            "position": 30,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 185,
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
            "position": 19,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
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
            "position": 164,
            "movement": 16
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
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 87,
            "movement": 22
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 96,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 96
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": -59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -53
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 162,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 183,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 183,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 189,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 162,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 90
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 188,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "position": 21,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": 69
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 58,
            "movement": 92
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 83,
            "movement": -19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 123,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -3
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
            "position": 74,
            "movement": 3
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
            "position": 21,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 3
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
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 89,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": 2
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
            "position": 26,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -13
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
            "position": 67,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -86
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
            "position": 99,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 34,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 78,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
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
            "position": 142,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": 21
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
            "position": 143,
            "movement": -133
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 22
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
    "title": "Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 8
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 115,
            "movement": 41
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": 33
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
            "position": 151,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -9
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
            "movement": 1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": null,
            "status": "new"
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
            "position": 3,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
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
            "position": 39,
            "movement": 4
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Therapy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 157,
            "movement": -12
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
            "position": 67,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
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
    "title": "Level Up",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -129
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Panic",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -132
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
            "position": 131,
            "movement": 3
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
            "position": 156,
            "movement": 12
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
  