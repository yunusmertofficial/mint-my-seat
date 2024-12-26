export const categories = [
  {
    id: 1,
    label: "Music",
    href: "/music",
    dropdown: [
      {
        label: "Rock & Pop",
        dropdown: [
          { label: "Los Lobos", href: "/music/rock-and-pop/los-lobos" },
          { label: "ZZ Top", href: "/music/rock-and-pop/zz-top" },
          {
            label: "Collective Soul",
            href: "/music/rock-and-pop/collective-soul",
          },
        ],
      },
      {
        label: "Country and Folk",
        dropdown: [
          { label: "Mali Velasquez", href: "/music/country/mali-velasquez" },
          { label: "Sierra Hull", href: "/music/country/sierra-hull" },
        ],
      },
      {
        label: "Hip-Hop/Rap",
        dropdown: [
          { label: "Drivin N Cryin", href: "/music/hip-hop/drivin-n-cryin" },
          { label: "Finneas", href: "/music/hip-hop/finneas" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Sports",
    type: "dropdownMegaMenu",
    href: "/sports",
    dropdown: [
      {
        label: "Formula 1 (F1)",
        dropdown: [
          { label: "Formula 1", href: "/sports/formula1/formula-1" },
          {
            label: "Canadian Grand Prix",
            href: "/sports/formula1/canadian-grand-prix",
          },
        ],
      },
      {
        label: "NBA",
        dropdown: [
          {
            label: "Los Angeles Lakers",
            href: "/sports/nba/los-angeles-lakers",
          },
          { label: "Boston Celtics", href: "/sports/nba/boston-celtics" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Shows",
    href: "/shows",
    type: "dropdownMegaMenu",
    dropdown: [
      {
        label: "Comedy",
        dropdown: [
          { label: "Chevy Chase", href: "/shows/comedy/chevy-chase" },
          { label: "Jim Gaffigan", href: "/shows/comedy/jim-gaffigan" },
        ],
      },
      {
        label: "Theatre",
        dropdown: [
          { label: "Sheng Wang", href: "/shows/theatre/sheng-wang" },
          { label: "Marlon Wayans", href: "/shows/theatre/marlon-wayans" },
        ],
      },
    ],
  },
];
