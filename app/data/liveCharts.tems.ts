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
  export const liveChartsUpdated = "2026-11-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-23T23:58Z";
  
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
            "country": "LY",
            "name": "Libya",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 16,
            "movement": 5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 58
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 23,
            "movement": 5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 24,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 27,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 36,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 40
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": 34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": -15
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 47,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 50,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 52,
            "movement": 5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 53,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 54,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 22
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 54,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 56,
            "movement": 124
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 65,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 67,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 22
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 70,
            "movement": 26
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -13
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 73,
            "movement": -57
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 75,
            "movement": 40
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 77,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 49
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 83,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 85,
            "movement": 22
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 85,
            "movement": -14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 89,
            "movement": 25
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -30
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 102,
            "movement": 24
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 107,
            "movement": -86
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 114,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 115,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 117,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 117,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 130,
            "movement": -59
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 139,
            "movement": -54
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 145,
            "movement": 29
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 146,
            "movement": 24
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 148,
            "movement": 38
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 168,
            "movement": 15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 196,
            "movement": -28
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
            "position": 27,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 47,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": 12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 78,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 81,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": 22
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 119,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 131,
            "movement": 18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 134,
            "movement": 23
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 141,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 142,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 161,
            "movement": 20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 174,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 174,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 186,
            "movement": 14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 192,
            "movement": 6
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
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 33,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 56,
            "movement": -10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 58,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": 6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 64,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 79,
            "movement": 47
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 95,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 112,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 113,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 117,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 120,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": -13
          },
          {
            "country": "CN",
            "name": "China",
            "position": 165,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 165,
            "movement": -27
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 170,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 174,
            "movement": -18
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 180,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 19
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 8,
            "movement": 1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 161,
            "movement": -142
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": -28
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": 14
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
            "position": 15,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 19,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 61,
            "movement": 18
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 62,
            "movement": 41
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 93,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 20
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 115,
            "movement": -48
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 170,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 176,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 184,
            "movement": -31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 184,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": -71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 5
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -16
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
            "position": 10,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 53
          },
          {
            "country": "US",
            "name": "United States",
            "position": 122,
            "movement": -15
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 144,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "BB",
            "name": "Barbados",
            "position": 45,
            "movement": -10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 123,
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
            "position": 18,
            "movement": 0
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 142,
            "movement": -94
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 180,
            "movement": -109
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -17
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 49
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 197,
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
            "position": 42,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "ID",
            "name": "Indonesia",
            "position": 70,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 160,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": 85
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 180,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": 10
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 187,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": 22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 194,
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
            "position": 56,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -5
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
            "position": 10,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
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
            "position": 58,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
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
            "position": 120,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  