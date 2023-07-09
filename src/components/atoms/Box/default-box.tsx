/** @jsxImportSource @emotion/react */
import React from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/style.config';

type As = 'div' | 'main' | 'nav' | 'section' | 'article' | 'header' | 'aside' | 'ul';

interface BoxProps {
    as?: As;
    width?: CSSProperties['width'] | number;
    height?: CSSProperties['height'] | number;
    minHeight?: CSSProperties['minHeight'];
    minWidth?: CSSProperties['minWidth'];
    position?: CSSProperties['position'];
    backgroundColor?: keyof typeof theme.colors;
    backgroundImage?: CSSProperties['backgroundImage'];
    boxShadow?: CSSProperties['boxShadow'];
    padding?: CSSProperties['padding'];
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    margin?: CSSProperties['margin'];
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    top?: CSSProperties['top'];
    bottom?: CSSProperties['bottom'];
    right?: CSSProperties['right'];
    left?: CSSProperties['left'];
    zIndex?: CSSProperties['zIndex'];
    display?: CSSProperties['display'];
    direction?: CSSProperties['flexDirection'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    cursor?: CSSProperties['cursor'];
    opacity?: CSSProperties['opacity'];
    radius?: number;
    gap?: CSSProperties['gap'];
    backfaceVisibility?: CSSProperties['backfaceVisibility'];
    borderWidth?: number;
    overflow?: CSSProperties['overflow'];
}
export interface Props extends HTMLAttributes<HTMLElement>, BoxProps {
    id?: string;
}

const Box = ({
    id,
    as: Component = 'div',
    width = 'inherit',
    height = 'inherit',
    minHeight = 'inherit',
    minWidth = 'inherit',
    position = 'static',
    display = 'block',
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    top = 'inherit',
    left = 'inherit',
    bottom = 'inherit',
    right = 'inherit',
    zIndex = 'auto',
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    backgroundColor = 'inherit',
    backgroundImage = 'inherit',
    boxShadow = 'inherit',
    radius = 8,
    gap = 0,
    opacity = 'inherit',
    overflow = 'hidden',
    cursor = 'auto',
    backfaceVisibility = 'inherit',
    borderWidth = 0,
    children,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const newW = typeof width === 'number' ? `${width}%` : width;
    const newH = typeof height === 'number' ? `${height}%` : height;
    const newPadding = padding || `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
    const newMargin = margin || `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
    // const newW = size === 'sm' ? '5rem' : size === 'md' ? '10rem' : '20rem';
    // const newH = size === 'sm' ? '5rem' : size === 'md' ? '10rem' : '20rem';
    // const padding = size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2rem';
    // const fontSize = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    // const radius = size === 'sm' ? '0.5rem' : size === 'md' ? '0.8rem' : '1rem';
    const defaultBoxStyle = css`
        width: ${newW};
        height: ${newH};
        min-width: ${minWidth};
        min-height: ${minWidth};
        position: ${position};
        display: ${display};
        flex-direction: ${direction};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        top: ${top};
        bottom: ${bottom};
        right: ${right};
        left: ${left};
        z-index: ${zIndex};
        padding: ${newPadding};
        margin: ${newMargin};
        background-image: ${backgroundImage};
        border-radius: ${radius + 'px'};
        box-shadow: ${boxShadow};
        border-style: solid;
        border-width: ${borderWidth + 'px'};
        box-sizing: border-box;
        backface-visibility: ${backfaceVisibility};
        cursor: ${cursor};
        opacity: ${opacity};
        overflow: ${overflow};
        gap: ${gap};
        flex-grow: 1;
        overflow-x: hidden;
    `;

    return (
        <Component id={id} css={defaultBoxStyle} {...rest}>
            {children}
        </Component>
    );
};
export default Box;
