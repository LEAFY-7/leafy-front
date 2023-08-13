import styled from '@emotion/styled';
import Feed from 'components/organisms/Feed/feed';
import FeedButtons from 'components/organisms/Feed/feedButtons';
import Followers from 'components/organisms/Feed/followers';
import PageContainer from 'components/templates/page-container';
import { FeedDto } from 'dto/feed/feed.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import FeedViewModel from 'viewModel/feed/feed.viewModel';

/**
 * 피드 리스트
 */
const FeedView = () => {
    const feedViewModel: FeedViewModel = useViewModel(ViewModelName.FEED);

    useEffect(() => {
        feedViewModel.getList();
    }, []);

    console.log(feedViewModel.followers);

    return (
        <PageContainer style={{ paddingTop: '80px' }}>
            <Followers list={feedViewModel.followers} />
            <FeedListWrap>
                {feedViewModel.list.map((feed: FeedDto, key: number) => {
                    return (
                        <>
                            <Feed key={`feed_list_${key}`} data={feed} />
                            <Title>{feed.title}</Title>
                            <FeedButtons />
                        </>
                    );
                })}
            </FeedListWrap>
        </PageContainer>
    );
};

export default observer(FeedView);

const FeedListWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;
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
