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
  export const liveChartsUpdated = "2026-10-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-22T11:58Z";
  
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 77
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 27,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 28,
            "movement": -12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 32,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 34,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -13
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 46,
            "movement": -16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": 19
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": 12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 50,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -21
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 56,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 58,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 28
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 63,
            "movement": -40
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 68,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 70,
            "movement": 41
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 70,
            "movement": 38
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 71,
            "movement": 94
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -20
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 80,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": 64
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 85,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 90,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 94,
            "movement": -22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": -9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 100,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 103,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": -23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 112,
            "movement": -30
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 114,
            "movement": 22
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 125,
            "movement": 42
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 126,
            "movement": 49
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": -24
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 129,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 132,
            "movement": -58
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 133,
            "movement": -25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 134,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 135,
            "movement": -29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 137,
            "movement": -27
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 151,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": -29
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 168,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": -102
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 178,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 198,
            "movement": -2
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 34,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 53,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 56,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 59,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 60,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 67,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 70,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 74,
            "movement": -16
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 79,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 88,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 89,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 90,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": -13
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 93,
            "movement": -22
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 99,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 100,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 101,
            "movement": -16
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 101,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 109,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 111,
            "movement": -34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 111,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 19
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 116,
            "movement": -26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 118,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 120,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 134,
            "movement": -7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 135,
            "movement": -12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": -17
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 149,
            "movement": -14
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 151,
            "movement": -32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 158,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 166,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 166,
            "movement": -13
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 168,
            "movement": -36
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 177,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 181,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 187,
            "movement": -25
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 25,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 27,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 34,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 55,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 64,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 75,
            "movement": -8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 85,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 87,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 93,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 93,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 95,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 104,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 119,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 134,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 141,
            "movement": -11
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 146,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 181,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 185,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -22
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 38,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 66,
            "movement": -17
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 69,
            "movement": -58
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 70,
            "movement": -18
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 75,
            "movement": -34
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 128,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -18
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 2
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
            "movement": 44
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 26,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 34,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 82,
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 7,
            "movement": 25
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 49,
            "movement": 69
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 55,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -25
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 75,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": 18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 86,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 93,
            "movement": 62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 42
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": -22
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 154,
            "movement": 2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 159,
            "movement": -13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -6
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
            "position": 18,
            "movement": 79
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 189,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "position": 47,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 155,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 176,
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
            "position": 121,
            "movement": 13
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
            "position": 125,
            "movement": -98
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -12
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 128,
            "movement": 48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 134,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 153,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": -19
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
            "position": 146,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 48,
            "movement": -18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 146,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 171,
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
            "country": "NL",
            "name": "Netherlands",
            "position": 111,
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
            "position": 48,
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
            "movement": 2
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
            "country": "GY",
            "name": "Guyana",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -98
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 23
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
            "position": 87,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 2
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
            "movement": 0
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
            "position": 182,
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
            "country": "SN",
            "name": "Senegal",
            "position": 32,
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
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 99,
            "movement": 63
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 94,
            "movement": 96
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 179,
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
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
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
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 95,
            "movement": -86
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
            "position": 56,
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
    "title": "Free Fall",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Interference",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 151,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 138,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
  