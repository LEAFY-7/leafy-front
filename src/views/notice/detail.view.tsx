import styled from '@emotion/styled';
import Box from 'components/atoms/Box/default-box';
import Button from 'components/atoms/Button/button';
import Typography from 'components/atoms/Typograph/default-typography';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import SearchBar from 'components/molecules/Search/searchbar';
import NoticeList from 'components/organisms/List/noticeList';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';

/**
 * 공지사항 상세
 */
const NoticeDetailView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        noticeViewModel.getNoticeDetail(id);
        noticeViewModel.getMe();
    }, []);
    //게시글 제목 클릭시 직전 페이지로 이동
    const onClickToBack = () => {
        navigate(-1);
    };

    const offset = noticeViewModel.detail;
    const isAdmin = true; //noticeViewModel.me.isAdmin || false;
    return (
        <PageContainer>
            <Box marginBottom={96} marginTop={96}>
                <LinkWrapper to="/notice">
                    <Typography variant="H2" textAlign="center" color="primary" marginBottom={16}>
                        공지사항
                    </Typography>
                </LinkWrapper>
                <SearchBar placeholder="공지 검색" />
            </Box>
            <Typography variant="BODY2" color="white" textAlign="center" marginBottom={25}>
                <NoticeTitle>
                    <span>게시글 번호</span>
                    <Title>제목</Title>
                    <span>조회수</span>
                    <Date>날짜</Date>
                </NoticeTitle>
            </Typography>
            <NoticeWrap onClick={onClickToBack}>
                <NoticeList item={offset} titleColor="black" />
            </NoticeWrap>
            <NoticeContent>{noticeViewModel.detail.content}</NoticeContent>
            {isAdmin && (
                <div style={{ display: `flex`, marginLeft: `auto`, gap: `16px` }}>
                    <LinkWrapper to="/notice/edit">
                        <Button
                            type="button"
                            state="default"
                            variant="primary"
                            size="l"
                            text="수정하기"
                            showText={true}
                            showIcon={false}
                        />
                    </LinkWrapper>
                    <LinkWrapper to="/notice/edit">
                        <Button
                            type="button"
                            state="default"
                            variant="primary"
                            size="l"
                            text="삭제하기"
                            showText={true}
                            showIcon={false}
                        />
                    </LinkWrapper>
                </div>
            )}
        </PageContainer>
    );
};

export default observer(NoticeDetailView);

const NoticeContent = styled.div`
    padding: 16px;
    margin: 8px auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;

const NoticeWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;

const NoticeTitle = styled.div`
    display: flex;
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: 12px;
    flex-basis: 10%;
    flex-shrink: 0;
    gap: 16px;
    padding: 1em;
`;

const Title = styled.span`
    flex-grow: 1;
`;

const Date = styled.span`
    flex-grow: 0.15;
`;
