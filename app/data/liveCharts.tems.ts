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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:49Z";
  
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
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 17,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": 17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": -2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 20,
            "movement": 6
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": -6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 26,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": -11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 30,
            "movement": 7
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 33,
            "movement": 7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 35,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 37,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 39,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 41,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 44,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 46,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 48,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": -31
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 51,
            "movement": -22
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 51,
            "movement": -10
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 58,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 61,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 62,
            "movement": -6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 73,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 73,
            "movement": 5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 74,
            "movement": 77
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 76,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 82,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 97,
            "movement": 39
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": 43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": -14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 109,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 111,
            "movement": 44
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 114,
            "movement": -16
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 115,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 124,
            "movement": 6
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 125,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 128,
            "movement": -52
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 130,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 134,
            "movement": -18
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 135,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 136,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 144,
            "movement": -46
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 145,
            "movement": -70
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 155,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 165,
            "movement": -60
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 167,
            "movement": -109
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 171,
            "movement": -53
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 172,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 183,
            "movement": -67
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 196,
            "movement": -87
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 196,
            "movement": -19
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
            "country": "CL",
            "name": "Chile",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 27,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 28,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 32,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 34,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 38,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 39,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 46,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -3
          },
          {
            "country": "CN",
            "name": "China",
            "position": 48,
            "movement": -3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": -8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 66,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 72,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 77,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 84,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 87,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 89,
            "movement": -12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 92,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 94,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": -28
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 135,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -23
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 178,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 195,
            "movement": 0
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 35,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 49,
            "movement": 17
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 52,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 54,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 74,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": -10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 75,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 95,
            "movement": -30
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 98,
            "movement": -24
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 99,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 103,
            "movement": -23
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 103,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 106,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 122,
            "movement": -54
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 125,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 138,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 160,
            "movement": -14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 167,
            "movement": -23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 187,
            "movement": -40
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 5,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 15,
            "movement": 10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 19,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": -10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 29,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 46,
            "movement": -26
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 50,
            "movement": -13
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 66,
            "movement": -11
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 91,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 124,
            "movement": 13
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 191,
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 14,
            "movement": 0
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 4
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
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": -23
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 88,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 30,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 48,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 80,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 93,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 96,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 109,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 129,
            "movement": 33
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 152,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 4
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
            "position": 29,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 58,
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
    "title": "WAIT FOR U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 11,
            "movement": 17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 36,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 53,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 64,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 98,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": -22
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 113,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 118,
            "movement": 24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 127,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -39
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 153,
            "movement": 38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": -23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 170,
            "movement": -28
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 186,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 194,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -10
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 110,
            "movement": 29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 114,
            "movement": -13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 151,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 54,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": -11
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 80,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -17
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
            "position": 71,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": -27
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 120,
            "movement": -33
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 128,
            "movement": -31
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 177,
            "movement": -50
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 189,
            "movement": -40
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
            "position": 197,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -137
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
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
            "position": 86,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -41
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -67
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 189,
            "movement": -69
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
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
            "position": 140,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 62,
            "movement": 61
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 72,
            "movement": 11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 111,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
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
            "position": 45,
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
            "position": 13,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 125,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 175,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -113
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
            "position": 172,
            "movement": null,
            "status": "new"
          },
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SN",
            "name": "Senegal",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -43
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -12
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
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 189,
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
    "title": "Live Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0971ad6a3336214c0c05c92448b2af65/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 96,
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
    "title": "Replay",
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Daddy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
  