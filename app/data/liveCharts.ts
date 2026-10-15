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
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T11:34Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "movement": 1
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
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 2
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
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
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
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
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
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "EC",
            "name": "Ecuador",
            "position": 10,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
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
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 6
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
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": -4
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -2
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
            "country": "SV",
            "name": "El Salvador",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 14,
            "movement": -5
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -3
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
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 68,
            "movement": -1
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
            "position": 3,
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
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": -1
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 5
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 28,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 28,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 28,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 29,
            "movement": 28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 31,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 33,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 35,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 39,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 40,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 41,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 51,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 58,
            "movement": -14
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 59,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 60,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 60,
            "movement": 11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 61,
            "movement": -18
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 62,
            "movement": 37
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 63,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 76,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 78,
            "movement": 6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 123,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 123,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 126,
            "movement": -27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": -63
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 135,
            "movement": -38
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 170,
            "movement": 7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": -33
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 181,
            "movement": -80
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 190,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -1
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
            "country": "SI",
            "name": "Slovenia",
            "position": 11,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 24
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
            "position": 12,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 15,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 20,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 34
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 24,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 16
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 36,
            "movement": 32
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 40,
            "movement": 29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 27
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": 26
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 43,
            "movement": 25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 45,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 49,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 67,
            "movement": 19
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 78,
            "movement": 19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 19
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 94,
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": -21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 52,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 58,
            "movement": -6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 67,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 74,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 79,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 81,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": -35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 97,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 108,
            "movement": -32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 112,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 130,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 135,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 140,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 180,
            "movement": 9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 191,
            "movement": -29
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
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 52,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 57,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 58,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 75,
            "movement": 10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 81,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 89,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 90,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 95,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 100,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 132,
            "movement": 27
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 140,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 171,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 183,
            "movement": 9
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
            "position": 6,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": 27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": 43
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 27,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": -17
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 78,
            "movement": -18
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 85,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 116,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 132,
            "movement": -40
          },
          {
            "country": "US",
            "name": "United States",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 170,
            "movement": -88
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
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 119,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -104
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -6
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
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
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 77,
            "movement": -40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 34
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 164,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 188,
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
            "position": 60,
            "movement": 0
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
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 94,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 63
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 104,
            "movement": 65
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 88
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 178,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 196,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 144,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "position": 24,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 79,
            "movement": 109
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 61
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 4
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
            "movement": 7
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
            "position": 199,
            "movement": -10
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
            "position": 57,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -53
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 84,
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
            "movement": 7
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": 123
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 92,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": 54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": 9
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": -64
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": 24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 27,
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -20
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
            "position": 40,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 91,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -15
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 8
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
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
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
            "position": 25,
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
            "position": 156,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 71,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 81,
            "movement": 21
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 147,
            "movement": -80
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -35
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
            "position": 75,
            "movement": 3
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
            "name": "Eswatini",
            "position": 49,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": -63
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": 6
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -5
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 50,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 75,
            "movement": -3
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
            "position": 121,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
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
            "position": 23,
            "movement": -19
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
            "movement": 6
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": 8
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
            "position": 67,
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
            "position": 170,
            "movement": -17
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "If I'm Lying",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 72,
            "movement": -69
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
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 27
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
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
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
    "title": "Question",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Birthday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -74
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
            "name": "Eswatini",
            "position": 64,
            "movement": -3
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
            "position": 177,
            "movement": -22
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
            "position": 158,
            "movement": 1
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
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
            "position": 144,
            "movement": 1
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
            "position": 174,
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
  