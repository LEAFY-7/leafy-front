/** @jsxImportSource @emotion/react */
import React, { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/style.config';
import useVariant from 'hooks/useVariant';
import divStyles from './div.styles';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';
    variant?: 'default' | 'primary' | 'secondary' | 'translucent';
    isBorder?: boolean;
    display?: 'none' | 'flex' | 'visible' | 'inline-flex';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    direction?: 'row' | 'column';
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    maxWidth?: CSSProperties['maxHeight'];
    maxHeight?: CSSProperties['maxHeight'];
    minWidth?: CSSProperties['minWidth'];
    minHeight?: CSSProperties['minHeight'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];
    margin?: CSSProperties['margin'];
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    padding?: CSSProperties['padding'];
    backgroundColor?: keyof typeof theme.colors;
    color?: keyof typeof theme.colors;
    radius?: number;
}
/* height: ${height === 'inherit'
            ? h + 'rem'
            : typeof height === 'number'
            ? `${height}%`
            : height}; */
const Div = ({
    id,
    size = 'default',
    variant = 'default',
    isBorder = false,
    display = 'flex',
    justifyContent = 'center',
    alignItems = 'center',
    direction = 'row',
    width = 'inherit',
    height = 'inherit',
    minWidth = 'inherit',
    maxWidth = 'inherit',
    maxHeight = 'inherit',
    minHeight = 'inherit',
    overflowX = 'auto',
    overflowY = 'scroll',
    padding = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    margin = 0,
    backgroundColor = 'inherit',
    color = 'inherit',
    children,
    ...rest
}: React.PropsWithChildren<DivProps>) => {
    const { width: w, height: h, padding: p, radius, borderWidth } = divStyles.sizeBox[size];
    const divVariants = useVariant({ variant: variant, callback: divStyles.variantStyles });
    const defaultBoxStyle = css`
        word-break: keep-all;
        cursor: pointer;
        display: ${display};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        width: ${width === 'inherit'
            ? `calc(100% - ${w * 3}px)`
            : typeof width === 'number'
            ? `${width}%`
            : width};
        height: ${height === 'inherit' ? `${h + 20}px` : typeof height === 'number' ? `${height}%` : height};

        /* width: ${width === 'inherit' ? `${w}px` : typeof width === 'number' ? `${width}%` : width};
        height: ${height === 'inherit' ? `${h}px` : typeof height === 'number' ? `${height}%` : height}; */

        /* max-width: ${typeof maxWidth === 'number' ? `${maxWidth}%` : maxWidth};
        max-height: ${typeof maxHeight === 'number' ? `${maxHeight}%` : maxHeight};
        min-width: ${typeof minWidth === 'number' ? `${minWidth}%` : minWidth};
        min-height: ${typeof minHeight === 'number' ? `${minHeight}%` : minHeight}; */
        overflow-x: ${overflowX};
        overflow-y: ${overflowY};
        margin: ${margin || `${marginTop}rem ${marginRight}rem ${marginBottom}rem ${marginLeft}rem`};
        padding: ${padding || p + 'rem'};
        flex-direction: ${direction};
        background-color: ${backgroundColor};
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'rem'};
        box-sizing: border-box;
        ::-webkit-scrollbar {
            display: none;
        }

        /* @media (max-width: 767px) {
            width: ${width === 'inherit'
            ? `calc(50% - ${w - 20}px)`
            : typeof width === 'number'
            ? `calc(${width}% - ${w - 20}px)`
            : width};
            height: ${height === 'inherit'
            ? `${h - 20}px`
            : typeof height === 'number'
            ? `calc(${height}% - ${h - 20}px)`
            : height};
        }

        @media (min-width: 768px) and (max-width: 1023px) {
            width: ${width === 'inherit'
            ? `calc(70% - ${w - 20}px)`
            : typeof width === 'number'
            ? `calc(${width}% - ${w - 40}px)`
            : width};
            height: ${height === 'inherit'
            ? `${h - 40}px`
            : typeof height === 'number'
            ? `calc(${height}% - ${h - 40}px)`
            : height};
        }

        @media (min-width: 1024px) {
            width: ${width === 'inherit'
            ? `calc(100% - ${w * 2}px)`
            : typeof width === 'number'
            ? `${width}%`
            : width};
            height: ${height === 'inherit'
            ? `${h - 60}px`
            : typeof height === 'number'
            ? `${height}%`
            : height};
        } */

        ${divVariants}
    `;
    return (
        <div id={id} css={defaultBoxStyle} {...rest}>
            {children}
        </div>
    );
};
export default Div;
