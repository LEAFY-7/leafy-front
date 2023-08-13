import styled from '@emotion/styled';
import Box from 'components/atoms/Box/default-box';
import { Input } from 'components/atoms/Input';
import Typography from 'components/atoms/Typograph/default-typography';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import Button from 'components/atoms/Button/button';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import TextField from 'components/molecules/TextField/default-textField';
import Flex from 'components/atoms/Group/flex';

/**
 * 공지사항 수정
 */
const NoticeEditView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);
    const { id } = useParams();

    useEffect(() => {
        noticeViewModel.getNoticeDetail(id);
        noticeViewModel.getMe();
    }, []);

    const offset = noticeViewModel.detail;

    //수정 후 저장하기 외의 페이지 이동 시 확인 모달 띄우기
    const [confirm, setConfirm] = useState<boolean>(false);

    return (
        <PageContainer>
            <Box
                style={{
                    display: `flex`,
                    margin: `32px 0`,
                    flexShrink: `0`,
                }}
            >
                <Typography
                    variant="H2"
                    textAlign="center"
                    color="primary"
                    style={{ width: `90%`, marginRight: `auto` }}
                >
                    공지사항
                </Typography>
                <Button
                    variant="primary"
                    state="default"
                    text="저장하기"
                    size="l"
                    type="button"
                    showIcon={false}
                    showText={true}
                />
            </Box>
            <NoticeWrap>
                <ListStyle variant="BODY2" textAlign="center">
                    <span>{offset.id}</span>
                    <Input value={offset.title} style={{ flexGrow: `1`, flexBasis: `400px` }} />
                    <Count>{offset.viewCount}</Count>
                    <Date>{offset.date}</Date>
                </ListStyle>
            </NoticeWrap>
            <TextAreaStyle>{offset.content}</TextAreaStyle>
        </PageContainer>
    );
};

export default NoticeEditView;

const NoticeWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
    margin-bottom: 16px;
`;

const ListStyle = styled(Typography)`
    border-radius: 12px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 1em;
    color: ${theme.colors.grey};
    flex-shrink: 0;
`;
const Count = styled.span`
    min-width: 50px;
`;
const Date = styled.span`
    min-width: 130px;
`;

const TextAreaStyle = styled.textarea`
    resize: none;
    width: 100%;
    height: 456px;
    background-color: ${theme.colors.white};
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;
