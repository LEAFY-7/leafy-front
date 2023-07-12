import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.default.borderColor};
        background-color: ${theme.palette.default.backgroundColor};
        color: ${theme.palette.text.blackColor};
        box-shadow: ${theme.palette.boxShadow};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.palette.primary.borderColor};
        background-color: ${theme.palette.primary.backgroundColor};
        color: ${theme.palette.text.whiteColor};
        box-shadow: ${theme.palette.boxShadow};
    `,
};
export default { variantStyles };
