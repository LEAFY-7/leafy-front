import type { CSSProperties, ChangeEvent, ElementType, HTMLAttributes, ReactNode } from 'react';
import { theme } from 'configs/ui.config';

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
}
export interface TextFieldHelperText extends HTMLAttributes<HTMLElement>, TextFieldProps {
    helperText?: string;
}
export interface IconProps {
    disabled?: boolean;
}

export interface Props extends HTMLAttributes<HTMLElement>, TextFieldProps, TextFieldInputProps {
    hookForm?: boolean;
    value?: string | number;
    type: 'text' | 'password' | 'date' | 'number';
    placeholder?: string;
    labelTitle?: string;
    leftIcon?: ReactNode;
    helperIcon?: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
