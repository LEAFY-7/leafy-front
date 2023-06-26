import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LinkWrapper from '../Wrapper/link-wrapper';

export interface ButtonStyleProp {
    variant?: 'green' | 'red' | 'green_border' | 'default';
    height: string;
    padding: string;
    fontSize: string;
    radius: string;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, Pick<ButtonStyleProp, 'variant'> {
    size?: 'sm' | 'md' | 'lg';
    isBorder?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
}

const RectangleButton = ({
    variant = 'default',
    size = 'md',
    isBorder = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    to,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const height = size === 'sm' ? '2rem' : size === 'md' ? '2.5rem' : '3rem';
    const padding = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    const fontSize = size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem';
    const radius = size === 'sm' ? '0.5rem' : size === 'md' ? '0.8rem' : '1rem';

    return (
        <LinkWrapper to={to}>
            <Button
                variant={variant}
                height={height}
                padding={padding}
                fontSize={fontSize}
                radius={radius}
                disabled={disabled}
                {...rest}
            >
                <InnerWrapper>
                    {leftIcon && leftIcon}
                    {children}
                    {rightIcon && rightIcon}
                </InnerWrapper>
            </Button>
        </LinkWrapper>
    );
};

export default RectangleButton;

const Button = styled.button<ButtonStyleProp>`
    padding-left: ${({ padding }) => padding};
    padding-top: ${({ padding }) => padding};
    padding-right: ${({ padding }) => padding};
    padding-bottom: ${({ padding }) => padding};
    border-radius: ${({ radius }) => radius};
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize};
    border: 1px solid #000;
    outline: none;
    word-break: keep-all;
    cursor: pointer;

    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${({ variant, theme }) => {
        switch (variant) {
            case 'green': {
                return css`
                    border-color: ${theme.colors.transparent};
                    background-color: ${theme.colors.transparent};
                    color: ${theme.palette.green.color};
                    transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
                        color 0.25s ease-in-out;
                    &:focus {
                        border-color: ${theme.colors.vert};
                        background-color: ${theme.colors.vert};
                        color: ${theme.colors.white};
                    }
                    &:hover {
                        border-color: ${theme.colors.bgreen};
                        background-color: ${theme.colors.bgreen};
                        color: ${theme.colors.white};
                    }
                    &:active {
                        border-color: ${theme.colors.green};
                        background-color: ${theme.colors.green};
                        color: ${theme.colors.white};
                    }
                `;
            }
            case 'green_border': {
                return css`
                    border-color: ${theme.palette.greenBorder.borderColor};
                    background-color: ${theme.palette.greenBorder.background};
                    color: ${theme.palette.greenBorder.color};
                    transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
                        color 0.25s ease-in-out;
                    &:focus {
                        border-color: ${theme.colors.vert};
                        background-color: ${theme.colors.vert};
                        color: ${theme.colors.white};
                    }
                    &:hover {
                        border-color: ${theme.colors.bgreen};
                        background-color: ${theme.colors.white};
                        color: ${theme.colors.bgreen};
                    }
                    &:active {
                        border-color: ${theme.colors.green};
                        background-color: ${theme.colors.green};
                        color: ${theme.colors.white};
                    }
                `;
            }

            case 'red': {
                return css`
                    border-color: ${theme.colors.red};
                    background-color: ${theme.colors.red};
                    color: ${theme.colors.white};
                    transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
                        color 0.25s ease-in-out;
                    &:focus {
                        border-color: ${theme.colors.red};
                        background-color: ${theme.colors.red};
                        color: ${theme.colors.white};
                    }
                    &:hover {
                        border-color: ${theme.colors.tdred_600};
                        background-color: ${theme.colors.tdred_600};
                        color: ${theme.colors.white};
                    }
                    &:active {
                        border-color: ${theme.colors.tdred_900};
                        background-color: ${theme.colors.tdred_900};
                        color: ${theme.colors.white};
                    }
                `;
            }
            default: {
                return css`
                    border-color: ${theme.colors.transparent};
                    background-color: ${theme.colors.transparent};
                    color: ${theme.colors.inherit};
                    transition: border-color 0.15s ease-in-out, color 0.15s ease-in-out;
                    &:hover {
                        border-color: ${theme.colors.transparent};
                        color: ${theme.colors.skyBlue};
                    }
                `;
            }
        }
    }}
    ${({ disabled, theme }) =>
        disabled &&
        css`
            &:disabled {
                border-color: ${theme.colors.gray};
                background-color: ${theme.colors.gray};
                color: ${theme.colors.white};
            }
        `}
`;
const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
