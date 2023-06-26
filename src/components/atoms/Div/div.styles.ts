import { css } from '@emotion/react';
import styleConfig from '@configs/style.config';

const variantStyles = {
    default: css`
        border-color: ${styleConfig.theme.palette.default.borderColor};
        background-color: ${styleConfig.theme.palette.default.background};
        color: ${styleConfig.theme.palette.default.color};
        transition: border-color 0.15s ease-in-out, color 0.15s ease-in-out;
        &:hover {
            background-color: ${styleConfig.theme.palette.default.hoverBackground};
            border-color: ${styleConfig.theme.palette.default.hoverBorder};
            color: ${styleConfig.theme.palette.default.hoverColor};
        }
    `,
    green: css`
        border-color: ${styleConfig.theme.palette.greenBorder.borderColor};
        background-color: ${styleConfig.theme.palette.greenBorder.background};
        color: ${styleConfig.theme.palette.greenBorder.color};
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
            color 0.25s ease-in-out;
        &:hover {
            border-color: ${styleConfig.theme.palette.green.hoverBorder};
            background-color: ${styleConfig.theme.palette.green.hoverBackground};
            color: ${styleConfig.theme.palette.green.hoverColor};
        }
    `,
    red: css``,
};

export default { variantStyles };
