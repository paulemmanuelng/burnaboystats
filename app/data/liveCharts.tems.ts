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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T08:40Z";
  
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
            "position": 7,
            "movement": -4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 11,
            "movement": 25
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 24,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 25,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": -8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 41,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 42,
            "movement": -31
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 42,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 44,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 46,
            "movement": -8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 46,
            "movement": 17
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 50,
            "movement": -3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 50,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 53,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 57,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 58,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": -13
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 61,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 66,
            "movement": -6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 70,
            "movement": 45
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": -9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 71,
            "movement": -16
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 79,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": -4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 84,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": 36
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 96,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 97,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 101,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -41
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 101,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": -18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 103,
            "movement": -26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 104,
            "movement": -22
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 106,
            "movement": -37
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 107,
            "movement": -35
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 110,
            "movement": -22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 111,
            "movement": -12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 112,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 124,
            "movement": 12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 135,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 137,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -7
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 148,
            "movement": -51
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 148,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 157,
            "movement": -22
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 164,
            "movement": -67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -126
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 180,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 187,
            "movement": -12
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 195,
            "movement": -103
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 35,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": -4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 37,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 71,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 81,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 91,
            "movement": -18
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 121,
            "movement": 17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 127,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 127,
            "movement": -21
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 130,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 136,
            "movement": -21
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 140,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 153,
            "movement": -16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 168,
            "movement": -28
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 172,
            "movement": -19
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 176,
            "movement": -18
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 193,
            "movement": -11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 200,
            "movement": -5
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 50,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 77,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 77,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 85,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 87,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 118,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 119,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 139,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 154,
            "movement": -5
          },
          {
            "country": "CN",
            "name": "China",
            "position": 158,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 169,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 171,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 198,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AM",
            "name": "Armenia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 82
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 5,
            "movement": 12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 6,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 19,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 33,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 35,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 56,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -38
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
            "position": 38,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 59,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 13,
            "movement": 12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 27,
            "movement": 33
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": -52
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 89,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": 29
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 116,
            "movement": 28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 118,
            "movement": -47
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 132,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 142,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 149,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 157,
            "movement": -24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 185,
            "movement": -30
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
            "movement": -59
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -46
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 93,
            "movement": -20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 96,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 75,
            "movement": -3
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
            "position": 25,
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -8
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
            "position": 78,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 168,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": -18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -29
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
            "position": 86,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 185,
            "movement": 4
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
            "position": 166,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": -91
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": 0
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
            "position": 122,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "African Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 73
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
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
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -8
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "re"
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 136,
            "movement": 26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 192,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 102,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 163,
            "movement": 32
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 55,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 117,
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
            "position": 59,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -26
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
  