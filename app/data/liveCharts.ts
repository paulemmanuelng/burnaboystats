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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T06:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 10,
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
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 4,
            "movement": 2
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
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -1
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
            "country": "PA",
            "name": "Panama",
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
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
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
            "country": "EC",
            "name": "Ecuador",
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
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
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
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": -3
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
            "position": 16,
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
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 19,
            "movement": -1
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
            "country": "AR",
            "name": "Argentina",
            "position": 21,
            "movement": -9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 21,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 23,
            "movement": -6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 24,
            "movement": -6
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 25,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 31,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 40,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 47,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": 1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 21,
            "movement": 35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 21,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 23,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 25,
            "movement": 8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 31,
            "movement": -15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": 11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": 13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 42,
            "movement": 27
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 43,
            "movement": 30
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 44,
            "movement": 48
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 44,
            "movement": 30
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 44,
            "movement": 7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": 22
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 47,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 54,
            "movement": 13
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 57,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 59,
            "movement": 10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 61,
            "movement": 29
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 67,
            "movement": 24
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 80,
            "movement": 5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 85,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 89,
            "movement": 42
          },
          {
            "country": "FR",
            "name": "France",
            "position": 90,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 102,
            "movement": 81
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 107,
            "movement": 9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 115,
            "movement": 36
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": 29
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 123,
            "movement": 51
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 124,
            "movement": 25
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 125,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 178,
            "movement": -38
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 199,
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 19,
            "movement": -5
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 19,
            "movement": 72
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 29,
            "movement": 33
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 37,
            "movement": 13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 43,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 47,
            "movement": -20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 60,
            "movement": -40
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 83,
            "movement": -37
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 22,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 39,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 58,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 63,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": 17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 66,
            "movement": -9
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 70,
            "movement": 22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 75,
            "movement": 12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 83,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 89,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": 15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 119,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 124,
            "movement": -9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 125,
            "movement": 32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 148,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 149,
            "movement": 13
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 172,
            "movement": 27
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 62,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 68,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 72,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 73,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 93,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 105,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 128,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 131,
            "movement": -15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 131,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 134,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 159,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 170,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 172,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 190,
            "movement": -16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 13
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 26
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": 77
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 37,
            "movement": 27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": 132
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 100
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 52,
            "movement": -44
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 66,
            "movement": 23
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 72,
            "movement": -19
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 89,
            "movement": -22
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 108,
            "movement": -31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 161,
            "movement": -22
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 21
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 101,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": 66
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -31
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 143,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 157,
            "movement": -34
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 114,
            "movement": -56
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
            "position": 178,
            "movement": -5
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
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 60
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 42,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": 125
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 119,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": 67
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -79
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 172,
            "movement": -81
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 195,
            "movement": -102
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
            "movement": 1
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
            "position": 56,
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 195,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -38
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
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
            "position": 27,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": 84
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 197,
            "movement": -152
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 200,
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
            "movement": 3
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
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 43
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 118,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 126,
            "movement": -33
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 134,
            "movement": 31
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": -89
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 200,
            "movement": -5
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
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
            "position": 166,
            "movement": -23
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 101
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 55
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -38
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -66
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
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
            "position": 26,
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
            "position": 7,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 151,
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -34
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -18
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
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -8
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
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 181,
            "movement": 2
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
            "position": 17,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 13
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": -18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": 112
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": 73
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 148,
            "movement": -31
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 151,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": 12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -37
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
            "position": 188,
            "movement": -12
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
            "position": 32,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 23
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 110,
            "movement": 37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 171,
            "movement": -55
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 179,
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
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
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
            "position": 34,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": -1
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
            "position": 48,
            "movement": 33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -26
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
            "position": 43,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 78,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -15
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 126,
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 34
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
            "position": 92,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 34,
            "movement": -17
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
            "position": 29,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 8
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": null,
            "status": "re"
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
            "position": 93,
            "movement": 2
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
            "position": 197,
            "movement": -9
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 70,
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
            "country": "HR",
            "name": "Croatia",
            "position": 63,
            "movement": -10
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
            "position": 165,
            "movement": -14
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
            "position": 82,
            "movement": -1
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
            "position": 120,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": 22
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 189,
            "movement": -18
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
            "position": 130,
            "movement": 14
          },
          {
            "country": "SZ",
            "name": "Eswatini",
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
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All My Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
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
            "position": 21,
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
            "position": 37,
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
            "position": 112,
            "movement": 35
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On Form",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -133
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
            "position": 149,
            "movement": null,
            "status": "new"
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
            "position": 155,
            "movement": 31
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
            "country": "TD",
            "name": "Chad",
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
            "movement": 3
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
            "country": "SR",
            "name": "Suriname",
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
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 157,
            "movement": 2
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
            "position": 190,
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
  