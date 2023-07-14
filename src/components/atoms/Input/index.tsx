import styleConfig from 'configs/style.config';
import styled from '@emotion/styled';
import { CSSProperties, ChangeEventHandler, ReactElement } from 'react';

interface IProps {
    value: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler;
    dataset?: { [key: string]: string | number };
    name?: string;
    style?: CSSProperties;
    placeholder?: string;
}

export function Input(props: IProps): ReactElement {
    const { value, onChange, name, dataset, required = false, style, placeholder } = props;

    return (
        <DefaultInput
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            style={style}
            placeholder={placeholder}
            {...dataset}
        />
    );
}

const DefaultInput = styled.input`
    width: 470px;
    height: 60px;
    padding: 16px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: ${({ theme }) => theme.lineHeight.lg};

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey};

    &::placeholder {
        color: ${({ theme }) => theme.colors.grey};
    }
`;
