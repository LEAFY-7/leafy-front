import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from 'components/atoms/Button/button';
import Flex from 'components/atoms/Group/flex';
import { Input } from 'components/atoms/Input';
import { theme } from 'configs/ui.config';
import { CSSProperties, ChangeEventHandler, ReactElement, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface IProps {
    value?: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler;
    dataset?: { [key: string]: string | number };
    name?: string;
    style?: CSSProperties;
    placeholder?: string;
    isFilter?: boolean;
}
const SearchStyle = styled.form`
    display: flex;
    width: 400px;
    color: ${theme.colors.black};
    border-radius: 20px;
    overflow: hidden;
`;
const SearchBtnStyle = styled.button`
    background: ${theme.colors.white};
    min-width: 40px;
    flex-basis: 10%;
    flex-shrink: 0;
    height: 100%;
    padding: 20px 10px;
`;

const SearchInputStyle = styled.input`
    background: ${theme.colors.white};
    flex-grow: 1;
    flex-basis: 90%;
    height: 100%;
    padding: 20px;
`;

const focusStyle = styled(SearchStyle)`
    outline: 1px solid ${theme.colors.primary};
`;
export default function Search(props: IProps): ReactElement {
    const [text, setText] = useState('');
    const [focus, setFocus] = useState(false);
    const { isFilter = false, value, required, onChange, dataset, name, style, placeholder } = props;
    const icon = <AiOutlineSearch />;
    const onFocus = () => setFocus(true);
    const onBlur = (e) => {
        setText(e.target.value);
        setFocus(false);
    };

    const FormStyle = focus ? focusStyle : SearchStyle;
    return (
        <FormStyle>
            {isFilter && <></>}
            <SearchInputStyle
                value={value}
                required={required}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                // dataset={dataset}
                name={name}
                placeholder={placeholder}
            />

            <SearchBtnStyle>{icon}</SearchBtnStyle>
        </FormStyle>
    );
}
