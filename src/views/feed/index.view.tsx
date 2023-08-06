import styled from '@emotion/styled';
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

    return (
        <PageContainer>
            {feedViewModel.list.map((feed: FeedDto, key: number) => {
                return <ListItem key={`feed_list_${key}`}>{feed.title}</ListItem>;
            })}
        </PageContainer>
    );
};

export default observer(FeedView);

const ListItem = styled.div`
    border-radius: 8px;
`;
