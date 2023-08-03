import type { HTMLAttributes } from 'react';
import React from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';

interface TextareaStyleProps {
    error?: boolean;
    isBorder?: boolean;

    fontSize?: keyof typeof theme.fontSize;
    placeholderColor?: keyof typeof theme.colors;
    fontWeight?: keyof typeof theme.fontWeight;
    colors?: keyof typeof theme.colors;
    backgroundColor?: keyof typeof theme.colors;
    borderColor?: keyof typeof theme.colors;
}

interface TextareaProps extends TextareaStyleProps {
    value: HTMLTextAreaElement['value'];
    readOnly?: HTMLTextAreaElement['readOnly'];
    disabled?: HTMLTextAreaElement['disabled'];
    placeholder?: HTMLTextAreaElement['placeholder'];
    maxLength?: HTMLTextAreaElement['maxLength'];
}

type Props = React.PropsWithChildren<TextareaProps> & Omit<HTMLAttributes<HTMLTextAreaElement>, 'color'>;

const DefaultTextarea = React.forwardRef(function DefaultTextarea(
    {
        value = '',
        placeholder = '',
        disabled = false,
        readOnly = false,
        error = false,
        maxLength = 999999,

        isBorder = false,
        fontSize = 'md',
        fontWeight = 'regular',
        colors = 'black',
        backgroundColor = 'lgrey_50',
        placeholderColor = 'grey',
        borderColor = 'inherit',
        children,
        ...rest
    }: Props,
    forwardedRef: React.Ref<HTMLTextAreaElement>,
) {
    return (
        <Textarea
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            maxLength={maxLength}
            ref={forwardedRef}
            fontSize={fontSize}
            fontWeight={fontWeight}
            colors={colors}
            placeholderColor={placeholderColor}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            isBorder={isBorder}
            {...rest}
        />
    );
});

export default DefaultTextarea;

const Textarea = styled.textarea<Required<TextareaStyleProps>>`
    resize: none;
    border-radius: 8px;
    padding: 4px;
    border: ${({ isBorder }) => (isBorder ? '1px' : 0)};
    font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
    font-weight: ${({ theme, fontWeight }) => theme.fontWeight[fontWeight]};

    color: ${({ theme, colors }) => theme.colors[colors]};
    background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
    border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};

    &::placeholder {
        color: ${({ theme, placeholderColor }) => theme.colors[placeholderColor]};
    }
    &:focus {
        background-color: ${({ theme }) => theme.colors.lgrey};
        color: ${({ theme }) => theme.colors.black};
    }

    &:disabled {
        border: none;
        background-color: ${({ theme }) => theme.colors.grey};
        color: ${({ theme }) => theme.colors.white};
    }

    ${({ error, theme }) =>
        error &&
        css`
            border-color: ${theme.colors.sementic};
            border-style: solid;
            border-width: 1.5px;
        `}

    &::placeholder {
        ${theme.mediaQuery.xsMobile} {
            font-size: ${theme.fontSize.xxs};
        }

        ${theme.mediaQuery.smMobile} {
            font-size: ${theme.fontSize.xxs};
        }

        ${theme.mediaQuery.mdMobile} {
            font-size: ${theme.fontSize.sm};
        }

        ${theme.mediaQuery.lgMobile} {
            font-size: ${theme.fontSize.sm};
        }
    }
`;
