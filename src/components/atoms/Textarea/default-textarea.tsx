/** @jsxImportSource @emotion/react */
import React from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import useVariant from 'hooks/useVariant';
import textareaStyle from './textarea.style';

export type TextareaVariant = 'default' | 'primary' | 'secondary';
export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextareaProps {
    value?: HTMLTextAreaElement['value'];
    name?: HTMLTextAreaElement['name'];
    variant?: TextareaVariant;
    size?: TextareaSize;

    fontSize?: keyof typeof theme.fontSize;
    color?: keyof typeof theme.colors;
    placeholderColor?: keyof typeof theme.colors;
    fontWeight?: keyof typeof theme.fontWeight;
    backgroundColor?: keyof typeof theme.colors;
    borderColor?: keyof typeof theme.colors;
    margin?: CSSProperties['margin'];
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    opacity?: number;
    textAlign?: CSSProperties['textAlign'];
    letterSpacing?: CSSProperties['letterSpacing'];
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    boxShadow?: CSSProperties['boxShadow'];
    radius?: number;
    isBorder?: boolean;
}
type Props = React.PropsWithChildren<TextareaProps> & HTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef(function Textarea(
    {
        value = '',
        name = '',
        variant = 'default',
        size = 'md',
        width = 'inherit',
        height = 'inherit',
        fontSize,
        fontWeight = 'regular',
        color = 'inherit',
        backgroundColor = 'inherit',
        placeholderColor = 'inherit',
        textAlign = 'left',
        letterSpacing = 'inherit',
        margin = 0,
        marginTop = 8,
        marginRight = 8,
        marginBottom = 8,
        marginLeft = 8,
        paddingTop = 8,
        paddingRight = 8,
        paddingBottom = 8,
        paddingLeft = 8,
        boxShadow = 'inherit',
        opacity = 1,
        isBorder = false,
        children,
        ...rest
    }: React.PropsWithChildren<Props>,
    forwardedRef: React.Ref<HTMLTextAreaElement>,
) {
    const { width: w, height: h, fontSize: newFontSize, radius, borderWidth } = textareaStyle.sizeBox[size];
    const textareaVariant = useVariant({ variant: variant, callback: textareaStyle.variantStyles });
    const defaultTextareaStyle = css`
        width: ${width === 'inherit' ? w + 'px' : typeof width === 'number' ? `${width}%` : width};
        height: ${height === 'inherit' ? h + 'px' : typeof height === 'number' ? `${height}%` : height};
        font-size: ${theme.fontSize[fontSize]};
        font-weight: ${fontWeight};
        text-align: ${textAlign};
        letter-spacing: ${letterSpacing};
        margin: ${margin && margin};
        margin-top: ${marginTop + 'px'};
        margin-bottom: ${marginBottom + 'px'};
        margin-left: ${marginLeft + 'px'};
        margin-right: ${marginRight + 'px'};
        padding-top: ${paddingTop + 'px'};
        padding-left: ${paddingLeft + 'px'};
        padding-right: ${paddingRight + 'px'};
        padding-bottom: ${paddingBottom + 'px'};
        border: ${isBorder && 'solid'};
        border-width: ${isBorder ? 2 + 'px' : 0};
        border-width: ${isBorder ? borderWidth + 'px' : 0};
        border-radius: ${radius + 'px'};
        border-style: solid;
        border-width: 1px;
        box-shadow: ${boxShadow};
        opacity: ${opacity};
        box-sizing: border-box;
        font-size: ${!fontSize ? newFontSize + 'rem' : theme.fontSize[fontSize]};

        ${textareaVariant}
        ::-webkit-scrollbar {
            display: none;
        }

        ::placeholder {
            color: ${placeholderColor};
        }
        background-color: ${theme.colors[backgroundColor]};
        color: ${color && theme.colors[color]};
    `;

    return <textarea value={value} name={name} ref={forwardedRef} {...rest} css={defaultTextareaStyle} />;
});

export default Textarea;
