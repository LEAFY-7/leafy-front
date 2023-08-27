import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
interface AnchorProps {
    href?: string;
}

type Props = React.PropsWithChildren<AnchorProps> & HTMLAttributes<HTMLAnchorElement>;

const SmoothAnchor = ({ href, children, ...rest }: Props) => {
    return (
        <Anchor href={href} {...rest}>
            {children}
        </Anchor>
    );
};
export default SmoothAnchor;

const Anchor = styled.a`
    width: 50px;
    height: 50px;
`;
