const breakpoint = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1280px",
};

const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  gray: "#BEBEBE",
  beige: "#FDA381",
  sunset: "#F56237",
  blue: "#3F5E63",
  black: "#050402",
  ivory: "#FFFEFB",
  red: "#A80000",
  skyBlue: "#69969C",
};

export const theme = {
  colors,
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px",
  },
  lineHeight: {
    xs: "12px",
    sm: "14px",
    md: "17px",
    lg: "19px",
    xl: "24px",
    xxl: "29px",
    xxxl: "38px",
  },
  breakpoint,
  mediaQuery: {
    mobile: `@media only screen and (min-width: ${breakpoint.mobile})`,
    tablet: `@media only screen and (min-width: ${breakpoint.tablet})`,
    desktop: `@media only screen and (min-width: ${breakpoint.desktop})`,
  },
};

export default theme;
