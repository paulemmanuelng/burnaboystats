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
  export const liveChartsUpdated = "2026-09-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-23T07:49Z";
  
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 17,
            "movement": 52
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 18,
            "movement": 43
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 21,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 27,
            "movement": -10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 31,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 32,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 37,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": 27
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 39,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": 4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 43,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 45,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 46,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 47,
            "movement": -11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 51,
            "movement": 148
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 51,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 53,
            "movement": 14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 59,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 61,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 12
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 62,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 73,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 78,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 78,
            "movement": -6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 83,
            "movement": -14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 85,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 89,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 95,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -16
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 101,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": -47
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": 25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 13
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 107,
            "movement": 24
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 109,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 112,
            "movement": -90
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 113,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 113,
            "movement": -73
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 117,
            "movement": 13
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 122,
            "movement": 51
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 124,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": 37
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 125,
            "movement": -3
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 132,
            "movement": -13
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 133,
            "movement": -33
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 138,
            "movement": 17
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 141,
            "movement": -7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": 20
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 149,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": 17
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": 17
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 188,
            "movement": -3
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 196,
            "movement": -43
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 26,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 27,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 46,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 49,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 59,
            "movement": 10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": 21
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 65,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 66,
            "movement": 36
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 69,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 73,
            "movement": 15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": 19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": 29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 75,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 78,
            "movement": 16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 83,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 90,
            "movement": 36
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 91,
            "movement": -41
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 92,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 100,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 115,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 28
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 159,
            "movement": 25
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 197,
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
            "country": "MY",
            "name": "Malaysia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": 10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 55,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 59,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 66,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 67,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 74,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 83,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 90,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": -3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 125,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 127,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 131,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 132,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 138,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 150,
            "movement": 12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 153,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 178,
            "movement": -7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 183,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 189,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 191,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 1,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": 14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 12
          },
          {
            "country": "IN",
            "name": "India",
            "position": 27,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 29,
            "movement": -14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 29,
            "movement": -8
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 36,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 68,
            "movement": 98
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 71,
            "movement": -32
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 73,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 85,
            "movement": -22
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 87,
            "movement": 52
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 134,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": null,
            "status": "re"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 46,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": -19
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 19,
            "movement": 22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 20,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 21,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 44,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 44,
            "movement": 26
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 63,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -20
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 68,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 37
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 76,
            "movement": 6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 79,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": 15
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
            "position": 116,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 119,
            "movement": 17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 44
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 160,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 176,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 184,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": 8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 197,
            "movement": -39
          },
          {
            "country": "BH",
            "name": "Bahrain",
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
            "position": 182,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 89
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 79,
            "movement": -35
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -92
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 193,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -101
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
            "position": 145,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 126,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 137,
            "movement": 44
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -29
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
            "position": 137,
            "movement": 62
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
            "position": 46,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 105,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 142,
            "movement": -74
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": 10
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
            "position": 25,
            "movement": -4
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
            "movement": -2
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
            "position": 97,
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
            "country": "US",
            "name": "United States",
            "position": 10,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": 70
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 82,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -9
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
            "position": 153,
            "movement": 18
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 196,
            "movement": -151
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 122,
            "movement": 36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 168,
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
    "title": "Damages",
    "platforms": [
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
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 138,
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
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -2
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
            "position": 134,
            "movement": -5
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I THINK YOU'RE SPECIAL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67541e55a567744d91f140a7d5bc1727/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Try Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 194,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Lagos Love",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
  