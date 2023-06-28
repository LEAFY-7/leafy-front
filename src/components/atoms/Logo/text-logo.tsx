/** @jsxImportSource @emotion/react */
import React from 'react';
import LinkWrapper from '../Wrapper/link-wrapper';
import useVariant from '@hooks/useVariant';
import logoStyles from './logo-styles';
import { css } from '@emotion/react';

interface Props {
    to?: string;
    variant: 'green' | 'default' | 'gray';
    onClick?: () => void;
}
const TextLogo = ({
    to = '/',
    variant = 'green',
    children,
    onClick,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const divVariants = useVariant({ variant: variant, callback: logoStyles.variantStyles });

    const defaultLogoStyle = css`
        ${divVariants}
    `;
    return (
        <LinkWrapper to={to}>
            <h1 css={defaultLogoStyle} {...rest} onClick={onClick}>
                {children}
            </h1>
        </LinkWrapper>
    );
};

export default TextLogo;
