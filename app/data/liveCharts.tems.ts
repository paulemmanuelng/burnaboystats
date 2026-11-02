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
  export const liveChartsUpdated = "2026-11-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-02T06:12Z";
  
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
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 25,
            "movement": -12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": 18
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 27,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 29,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 32,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 36,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 38,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 41,
            "movement": 55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 50,
            "movement": -19
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 52,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 56,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 61,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 63,
            "movement": -7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 65,
            "movement": -10
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 67,
            "movement": 20
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 72,
            "movement": -18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 75,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 77,
            "movement": -57
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 82,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -28
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 101,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 108,
            "movement": -33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 112,
            "movement": -16
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 115,
            "movement": -76
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 116,
            "movement": 41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": 27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 122,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 128,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 135,
            "movement": -33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 143,
            "movement": -75
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 144,
            "movement": 56
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 146,
            "movement": 33
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 147,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 153,
            "movement": 10
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 158,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 163,
            "movement": 19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 163,
            "movement": -40
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 167,
            "movement": -15
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 170,
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 180,
            "movement": -46
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 181,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 188,
            "movement": -40
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 192,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 20,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 25,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 29,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 33,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 37,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 55,
            "movement": -2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 73,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 79,
            "movement": 19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 81,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 83,
            "movement": -15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 90,
            "movement": 2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 90,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 93,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 102,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 106,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 108,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 108,
            "movement": 12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 112,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 118,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 124,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 132,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 140,
            "movement": -8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 147,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 151,
            "movement": 3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 164,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 167,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 172,
            "movement": -48
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 175,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 190,
            "movement": 4
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
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 32,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 47,
            "movement": -17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 53,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 59,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 63,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 84,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 85,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 86,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 87,
            "movement": 20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 87,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 104,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 110,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 120,
            "movement": -62
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 137,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 143,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 157,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 172,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 194,
            "movement": -39
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
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 19,
            "movement": 29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 65,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 70,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -39
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 93,
            "movement": -15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 128,
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
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": -27
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
            "position": 16,
            "movement": 16
          },
          {
            "country": "US",
            "name": "United States",
            "position": 25,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 27
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": 16
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 44
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 79,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 111,
            "movement": -31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 111,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 147,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 153,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 157,
            "movement": -33
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 158,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": 4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 175,
            "movement": -49
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 193,
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
    "title": "For Broken Ears",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -50
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 194,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 77,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 155,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
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
            "position": 57,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 176,
            "movement": -9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 196,
            "movement": -16
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
            "position": 10,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -32
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
            "position": 190,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 50,
            "movement": -16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 66,
            "movement": 18
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 177,
            "movement": -13
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
            "position": 173,
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
            "position": 71,
            "movement": -3
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "movement": 1
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
            "position": 65,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -4
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
            "position": 175,
            "movement": 10
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
            "position": 125,
            "movement": -4
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
            "position": 43,
            "movement": -15
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "position": 20,
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
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 134,
            "movement": -78
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": 3
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
            "position": 118,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": -16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 156,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
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
            "position": 113,
            "movement": 7
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
  