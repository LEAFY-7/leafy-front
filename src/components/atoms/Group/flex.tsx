import React, { CSSProperties, ElementType, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { theme } from '@configs/style.config';

export interface FlexProps {
    as?: ElementType;
    display?: 'flex' | 'inline-flex';
    direction?: CSSProperties['flexDirection'];
    wrap?: CSSProperties['flexWrap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    alignContent?: CSSProperties['alignContent'];
    backgroundColor?: keyof typeof theme.colors;
}

export interface Props extends HTMLAttributes<HTMLElement>, FlexProps {}

const Flex = React.forwardRef(function Flex(
    {
        as = 'span',
        display = 'flex',
        direction = 'row',
        wrap = 'nowrap',
        justifyContent = 'flex-start',
        alignItems = 'flex-start',
        alignContent = 'normal',
        backgroundColor = 'inherit',
        children,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLElement>,
) {
    return (
        <FlexComponent
            as={as}
            display={display}
            direction={direction}
            wrap={wrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
            backgroundColor={backgroundColor}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </FlexComponent>
    );
});

export default Flex;

export const FlexComponent = styled.span<Required<FlexProps>>`
    display: ${({ display }) => display};
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => wrap};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor]};
`;
