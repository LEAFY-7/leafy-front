/** @jsxImportSource @emotion/react */
import React, { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from '@configs/style.config';

export interface FlexProps {
    as?: 'div' | 'span' | 'main' | 'nav';
    display?: 'flex' | 'inline-flex';
    direction?: CSSProperties['flexDirection'];
    wrap?: CSSProperties['flexWrap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    alignContent?: CSSProperties['alignContent'];
    backgroundColor?: keyof typeof theme.colors;
}

export interface Props extends HTMLAttributes<HTMLElement>, FlexProps {
    id?: string;
}

const Flex = ({
    id,
    as: Component = 'span',
    display = 'flex',
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignContent = 'normal',
    backgroundColor = 'inherit',
    children,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const defaultFlexStyle = css`
        display: ${display};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        align-content: ${alignContent};
    `;
    return (
        <Component id={id} css={defaultFlexStyle} {...rest}>
            {children}
        </Component>
    );
};

export default Flex;
