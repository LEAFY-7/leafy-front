import React, { useState } from 'react';
import { StyledComment } from './Comment.style';
import UserProfile from '../Profile/user-profile';
import EditComment from './EditComment';

// 전체 댓글 및 답글을 추가할 때 쓰는 컴포넌트
const InputComment = ({ userData }) => {
    const [content, setContent] = useState<string>('');
    return (
        <StyledComment.Wrap>
            <div>
                <UserProfile data={userData.userId} style={{ width: '24px', height: '24px' }} />
            </div>
            <EditComment comment={content} getComment={setContent} />
        </StyledComment.Wrap>
    );
};

export default InputComment;
