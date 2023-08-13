import styled from '@emotion/styled';
import DefaultTextarea from 'components/atoms/Textarea/default-textarea';
import { theme } from 'configs/ui.config';
import { ChangeEvent, ChangeEventHandler, FormEventHandler, ReactElement } from 'react';

interface Props {
    value: string;
    onChange: FormEventHandler;
}

const TextArea = ({ value, onChange }: Props): ReactElement => {
    return (
        <DefaultTextarea
            value={value}
            onChange={onChange}
            style={{
                resize: `none`,
                width: `100%`,
                height: `456px`,
                backgroundColor: `${theme.colors.white}`,
                padding: `8px`,
                borderRadius: `12px`,
                boxShadow: `0 5px 10px 0 ${theme.colors.lgrey}`,
            }}
        ></DefaultTextarea>
    );
};

export default TextArea;

const TextAreaStyle = styled.textarea`
    resize: none;
    width: 100%;
    height: 456px;
    background-color: ${theme.colors.white};
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;
