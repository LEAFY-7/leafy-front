import { Theme, css } from '@emotion/react';

export const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.default.borderColor};
        background-color: ${theme.palette.default.background};
        color: ${theme.palette.default.color};
    `,
    gray: (theme: Theme) => css`
        border-color: ${theme.palette.default.borderColor};
        background-color: ${theme.palette.default.background};
        color: ${theme.palette.default.color};
        transition: border-color 0.15s ease-in-out, color 0.15s ease-in-out;
        &:hover {
            background-color: ${theme.palette.default.hoverBackground};
            border-color: ${theme.palette.default.hoverBorder};
            color: ${theme.palette.default.hoverColor};
        }
    `,
    green: (theme: Theme) => css`
        border-color: ${theme.palette.greenFill.borderColor}!important;
        background-color: ${theme.palette.greenFill.background};
        color: ${theme.palette.greenFill.color};
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
            color 0.25s ease-in-out;
        &:hover {
            border-color: ${theme.palette.greenFill.hoverBorder};
            background-color: ${theme.palette.greenFill.hoverBackground};
            color: ${theme.palette.greenFill.hoverColor};
        }
    `,
};

const sizeBox = {
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
        width: 15,
        height: 15,
        padding: 1.5,
        fontSize: 1,
        radius: 0.8,
        borderWidth: 1.5,
    },
    lg: {
        width: 25,
        height: 25,
        padding: 2,
        fontSize: 1.5,
        radius: 1,
        borderWidth: 1.8,
    },
    xl: {
        width: 35,
        height: 35,
        padding: 3,
        fontSize: 2,
        radius: 1.2,
        borderWidth: 2,
    },
};

export default { variantStyles, sizeBox };
