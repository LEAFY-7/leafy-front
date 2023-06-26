import { Theme, css } from '@emotion/react';

export const variantStyles = {
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

export default { variantStyles };
