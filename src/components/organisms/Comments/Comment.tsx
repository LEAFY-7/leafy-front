import React, { useState, useEffect } from 'react';
import UserProfile from '../Profile/user-profile';
import { StyledComment, MenuList } from './Comment.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane as PaperPlaneIcon } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical as EllipsisVerticalIcon } from '@fortawesome/free-solid-svg-icons';
import EditComment from './EditComment';

//작성한 댓글을 보여주는 컴포넌트, 수정 시 해당 컴포넌트 내에서 관리
const Comment = ({ userData, commentData }) => {
    const [isMoreMenu, setIsMoreMenu] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [content, setContent] = useState<string>(commentData.content);
    useEffect(() => {
        setIsEdit(false);
        setIsMoreMenu(!isEdit);
    }, [content]);

    const handleChangeContent = () => {
        setIsEdit(true);
        setIsMoreMenu(!isEdit);
    };
    const handleClickDelete = () => {};
    const handleClickReport = () => {};
    return (
        <StyledComment.Wrap key={`comment_${commentData.id}`}>
            <div>
                <UserProfile data={commentData.author} style={{ width: '24px', height: '24px' }} />
                <MenuList.Wrap>
                    <FontAwesomeIcon icon={EllipsisVerticalIcon} onClick={() => setIsMoreMenu(!isMoreMenu)} />
                    {isMoreMenu &&
                        (userData.userId === commentData.userId ? (
                            <MenuList.Menu>
                                <MenuList.List onClick={handleChangeContent}>수정하기</MenuList.List>
                                <MenuList.List onClick={handleClickDelete}>삭제하기</MenuList.List>
                            </MenuList.Menu>
                        ) : (
                            <MenuList.Menu>
                                <MenuList.List onClick={handleClickReport}>신고하기</MenuList.List>
                            </MenuList.Menu>
                        ))}
                </MenuList.Wrap>
            </div>
            {isEdit ? (
                <p>{commentData.content}</p>
            ) : (
                <EditComment comment={content} getComment={setContent} />
            )}
        </StyledComment.Wrap>
    );
};

export default Comment;
