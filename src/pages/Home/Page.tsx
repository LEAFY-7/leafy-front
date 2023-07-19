import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

import styleConfig from 'configs/style.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { FeedDto } from 'dto/feed/feed.dto';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';

import Typography from 'components/atoms/Typograph/default-typography';
import SearchBar from 'components/molecules/Search';
import Card from 'components/organisms/Card';
import MonoTemplate from 'components/templates/mono-template';
import Button from 'commons/tokens/button';
import { css } from '@emotion/react';
import { buttonSize } from 'commons/tokens/button.style';

function Home() {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getList();
    }, []);

    return (
        <>
            <MonoTemplate
                height={100}
                mainSection={
                    <>
                        <SearchWrap>
                            <TitleWrap>
                                <Typography
                                    as={'h1'}
                                    variant="H1"
                                    style={{ color: styleConfig.theme.colors.green }}
                                    textAlign="center"
                                >
                                    식물 정보를 찾고있나요?
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
                        <Button
                            size="xl"
                            state="default"
                            variant="secondary"
                            text="검색"
                            showIcon={true}
                            showText={true}
                        />
                        <CardWrap>
                            {mainViewModel.feedList.map((item: FeedDto, key: number) => {
                                return <Card item={item} key={`feed_card_${key}`} />;
                            })}
                        </CardWrap>
                    </>
                }
            />
        </>
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
