import styled from '@emotion/styled';
import Card from 'components/organisms/Card';
import PageContainer from 'components/templates/page-container';
import { FeedDto } from 'dto/feed/feed.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';
import Button from 'components/atoms/Button/button';

/**
 * 메인페이지
 */
const HomeView = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getMainData();
    }, []);

    return (
        <PageContainer>
            <CardWrap>
                {mainViewModel.feedList.map((item: FeedDto, key: number) => {
                    return <Card item={item} key={`feed_card_${key}`} />;
                })}
            </CardWrap>
        </PageContainer>
    );
};

export default observer(HomeView);

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;
