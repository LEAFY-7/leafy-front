import styled from '@emotion/styled';
import Box from 'components/atoms/Box/default-box';
import Button from 'components/atoms/Button/button';
import { Input } from 'components/atoms/Input';
import DefaultTextarea from 'components/atoms/Textarea/default-textarea';
import Typography from 'components/atoms/Typograph/default-typography';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import TextArea from 'components/molecules/TextArea/textArea';
import PageContainer from 'components/templates/page-container';
import { theme } from 'configs/ui.config';
import { useState } from 'react';

/**
 * 공지사항 업로드
 */
const NoticeUploadView = () => {
    const [text, setText] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const onChangeTitle = (e) => {
        setText(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
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
                    <Input
                        value={text}
                        onChange={onChangeTitle}
                        style={{ flexGrow: `1`, flexBasis: `400px` }}
                    />
                </ListStyle>
            </NoticeWrap>
            <TextArea value={content} onChange={onChangeContent}></TextArea>
        </PageContainer>
    );
};

export default NoticeUploadView;

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
