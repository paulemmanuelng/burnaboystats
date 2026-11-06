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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T06:52Z";
  
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
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
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
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 29
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 20,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 29,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": 31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 37,
            "movement": -6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": 11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 45,
            "movement": 6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": 10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 49,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 50,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 53,
            "movement": -26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": 6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 57,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 60,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 74,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 75,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 77,
            "movement": 15
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 77,
            "movement": 7
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 77,
            "movement": 25
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 80,
            "movement": 39
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 85,
            "movement": 35
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 92,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 100,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 113,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 114,
            "movement": 14
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 126,
            "movement": -96
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 138,
            "movement": 26
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 141,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 143,
            "movement": -47
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 22
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": 5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": 18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": 9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 19,
            "movement": 37
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 20,
            "movement": 24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 40,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 43,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 48,
            "movement": -16
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 48,
            "movement": -33
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": -20
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 75,
            "movement": -23
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 80,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 85,
            "movement": -62
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 100,
            "movement": -67
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
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 38,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 44,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 63,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 64,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 66,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 85,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 98,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 108,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 113,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 115,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 121,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 122,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 130,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 162,
            "movement": 8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 163,
            "movement": -45
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 174,
            "movement": -9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 197,
            "movement": -11
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
            "position": 14,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 40,
            "movement": 46
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 56,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 56,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 57,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 61,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 81,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 88,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 91,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 105,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 110,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 111,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 117,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 123,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 137,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 143,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 153,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 164,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 164,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 17
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 35,
            "movement": -22
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 48,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -18
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 53,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 55,
            "movement": -26
          },
          {
            "country": "IN",
            "name": "India",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 116,
            "movement": 25
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 153,
            "movement": -66
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 158,
            "movement": -144
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 189,
            "movement": -51
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
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": 109
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 117,
            "movement": 38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -90
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
            "movement": -22
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
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 7
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 13,
            "movement": 157
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 70,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 36
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -74
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": -51
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
            "movement": 2
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": -48
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
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
            "position": 31,
            "movement": -2
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -51
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": -33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 181,
            "movement": -106
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 26,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 95,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -52
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": 5
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
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
            "position": 168,
            "movement": -11
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 78
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 115,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -91
          },
          {
            "country": "BM",
            "name": "Bermuda",
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 66,
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
            "position": 138,
            "movement": -2
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
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
            "position": 7,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": 62
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": -25
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 33,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 33,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 71,
            "movement": 20
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
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
            "position": 173,
            "movement": -21
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": 65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": null,
            "status": "new"
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
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": -47
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 158,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 172,
            "movement": -28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": -20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 195,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": -48
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
            "movement": -15
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 98,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
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
            "position": 27,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
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
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 93,
            "movement": -35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 8
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
            "position": 38,
            "movement": -36
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
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 183,
            "movement": null,
            "status": "new"
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
            "position": 103,
            "movement": -1
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
            "position": 178,
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
            "position": 28,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 168,
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
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 21
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 31,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -41
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
            "position": 63,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -5
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
            "position": 90,
            "movement": 6
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
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 145,
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
            "position": 154,
            "movement": 25
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
            "position": 80,
            "movement": -11
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 74,
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
            "position": 58,
            "movement": -3
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
            "position": 89,
            "movement": 33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
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
            "position": 115,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 1
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
            "position": 195,
            "movement": 2
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
            "position": 194,
            "movement": -91
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
            "position": 148,
            "movement": -71
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
            "position": 3,
            "movement": 0
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
            "position": 6,
            "movement": -4
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
            "position": 56,
            "movement": -14
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
            "position": 137,
            "movement": -78
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 71,
            "movement": 3
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
            "position": 163,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 200,
            "movement": -27
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
            "position": 166,
            "movement": 7
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
            "position": 196,
            "movement": null,
            "status": "new"
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
  