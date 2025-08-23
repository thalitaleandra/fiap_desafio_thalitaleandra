export const breakpoints = {
  mobileSmall: "20rem",
  mobileMedium: "22.5rem",
  mobileLarge: "25.875rem",
  mobileXLarge: "28rem",

  tabletSmall: "48rem",
  tabletMedium: "51.25rem",
  tabletLarge: "64rem",
  tabletXLarge: "68rem",

  desktopSmall: "80rem",
  desktopMedium: "85.375rem",
  desktopLarge: "90rem",
  desktopXLarge: "100rem",

  desktopFHD: "120rem",
  desktop2K: "160rem",
  desktop4K: "240rem",
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const below = (size: string) => `(max-width: ${size})`;
export const above = (size: string) => `(min-width: ${size})`;

export const mediaQueries = {
  mobile: below("mobileLarge"),
  tablet: `(min-width: ${breakpoints.tabletSmall}) and (max-width: calc(${breakpoints.desktopSmall} - 0.0625rem))`,
  desktop: above("desktopSmall"),

  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",

  mobilePortrait: `${below("mobileLarge")} and (orientation: portrait)`,
  mobileLandscape: `${below("mobileLarge")} and (orientation: landscape)`,
  tabletPortrait: `(min-width: ${breakpoints.tabletSmall}) and (max-width: calc(${breakpoints.desktopSmall} - 0.0625rem)) and (orientation: portrait)`,
  tabletLandscape: `(min-width: ${breakpoints.tabletSmall}) and (max-width: calc(${breakpoints.desktopSmall} - 0.0625rem)) and (orientation: landscape)`,
} as const;

export type MediaQuery = typeof mediaQueries;