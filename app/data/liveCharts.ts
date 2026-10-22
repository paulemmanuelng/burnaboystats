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
  export const liveChartsUpdated = "2026-10-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-22T17:14Z";
  
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
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
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
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
            "country": "PY",
            "name": "Paraguay",
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
            "country": "AR",
            "name": "Argentina",
            "position": 10,
            "movement": -1
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
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 11,
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
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -2
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
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -3
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
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
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 15,
            "movement": -4
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
            "country": "UY",
            "name": "Uruguay",
            "position": 15,
            "movement": 2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
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
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 22,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 23,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": -4
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 18,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 31,
            "movement": 12
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 32,
            "movement": 27
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 32,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 39,
            "movement": 21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 43,
            "movement": -12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 54,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 60,
            "movement": 5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": -10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 64,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 67,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 77,
            "movement": 2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 80,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 81,
            "movement": -8
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 91,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 108,
            "movement": 19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 112,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 129,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 131,
            "movement": -24
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 134,
            "movement": 31
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 139,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 141,
            "movement": -40
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 185,
            "movement": -13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 186,
            "movement": -5
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 7,
            "movement": 35
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 37
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 15,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": 3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 17,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 19,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": 10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 21,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 33,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -24
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 47,
            "movement": -23
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": 22
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 55,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 55,
            "movement": -45
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 61,
            "movement": -24
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 85,
            "movement": -48
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 87,
            "movement": -45
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
            "movement": -26
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 98,
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
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 22,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 47,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 50,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 58,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 61,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": -13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 74,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 84,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 99,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 100,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 101,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 134,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 135,
            "movement": -19
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 140,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 151,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 157,
            "movement": -3
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
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 15,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 54,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 60,
            "movement": 5
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 67,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 91,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 94,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 102,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 105,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 111,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 114,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 122,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 125,
            "movement": -9
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 142,
            "movement": 13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 167,
            "movement": -18
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
            "position": 6,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 34,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 56,
            "movement": -16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": -17
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 60,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 72,
            "movement": 80
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 79,
            "movement": -10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 93,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 114,
            "movement": -26
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 139,
            "movement": -107
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 27
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 47
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 90,
            "movement": -83
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -19
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -109
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -87
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
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
            "position": 38,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -3
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 86,
            "movement": -66
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 90
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 131,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -34
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
            "movement": -70
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 38
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
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
            "position": 138,
            "movement": 17
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
            "position": 48,
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 66
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": -68
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": -34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 160,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 196,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 30,
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": 15
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
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
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
            "movement": 15
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
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -49
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -8
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 29
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -22
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
            "position": 153,
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
            "position": 22,
            "movement": -1
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": -60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 135,
            "movement": -59
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 143,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -57
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -14
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
            "position": 59,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 153,
            "movement": 43
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 158,
            "movement": -17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -68
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 3
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 28,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 9
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 64
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 138,
            "movement": -57
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": -59
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 198,
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 1
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 46,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": 25
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
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 80,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": 1
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
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
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
            "position": 69,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 0
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
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 4
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
            "position": 72,
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
            "position": 61,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": -90
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
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
            "position": 99,
            "movement": -4
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 13
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
            "position": 29,
            "movement": 10
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
            "position": 79,
            "movement": 12
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
            "position": 189,
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
            "position": 162,
            "movement": -109
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
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 0
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
            "position": 71,
            "movement": null,
            "status": "new"
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 35,
            "movement": -7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
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
            "position": 76,
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
            "position": 181,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 130,
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
            "position": 146,
            "movement": -17
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
            "position": 84,
            "movement": -8
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
            "position": 194,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 10
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
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
            "position": 64,
            "movement": -14
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
            "position": 58,
            "movement": 70
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
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
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 71,
            "movement": -2
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
            "country": "GM",
            "name": "Gambia",
            "position": 152,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Giza",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign of Weakness",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 4
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
            "position": 105,
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
            "position": 69,
            "movement": -1
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
            "position": 159,
            "movement": -3
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
            "position": 184,
            "movement": -5
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
  