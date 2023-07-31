import { TokenTypography, TokenGlobalLineHeight, TokenGlobalColor } from './figma.config';

export const colors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    primary: TokenGlobalColor.primary,
    secondary: TokenGlobalColor.secondary,
    sementic: TokenGlobalColor.sementic,
    blossom: TokenGlobalColor.blossom,
    white: TokenGlobalColor.white,
    grey: TokenGlobalColor.grey,
    lgrey: TokenGlobalColor.lgrey,
    black: TokenGlobalColor.black,

    lgrey_50: '#ececec',
};

export const fontSize = {
    xxs: '8px',
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '26px',
    xxxl: '36px',
    xxxxl: '48px',
};

export const fontWeight = {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
};

export const breakpoint = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1080px',
};

export const mediaQuery = {
    mobile: `@media only screen and (min-width: ${breakpoint.mobile})`,
    tablet: `@media only screen and (min-width: ${breakpoint.tablet})`,
    desktop: `@media only screen and (min-width: ${breakpoint.desktop})`,
};

export const light = {
    bgColor: colors.transparent,
    linearGradient: `linear-gradient(rgba(0, 0, 0, 0.4) 10%, transparent 100%)`,
    boxShadow: 'none',

    text: {
        primary: colors.primary,
        secondary: colors.secondary,
        sementic: colors.sementic,
        white: colors.white,
        black: colors.black,
        grey: colors.grey,
        blossom: colors.blossom,
        lgrey: colors.lgrey,
    },
    primary: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
    },
    secondary: {
        borderColor: colors.secondary,
        backgroundColor: colors.secondary,
    },
    translucent: {
        borderColor: colors.transparent,
        backgroundColor: 'rgba(245, 245, 245, 0.3)',
    },
    default: {
        borderColor: colors.grey,
        backgroundColor: colors.white,
    },
};
export const dark = {
    bgColor: colors.black,
    linearGradient: `linear-gradient(rgba(255, 255, 255, 0.4) 0%, transparent 100%)`,
    boxShadow: 'inset 0px 0px 5px 5px rgba(255, 255, 255, 0.1)',

    text: {
        primary: colors.white,
        secondary: colors.white,
        sementic: colors.white,
        white: colors.white,
        black: colors.white,
        grey: colors.white,
        blossom: colors.white,
        lgrey: colors.white,
    },
    primary: {
        borderColor: colors.white,
        backgroundColor: colors.white,
    },
    secondary: {
        borderColor: colors.white,
        backgroundColor: colors.white,
    },
    translucent: {
        borderColor: colors.transparent,
        backgroundColor: 'rgba(35, 35, 35, 0.3)',
    },
    default: {
        borderColor: colors.transparent,
        backgroundColor: colors.transparent,
    },
};

export const theme = {
    palette: light,
    typo: TokenTypography,
    colors,
    fontSize,
    lineHeight: TokenGlobalLineHeight,
    fontWeight,
    breakpoint,
    mediaQuery,
    imgSize: {
        sm: '30px',
        md: '40px',
        lg: '60px',
    },
};
export default { theme, light, dark };
