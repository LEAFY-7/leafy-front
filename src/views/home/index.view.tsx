import styled from '@emotion/styled';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';
import Typography from 'components/atoms/Typograph/default-typography';

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
            <Typography variant="H1" color="primary" textAlign="center">
                식집사들의 커뮤니티
            </Typography>
            {/* 카드 리스트 */}
            {!mainViewModel.me.name && (
                <Typography variant="H1" color="primary" textAlign="center">
                    로그인 후 더 많은 콘텐츠를 즐겨보세요!
                </Typography>
            )}
        </PageContainer>
    );
};

export default observer(HomeView);
