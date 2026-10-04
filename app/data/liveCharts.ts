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
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T21:20Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 18,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
          },
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "MT",
            "name": "Malta",
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
            "country": "CA",
            "name": "Canada",
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "SI",
            "name": "Slovenia",
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
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 13,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 13,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": -6
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 16,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 18,
            "movement": -9
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 19,
            "movement": -6
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 3
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
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 19,
            "movement": -6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 24,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 25,
            "movement": 30
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 27,
            "movement": 161
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 31,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": 19
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 34,
            "movement": 21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": 6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 38,
            "movement": 18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 39,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 43,
            "movement": 22
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": 29
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 44,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 51,
            "movement": 73
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 52,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 57,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 58,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 59,
            "movement": 32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": 25
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": 15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": 63
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 89,
            "movement": 13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 99,
            "movement": -52
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": 16
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 123,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 129,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 149,
            "movement": 41
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 163,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 25
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": 34
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 14,
            "movement": 24
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 23
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": 32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": 34
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 68
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": 39
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": 33
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": 22
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 53,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 58,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -14
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 61,
            "movement": -8
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 25,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 32,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 41,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 41,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 54,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 57,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 58,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 73,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 73,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 98,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 99,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 109,
            "movement": -19
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": 25
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 134,
            "movement": 4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 136,
            "movement": 13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 137,
            "movement": 11
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 144,
            "movement": 16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 198,
            "movement": -6
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 39,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 41,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 50,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 66,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 66,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 68,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 92,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 120,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 123,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 126,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": 14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 35
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": 72
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 87
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 22,
            "movement": -21
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": 50
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 55,
            "movement": 34
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 80,
            "movement": 25
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 87,
            "movement": -16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -88
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": -8
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
            "position": 41,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
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
            "position": 177,
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
            "position": 31,
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 153,
            "movement": -42
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": -83
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -26
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 5
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": 75
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 106,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -79
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": -54
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 170,
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
            "position": 166,
            "movement": -42
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
            "movement": -1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": -25
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 180,
            "movement": -78
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 196,
            "movement": -21
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
            "position": 18,
            "movement": -1
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -34
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "position": 161,
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 88,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": 10
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -66
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 168,
            "movement": -116
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 179,
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
            "movement": -2
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 53,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 112
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 87,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 116,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 148,
            "movement": 40
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 179,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "position": 190,
            "movement": -32
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
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 15
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
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": 38
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 127,
            "movement": -45
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
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
            "position": 23,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -6
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
            "position": 33,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 65,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 45,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": 5
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
            "position": 64,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": 120
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
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
            "position": 87,
            "movement": 1
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -15
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
            "position": 40,
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
            "position": 75,
            "movement": 4
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
            "position": 36,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 65,
            "movement": -2
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
            "position": 48,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 94,
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
            "position": 141,
            "movement": -31
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": 27
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
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 69,
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
            "position": 137,
            "movement": 2
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
            "position": 154,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -46
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": 75
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wonderful",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -12
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
            "position": 66,
            "movement": 0
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
            "position": 179,
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 141,
            "movement": -63
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
            "position": 178,
            "movement": 0
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
            "position": 151,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -1
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
  