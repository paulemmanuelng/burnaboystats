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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T22:17Z";
  
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": 10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 19,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 22,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 30,
            "movement": 16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 39,
            "movement": -10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 41,
            "movement": 37
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 44,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 53,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 55,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 56,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": 66
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 63,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 64,
            "movement": -18
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 65,
            "movement": 116
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 89,
            "movement": 4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 91,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -23
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 115,
            "movement": -17
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 119,
            "movement": 41
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 124,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 134,
            "movement": -3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 148,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 156,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 166,
            "movement": 29
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 188,
            "movement": -66
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 197,
            "movement": -182
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
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
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
            "position": 7,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
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
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 28,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -22
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 35,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -20
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 39,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 39,
            "movement": -19
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 42,
            "movement": 18
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -18
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 54,
            "movement": -41
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": -32
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 70,
            "movement": -41
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": -17
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 82,
            "movement": -11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 97,
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
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 27,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 27,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 39,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 56,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 59,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 75,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 78,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 92,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": 13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 148,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 149,
            "movement": 6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 160,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 192,
            "movement": 3
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
            "position": 14,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 35,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 37,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 38,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 62,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 63,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 71,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 81,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 108,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 108,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 119,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 122,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 143,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 186,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 76
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 17,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 32,
            "movement": -14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 71,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 83,
            "movement": 23
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 197,
            "movement": -90
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": -58
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -40
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -98
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -58
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 176,
            "movement": -139
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -85
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
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 150,
            "movement": 39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": 9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -50
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -2
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
            "position": 179,
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
            "position": 31,
            "movement": 1
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
            "position": 27,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 102,
            "movement": 67
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -57
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": 9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
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
            "position": 175,
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
            "position": 17,
            "movement": -11
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 90,
            "movement": 77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 116,
            "movement": -46
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 118,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 181,
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
            "position": 124,
            "movement": -4
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
            "movement": -11
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
            "position": 27,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 71,
            "movement": 115
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -71
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -48
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 133,
            "movement": -76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -40
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
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
            "position": 162,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": 44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 99,
            "movement": 54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -58
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 165,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -84
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 194,
            "movement": -66
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 198,
            "movement": -18
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
            "position": 158,
            "movement": -4
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 133,
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
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": 1
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
            "position": 18,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -40
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": 22
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
            "position": 30,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -103
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -39
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -13
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
            "movement": 2
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
            "position": 38,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -135
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
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
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
            "position": 193,
            "movement": -20
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": 69
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 82,
            "movement": 116
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 112,
            "movement": -41
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
            "movement": 2
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
            "position": 91,
            "movement": 2
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
            "position": 36,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 0
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
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 194,
            "movement": -118
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -29
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
            "position": 123,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -44
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
            "position": 75,
            "movement": 4
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 63,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -9
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
            "position": 110,
            "movement": -8
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
            "position": 139,
            "movement": -5
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
            "position": 191,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 78,
            "movement": -30
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -7
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
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
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
            "position": 42,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -63
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
            "position": 180,
            "movement": -1
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
  