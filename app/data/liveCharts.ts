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
  export const liveChartsUpdated = "2026-11-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-19T07:30Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 11,
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
            "movement": 1
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
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -1
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
            "country": "ES",
            "name": "Spain",
            "position": 4,
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
            "country": "FI",
            "name": "Finland",
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
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
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
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 14,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 22,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 25,
            "movement": -5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 30,
            "movement": -8
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 31,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 36,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 48,
            "movement": -9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 49,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 25,
            "movement": 11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 29,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 29,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 44,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": -6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 45,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 49,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 54,
            "movement": 4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 57,
            "movement": 46
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": 41
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 63,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": 17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": 13
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 68,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 71,
            "movement": -15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 78,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 82,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 83,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 94,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 104,
            "movement": -10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 104,
            "movement": 53
          },
          {
            "country": "FR",
            "name": "France",
            "position": 111,
            "movement": 13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 111,
            "movement": -27
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 114,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 129,
            "movement": 29
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 147,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 179,
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
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 7,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 24,
            "movement": 41
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 25,
            "movement": -13
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 25,
            "movement": 28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 26,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 33,
            "movement": -16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": 44
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 35,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 50
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": 42
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 49,
            "movement": -27
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 54,
            "movement": -22
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 64,
            "movement": -45
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 66,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": -41
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 94,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 50,
            "movement": 6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 65,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 89,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": 10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 111,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 127,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 142,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 153,
            "movement": 19
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 155,
            "movement": 14
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 169,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 171,
            "movement": 19
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 59,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 65,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 71,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 77,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 84,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 85,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 86,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 101,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 103,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 111,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 118,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 122,
            "movement": 15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 124,
            "movement": 15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": -11
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 143,
            "movement": 9
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 171,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 194,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 27,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 78,
            "movement": 23
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 78,
            "movement": -31
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": 41
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 108,
            "movement": 27
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 130,
            "movement": -85
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 198,
            "movement": -32
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
            "position": 68,
            "movement": 11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 115,
            "movement": -56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 126,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 140,
            "movement": -53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": 23
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -100
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 194,
            "movement": -53
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 198,
            "movement": -70
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 55,
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
            "position": 149,
            "movement": 2
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "re"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 97
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 132
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 76,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 58
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 125,
            "movement": -95
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 154,
            "movement": -40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": 18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
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
            "movement": -1
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
            "movement": 0
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -2
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
            "position": 21,
            "movement": 2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 120,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 46
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": 9
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
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
            "position": 30,
            "movement": -3
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 103
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -30
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 150,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
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
            "position": 27,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": 13
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
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
            "position": 78,
            "movement": -10
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
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -72
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -32
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
            "position": 22,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "position": 150,
            "movement": -1
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
            "position": 72,
            "movement": -36
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -61
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 9
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
            "movement": 8
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
            "position": 27,
            "movement": 162
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 78,
            "movement": 83
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 78,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -61
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 161,
            "movement": -49
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 197,
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
            "position": 170,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 40
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
            "position": 31,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 61,
            "movement": 62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -80
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 55,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 51,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 189,
            "movement": -26
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
            "position": 36,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 54,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 71,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 167,
            "movement": -88
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
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
            "country": "BB",
            "name": "Barbados",
            "position": 48,
            "movement": -8
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 28
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
            "position": 151,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 22
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
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
            "position": 73,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -10
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -32
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "re"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "B. D'OR",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -13
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All My Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
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
            "country": "HR",
            "name": "Croatia",
            "position": 102,
            "movement": 3
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
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
            "position": 60,
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 16
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
            "country": "MG",
            "name": "Madagascar",
            "position": 183,
            "movement": -1
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
            "position": 198,
            "movement": -90
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
            "position": 164,
            "movement": 7
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
            "position": 194,
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
  