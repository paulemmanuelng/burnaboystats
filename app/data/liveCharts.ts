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
  export const liveChartsUpdated = "2026-10-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-23T17:11Z";
  
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
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 18,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 32,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 32,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 42,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 43,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 54,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 64,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 67,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 80,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 81,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 91,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 108,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 112,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 129,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 131,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 134,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 139,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 140,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 141,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 147,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 185,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 186,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 4,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 31
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 10,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 11,
            "movement": 69
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
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": 5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 17,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": 43
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 22,
            "movement": 25
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 23,
            "movement": 32
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": 23
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 33,
            "movement": -25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 40,
            "movement": -33
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 40
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 50,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 60,
            "movement": -18
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 70,
            "movement": -51
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
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
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 26,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 29,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 44,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 51,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 57,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 69,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 75,
            "movement": -15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 84,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 87,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 88,
            "movement": 14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 104,
            "movement": 7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 104,
            "movement": 21
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 105,
            "movement": 10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 112,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 119,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 129,
            "movement": 13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 175,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 180,
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 21,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 39,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 47,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 53,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 56,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 65,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 80,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 88,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 88,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 99,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 100,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 101,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 109,
            "movement": 31
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 110,
            "movement": -12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 124,
            "movement": 10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 141,
            "movement": -6
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 148,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 157,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 22,
            "movement": -13
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": 18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 52,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 64,
            "movement": -14
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 70,
            "movement": -10
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 86,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 142,
            "movement": -28
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 90,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 124,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 137,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": -34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 96,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 131,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 187,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 187,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
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
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 66,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 167,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 170,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 60,
            "movement": 4
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
            "position": 142,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JO",
            "name": "Jordan",
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 122,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 160,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 196,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 0
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 191,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "country": "KE",
            "name": "Kenya",
            "position": 38,
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 135,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 143,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
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
            "position": 25,
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
            "position": 151,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 153,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 158,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 4
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
            "position": 59,
            "movement": -33
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": 0
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
            "position": 185,
            "movement": -37
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
            "position": 29,
            "movement": -26
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 138,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 146,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 198,
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
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 135,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": 0
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 70,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
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
            "position": 79,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 0
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
            "position": 193,
            "movement": -6
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
            "position": 53,
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
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 0
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
            "movement": 0
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
            "position": 86,
            "movement": -7
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
            "movement": 0
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
            "position": 189,
            "movement": 5
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
            "position": 138,
            "movement": 18
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
            "position": 60,
            "movement": -55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -19
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
            "position": 164,
            "movement": -18
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
            "position": 98,
            "movement": -14
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
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
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
            "movement": 0
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
            "position": 81,
            "movement": -17
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
            "position": 45,
            "movement": -10
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
      }
    ],
    "kind": "song"
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
            "position": 62,
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
    "title": "Hossana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": 48
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
            "movement": 0
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
            "position": 197,
            "movement": -33
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
            "movement": 0
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
            "position": 126,
            "movement": -38
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
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
            "movement": 0
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
            "position": 161,
            "movement": -7
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
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
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
            "movement": 0
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
            "position": 185,
            "movement": -1
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
  