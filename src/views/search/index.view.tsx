import styled from '@emotion/styled';
import Typography from 'components/atoms/Typograph/default-typography';
import SearchBar from 'components/molecules/Search/searchbar';
import Feed from 'components/organisms/Feed/feed';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import { FeedDto } from 'dto/feed/feed.dto';
import SearchDto from 'dto/search/search.dto';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';

/**
 * 검색결과 리스트
 */
const SearchView = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        searchViewModel.getList();
        mainViewModel.getMainData();
    }, []);
    const handleChangeQuery = (query): void => {
        setQuery(query.value);
    };
    const handleSubmitQuery = (query): void => {
        const searchQuery = query.value;
    };
    const [query, setQuery] = useState<string>('');

    const ref = useIntersectionObserver(mainViewModel.getMainData);

    return (
        <PageContainer>
            <SearchBar
                placeholder="어떤 식물인가요?"
                value={query}
                onChange={handleChangeQuery}
                onSubmit={handleSubmitQuery}
            />
            <PlantTitle>
                <Typography variant="BODY1" textAlign="center">
                    경매일자
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    화훼부류명
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    품목명
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    품종명
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    등급명
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    최고가
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    최저가
                </Typography>
                <Typography variant="BODY1" textAlign="center">
                    평균가
                </Typography>
            </PlantTitle>
            <>
                {searchViewModel.list ? (
                    searchViewModel.list.map((list: SearchDto, key: number) => {
                        return (
                            <PlantList key={`plant_list_${key}`}>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.saleDate}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.flowerGubn}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.goodName}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.pumName}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.lv}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.maxAmt}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.minAmt}
                                </Typography>
                                <Typography variant="BODY1" textAlign="center">
                                    {list.avgAmt}
                                </Typography>
                            </PlantList>
                        );
                    })
                ) : (
                    <>
                        <Typography variant="H3">식물 거래 정보를 불러오지 못했습니다</Typography>
                        <Typography variant="BODY2">식집사들의 이야기에서 찾아보아요!</Typography>
                    </>
                )}
            </>
            <>
                <>
                    {mainViewModel.feedList.map((feed: FeedDto, key: number) => {
                        return <Feed data={feed} key={`home_list_${key}`} />;
                    })}
                    <Target ref={ref} />
                </>

                {mainViewModel.me.user.userId ? (
                    <Typography variant="H1" color="primary" textAlign="center">
                        피드를 업로드 해주세요!
                    </Typography>
                ) : (
                    <>
                        <Typography variant="H1" color="primary" textAlign="center">
                            로그인 후 더 많은 콘텐츠를 즐겨보세요!
                        </Typography>
                        <Link to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}>로그인 / 회원가입</Link>
                    </>
                )}
            </>
        </PageContainer>
    );
};

export default observer(SearchView);

const PlantTitle = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 280px;
    background: ${theme.colors.white};
    margin: 40px auto;
    box-shadow: 5px 5px 10px 0px rgba(14, 17, 27, 0.15);
    & * {
        margin: auto;
        padding: 0 10px;
    }
`;

const PlantList = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 280px;
    background: ${theme.colors.white};
    & * {
        margin: auto;
        padding: 0 10px;
    }
`;

const Title = styled.h4`
    width: 100%;
    font-family: SUIT;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    margin: 0;

    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Target = styled.div`
    height: 1px;
`;
