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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T13:21Z";
  
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 13,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 19,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 19,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 22,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 28,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": 5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 29,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 33,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 33,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 2
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 35,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": 3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 37,
            "movement": 11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 39,
            "movement": -20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 47,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": -25
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 53,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 56,
            "movement": -13
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 56,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 57,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 61,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 16
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 64,
            "movement": 13
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 46
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 76,
            "movement": -21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": 74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 78,
            "movement": -37
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 79,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 80,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 81,
            "movement": -15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 81,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 99,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 103,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 106,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 116,
            "movement": -29
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 120,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 129,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 131,
            "movement": -14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 132,
            "movement": 42
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 133,
            "movement": 13
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 135,
            "movement": -60
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 137,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 147,
            "movement": -30
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 150,
            "movement": -17
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 157,
            "movement": -30
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 163,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 163,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 172,
            "movement": 24
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 175,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 180,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 185,
            "movement": 10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 199,
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
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 16,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 16,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": 6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 21,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 21,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 23,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 23,
            "movement": 17
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 24,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 33,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 14
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 35,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": 16
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 37,
            "movement": 14
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 39,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 40,
            "movement": 3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 42,
            "movement": 16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 45,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 46,
            "movement": 17
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 50,
            "movement": 20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 57,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 58,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 59,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": 5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 63,
            "movement": 45
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 66,
            "movement": 23
          },
          {
            "country": "IN",
            "name": "India",
            "position": 66,
            "movement": 36
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 75,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 78,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 79,
            "movement": 10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 85,
            "movement": 18
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 92,
            "movement": 34
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 94,
            "movement": 31
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 96,
            "movement": 17
          },
          {
            "country": "CN",
            "name": "China",
            "position": 105,
            "movement": 14
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 105,
            "movement": 28
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 107,
            "movement": 22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": 21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 119,
            "movement": 34
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 121,
            "movement": 35
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 127,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 141,
            "movement": 35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 154,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 156,
            "movement": 30
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 28
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 175,
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 55,
            "movement": 18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 59,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 61,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 67,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 68,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 71,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 72,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 96,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 110,
            "movement": -18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 110,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 123,
            "movement": 12
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 139,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 175,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 194,
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
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MD",
            "name": "Moldova",
            "position": 1,
            "movement": 54
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 28,
            "movement": 10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 39,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -27
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
            "position": 14,
            "movement": 50
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": 43
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 79,
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 39,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 44,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 45,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 55,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 66,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 71,
            "movement": 33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 74,
            "movement": 36
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 92,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 115,
            "movement": 14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 116,
            "movement": -34
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": -52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 33
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 177,
            "movement": 15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 182,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 183,
            "movement": -32
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
            "position": 181,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -32
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": -77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
            "movement": 7
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
            "position": 131,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": 56
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 122,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 133,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 197,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 88,
            "movement": 10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 147,
            "movement": 15
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 149,
            "movement": 11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -37
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
            "position": 103,
            "movement": 17
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
            "position": 39,
            "movement": null,
            "status": "new"
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": 97
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 76,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 95,
            "movement": -46
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 145,
            "movement": 5
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
            "position": 38,
            "movement": -4
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 79,
            "movement": 82
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 152,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 176,
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
            "position": 82,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "DM",
            "name": "Dominica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 118,
            "movement": 15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": -4
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 3
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
            "position": 162,
            "movement": 7
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
            "position": 132,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 125,
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
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": -67
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "T-Unit",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
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
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bunce Road Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ba58221a878715b6d99912ce63ea63d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 197,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 149,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 85,
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
  