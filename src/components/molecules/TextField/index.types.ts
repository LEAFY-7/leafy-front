import type { CSSProperties, ChangeEvent, ElementType, HTMLAttributes, ReactNode } from 'react';
import styleConfig from 'configs/style.config';

export interface TextFieldProps {
    fontSize?: keyof typeof styleConfig.theme.fontSize;
    lineHeight?: keyof typeof styleConfig.theme.lineHeight;
    fontWeight?: CSSProperties['fontWeight'];
    paddingX?: number;
    paddingY?: number;
    error?: boolean;
}
export interface TextFieldInputProps extends TextFieldProps {
    radius?: number;
    helperText?: string;
    placeHolderFontSize?: keyof typeof styleConfig.theme.fontSize;
    disabled?: boolean;
    readOnly?: boolean;
}
export interface TextFieldHelperText extends HTMLAttributes<HTMLElement>, TextFieldProps {
    helperText?: string;
}
export interface IconProps {
    disabled?: boolean;
}

export interface Props extends HTMLAttributes<HTMLElement>, TextFieldProps, TextFieldInputProps {
    hookForm?: boolean;
    value?: string;
    type: 'text' | 'password';
    placeholder?: string;
    labelTitle?: string;
    leftIcon?: ReactNode;
    helperIcon?: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
