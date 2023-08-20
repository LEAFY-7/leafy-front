import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import { ChangeEventHandler } from 'react';

interface Props {
    onChange: ChangeEventHandler;
    label: string;
}

const CheckBox = ({ onChange, label = '' }: Props) => {
    return (
        <Label>
            <Check type="checkbox" onChange={onChange}></Check>
            <FakeCheckBox />
            {label}
        </Label>
    );
};

export default CheckBox;

const Check = styled.input`
    appearance: none;

    &:checked + div::before {
        content: 'v';
        color: ${theme.colors.white};
        font-weight: ${theme.fontWeight.bold};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const FakeCheckBox = styled.div`
    width: 1.2em;
    height: 1.2em;
    border-radius: 4px;
    background: ${theme.colors.secondary};
    position: relative;
`;

const Label = styled.label`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: 4px;
    flex-basis: 100px;
`;
