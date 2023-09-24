import React from 'react';
import Comment from './Comments.style';
import UserProfile from '../Profile/user-profile';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import { AuthorDto } from 'dto/feed/author.dto';
import { Input } from 'components/atoms/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentDto } from 'dto/feed/comment.dto';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

interface Props {
    viewModel: any;
    userData: UserResponseDataDto | AuthorDto;
}

const Comments = ({ viewModel, userData }: Props) => {
    return (
        <Comment.Wrap>
            <UserProfile data={viewModel.detail.author} style={{ width: '24px', height: '24px' }} />
            <Input
                value={viewModel.commentModel.content}
                onChange={viewModel.handleChangeComment}
                placeholder="댓글을 입력하세요."
            >
                <Comment.Button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Comment.Button>
            </Input>
            {viewModel.commentList.map((comment: CommentDto, key: number) => {
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
