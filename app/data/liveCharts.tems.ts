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
  export const liveChartsUpdated = "2026-10-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-05T05:46Z";
  
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
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 21,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 29,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 29,
            "movement": 21
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 30,
            "movement": 7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 30,
            "movement": 21
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 32,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 33,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 35,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 35,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 37,
            "movement": 69
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 37,
            "movement": 107
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 40,
            "movement": 14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 42,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 44,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": -18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 49,
            "movement": -26
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 51,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 22
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 55,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 61,
            "movement": 60
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 61,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 63,
            "movement": 74
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": -12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 65,
            "movement": -14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 69,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 70,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 73,
            "movement": -14
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 76,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 109,
            "movement": 47
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 110,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 110,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 116,
            "movement": -8
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 116,
            "movement": -13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 118,
            "movement": 33
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 118,
            "movement": 40
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 121,
            "movement": -59
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 123,
            "movement": 26
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 124,
            "movement": 73
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 125,
            "movement": -18
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 132,
            "movement": 29
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 142,
            "movement": 9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 146,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 147,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 147,
            "movement": 19
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 157,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 165,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 168,
            "movement": -31
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 182,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 186,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 188,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 199,
            "movement": -9
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
            "position": 4,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 7,
            "movement": 4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 7,
            "movement": 5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 13,
            "movement": 7
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": 9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 17,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 19,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 20,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 21,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 22,
            "movement": 11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": 8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 30,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 41,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 43,
            "movement": 8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 43,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 45,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 45,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 48,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": 19
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 53,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 54,
            "movement": 11
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 57,
            "movement": 19
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 60,
            "movement": 12
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 64,
            "movement": 12
          },
          {
            "country": "CN",
            "name": "China",
            "position": 68,
            "movement": 17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 68,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": -7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 73,
            "movement": 12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 77,
            "movement": 14
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 84,
            "movement": 24
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 87,
            "movement": 29
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 87,
            "movement": 15
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 88,
            "movement": 22
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 103,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": 49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 39,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 44,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 57,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 62,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 68,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 70,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 81,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": 10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 85,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 88,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 105,
            "movement": 12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 106,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 124,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 129,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 131,
            "movement": 43
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 132,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 172,
            "movement": 18
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 1,
            "movement": 16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 17
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 27,
            "movement": -26
          },
          {
            "country": "IN",
            "name": "India",
            "position": 29,
            "movement": 12
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 45,
            "movement": -17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 54,
            "movement": 47
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 77,
            "movement": 93
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 50
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": -20
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 44,
            "movement": -5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 44,
            "movement": -13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 56,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 75,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": 112
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -66
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 102,
            "movement": -41
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 119,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 120,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 4
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 37
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 137,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 148,
            "movement": 11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": 9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 188,
            "movement": -86
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 189,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 190,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 176,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 197,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 63,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 70,
            "movement": 3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 112,
            "movement": 12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 122,
            "movement": 10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 133,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 200,
            "movement": -36
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 18,
            "movement": -7
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 109,
            "movement": -46
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": -81
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 22,
            "movement": -4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -28
          },
          {
            "country": "US",
            "name": "United States",
            "position": 112,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 128,
            "movement": -64
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": -17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 152,
            "movement": 26
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
            "position": 47,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 79
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -40
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": 13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -131
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
            "position": 199,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "country": "OM",
            "name": "Oman",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 187,
            "movement": -120
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 10
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
            "movement": 48
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 118,
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
            "position": 56,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 0
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
  