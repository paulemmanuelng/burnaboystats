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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T21:20Z";
  
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
            "position": 12,
            "movement": -9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 15,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": -8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": 58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 28,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 29,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 29,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 30,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": 61
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 35,
            "movement": -17
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 37,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 38,
            "movement": -13
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 40,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 40,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 51,
            "movement": 8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 51,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": -13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 52,
            "movement": -11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 54,
            "movement": -23
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 56,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 59,
            "movement": -15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 62,
            "movement": 23
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 62,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": 108
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 69,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 85,
            "movement": -14
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 100,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 103,
            "movement": -10
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 106,
            "movement": -29
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 107,
            "movement": 46
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 109,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": -40
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 114,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 124,
            "movement": -52
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 125,
            "movement": -28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 137,
            "movement": 15
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 137,
            "movement": -79
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 140,
            "movement": -45
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 144,
            "movement": -97
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 149,
            "movement": -31
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 149,
            "movement": -41
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 149,
            "movement": -35
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 151,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 152,
            "movement": -115
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": -46
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 158,
            "movement": 9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 161,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": -46
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 166,
            "movement": -115
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 168,
            "movement": -40
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 177,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 177,
            "movement": 20
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 188,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": -38
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 199,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 6,
            "movement": 5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": 5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 12,
            "movement": 3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 12,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 20,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 20,
            "movement": 12
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": 7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 22,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 24,
            "movement": 13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 31,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 33,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 34,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 35,
            "movement": 7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 37,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 47,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 50,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 50,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 51,
            "movement": 7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 51,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 57,
            "movement": 14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": 20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": 10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": 21
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 67,
            "movement": 27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 72,
            "movement": 12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 76,
            "movement": 11
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 76,
            "movement": 9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 77,
            "movement": 6
          },
          {
            "country": "CN",
            "name": "China",
            "position": 85,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 85,
            "movement": 12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 91,
            "movement": 35
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 102,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 108,
            "movement": 10
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 110,
            "movement": 19
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 113,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 116,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 28
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 50,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 52,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 53,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 67,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 68,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 70,
            "movement": -9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 74,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 82,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 84,
            "movement": 17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 90,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 93,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -19
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 117,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 127,
            "movement": -16
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 146,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 174,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 190,
            "movement": -27
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 196,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 1,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 14,
            "movement": -9
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": -16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": -20
          },
          {
            "country": "IN",
            "name": "India",
            "position": 40,
            "movement": -27
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 45,
            "movement": -43
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 72,
            "movement": -44
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 76,
            "movement": -34
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 186,
            "movement": -171
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -4
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
            "position": 33,
            "movement": 29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 31,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 39,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 52,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": 41
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 61,
            "movement": -22
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 62,
            "movement": 40
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 63,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": -30
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 102,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -25
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 124,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 124,
            "movement": -111
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -23
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": -116
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 159,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 166,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -27
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 175,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 178,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -58
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 200,
            "movement": -106
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": 9
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 73,
            "movement": 25
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 124,
            "movement": 51
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 151,
            "movement": 43
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 164,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
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
            "country": "SR",
            "name": "Suriname",
            "position": 52,
            "movement": -42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": 73
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": 26
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
            "movement": -54
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 189,
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
            "country": "GD",
            "name": "Grenada",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -6
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 11,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 94
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
            "position": 174,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 18,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 57,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 64,
            "movement": 121
          },
          {
            "country": "US",
            "name": "United States",
            "position": 108,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 186,
            "movement": -163
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 76,
            "movement": -48
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
            "position": 46,
            "movement": 2
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 114,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -60
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
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
            "position": 136,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": 3
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
            "position": 74,
            "movement": 8
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 122,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "MV",
            "name": "Maldives",
            "position": 123,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -22
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
            "position": 190,
            "movement": -100
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 111,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 136,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 84,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
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
  