import { css } from '@emotion/react';
import PageContainer from 'components/templates/page-container';
import Typography from 'components/atoms/Typograph/default-typography';
import Search from 'components/molecules/Search/search';
import SearchResults from 'components/molecules/Search/result';

import { NoticeDto } from 'dto/notice/notice.dto';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';

const NoticeView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);

    useEffect(() => {
        noticeViewModel.getNoticeData();
    }, []);

    return (
        <PageContainer>
            <Typography variant="H2" textAlign="center" color="primary" marginBottom={16}>
                공지사항
            </Typography>
            <Search placeholder="공지 검색" pathname="notice/detail" />
            <NoticeWrap>
                {noticeViewModel.noticeList.map((item: NoticeDto) => {
                    return <SearchResults item={item} />;
                })}
            </NoticeWrap>
        </PageContainer>
    );
};

export default observer(NoticeView);

const NoticeWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;
