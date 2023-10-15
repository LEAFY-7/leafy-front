import React, { useState } from 'react';
import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import { Input } from 'components/atoms/Input';
import Typography from 'components/atoms/Typograph/default-typography';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import QnaViewModel from 'viewModel/qna/qna.viewModel';
import TextArea from 'components/molecules/TextArea/textArea';

/**
 * Qna업로드
 */
const QnaUploadView = () => {
    const qnaViewModel: QnaViewModel = useViewModel(ViewModelName.QNA);

    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
    };
    const handleClickUpload = () => {
        qnaViewModel.insertList({
            title: title,
            contents: contents,
        });
    };
    return (
        <PageContainer>
            <Typography variant="H3" textAlign="center" color="primary" marginBottom={16}>
                QnA
            </Typography>
            <QnaWrap>
                <Input
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={handleChangeTitle}
                    style={{ padding: `1.5em 1em`, background: ` ${theme.colors.white}`, width: `100%` }}
                />
            </QnaWrap>
            <TextArea
                placeholder="질문 내용을 알려주세요"
                value={contents}
                onChange={handleChangeContent}
            ></TextArea>
            <DefaultButton title="등록하기" isPositive={false} onClick={handleClickUpload} />
        </PageContainer>
    );
};

export default QnaUploadView;

const QnaWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
    padding: 1em;
`;
