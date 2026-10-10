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
  export const liveChartsBuiltAt = "2026-10-10T05:56Z";
  
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -2
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
            "position": 11,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 19,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 22,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 24,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 24,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 25,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 36,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": -26
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 53,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 55,
            "movement": 30
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 56,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 56,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 59,
            "movement": 5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 61,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 64,
            "movement": -12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 66,
            "movement": 57
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 67,
            "movement": -20
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 70,
            "movement": 26
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 82,
            "movement": -24
          },
          {
            "country": "FR",
            "name": "France",
            "position": 83,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 87,
            "movement": -38
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 105,
            "movement": 17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": 20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 134,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 141,
            "movement": 53
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 154,
            "movement": -68
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 157,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 196,
            "movement": -54
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
            "position": 4,
            "movement": -3
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
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 10,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 10,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": 24
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
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 16,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 33
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 19,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -9
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 21,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 24,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": 20
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 39,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 26
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": 6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 51,
            "movement": -32
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 88,
            "movement": -54
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 94,
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 29,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 35,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 50,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 51,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 56,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 66,
            "movement": -8
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 70,
            "movement": -12
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 71,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 81,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 88,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 95,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 104,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 128,
            "movement": -37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 142,
            "movement": -21
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 154,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 175,
            "movement": -8
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 179,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 195,
            "movement": -44
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
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 25,
            "movement": 1
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
            "position": 34,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": -4
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 45,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 48,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -2
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
            "position": 51,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 59,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 73,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 74,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 82,
            "movement": -6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 103,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 108,
            "movement": -14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 121,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 122,
            "movement": 9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 126,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 134,
            "movement": 10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 144,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 18,
            "movement": -13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 68,
            "movement": -20
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 95,
            "movement": -7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 96,
            "movement": 36
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 146,
            "movement": -134
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
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 79
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -63
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 134,
            "movement": -79
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
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
            "position": 45,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 0
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
            "position": 174,
            "movement": -12
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
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 57,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": -64
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 149,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 32
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 198,
            "movement": -89
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 196,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -48
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
            "position": 169,
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
            "position": 37,
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -54
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": 9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 87,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 152,
            "movement": 12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 165,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -33
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 198,
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
            "position": 161,
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
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 49,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 160,
            "movement": -128
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 141,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -77
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": -48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -62
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
            "position": 36,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": 154
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -64
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 145,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": 4
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
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
            "position": 155,
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
            "movement": 0
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 42
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 93,
            "movement": 58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 83,
            "movement": -57
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -4
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
            "position": 71,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 11
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": -10
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
            "position": 49,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 198,
            "movement": -186
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
            "position": 47,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 40,
            "movement": 109
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 37,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 25
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
            "position": 138,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -25
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
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
            "movement": -2
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
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 95,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -15
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
            "position": 61,
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -29
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
            "position": 32,
            "movement": 45
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
            "movement": -4
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
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 178,
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 164,
            "movement": -22
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
            "position": 85,
            "movement": -1
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
            "position": 55,
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Real Life",
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
            "position": 75,
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
            "country": "NE",
            "name": "Niger",
            "position": 156,
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -2
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 169,
            "movement": -35
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
            "position": 175,
            "movement": -12
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
  