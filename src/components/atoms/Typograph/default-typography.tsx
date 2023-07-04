/** @jsxImportSource @emotion/react */
import React from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';

import typographyStyle from './typography.style';
import styleConfig from 'configs/style.config';
import useVariant from 'hooks/useVariant';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

type Typography = 'H1' | 'H2' | 'H3' | 'BODY1' | 'BODY2' | 'BODY3';

interface Props extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
    to?: string;
    as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    variant: Typography;
    fontSize?: keyof typeof styleConfig.theme.fontSize;
    lineHeight?: keyof typeof styleConfig.theme.lineHeight;
    color?: keyof typeof styleConfig.theme.colors;
    fontWeight?: keyof typeof styleConfig.theme.fontWeight;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    opacity?: number;
    textAlign?: CSSProperties['textAlign'];
    width?: CSSProperties['width'];
    fontFamily?: 'bombaram';
}

const Typography = ({
    as: Component = 'span',
    variant = 'H1',
    children,
    width = 'inherit',
    fontSize = 'md',
    lineHeight = 'md',
    fontWeight = 'bold',
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    opacity = 1,
    textAlign = 'left',
    fontFamily,
    to = '',
    ...rest
}: React.PropsWithChildren<Props>) => {
    const typographyVariant = useVariant({ variant: variant, callback: typographyStyle.variantStyles });
    const newWidth = typeof width === 'number' ? `${width}%` : width;

    const defaultTypographyStyle = css`
        display: ${Component === 'span' && 'inline-block'};
        font-family: ${fontFamily && fontFamily};
        margin-top: ${marginTop + 'px'};
        margin-right: ${marginRight + 'px'};
        margin-bottom: ${marginBottom + 'px'};
        margin-left: ${marginLeft + 'px'};
        padding-top: ${paddingTop + 'px'};
        padding-right: ${paddingRight + 'px'};
        padding-bottom: ${paddingBottom + 'px'};
        padding-left: ${paddingLeft + 'px'};
        opacity: ${opacity};
        text-align: ${textAlign};
        width: ${newWidth};
        ${typographyVariant}
    `;
    return (
        <LinkWrapper to={to}>
            <Component css={defaultTypographyStyle} {...rest}>
                {children}
            </Component>
        </LinkWrapper>
    );
};
export default Typography;
