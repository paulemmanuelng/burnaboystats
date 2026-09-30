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
  export const liveChartsUpdated = "2026-09-30";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-30T05:36Z";
  
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
            "country": "BD",
            "name": "Bangladesh",
            "position": 18,
            "movement": -5
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
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 20,
            "movement": -1
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 15,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": 1
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 29,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 30,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 36,
            "movement": 30
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 39,
            "movement": -10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 40,
            "movement": 26
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 40,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 41,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 43,
            "movement": -22
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 47,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 48,
            "movement": 8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 53,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 58,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 60,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 63,
            "movement": 14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 72,
            "movement": -41
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 75,
            "movement": -26
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 77,
            "movement": -32
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 79,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 96,
            "movement": -19
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 98,
            "movement": -16
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 100,
            "movement": -25
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 120,
            "movement": 22
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 124,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 146,
            "movement": 35
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 146,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 149,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 150,
            "movement": -90
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 155,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 179,
            "movement": -70
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 187,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 17,
            "movement": -9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 18,
            "movement": 23
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 19,
            "movement": 18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 22,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": -20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 33,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 35,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -23
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 41,
            "movement": -11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 45,
            "movement": 6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 45,
            "movement": -12
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 75,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 76,
            "movement": -38
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -33
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 88,
            "movement": 2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 91,
            "movement": -51
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 27,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": -13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": -11
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 36,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 44,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 47,
            "movement": -21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 54,
            "movement": -12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 55,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 56,
            "movement": -20
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 72,
            "movement": -32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 89,
            "movement": -26
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 89,
            "movement": -30
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 96,
            "movement": -32
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 109,
            "movement": -44
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 127,
            "movement": -24
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 146,
            "movement": -59
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 151,
            "movement": -36
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 164,
            "movement": -44
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 187,
            "movement": -111
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 197,
            "movement": -30
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 198,
            "movement": -17
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 35,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 37,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": 4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 41,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 44,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 56,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 57,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 59,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 61,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": 6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 85,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 89,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 95,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 110,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 132,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 165,
            "movement": -14
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 178,
            "movement": -35
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 187,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 200,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 19,
            "movement": 12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": -17
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": 29
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": 21
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 36,
            "movement": -14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 49,
            "movement": -34
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 63,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": -17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 141,
            "movement": -33
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": 82
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 122,
            "movement": 42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 137,
            "movement": -98
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 190,
            "movement": -88
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 192,
            "movement": -7
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
            "position": 42,
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
            "position": 66,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -22
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": -76
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": -49
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
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 68,
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
            "movement": -1
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
            "position": 7,
            "movement": 2
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
            "position": 147,
            "movement": -1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 52
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 20
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 156,
            "movement": -83
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 164,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 182,
            "movement": -35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": -75
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
            "movement": 3
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
    "title": "I Told Them...",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 39,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": 34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 128,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": -69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -99
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": 13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 67
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 125,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -71
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": -64
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 186,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 23,
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
            "position": 140,
            "movement": -1
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 58,
            "movement": 84
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": -91
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 3
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
            "position": 22,
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
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -110
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
            "position": 126,
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
            "position": 5,
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": -58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -21
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
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -2
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
            "position": 31,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -51
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
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 18,
            "movement": 63
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 60,
            "movement": 139
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 62,
            "movement": 87
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 122,
            "movement": 74
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 132,
            "movement": -83
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": 5
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 67,
            "movement": -28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": -24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": -8
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
            "position": 62,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 78,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": 19
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
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
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
            "position": 51,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
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
            "position": 88,
            "movement": 18
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -20
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
            "position": 138,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
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
            "position": 106,
            "movement": 11
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 171,
            "movement": 13
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
            "position": 138,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
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
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -26
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
            "position": 53,
            "movement": 68
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 166,
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
            "position": 95,
            "movement": 0
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
            "movement": 4
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
            "position": 108,
            "movement": 2
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
            "position": 163,
            "movement": -105
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
            "movement": -1
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
            "position": 134,
            "movement": -14
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
        "platform": "Deezer",
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
    "title": "Pull Up",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 11
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
            "position": 28,
            "movement": 41
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -8
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 73,
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
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": 43
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
            "position": 138,
            "movement": 9
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
            "position": 194,
            "movement": 6
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
            "country": "FJ",
            "name": "Fiji",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 106,
            "movement": -68
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
            "position": 153,
            "movement": -22
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
            "position": 176,
            "movement": -17
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
  