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
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T19:58Z";
  
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 31,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 32,
            "movement": 21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 44,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 45,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 52,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": -15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 65,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 68,
            "movement": 20
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 69,
            "movement": 36
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 73,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 75,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 77,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 79,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 80,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": 56
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 87,
            "movement": -45
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": -16
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 92,
            "movement": 8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 92,
            "movement": 5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 96,
            "movement": -50
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 97,
            "movement": 18
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 98,
            "movement": -16
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 100,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 106,
            "movement": 7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 131,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 141,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 151,
            "movement": 26
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 173,
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
            "position": 5,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 17,
            "movement": 6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 18,
            "movement": 11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 20,
            "movement": 33
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 24,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": -18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 31
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": -29
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": 29
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 49,
            "movement": -34
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 58,
            "movement": -40
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 58,
            "movement": 19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -29
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 65,
            "movement": -31
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 66,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": -41
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 72,
            "movement": -29
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 84,
            "movement": -57
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 99,
            "movement": -59
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 100,
            "movement": -23
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 40,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 53,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 68,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 77,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": 12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 91,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 119,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 120,
            "movement": -22
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 120,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 126,
            "movement": 14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 135,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 151,
            "movement": -14
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 165,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 181,
            "movement": -17
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 194,
            "movement": -22
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 200,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 50,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 51,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 63,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 70,
            "movement": 8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 73,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 74,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 81,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 86,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 95,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 97,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 99,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 99,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 101,
            "movement": -65
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 103,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 119,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 140,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 144,
            "movement": -19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 167,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 177,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 182,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
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
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 17,
            "movement": 163
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 30,
            "movement": -15
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 51,
            "movement": -11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 73,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": 28
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 172,
            "movement": -97
          },
          {
            "country": "US",
            "name": "United States",
            "position": 194,
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
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 55,
            "movement": 57
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 71,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 52
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 80
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 130,
            "movement": 56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 137,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 154,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -60
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -40
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
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
            "position": 55,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 28
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -86
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 132,
            "movement": -106
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": -52
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": -46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 194,
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -1
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
            "position": 60,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
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
            "position": 27,
            "movement": 5
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
            "position": 32,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 141,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
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
            "position": 191,
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
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 73,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -21
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 107,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 171,
            "movement": -96
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -19
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
            "country": "SR",
            "name": "Suriname",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 75,
            "movement": 82
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 96,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 170,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": -17
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
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 66,
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
            "position": 151,
            "movement": 8
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -19
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 69,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": -56
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 14
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
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 143
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -16
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 83
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": -15
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 95
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 118
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 81,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
            "movement": -65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
            "movement": -100
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -12
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": 44
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 87,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 103,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": -20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": 7
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
            "position": 187,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 75,
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
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 61
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
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
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": -28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 78,
            "movement": 73
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 101,
            "movement": 89
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
            "movement": -80
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 109,
            "movement": -71
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
            "position": 49,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
            "movement": 21
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
            "position": 63,
            "movement": -4
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
            "position": 69,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 192,
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
            "position": 92,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 85,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": 76
          },
          {
            "country": "TN",
            "name": "Tunisia",
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
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 2
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 56,
            "movement": 119
          }
        ]
      },
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
            "position": 81,
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
            "position": 174,
            "movement": -9
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
            "position": 169,
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
            "position": 25,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 66,
            "movement": 23
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 2
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
            "position": 131,
            "movement": -8
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
            "movement": 11
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
            "position": 194,
            "movement": 4
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 6
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
            "movement": -27
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
            "position": 10,
            "movement": -1
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
            "position": 13,
            "movement": -1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
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
            "position": 41,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
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
            "position": 117,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": 31
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
            "position": 88,
            "movement": -18
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
            "movement": -2
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
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
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
            "position": 178,
            "movement": 13
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
            "position": 146,
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
            "position": 178,
            "movement": 2
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
  