import DefaultButton from 'components/atoms/Button/default-button';
import TextArea from 'components/molecules/TextArea/textArea';
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
        <>
            <div>
                <TextArea value={content} onChange={handleChangeContent}></TextArea>
            </div>
            <DefaultButton title="등록하기" isPositive={true} onClick={handleClickContent}></DefaultButton>
        </>
    );
};

export default EditComment;
