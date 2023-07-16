import { theme } from 'configs/ui.config';

declare module '@emotion/react' {
    export interface Theme {
        palette: typeof theme.palette;
        typo: typeof theme.typo;
        colors: typeof theme.colors;
        shadow: typeof theme.shadow;
        fontSize: typeof theme.fontSize;
        fontWeight: typeof theme.fontWeight;
        lineHeight: typeof theme.lineHeight;
        breakpoint: typeof theme.breakpoint;
        mediaQuery: typeof theme.mediaQuery;
        imgSize: typeof theme.imgSize;
    }
}
