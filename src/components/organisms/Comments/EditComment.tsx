import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import { Input } from 'components/atoms/Input';
import React, { useState } from 'react';

interface Props {
    comment: string;
    getComment: any;
}

// 수정 혹은 등록을 위한 입력 컴포넌트
const EditComment = ({ comment, getComment }: Props) => {
    const [content, setContent] = useState<string>(comment ?? '');
    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };
    const handleClickContent = () => {
        getComment(content);
    };
    return (
        <EditWrapper>
            <Input value={content} onChange={handleChangeContent} placeholder="댓글을 입력하세요." />
            <DefaultButton title="등록하기" isPositive={true} onClick={handleClickContent}></DefaultButton>
        </EditWrapper>
    );
};

export default EditComment;

const EditWrapper = styled.div`
    display: flex;
    & :first-child {
        flex-grow: 1;
    }
`;
