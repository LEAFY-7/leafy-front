/** @jsxImportSource @emotion/react */
import React, { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import boxStyles from './div.styles';
import { theme } from '@configs/style.config';
import useVariant from '@hooks/useVariant';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'green' | 'default';
    isBorder?: boolean;
    display?: 'none' | 'flex' | 'visible' | 'inline-flex';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    direction?: 'row' | 'column';
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    maxWidth?: CSSProperties['maxHeight'];
    maxHeight?: CSSProperties['maxHeight'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];
    margin?: CSSProperties['margin'];
    padding?: CSSProperties['padding'];
    backgroundColor?: keyof typeof theme.colors;
    color?: keyof typeof theme.colors;
    radius?: number;
}

const Div = React.forwardRef(function Div(
    {
        id,
        size = 'md',
        variant = 'default',
        isBorder = false,
        display = 'flex',
        justifyContent = 'center',
        alignItems = 'center',
        direction = 'row',
        width,
        height,
        maxWidth = 'inherit',
        maxHeight = 'inherit',
        overflowX = 'hidden',
        overflowY = 'hidden',
        margin,
        backgroundColor = 'inherit',
        color = 'inherit',
        children,
        ...rest
    }: React.PropsWithChildren<DivProps>,
    forwardedRef: React.Ref<HTMLDivElement>,
) {
    const divVariants = useVariant({ variant: variant, callback: boxStyles.variantStyles });
    const newW = size === 'sm' ? '5rem' : size === 'md' ? '10rem' : '20rem';
    const newH = size === 'sm' ? '5rem' : size === 'md' ? '10rem' : '20rem';
    const padding = size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2rem';
    const fontSize = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    const radius = size === 'sm' ? '0.5rem' : size === 'md' ? '0.8rem' : '1rem';

    const defaultBoxStyle = css`
        word-break: keep-all;
        cursor: pointer;
        display: ${display};
        justify-content: ${justifyContent ? justifyContent : 'flex-start'};
        align-items: ${alignItems ? alignItems : 'flex-start'};
        width: ${typeof width === 'undefined' ? newW : typeof width === 'number' ? `${width}%` : width};
        height: ${typeof height === 'undefined' ? newH : typeof height === 'number' ? `${height}%` : height};
        max-width: ${typeof maxHeight === 'number' ? `${maxHeight}%` : maxHeight};
        max-height: ${typeof maxHeight === 'number' ? `${maxHeight}%` : maxHeight};
        overflow-x: ${overflowX};
        overflow-y: ${overflowY};
        margin: ${margin};
        padding: ${padding};
        flex-direction: ${direction};
        background-color: ${backgroundColor};
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? '.2rem' : 0};
        border-radius: ${radius};
        font-size: ${fontSize};
        ${divVariants}
    `;
    return (
        <div id={id} css={defaultBoxStyle} {...rest} ref={forwardedRef}>
            {children}
        </div>
    );
});
export default Div;
