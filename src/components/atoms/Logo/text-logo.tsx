/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/style.config';
import useVariant from 'hooks/useVariant';
import logoStyles from './logo-styles';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

interface Props {
    to?: string;
    variant: 'primary' | 'secondary' | 'default';
    fontSize?: keyof typeof theme.fontSize;
    onClick?: () => void;
}
const TextLogo = ({
    to = '/',
    variant = 'default',
    fontSize = 'md',
    children,
    onClick,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const divVariants = useVariant({ variant: variant, callback: logoStyles.variantStyles });

    const defaultLogoStyle = css`
        ${divVariants};
        font-size: ${theme.fontSize[fontSize]};
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
