import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.green.color} 50%,
            ${theme.palette.green.anotherColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.green.color};
        -webkit-text-fill-color: transparent;
    `,
    gray: (theme: Theme) => css`
        background: linear-gradient(45deg, ${theme.colors.gray} 50%, ${theme.colors.gray_500} 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.colors.gray_500};
        -webkit-text-fill-color: transparent;
    `,
    green: (theme: Theme) => css`
        color: ${theme.palette.greenFill.color};
    `,
    black: (theme: Theme) => css`
        color: ${theme.colors.black};
    `,
};
export default { variantStyles };
