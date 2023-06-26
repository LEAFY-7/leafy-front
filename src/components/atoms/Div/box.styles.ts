import { css } from '@emotion/react';
import { theme } from '@configs/style.config';

const variantStyles = {
    default: css`
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
    green: css`
        border-color: ${theme.palette.greenBorder.borderColor};
        background-color: ${theme.palette.greenBorder.background};
        color: ${theme.palette.greenBorder.color};
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
            color 0.25s ease-in-out;
        &:focus {
            border-color: ${theme.colors.vert};
            background-color: ${theme.colors.vert};
            color: ${theme.colors.white};
        }
        &:hover {
            border-color: ${theme.colors.bgreen};
            background-color: ${theme.colors.white};
            color: ${theme.colors.bgreen};
        }
        &:active {
            border-color: ${theme.colors.green};
            background-color: ${theme.colors.green};
            color: ${theme.colors.white};
        }
    `,
    red: css``,
};

export default { variantStyles };
