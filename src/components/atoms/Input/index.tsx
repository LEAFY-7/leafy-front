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
    children?: ReactElement | ReactElement[];
}

export function Input(props: IProps): ReactElement {
    const { value, onChange, name, dataset, required = false, style, placeholder, children } = props;

    return (
        <Container>
            <DefaultInput
                value={value}
                onChange={onChange}
                name={name}
                required={required}
                style={style}
                placeholder={placeholder}
                {...dataset}
            />
            {children && <ChildrenWrap>{children}</ChildrenWrap>}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const DefaultInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 4px 16px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: ${({ theme }) => theme.lineHeight.lg};
    background: #fff;
    border-radius: 8px;
    // border: 1px solid ${({ theme }) => theme.colors.grey};

    // -webkit-box-shadow: -2px 2px 12px 4px rgba(0, 0, 0, 0.4);
    // box-shadow: -2px 2px 12px 4px rgba(0, 0, 0, 0.4);

    &::placeholder {
        color: ${({ theme }) => theme.colors.grey};
    }
`;

const ChildrenWrap = styled.div`
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(0, -50%);

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
