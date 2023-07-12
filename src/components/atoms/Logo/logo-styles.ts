import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.text.primaryColor} 50%,
            ${theme.palette.text.primaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.primary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
    primary: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.text.primaryColor} 50%,
            ${theme.palette.text.secondaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.primary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
    secondary: (theme: Theme) => css`
        background: linear-gradient(
            45deg,
            ${theme.palette.text.secondaryColor} 50%,
            ${theme.palette.text.primaryColor} 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${theme.palette.secondary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
};
export default { variantStyles };
