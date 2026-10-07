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
  export const liveChartsUpdated = "2026-10-07";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-07T13:29Z";
  
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 11,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 16,
            "movement": 23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 18,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 20,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 21,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 22,
            "movement": -9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 28,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 30,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 39,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 47,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 50,
            "movement": 13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 52,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 52,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 54,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 54,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 56,
            "movement": -10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 56,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 65,
            "movement": 9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 81,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 81,
            "movement": -25
          },
          {
            "country": "FR",
            "name": "France",
            "position": 83,
            "movement": -12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 90,
            "movement": -42
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 101,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 116,
            "movement": -32
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 134,
            "movement": -24
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 151,
            "movement": -72
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": -30
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 155,
            "movement": -31
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 165,
            "movement": -48
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 176,
            "movement": -50
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 177,
            "movement": -22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 179,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 195,
            "movement": -91
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 198,
            "movement": -116
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 198,
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
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": -5
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
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 14,
            "movement": 54
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 17,
            "movement": -11
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 22,
            "movement": -18
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 22,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 39,
            "movement": -27
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 40,
            "movement": -23
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 41,
            "movement": 24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -25
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 46,
            "movement": -42
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 55,
            "movement": -24
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 58,
            "movement": 19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 64,
            "movement": -19
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": -39
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 69,
            "movement": -30
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 79,
            "movement": -50
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 89,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 98,
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 24,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": -9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 31,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -20
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
            "position": 43,
            "movement": -20
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 50,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 53,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": -12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 56,
            "movement": -35
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": -32
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 78,
            "movement": -33
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 84,
            "movement": -26
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 90,
            "movement": -8
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 101,
            "movement": -46
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 114,
            "movement": -51
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": -35
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 148,
            "movement": -57
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 153,
            "movement": -38
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 166,
            "movement": -47
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 179,
            "movement": -108
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 192,
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
            "position": 14,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": 5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 44,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 44,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 53,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 66,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 68,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 75,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 75,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 83,
            "movement": -5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 84,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 94,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 114,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 137,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 142,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": 6
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 13,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": 101
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 26,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 33,
            "movement": -28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 47,
            "movement": -36
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": 3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 97,
            "movement": -54
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 114,
            "movement": 9
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 152,
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -60
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -20
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -14
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
            "position": 60,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -7
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
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 87,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 107,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 120,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 131,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 159,
            "movement": 38
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
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
            "position": 149,
            "movement": 4
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
            "position": 27,
            "movement": -7
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
            "position": 27,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 132,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 142,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 145,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -22
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
            "movement": 10
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
            "position": 28,
            "movement": -7
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": 145
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 32
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 129,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 190,
            "movement": -23
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 109,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -83
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": -63
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 152,
            "movement": -97
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
            "movement": 56
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 50,
            "movement": 142
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 43
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 194,
            "movement": -137
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 196,
            "movement": -138
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": -71
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
            "position": 50,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 73,
            "movement": 3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 90,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": 14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": -7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 164,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -50
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 185,
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
            "position": 159,
            "movement": 3
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
            "position": 17,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -28
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
            "position": 44,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 110,
            "movement": 85
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 153,
            "movement": -17
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": -34
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
            "position": 15,
            "movement": 5
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
            "position": 79,
            "movement": 6
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": -3
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
            "position": 18,
            "movement": 5
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
            "position": 50,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -36
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
            "position": 18,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 23
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
            "position": 159,
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
            "position": 21,
            "movement": 1
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
            "position": 51,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 73,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": -35
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
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 34
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": 13
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": -7
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 16
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
            "position": 46,
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
            "position": 105,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -32
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
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": -62
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -7
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
            "position": 68,
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
            "position": 161,
            "movement": -13
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
            "position": 96,
            "movement": 1
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
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
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
            "position": 84,
            "movement": null,
            "status": "new"
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
            "position": 129,
            "movement": 28
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
            "position": 66,
            "movement": -6
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
            "position": 68,
            "movement": 1
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
            "position": 130,
            "movement": -3
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
            "position": 162,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Do I",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -127
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
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 8
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
            "position": 197,
            "movement": -26
          }
        ]
      }
    ],
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
  