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
  export const liveChartsUpdated = "2026-11-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-13T19:46Z";
  
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 24,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 41,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 43,
            "movement": 26
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 54,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": -15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 59,
            "movement": -15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 64,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 65,
            "movement": -13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 75,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 77,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 78,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 79,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": 17
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 85,
            "movement": -20
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": 56
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": -8
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
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 108,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": -22
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 121,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 121,
            "movement": 10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 141,
            "movement": -13
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 164,
            "movement": -58
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 166,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 171,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 36
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 20
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 14,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 16,
            "movement": 83
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": 40
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 46
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 19,
            "movement": 29
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 64
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 22,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 34
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 37
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": 41
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 27,
            "movement": 45
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 66
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 38,
            "movement": 36
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 40,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": 12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 53,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 66,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 69,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 79,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 79,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 91,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 99,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 105,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 115,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 119,
            "movement": 7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 120,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 137,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 148,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 180,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 187,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 195,
            "movement": -30
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
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 47,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 48,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 53,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 58,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": 14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 69,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 81,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 82,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 83,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 87,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 93,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 95,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 102,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 103,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 103,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 124,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 147,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 162,
            "movement": -22
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 167,
            "movement": 10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 177,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 180,
            "movement": 2
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 37,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": 130
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 56,
            "movement": 17
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 65,
            "movement": -42
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 98,
            "movement": -31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 186,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": -11
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 89,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -44
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -54
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 131,
            "movement": -76
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": -50
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 174,
            "movement": -37
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 195,
            "movement": -27
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 44
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 118,
            "movement": null,
            "status": "new"
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
            "country": "ML",
            "name": "Mali",
            "position": 168,
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
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
            "movement": -150
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
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
            "position": 151,
            "movement": 0
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
            "position": 40,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -25
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -109
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 196,
            "movement": -53
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
            "position": 32,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
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
            "position": 30,
            "movement": -3
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
            "position": 76,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 46
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
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": -24
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": 11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 189,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 34,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
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
            "position": 160,
            "movement": 31
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 90,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -38
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
            "movement": 8
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 104,
            "movement": -35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 151,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 32,
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
            "position": 38,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
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
            "position": 143,
            "movement": 40
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -35
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
            "position": 110,
            "movement": -31
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
            "position": 21,
            "movement": 2
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
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
            "position": 15,
            "movement": 1
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
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 81
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
            "position": 89,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -8
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 2
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
            "position": 33,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 38
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
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -12
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
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
            "position": 43,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -35
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
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 1
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
            "position": 26,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": -38
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 75,
            "movement": 102
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 90,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -66
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 196,
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
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": -4
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
            "position": 146,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
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
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -8
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
            "movement": 14
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 81,
            "movement": 79
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 90,
            "movement": null,
            "status": "new"
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
            "country": "GY",
            "name": "Guyana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 175,
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": 1
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
            "position": 54,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -19
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
            "position": 66,
            "movement": -3
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
            "position": 85,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
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
            "position": 48,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 56,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -16
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 57,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 101,
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 105,
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
            "position": 177,
            "movement": -10
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
            "position": 67,
            "movement": 14
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
            "position": 186,
            "movement": -12
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
            "movement": 4
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
            "position": 140,
            "movement": -9
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
            "position": 122,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 111,
            "movement": -45
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 153,
            "movement": -2
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
            "position": 40,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
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
    "title": "Wild Dreams",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 70,
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
            "position": 11,
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
            "position": 14,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 140,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -71
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -72
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
            "position": 105,
            "movement": -17
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
            "position": 131,
            "movement": -90
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
            "position": 64,
            "movement": 7
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
    "title": "Kainama",
    "platforms": [
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "position": 168,
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
  