import PageContainer from 'components/templates/page-container';
import Typography from 'components/atoms/Typograph/default-typography';
import SearchBar from 'components/molecules/Search/searchbar';
import NoticeList from 'components/organisms/List/noticeList';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import Box from 'components/atoms/Box/default-box';
import PageButton from 'components/organisms/Pagination/pagebutton';
import Button from 'components/atoms/Button/button';

import { NoticeDto } from 'dto/notice/notice.dto';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import LeaveModal from 'components/organisms/LeaveModal/leaveModal';

const NoticeView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);

    useEffect(() => {
        noticeViewModel.getMe();
        noticeViewModel.getNoticeData();
    }, []);
    /* 페이지네이션에 필요한 변수들 */
    //1. PageButton에 들어갈 상태 - 현재 페이지를 데려옴
    const [page, setPage] = useState<number>(1);
    //2. 한번에 보여줄 리스트 개수
    const limit = 3;
    //3. 한번에 보여줄 리스트의 시작지점
    const offset = (page - 1) * limit;

    //getMe를 이용해서 등록하기 버튼 분기처리
    const isAdmin = true; // noticeViewModel.me.isAdmin || false;
    const [open, setOpen] = useState<boolean>(false);

    const onOpenChange = () => {
        setOpen(true);
    };
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

            <NoticeWrap>
                {noticeViewModel.noticeList.slice(offset, offset + limit).map((item: NoticeDto) => {
                    return <NoticeList item={item} titleColor="black" />;
                })}
            </NoticeWrap>
            <PageButton
                limit={limit}
                target={noticeViewModel.noticeList.length}
                page={page}
                setPage={setPage}
            />
            <div style={{ display: `flex`, marginLeft: `auto` }}>
                {isAdmin && (
                    <LinkWrapper to="/notice/upload">
                        <Button
                            type="button"
                            state="default"
                            variant="primary"
                            size="l"
                            text="등록하기"
                            showText={true}
                            showIcon={false}
                        />
                    </LinkWrapper>
                )}
            </div>
            <LeaveModal
                open={open}
                onOpenChange={onOpenChange}
                toggleEl={
                    <Button
                        variant="primary"
                        size="l"
                        type="button"
                        state="default"
                        text="toggle"
                        showText={true}
                        showIcon={false}
                        showDrop={true}
                    />
                }
                onLeave={() => {}}
            ></LeaveModal>
        </PageContainer>
    );
};

export default observer(NoticeView);

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
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;

const Title = styled.span`
    flex-grow: 1;
`;

const Date = styled.span`
    flex-grow: 0.15;
`;
