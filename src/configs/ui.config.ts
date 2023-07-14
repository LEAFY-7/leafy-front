import {
    TokenGlobal,
    TokenGlobalColorList,
    TokenGlobalOnlyColor,
    colorSelector,
    TokenGlobalBoxShadowList,
    TokenTypography,
} from 'figma/index.types';

const { green, lgreen, grey, white, black, red, yellow, blossom }: TokenGlobalOnlyColor = TokenGlobal;
const primary = colorSelector('primary', TokenGlobalColorList);
const secondary = colorSelector('secondary', TokenGlobalColorList);

export const colors = {
    primary: primary,
    secondary: secondary,
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    green: green.value,
    lgreen: lgreen.value,
    white: white.value,
    grey: grey.value,
    black: black.value,
    red: red.value,
    yellow: yellow.value,
    blossom: blossom.value,
};

export const shadow = {
    sm: TokenGlobalBoxShadowList.sm,
    lg: TokenGlobalBoxShadowList.lg,
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
export const lineHeight = {
    xxs: '12px',
    xs: '14px',
    sm: '20px',
    md: '22px',
    lg: '22px',
    xl: '22px',
    xxl: '28px',
    xxxl: '40px',
    xxxxl: '53px',
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
    desktop: '1280px',
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
        primary: colors.green,
        secondary: colors.lgreen,
        white: colors.white,
        black: colors.black,
        grey: colors.grey,
        green: colors.green,
        lgreen: colors.lgreen,
        red: colors.red,
        yellow: colors.yellow,
        blossom: colors.blossom,
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
        backgroundColor: colors.transparent,
    },
};
export const dark = {
    bgColor: colors.black,
    linearGradient: `linear-gradient(rgba(255, 255, 255, 0.4) 0%, transparent 100%)`,
    boxShadow: 'inset 0px 0px 5px 5px rgba(255, 255, 255, 0.1)',

    text: {
        white: colors.black,
        black: colors.white,
        primary: colors.white,
        secondary: colors.white,
        grey: colors.white,
        green: colors.white,
        lgreen: colors.white,
        red: colors.white,
        yellow: colors.white,
        blossom: colors.white,
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
    lineHeight,
    fontWeight,
    breakpoint,
    mediaQuery,
    shadow,
    imgSize: {
        sm: '20px',
        md: '50px',
        lg: '60px',
    },
};
export default { theme, light, dark };
