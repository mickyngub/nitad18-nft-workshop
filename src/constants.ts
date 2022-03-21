const BREAKPOINTS = {
  tablet: 600,
  laptop: 950,
  desktop: 1300,
};

export const QUERIES = {
  tabletAndBigger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  desktopAndBigger: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};

export const COLORS = {
  purple: "hsl(260deg 30% 37%)",
  slateBlue: "hsl(236deg 35% 54%)",
  turqoise: "hsl(184deg 60% 50%)",
  green: "hsl(160deg 64% 53%)",
  red: "hsl(1deg 60% 40%)",
  black: "hsl(0deg 100% 0%)",
  blackSmoky: "hsl(84deg 14% 7%)",
  white: "hsl(0deg 0% 100%)",
  gray: "hsl(0deg 0% 51%)",
};
