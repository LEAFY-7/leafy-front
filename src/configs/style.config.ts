import { Theme, css } from '@emotion/react';
import { TokenGlobal, TokenGlobalColorList, TokenGlobalOnlyColor, colorSelector } from 'figma/index.types';

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
    white_50: '#FAFAFA',
    white_100: '#FFFFFF75',
    white_200: '#FAFAFA00',
    white_300: '#FAFAFA00',
    gray_50: '#0000002B',
    gray_100: '#00000029',
    gray_200: '#E6E6E6',
    gray_500: '#707070',
    gray_700: '#859398',

    crimson: '#DF5555',
    black_50: '#050402',
    black_100: '#0E111B',
    black_200: '#050402',
    navy: '#283047',
    navy_50: '#283048',
    navy_100: '#3F3D56',
    purple: '#6C63FF',
    purple_100: '#2F2E41',
    turquoise: '#00927A',
    turquoise_50: '#80D0C7',
    turquoise_300: '#007D8B',
    dark: '#012010',
    bgreen: '#1B521B',
    blue: '#3F5E63',
    ivory: '#FFFEFB',
    skyBlue: '#69969C',
};

export const breakpoint = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
};

export const theme = {
    global: global,
    palette: {},
    colors,
    fontSize: {
        xxs: '8px',
        xs: '10px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '26px',
        xxxl: '36px',
        xxxxl: '48px',
    },
    lineHeight: {
        xxs: '12px',
        xs: '14px',
        sm: '20px',
        md: '22px',
        lg: '22px',
        xl: '22px',
        xxl: '28px',
        xxxl: '40px',
        xxxxl: '53px',
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
        sm: '20px',
        md: '50px',
        lg: '60px',
    },
};
const globalStyle = (theme: Theme) => css`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${theme.palette.global.bgColor};
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
            'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    #root {
        max-width: 1280px;
        margin: 0 auto;
    }
    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        outline: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ol {
        margin: 0;
    }

    input {
        background: none;
        border: none;
        color: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    address {
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        outline: none;
    }

    iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 0;
    }
`;
export default { globalStyle, theme, breakpoint, colors };
