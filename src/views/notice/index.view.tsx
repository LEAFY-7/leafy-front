import Typography from 'components/atoms/Typograph/default-typography';
import NoticeList from 'components/organisms/List/noticeList';
import PageButton from 'components/organisms/Pagination/pagebutton';
import PageContainer from 'components/templates/page-container';

import styled from '@emotion/styled';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import DefaultButton from 'components/atoms/Button/default-button';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect, useState } from 'react';
import { theme } from 'configs/ui.config';
import { NoticeDto } from 'dto/notice/notice.dto';
import { observer } from 'mobx-react';

const NoticeView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);

    useEffect(() => {
        noticeViewModel.getMe();
        noticeViewModel.getList();
    }, []);
    /* 페이지네이션에 필요한 변수들 */
    //1. PageButton에 들어갈 상태 - 현재 페이지를 데려옴
    const [page, setPage] = useState<number>(1);
    //2. 한번에 보여줄 리스트 개수
    let limit = 2;
    //3. 한번에 보여줄 리스트의 시작지점
    const offset = (page - 1) * limit;

    //getMe를 이용해서 등록하기 버튼 분기처리
    const isAdmin = noticeViewModel.me.isAdmin || false;
    return (
        <PageContainer>
            <Linker href={`${pageUrlConfig.notice}`}>
                <HeaderTitle variant="H2" textAlign="center" color="primary">
                    공지사항
                </HeaderTitle>
            </Linker>

            <Menu variant="BODY2" color="white" textAlign="center">
                <NoticeTitle>
                    <span>게시글 번호</span>
                    <Title>제목</Title>
                    <span>조회수</span>
                    <Date>날짜</Date>
                </NoticeTitle>
            </Menu>

            <NoticeWrap>
                {noticeViewModel.list.slice(offset, offset + limit).map((item: NoticeDto) => {
                    return <NoticeList item={item} titleColor="black" />;
                })}
            </NoticeWrap>
            <PageButton limit={limit} target={noticeViewModel.list.length} page={page} setPage={setPage} />
            <div style={{ display: `flex`, marginLeft: `auto` }}>
                {isAdmin && (
                    <Linker href={`${pageUrlConfig.noticeUpload}`}>
                        <DefaultButton title="등록하기" isPositive={true} />
                    </Linker>
                )}
            </div>
        </PageContainer>
    );
};

export default observer(NoticeView);

const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

const HeaderTitle = styled(Typography)`
    width: 100%;
    margin: 16px auto;
`;
const Menu = styled(Typography)`
    width: 100%;
    margin: 16px auto;
`;
const NoticeWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
