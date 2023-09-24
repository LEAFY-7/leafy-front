import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import Linker from 'components/atoms/Linker/linker';
import Typography from 'components/atoms/Typograph/default-typography';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { useParams } from 'react-router-dom';
import QnaViewModel from 'viewModel/qna/qna.viewModel';

/**
 * Qna 상세
 */
const QnaDetailView = () => {
    const { id } = useParams();
    const qnaViewModel: QnaViewModel = useViewModel(ViewModelName.QNA);
    const handleClickDelete = () => {
        qnaViewModel.deleteList(+id);
    };
    const detail = qnaViewModel.detail;
    return (
        <PageContainer>
            <Linker href={`${pageUrlConfig.notice}`}>
                <Typography variant="H3" textAlign="center" color="primary" marginBottom={16}>
                    공지사항
                </Typography>
            </Linker>
            <QnaWrap>
                <Typography variant="BODY1" textAlign="center">
                    {detail.title}
                </Typography>
            </QnaWrap>
            <QnaContent>{detail.contents}</QnaContent>
            <div style={{ display: `flex`, marginLeft: `auto`, gap: `16px` }}>
                <DefaultButton
                    title="수정하기"
                    isPositive={true}
                    onClick={() => {
                        window.location.href = `${pageUrlConfig.qnaUpload}/${id}`;
                    }}
                />
                <DefaultButton title="삭제하기" isPositive={false} onClick={handleClickDelete} />
            </div>
        </PageContainer>
    );
};

export default QnaDetailView;

const QnaContent = styled.div`
    padding: 16px;
    margin: 8px auto;
    border-radius: 12px;
    background-color: ${theme.colors.white};
    box-shadow: 0 5px 10px 0 ${theme.colors.lgrey};
`;

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
