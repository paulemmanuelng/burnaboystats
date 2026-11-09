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
  export const liveChartsUpdated = "2026-11-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-09T22:25Z";
  
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
            "movement": 1
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
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 1
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
            "country": "NO",
            "name": "Norway",
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
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
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
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": -1
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
            "movement": 0
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
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
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
            "country": "PA",
            "name": "Panama",
            "position": 9,
            "movement": -3
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
            "country": "HU",
            "name": "Hungary",
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
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": -2
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 20,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 23,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 29,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 30,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 33,
            "movement": -10
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 34,
            "movement": -11
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 37,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 46,
            "movement": -22
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 46,
            "movement": -21
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 50,
            "movement": -10
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 9,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 10
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 15,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 19,
            "movement": -9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 20,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 27,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 39,
            "movement": -16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 48,
            "movement": -14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 49,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 55,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 55,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 63,
            "movement": -28
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 63,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 78,
            "movement": -57
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 79,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 81,
            "movement": -27
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 95,
            "movement": 53
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 97,
            "movement": -30
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 104,
            "movement": -41
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 111,
            "movement": -31
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 114,
            "movement": 16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 118,
            "movement": 26
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 126,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 135,
            "movement": 55
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 136,
            "movement": -27
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 137,
            "movement": -75
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 160,
            "movement": -64
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": -39
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 176,
            "movement": -65
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 197,
            "movement": -103
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
            "position": 7,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": 36
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 29,
            "movement": 17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 43,
            "movement": 27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 49,
            "movement": 34
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": 15
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 53,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 21
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 67,
            "movement": 48
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 67,
            "movement": 22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 71,
            "movement": 18
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 94,
            "movement": 30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 101,
            "movement": 18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": 41
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 109,
            "movement": 40
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 116,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 157,
            "movement": 15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 195,
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
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 6,
            "movement": 17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 2
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
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 24
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 24,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 26,
            "movement": 45
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": -23
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 31,
            "movement": -29
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 36,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": 20
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 40,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -22
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 65,
            "movement": -63
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": -46
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 86,
            "movement": -74
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 38,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 51,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 58,
            "movement": 15
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 68,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 75,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 79,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 80,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 96,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 98,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 104,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 106,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 132,
            "movement": -14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 145,
            "movement": -19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 150,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 158,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 160,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 181,
            "movement": 2
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 25,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 34,
            "movement": 22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": -20
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 73,
            "movement": -13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 83,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 119,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 162,
            "movement": -135
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 178,
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
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 98
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 71
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
            "movement": -73
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": -90
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
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
            "position": 45,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 10
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 101
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": -90
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -30
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 175,
            "movement": -107
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -32
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 98,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
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
            "position": 16,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "position": 176,
            "movement": 2
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
            "position": 83,
            "movement": null,
            "status": "re"
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
            "position": 53,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 94,
            "movement": 103
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -69
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 144,
            "movement": -81
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": -14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 181,
            "movement": -96
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
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
            "position": 159,
            "movement": 7
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": 99
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 170,
            "movement": -44
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
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
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -4
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
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -5
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
            "position": 36,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 12
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
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
            "position": 68,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 0
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
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
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
            "movement": 0
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
            "position": 23,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 124,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": -26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
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
            "position": 19,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -61
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -39
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -20
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
            "position": 54,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": 66
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 118,
            "movement": -55
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "position": 186,
            "movement": 2
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -21
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
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
            "position": 23,
            "movement": -1
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
            "position": 35,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -91
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
            "position": 54,
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
            "position": 58,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 92
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": 34
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
            "position": 44,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -6
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
            "position": 84,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -65
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 92
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -25
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 109,
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
            "position": 183,
            "movement": 2
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
            "position": 75,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
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
            "position": 105,
            "movement": -12
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
            "position": 185,
            "movement": 12
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
            "position": 166,
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
            "position": 100,
            "movement": -8
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
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
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
            "position": 193,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -7
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
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": null,
            "status": "re"
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
            "position": 21,
            "movement": 73
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
            "position": 11,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pardon",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 59,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -29
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
            "position": 36,
            "movement": -7
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
            "position": 86,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 95,
            "movement": -20
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
            "position": 188,
            "movement": -84
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Check and Balance",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -100
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
            "position": 144,
            "movement": 0
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
            "position": 173,
            "movement": -12
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
            "movement": 10
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
  