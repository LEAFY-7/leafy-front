/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Theme, css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import useVariant from 'hooks/useVariant';
import { innerStyle, sizeBox, variantStyles, interval } from './button.styles';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'default';
    fontSize?: keyof typeof theme.fontSize;
    fontWeight?: keyof typeof theme.fontWeight;
    backgroundColor?: keyof typeof theme.colors;
    color?: keyof typeof theme.colors;

    isBorder?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
}

const DropButton = React.forwardRef(function DropButton(
    {
        id,
        variant = 'primary',
        size = 'md',
        isBorder = false,
        disabled = false,
        fontSize,
        fontWeight,
        backgroundColor,
        color,
        leftIcon,
        rightIcon,
        children,
        to,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLButtonElement>,
) {
    const { height, bubbleSize, padding, radius, fontSize: newFontSize, borderWidth } = sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: variantStyles });

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

        &:focus::before {
            content: '';
            position: absolute;
            width: ${bubbleSize + 'px'};
            height: ${bubbleSize + 'px'};
            left: 2%;
            top: 3%;
            background: radial-gradient(
                50% 50% at 50% 50%,
                #fafafa 0%,
                rgba(250, 250, 250, 0.15) 0%,
                #fafafa 100%
            );
            border-radius: 58% 42% 77% 23% / 73% 30% 70% 27%;
            mix-blend-mode: normal;
            opacity: 0.5;
            box-shadow: 0px 5px 5px rgba(14, 17, 27, 0.15), inset 0px 4px 4px rgba(255, 255, 255, 0.15);
        }
        &:focus::after {
            content: '';
            position: absolute;
            width: ${bubbleSize + 'px'};
            height: ${bubbleSize + 'px'};
            right: 2%;
            bottom: 2%;
            background: radial-gradient(
                50% 50% at 50% 50%,
                #fafafa 0%,
                rgba(250, 250, 250, 0.15) 2%,
                #fafafa 100%
            );
            border-radius: 51%;
            mix-blend-mode: normal;
            opacity: 0.5;
            box-shadow: 0px 5px 5px rgba(14, 17, 27, 0.15), inset 0px 4px 4px rgba(255, 255, 255, 0.15);
        }

        &:active::before {
            content: '';
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
            transform: matrix(1, 0, 0, 1, 0, 0);
        }

        ${btnVariant}

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
                    {(leftIcon || rightIcon) && <div css={interval} />} {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
});

export default DropButton;
