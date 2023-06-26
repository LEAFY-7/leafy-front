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
    green: '#6FA545',
    bgreen: '#1B521B',
    vert: '#012010',
    lgreen: '#C9E5AB',
    yellow: '#E3E06B',
    beige: '#FDA381',
    sunset: '#F56237',
    red: '#A80000',
    blue: '#3F5E63',
    ivory: '#FFFEFB',
    skyBlue: '#69969C',
    gray: '#BEBEBE',
    gray_50: '#f9fafb',
    gray_100: '#f3f4f6',
    gray_200: '#e5e7eb',
    gray_300: '#d1d5db',
    gray_400: '#9ca3af',
    gray_500: '#6b7280',
    gray_600: '#4b5563',
    gray_700: '#374151',
    gray_800: '#1f2937',
    gray_900: '#111827',
    tdred_50: '#FAF2F5',
    tdred_100: '#F1D5DF',
    tdred_200: '#ECB3C7',
    tdred_300: '#EB88AC',
    tdred_500: '#A64B6C',
    tdred_600: '#832F4D',
    tdred_700: '#66213A',
    tdred_800: '#54172D',
    tdred_900: '#3C0C1D',
    vigreen_50: '#ECFFF6',
    vigreen_100: '#CEFFE8',
    vigreen_200: '#B0FAD6',
    vigreen_300: '#72F5B6',
    vigreen_400: '#26EA8C',
    vigreen_500: '#13C173',
    vigreen_600: '#0C9256',
    vigreen_700: '#096A3F',
    vigreen_800: '#055A34',
    vigreen_900: '#044326',
    tdgreen_50: '#EAF6F1',
    tdgreen_100: '#D2F9E6',
    tdgreen_200: '#BEF4DA',
    tdgreen_300: '#8AEABC',
    tdgreen_400: '#65C898',
    tdgreen_500: '#4F9674',
    tdgreen_600: '#367657',
    tdgreen_700: '#20583B',
    tdgreen_800: '#194B32',
    tdgreen_900: '#0E311F',
};

export const breakpoint = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
};

export const theme = {
    palette: {},
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
