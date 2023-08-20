import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import CheckBox from 'components/atoms/CheckBox/checkBox';
import CheckboxWrapper from 'components/atoms/CheckBox/headlesst-checkBox';
import { Input } from 'components/atoms/Input';
import Typography from 'components/atoms/Typograph/default-typography';
import TextArea from 'components/molecules/TextArea/textArea';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { Alert } from 'modules/alert.module';
import { useEffect, useState } from 'react';
import NoticeViewModel from 'viewModel/notice/notice.viewModel';

/**
 * 공지사항 업로드
 */
const NoticeUploadView = () => {
    const noticeViewModel: NoticeViewModel = useViewModel(ViewModelName.NOTICE);

    //변경 사항 감지
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    //비공개 여부 체크 상태
    const [checked, setChecked] = useState<boolean>(false);
    const handleChangeChecked = () => {
        checked ? setChecked(false) : setChecked(true);
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

    //저장하기 버튼 클릭
    const handleClickSave = (e) => {
        if (title === '' || content === '') {
            Alert.alert('제목 또는 내용이 비어있습니다');
            return false;
        }
        const date = new Date();
        const detail = {
            id: `${noticeViewModel.list.length}`,
            title: title,
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            content: content,
            viewCount: '0',
            isHide: `${checked}`,
        };
        console.log(detail);
        noticeViewModel.insertList(detail);
    };

    return (
        <PageContainer>
            <HeaderWrap>
                <Typography
                    variant="H3"
                    textAlign="left"
                    color="primary"
                    style={{ width: `90%`, marginRight: `auto` }}
                >
                    공지사항
                </Typography>
                {/* <CheckboxWrapper.Label>
                    <CheckboxWrapper.Checkbox
                        id="hide"
                        variant="primary"
                        isChecked={checked}
                        onChange={handleChangeChecked}
                    />
                    비공개
                </CheckboxWrapper.Label> */}

                <CheckBox onChange={handleChangeChecked} label="비공개" />
                <DefaultButton title="저장하기" isPositive={true} onClick={handleClickSave} />
            </HeaderWrap>
            <NoticeWrap>
                <Input
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={handleChangeTitle}
                    style={{ padding: `1.5em 1em`, background: ` ${theme.colors.white}`, width: `100%` }}
                />
            </NoticeWrap>
            <TextArea
                placeholder="공지사항 내용을 알려주세요"
                value={content}
                onChange={handleChangeContent}
            ></TextArea>
        </PageContainer>
    );
};

export default NoticeUploadView;

const HeaderWrap = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
