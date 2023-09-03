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
    backgroundColor?: keyof typeof theme.colors;
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
        backgroundColor,
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

    const eventStyle = css`
        &:hover::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                73.33% 73.33% at 29.37% 26.67%,
                #fafafa 0%,
                rgba(250, 250, 250, 0.01) 29.22%,
                #fafafa 100%
            );
            mix-blend-mode: normal;
            opacity: 0.7;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
        &:active::before {
            content: '';
            position: absolute;
            width: 0%;
            height: 0%;
        }
        &:active::after {
            content: '';
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            position: absolute;
            flex: none;
            order: 0;
            align-self: stretch;
            background: radial-gradient(
                123.33% 123.33% at 71.25% 83.33%,
                #fafafa 0%,
                rgba(250, 250, 250, 0.01) 29.22%,
                #fafafa 100%
            );
            mix-blend-mode: normal;
            border-radius: ${radius + 'px'};
            opacity: 0.7;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    `;
    const defaultButtonStyle = ({ palette }: Theme) => css`
        height: ${height + 'px'};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        padding-left: ${padding * 2 + 'px'};
        padding-right: ${padding * 2 + 'px'};
        padding-bottom: ${padding / 2 + 'px'};
        padding-top: ${padding / 2 + 'px'};
        background-origin: border-box;
        outline: none;
        word-break: keep-all;
        margin: 8px;
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'px'};
        font-size: ${!fontSize ? newFontSize + 'px' : theme.fontSize[fontSize]};
        font-weight: ${fontWeight && theme.fontWeight[fontWeight]};
        gap: 10px;
        mix-blend-mode: normal;
        box-shadow: inset 5px 5px 5px rgba(14, 17, 27, 0.15);
        box-sizing: border-box;
        flex-grow: 1;
        transition: all 0.5s ease-out;

        ${btnVariant}
        ${variant !== 'default' && eventStyle}
        &:disabled {
            box-shadow: none;
            border-color: ${theme.colors.grey};
            background-color: ${theme.colors.grey};
            color: ${theme.colors.white};
            &::before,
            ::after {
                content: '';
                position: absolute;
                width: 0%;
                height: 0%;
            }
        }
        background-color: ${theme.colors[backgroundColor]};
        color: ${color && palette.text[color]};
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
