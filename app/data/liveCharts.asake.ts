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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": 31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 53,
            "movement": 19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 54,
            "movement": 27
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 59,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 80,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 120,
            "movement": -94
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 127,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 145,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 173,
            "movement": -4
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
            "movement": -1
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 19,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": -23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -125
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 91,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -15
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
            "position": 7,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
            "movement": 37
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
            "position": 11,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 33,
            "movement": 66
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": -19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 194,
            "movement": -119
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 194,
            "movement": -62
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
            "movement": 2
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
            "position": 19,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": -15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": 23
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
            "movement": -87
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 194,
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
            "position": 20,
            "movement": 2
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
            "position": 8,
            "movement": 4
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
            "position": 6,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": -18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -35
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
            "position": 35,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -5
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
            "position": 41,
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
            "position": 138,
            "movement": -117
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
            "position": 31,
            "movement": 18
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
            "position": 38,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -42
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": -43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
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
            "position": 122,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -23
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -69
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 154,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
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
            "position": 13,
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
            "position": 72,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -22
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
            "position": 23,
            "movement": 0
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
            "position": 63,
            "movement": -12
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
            "position": 14,
            "movement": -4
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
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 44,
            "movement": 54
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 102,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
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
            "position": 80,
            "movement": 2
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
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -23
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
            "position": 39,
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
            "position": 41,
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
            "position": 90,
            "movement": -7
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
            "position": 67,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 64
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 32
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -41
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
            "position": 88,
            "movement": 1
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
            "position": 84,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 55
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 120,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": 4
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
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 74
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 23
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -74
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
            "position": 51,
            "movement": 4
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
            "position": 62,
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 6,
            "movement": 142
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 53,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 6
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
            "position": 36,
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
            "position": 118,
            "movement": 18
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
            "position": 31,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -2
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
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
            "position": 83,
            "movement": 4
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
            "position": 80,
            "movement": 4
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
            "position": 80,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -10
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 1
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
            "position": 82,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -41
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
            "movement": 0
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
            "position": 101,
            "movement": 3
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
            "position": 22,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
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
            "position": 98,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": 6
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
            "position": 131,
            "movement": 7
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
            "position": 168,
            "movement": 29
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
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
            "position": 140,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": 11
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
            "movement": 3
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
            "position": 137,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -18
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": -99
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
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
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": -1
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
            "position": 73,
            "movement": -6
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
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
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
            "position": 193,
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
            "position": 37,
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": -11
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
            "position": 145,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
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
            "position": 72,
            "movement": -1
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
            "position": 89,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -29
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 2
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
            "position": 92,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 1
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
            "position": 131,
            "movement": -1
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
            "position": 100,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
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
            "position": 149,
            "movement": 17
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
            "position": 137,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 186,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
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
    "title": "BADMAN GANGSTA (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
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
            "position": 5,
            "movement": -3
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  