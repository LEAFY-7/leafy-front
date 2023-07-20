import { Theme, css } from '@emotion/react';
export const variantStyles = {
    default: ({ palette }: Theme) => css`
        background: linear-gradient(45deg, ${palette.text.primary} 50%, ${palette.text.primary} 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: ${palette.primary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
    primary: ({ palette }: Theme) => css`
        background: linear-gradient(45deg, ${palette.text.primary} 50%, ${palette.text.secondary} 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: ${palette.primary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
    secondary: ({ palette }: Theme) => css`
        background: linear-gradient(45deg, ${palette.text.secondary} 50%, ${palette.text.primary} 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: ${palette.secondary.backgroundColor};
        -webkit-text-fill-color: transparent;
    `,
};
export default { variantStyles };
