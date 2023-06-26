/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import boxStyles from './box.styles';
import styleConfig from '@configs/style.config';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'green' | 'red' | 'default';
    isBorder?: boolean;

    /** anything you want */
    children?: ReactNode;
    id: string;
    display?: 'none' | 'flex' | 'visible' | 'inline-flex';
    /** Defines the alignment along the main axis.  */
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end';

    /** Defines the default behaviour for how flex items are laid out along the cross axis on the current line */
    alignItems?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end';

    /** Establishes the main axis, thus defining the direction flex items are placed in the flex container. */
    flexDirection?: 'row' | 'column';
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    overflowX?: 'hidden' | 'visible' | 'auto' | 'scroll';
    overflowY?: 'hidden' | 'visible' | 'auto' | 'scroll';
    margin?: string;
    padding?: string;
    backgroundColor?: keyof typeof styleConfig.theme.colors;
    color?: string;
    radius?: number;
}

export const Box = ({
    size = 'md',
    variant = 'default',
    isBorder = false,
    children,
    id,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width = '100px',
    height = '100px',
    maxWidth,
    maxHeight,
    overflowX,
    overflowY,
    margin,
    backgroundColor,
    color,
}: BoxProps) => {
    const boxVariant = boxStyles.variantStyles[variant] || boxStyles.variantStyles.default;
    const padding = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    const fontSize = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    const radius = size === 'sm' ? '0.5rem' : size === 'md' ? '0.8rem' : '1rem';

    const defaultBoxStyle = css`
        word-break: keep-all;
        cursor: pointer;
        display: ${display};
        justify-content: ${justifyContent ? justifyContent : 'flex-start'};
        align-items: ${alignItems ? alignItems : 'flex-start'};
        width: ${width};
        height: ${height};
        max-width: ${maxWidth};
        max-height: ${maxHeight};
        overflow-x: ${overflowX};
        overflow-y: ${overflowY};
        margin: ${margin};
        padding: ${padding};
        flex-direction: ${flexDirection};
        background-color: ${backgroundColor};
        color: ${color ? color : 'black'};
        border-width: ${isBorder && '1px'};
        border-radius: ${radius};
        font-size: ${fontSize};

        ${boxVariant}
    `;
    return (
        <div css={defaultBoxStyle} id={id}>
            {children}
        </div>
    );
};
