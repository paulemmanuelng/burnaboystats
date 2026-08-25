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
  export const liveChartsUpdated = "2026-08-25";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 43,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 0
          },
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
            "country": "BH",
            "name": "Bahrain",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
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
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "country": "MV",
            "name": "Maldives",
            "position": 1,
            "movement": 0
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
            "country": "NI",
            "name": "Nicaragua",
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
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
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
            "country": "RE",
            "name": "Réunion",
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
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
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
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 4,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 6,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 12,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 14,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -3
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 43,
            "movement": -15
          },
          {
            "country": "IN",
            "name": "India",
            "position": 64,
            "movement": -24
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 7,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 2,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 7,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 10,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 19,
            "movement": 5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 19,
            "movement": 4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 26,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": -7
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 30,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": -6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 39,
            "movement": -7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": -12
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 48,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 51,
            "movement": 47
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 61,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 62,
            "movement": -52
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 65,
            "movement": -1
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 81,
            "movement": 4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 85,
            "movement": -69
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 89,
            "movement": -74
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": -22
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 89,
            "movement": -41
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": -41
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 93,
            "movement": -15
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 94,
            "movement": -11
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 98,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": -9
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 103,
            "movement": 62
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 103,
            "movement": -22
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 124,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 20
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 126,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -62
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 153,
            "movement": 18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 159,
            "movement": 25
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 178,
            "movement": -142
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
            "movement": -87
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 185,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 195,
            "movement": -148
          },
          {
            "country": "IN",
            "name": "India",
            "position": 195,
            "movement": -39
          },
          {
            "country": "US",
            "name": "United States",
            "position": 197,
            "movement": -39
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 4,
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
            "country": "NL",
            "name": "Netherlands",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 5,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 10,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 21,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 23,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 34,
            "movement": -3
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 36,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 41,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 56,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 58,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 62,
            "movement": -12
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 65,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 67,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 81,
            "movement": -12
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 83,
            "movement": 5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 97,
            "movement": 18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 110,
            "movement": -21
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 129,
            "movement": -15
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 135,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 138,
            "movement": -6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 141,
            "movement": 5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 148,
            "movement": -13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 161,
            "movement": -10
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 166,
            "movement": 3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 172,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": -53
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 191,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 6,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 1,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
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
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 15,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 16,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": 8
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 26,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 27,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -14
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": -35
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 49,
            "movement": -34
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -76
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 96,
            "movement": -74
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 23,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 35,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 47,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 61,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 64,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 97,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 117,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 120,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 125,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 136,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 147,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 161,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 173,
            "movement": -17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 3,
        "entries": [
          {
            "country": "FR",
            "name": "France",
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
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 16,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": -16
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 62,
            "movement": -43
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 63,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -15
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 73,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 78,
            "movement": -41
          },
          {
            "country": "IN",
            "name": "India",
            "position": 82,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 87,
            "movement": -84
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 109,
            "movement": 72
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 153,
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
            "country": "MG",
            "name": "Madagascar",
            "position": 19,
            "movement": 77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 92
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": 71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 102,
            "movement": -65
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": 12
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": 65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 129,
            "movement": -38
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 131,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": -22
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 166,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -60
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 178,
            "movement": -93
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 180,
            "movement": -142
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 184,
            "movement": -31
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 185,
            "movement": -30
          },
          {
            "country": "BW",
            "name": "Botswana",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 58,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 116,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 80
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
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
            "position": 192,
            "movement": -7
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
            "position": 84,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 75,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": 21
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": 75
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 98,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 143,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 165,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -20
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
            "position": 134,
            "movement": 13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 11,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 104
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 47
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 84,
            "movement": 61
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 164,
            "movement": -81
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -69
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 174,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": -9
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 180,
            "movement": -55
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 18,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 52,
            "movement": 45
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": -33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 115
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": -44
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -27
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 140
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": 10
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
            "position": 12,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 0
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
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": -104
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": 160
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 143
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": 21
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 88,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 100,
            "movement": -57
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
            "movement": -107
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": -39
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -130
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -50
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 182,
            "movement": null,
            "status": "new"
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
            "position": 50,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 173,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -4
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
            "position": 30,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
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
            "position": 43,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
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
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 106,
            "movement": 13
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
            "position": 117,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
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
            "position": 74,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 23
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
            "position": 107,
            "movement": -9
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
            "position": 189,
            "movement": 8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 31
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
            "position": 68,
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
            "position": 140,
            "movement": -3
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
            "position": 83,
            "movement": -19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 131,
            "movement": null,
            "status": "new"
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "re"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 32,
            "movement": -9
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
            "position": 72,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
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
            "position": 68,
            "movement": -1
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
    "title": "Comment Tu T'appelle",
    "platforms": [
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
            "position": 154,
            "movement": -35
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
            "position": 65,
            "movement": -4
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
            "position": 165,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Like to Party",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -131
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -132
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rizzla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -131
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -130
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Won da Mo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -131
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jahs Love is True",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -132
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
            "position": 30,
            "movement": -9
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
            "position": 200,
            "movement": null,
            "status": "new"
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
  