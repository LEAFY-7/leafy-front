import { Theme, css } from '@emotion/react';

const globalStyle = (theme: Theme) => css`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${theme.palette.backgroundColor};
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
            'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
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

export const colors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#050402',
    dark: '#121212',
    gray: '#BEBEBE',
    red: '#A80000',
    tdred_50: '#FAF2F5',
    tdred_100: '#F1D5DF',
    tdred_200: '#ECB3C7',
    tdred_300: '#EB88AC',
    tdred_500: '#A64B6C',
    tdred_600: '#832F4D',
    tdred_700: '#66213A',
    tdred_800: '#54172D',
    tdred_900: '#3C0C1D',
    green: '#6FA545',
    bgreen: '#1B521B',
    vert: '#012010',
    lgreen: '#C9E5AB',
    yellow: '#E3E06B',
    beige: '#FDA381',
    sunset: '#F56237',
    blue: '#3F5E63',
    ivory: '#FFFEFB',
    skyBlue: '#69969C',
};

const breakpoint = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
};

export const theme = {
    palette: {
        default: {
            borderColor: colors.transparent,
            background: colors.white,
            color: colors.black,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
        },
        green: {
            borderColor: colors.transparent,
            background: colors.transparent,
            color: colors.lgreen,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        greenBorder: {
            borderColor: colors.lgreen,
            background: colors.transparent,
            color: colors.lgreen,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        red: {
            borderColor: colors.red,
            background: colors.red,
            color: colors.white,
            focusBorder: colors.red,
            foucsBackground: colors.red,
            focusColor: colors.white,
            hoverBorder: colors.tdred_600,
            hoverBackground: colors.tdred_600,
            hoverColor: colors.white,
            activeBorder: colors.tdred_900,
            activeBackground: colors.tdred_900,
            activeColor: colors.white,
        },
        backgroundColor: colors.white,
    },
    colors,
    fontSize: {
        xxs: '8px',
        xs: '10px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '24px',
        xxxl: '28px',
        xxxxl: '48px',
    },
    lineHeight: {
        xxs: '12px',
        xs: '14px',
        sm: '17px',
        md: '20px',
        lg: '22px',
        xl: '24px',
        xxl: '28px',
        xxxl: '32px',
        xxxxl: '55px',
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

export default { globalStyle, theme, breakpoint, colors };
