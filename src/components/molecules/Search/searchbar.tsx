import styled from '@emotion/styled';
import Button from 'components/atoms/Button/button';
import { Input } from 'components/atoms/Input';
import { theme } from 'configs/ui.config';
import { ChangeEventHandler, FormEventHandler, ReactElement, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pathname, useLocation, useNavigate } from 'react-router-dom';

interface IProps {
    value?: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    dataset?: { [key: string]: string | number };
    name?: string;
    placeholder?: string;
    isFilter?: boolean;
    pathname?: Pathname;
}

const SearchBar = (props: IProps): ReactElement => {
    // const [searchResults, setSearchResults] = useState([]);
    // const navigate = useNavigate();
    // const { pathname } = useLocation();

    const { isFilter = false, value, required, onChange, onSubmit, dataset, name, placeholder } = props;

    const icon = <AiOutlineSearch />;
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     navigate(`${pathname}?q=${search}`);
    // };

    // const useQuery = () => {
    //     return new URLSearchParams(useLocation()[pathname]);
    // };

    // let query = useQuery();
    // const searchTerm = query.get('q');

    // useEffect(() => {
    //     if (searchTerm) fetchSearch(searchTerm);
    // }, [searchTerm]);

    // const fetchSearch = async (searchTerm) => {
    //     try {
    //         const request = await axios.get('');
    //         setSearchResults(request.data.results);
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // };

    return (
        <SearchStyle onSubmit={onSubmit}>
            {isFilter && <></>}
            <SearchInputStyle
                value={value}
                required={required}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
            <SearchBtnStyle>{icon}</SearchBtnStyle>
        </SearchStyle>
    );
};

export default SearchBar;

const SearchStyle = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    border-radius: 20px;
    overflow: hidden;
    padding: 0 0.5em;
    margin: auto;
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
    flex-grow: 1;
    flex-basis: 90%;
    height: 100%;
    padding: 20px;
    &:focus {
        color: ${theme.colors.primary};
    }
`;
