import theme from "../styles/theme";

declare module "@emotion/react" {
  export interface Theme {
    palette: { [key in string]: any };
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
    fontWeight: typeof theme.fontWeight;
    lineHeight: typeof theme.lineHeight;
    breakpoint: typeof theme.breakpoint;
    mediaQuery: typeof theme.mediaQuery;
    imgSize: typeof theme.imgSize;
  }
}
