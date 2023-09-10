import { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import tokenModule from 'modules/token.module';

import PageContainer from 'components/templates/page-container';
import Typography from 'components/atoms/Typograph/default-typography';
import ChatIcon from 'components/atoms/Icon/chat-icon';
import { theme } from 'configs/ui.config';
import pageUrlConfig from 'configs/pageUrl.config';
import Feed from 'components/organisms/Feed/feed';
import { FeedDto } from 'dto/feed/feed.dto';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
/**
 * 메인페이지
 */
const HomeView = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);
    const searchViewModel: SearchViewModel = useViewModel(ViewModelName.SEARCH);

    useEffect(() => {
        mainViewModel.getMainData();
        mainViewModel.getMe();
    }, []);

    const ref = useIntersectionObserver(mainViewModel.getMainData);
    return (
        <PageContainer>
            <Typography variant="H1" color="primary" textAlign="center">
                식집사들의 커뮤니티
            </Typography>
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

            {mainViewModel.me.user.userId ? (
                <IconWrapper>
                    <ChatIcon to={pageUrlConfig.chat} count={3} />
                </IconWrapper>
            ) : null}
        </PageContainer>
    );
};

export default observer(HomeView);

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

const Target = styled.div`
    height: 1px;
`;
