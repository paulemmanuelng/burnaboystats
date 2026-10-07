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
  export const liveChartsUpdated = "2026-10-07";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-07T06:05Z";
  
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
            "position": 6,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 13,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 15,
            "movement": 4
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
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 19,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 25,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 26,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 28,
            "movement": 9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 29,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 30,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 33,
            "movement": 27
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 9
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 40,
            "movement": 10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": -22
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 46,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 47,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 51,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 53,
            "movement": -25
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 53,
            "movement": 8
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 53,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 54,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 56,
            "movement": 34
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 19
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 63,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 21
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 69,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 69,
            "movement": 57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 76,
            "movement": 26
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -20
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 82,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": 29
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 90,
            "movement": -54
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 91,
            "movement": 2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 94,
            "movement": 31
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 97,
            "movement": 14
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 97,
            "movement": -20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 99,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": 79
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 121,
            "movement": -89
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": -58
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 128,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": -26
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 133,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 147,
            "movement": -59
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 155,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 156,
            "movement": -8
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 156,
            "movement": -69
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 161,
            "movement": 18
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 164,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": -27
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 180,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 182,
            "movement": -37
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 8,
            "movement": 5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": 11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 13,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 24,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 25,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 32,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 34,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 36,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 43,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 45,
            "movement": 0
          },
          {
            "country": "IN",
            "name": "India",
            "position": 48,
            "movement": 3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 53,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 55,
            "movement": 15
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 55,
            "movement": 3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 56,
            "movement": 7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 59,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 60,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 62,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 64,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 65,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 84,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 86,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 7
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 111,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 19
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 195,
            "movement": -7
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
            "movement": 0
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": 18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 38,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 40,
            "movement": 12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 42,
            "movement": 11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 43,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 49,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 54,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": 12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 59,
            "movement": 9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 61,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": 13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 75,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 78,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 87,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 94,
            "movement": 23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 94,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 116,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 143,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 150,
            "movement": 26
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 169,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 189,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 53
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": 32
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -15
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 25,
            "movement": -17
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 26,
            "movement": -13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 27,
            "movement": -19
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 97,
            "movement": -33
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 162,
            "movement": -55
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 171,
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
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -49
          },
          {
            "country": "PH",
            "name": "Philippines",
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 39,
            "movement": 12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 41,
            "movement": 35
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 48,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 55,
            "movement": 18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 61,
            "movement": 10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 14
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 94,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 99,
            "movement": -9
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 105,
            "movement": 77
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 126,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 138,
            "movement": -18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": -80
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 182,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 4
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
            "position": 198,
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
            "country": "MA",
            "name": "Morocco",
            "position": 58,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 60,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 89,
            "movement": 17
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 93,
            "movement": 5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 99,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 181,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 182,
            "movement": 3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": 84
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 115,
            "movement": -55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": -23
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": -14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
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
            "position": 12,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 22,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -5
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 45,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -23
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
            "position": 138,
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
            "position": 3,
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
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 39,
            "movement": 29
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 29
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 71,
            "movement": 56
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 73,
            "movement": 63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 85
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 90,
            "movement": 82
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": 49
          },
          {
            "country": "FR",
            "name": "France",
            "position": 99,
            "movement": 47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": 66
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "UG",
            "name": "Uganda",
            "position": 4,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 25,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 65
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 124,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 151,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 198,
            "movement": -13
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": 81
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 38
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 45
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 186,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 30,
            "movement": 38
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 31,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 129,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 134,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 182,
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
            "position": 41,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": 62
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 176,
            "movement": -24
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
            "position": 57,
            "movement": -20
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "position": 184,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
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
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -6
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
            "position": 94,
            "movement": 38
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
            "position": 114,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "movement": -1
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
  