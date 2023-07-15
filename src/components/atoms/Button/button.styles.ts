import { Theme, css } from '@emotion/react';

export const variantStyles = {
    default: ({ palette }: Theme) => css`
        border-color: ${palette.default.borderColor};
        background-color: ${palette.default.backgroundColor};
        color: ${palette.text.black};
    `,
    primary: ({ palette }: Theme) => css`
        border-color: ${palette.primary.borderColor};
        background-color: ${palette.primary.backgroundColor};
        color: ${palette.text.white};
    `,
    secondary: ({ palette }: Theme) => css`
        border-color: ${palette.secondary.borderColor};
        background-color: ${palette.secondary.backgroundColor};
        color: ${palette.text.white};
    `,
    'menu-default': ({ palette }: Theme) => css`
        border-color: ${palette.default.borderColor};
        background-color: ${palette.default.backgroundColor};
        color: ${palette.text.black};
        transition: background-color 0.35s ease-in-out, border-color 0.555s ease-in-out,
            color 0.25s ease-in-out;

        &:hover {
            border-color: ${palette.primary.borderColor};
            background-color: ${palette.primary.backgroundColor};
            color: ${palette.text.white};
        }
    `,
};

export const innerStyle = css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const interval = css`
    width: 5px;
`;

export const sizeBox = {
    xs: {
        height: 16,
        bubbleSize: 10,
        padding: 4,
        fontSize: 8,
        radius: 12,
        borderWidth: 1,
    },
    sm: {
        height: 24,
        bubbleSize: 16,
        padding: 8,
        fontSize: 12,
        radius: 16,
        borderWidth: 1.2,
    },
    md: {
        height: 32,
        bubbleSize: 24,
        padding: 10,
        fontSize: 16,
        radius: 20,
        borderWidth: 1.4,
    },
    lg: {
        height: 40,
        bubbleSize: 30,
        padding: 14,
        fontSize: 24,
        radius: 24,
        borderWidth: 1.6,
    },
    xl: {
        height: 48,
        bubbleSize: 32,
        padding: 16,
        fontSize: 32,
        radius: 26,
        borderWidth: 1.8,
    },
};

// green: (theme: Theme) => css`
//     border-color: ${  palette.green.borderColor};
//     background-color: ${  palette.green.background};
//     color: ${  palette.green.color};
//     transition: background-color 0.35s ease-in-out, border-color 0.555s ease-in-out,
//         color 0.25s ease-in-out;
//     &:focus {
//         border-color: ${  palette.green.focusBorder};
//         background-color: ${  palette.green.foucsBackground};
//         color: ${  palette.green.focusColor};
//     }
//     &:hover {
//         border-color: ${  palette.green.hoverBorder};
//         background-color: ${  palette.green.hoverBackground};
//         color: ${  palette.green.hoverColor};
//     }
//     &:active {
//         border-color: ${  palette.green.activeBorder};
//         background-color: ${  palette.green.activeBackground};
//         color: ${  palette.green.activeColor};
//     }
// `,
