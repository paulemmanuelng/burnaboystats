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
  export const liveChartsUpdated = "2026-09-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-26T21:14Z";
  
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": 3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": 7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": 18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 31,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 32,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 32,
            "movement": 10
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 32,
            "movement": 2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 34,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -14
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 43,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 51,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 53,
            "movement": -26
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 54,
            "movement": -21
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 53
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": -15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 61,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 65,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 65,
            "movement": -24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 70,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 76,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 77,
            "movement": -28
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 80,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 83,
            "movement": -24
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -4
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 86,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 86,
            "movement": -10
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 88,
            "movement": 42
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 94,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 101,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 101,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 105,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 106,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": -42
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 112,
            "movement": -42
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 120,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 121,
            "movement": -2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 127,
            "movement": 9
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 127,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 131,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 136,
            "movement": 23
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 144,
            "movement": -74
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 146,
            "movement": -57
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 151,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 156,
            "movement": -42
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
            "movement": -34
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": -20
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 183,
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
            "position": 19,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 29,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 30,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 39,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 49,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 60,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 68,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 75,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 78,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 109,
            "movement": 3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 118,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 120,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 121,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 128,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 133,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 138,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 138,
            "movement": -38
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 152,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 165,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 172,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 176,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 177,
            "movement": 1
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 18,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 49,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 60,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": -11
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 78,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 88,
            "movement": -23
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 89,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 91,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 93,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 99,
            "movement": -25
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 103,
            "movement": -22
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 107,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 107,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 116,
            "movement": -29
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 131,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 167,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 169,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 200,
            "movement": -3
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 9,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 11,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 12,
            "movement": 10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 38,
            "movement": -28
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 59,
            "movement": -44
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": 7
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 60,
            "movement": -50
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -111
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 138,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -23
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
            "position": 14,
            "movement": 23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 53,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 56,
            "movement": 103
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 60,
            "movement": -42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 88,
            "movement": -38
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 95,
            "movement": -26
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 131,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 133,
            "movement": -36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 135,
            "movement": 21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 138,
            "movement": -24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 176,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 193,
            "movement": -108
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 200,
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
            "position": 87,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 185,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": -96
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
            "position": 65,
            "movement": -42
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 126,
            "movement": -11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": -49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 200,
            "movement": -40
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
            "position": 46,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -12
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
            "position": 189,
            "movement": -6
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
            "position": 76,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 74,
            "movement": 44
          },
          {
            "country": "US",
            "name": "United States",
            "position": 102,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 105,
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -16
          },
          {
            "country": "US",
            "name": "United States",
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
            "country": "US",
            "name": "United States",
            "position": 39,
            "movement": 4
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
            "position": 12,
            "movement": -2
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
            "country": "SC",
            "name": "Seychelles",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 51
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 73,
            "movement": 63
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 132,
            "movement": -100
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 162,
            "movement": -40
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 180,
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
            "position": 14,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
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
            "position": 163,
            "movement": -13
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
            "position": 181,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
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
            "position": 113,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -123
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
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
            "position": 115,
            "movement": -29
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
            "position": 172,
            "movement": 0
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
  