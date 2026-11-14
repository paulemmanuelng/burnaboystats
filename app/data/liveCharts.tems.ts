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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-14T06:30Z";
  
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
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 10
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 27
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 15,
            "movement": 39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 20,
            "movement": 60
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 26,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 27,
            "movement": 106
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 31,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 34,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -3
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 39,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 49,
            "movement": -27
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 50,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -14
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 53,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": -12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 59,
            "movement": 68
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 59,
            "movement": 137
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 63,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 65,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 69,
            "movement": -18
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 69,
            "movement": 17
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 74,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": -32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 76,
            "movement": -45
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 79,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 80,
            "movement": -49
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 87,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -35
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 92,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -19
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
            "movement": -43
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 101,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 102,
            "movement": -66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 106,
            "movement": -26
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 107,
            "movement": -68
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 110,
            "movement": -21
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 110,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 111,
            "movement": -71
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 111,
            "movement": 22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 117,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": -78
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 131,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 132,
            "movement": -47
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 132,
            "movement": -30
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 133,
            "movement": -97
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 134,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": -29
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 142,
            "movement": -18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 165,
            "movement": -30
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 168,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 169,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 170,
            "movement": -12
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 174,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 176,
            "movement": -35
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": -20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 183,
            "movement": -24
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 187,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 188,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 189,
            "movement": -19
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 25,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 27,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 42,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 46,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 55,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 58,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 62,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 62,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 65,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 74,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 110,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 121,
            "movement": 22
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 124,
            "movement": -26
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 135,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 138,
            "movement": -5
          },
          {
            "country": "CN",
            "name": "China",
            "position": 141,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 142,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 155,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 159,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 164,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": -24
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 174,
            "movement": 7
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 26,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 13
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 68,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 68,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 68,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 71,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 79,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 101,
            "movement": 26
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 109,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 112,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 118,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 137,
            "movement": -19
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 137,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 147,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 149,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 171,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 15,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 42,
            "movement": -37
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 44,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 188,
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
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 84,
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
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 18,
            "movement": 41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 37,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 39,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": 35
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": -9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -37
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 77,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": -35
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 117,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 121,
            "movement": -33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 132,
            "movement": -14
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 146,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 168,
            "movement": -37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -10
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 198,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 43,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 71,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 98,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -61
          },
          {
            "country": "US",
            "name": "United States",
            "position": 136,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "BZ",
            "name": "Belize",
            "position": 14,
            "movement": 0
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
            "position": 66,
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
            "position": 8,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 36
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 132,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 183,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": 54
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 147,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 15,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 49,
            "movement": 14
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 180,
            "movement": -1
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
            "position": 164,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": -26
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": null,
            "status": "new"
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
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "AI",
            "name": "Anguilla",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
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
            "position": 83,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
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
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 188,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 54,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 111,
            "movement": 51
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
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
            "position": 174,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -65
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
  