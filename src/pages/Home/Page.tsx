import Card from '@components/Card';
import SearchBar from '@components/Search';
import Typography from '@components/ui/Typograph';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from '@hooks/useViewModel';
import theme from '@styles/theme';
import { FeedDto } from 'dto/feed/feed.dto';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';

function Home() {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getList();
    }, []);

    return (
        <div>
            <SearchWrap>
                <TitleWrap>
                    <Typography
                        as={'h1'}
                        variant="H1"
                        style={{ color: theme.colors.green }}
                        textAlign="center"
                    >
                        식물 정보를 찾고 있나요?
                    </Typography>
                    <Typography variant="BODY3" textAlign="center">
                        실시간 식물 거래 정보를 확인해보세요
                    </Typography>
                </TitleWrap>
                <SearchBar
                    value={searchViewModel.searchModel.keyword}
                    onChange={searchViewModel.handleChangeKeyword}
                    placeholder={'WRITE YOUR PLANT'}
                />
            </SearchWrap>
            <CardWrap>
                {mainViewModel.feedList.map((item: FeedDto, key: number) => {
                    return <Card item={item} key={`feed_card_${key}`} />;
                })}
            </CardWrap>
        </div>
    );
}

export default observer(Home);

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
`;

const SearchWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const TitleWrap = styled.div`
    width: 100%;

    & span {
        width: 100%;
    }
`;
