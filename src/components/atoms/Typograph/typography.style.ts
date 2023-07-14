import { Theme, css } from '@emotion/react';

export const variantStyles = {
    H1: ({ typo }: Theme) => css`
        font-size: ${typo.h1.fontSize.value};
        font-weight: ${typo.body1.fontWeight};
        line-height: ${typo.h1.lineHeight.value};
    `,
    H2: ({ typo }: Theme) => css`
        font-size: ${typo.h2.fontSize.value};
        font-weight: ${typo.h2.fontWeight.value};
        line-height: ${typo.h2.lineHeight.value};
    `,
    H3: ({ typo }: Theme) => css`
        font-size: ${typo.h3.fontSize};
        font-weight: ${typo.h3.fontWeight};
        line-height: ${typo.h3.lineHeight};
    `,
    BODY1: ({ typo }: Theme) => css`
        font-size: ${typo.body1.fontSize};
        font-weight: ${typo.body1.fontWeight};
        line-height: ${typo.body1.lineHeight};
    `,
    BODY2: ({ typo }: Theme) => css`
        font-size: ${typo.body2.fontSize};
        font-weight: ${typo.body2.fontWeight};
        line-height: ${typo.body2.lineHeight};
    `,
    BODY3: ({ typo }: Theme) => css`
        font-size: ${typo.body2.fontSize};
        font-weight: ${typo.body2.fontWeight};
        line-height: ${typo.body2.lineHeight};
    `,
};
