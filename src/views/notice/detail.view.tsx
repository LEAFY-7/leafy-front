import styled from '@emotion/styled';
import Box from 'components/atoms/Box/default-box';
import Button from 'components/atoms/Button/button';
import DefaultButton from 'components/atoms/Button/default-button';
import Linker from 'components/atoms/Linker/linker';
import Typography from 'components/atoms/Typograph/default-typography';
import SearchBar from 'components/molecules/Search/searchbar';
import NoticeList from 'components/organisms/List/noticeList';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
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
        noticeViewModel.getDetail(+id);
        noticeViewModel.getMe();
    }, []);
    const offset = noticeViewModel.detail;
    const isAdmin = noticeViewModel.me.isAdmin || false;

    const handleClickDelete = () => {
        noticeViewModel.deleteList(+id);
    };
    return (
        <PageContainer>
            <Linker href={`${pageUrlConfig.notice}`}>
                <Typography variant="H3" textAlign="center" color="primary" marginBottom={16}>
                    공지사항
                </Typography>
            </Linker>
            <NoticeWrap>
                <Typography variant="BODY1" textAlign="center">
                    {offset.title}
                </Typography>
            </NoticeWrap>
            <NoticeContent>{offset.content}</NoticeContent>
            {isAdmin && (
                <div style={{ display: `flex`, marginLeft: `auto`, gap: `16px` }}>
                    <Linker href={`${pageUrlConfig.noticeEdit}/${id}`}>
                        <DefaultButton title="수정하기" isPositive={true} />
                    </Linker>
                    <DefaultButton title="삭제하기" isPositive={false} onClick={handleClickDelete} />
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
    margin: 0 auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
    padding: 1em;
`;
