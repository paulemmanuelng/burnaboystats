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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:20Z";
  
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
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": 84
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 32,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 34,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": 7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 47,
            "movement": -13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 55,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 41
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 64,
            "movement": 19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 66,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": -30
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 67,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 68,
            "movement": 45
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 71,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": 20
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 89,
            "movement": -11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 92,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 96,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 103,
            "movement": 24
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 117,
            "movement": 36
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 126,
            "movement": 6
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 126,
            "movement": -27
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 135,
            "movement": -53
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 149,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 151,
            "movement": 5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 189,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 9,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 28
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 21,
            "movement": 20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 45
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 25,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": 28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 27,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": 35
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": 12
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 35,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 36,
            "movement": 10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 39,
            "movement": 35
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 51,
            "movement": -20
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 68,
            "movement": -53
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 98,
            "movement": -35
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 10,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 70,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 77,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": -25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 118,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 121,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 136,
            "movement": 15
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 164,
            "movement": 21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 174,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 180,
            "movement": 8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 186,
            "movement": -15
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 191,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 199,
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
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 40,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 54,
            "movement": 6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 62,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 66,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 76,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 81,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 88,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 97,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 103,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 109,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 112,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 116,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 121,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 136,
            "movement": -19
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 137,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 148,
            "movement": -33
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 159,
            "movement": -22
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 165,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 165,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 187,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": 23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": -22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 29,
            "movement": 30
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 69,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 156,
            "movement": -133
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
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -39
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 70,
            "movement": 74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": 108
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": 59
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 118,
            "movement": 52
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -109
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
            "movement": -133
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 23,
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
            "position": 55,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 49,
            "movement": 109
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 55,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 139,
            "movement": 21
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 141,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -23
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 194,
            "movement": -136
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
            "position": 54,
            "movement": 1
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
            "position": 129,
            "movement": -1
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -56
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 130,
            "movement": 61
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 178,
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
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -13
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
            "movement": 2
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
            "position": 17,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -18
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": 1
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
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
            "position": 21,
            "movement": 0
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
            "position": 28,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 37
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -133
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
            "movement": -5
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
            "position": 31,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -58
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
            "movement": -5
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
            "position": 71,
            "movement": -2
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
            "position": 129,
            "movement": 50
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
            "position": 65,
            "movement": 53
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 71,
            "movement": -47
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 76,
            "movement": 90
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": 27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -5
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
            "movement": -7
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 20,
            "movement": 1
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 133,
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
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": 75
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 167,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -13
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
            "position": 27,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -10
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
            "country": "CH",
            "name": "Switzerland",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 96,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 125,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -72
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 193,
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
            "position": 189,
            "movement": -4
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
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 11
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 29
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
            "movement": -2
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
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": 73
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 70,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 147,
            "movement": 22
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
            "position": 140,
            "movement": -1
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
            "position": 80,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 19
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
            "position": 101,
            "movement": -2
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
            "position": 192,
            "movement": -6
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
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
            "country": "KE",
            "name": "Kenya",
            "position": 17,
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
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -35
          },
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 65,
            "movement": -44
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
            "position": 114,
            "movement": -15
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "#Yawadey",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -6
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
            "position": 119,
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
            "position": 122,
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
            "position": 75,
            "movement": -45
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
            "position": 59,
            "movement": -4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Oluwa Burna",
    "platforms": [
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
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
            "position": 85,
            "movement": -11
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
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
    "title": "Wild Dreams",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -13
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
            "position": 197,
            "movement": -3
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
  