// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-08T13:35Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 15,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 17,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 21,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 22,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 37,
            "movement": 14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 39,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 42,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 45,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 47,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 49,
            "movement": -2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 49,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 51,
            "movement": 77
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 51,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 53,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 55,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 56,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": 11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 58,
            "movement": -4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 59,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 61,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 82,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 86,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 87,
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 91,
            "movement": -35
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 94,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 94,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 95,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 101,
            "movement": 20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 102,
            "movement": 21
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 103,
            "movement": 3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 106,
            "movement": -7
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 109,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 121,
            "movement": 68
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 122,
            "movement": 25
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 123,
            "movement": -54
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 124,
            "movement": 75
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 133,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 135,
            "movement": -101
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 137,
            "movement": 7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 152,
            "movement": 27
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 153,
            "movement": 27
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 166,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 167,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 168,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 193,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 195,
            "movement": -76
          },
          {
            "country": "FR",
            "name": "France",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 4,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 18,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 28,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 30,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 41,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 52,
            "movement": 3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 53,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 53,
            "movement": 1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 55,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 62,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 66,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 69,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 75,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 77,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 79,
            "movement": 4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 81,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -8
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 114,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 143,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -2
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 177,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 191,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 41,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 42,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 46,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 54,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 55,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 59,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 66,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 78,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 89,
            "movement": -11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
            "movement": -7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 97,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 111,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 130,
            "movement": -13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 153,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 168,
            "movement": -25
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 178,
            "movement": -22
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 183,
            "movement": -14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 199,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": 91
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 23,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 34,
            "movement": 22
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 35,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 35,
            "movement": 17
          },
          {
            "country": "IN",
            "name": "India",
            "position": 36,
            "movement": 40
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": -11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 62,
            "movement": -59
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": 77
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 100,
            "movement": -13
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -52
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIT FOR U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 21,
            "movement": 27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 21,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 37,
            "movement": 18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 42,
            "movement": 108
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 50,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 84
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 88,
            "movement": 6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 93,
            "movement": -32
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 97,
            "movement": -25
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 100,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": 39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 150,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 151,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 154,
            "movement": 28
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 155,
            "movement": -29
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 186,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 191,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 85,
            "movement": -45
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": 25
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 153,
            "movement": 32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 157,
            "movement": -42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 38
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
            "country": "MA",
            "name": "Morocco",
            "position": 53,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 69,
            "movement": -12
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 79,
            "movement": 12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 102,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 147,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 168,
            "movement": -15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 178,
            "movement": 12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 181,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 37,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -13
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 53,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 138,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 23,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 39,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": 14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 56,
            "movement": 21
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 70,
            "movement": 28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": 40
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 114,
            "movement": 28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": 34
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 131,
            "movement": 57
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 148,
            "movement": 32
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 38
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 90,
            "movement": 103
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 99,
            "movement": -36
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 123,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 154,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": -79
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
            "position": 74,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 33
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 112,
            "movement": -69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": -30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -93
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 185,
            "movement": -116
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
            "position": 136,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 23,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 36,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": 101
          },
          {
            "country": "US",
            "name": "United States",
            "position": 130,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 109,
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
            "country": "US",
            "name": "United States",
            "position": 45,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 13,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 155,
            "movement": 21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
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
            "position": 188,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": 38
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -3
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
            "position": 155,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  