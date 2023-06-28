/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import { theme } from '@configs/style.config';
import useVariant from '@hooks/useVariant';
import buttonStyle from './button.style';
import LinkWrapper from '../Wrapper/link-wrapper';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'green' | 'red' | 'default';
    isBorder?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
}

const RectangleButton = ({
    id,
    variant = 'default',
    size = 'md',
    isBorder = false,
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    to,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const { height, padding, fontSize, radius, borderWidth } = buttonStyle.sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: buttonStyle.variantStyles });
    const defaultButtonStyle = css`
        padding-left: ${padding + 'rem'};
        padding-top: ${padding + 'rem'};
        padding-right: ${padding + 'rem'};
        padding-bottom: ${padding + 'rem'};
        height: ${height + 'rem'};
        font-size: ${fontSize + 'rem'};
        border: 1px solid #000;
        outline: none;
        word-break: keep-all;
        margin: 0.5rem;
        cursor: pointer;
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'rem'};
        font-weight: ${theme.fontWeight.bold};
        ${btnVariant}
        &:disabled {
            border-color: ${theme.colors.gray};
            background-color: ${theme.colors.gray};
            color: ${theme.colors.white};
        }
    `;

    return (
        <LinkWrapper to={to}>
            <button id={id} disabled={disabled} css={defaultButtonStyle} {...rest}>
                <div css={buttonStyle.innerStyle}>
                    {leftIcon && leftIcon}
                    {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
};

export default RectangleButton;
