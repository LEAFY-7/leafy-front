import { theme } from '@configs/style.config';
import { Theme, css } from '@emotion/react';

const variantStyles = {
    H1: (theme: Theme) => css`
        font-size: ${theme.fontSize.xxxxl};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.xxxxl};
        color: ${theme.palette.normal.color};
    `,
    H2: (theme: Theme) => css`
        font-size: ${theme.fontSize.xxxl};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.xxxl};
        color: ${theme.palette.normal.color};
    `,
    H3: (theme: Theme) => css`
        font-size: ${theme.fontSize.xxl};
        font-weight: ${theme.fontWeight.semiBold};
        line-height: ${theme.lineHeight.xxl};
        color: ${theme.palette.normal.color};
    `,
    BODY1: (theme: Theme) => css`
        font-size: ${theme.fontSize.lg};
        font-weight: ${theme.fontWeight.semiBold};
        line-height: ${theme.lineHeight.lg};
        color: ${theme.palette.normal.color};
    `,
    BODY2: (theme: Theme) => css`
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.regular};
        line-height: ${theme.lineHeight.md};
        color: ${theme.palette.normal.color};
    `,
    BODY3: (theme: Theme) => css`
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.regular};
        line-height: ${theme.lineHeight.sm};
        color: ${theme.palette.normal.color};
    `,
};

export default { variantStyles };
