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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T05:28Z";
  
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
            "position": 5,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 14,
            "movement": 151
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 23,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 23,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 31,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 32,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": -8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 35,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 38,
            "movement": 2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 47,
            "movement": 39
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 49,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 53,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 57,
            "movement": -7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 61,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": 15
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 67,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 13
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 77,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 30
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": 11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 85,
            "movement": -38
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 87,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 87,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 89,
            "movement": -24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 89,
            "movement": -34
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 90,
            "movement": 11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": 55
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 94,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 96,
            "movement": 3
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 98,
            "movement": 29
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 100,
            "movement": -40
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 101,
            "movement": -47
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 103,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 113,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 125,
            "movement": -5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 128,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 131,
            "movement": 20
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 138,
            "movement": 13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 143,
            "movement": -38
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 153,
            "movement": 3
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 154,
            "movement": -66
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": -66
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 167,
            "movement": -61
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 179,
            "movement": -47
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": -140
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 30,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 32,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 33,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 35,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 46,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 47,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 49,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 68,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 74,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 85,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 92,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 113,
            "movement": 7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 115,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 117,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 123,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 136,
            "movement": 2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 140,
            "movement": -22
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 144,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 146,
            "movement": 26
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 148,
            "movement": 17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 153,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 170,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 174,
            "movement": 2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -20
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -9
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 64,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 79,
            "movement": 14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 82,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 102,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 106,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 108,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 109,
            "movement": -25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 111,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 116,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": -18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 138,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 184,
            "movement": -17
          },
          {
            "country": "IL",
            "name": "Israel",
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
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 159
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 27,
            "movement": -12
          },
          {
            "country": "IN",
            "name": "India",
            "position": 33,
            "movement": -21
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 55,
            "movement": -37
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 68,
            "movement": -28
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 94,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 181,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -6
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
            "position": 95,
            "movement": -24
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
            "country": "BM",
            "name": "Bermuda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 53,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 57,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -7
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 67,
            "movement": 39
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": 104
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": 22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 111,
            "movement": 20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 112,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 144,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 168,
            "movement": -25
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 170,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 179,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 194,
            "movement": -18
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 199,
            "movement": -143
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -15
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 165,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -31
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
            "movement": -57
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "position": 131,
            "movement": 14
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
            "country": "BM",
            "name": "Bermuda",
            "position": 64,
            "movement": 100
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 173,
            "movement": -52
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -8
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
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 59,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -11
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
            "position": 93,
            "movement": -17
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -57
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": -101
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 194,
            "movement": -145
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 82,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": 0
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 30,
            "movement": 75
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
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
            "position": 21,
            "movement": -8
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
            "position": 40,
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
            "position": 15,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": 7
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
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
            "position": 160,
            "movement": 3
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
            "country": "AO",
            "name": "Angola",
            "position": 52,
            "movement": -21
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 118,
            "movement": 62
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": null,
            "status": "new"
          },
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": 74
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
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
            "movement": -21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 47
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
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -9
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 74,
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
    "title": "Try Me",
    "platforms": [
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr Rebel",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d45215beb1417c79c9868de1f58b80eb/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": 6
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
            "position": 86,
            "movement": 1
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
  