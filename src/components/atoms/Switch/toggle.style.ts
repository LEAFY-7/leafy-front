import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.style.default.borderColor};
        background-color: ${theme.palette.style.default.backgroundColor};
        color: ${theme.palette.style.text.blackColor};
        box-shadow: ${theme.palette.style.boxShadow};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.palette.style.primary.borderColor};
        background-color: ${theme.palette.style.primary.backgroundColor};
        color: ${theme.palette.style.text.whiteColor};
        box-shadow: ${theme.palette.style.boxShadow};
    `,
};
export default { variantStyles };
