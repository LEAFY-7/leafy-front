import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import { Input } from 'components/atoms/Input';
import Typography from 'components/atoms/Typograph/default-typography';
import TextArea from 'components/molecules/TextArea/textArea';
import AlertModal from 'components/organisms/modal/alertModal';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import useBeforeUnload from 'hooks/useBeforeUnload';
import { Alert } from 'modules/alert.module';
import { useEffect, useState } from 'react';

/**
 * 공지사항 업로드
 */
const NoticeUploadView = () => {
    //변경 사항 감지
    const [text, setText] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const handleChangeTitle = (e) => {
        setText(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
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
                    style={{ width: `90%`, marginRight: `auto` }}
                >
                    공지사항
                </Typography>
                <DefaultButton title="저장하기" isPositive={true} />
            </HeaderWrap>
            <NoticeWrap>
                <Input
                    placeholder="제목을 입력해주세요"
                    value={text}
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
