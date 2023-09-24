import React, { useState } from 'react';
import { Comment, Menus } from './Comments.style';
import UserProfile from '../Profile/user-profile';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import { AuthorDto } from 'dto/feed/author.dto';
import { Input } from 'components/atoms/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentDto } from 'dto/feed/comment.dto';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import DefaultButton from 'components/atoms/Button/default-button';

interface Props {
    viewModel: any;
    userData: UserResponseDataDto | AuthorDto;
}

const Comments = ({ viewModel, userData }: Props) => {
    const [moreMenu, setMoreMenu] = useState<boolean>(false);
    const [moreReply, setMoreReply] = useState<boolean>(false);
    const handleClickMore = () => {
        setMoreMenu(!moreMenu);
    };
    const handleMoreReply = () => {
        setMoreReply(!moreReply);
    };
    return (
        <Comment.Wrap>
            <UserProfile data={viewModel.detail.author} style={{ width: '24px', height: '24px' }} />
            <FontAwesomeIcon icon={faEllipsisVertical} onClick={handleClickMore} />
            {moreMenu &&
                (userData.userId === viewModel.detail.author ? (
                    <Menus>
                        <li>삭제하기</li>
                        <li>수정하기</li>
                    </Menus>
                ) : (
                    <Menus>
                        <li>신고하기</li>
                    </Menus>
                ))}
            <Input
                value={viewModel.commentModel.content}
                onChange={viewModel.handleChangeComment}
                placeholder="댓글을 입력하세요."
            >
                <Comment.Button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Comment.Button>
            </Input>
            {viewModel.commentList.length && (
                <DefaultButton title="replies" onClick={handleMoreReply}>
                    {viewModel.commentList.length}개의 답글이 있습니다.
                </DefaultButton>
            )}
            {moreReply &&
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
