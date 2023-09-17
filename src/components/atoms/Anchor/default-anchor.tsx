import type { HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface AnchorProps {
    href?: string;
    target?: string;
}

type Props = React.PropsWithChildren<AnchorProps> & HTMLAttributes<HTMLAnchorElement>;

const DefaultAnchor = React.forwardRef(function DefaultAnchor(
    { href, target, children, ...rest }: Props,
    forwardedRef: React.Ref<HTMLAnchorElement>,
) {
    return (
        <Anchor href={href} target={target} ref={forwardedRef} {...rest}>
            {children}
        </Anchor>
    );
});

export default DefaultAnchor;

const Anchor = styled.a`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
