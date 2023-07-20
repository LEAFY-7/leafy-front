import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FeedViewModel from 'viewModel/feed/feed.viewModel';

export default function FeedDetail() {
    const feedViewModel: FeedViewModel = useViewModel(ViewModelName.FEED);
    const { id } = useParams();

    useEffect(() => {
        feedViewModel.getMe();
        feedViewModel.getDetail(+id);
    });

    return (
        <Container>
            {/* <UserProfile data={feedViewModel.user} /> */}
            <p>ㅎ하이</p>
        </Container>
    );
}

const Container = styled.div`
    & p {
        font-size: 40px;
    }
`;
