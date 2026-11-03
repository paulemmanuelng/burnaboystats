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
  export const liveChartsUpdated = "2026-11-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-03T14:21Z";
  
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
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 27,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 35,
            "movement": -20
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 37,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 39,
            "movement": 21
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 39,
            "movement": -26
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 49,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 53,
            "movement": -22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": -16
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 57,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 61,
            "movement": -27
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 67,
            "movement": -20
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 84,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
            "movement": -24
          },
          {
            "country": "FR",
            "name": "France",
            "position": 97,
            "movement": -8
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 100,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 104,
            "movement": -29
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 106,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 115,
            "movement": 36
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 122,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 124,
            "movement": -71
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 129,
            "movement": -9
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 138,
            "movement": -46
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 159,
            "movement": -38
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 160,
            "movement": -77
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 161,
            "movement": -7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 200,
            "movement": -115
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 3
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
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": 12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 32,
            "movement": -20
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 33,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": -23
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 50
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 44,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": -16
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
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
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 10
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 44,
            "movement": 37
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": 18
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
            "position": 69,
            "movement": 19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": 47
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 74,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 77,
            "movement": 40
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": 37
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 90,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 97,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 104,
            "movement": 21
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 106,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 110,
            "movement": 9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 117,
            "movement": -32
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 141,
            "movement": 47
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 152,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 164,
            "movement": 31
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 177,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 195,
            "movement": 0
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
            "position": 26,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 48,
            "movement": 9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 50,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 57,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 65,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 65,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 69,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 76,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 81,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 82,
            "movement": -27
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 89,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 97,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 109,
            "movement": 10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 111,
            "movement": -1
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
            "position": 121,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 125,
            "movement": -13
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 149,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 149,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 150,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 169,
            "movement": -12
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
            "position": 5,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 47,
            "movement": -20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 85,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 109,
            "movement": -107
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 142,
            "movement": -113
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 144,
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
            "country": "SR",
            "name": "Suriname",
            "position": 8,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": 31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 66,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 103
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 160,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 175,
            "movement": -73
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 186,
            "movement": 5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
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
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -17
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
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 89
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -41
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 175,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -44
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 196,
            "movement": -177
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 199,
            "movement": -171
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
            "position": 46,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 5
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 18,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": -33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -2
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
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
            "position": 171,
            "movement": -13
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
            "position": 54,
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
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 133,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 67,
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
            "position": 134,
            "movement": 0
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
            "position": 23,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 152,
            "movement": -87
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 171,
            "movement": -67
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
    "title": "Dem Dey",
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
            "position": 12,
            "movement": 3
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -63
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 186,
            "movement": -41
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
            "position": 33,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -50
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
            "position": 20,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -30
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
            "position": 26,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -64
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
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
            "position": 22,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 35,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -1
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
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": 68
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
            "position": 157,
            "movement": -8
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
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -26
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
            "position": 70,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 159,
            "movement": -59
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 167,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
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
            "position": 169,
            "movement": 13
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 79,
            "movement": 27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 89,
            "movement": -27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 105,
            "movement": -33
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 110,
            "movement": 67
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": -106
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 186,
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -1
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
            "position": 59,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 102,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -39
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
            "position": 46,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -18
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
            "position": 23,
            "movement": 122
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
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
            "position": 53,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 55,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 132,
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
            "position": 90,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 128,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 183,
            "movement": -9
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
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": 0
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
            "position": 74,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 8
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
            "movement": -2
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
            "position": 40,
            "movement": -5
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
            "position": 57,
            "movement": -13
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
            "position": 173,
            "movement": 21
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
            "position": 58,
            "movement": -5
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
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
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
            "country": "SG",
            "name": "Singapore",
            "position": 55,
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
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 22
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 60,
            "movement": -7
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
            "country": "FJ",
            "name": "Fiji",
            "position": 146,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
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
            "position": 72,
            "movement": -1
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
            "position": 156,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
  