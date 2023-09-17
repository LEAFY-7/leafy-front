import styled from '@emotion/styled';
import ChatIcon from 'components/atoms/Icon/chat-icon';
import Typography from 'components/atoms/Typograph/default-typography';
import Feed from 'components/organisms/Feed/feed';
import FeedButtons from 'components/organisms/Feed/feedButtons';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import { FeedDto } from 'dto/feed/feed.dto';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainViewModel from 'viewModel/main/main.viewModel';
/**
 * 메인페이지
 */
const HomeView = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);

    useEffect(() => {
        mainViewModel.getMainData();
        // mainViewModel.getMe();
        //mainViewModel.test();
    }, []);

    const ref = useIntersectionObserver(mainViewModel.getMainData);
    return (
        <PageContainer>
            <Typography variant="H1" color="primary" textAlign="center">
                식집사들의 커뮤니티
            </Typography>
            <div>
                {mainViewModel.feedList.data.map((feed: FeedDto, key: number) => {
                    return (
                        <div key={`feed_list_${key}`}>
                            <Feed data={feed} />
                            <Title>{feed.title}</Title>
                            <FeedButtons />
                        </div>
                    );
                })}
                <Target ref={ref} />
            </div>

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
