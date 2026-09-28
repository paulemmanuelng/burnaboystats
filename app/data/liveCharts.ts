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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T23:19Z";
  
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
            "country": "MA",
            "name": "Morocco",
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
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 12,
            "movement": -5
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
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": 0
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 14,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 18,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 20,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 21,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 24,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 28,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 28,
            "movement": 41
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 31,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 31,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 38,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 40,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 43,
            "movement": -26
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 45,
            "movement": 90
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 49,
            "movement": -18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 50,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": -15
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 56,
            "movement": -23
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 57,
            "movement": -19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 60,
            "movement": 43
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 66,
            "movement": -38
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 66,
            "movement": -30
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 68,
            "movement": -31
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 75,
            "movement": -29
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 77,
            "movement": -23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": 83
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 82,
            "movement": -32
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 109,
            "movement": -48
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 116,
            "movement": -27
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 142,
            "movement": -33
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 146,
            "movement": -44
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 148,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 166,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 181,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
            "movement": -87
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": 6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 7,
            "movement": 5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
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
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 13,
            "movement": 48
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 13,
            "movement": 34
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": -9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": 9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 30,
            "movement": 40
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 33
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 37,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": 39
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 39,
            "movement": -11
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 40,
            "movement": -26
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 41,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": -12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 94,
            "movement": -48
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
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 22,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": 6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 42,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 59,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 63,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 64,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 65,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 76,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 87,
            "movement": 8
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 115,
            "movement": -21
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 120,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 161,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 167,
            "movement": 11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 172,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 181,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 185,
            "movement": -21
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 29,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 35,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 36,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 37,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 55,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 56,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 62,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 82,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 89,
            "movement": 30
          },
          {
            "country": "US",
            "name": "United States",
            "position": 97,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 107,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 126,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 143,
            "movement": 55
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 151,
            "movement": -20
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 187,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 190,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 38
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 21,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 31,
            "movement": 4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 55,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 66,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": 58
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 15
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 163,
            "movement": -149
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": -74
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 114,
            "movement": -72
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -61
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": -41
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -1
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 147,
            "movement": 29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 151,
            "movement": 31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 155,
            "movement": -88
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": -44
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 166,
            "movement": -90
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -63
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 200,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 60,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 33
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 97,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 152,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -81
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
            "movement": -51
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
            "position": 188,
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
            "position": 10,
            "movement": 3
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
            "position": 146,
            "movement": -26
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
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 114,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 158,
            "movement": -59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 186,
            "movement": -5
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": -10
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
            "position": 124,
            "movement": 0
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
            "position": 22,
            "movement": 47
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": 33
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 104,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 121,
            "movement": 40
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 169,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": -30
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
            "movement": -36
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
            "position": 139,
            "movement": 7
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
            "position": 6,
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -18
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -37
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -40
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 121,
            "movement": -38
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 154,
            "movement": -75
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -90
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
    "title": "No Sign Of Weakness",
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 55,
            "movement": 82
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 195,
            "movement": -136
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 132
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -83
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -107
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 3
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
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -23
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
            "position": 24,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": 13
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -17
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
            "position": 49,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": 56
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 149,
            "movement": -59
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 196,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 199,
            "movement": -7
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
            "position": 23,
            "movement": 7
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
            "position": 79,
            "movement": 2
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 37,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
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
            "position": 189,
            "movement": -12
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
            "position": 143,
            "movement": 50
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 10
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 89,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 23
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
            "position": 159,
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
            "position": 34,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 55,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": 3
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
            "position": 49,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 43,
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
            "position": 54,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "position": 88,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "album"
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
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -18
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
            "position": 120,
            "movement": -17
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
            "position": 144,
            "movement": -2
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
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -3
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
            "position": 137,
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
            "position": 75,
            "movement": 4
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
            "movement": 5
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
            "position": 189,
            "movement": -3
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
            "position": 40,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": 12
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
            "position": 110,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
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
            "position": 117,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "We Pray",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 87,
            "movement": -21
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
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -84
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 58,
            "movement": -11
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
            "position": 121,
            "movement": -80
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
            "movement": -52
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -2
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -6
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
            "name": "Swaziland",
            "position": 76,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
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
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -89
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
            "position": 38,
            "movement": -27
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
            "position": 163,
            "movement": 4
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
  