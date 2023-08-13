import styled from '@emotion/styled';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'components/atoms/Input';
import Feed from 'components/organisms/Feed/feed';
import FeedButtons from 'components/organisms/Feed/feedButtons';
import FloatingInfomation from 'components/organisms/Feed/floatingInfomation';
import UserProfile from 'components/organisms/Profile/user-profile';
import AlertModal from 'components/organisms/modal/alertModal';
import PageContainer from 'components/templates/page-container';
import { CommentDto } from 'dto/feed/comment.dto';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeedViewModel from 'viewModel/feed/feed.viewModel';

/**
 * 피드 상세보기
 */
const FeedDetailView = () => {
    const feedViewModel: FeedViewModel = useViewModel(ViewModelName.FEED);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        feedViewModel.getDetail(+id);
    }, []);

    const handleClickModalClose = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <PageContainer style={{ paddingTop: '80px' }}>
            <button onClick={handleClickModalClose}>modal</button>
            <AlertModal
                handleClickClose={handleClickModalClose}
                handleClickConfirm={() => {}}
                isOpen={isOpenModal}
            >
                <p>children123123</p>
                <p>children123123</p>
            </AlertModal>
            <FeedWrap>
                <Feed data={feedViewModel.detail} isDetail />
                <Content.Title>{feedViewModel.detail.title}</Content.Title>
                <FloatingInfomation />
            </FeedWrap>
            <Content.Desc>{feedViewModel.detail.content}</Content.Desc>
            <FeedButtons />
            <Comment.Wrap>
                <UserProfile data={feedViewModel.detail.author} style={{ width: '24px', height: '24px' }} />
                <Input
                    value={feedViewModel.commentModel.content}
                    onChange={feedViewModel.handleChangeComment}
                    placeholder="댓글을 입력하세요."
                >
                    <Comment.Button>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Comment.Button>
                </Input>
                {feedViewModel.commentList.map((comment: CommentDto, key: number) => {
                    return (
                        <div key={`comment_${key}`}>
                            <UserProfile data={comment.author} style={{ width: '24px', height: '24px' }} />
                            <p>{comment.content}</p>
                        </div>
                    );
                })}
            </Comment.Wrap>
        </PageContainer>
    );
};

export default observer(FeedDetailView);

const FeedWrap = styled.div`
    position: Relative;
    width: 100%;
    gap: 16px;
`;

const Content = {
    Title: styled.h4`
        width: 100%;
        font-family: SUIT;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        margin: 0;

        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Desc: styled.p`
        font-family: SUIT;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 2;
    `,
    IconWrap: styled.div`
        margin: 0;
        margin-left: auto;
        width: 200px;
        height: 24px;
        display: flex;
        align-items: center;
        gap: 16px;

        & div {
            display: flex;
            align-items: center;
            gap: 8px;
            & p {
                height: 18px;
            }
        }

        & * {
            font-size: 14px;
        }
    `,
    Icon: styled.div`
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: red;
    `,
};

const Comment = {
    Wrap: styled.div`
        width: 100%;
        background: #fafafa;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    Button: styled.button`
        width: 40px;
        height: 40px;
        border-radius: 8px;
        transition: all 0.4s ease;

        border: 2px solid #d9d9d9;

        &:hover {
            background: #d9d9d9;
        }
    `,
};
