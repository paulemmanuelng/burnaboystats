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
  export const liveChartsUpdated = "2026-09-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-24T17:15Z";
  
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": 14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 22,
            "movement": 23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 28,
            "movement": 23
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 29,
            "movement": 8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 31,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 31,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 35,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 40,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 22
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 42,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": 12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 46,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 47,
            "movement": -27
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 11
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 50,
            "movement": 33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": -21
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 54,
            "movement": 8
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -37
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": -28
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 68,
            "movement": -51
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 71,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 73,
            "movement": -27
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 79,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": 18
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 87,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 88,
            "movement": -29
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 88,
            "movement": 25
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 89,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 92,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 93,
            "movement": 40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": -36
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 97,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 98,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 107,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 108,
            "movement": 17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 114,
            "movement": 35
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 128,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 128,
            "movement": 10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 132,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 132,
            "movement": -16
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 142,
            "movement": 37
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 143,
            "movement": 53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 153,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 156,
            "movement": -61
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 159,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 160,
            "movement": -53
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 162,
            "movement": -144
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 169,
            "movement": 19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 175,
            "movement": 3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 176,
            "movement": -68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 195,
            "movement": -71
          },
          {
            "country": "ID",
            "name": "Indonesia",
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
            "country": "MY",
            "name": "Malaysia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 29,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 31,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 35,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 35,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 37,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 52,
            "movement": 3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 56,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 58,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 65,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 71,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 81,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 84,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 101,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 105,
            "movement": 11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 118,
            "movement": -12
          },
          {
            "country": "CN",
            "name": "China",
            "position": 121,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 127,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 130,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 137,
            "movement": 13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 140,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 149,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 157,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": -3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 169,
            "movement": 20
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 171,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 187,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 64,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 64,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 66,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 76,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 79,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 80,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 81,
            "movement": -15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 84,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 90,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 91,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 95,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 100,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 120,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 142,
            "movement": 17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 182,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 189,
            "movement": 8
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 1,
            "movement": 33
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 35,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 46,
            "movement": -12
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 54,
            "movement": -11
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 83,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 85,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 95,
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
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 89,
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
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 19,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 43,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 52,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 19
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 74,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 103,
            "movement": 16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 125,
            "movement": 13
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 131,
            "movement": 67
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 140,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 155,
            "movement": -111
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 176,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 181,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -30
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
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 46
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 118,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 33
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 59,
            "movement": 91
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 97,
            "movement": -18
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 180,
            "movement": 13
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 16,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": 92
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 41
          },
          {
            "country": "US",
            "name": "United States",
            "position": 102,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": 14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 184,
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
            "position": 44,
            "movement": 1
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 90,
            "movement": 47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": 41
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 121,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 173,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 80
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -20
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
            "position": 131,
            "movement": 6
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
            "position": 58,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -10
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
            "position": 170,
            "movement": -17
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
            "position": 191,
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 99,
            "movement": 69
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 92,
            "movement": 78
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 99,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -13
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
            "position": 133,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -16
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 18,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 57
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
            "position": 183,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -1
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
  