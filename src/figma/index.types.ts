import global from './global.json';
import typography from './typography.json';

export const TokenGlobalColor = {
    primary: global.primary.value,
    secondary: global.secondary.value,
    sementic: global['semantic-import'].value,
    white: global['greyscale-light'].value,
    lgrey: global['greyscale-light-grey'].value,
    black: global['greyscale-dark'].value,
    grey: global['greyscale-dark-grey'].value,
    blossom: global['semantic-import'].value,
} as const;

export const TokenGlobalLineHeight = {
    xxl: global.lineHeights[0].value,
    xl: global.lineHeights[1].value,
    lg: global.lineHeights[2].value,
    md: global.lineHeights[3].value,
    sm: global.lineHeights[4].value,
    xs: global.lineHeights[5].value,
} as const;

export const TokenTypography = {
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    body1: typography.body1,
    body2: typography.body2,
    body3: typography.body3,
} as const;

export const TokenTypographyListType = [
    TokenTypography.h1,
    TokenTypography.h2,
    TokenTypography.h3,
    TokenTypography.body1,
    TokenTypography.body2,
    TokenTypography.body3,
] as const;

const TokenTextarea = {};
