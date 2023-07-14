/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
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
    fontSize,
    fontWeight,
    leftIcon,
    rightIcon,
    children,
    to,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const { height, padding, radius, fontSize: newFontSize, borderWidth } = sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: variantStyles });

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
        background-origin: border-box;
        outline: none;
        word-break: keep-all;
        margin: 0.5rem;
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'px'};
        font-size: ${!fontSize ? newFontSize + 'px' : theme.fontSize[fontSize]};
        font-weight: ${fontWeight && theme.fontWeight[fontWeight]};

        &:hover {
            position: relative;
            box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -10px -8px 10px rgba(255, 255, 255, 0.8);
            transition: all 0.5s ease-out;

            &::before {
                content: '';
                background-color: rgba(255, 255, 255, 0.5);
                position: absolute;
                top: 10px;
                left: 10px;
                width: 10px;
                height: 5px;
                border-radius: 65% 18% 66% 7% / 82% 10% 71% 10%;
                box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.5);
                transition: all 0.5s ease-out;
            }
            &::after {
                content: '';
                background-color: rgba(255, 255, 255, 0.5);
                position: absolute;
                bottom: 10px;
                right: 10px;
                width: 10px;
                height: 5px;
                border-radius: 87% 18% 66% 7% / 82% 10% 73% 10%;
                box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.4);
                transition: all 0.5s ease-out;
            }
        }

        &:focus {
            &::before {
                content: '';
                position: absolute;
                top: 7px;
                left: 10px;
                width: 20px;
                height: 20px;
                background-color: transparent;
                border-radius: 54% 46% 81% 19% / 77% 42% 58% 23%;
                box-shadow: inset 3px -5px 5px rgba(0, 0, 0, 0.2), 5px 5px 5px rgba(0, 0, 0, 0.3),
                    5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px -5px 10px rgba(255, 255, 255, 1);
                transition: all 0.5s ease-out;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 10px;
                right: 10px;
                width: 20px;
                height: 20px;
                background: transparent;
                border-radius: 53% 47% 49% 51% / 66% 56% 44% 34%;
                box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.3), 5px -5px 8px rgba(0, 0, 0, 0.3),
                    5px 5px 5px rgba(255, 255, 255, 0.5), inset -3px 5px 8px rgba(255, 255, 255, 1);
                transition: all 0.5s ease-out;
            }
        }
        &:active {
            box-shadow: none;
            transition: all 0.5s ease-out;
            &::before {
                content: '';
                background-color: rgba(255, 255, 255, 0.5);
                position: absolute;
                top: 10px;
                left: 10px;
                width: 15px;
                height: 10px;
                border-radius: 65% 18% 66% 7% / 82% 10% 71% 10%;
                box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5);
                transition: all 0.5s ease-out;
            }
            &::after {
                content: '';
                background-color: rgba(255, 255, 255, 0.5);
                position: absolute;
                bottom: 5px;
                right: 10px;
                width: 15px;
                height: 10px;
                border-radius: 87% 18% 66% 7% / 82% 10% 73% 10%;
                box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.4);
                transition: all 0.5s ease-out;
            }
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
                width: 0px;
                height: 0px;
                box-shadow: none;
            }
        }
    `;

    return (
        <LinkWrapper to={to}>
            <button id={id} disabled={disabled} css={defaultButtonStyle} {...rest}>
                <div css={innerStyle}>
                    {leftIcon && leftIcon}
                    {(leftIcon || rightIcon) && <div css={interval} />} {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
};

export default EffectiveButton;
