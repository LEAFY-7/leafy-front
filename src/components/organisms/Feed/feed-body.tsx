import React from 'react';
import Div from '@components/atoms/Div/default-div';

interface Props {
    imgs?: string[];
    title?: string;
    desc?: string;
    tag?: string[];
}

const FeedBody = ({ imgs, title, desc, tag: tagBox = [''] }: Props) => {
    return (
        <Div id="feed_body">
            {/* 슬라이드 */}
            {/* 제목 */}
            {/* 부제목 */}
            {/* 태그 - 옵션 */}
        </Div>
    );
};

export default FeedBody;
