import styled from '@emotion/styled';
import Button from 'components/atoms/Button/button';
import { Input } from 'components/atoms/Input';
import SearchBar from 'components/molecules/Search/searchbar';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect, useState } from 'react';
import SearchViewModel from 'viewModel/search/search.viewModel';

/**
 * 검색결과 리스트
 */
const SearchView = () => {
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        searchViewModel.getList();
    }, []);
    const handleChangeQuery = (query): void => {
        setQuery(query.value);
    };
    const [query, setQuery] = useState<string>('');
    return (
        <PageContainer>
            <SearchBar placeholder="어떤 식물인가요?" value={query} onChange={handleChangeQuery} />
        </PageContainer>
    );
};

export default SearchView;
