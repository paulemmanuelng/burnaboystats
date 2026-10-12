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
  export const liveChartsUpdated = "2026-10-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-12T06:02Z";
  
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
        "numberOnes": 3,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": 8
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 11,
            "movement": 18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 18,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 20,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 26,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 30,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 33,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 35,
            "movement": 22
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 37,
            "movement": 20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 38,
            "movement": 7
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 39,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 41,
            "movement": 73
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": 12
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 45,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": 5
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": -12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 50,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 52,
            "movement": 16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 52,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": 24
          },
          {
            "country": "FR",
            "name": "France",
            "position": 54,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 54,
            "movement": 8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 55,
            "movement": 111
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 65,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 68,
            "movement": 26
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 77,
            "movement": -45
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": 8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 88,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 95,
            "movement": -46
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 103,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 104,
            "movement": -47
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 106,
            "movement": -28
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 149,
            "movement": 5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 149,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 159,
            "movement": 4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 170,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 177,
            "movement": -12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 180,
            "movement": -103
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 33
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": 8
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
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 20,
            "movement": 26
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 29,
            "movement": -21
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 30,
            "movement": 19
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 31,
            "movement": 14
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 18
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": 27
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": 12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 71,
            "movement": 27
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 76,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": -20
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": -25
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 95,
            "movement": -56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": 8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": 17
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": 16
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 38,
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 40,
            "movement": 14
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 41,
            "movement": 17
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": 24
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 46,
            "movement": 20
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": 28
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 48,
            "movement": 25
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 51,
            "movement": 21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 59,
            "movement": 7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 66,
            "movement": 31
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 67,
            "movement": 48
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 77,
            "movement": 76
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 77,
            "movement": 33
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 91,
            "movement": 59
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 105,
            "movement": 33
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 106,
            "movement": 53
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 144,
            "movement": 47
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 150,
            "movement": 46
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 200,
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 23,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 33,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 40,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 49,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 52,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 52,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 54,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 58,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 71,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 92,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 92,
            "movement": -26
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 102,
            "movement": 9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 103,
            "movement": 50
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 121,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 136,
            "movement": -13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 138,
            "movement": -17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 147,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 153,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 38
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 12,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 24,
            "movement": -19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 26,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": 19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": -20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 30,
            "movement": 26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 31,
            "movement": 3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 45,
            "movement": -16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 46,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -26
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 82,
            "movement": -74
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 88,
            "movement": 18
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 150,
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
            "position": 27,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": -9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 182,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
            "movement": -118
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -84
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 192,
            "movement": -38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -19
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 6
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
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
            "position": 178,
            "movement": 6
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
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": 113
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 104,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 146,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 165,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
            "movement": -23
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
            "position": 47,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
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
            "position": 28,
            "movement": 3
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
            "position": 32,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -31
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 179,
            "movement": -121
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 78
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": 94
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 44,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 44
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 176,
            "movement": -56
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 192,
            "movement": -157
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 194,
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
            "position": 7,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": -62
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
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 4
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
            "position": 116,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -61
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": 7
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
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": 26
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
            "position": 154,
            "movement": 6
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 81,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 93,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 106,
            "movement": 60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 160,
            "movement": -90
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 175,
            "movement": 17
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "position": 172,
            "movement": -5
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
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 54,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
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
            "position": 18,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
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
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 53,
            "movement": 55
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": -63
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 158,
            "movement": -18
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 170,
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 5
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
            "position": 42,
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "country": "SN",
            "name": "Senegal",
            "position": 52,
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": -66
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -26
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
            "position": 26,
            "movement": -10
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
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -40
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
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
            "position": 120,
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
            "position": 67,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 198,
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
            "position": 95,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 121,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
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
            "position": 47,
            "movement": -28
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 6
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
            "position": 156,
            "movement": 26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 175,
            "movement": -162
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": 8
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
            "position": 200,
            "movement": -38
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
            "position": 4,
            "movement": -3
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
            "position": 187,
            "movement": -168
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
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
            "position": 61,
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
            "position": 132,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 163,
            "movement": 15
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
            "position": 50,
            "movement": -1
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Simmer",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
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
            "position": 69,
            "movement": 0
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
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
            "country": "TC",
            "name": "Turks and Caicos",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
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
            "movement": 0
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
            "position": 172,
            "movement": -1
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
            "position": 194,
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
  