import React from 'react';
import * as Styled from './index.styles';
import { Props } from './index.types';

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
        overflow = 'auto',
        cursor = 'auto',
        backfaceVisibility = 'inherit',
        borderWidth = 0,
        children,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLElement>,
) {
    return (
        <Styled.Box
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
        </Styled.Box>
    );
});
export default Box;
