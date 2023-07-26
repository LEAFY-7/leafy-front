import PageContainer from 'components/templates/page-container';
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
        <PageContainer>
            <div>feed</div>
        </PageContainer>
    );
}
