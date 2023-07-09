import { Theme, css } from '@emotion/react';

const variantStyles = {
    green: (theme: Theme) => css`
        border-color: ${theme.palette.green.borderColor};
        background-color: ${theme.palette.green.background};
        color: ${theme.palette.green.color};
        transition: background-color 0.35s ease-in-out, border-color 0.555s ease-in-out,
            color 0.25s ease-in-out;
        &:focus {
            border-color: ${theme.palette.green.focusBorder};
            background-color: ${theme.palette.green.foucsBackground};
            color: ${theme.palette.green.focusColor};
        }
        &:hover {
            border-color: ${theme.palette.green.hoverBorder};
            background-color: ${theme.palette.green.hoverBackground};
            color: ${theme.palette.green.hoverColor};
        }
        &:active {
            border-color: ${theme.palette.green.activeBorder};
            background-color: ${theme.palette.green.activeBackground};
            color: ${theme.palette.green.activeColor};
        }
    `,
    default: (theme: Theme) => css`
        border-color: ${theme.palette.style.default.borderColor};
        background-color: ${theme.palette.style.default.backgroundColor};
        color: ${theme.palette.style.text.blackColor};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.palette.style.primary.borderColor};
        background-color: ${theme.palette.style.primary.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
    `,
    secondary: (theme: Theme) => css`
        border-color: ${theme.palette.style.secondary.borderColor};
        background-color: ${theme.palette.style.secondary.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
    `,
    tertiary: (theme: Theme) => css`
        border-color: ${theme.palette.style.tertiary.borderColor};
        background-color: ${theme.palette.style.tertiary.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
    `,
    quaternary: (theme: Theme) => css`
        border-color: ${theme.palette.style.quaternary.borderColor};
        background-color: ${theme.palette.style.quaternary.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
    `,
    important: (theme: Theme) => css`
        border-color: ${theme.palette.style.important.borderColor};
        background-color: ${theme.palette.style.important.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
    `,
};

const innerStyle = css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const interval = css`
    width: 5px;
`;

const sizeBox = {
    xs: {
        height: 1,
        padding: 0.4,
        fontSize: 0.2,
        radius: 12,
        borderWidth: 1,
    },
    sm: {
        height: 2,
        padding: 0.6,
        fontSize: 0.5,
        radius: 16,
        borderWidth: 1.2,
    },
    md: {
        height: 2.5,
        padding: 0.8,
        fontSize: 0.8,
        radius: 20,
        borderWidth: 1.4,
    },
    lg: {
        height: 3,
        padding: 1,
        fontSize: 1.1,
        radius: 24,
        borderWidth: 1.6,
    },
    xl: {
        height: 3.5,
        padding: 1.2,
        fontSize: 1.5,
        radius: 26,
        borderWidth: 1.8,
    },
};
export default { variantStyles, innerStyle, interval, sizeBox };
