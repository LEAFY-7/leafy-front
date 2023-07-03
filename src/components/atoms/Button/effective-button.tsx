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
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'important';
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
    const { height, padding, fontSize: newFontSize, borderWidth } = buttonStyle.sizeBox[size];
    const btnVariant = useVariant({ variant: variant, callback: buttonStyle.variantStyles });

    const defaultButtonStyle = css`
        /* width: calc(100%+20px); */
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
        border-radius: 20px;
        font-weight: ${theme.fontWeight.bold};

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
                box-shadow: inset 3px 5px 5px rgba(0, 0, 0, 0.07), 5px 5px 10px rgba(0, 0, 0, 0.1),
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
                box-shadow: inset -3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
                    5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
                transition: all 0.5s ease-out;
            }
        }

        ${btnVariant}

        &:disabled {
            box-shadow: none;
            border-color: ${theme.colors.gray};
            background-color: ${theme.colors.gray};
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
                    <div css={buttonStyle.interval} /> {children}
                    {rightIcon && rightIcon}
                </div>
            </button>
        </LinkWrapper>
    );
};

export default EffectiveButton;
