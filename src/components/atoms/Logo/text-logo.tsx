import React from 'react';
import LinkWrapper from '../Wrapper/link-wrapper';

interface Props {
    to?: string;
}

const TextLogo: React.FC<Props> = ({ to = '/' }) => {
    return (
        <LinkWrapper to={to}>
            <h1>LEAFY</h1>
        </LinkWrapper>
    );
};

export default TextLogo;
