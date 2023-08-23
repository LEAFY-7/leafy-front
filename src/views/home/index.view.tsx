import styled from '@emotion/styled';
import Card from 'components/organisms/Card';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import { FeedDto } from 'dto/feed/feed.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { BsChatDots as ChatIcon } from 'react-icons/bs';

import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';

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
        <>
            <PageContainer>
                <CardWrap>
                    {mainViewModel.feedList.map((item: FeedDto, key: number) => {
                        return <Card item={item} key={`feed_card_${key}`} />;
                    })}
                </CardWrap>
                <CardWrap>
                    {mainViewModel.feedList.map((item: FeedDto, key: number) => {
                        return <Card item={item} key={`feed_card_${key}`} />;
                    })}
                </CardWrap>
                <ChatIconWrapper>
                    <ChatIcon size={30} />
                    <Alarm>N</Alarm>
                </ChatIconWrapper>
            </PageContainer>
        </>
    );
};

export default observer(HomeView);

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;

const ChatIconWrapper = styled.div`
    cursor: pointer;
    position: fixed;
    right: 5%;
    bottom: 20%;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
`;
const Alarm = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(20%, -50%);
    background-color: ${theme.colors.sementic};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
`;
