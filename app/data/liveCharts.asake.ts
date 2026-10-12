// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-12T15:32Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 5,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 14,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 15,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 19,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 36
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 27,
            "movement": -24
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 52,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 30
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": 53
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 100,
            "movement": 7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 151,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 154,
            "movement": -87
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 154,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 167,
            "movement": -68
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 185,
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
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 64,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
            "movement": 2
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
            "position": 49,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
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
            "position": 9,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -11
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -24
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 114,
            "movement": -34
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 140,
            "movement": -32
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 153,
            "movement": -49
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 172,
            "movement": -45
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
            "position": 4,
            "movement": 1
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
            "position": 10,
            "movement": 66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 51,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": 78
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 180,
            "movement": -120
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 191,
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
            "position": 24,
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
            "position": 37,
            "movement": -29
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
            "position": 7,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 51
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -38
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": -79
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 199,
            "movement": -72
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -20
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 163,
            "movement": -79
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -99
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -79
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 48
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": -112
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 192,
            "movement": -18
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
            "position": 47,
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
            "position": 37,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 45
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
            "movement": -17
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": -79
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": 8
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
            "position": 148,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 56
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -91
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": -77
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
            "position": 9,
            "movement": -2
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
            "position": 72,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 121
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
            "position": 102,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -19
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
            "position": 33,
            "movement": 1
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
            "position": 121,
            "movement": -99
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
            "position": 16,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 58,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -38
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 114,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -8
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
            "position": 107,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -35
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "position": 27,
            "movement": 2
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
            "position": 124,
            "movement": -3
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
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": 5
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
            "position": 61,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -44
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -31
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
            "position": 97,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -14
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
            "position": 59,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
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
            "position": 35,
            "movement": 0
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
            "position": 76,
            "movement": -69
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
            "position": 169,
            "movement": -17
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
            "position": 26,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 75
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
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
            "position": 135,
            "movement": 6
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
            "position": 168,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": -169
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
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
            "position": 109,
            "movement": 12
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
            "position": 62,
            "movement": 0
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
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
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
            "position": 110,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -68
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
            "position": 50,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": -116
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -15
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
            "position": 63,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "position": 96,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -72
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
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -10
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
            "position": 52,
            "movement": -1
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
            "position": 130,
            "movement": -1
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
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -113
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -3
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
            "position": 139,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
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
            "position": 194,
            "movement": 5
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
            "position": 89,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -3
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
            "position": 183,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -8
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
            "position": 123,
            "movement": 6
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
            "position": 59,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
            "position": 94,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": 88
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 4
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -5
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
            "position": 147,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
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
            "country": "NE",
            "name": "Niger",
            "position": 175,
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
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -6
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
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 15
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
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
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
            "position": 141,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 4
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Suru",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yoga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goodbye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uhh Yeahh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mogbe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
  