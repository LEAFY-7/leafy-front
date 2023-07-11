import { Theme, css } from '@emotion/react';

const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.global.borderColor};
        background-color: ${theme.palette.global.default.backgroundColor};
        color: ${theme.palette.global.text.blackColor};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.palette.global.primary.borderColor};
        background-color: ${theme.palette.global.primary.backgroundColor};
        color: ${theme.palette.global.text.whiteColor};
    `,
    secondary: (theme: Theme) => css`
        border-color: ${theme.palette.global.secondary.borderColor};
        background-color: ${theme.palette.global.secondary.background};
        color: ${theme.palette.global.text.whiteColor};
    `,
    translucent: (theme: Theme) => css`
        background: ${theme.palette.global.translucent.backgroundColor};
        box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15), inset 5px 5px 10px rgba(250, 250, 250, 0.15);
        backdrop-filter: blur(15px);
        color: ${theme.palette.global.text.blackColor};
    `,
};

const sizeBox = {
    default: {
        width: 0,
        height: 0,
        padding: 1,
        radius: 0.8,
        borderWidth: 1.5,
    },
    xs: {
        width: 200,
        height: 40,
        padding: 0.1,
        radius: 0.1,
        borderWidth: 1,
    },
    sm: {
        width: 100,
        height: 80,
        padding: 0.5,
        radius: 0.5,
        borderWidth: 1.2,
    },
    md: {
        width: 80,
        height: 120,
        padding: 1,
        radius: 0.8,
        borderWidth: 1.5,
    },
    lg: {
        width: 60,
        height: 200,
        padding: 1.2,
        radius: 1,
        borderWidth: 1.8,
    },
    xl: {
        width: 20,
        height: 400,
        padding: 1.4,
        radius: 1.2,
        borderWidth: 2,
    },
};

const dropSizeBox = {
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

export default { variantStyles, sizeBox, dropSizeBox };
