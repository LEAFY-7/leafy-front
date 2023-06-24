export const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#050402",
  gray: "#BEBEBE",
  red: "#A80000",
  tdred_50: "#FAF2F5",
  tdred_100: "#F1D5DF",
  tdred_200: "#ECB3C7",
  tdred_300: "#EB88AC",
  tdred_500: "#A64B6C",
  tdred_600: "#832F4D",
  tdred_700: "#66213A",
  tdred_800: "#54172D",
  tdred_900: "#3C0C1D",
  green: "#6FA545",
  bgreen: "#1B521B",
  vert: "#012010",
  lgreen: "#C9E5AB",
  yellow: "#E3E06B",
  beige: "#FDA381",
  sunset: "#F56237",
  blue: "#3F5E63",
  ivory: "#FFFEFB",
  skyBlue: "#69969C",
};

const breakpoint = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1280px",
};

export const theme = {
  palette: {},
  colors,
  fontSize: {
    xxs: "8px",
    xs: "10px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
    xxxxl: "48px",
  },
  lineHeight: {
    xxs: "12px",
    xs: "14px",
    sm: "17px",
    md: "20px",
    lg: "22px",
    xl: "24px",
    xxl: "28px",
    xxxl: "32px",
    xxxxl: "55px",
  },
  fontWeight: {
    bold: 700,
    semiBold: 500,
    regular: 400,
  },
  breakpoint,
  mediaQuery: {
    mobile: `@media only screen and (min-width: ${breakpoint.mobile})`,
    tablet: `@media only screen and (min-width: ${breakpoint.tablet})`,
    desktop: `@media only screen and (min-width: ${breakpoint.desktop})`,
  },
  imgSize: {
    sm: "20px",
    md: "50px",
    lg: "60px",
  },
};

export default theme;
