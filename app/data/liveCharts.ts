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
  export const liveChartsUpdated = "2026-10-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-05T14:45Z";
  
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 3,
            "movement": 24
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 22,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 25,
            "movement": 33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 29,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 30,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 30,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 34,
            "movement": 10
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 41,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 43,
            "movement": 16
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 44,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 49,
            "movement": 50
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 50,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 59,
            "movement": 15
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 66,
            "movement": -35
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 66,
            "movement": 42
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 67,
            "movement": -48
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 69,
            "movement": -30
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 69,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": 18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 80,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 86,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": -27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 105,
            "movement": 18
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 124,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 127,
            "movement": 12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 145,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 158,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 160,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
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
            "country": "PY",
            "name": "Paraguay",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 29,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 33,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 66,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 79,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 87,
            "movement": 0
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
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 10,
            "movement": 15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": 7
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": 20
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": 8
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 25,
            "movement": 33
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 26,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 24
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 38,
            "movement": 35
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 39,
            "movement": 15
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 41,
            "movement": 16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": 10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 46,
            "movement": 52
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 55,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 56,
            "movement": 64
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 57,
            "movement": 16
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 58,
            "movement": 41
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 70,
            "movement": 39
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 87,
            "movement": 47
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 93,
            "movement": 43
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 99,
            "movement": 45
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": 25
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 169,
            "movement": 29
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 186,
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
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 39,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 39,
            "movement": 8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 40,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 40,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": 8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 62,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 66,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 68,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 70,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 102,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 117,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 125,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 143,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 149,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 159,
            "movement": -44
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 188,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 13,
            "movement": 88
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": 12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 31,
            "movement": -17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 38,
            "movement": -36
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 46,
            "movement": -42
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": -19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 53,
            "movement": -37
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 57,
            "movement": -48
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 65,
            "movement": -60
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 84,
            "movement": -33
          },
          {
            "country": "IN",
            "name": "India",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 98,
            "movement": -37
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 102,
            "movement": -68
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 173,
            "movement": -171
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
            "position": 38,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 49,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 57,
            "movement": 96
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 102
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": 84
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 111,
            "movement": 37
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 140,
            "movement": -41
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 159,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -44
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 168,
            "movement": -103
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": 24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -65
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": 12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": -82
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -70
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
            "position": 31,
            "movement": 1
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
            "position": 44,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 98,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": 50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -83
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -63
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": -30
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -95
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 146,
            "movement": 20
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
            "position": 79,
            "movement": 0
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 130,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -7
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
            "position": 193,
            "movement": 3
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
            "position": 78,
            "movement": 0
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 78
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 71,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 77
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -106
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 189,
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
            "position": 33,
            "movement": -2
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 135,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 106
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 82,
            "movement": 112
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": -79
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 51
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -29
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
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
            "movement": 1
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
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -56
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 4
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
            "position": 32,
            "movement": 23
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 72,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
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
            "position": 177,
            "movement": 13
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
            "position": 9,
            "movement": -1
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
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -30
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
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": -8
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
            "position": 82,
            "movement": -36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 105,
            "movement": -37
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 118,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 124,
            "movement": 55
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 178,
            "movement": -29
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
            "movement": -59
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
            "position": 22,
            "movement": -2
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
            "position": 95,
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
            "position": 48,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 87,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 59,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -4
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
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
            "position": 38,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 64,
            "movement": 2
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
            "position": 129,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -6
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
            "position": 157,
            "movement": -8
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
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": 4
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
            "position": 8,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Coming Home",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 15
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
            "position": 63,
            "movement": -4
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
            "movement": -3
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 149,
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
            "position": 121,
            "movement": 32
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
            "position": 174,
            "movement": -42
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
            "position": 142,
            "movement": 9
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
            "position": 151,
            "movement": -10
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Own It",
    "platforms": [],
    "kind": "song"
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
  