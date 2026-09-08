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
  export const liveChartsUpdated = "2026-09-08";
  
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
        "numberOnes": 4,
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
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 11,
            "movement": 2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 17,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 21,
            "movement": 131
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 24,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 27,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 30,
            "movement": -12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": -14
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 34,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": -5
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 37,
            "movement": 11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 38,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 41,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 42,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 42,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 45,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 47,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 50,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 60,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 66,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 83,
            "movement": 47
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 92,
            "movement": -26
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 96,
            "movement": -9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 101,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 107,
            "movement": -10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 131,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": 10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 141,
            "movement": 10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 143,
            "movement": 0
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 153,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 164,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 172,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -31
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 186,
            "movement": 7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 194,
            "movement": -53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -49
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -3
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 5,
            "movement": 33
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 6,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": -11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": 7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 26,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -20
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 38,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 45,
            "movement": -25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 48,
            "movement": -27
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 48,
            "movement": 10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 52,
            "movement": 14
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 56,
            "movement": -27
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": -57
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 87,
            "movement": -66
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 93,
            "movement": -86
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 98,
            "movement": -82
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 3,
        "entries": [
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 16,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 17,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 34,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 36,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": -18
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": 5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 53,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 63,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 72,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 87,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 91,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 98,
            "movement": -20
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 102,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 135,
            "movement": -28
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 156,
            "movement": -20
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 157,
            "movement": 4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 160,
            "movement": -15
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 200,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
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
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 86,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 167,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 196,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 15
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": 41
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 15,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 16,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 16,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": 11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 26,
            "movement": -20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 31,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 40,
            "movement": -18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 53,
            "movement": -28
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 73,
            "movement": -44
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 158,
            "movement": -147
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 114,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": 1
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
            "position": 185,
            "movement": -33
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
            "position": 8,
            "movement": 3
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -64
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -117
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -94
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
            "position": 32,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": 20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 158,
            "movement": -65
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 159,
            "movement": -61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -105
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": 134
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 100,
            "movement": 87
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -15
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -54
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
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
            "position": 142,
            "movement": 2
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 61,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": -21
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 194,
            "movement": -84
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -5
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 69
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 93
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -63
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -99
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -25
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": -66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": -83
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 115,
            "movement": -72
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 64,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": 40
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": -13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 79,
            "movement": 86
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": 25
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 124,
            "movement": 13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -48
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
            "position": 126,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song"
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -15
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 56,
            "movement": 20
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 106,
            "movement": -41
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 127,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 186,
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 54,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 9
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
            "position": 25,
            "movement": 10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": 3
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
            "position": 16,
            "movement": 182
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 74,
            "movement": -28
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 12
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
            "position": 51,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": -97
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
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 100,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": -94
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
            "position": 61,
            "movement": -47
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 143,
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
            "position": 113,
            "movement": 50
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 45
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": -94
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 89,
            "movement": -1
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
            "position": 182,
            "movement": -6
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
            "position": 98,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 5
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
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -3
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
            "country": "SN",
            "name": "Senegal",
            "position": 96,
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
            "position": 196,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 10
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
            "position": 49,
            "movement": -27
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
            "position": 95,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 13
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
            "position": 123,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
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
            "movement": 1
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
            "position": 130,
            "movement": -5
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
            "position": 74,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": null,
            "status": "new"
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
            "position": 127,
            "movement": -11
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
            "position": 104,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Monsters You Made",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 31,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": 31
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -10
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
            "position": 98,
            "movement": -3
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
            "position": 135,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Big 7",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 100,
            "movement": -18
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
            "position": 67,
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
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -37
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
            "position": 144,
            "movement": -3
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
            "position": 171,
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
  