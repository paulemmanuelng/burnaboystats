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
  export const liveChartsBuiltAt = "2026-11-15T18:56Z";
  
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
            "movement": -1
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
            "position": 10,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 21,
            "movement": 26
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
            "country": "MR",
            "name": "Mauritania",
            "position": 24,
            "movement": 13
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 25,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 30,
            "movement": -9
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 33,
            "movement": -23
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 35,
            "movement": 12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 37,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": 70
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 37,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 39,
            "movement": 46
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 39,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 43,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 44,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 51,
            "movement": -13
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": 59
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": 17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 52,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 52,
            "movement": 16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 56,
            "movement": -10
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
            "country": "MM",
            "name": "Myanmar",
            "position": 69,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 79,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 82,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": 35
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 86,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 87,
            "movement": -28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 89,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": -7
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
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 110,
            "movement": 7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 119,
            "movement": -28
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 122,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 125,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 131,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 133,
            "movement": -20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 135,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 4
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 147,
            "movement": null,
            "status": "new"
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
            "country": "SI",
            "name": "Slovenia",
            "position": 153,
            "movement": -34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 154,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 155,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 156,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 159,
            "movement": -9
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 161,
            "movement": 5
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 163,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 167,
            "movement": -21
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
            "position": 170,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 191,
            "movement": -99
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 33,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 48,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 49,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 59,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 59,
            "movement": -6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 60,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 75,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 81,
            "movement": -12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 102,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 106,
            "movement": -3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 114,
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 117,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 123,
            "movement": 8
          },
          {
            "country": "CN",
            "name": "China",
            "position": 126,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 151,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 160,
            "movement": 10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 163,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 174,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 176,
            "movement": 16
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 181,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 196,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 130
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 21,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 42,
            "movement": -34
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 46,
            "movement": -32
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 55,
            "movement": -30
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 58,
            "movement": -12
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 59,
            "movement": -41
          },
          {
            "country": "IN",
            "name": "India",
            "position": 60,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 123,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -108
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -37
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
            "position": 23,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -47
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": -10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": 28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 65,
            "movement": 24
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 69,
            "movement": 55
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -26
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -57
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": -77
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 171,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": 25
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 193,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": -86
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
            "position": 160,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -56
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
            "movement": -6
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
            "position": 62,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -41
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 68,
            "movement": -50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -59
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 118,
            "movement": -71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 182,
            "movement": -4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -102
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
            "position": 45,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 148,
            "movement": 15
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
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
            "country": "GH",
            "name": "Ghana",
            "position": 181,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 121,
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
            "position": 187,
            "movement": -7
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
            "position": 175,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 94,
            "movement": 5
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
    "title": "I THINK YOU'RE SPECIAL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67541e55a567744d91f140a7d5bc1727/500x500-000000-80-0-0.jpg"
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
  