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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T06:53Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 5,
            "movement": 52
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 10,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 18,
            "movement": 85
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": 14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 69
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 25,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 34,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 15
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 40,
            "movement": 89
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": 7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 43,
            "movement": -18
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": 16
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": 62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 45,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 45,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 46,
            "movement": 23
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 49,
            "movement": 116
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 50,
            "movement": 23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 50,
            "movement": 106
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 53,
            "movement": 17
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 55,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 56,
            "movement": 47
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": 59
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 64,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 67,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 71,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": 16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 75,
            "movement": 16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 81,
            "movement": -27
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 82,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 82,
            "movement": 13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 88,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": 51
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 92,
            "movement": -65
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 92,
            "movement": -7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 92,
            "movement": 45
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 92,
            "movement": 13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 94,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 99,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 101,
            "movement": -40
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 41
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 108,
            "movement": 19
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 109,
            "movement": 22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 111,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 123,
            "movement": -12
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 134,
            "movement": 30
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 155,
            "movement": 18
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 165,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 166,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 171,
            "movement": -11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 175,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 184,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 192,
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 36,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 44,
            "movement": 3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 57,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 58,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 76,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": 4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 80,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 89,
            "movement": -8
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 100,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 104,
            "movement": -13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 104,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 104,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 106,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 113,
            "movement": 8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 115,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 124,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 138,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 141,
            "movement": -18
          },
          {
            "country": "FR",
            "name": "France",
            "position": 143,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 147,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 183,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 183,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 186,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 195,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 197,
            "movement": -17
          },
          {
            "country": "CL",
            "name": "Chile",
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 34,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 45,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 46,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 67,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 75,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 99,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 111,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 115,
            "movement": 30
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 117,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 131,
            "movement": 13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 134,
            "movement": 19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 140,
            "movement": 14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 142,
            "movement": 19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 153,
            "movement": -17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 156,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 158,
            "movement": 11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 169,
            "movement": 15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 173,
            "movement": -12
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 4
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 94,
            "movement": -10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 99,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -134
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 44,
            "movement": 0
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 43,
            "movement": 58
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 44,
            "movement": 8
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 52,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": -37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -35
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 14
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 84,
            "movement": 41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": 53
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 89,
            "movement": -17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 92,
            "movement": 77
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 108,
            "movement": -40
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 114,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 123,
            "movement": -99
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 135,
            "movement": 44
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 138,
            "movement": 19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 24
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 179,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 190,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 191,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -129
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 36,
            "movement": -12
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 46,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 52,
            "movement": 52
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 70,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 88,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 115,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 116,
            "movement": 32
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 120,
            "movement": 54
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 142,
            "movement": -103
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 157,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
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
            "country": "US",
            "name": "United States",
            "position": 111,
            "movement": 10
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
            "position": 59,
            "movement": 5
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
            "movement": -3
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
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": 57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
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
            "position": 124,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 27,
            "movement": 86
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 68,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": 70
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 97,
            "movement": 91
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 165,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": -88
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
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 52,
            "movement": 72
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": 14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 161,
            "movement": -60
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 187,
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -3
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
            "position": 123,
            "movement": -14
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
            "position": 67,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 48
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 120,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 2
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
            "position": 80,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": 10
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
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
            "position": 85,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
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
            "position": 195,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 19
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 144,
            "movement": -74
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 191,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -8
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
            "position": 29,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ordinary People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
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
            "position": 137,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": -133
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0989302f2acc1132d8922b3f292abe4b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
  