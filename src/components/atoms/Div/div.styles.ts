import { Theme, css } from '@emotion/react';

export const variantStyles = {
    default: (theme: Theme) => css`
        background-color: ${theme.palette.default.backgroundColor};
        color: ${theme.palette.text.blackColor};
    `,
    primary: (theme: Theme) => css`
        background-color: ${theme.palette.primary.backgroundColor};
        color: ${theme.palette.text.whiteColor};
    `,
    secondary: (theme: Theme) => css`
        background-color: ${theme.palette.secondary.background};
        color: ${theme.palette.text.whiteColor};
    `,
    translucent: (theme: Theme) => css`
        background: ${theme.palette.translucent.backgroundColor};
        box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15), inset 5px 5px 10px rgba(250, 250, 250, 0.15);
        backdrop-filter: blur(15px);
        color: ${theme.palette.text.blackColor};
    `,
};

export const divSizeBox = {
    default: {
        width: 'none',
        height: 'none',
        minWidth: 'inherit',
        minHeight: 'inherit',
        padding: 0,
        radius: 0.8,
        borderWidth: 1,
    },
    xs: {
        width: 60,
        height: 60,
        minWidth: 30,
        minHeight: 30,
        padding: 1,
        radius: 0.4,
        borderWidth: 1,
    },
    sm: {
        width: 80,
        height: 80,
        minWidth: 50,
        minHeight: 50,
        padding: 4,
        radius: 0.6,
        borderWidth: 1,
    },
    md: {
        width: 160,
        height: 160,
        minWidth: 100,
        minHeight: 100,
        padding: 8,
        radius: 0.8,
        borderWidth: 1,
    },
    lg: {
        width: 240,
        height: 240,
        minWidth: 140,
        minHeight: 140,
        padding: 16,
        radius: 1,
        borderWidth: 2,
    },
    xl: {
        width: 400,
        height: 400,
        minWidth: 240,
        minHeight: 240,
        padding: 24,
        radius: 1.2,
        borderWidth: 3,
    },
};

export const dropSizeBox = {
    xxs: {
        width: 40,
        height: 40,
        shadow: 10,
    },
    xs: {
        width: 70,
        height: 70,
        shadow: 12,
    },
    sm: {
        width: 100,
        height: 100,
        shadow: 15,
    },
    md: {
        width: 120,
        height: 120,
        shadow: 18,
    },
    lg: {
        width: 150,
        height: 150,
        shadow: 20,
    },
    xl: {
        width: 180,
        height: 180,
        shadow: 25,
    },
    xxl: {
        width: 200,
        height: 200,
        shadow: 30,
    },
    xxxl: {
        width: 350,
        height: 350,
        shadow: 30,
    },
};
