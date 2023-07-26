import type { CSSProperties, ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import { theme } from 'configs/ui.config';
import * as Styled from './index.styles';

export interface TextFieldProps {
    fontSize?: keyof typeof theme.fontSize;
    lineHeight?: keyof typeof theme.lineHeight;
    fontWeight?: CSSProperties['fontWeight'];
    paddingX?: number;
    paddingY?: number;
    error?: boolean;
}
export interface TextFieldInputProps extends TextFieldProps {
    radius?: number;
    helperText?: string;
    placeHolderFontSize?: keyof typeof theme.fontSize;
    disabled?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
}
export interface TextFieldHelperText extends HTMLAttributes<HTMLElement>, TextFieldProps {
    helperText?: string;
}
export interface IconProps {
    disabled?: boolean;
}

export interface Props extends HTMLAttributes<HTMLElement>, TextFieldProps, TextFieldInputProps {
    value?: string | number;
    type: 'text' | 'password' | 'date' | 'number' | 'tel';
    placeholder?: string;
    labelTitle?: string;
    leftIcon?: ReactNode;
    helperIcon?: ReactNode;
}

const TextFiled = React.forwardRef(function TextFiled(
    {
        value = '' || 0,
        type = 'text',
        placeholder = '',
        labelTitle = '',
        disabled = false,
        error = false,
        helperText = '',
        fontSize = 'sm',
        lineHeight = 'sm',
        fontWeight = 400,
        placeHolderFontSize = 'xs',
        paddingX = 16,
        paddingY = 8,
        radius = 5,
        maxLength = 999999,
        minLength = 0,
        leftIcon,
        helperIcon,
        children,
        readOnly = false,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLInputElement>,
) {
    return (
        <Styled.Wrapper
            error={error}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            paddingX={paddingX}
            paddingY={paddingY}
        >
            {labelTitle && (
                <Styled.Label
                    error={error}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    lineHeight={lineHeight}
                    paddingX={paddingX}
                    paddingY={paddingY}
                >
                    {labelTitle}
                </Styled.Label>
            )}

            <Styled.InputContainer>
                <Styled.Icon className="iconBox" disabled={disabled}>
                    {leftIcon}
                </Styled.Icon>
                <Styled.Input
                    type={type}
                    value={value}
                    error={error}
                    disabled={disabled}
                    helperText={helperText}
                    placeholder={placeholder}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    lineHeight={lineHeight}
                    placeHolderFontSize={placeHolderFontSize}
                    paddingX={paddingX}
                    paddingY={paddingY}
                    ref={forwardedRef}
                    maxLength={maxLength}
                    minLength={minLength}
                    radius={radius}
                    readOnly={readOnly}
                    {...rest}
                />
                {!disabled && error && (
                    <Styled.HelperText
                        error={error}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        lineHeight={lineHeight}
                        paddingX={paddingX}
                        paddingY={paddingY}
                    >
                        {helperIcon || null} {helperText}
                    </Styled.HelperText>
                )}
            </Styled.InputContainer>
        </Styled.Wrapper>
    );
});

export default TextFiled;
