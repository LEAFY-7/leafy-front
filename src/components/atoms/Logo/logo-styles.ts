import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.global.text.primaryColor} 50%,
            ${theme.palette.global.text.primaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.green.color};
        -webkit-text-fill-color: transparent;
    `,
    primary: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.global.text.primaryColor} 50%,
            ${theme.palette.global.text.secondaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.green.color};
        -webkit-text-fill-color: transparent;
    `,
    secondary: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.global.text.secondaryColor} 50%,
            ${theme.palette.global.text.primaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.green.color};
        -webkit-text-fill-color: transparent;
    `,
};
export default { variantStyles };
