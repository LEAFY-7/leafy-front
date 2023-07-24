import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

import { FeedDto } from 'dto/feed/feed.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';

import Card from 'components/organisms/Card';
import MonoTemplate from 'components/templates/mono-template';
import Button from 'components/atoms/Button/button';
import { css } from '@emotion/react';

function Home() {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getMainData();
    }, []);

    return (
        <>
            <MonoTemplate
                height={100}
                mainSection={
                    <>
                        <Button
                            size="l"
                            state="default"
                            variant="primary"
                            text="검색"
                            showIcon={true}
                            showText={false}
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
    grid-template-columns: repeat(4, 1fr);
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
