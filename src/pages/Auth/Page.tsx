import React, { useRef } from 'react';
import SignInForm from './SignInForm';

import Div from '@components/atoms/Div/default-div';
import CircleButton from '@components/atoms/Button/round-button';
import RectangleButton from '@components/atoms/Button/rectangle-button';

const Auth = () => {
    return (
        <>
            <Div id="box" size="lg" isBorder>
                <RectangleButton>사각 버튼</RectangleButton>
                <CircleButton size="xs" isBorder>
                    새 글 작성
                </CircleButton>
                <CircleButton size="sm" isBorder>
                    새 글 작성
                </CircleButton>
                <CircleButton size="md" isBorder>
                    새 글 작성
                </CircleButton>
                <CircleButton size="lg" isBorder>
                    새 글 작성
                </CircleButton>
                <CircleButton size="xl">새 글 작성</CircleButton>
            </Div>
        </>
    );
};

export default Auth;
