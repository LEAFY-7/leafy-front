import global from 'commons/tokens/global.json';
import typography from 'commons/tokens/typography.json';
import textarea from 'commons/tokens/textarea.json';

export const TokenGlobalColor = {
    primary: global.primary.value,
    secondary: global.secondary.value,
    sementic: global['semantic-import'].value,
    white: global['greyscale-light'].value,
    lgrey: global['greyscale-light-grey'].value,
    black: global['greyscale-dark'].value,
    grey: global['greyscale-dark-grey'].value,
    blossom: global['bg-chat'].value,
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

export const TokenTextarea = {
    helper: textarea['helper-text'],
    common: textarea['comment-text'],
} as const;
