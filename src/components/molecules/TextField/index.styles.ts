import styled from '@emotion/styled';
import { TextFieldProps, TextFieldInputProps, IconProps } from './index.types';
import { css } from '@emotion/react';

export const Wrapper = styled.div<Required<TextFieldProps>>`
    display: flex;
    flex-direction: column;
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const Label = styled.label<Required<TextFieldProps>>`
    font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
    margin-bottom: 1rem;
`;

export const Icon = styled.div<Required<IconProps>>`
    position: absolute;
    left: 0;
    top: 10px;
    padding-left: 5px;
    color: ${({ disabled, theme }) => (disabled ? theme.colors.white : theme.colors.grey)};
`;
export const Input = styled.input<Required<TextFieldInputProps>>`
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX + 20}px`};
    border-width: 1px;
    border-style: solid;
    border-radius: ${({ radius }) => `${radius}px`};
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
    font-weight: ${({ fontWeight }) => fontWeight};
    opacity: 1;
    border-color: ${({ error, theme }) => (error ? `${theme.colors.red}` : `${theme.colors.grey}`)};

    &:focus {
        border-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.inherit};
        + .iconBox {
            color: ${({ theme }) => theme.palette.text.black};
        }
    }
    &::placeholder {
        font-size: ${({ placeHolderFontSize, theme }) => theme.fontSize[placeHolderFontSize]};
    }

    ${({ disabled, theme }) =>
        disabled &&
        css`
            &:disabled {
                border-color: ${theme.colors.grey};
                background-color: ${theme.colors.grey};
                color: ${theme.colors.white};
            }
        `}
`;

export const HelperText = styled.span<Required<TextFieldProps>>`
    width: 100%;
    padding: ${({ paddingX, paddingY }) => `${paddingY - 12}px ${paddingX - 4}px`};

    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ error, theme }) => error && theme.colors.red};
    text-align: left;
    font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
    font-weight: calc(${({ fontWeight }) => fontWeight} - 200);
    line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
