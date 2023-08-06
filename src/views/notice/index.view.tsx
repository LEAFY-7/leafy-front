import PageContainer from 'components/templates/page-container';
import Typography from 'components/atoms/Typograph/default-typography';
import SearchBar from 'components/molecules/Search/searchbar';
import SearchResults from 'components/molecules/Search/result';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import Box from 'components/atoms/Box/default-box';
import PageButton from 'components/organisms/Pagination/pagebutton';

import { NoticeDto } from 'dto/notice/notice.dto';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

const NoticeView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);

    useEffect(() => {
        noticeViewModel.getNoticeData();
    }, []);

    return (
        <PageContainer>
            <Box marginBottom={96}>
                <LinkWrapper>
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
                {noticeViewModel.noticeList.map((item: NoticeDto) => {
                    return <SearchResults item={item} />;
                })}
            </NoticeWrap>
            <PagingWrap>
                <PageButton length={20} limit={10} />
            </PagingWrap>
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

const PagingWrap = styled.div``;
