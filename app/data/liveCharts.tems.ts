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
  export const liveChartsBuiltAt = "2026-09-26T16:27Z";
  
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
            "position": 11,
            "movement": 15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 13,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": -7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 17,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": -9
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 26,
            "movement": 110
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 27,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 30,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 33,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 33,
            "movement": 11
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 34,
            "movement": 11
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 34,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": 13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 41,
            "movement": 55
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": -33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 44,
            "movement": -18
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 45,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
            "movement": 24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 53,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": -21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 59,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 65,
            "movement": 40
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 66,
            "movement": -19
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 69,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": -28
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": 35
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 70,
            "movement": 80
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 72,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 73,
            "movement": -21
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 74,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": -19
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 76,
            "movement": -14
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 79,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 83,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 87,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -41
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 88,
            "movement": -39
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": -24
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 89,
            "movement": 9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 89,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 102,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -13
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": -94
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 114,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 121,
            "movement": -31
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 123,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 124,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 127,
            "movement": -23
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 130,
            "movement": 34
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 131,
            "movement": 31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 133,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 134,
            "movement": -28
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 136,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 138,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": 25
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 146,
            "movement": -30
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": -64
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 160,
            "movement": 32
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 197,
            "movement": -23
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
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": -11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 47,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 65,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 78,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 84,
            "movement": -29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 87,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 106,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 108,
            "movement": -15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 114,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 151,
            "movement": -17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 156,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": -33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 197,
            "movement": -17
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 8,
            "movement": 91
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 9,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 14,
            "movement": 11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 26,
            "movement": -20
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 45,
            "movement": -41
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 88,
            "movement": -53
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 92,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -88
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 147,
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
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": 4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 27,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 37,
            "movement": -16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": 14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": -20
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 85,
            "movement": 56
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 92,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 114,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": -65
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 137,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": -12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 151,
            "movement": -20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": -54
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 159,
            "movement": -93
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
            "movement": -166
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 194,
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
            "position": 184,
            "movement": -5
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
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": -11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 135,
            "movement": -40
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
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
            "position": 44,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
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
            "position": 183,
            "movement": -38
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
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 54,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 85,
            "movement": -25
          },
          {
            "country": "US",
            "name": "United States",
            "position": 103,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 118,
            "movement": -35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 185,
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
            "position": 42,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 191,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 69,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 162,
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
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": -41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 97,
            "movement": 71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 136,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 182,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 32,
            "movement": 111
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 85,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
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
            "movement": -5
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
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
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
            "position": 150,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 68,
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
            "position": 44,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -48
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
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 136,
            "movement": 64
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
            "position": 86,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
  