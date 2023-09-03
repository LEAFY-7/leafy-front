import styled from '@emotion/styled';
import Card from 'components/organisms/Card';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import { FeedDto } from 'dto/feed/feed.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';
import Button from 'components/atoms/Button/button';
import Typography from 'components/atoms/Typograph/default-typography';
import { theme } from 'configs/ui.config';

import ChatIcon from 'components/atoms/Icon/chat-icon';
/**
 * 메인페이지
 */
const HomeView = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getMainData();
        mainViewModel.getMe();
        // mainViewModel.test();
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

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;

const IconWrapper = styled.div`
    cursor: pointer;
    position: fixed;
    right: 5%;
    bottom: 5%;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    z-index: 5;
`;
