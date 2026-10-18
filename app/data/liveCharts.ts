// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs from kworb's artist page.
  //
  // PLATFORM chart data for Burna Boy: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T07:14Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "country": "DK",
            "name": "Denmark",
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
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 10,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": -4
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 14,
            "movement": -5
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 68,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 9,
            "movement": 22
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 11,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 11,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": 6
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 14,
            "movement": 33
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 24,
            "movement": 11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": 51
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 31,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 32,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 33,
            "movement": 21
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 34,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 37,
            "movement": 28
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 42,
            "movement": 20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 47,
            "movement": 21
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": 7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 56,
            "movement": 20
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 59,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": 30
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 64,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 72,
            "movement": 20
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 74,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 85,
            "movement": 69
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 87,
            "movement": 60
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 88,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 88,
            "movement": 31
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 91,
            "movement": 18
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 115,
            "movement": 47
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 118,
            "movement": 47
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 119,
            "movement": -13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 121,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 122,
            "movement": 40
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 139,
            "movement": 8
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 146,
            "movement": 49
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": -39
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 198,
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
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 24
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 12,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 12,
            "movement": 8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 25,
            "movement": -13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -18
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 38,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 42,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 43,
            "movement": -25
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 25
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 48,
            "movement": -31
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": -33
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 60,
            "movement": -26
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 65,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 67,
            "movement": -55
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 68,
            "movement": 29
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 72,
            "movement": -39
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 79,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 81,
            "movement": -34
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
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
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 8,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 36,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 46,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 68,
            "movement": 15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 69,
            "movement": -16
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 71,
            "movement": -9
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 83,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 85,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 87,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 89,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 94,
            "movement": -17
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 95,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 99,
            "movement": -24
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 108,
            "movement": -5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 126,
            "movement": -15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 138,
            "movement": -10
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 152,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 175,
            "movement": 18
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 22
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 8,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 10,
            "movement": 6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 21,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 33,
            "movement": 13
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": 90
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 48,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": 32
          },
          {
            "country": "US",
            "name": "United States",
            "position": 142,
            "movement": 25
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -133
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 37,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 47,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 49,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 53,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 55,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 63,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 70,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 75,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 79,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 87,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 93,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 103,
            "movement": -13
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 104,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 108,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 118,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 132,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 138,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 178,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 22
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 41
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 80,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": -46
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 120,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -85
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 157,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 184,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 190,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 23,
            "movement": 3
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
            "position": 60,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": 18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": 75
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 31
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 187,
            "movement": -66
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
            "position": 49,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 6
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
            "position": 27,
            "movement": 1
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": -87
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
            "movement": -129
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "position": 31,
            "movement": -4
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
            "position": 25,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": 14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 120,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": 3
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
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
            "position": 196,
            "movement": -41
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "position": 44,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 83,
            "movement": 96
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
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
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -128
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
            "position": 180,
            "movement": -40
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
            "position": 61,
            "movement": 22
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 98,
            "movement": 55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 54
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -42
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 141,
            "movement": -13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": -19
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
            "movement": -46
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
            "position": 177,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -65
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
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": -73
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": -15
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
            "position": 30,
            "movement": 1
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": -42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -76
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -3
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
            "position": 22,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": 53
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
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": -15
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": 33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 139,
            "movement": 28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 150,
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 0
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
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 191,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 48,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 28,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
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
            "position": 111,
            "movement": 32
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
            "name": "Eswatini",
            "position": 35,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 2
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
            "position": 63,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -67
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 13
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
            "position": 99,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 147,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
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
            "position": 11,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -17
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
            "position": 85,
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 78,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
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
            "position": 150,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": 25
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
            "position": 192,
            "movement": -9
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
            "country": "SR",
            "name": "Suriname",
            "position": 156,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
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
            "position": 138,
            "movement": 6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 134,
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
            "position": 173,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
            "movement": 2
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
            "position": 39,
            "movement": 4
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
            "position": 124,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Therapy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wonderful",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -37
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
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Level Up",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "No Panic",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 145,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 66,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
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
  