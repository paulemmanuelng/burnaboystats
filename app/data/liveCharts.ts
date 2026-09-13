// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-09-13";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 30,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 3,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 5,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": -6
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 12,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 16,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 23,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 24,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 68,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 6,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 6,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 7,
            "movement": 6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 8,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 6
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 11,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 13,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 15,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": 14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 20,
            "movement": 12
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": 8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 6
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 23,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 23,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": 22
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": 14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 33,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 129
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 45,
            "movement": 12
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 45,
            "movement": 9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 46,
            "movement": 17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 59,
            "movement": 6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 70,
            "movement": 66
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": -38
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 71,
            "movement": 39
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 79,
            "movement": -9
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 81,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 82,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 88,
            "movement": 8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 94,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 102,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 114,
            "movement": 14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": 73
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 20
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 142,
            "movement": -31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 145,
            "movement": -53
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 151,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 155,
            "movement": 42
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": 12
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 187,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 196,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 13
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 10,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 14,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 15,
            "movement": 27
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 18,
            "movement": -9
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 31,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 34,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 35,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 44,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 44,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 48,
            "movement": -42
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 62,
            "movement": -35
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 68,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 93,
            "movement": -62
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 23,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 24,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 32,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 36,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": -8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 39,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 44,
            "movement": 12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 71,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 77,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 84,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
            "movement": -11
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 92,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 113,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 136,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 137,
            "movement": 57
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 138,
            "movement": 25
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 143,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 171,
            "movement": 2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 24,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 26,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 27,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 29,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 47,
            "movement": -28
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": -23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 59,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 69,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 78,
            "movement": -41
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 82,
            "movement": -47
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -57
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 153,
            "movement": -98
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": 29
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 34,
            "movement": 10
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 41,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 41,
            "movement": -29
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 62,
            "movement": -8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 66,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 72,
            "movement": -63
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 87,
            "movement": -30
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 92,
            "movement": -13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 137,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 50,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 56
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 87,
            "movement": -63
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -41
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 147,
            "movement": 47
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 149,
            "movement": 37
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 151,
            "movement": -75
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "position": 55,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 86
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -74
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": -115
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": -31
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 143,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -63
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 187,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 34,
            "movement": 39
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 52,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 57,
            "movement": 99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 20
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": -10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 94,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": 41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 122,
            "movement": -26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 134,
            "movement": -57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": 20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 165,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 181,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 200,
            "movement": -6
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
            "position": 147,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 31
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 115,
            "movement": 59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -111
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 0
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
            "position": 146,
            "movement": -12
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
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 104,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 77
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 79,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 102
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 185,
            "movement": -76
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 185,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -35
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -62
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 186,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -48
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": -49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": -59
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": -41
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 88
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": -42
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": 26
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
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
            "position": 26,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
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
            "position": 176,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 35,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 88
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
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
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 47,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
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
            "position": 155,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -14
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
            "position": 78,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 38,
            "movement": -23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 96,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 71,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Masculine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 121,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pree Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 163,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 5
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  