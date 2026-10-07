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
  export const liveChartsBuiltAt = "2026-10-07T23:07Z";
  
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
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 1
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": -1
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 34,
            "movement": 22
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 35,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": 4
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 44,
            "movement": 10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 49,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 49,
            "movement": 5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 49,
            "movement": 3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 50,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": 19
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 56,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": -26
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 66,
            "movement": 14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 69,
            "movement": 12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 69,
            "movement": -19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 83,
            "movement": 78
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 86,
            "movement": -58
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 104,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 107,
            "movement": 44
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": -30
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 120,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 140,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 142,
            "movement": 34
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 142,
            "movement": -23
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 164,
            "movement": 13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 165,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 169,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 181,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": 8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 197,
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 10
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": -4
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
            "movement": 42
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 17,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 19,
            "movement": 28
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 22,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 22,
            "movement": 1
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
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
            "movement": 30
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -28
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 46,
            "movement": -30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": -29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": null,
            "status": "new"
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 58,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 64,
            "movement": -20
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 65,
            "movement": -30
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 79,
            "movement": -36
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
            "movement": 5
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
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 4
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
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 24,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 32,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 39,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 46,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 51,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 55,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 55,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 74,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 75,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 79,
            "movement": -11
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 87,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 88,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 95,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 121,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 143,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": 34
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 151,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 156,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 160,
            "movement": 6
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
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
            "position": 4,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 25,
            "movement": -22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": -18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": 31
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 105,
            "movement": -28
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 107,
            "movement": -91
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
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
            "country": "SR",
            "name": "Suriname",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -43
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 111,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 135,
            "movement": -42
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 154,
            "movement": -105
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": -10
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
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 53,
            "movement": 125
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 67,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 82,
            "movement": 77
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 127,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": 51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 190,
            "movement": -83
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
            "position": 145,
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 131,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -58
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 198,
            "movement": -62
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 199,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": -43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 149,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": -17
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
            "position": 180,
            "movement": 6
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 37
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": 99
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 124,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": 18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 156,
            "movement": -56
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 165,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -55
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
            "position": 163,
            "movement": -4
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 83
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": -34
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": -48
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -37
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -29
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
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
            "position": 12,
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
            "position": 62,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -32
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 158,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -16
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
            "position": 192,
            "movement": 8
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
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 18
          },
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
            "position": 65,
            "movement": 55
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 107,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 145,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "position": 80,
            "movement": 8
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
            "position": 55,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -35
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 80,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -48
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -10
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
            "position": 100,
            "movement": -61
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
            "position": 85,
            "movement": -14
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -4
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 2
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
            "position": 142,
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
            "position": 152,
            "movement": -16
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 163,
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
            "country": "UG",
            "name": "Uganda",
            "position": 70,
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
            "movement": -6
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
            "position": 12,
            "movement": 42
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
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": null,
            "status": "new"
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -22
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
            "movement": -49
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
            "position": 84,
            "movement": -14
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
            "position": 157,
            "movement": 5
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -29
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 174,
            "movement": null,
            "status": "new"
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
  