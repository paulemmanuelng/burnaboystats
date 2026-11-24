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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:30Z";
  
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
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": 40
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 9,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 18,
            "movement": 32
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 101
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 29,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 30,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 42,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 42,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 46,
            "movement": 14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 48,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 48,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 49,
            "movement": -33
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 51,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 59,
            "movement": 9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 60,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 66,
            "movement": 43
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 67,
            "movement": 18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 69,
            "movement": 70
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 32
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 71,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": -28
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 72,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 75,
            "movement": -21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": 35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 82,
            "movement": -26
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 102,
            "movement": -32
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 109,
            "movement": 22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 115,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 117,
            "movement": -40
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 119,
            "movement": 77
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 121,
            "movement": -19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 126,
            "movement": 46
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 127,
            "movement": -16
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": -43
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 133,
            "movement": 15
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 134,
            "movement": 12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 147,
            "movement": -64
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 148,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 158,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 183,
            "movement": -76
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": -147
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 192,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": 28
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 31,
            "movement": 16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": 19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 61,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 61,
            "movement": 22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 69,
            "movement": 12
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 70,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 113,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 119,
            "movement": 15
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 121,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 122,
            "movement": 19
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 130,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 133,
            "movement": 41
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 136,
            "movement": 56
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 137,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 155,
            "movement": 19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 157,
            "movement": 27
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 177,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 189,
            "movement": -3
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
            "position": 26,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 32,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 55,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 60,
            "movement": -6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 66,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 84,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 99,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 102,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 102,
            "movement": 15
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 116,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 133,
            "movement": -20
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 135,
            "movement": -15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 166,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 170,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 178,
            "movement": -8
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 180,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 188,
            "movement": -16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 3,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 26,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -17
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
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": 5
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
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 69,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 99,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": -56
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 103,
            "movement": -31
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 106,
            "movement": 9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 107,
            "movement": -46
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 135,
            "movement": 49
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 136,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 153,
            "movement": 31
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 153,
            "movement": -91
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 168,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -37
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 174,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 7,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 71,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 98
          },
          {
            "country": "US",
            "name": "United States",
            "position": 127,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": 7
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
            "position": 58,
            "movement": -13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 142,
            "movement": -21
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 164,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -22
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
            "position": 174,
            "movement": -67
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
            "country": "MR",
            "name": "Mauritania",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 39,
            "movement": 86
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 75,
            "movement": 122
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": 17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 57,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -17
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 114,
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
            "position": 72,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 161,
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
            "position": 158,
            "movement": null,
            "status": "new"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 21
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 190,
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
            "position": 185,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 188,
            "movement": -79
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": -5
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
            "country": "AI",
            "name": "Anguilla",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 151,
            "movement": -40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -50
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
            "position": 60,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": 0
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
    "title": "African Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -18
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
            "position": 26,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
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
            "movement": -1
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
            "position": 74,
            "movement": -17
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
        "platform": "iTunes",
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
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": -132
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
  