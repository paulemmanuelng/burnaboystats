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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T00:44Z";
  
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 25,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": -5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 35,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": -18
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 43,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -15
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 48,
            "movement": 6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 54,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 56,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 64,
            "movement": -26
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 65,
            "movement": -54
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": -40
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 67,
            "movement": -30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 71,
            "movement": -22
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 82,
            "movement": -37
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 88,
            "movement": -36
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": -56
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 92,
            "movement": -42
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 103,
            "movement": -35
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 104,
            "movement": -16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": -15
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 110,
            "movement": -55
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 125,
            "movement": -73
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 126,
            "movement": -20
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 138,
            "movement": -35
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 142,
            "movement": -65
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 146,
            "movement": -105
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 158,
            "movement": -9
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 194,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 200,
            "movement": -20
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 200,
            "movement": -51
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 27
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": 2
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
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "TH",
            "name": "Thailand",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 15,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 17,
            "movement": 15
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 20,
            "movement": 36
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 22,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 44,
            "movement": 32
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 44,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 45,
            "movement": -34
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 48,
            "movement": -28
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 50,
            "movement": 21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 56,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -34
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 86,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 87,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
            "movement": -14
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
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": -9
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 28,
            "movement": 10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 46,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 46,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": -6
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
            "position": 60,
            "movement": -14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 61,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 67,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 67,
            "movement": -16
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 77,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 82,
            "movement": -23
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 85,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": -34
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 116,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 123,
            "movement": -18
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 131,
            "movement": 19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 147,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 200,
            "movement": -25
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 22,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 25,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 37,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 42,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 47,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 51,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 55,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 58,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 59,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 90,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 92,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 98,
            "movement": 4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 108,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 116,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 129,
            "movement": 7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 132,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 157,
            "movement": -10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 162,
            "movement": -9
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
            "position": 7,
            "movement": 10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 11,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": -12
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 32,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 34,
            "movement": -27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 35,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": -18
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 48,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 51,
            "movement": -43
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": -49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -36
          },
          {
            "country": "US",
            "name": "United States",
            "position": 87,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 122,
            "movement": -63
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
            "position": 32,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": -59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": 60
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 118,
            "movement": -14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -18
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
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
            "position": 63,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
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
            "position": 28,
            "movement": 3
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
            "country": "SR",
            "name": "Suriname",
            "position": 39,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -16
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 32
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 136,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -162
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -25
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
            "movement": 0
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
            "movement": -5
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
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 87,
            "movement": 103
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": 61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 183,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -74
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
            "position": 185,
            "movement": -7
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 47
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 57,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -25
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": 103
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 101,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 196,
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
            "position": 59,
            "movement": -4
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 65,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": -7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 124,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -50
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -48
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 144,
            "movement": 8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 190,
            "movement": -15
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 191,
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
            "position": 154,
            "movement": 18
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
            "position": 13,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": 174
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": -67
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 128,
            "movement": -48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -74
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 5
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
            "position": 45,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 197,
            "movement": -71
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
            "position": 6,
            "movement": 66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 121,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -38
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": 26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -86
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -20
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
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 124,
            "movement": -70
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 146,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": 11
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
            "position": 24,
            "movement": -4
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 42,
            "movement": 146
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -7
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
            "position": 19,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 101,
            "movement": 57
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 105,
            "movement": 4
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
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
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
            "name": "Swaziland",
            "position": 33,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": 0
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
            "position": 45,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 189,
            "movement": 9
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -35
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
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
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -7
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
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 0
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
            "position": 127,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 1
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 143,
            "movement": -11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 178,
            "movement": -15
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
            "position": 188,
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
            "position": 96,
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
            "position": 15,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
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
            "position": 173,
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
            "country": "SR",
            "name": "Suriname",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 151,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -31
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
            "position": 22,
            "movement": -19
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
    "title": "Higher",
    "platforms": [
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
    "title": "Spiritual",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Vanilla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -36
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
            "position": 139,
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
    "title": "Simmer",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
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
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 168,
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
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 0
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
            "position": 198,
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
  