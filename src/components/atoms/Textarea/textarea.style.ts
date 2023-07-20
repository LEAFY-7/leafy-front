import { Theme, css } from '@emotion/react';

const variantStyles = {
    default: ({ palette }: Theme) => css`
        border-color: ${palette.default.borderColor};
        background-color: ${palette.default.backgroundColor};
    `,
    primary: ({ palette }: Theme) => css`
        border-color: ${palette.primary.borderColor};
        background-color: ${palette.primary.backgroundColor};
    `,
    secondary: ({ palette }: Theme) => css`
        border-color: ${palette.secondary.borderColor};
        background-color: ${palette.secondary.backgroundColor};
    `,
};

const sizeBox = {
    xs: {
        width: 100,
        height: 100,
        padding: 0.4,
        fontSize: 0.2,
        radius: 12,
        borderWidth: 1,
    },
    sm: {
        width: 200,
        height: 200,
        padding: 0.6,
        fontSize: 0.5,
        radius: 16,
        borderWidth: 1.2,
    },
    md: {
        width: 300,
        height: 200,
        padding: 0.8,
        fontSize: 0.8,
        radius: 20,
        borderWidth: 1.4,
    },
    lg: {
        width: 400,
        height: 250,
        padding: 1,
        fontSize: 1.1,
        radius: 24,
        borderWidth: 1.6,
    },
    xl: {
        width: 500,
        height: 350,
        padding: 1.2,
        fontSize: 1.5,
        radius: 26,
        borderWidth: 1.8,
    },
};
export default { variantStyles, sizeBox };
