/** @jsxImportSource @emotion/react */
import React, { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import useVariant from 'hooks/useVariant';
import { divSizeBox, variantStyles } from './div.styles';

interface DivProps {
    id?: string;
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
    borderColor?: keyof typeof theme.colors;
    color?: keyof typeof theme.colors;
    radius?: number;
    showScroll?: boolean;
    textAlign?: CSSProperties['textAlign'];
}

type Props = React.PropsWithChildren<DivProps> & HTMLAttributes<HTMLDivElement>;
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
    overflowY = 'auto',
    padding = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    margin = 0,
    backgroundColor = 'inherit',
    borderColor = 'inherit',
    color = 'inherit',
    showScroll = false,
    textAlign = 'left',
    children,
    ...rest
}: Props) => {
    const {
        width: w,
        height: h,
        padding: p,
        minWidth: mW,
        minHeight: mH,
        radius,
        borderWidth,
    } = divSizeBox[size];
    const divVariants = useVariant({ variant: variant, callback: variantStyles });
    const defaultBoxStyle = css`
        width: ${width === 'inherit' ? `${w}px` : typeof width === 'number' ? `${width}%` : width};
        height: ${height === 'inherit' ? `${h}px` : typeof height === 'number' ? `${height}%` : height};
        min-width: ${minWidth};
        min-height: ${minHeight};

        display: ${display};
        justify-content: ${justifyContent};
        align-items: ${alignItems};

        overflow-x: ${overflowX};
        overflow-y: ${overflowY};
        margin: ${margin || `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
        padding: ${padding === 0 ? `${p}px` : typeof padding === 'number' ? `${padding}px` : padding};
        flex-direction: ${direction};
        background-color: ${theme.colors[backgroundColor]};
        border: ${isBorder && 'solid'};
        border-color: ${theme.colors[borderColor]};
        border-width: ${isBorder ? `${borderWidth}px` : 0};
        border-radius: ${radius + 'rem'};
        box-sizing: border-box;
        text-align: ${textAlign};
        word-break: break-all;

        ::-webkit-scrollbar {
            display: ${showScroll ? 'block' : 'none'};
        }

        ${divVariants}
    `;
    return (
        <div id={id} css={defaultBoxStyle} {...rest}>
            {children}
        </div>
    );
};
export default Div;
