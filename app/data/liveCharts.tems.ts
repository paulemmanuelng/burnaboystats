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
  export const liveChartsUpdated = "2026-10-31";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-31T05:48Z";
  
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
            "position": 6,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 15,
            "movement": 16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 16,
            "movement": 8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 23,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 27,
            "movement": 8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 29,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 31,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 37,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": -9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 39,
            "movement": 34
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 44,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 45,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 52,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 57,
            "movement": -22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": -39
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 60,
            "movement": 1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 60,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 60,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 72,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 74,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -27
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 85,
            "movement": 92
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 86,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": -18
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 94,
            "movement": -21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 96,
            "movement": -10
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 103,
            "movement": -38
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 104,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 105,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 107,
            "movement": -28
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 109,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 118,
            "movement": -19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 119,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -54
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": -80
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 130,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 132,
            "movement": 47
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 135,
            "movement": -24
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 145,
            "movement": -24
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 148,
            "movement": 45
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 149,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 151,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": -60
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 154,
            "movement": -70
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 159,
            "movement": -15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 161,
            "movement": -49
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 161,
            "movement": -6
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": -23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 171,
            "movement": -26
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 176,
            "movement": -25
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 178,
            "movement": -49
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 195,
            "movement": -18
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 197,
            "movement": -104
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
            "movement": -86
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 26,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 33,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": 5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 36,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 48,
            "movement": 13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 60,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 69,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 76,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 83,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 85,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 89,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 96,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 101,
            "movement": 17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 101,
            "movement": 12
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 114,
            "movement": 4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 115,
            "movement": 6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 117,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 119,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 121,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 123,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 132,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 133,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 135,
            "movement": 13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 140,
            "movement": -29
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 156,
            "movement": 32
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": 27
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 172,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 183,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 192,
            "movement": -9
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
            "position": 25,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 27,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": -26
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": -20
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": -23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 85,
            "movement": -22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 87,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 108,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 114,
            "movement": -36
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 115,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 122,
            "movement": -29
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 128,
            "movement": -33
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 131,
            "movement": -37
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 142,
            "movement": -54
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 146,
            "movement": -59
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 149,
            "movement": -16
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 151,
            "movement": -27
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 161,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 182,
            "movement": -20
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
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": 150
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 26,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 38,
            "movement": -21
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 44,
            "movement": -40
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 49,
            "movement": -12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 53,
            "movement": -19
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
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
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
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
            "position": 17,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 34,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 35,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 57,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 76,
            "movement": 7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 94,
            "movement": 62
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 95,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -19
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 129,
            "movement": 18
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 132,
            "movement": 22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 133,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -33
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 154,
            "movement": -126
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 159,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 173,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": -14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -11
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
            "position": 48,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": 140
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 71
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 124,
            "movement": -83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 169,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": 94
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": 41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 96,
            "movement": -22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 185,
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
            "position": 42,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 170,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 179,
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
            "position": 3,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 200,
            "movement": -28
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
            "position": 102,
            "movement": 6
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
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 107
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 147,
            "movement": -67
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 163,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 199,
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
            "position": 22,
            "movement": 2
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
            "position": 57,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -174
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
            "position": 135,
            "movement": -39
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
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
            "position": 159,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 66,
            "movement": 15
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 158,
            "movement": -9
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
            "movement": -6
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
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 49,
            "movement": 63
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -55
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
            "position": 2,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 99,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 154,
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
            "country": "LR",
            "name": "Liberia",
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "First",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 186,
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
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 80,
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
  