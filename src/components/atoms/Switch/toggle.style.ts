import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: (theme: Theme) => css`
        border-color: ${theme.palette.global.default.borderColor};
        background-color: ${theme.palette.global.default.backgroundColor};
        color: ${theme.palette.global.text.blackColor};
        box-shadow: ${theme.palette.global.boxShadow};
    `,
    primary: (theme: Theme) => css`
        border-color: ${theme.palette.global.primary.borderColor};
        background-color: ${theme.palette.global.primary.backgroundColor};
        color: ${theme.palette.global.text.whiteColor};
        box-shadow: ${theme.palette.global.boxShadow};
    `,
};
export default { variantStyles };
