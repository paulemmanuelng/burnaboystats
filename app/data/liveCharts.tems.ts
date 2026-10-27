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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T12:17Z";
  
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
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 7,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 14
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 13,
            "movement": 78
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 15,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 19,
            "movement": 11
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": 20
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 29,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 30,
            "movement": 4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 37,
            "movement": 41
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": 14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 38,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": 17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 39,
            "movement": 30
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 40,
            "movement": 111
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 46,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 49,
            "movement": -9
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 52,
            "movement": -18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 53,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 54,
            "movement": 74
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 54,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": 13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 63,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 73
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 73,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 76,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 82
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 79,
            "movement": 35
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 80,
            "movement": -25
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 81,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 84,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 86,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 91,
            "movement": 9
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": 20
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 113,
            "movement": -30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 114,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 114,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 116,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 119,
            "movement": -42
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 124,
            "movement": 21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 126,
            "movement": 26
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 133,
            "movement": 37
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 133,
            "movement": -129
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": -43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": 44
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": -43
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 147,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 149,
            "movement": -23
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 152,
            "movement": 14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 176,
            "movement": 13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 181,
            "movement": -146
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 193,
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 38,
            "movement": -4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 42,
            "movement": 4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 44,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 65,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 72,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 83,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 88,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 94,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 99,
            "movement": 7
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 100,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 102,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 122,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 124,
            "movement": 15
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 125,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 129,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 129,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 133,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 144,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 145,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 153,
            "movement": 34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 159,
            "movement": -11
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 162,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 170,
            "movement": 8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 174,
            "movement": -39
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 177,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 182,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 198,
            "movement": -20
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 199,
            "movement": -12
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
            "position": 24,
            "movement": -3
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
            "position": 25,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 44,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 58,
            "movement": -14
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 61,
            "movement": -15
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 67,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 84,
            "movement": -16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 85,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 85,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": -22
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 101,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -17
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 115,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 127,
            "movement": -15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 136,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 136,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 144,
            "movement": -47
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 149,
            "movement": -33
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 150,
            "movement": -20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 152,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 166,
            "movement": -35
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 183,
            "movement": -17
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
            "position": 14,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -4
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
            "position": 30,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 33,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 41,
            "movement": -11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 60
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 29,
            "movement": -27
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 63,
            "movement": -6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 71,
            "movement": -66
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 87,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 187,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": 16
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 83,
            "movement": null,
            "status": "new"
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 33,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 49,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 51,
            "movement": 61
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 52,
            "movement": -21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 64,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 93,
            "movement": -7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 109,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 35
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 135,
            "movement": 35
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 146,
            "movement": -12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "MR",
            "name": "Mauritania",
            "position": 9,
            "movement": 54
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": -124
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 147,
            "movement": 25
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 152,
            "movement": -95
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": 31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": -28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 194,
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
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -23
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 108,
            "movement": -20
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
            "position": 32,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": -18
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -87
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
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
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 161,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 139,
            "movement": -54
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 151,
            "movement": -35
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
            "position": 60,
            "movement": -33
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
            "position": 52,
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
            "position": 9,
            "movement": -1
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
            "position": 58,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "position": 145,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 12,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
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
            "position": 160,
            "movement": -7
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
            "position": 35,
            "movement": -1
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 187,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 170,
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
            "position": 57,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": -24
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
            "position": 145,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 135,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I THINK YOU'RE SPECIAL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67541e55a567744d91f140a7d5bc1727/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 83,
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
  