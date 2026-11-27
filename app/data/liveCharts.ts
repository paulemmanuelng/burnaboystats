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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T21:21Z";
  
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
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "CA",
            "name": "Canada",
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
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "LV",
            "name": "Latvia",
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
            "country": "FI",
            "name": "Finland",
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
            "country": "QA",
            "name": "Qatar",
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
            "country": "UG",
            "name": "Uganda",
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
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -8
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
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 14,
            "movement": -5
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
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
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 22,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 25,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 31,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 36,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 48,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 49,
            "movement": 1
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 20,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 34,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 39,
            "movement": 30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 47,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 57,
            "movement": -17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 63,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 73,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 76,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 76,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 80,
            "movement": -36
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 94,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 95,
            "movement": -38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 99,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 104,
            "movement": 62
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 105,
            "movement": -22
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": -24
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 110,
            "movement": -20
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 119,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 120,
            "movement": 8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 129,
            "movement": 56
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 130,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 139,
            "movement": 56
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 150,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 163,
            "movement": -121
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": -23
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 190,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 46,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 57,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 68,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 78,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 79,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 108,
            "movement": -50
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 109,
            "movement": -14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 110,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 111,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 126,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 133,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 139,
            "movement": -9
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 140,
            "movement": 17
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 151,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 163,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 180,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 180,
            "movement": 10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 200,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 17,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": 9
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": 34
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 11
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 39,
            "movement": 60
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 40,
            "movement": -21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 41,
            "movement": -22
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 43,
            "movement": 15
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 44,
            "movement": 42
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 58,
            "movement": -35
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": -23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 71,
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 48,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 56,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 73,
            "movement": 11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 79,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 81,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 82,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 97,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 100,
            "movement": -16
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 109,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 111,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 124,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 134,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 136,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 139,
            "movement": -13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 144,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 145,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 146,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 160,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 164,
            "movement": 16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 178,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": 58
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": 63
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 36,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": -13
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
            "position": 48,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 112,
            "movement": -84
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 119,
            "movement": -19
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
            "country": "MV",
            "name": "Maldives",
            "position": 19,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -20
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
            "movement": -1
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
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 37
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": 58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 73
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 117,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -31
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
            "position": 24,
            "movement": -1
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 96
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -42
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
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
            "position": 14,
            "movement": 7
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
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": 35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 184,
            "movement": -62
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 57,
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
            "position": 122,
            "movement": -3
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
            "position": 80,
            "movement": null,
            "status": "re"
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
            "position": 60,
            "movement": 17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 71,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 109,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 69,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 9
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
            "position": 5,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 105
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -96
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
            "position": 28,
            "movement": -3
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
            "position": 12,
            "movement": 3
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -110
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
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
            "position": 28,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -12
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
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 30
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 104,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 117,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 122,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 194,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 176,
            "movement": 6
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -16
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
            "movement": 5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": null,
            "status": "new"
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
            "position": 96,
            "movement": null,
            "status": "re"
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 117
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 3
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -35
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
            "position": 147,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bigger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": 5
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
            "position": 36,
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
            "position": 45,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 69,
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
            "country": "MV",
            "name": "Maldives",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
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
            "position": 33,
            "movement": 0
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
            "country": "ZA",
            "name": "South Africa",
            "position": 72,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 98,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 12
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
            "position": 75,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
            "movement": -35
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
            "position": 87,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 159,
            "movement": 3
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
            "position": 181,
            "movement": -15
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
            "position": 96,
            "movement": 8
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
            "position": 56,
            "movement": null,
            "status": "re"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 30,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 73,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -4
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 16,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 142,
            "movement": 6
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
            "position": 148,
            "movement": 6
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
            "position": 125,
            "movement": -11
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
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -63
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
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
            "position": 177,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "JA ARA E",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Heaven's Gate",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Deezer",
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 117,
            "movement": -52
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
            "position": 62,
            "movement": 0
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -112
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
            "position": 165,
            "movement": -20
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
            "position": 191,
            "movement": -11
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
  