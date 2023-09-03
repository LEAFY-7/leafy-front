import { Theme, css } from '@emotion/react';

export const variantStyles = {
    default: ({ palette }: Theme) => css`
        border-color: ${palette.default.borderColor};
        background-color: ${palette.default.backgroundColor};
        color: ${palette.text.black};
        box-shadow: ${palette.boxShadow};
    `,
    primary: ({ palette }: Theme) => css`
        border-color: ${palette.primary.borderColor};
        background-color: ${palette.primary.backgroundColor};
        color: ${palette.text.white};
        box-shadow: ${palette.boxShadow};
    `,
    secondary: ({ palette }: Theme) => css`
        border-color: ${palette.secondary.borderColor};
        background-color: ${palette.secondary.backgroundColor};
        color: ${palette.text.white};
        box-shadow: ${palette.boxShadow};
    `,
};
export default { variantStyles };
