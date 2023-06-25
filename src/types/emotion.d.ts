import stylesConfig from "@configs/style.config";

declare module "@emotion/react" {
  export interface Theme {
    palette: { [key in string]: any };
    colors: typeof stylesConfig.theme.colors;
    fontSize: typeof stylesConfig.theme.fontSize;
    fontWeight: typeof stylesConfig.theme.fontWeight;
    lineHeight: typeof stylesConfig.theme.lineHeight;
    breakpoint: typeof stylesConfig.theme.breakpoint;
    mediaQuery: typeof stylesConfig.theme.mediaQuery;
    imgSize: typeof stylesConfig.theme.imgSize;
  }
}
