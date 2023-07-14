/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Theme, css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import useVariant from 'hooks/useVariant';
import { innerStyle, sizeBox, variantStyles } from './button.styles';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'default';
    fontSize?: keyof typeof theme.fontSize;
    fontWeight?: keyof typeof theme.fontWeight;
    color?: keyof typeof theme.colors;
    isBorder?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
}

const RoundButton = React.forwardRef(function RoundButton(
    {
        id,
        variant = 'default',
        size = 'md',
        isBorder = false,
        disabled = false,
        leftIcon,
        color,
        fontSize,
        fontWeight,
        rightIcon,
        children,
        to,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLButtonElement>,
) {
    const { height, padding, radius, fontSize: newFontSize, borderWidth } = sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: variantStyles });

    const defaultButtonStyle = ({ palette }: Theme) => css`
        padding-left: ${padding + 'rem'};
        padding-top: ${padding + 'rem'};
        padding-right: ${padding + 'rem'};
        padding-bottom: ${padding + 'rem'};
        height: ${height + 'rem'};
        font-size: ${fontSize + 'rem'};
        border: 1px solid #000;
        outline: none;
        word-break: break-all;
        cursor: pointer;
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'px'};
        ${btnVariant}
        font-size: ${!fontSize ? newFontSize + 'px' : theme.fontSize[fontSize]};
        font-weight: ${fontWeight && theme.fontWeight[fontWeight]};
        color: ${color && palette.text[color]};

        &:disabled {
            border-color: ${theme.colors.grey};
            background-color: ${theme.colors.grey};
            color: ${theme.colors.white};
        }
    `;

    return (
        <LinkWrapper to={to}>
            <button id={id} disabled={disabled} css={defaultButtonStyle} ref={forwardedRef} {...rest}>
                <div css={innerStyle}>
                    {leftIcon && leftIcon}
                    {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
});

export default RoundButton;
