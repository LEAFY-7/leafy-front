/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/style.config';
import useVariant from 'hooks/useVariant';
import buttonStyle from './button.style';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'default';
    fontSize?: keyof typeof theme.fontSize | 'default';
    isBorder?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
}

const EffectiveButton = ({
    id,
    variant = 'primary',
    size = 'md',
    isBorder = false,
    disabled = false,
    fontSize = 'default',
    leftIcon,
    rightIcon,
    children,
    to,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const { height, padding, radius, fontSize: newFontSize, borderWidth } = buttonStyle.sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: buttonStyle.variantStyles });

    const defaultButtonStyle = css`
        height: ${height + 'rem'};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        padding-left: ${padding * 2 + 'rem'};
        padding-right: ${padding * 2 + 'rem'};
        padding-bottom: ${padding / 2 + 'rem'};
        padding-top: ${padding / 2 + 'rem'};
        font-size: ${fontSize === 'default' ? newFontSize + 'rem' : theme.fontSize[fontSize]};
        background-origin: border-box;
        outline: none;
        word-break: keep-all;
        margin: 0.5rem;
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'px'};
        font-weight: ${theme.fontWeight.bold};

        &:disabled {
            box-shadow: none;
            border-color: ${theme.colors.grey};
            background-color: ${theme.colors.grey};
            color: ${theme.colors.white};
            &::before,
            ::after {
                content: '';
                width: 0px;
                height: 0px;
                box-shadow: none;
            }
        }
    `;

    return (
        <LinkWrapper to={to}>
            <button id={id} disabled={disabled} css={defaultButtonStyle} {...rest}>
                <div css={buttonStyle.innerStyle}>
                    {leftIcon && leftIcon}
                    {(leftIcon || rightIcon) && <div css={buttonStyle.interval} />} {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
};

export default EffectiveButton;
