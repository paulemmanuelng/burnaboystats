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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T12:41Z";
  
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
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 11,
            "movement": 8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 15,
            "movement": 27
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 12
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 24,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 26,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 26,
            "movement": 30
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 28,
            "movement": 4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": 4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 29,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 30,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 31,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 31,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": 4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 35,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 38,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 43,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 47,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 49,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 6
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 55,
            "movement": -26
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 56,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 59,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": -31
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": 16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 66,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 67,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 69,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 70,
            "movement": -37
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 71,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 72,
            "movement": -59
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 73,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 76,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 80,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 80,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 80,
            "movement": -27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 82,
            "movement": 65
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": -74
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 101,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 101,
            "movement": 19
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 105,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 111,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 114,
            "movement": 19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 115,
            "movement": -9
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 118,
            "movement": 11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 118,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 119,
            "movement": 13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 120,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 128,
            "movement": -47
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 130,
            "movement": 20
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 133,
            "movement": -84
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 133,
            "movement": -86
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 134,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 4
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 154,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 155,
            "movement": 20
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 160,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 161,
            "movement": 19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 165,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 183,
            "movement": 2
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 197,
            "movement": -62
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
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 11,
            "movement": 5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 15,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 15,
            "movement": 8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 16,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 20,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 27,
            "movement": 6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 28,
            "movement": 7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 28,
            "movement": 7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 31,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 32,
            "movement": 5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 32,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 32,
            "movement": 7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 33,
            "movement": 9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 36,
            "movement": 9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 37,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": 8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 38,
            "movement": 12
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 40,
            "movement": 23
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 41,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 42,
            "movement": 18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 48,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 52,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 53,
            "movement": 13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 54,
            "movement": 5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 56,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": 17
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 59,
            "movement": 20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 63,
            "movement": 15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": 18
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 71,
            "movement": 25
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": 14
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 78,
            "movement": 43
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 83,
            "movement": 9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 84,
            "movement": 23
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 85,
            "movement": 20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 86,
            "movement": 23
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 87,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 94,
            "movement": 47
          },
          {
            "country": "CN",
            "name": "China",
            "position": 96,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 97,
            "movement": 22
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 104,
            "movement": 23
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 118,
            "movement": 38
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 126,
            "movement": 49
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 129,
            "movement": 34
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 133,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 175,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 57,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 57,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 58,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 59,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 65,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 69,
            "movement": -1
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
            "position": 70,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 73,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": 19
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 98,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 111,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 121,
            "movement": 18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 128,
            "movement": -12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": -16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 184,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 192,
            "movement": 2
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
        "numberOnes": 3,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 1,
            "movement": 6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
            "movement": 46
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 37,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": -35
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 122,
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
            "country": "JP",
            "name": "Japan",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 73,
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
            "position": 15,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 24,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 18
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 27,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 38,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 43,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 19
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 49,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -20
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 52,
            "movement": 14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": 77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 81,
            "movement": 35
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 82,
            "movement": -52
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 89,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 102,
            "movement": -28
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 43
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 131,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 157,
            "movement": 25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 159,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 163,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -58
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 166,
            "movement": -74
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -18
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 171,
            "movement": -43
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 172,
            "movement": 11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 191,
            "movement": -120
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 200,
            "movement": -111
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 46,
            "movement": 30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 100,
            "movement": 9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 104,
            "movement": -42
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 123,
            "movement": 22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 176,
            "movement": -59
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 199,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 41,
            "movement": -3
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
            "movement": -2
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 74,
            "movement": 14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 98,
            "movement": 49
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 164,
            "movement": -15
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 194,
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
            "position": 93,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 128,
            "movement": -33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
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
            "country": "KH",
            "name": "Cambodia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -30
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
            "position": 132,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 109,
            "movement": 73
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -131
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
            "position": 28,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -42
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
            "position": 178,
            "movement": -16
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
            "position": 81,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": -50
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "SR",
            "name": "Suriname",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 130,
            "movement": 41
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": -92
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 156,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 27
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 145,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 159,
            "movement": -34
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
            "position": 149,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 108,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Crazy Tings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e59ce9bff06c58a3016b13aa83baac0/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 85,
            "movement": 0
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
  