import type { HTMLAttributes, CSSProperties } from 'react';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface InputStyleProps {
    error?: boolean;
}

interface InputProps extends InputStyleProps {
    value: HTMLInputElement['value'];
    type: HTMLInputElement['type'];
    readOnly?: HTMLInputElement['readOnly'];
    disabled?: HTMLInputElement['disabled'];
    placeholder?: HTMLInputElement['placeholder'];
    style?: CSSProperties;
}

type Props = React.PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;

const DefaultInput = (
    {
        value = '',
        type = 'text',
        placeholder = '',
        disabled = false,
        readOnly = false,
        error = false,
        style,
        ...rest
    }: Props,
    forwardedRef: React.Ref<HTMLInputElement>,
) => {
    return (
        <Input
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            style={style}
            ref={forwardedRef}
            {...rest}
        />
    );
};

export default forwardRef(DefaultInput);

const Input = styled.input<Required<InputStyleProps>>`
    background-color: ${({ theme }) => theme.colors.lgrey_50};
    border-radius: 8px;
    padding: 4px;

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
`;
