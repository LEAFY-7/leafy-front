import styled from '@emotion/styled';
import { Input } from 'components/atoms/Input';
import Typography from 'components/atoms/Typograph/default-typography';
import TextArea from 'components/molecules/TextArea/textArea';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';
import DefaultButton from 'components/atoms/Button/default-button';
import { CheckBox } from 'components/atoms/CheckBox/index.styles';
import CheckboxWrapper from 'components/atoms/CheckBox/headlesst-checkBox';

/**
 * 공지사항 수정
 */
const NoticeEditView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);
    const { id } = useParams();

    useEffect(() => {
        noticeViewModel.getDetail(+id);
        noticeViewModel.getMe();
    }, []);

    const offset = noticeViewModel.detail;

    const [text, setText] = useState<string>(offset.title);
    const handleChangeTitle = (e) => {
        setText(e.target.value);
    };

    const [content, setContent] = useState<string>(offset.content);
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    const [check, setCheck] = useState<boolean>(false);
    const handleChangeHideAble = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setCheck(checked);
        console.log(checked);
    };

    //뒤로가기 및 새로고침 이벤트 감지
    const handlePopState = () => {
        const confirmResult = confirm('페이지를 떠나시겠습니까?');
        if (confirmResult) {
            history.go(-1);
        }
    };
    const handleLoad = (e) => {
        e.preventDefault();
        e.returnValue = '';
    };
    useEffect(() => {
        (() => {
            history.pushState(null, '', location.href);
            window.addEventListener('popstate', handlePopState);
            window.addEventListener('beforeunload', handleLoad);
        })();

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('beforeunload', handleLoad);
        };
    }, []);

    return (
        <PageContainer>
            <HeaderWrap>
                <Typography
                    variant="H3"
                    textAlign="left"
                    color="primary"
                    style={{ width: `80%`, marginRight: `auto` }}
                >
                    공지사항
                </Typography>
                <CheckboxWrapper.Checkbox
                    variant="primary"
                    id="hide"
                    isChecked={check}
                    onChange={handleChangeHideAble}
                />
                <CheckboxWrapper.Label>비공개</CheckboxWrapper.Label>
                <DefaultButton title="저장하기" isPositive={true} />
            </HeaderWrap>
            <NoticeWrap>
                <Input
                    value={text}
                    onChange={handleChangeTitle}
                    style={{ padding: `1.5em 1em`, background: ` ${theme.colors.white}` }}
                />
            </NoticeWrap>
            <TextArea value={content} onChange={handleChangeContent}></TextArea>
        </PageContainer>
    );
};

export default NoticeEditView;

const HeaderWrap = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
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
