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
  export const liveChartsUpdated = "2026-11-16";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-16T22:08Z";
  
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
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
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
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 28,
            "movement": 14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 55,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 62,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 66,
            "movement": -28
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 67,
            "movement": -16
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 69,
            "movement": -52
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 72,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 74,
            "movement": -25
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 75,
            "movement": -26
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 90,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 93,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": -40
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 107,
            "movement": -84
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 107,
            "movement": -24
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 109,
            "movement": -29
          },
          {
            "country": "FR",
            "name": "France",
            "position": 111,
            "movement": -28
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 114,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 115,
            "movement": -25
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 146,
            "movement": -79
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 150,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 152,
            "movement": 39
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 152,
            "movement": -38
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 158,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 172,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 183,
            "movement": -36
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
            "position": 4,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": 27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 35,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 47,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": 35
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": 30
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 66,
            "movement": 32
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 69,
            "movement": 28
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 77,
            "movement": 36
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 82,
            "movement": 56
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 108,
            "movement": 37
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 109,
            "movement": 46
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 121,
            "movement": 19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 126,
            "movement": 38
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 146,
            "movement": 50
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -7
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 13,
            "movement": 16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": -7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 28,
            "movement": 60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 34,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 36,
            "movement": 20
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": -12
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 40,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 44,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 30
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 49,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 50,
            "movement": 22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": -44
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 75,
            "movement": -70
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 76,
            "movement": -50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
            "movement": -27
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
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 56,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 58,
            "movement": -5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 75,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 77,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 79,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 97,
            "movement": 8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 104,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 106,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 110,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 113,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 117,
            "movement": 10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 117,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 129,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 155,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 160,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 170,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 186,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 186,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 39,
            "movement": -30
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 42,
            "movement": 156
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -35
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 70,
            "movement": -56
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 76,
            "movement": -73
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 132,
            "movement": -22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 134,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -91
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 196,
            "movement": -2
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
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 89,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": 22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 107,
            "movement": 63
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 129,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 138,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 56,
            "movement": 2
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
            "movement": 2
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 78
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": 76
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -100
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -67
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 163,
            "movement": -81
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 168,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 181,
            "movement": -89
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": 16
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 81
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
            "movement": -101
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
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
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
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
            "position": 30,
            "movement": -3
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -65
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
            "position": 21,
            "movement": 2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
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
            "position": 74,
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": 103
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 91
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -48
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": -40
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 3
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "position": 144,
            "movement": 7
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
            "position": 73,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 78,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": 32
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": -59
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
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
            "position": 168,
            "movement": 8
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 64
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -51
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 171,
            "movement": -82
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -26
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
            "position": 29,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -18
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
            "movement": -3
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
            "position": 49,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": -74
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
            "position": 73,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -15
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album"
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -1
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 72,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -1
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
            "country": "GM",
            "name": "Gambia",
            "position": 142,
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
            "movement": 3
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -21
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 10
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -71
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
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
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
            "position": 170,
            "movement": -20
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
            "position": 103,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 180,
            "movement": 0
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
            "position": 15,
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
            "position": 18,
            "movement": -1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 96,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -36
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
            "position": 123,
            "movement": 4
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
            "position": 95,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 173,
            "movement": -2
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
            "position": 61,
            "movement": 2
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Monsters You Made",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -90
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
            "position": 152,
            "movement": 39
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -29
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
            "position": 122,
            "movement": -88
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
            "position": 154,
            "movement": -12
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
            "position": 182,
            "movement": -12
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
  