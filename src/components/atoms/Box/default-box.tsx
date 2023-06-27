import React from 'react';
import styled from '@emotion/styled';
import type { CSSProperties, ElementType, HTMLAttributes } from 'react';
import stylesConfig from '@configs/style.config';

interface BoxProps {
    as?: ElementType;
    width?: CSSProperties['width'] | number;
    height?: CSSProperties['height'] | number;
    minHeight?: CSSProperties['minHeight'];
    minWidth?: CSSProperties['minWidth'];
    position?: CSSProperties['position'];
    backgroundColor?: keyof typeof stylesConfig.theme.colors;
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
export interface Props extends HTMLAttributes<HTMLElement>, BoxProps {}

const Box = React.forwardRef(function Box(
    {
        as = 'div',
        role = '',
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
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLElement>,
) {
    return (
        <Component
            as={as}
            role={role}
            width={width}
            height={height}
            minHeight={minHeight}
            minWidth={minWidth}
            position={position}
            display={display}
            direction={direction}
            justifyContent={justifyContent}
            alignItems={alignItems}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            zIndex={zIndex}
            margin={margin}
            marginTop={marginTop}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            padding={padding}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            boxShadow={boxShadow}
            radius={radius}
            gap={gap}
            cursor={cursor}
            opacity={opacity}
            backfaceVisibility={backfaceVisibility}
            borderWidth={borderWidth}
            overflow={overflow}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Component>
    );
});
export default Box;

export const Component = styled.span<Required<BoxProps>>`
    ${({ as }) => as === 'span' && `display: inline-block;`};
    width: ${({ width }) => (typeof width === 'number' ? `${width}%` : width)};
    height: ${({ height }) => (typeof height === 'number' ? `${height}%` : height)};
    min-width: ${({ minWidth }) => minWidth};
    min-height: ${({ minWidth }) => minWidth};
    position: ${({ position }) => position};
    display: ${({ display }) => display};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    z-index: ${({ zIndex }) => zIndex};
    padding: ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
        padding || `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
    margin: ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
        margin || `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
    background-image: ${({ backgroundImage }) => backgroundImage};
    border-radius: ${({ radius }) => `${radius}px`};
    box-shadow: ${({ boxShadow }) => boxShadow};
    border-style: solid;
    border-width: ${({ borderWidth }) => `${borderWidth}px`};
    box-sizing: border-box;
    backface-visibility: ${({ backfaceVisibility }) => backfaceVisibility};
    cursor: ${({ cursor }) => cursor};
    opacity: ${({ opacity }) => opacity};
    overflow: ${({ overflow }) => overflow};
    gap: ${({ gap }) => gap};
    flex-grow: 1;
    overflow-x: hidden;
`;
