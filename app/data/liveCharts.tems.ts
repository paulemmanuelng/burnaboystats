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
  export const liveChartsUpdated = "2026-11-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-15T06:39Z";
  
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": 3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 10,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 20,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 23,
            "movement": 110
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": -16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": 23
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 33,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 36,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": 70
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": 20
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": -4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 38,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": -11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 43,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -5
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": 59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 53,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 56,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 29
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 59,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 68,
            "movement": -41
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 69,
            "movement": 32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": -13
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 70,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": -22
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 78,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 79,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 81,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": -15
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 85,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 89,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 91,
            "movement": 51
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 92,
            "movement": -19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 98,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 117,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 118,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 119,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 18
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 119,
            "movement": -50
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 120,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 121,
            "movement": -17
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 125,
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 133,
            "movement": -20
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 148,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 149,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 155,
            "movement": -81
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 157,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 157,
            "movement": -55
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 163,
            "movement": 5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 163,
            "movement": 11
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 166,
            "movement": -25
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 169,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 187,
            "movement": -25
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 30,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 59,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 64,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 70,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 71,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 79,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 98,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 103,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 114,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 131,
            "movement": 11
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 131,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 136,
            "movement": 5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 159,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 163,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 170,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 171,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 183,
            "movement": -48
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 183,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 192,
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 30,
            "movement": -6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 31,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -20
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 13
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": -15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 68,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 76,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 82,
            "movement": -14
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": -23
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 106,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 108,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 109,
            "movement": -30
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 118,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 130,
            "movement": -35
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 137,
            "movement": -19
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 151,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 152,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 153,
            "movement": -36
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 158,
            "movement": -21
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 163,
            "movement": -46
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 179,
            "movement": -42
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 183,
            "movement": -12
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
            "position": 20,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": -25
          },
          {
            "country": "IN",
            "name": "India",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 37,
            "movement": -31
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 41,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 44,
            "movement": -41
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 54,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -38
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": -21
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
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 37,
            "movement": 17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 49,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 71,
            "movement": -25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 89,
            "movement": 32
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 96,
            "movement": -78
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 103,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -57
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 124,
            "movement": -85
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -74
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": -77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -18
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 197,
            "movement": -55
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
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": -86
          },
          {
            "country": "US",
            "name": "United States",
            "position": 123,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -14
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
            "position": 19,
            "movement": -5
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
            "position": 63,
            "movement": 3
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 47,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -29
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 42
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 68,
            "movement": -50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -19
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 163,
            "movement": 17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": -35
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 114,
            "movement": -51
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 23
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
            "position": 48,
            "movement": 57
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 115,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 147,
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
    "title": "I'm Not Sure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 183,
            "movement": -129
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-14",
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
  