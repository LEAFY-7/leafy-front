import React, { useState, useEffect, FormEventHandler } from 'react';

import UserResponseDataDto from 'dto/user/userResponseData.dto';
import { AuthorDto } from 'dto/feed/author.dto';
import { CommentDto } from 'dto/feed/comment.dto';

import UserProfile from '../Profile/user-profile';
import { Input } from 'components/atoms/Input';
import { Comment, Menu, Menus } from './Comments.style';
import DefaultButton from 'components/atoms/Button/default-button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane as PaperPlaneIcon } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical as EllipsisVerticalIcon } from '@fortawesome/free-solid-svg-icons';
import Flex from 'components/atoms/Group/flex';

interface Props {
    viewModel: any;
    handleSubmitComment: FormEventHandler<HTMLButtonElement>;
    userData: UserResponseDataDto | AuthorDto;
}
/**
 * @param viewModel 댓글 컴포넌트를 사용하는 상위 뷰모델
 * @param handleChangeComment 댓글 입력 이벤트
 * @param userData 현 유저데이터
 * **/
const Comments = ({ viewModel, handleSubmitComment, userData }: Props) => {
    const [isMoreMenu, setIsMoreMenu] = useState<boolean>(false);
    const [isMoreReply, setIsMoreReply] = useState<boolean>(false);
    const handleClickMore = () => {
        setIsMoreMenu(!isMoreMenu);
    };
    const handleMoreReply = () => {
        setIsMoreReply(!isMoreReply);
    };

    useEffect(() => {
        viewModel.getCommentList();
    }, [isMoreMenu]);

    return (
        <Comment.Wrap>
            <div>
                <UserProfile data={viewModel.detail.author} style={{ width: '24px', height: '24px' }} />
                <Menu>
                    <FontAwesomeIcon icon={EllipsisVerticalIcon} onClick={handleClickMore} />
                    {isMoreMenu &&
                        (userData.userId === viewModel.detail.userId ? (
                            <Menus>
                                <li>삭제하기</li>
                                <li>수정하기</li>
                            </Menus>
                        ) : (
                            <Menus>
                                <li>신고하기</li>
                            </Menus>
                        ))}
                </Menu>
            </div>
            <Input
                value={viewModel.commentModel.content}
                onChange={viewModel.handleChangeComment}
                placeholder="댓글을 입력하세요."
            >
                <Comment.Button onSubmit={handleSubmitComment}>
                    <FontAwesomeIcon icon={PaperPlaneIcon} />
                </Comment.Button>
            </Input>

            <DefaultButton title="replies" onClick={handleMoreReply}>
                {viewModel.commentList.length}개의 답글이 있습니다.
            </DefaultButton>
            {isMoreReply &&
                viewModel.commentList.map((comment: CommentDto, key: number) => {
                    return (
                        <div key={`comment_${key}`}>
                            <UserProfile data={comment.author} style={{ width: '24px', height: '24px' }} />
                            <p>{comment.content}</p>
                        </div>
                    );
                })}
        </Comment.Wrap>
    );
};

export default Comments;
