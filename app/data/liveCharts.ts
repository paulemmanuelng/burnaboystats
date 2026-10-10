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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:48Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 15,
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
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "PT",
            "name": "Portugal",
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
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
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
            "country": "PL",
            "name": "Poland",
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
            "country": "FI",
            "name": "Finland",
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
            "country": "PA",
            "name": "Panama",
            "position": 3,
            "movement": -1
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
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "AR",
            "name": "Argentina",
            "position": 7,
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
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": -1
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
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
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
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": 0
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
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 1
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
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 3
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
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 4
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
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 15,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 18,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": 6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 29,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 30,
            "movement": 37
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 32,
            "movement": 38
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": 11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 35,
            "movement": 13
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 41,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": 7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 45,
            "movement": 11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 46,
            "movement": 15
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 49,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": 23
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 53,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 57,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 57,
            "movement": 97
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 60,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 62,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 65,
            "movement": 20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 68,
            "movement": 66
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 76,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 77,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
            "movement": 27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 94,
            "movement": 24
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 102,
            "movement": 94
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 146,
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
            "country": "GR",
            "name": "Greece",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 164,
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": -79
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 171,
            "movement": -26
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 175,
            "movement": 23
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 187,
            "movement": -69
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 188,
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": 65
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 36,
            "movement": -11
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 45,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 49,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 50,
            "movement": -31
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": -10
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": -26
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 60,
            "movement": -50
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 63,
            "movement": -15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 67,
            "movement": -16
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 76,
            "movement": 18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 94,
            "movement": -33
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 98,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": 12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 49,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": -20
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": 8
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 58,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 66,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 69,
            "movement": 15
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 72,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 73,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 75,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 97,
            "movement": 7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 110,
            "movement": -15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 115,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 16
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 150,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 153,
            "movement": 42
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 159,
            "movement": 16
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 196,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 16,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 22,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 23,
            "movement": 122
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 31,
            "movement": 18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 44,
            "movement": 50
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 58,
            "movement": -47
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 89,
            "movement": -31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 100,
            "movement": -90
          },
          {
            "country": "US",
            "name": "United States",
            "position": 100,
            "movement": 37
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 156,
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
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 22,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 37,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 44,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 47,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 62,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 66,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 69,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 75,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 89,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 111,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 121,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 123,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 123,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 141,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 143,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 153,
            "movement": -31
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
            "position": 32,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": 61
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -26
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -103
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
            "position": 58,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
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
            "position": 28,
            "movement": 3
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 39,
            "movement": 48
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": 48
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": 12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 166,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "position": 167,
            "movement": -6
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 72,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": 36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 179,
            "movement": -47
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 188,
            "movement": -12
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
            "position": 184,
            "movement": -15
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
            "position": 37,
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 5,
            "movement": 155
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": -28
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 96,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 179,
            "movement": -130
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
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
            "movement": 2
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
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 25
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 147,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 200,
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
            "position": 160,
            "movement": -14
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
            "position": 36,
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
            "position": 68,
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
            "position": 27,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 53,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 67
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -64
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
            "movement": -2
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 130,
            "movement": 28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 142,
            "movement": -98
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 80
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -64
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
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": -53
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -4
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
            "country": "FJ",
            "name": "Fiji",
            "position": 46,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 62,
            "movement": 58
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": -25
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 140,
            "movement": 58
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -45
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
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
    "title": "Last Last",
    "platforms": [
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 54,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 32
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
            "position": 64,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": -22
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
            "position": 86,
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
            "name": "Swaziland",
            "position": 16,
            "movement": 21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 10
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": 0
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
            "position": 139,
            "movement": 60
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
            "position": 150,
            "movement": -6
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -65
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
            "position": 66,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 33
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
            "position": 95,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
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
            "position": 61,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 63,
            "movement": -28
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 134,
            "movement": 30
          },
          {
            "country": "BG",
            "name": "Bulgaria",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
            "movement": -188
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
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
            "position": 105,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Spiritual",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 6
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -46
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
            "position": 124,
            "movement": 14
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
            "position": 69,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
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
            "position": 173,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
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
  