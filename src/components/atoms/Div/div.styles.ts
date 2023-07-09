import { Theme, css } from '@emotion/react';

const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.default.borderColor};
        background-color: ${theme.palette.default.background};
        color: ${theme.palette.default.color};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.global.green.value};
        background-color: ${theme.global.green.value};
        color: ${theme.palette.default.color};
    `,
    secondary: (theme: Theme) => css`
        border-color: ${theme.palette.default.borderColor};
        background-color: ${theme.palette.default.background};
        color: ${theme.palette.default.color};
    `,
};

const sizeBox = {
    default: {
        width: 'none',
        height: 'none',
        padding: 1,
        fontSize: 1,
        radius: 0.8,
        borderWidth: 1.5,
    },
    xs: {
        width: 5,
        height: 5,
        padding: 0.5,
        fontSize: 0.1,
        radius: 0.1,
        borderWidth: 1,
    },
    sm: {
        width: 10,
        height: 10,
        padding: 1,
        fontSize: 0.5,
        radius: 0.5,
        borderWidth: 1.2,
    },
    md: {
        width: 20,
        height: 20,
        padding: 1.5,
        fontSize: 1,
        radius: 0.8,
        borderWidth: 1.5,
    },
    lg: {
        width: 40,
        height: 40,
        padding: 2,
        fontSize: 1.5,
        radius: 1,
        borderWidth: 1.8,
    },
    xl: {
        width: 60,
        height: 60,
        padding: 3,
        fontSize: 2,
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
