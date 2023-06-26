import { Theme, css } from '@emotion/react';

const variantStyles = {
    default: (theme: Theme) => css`
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
        border-color: ${theme.palette.green.borderColor};
        background-color: ${theme.palette.green.background};
        color: ${theme.palette.green.color};
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
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
    red: (theme: Theme) => css`
        border-color: ${theme.colors.red};
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
            color 0.25s ease-in-out;
        &:focus {
            border-color: ${theme.colors.red};
            background-color: ${theme.colors.red};
            color: ${theme.colors.white};
        }
        &:hover {
            border-color: ${theme.colors.tdred_600};
            background-color: ${theme.colors.tdred_600};
            color: ${theme.colors.white};
        }
        &:active {
            border-color: ${theme.colors.tdred_900};
            background-color: ${theme.colors.tdred_900};
            color: ${theme.colors.white};
        }
    `,
};

export default { variantStyles };
